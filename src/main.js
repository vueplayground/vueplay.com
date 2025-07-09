import {
    createApp,
    ref,
    computed,
    watch
} from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import { VueHeadMixin, createUnhead } from '@unhead/vue'
import feathers from '@feathersjs/client'
import sio from 'socket.io-client'
import '@/index.css'

const isServer = typeof window === 'undefined'
const isDarkMode = !isServer && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const account = ref()
const app = createApp(App)
const head = createUnhead()
const currentTheme = isServer ? global?.theme : localStorage.getItem('theme')
const theme = ref(currentTheme || (isDarkMode ? 'dark' : 'light'))
const baseMethods = ['get', 'find', 'create', 'patch', 'update', 'remove']

const auth = feathers()
const manager = feathers()
const market = feathers()

let authClient = null
let managerClient = null
let marketClient = null

if (!isServer) {
    const authSocket = sio('https://auth.vueplay.io', { transports: ['websocket', 'polling'] })
    const managerSocket = sio('https://manager.vueplay.io', { transports: ['websocket', 'polling'] })
    const marketSocket = sio('https://market.vueplay.io', { transports: ['websocket', 'polling'] })
    authClient = feathers.socketio(authSocket)
    managerClient = feathers.socketio(managerSocket)
    marketClient = feathers.socketio(marketSocket)
} else {
    const restClient = (await import('./rest-client.js')).default
    authClient = restClient('https://auth.vueplay.io').fetch(fetch)
    managerClient = restClient('https://manager.vueplay.io').fetch(fetch)
    marketClient = restClient('https://market.vueplay.io').fetch(fetch)
}

auth.configure(authClient)
manager.configure(managerClient)
market.configure(marketClient)

auth.configure(feathers.authentication({ storage: isServer ? undefined : window.localStorage }))
manager.configure(feathers.authentication({ storage: isServer ? undefined : window.localStorage }))
market.configure(feathers.authentication({ storage: isServer ? undefined : window.localStorage }))

// Add services
auth.use('users', authClient.service('users'), { methods: [...baseMethods, 'count'] })
auth.use('access_groups', authClient.service('access_groups'), { methods: [...baseMethods, 'available', 'count'] })

manager.use('application_origins', managerClient.service('application_origins'), { methods: [...baseMethods, 'verifyDNSRecord', 'certify'] })
manager.use('applications', managerClient.service('applications'), {
  methods: [
    ...baseMethods,
    'publishVersion',
    'publishApp',
    'unpublishApp',
    'certify',
    'count',
    'available',
    'launch',
    'rollback'
  ]
})

market.use('accounts', marketClient.service('accounts'), { methods: [...baseMethods, 'available'] })
market.use('account_payment_providers', marketClient.service('account_payment_providers'), {
  methods: [...baseMethods, 'attach', 'onboard']
})
market.use('subscriptions', marketClient.service('subscriptions'), { methods: [...baseMethods, 'unsubscribe'] })
market.use('payments', marketClient.service('payments'), { methods: [...baseMethods, 'refund'] })
market.use('orders', marketClient.service('orders'), { methods: [...baseMethods, 'checkout', 'verify', 'cancel'] })

let boot = async () => {
    try {
        if (typeof document !== 'undefined') {
            account.value = await auth.reAuthenticate()
            await manager.authentication.setAccessToken(account.value.accessToken)
            await market.authentication.setAccessToken(account.value.accessToken)
            await manager.reAuthenticate(true)
            await market.reAuthenticate(true)
            document.cookie = `accessToken=${account.value.accessToken}; domain=${location.hostname}; path=/; Secure; SameSite=None`
        } else if (global?.accessToken) {
            await auth.authentication.setAccessToken(global.accessToken)
            await manager.authentication.setAccessToken(global.accessToken)
            await market.authentication.setAccessToken(global.accessToken)
            account.value = await auth.authenticate({ strategy: 'jwt', accessToken: global.accessToken })
            await manager.authenticate({ strategy: 'jwt', accessToken: global.accessToken })
            await market.authenticate({ strategy: 'jwt', accessToken: global.accessToken })
        }
    } catch (e) {
        console.log('Could not authenticate', e)
    }

    let timeout = null
    watch(account, async (newValue) => {

        if (timeout) {
            clearTimeout(timeout)
            timeout = null
        }

        if (!newValue) return

        const expires = newValue.authentication.payload.exp
        const now = (Date.now() / 1000)

        let lifetime = (expires - now) * 1000

        if (lifetime > 2147483647) lifetime = 2147483647
        if (lifetime > 0) lifetime -= lifetime / 2

        lifetime = Math.round(lifetime)
        
        if (lifetime > 0) {
            console.log(`Token will be refreshed in ${lifetime} milliseconds ...`)
            timeout = setTimeout(refresh, lifetime)
        } else {
            console.log('Authentication token has expired, logging out ...')
            logout()
        }
    })
    const refresh = async () => {
        try {
            console.log('Trying to refresh token for account', account.value)
            const result = await fetch(auth.io.io.uri + '/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${account.value?.accessToken}`
                },
                body: JSON.stringify({
                    strategy: 'jwt',
                    accessToken: account.value?.accessToken,
                    refreshToken: account.value?.refreshToken
                })
            })
            const json = await result.json()
            console.log('refresh token result', json)
            const accessToken = json?.accessToken
            try {
                await auth.authentication.setAccessToken(accessToken)
                await manager.authentication.setAccessToken(accessToken)
                await market.authentication.setAccessToken(accessToken)
                await manager.reAuthenticate(true)
                await market.reAuthenticate(true)
                if (typeof document !== 'undefined') {
                    document.cookie = `accessToken=${accessToken}; domain=${location.hostname}; path=/; Secure; SameSite=None`
                }
                account.value = await auth.reAuthenticate(true)
                console.log(`Token successfully refreshed!`, account.value)
            } catch(e) {
                console.log(`Could not refresh token: ${e.message}`)
                console.log(`Logging out ...`)
                logout()
            }
        } catch(e) {
            console.log(`Could not refresh token: ${e.message}`)
            logout()
        }
    }
    const logout = async () => {
        console.log('Logging out ...')
        await auth.logout()
        await manager.logout()
        await market.logout()
        account.value = null
        document.cookie = `accessToken=; domain=${location.hostname}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        console.log('Successfully logged out!')
    }

    app.mixin(VueHeadMixin)
    app.use(head)
    app.use(router)
    app.provide('auth', auth)
    app.provide('manager', manager)
    app.provide('market', market)
    app.provide('account', computed(() => account?.value))
    app.provide('login', async () => {
        try {
            account.value = await auth.reAuthenticate()
            await manager.authentication.setAccessToken(account.value.accessToken)
            await market.authentication.setAccessToken(account.value.accessToken)
            await manager.reAuthenticate(true)
            await market.reAuthenticate(true)
            if (typeof document !== 'undefined') {
                document.cookie = `accessToken=${account.value.accessToken}; domain=${location.hostname}; path=/; Secure; SameSite=None`
            }
        } catch (e) {}
        return account.value
    })
    app.provide('refresh', refresh)
    app.provide('logout', logout)
    app.provide('theme', computed(() => theme.value))
    app.provide('updateTheme', (value) => {
        if (value) {
            document.cookie = `theme=${value}; domain=${location.hostname}; path=/; Secure; SameSite=None`
            localStorage.setItem('theme', value)
        } else {
            document.cookie = `theme=; domain=${location.hostname}; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
            localStorage.removeItem('theme')
        }
        theme.value = value
        if (typeof vpTheme !== 'undefined') vpTheme.value = value
    })
    app.mount('#app')
}

boot()