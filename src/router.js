import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    props: true,
    children: [],
    component: () => import('@/views/Pricing.vue')
  },
  {
    path: '/checkout',
    component: () => import('@/views/Checkout.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/tokens',
    component: () => import('@/views/Tokens.vue')
  },
  {
    path: '/authorize-signup',
    component: () => import('@/views/AuthorizeSignup.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/AuthorizeLogin.vue')
  },
  {
    path: '/logout',
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '/roadmap',
    component: () => import('@/views/Roadmap.vue')
  },
  {
    path: '/release-log',
    component: () => import('@/views/ReleaseLog.vue')
  },
  {
    path: '/privacy-policy',
    component: () => import('@/views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-service',
    component: () => import('@/views/TermsOfService.vue')
  },
  {
    path: '/api-documentation',
    component: () => import('@/views/API.vue')
  },
  {
    path: '/credits',
    component: () => import('@/views/Credits.vue')
  },
  {
    path: '/market',
    children: [
      {
        path: '',
        component: () => import('@/views/Market.vue'),
        props: true
      },
      {
        path: ':category',
        component: () => import('@/views/Market.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?',
        component: () => import('@/views/MarketProduct.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout',
        component: () => import('@/views/shop/Checkout.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/authenticate',
        component: () => import('@/views/AuthorizeCheckout.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/success',
        component: () => import('@/views/shop/Success.vue'),
        props: true
      },
      {
        path: ':category/:slug/:version?/checkout/cancel',
        component: () => import('@/views/shop/Cancel.vue'),
        props: true
      },
      {
        path: 'orders',
        component: () => import('@/views/shop/Orders.vue')
      }
    ]
  },
  {
    path: '/signup',
    children: [
      {
        path: 'checkout',
        component: () => import('@/views/signup/Checkout.vue')
      },
      {
        path: 'checkout/success',
        component: () => import('@/views/signup/Success.vue')
      },
      {
        path: 'checkout/cancel',
        component: () => import('@/views/signup/Cancel.vue')
      }
    ]
  },
  {
    // The Features section: nine product pages (src/views/features). The addresses of the older docs-style
    // pages go to the page that now tells of the same thing, so links and search rankings carry over.
    path: '/features',
    children: [
      { path: '', name: 'Features', component: () => import('@/views/features/Overview.vue') },
      { path: 'views', component: () => import('@/views/features/Views.vue') },
      { path: 'learn', component: () => import('@/views/features/Learn.vue') },
      { path: 'design', component: () => import('@/views/features/Design.vue') },
      { path: 'code', component: () => import('@/views/features/Code.vue') },
      { path: 'ai', component: () => import('@/views/features/Ai.vue') },
      { path: 'templates', component: () => import('@/views/features/Templates.vue') },
      { path: 'publish', component: () => import('@/views/features/Publish.vue') },
      { path: 'teams', component: () => import('@/views/features/Teams.vue') },
      // the older addresses
      { path: 'search-engine-optimalization', redirect: '/features/publish' },
      { path: 'market', redirect: '/features/templates' },
      { path: 'git', redirect: '/features/code' },
      { path: 'projects', redirect: '/features/teams' },
      { path: 'launch/:rest(.*)*', redirect: '/features/publish' },
      { path: 'code/:rest(.+)', redirect: '/features/code' },
      { path: 'templating/views', redirect: '/features/templates' },
      { path: 'templating/components', redirect: '/features/templates' },
      { path: 'templating/:rest(.*)*', redirect: '/features/design' },
      { path: 'template/views', redirect: '/features/templates' },
      { path: 'template/components', redirect: '/features/templates' },
      { path: 'template/:rest(.*)*', redirect: '/features/design' },
      { path: 'transform/:rest(.*)*', redirect: '/features/design' },
      { path: 'control/:rest(.*)*', redirect: '/features/design' },
      { path: 'drop/:rest(.*)*', redirect: '/features/design' },
      { path: ':rest(.*)*', redirect: '/features' }
    ]
  },
  {
    path: '/:catchall(.*)',
    component: () => import('@/views/NotFound.vue'),
    props: true,
    name: 'NotFound'
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  }
})
export default router
