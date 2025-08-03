export default async ({
	scope,
	analyze,
	controls,
	vueName
}) => {
	let imports = ``;
	let components = ``;
	let slots = ``;
	let slotWatchers = ``;
	for (const slot of analyze?.analyze?.slots || []) {
		slots += `'${slot}': '',`;
		slotWatchers += `
			'slots.${slot}'() {
				this.slotsHandler()
			},
		`;
	}
	slots = '{' + slots + '}';
	for (const control of controls) {
		if (control.control !== 'control' && control?.blob) {
			imports += `import ${control.control}Component from '${control.blob}'\n`;
			components += `, ${control.control}Component`;
		}
	}
	for (const prop of analyze?.analyze?.props?.filter(p => p?.hidden !== true && p?.hidden !== 'true') || []) {
		let comp = controls.some(c => c.control === prop.control && c.blob) ? `${prop.control}Component` : `null`;
		if (comp === `null`) {
			comp = controls.some(c => c.control === 'boolean' && c.blob && prop.type === 'Boolean') ? `booleanComponent` : `null`;
		}
		let def = prop.default;
		let type = typeof prop.type === 'string' ? prop.type : ''
		const normalizedType = (type || typeof def || '')
			.toLowerCase();
		switch (normalizedType) {
			case 'string':
				def = typeof def === 'string' ? `'${def}'` : def != null ? `'${String(def)}'` : null;
				break;
			case 'number':
				def = !isNaN(Number(def)) ? Number(def) : null;
				break;
			case 'boolean':
				if (typeof def === 'boolean') {} else if (def === 'true') {
					def = true;
				} else if (def === 'false') {
					def = false;
				} else {
					def = null;
				}
				break;
			case 'object':
				def = typeof def === 'object' && def !== null ? JSON.stringify(def) : null;
				break;
			case 'bigint':
				try {
					def = BigInt(def);
				} catch {
					def = null;
				}
				break;
			case 'undefined':
				def = undefined;
				break;
			default:
				def = null;
		}
	}
	const content = `
		<!doctype html>
		<html>
		<head>
			<${'script'} type="importmap">
			{
				"imports": {
					"${vueName}": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"
				}
			}
			</${'script'}>
			<${'script'} type="module">
			import ${'{ createApp, computed, ref }'} from '${vueName}'
			import parser from 'https://cdn.jsdelivr.net/npm/html-parse-stringify-multiline@3.0.2/+esm'

			${imports}

			const Root = {
				inject: ['theme', 'breakpoint', 'state'],
				components: { boxComponent },
				data: () => ({
					slot: '',
					slots: ${slots},
					content: '',
					parents: {},
					children: [],
					${components.replace(',', '')}
				}),
				created() {
					if (typeof this.slots.default !== 'undefined') this.slot = 'default'
				},
				watch: {
					${slotWatchers}
				},
				computed: {
					compose() {
						return 'Compose HTML to preview slot "' + this.slot + '"'
					},
					slotKeys() {
						let keys = Object.keys(this.slots)
						if (keys.includes('default')) {
							keys = keys.filter(s => s !== 'default')
							keys.unshift('default')
						}
						return keys
					}
				},
				methods: {
					slotsHandler() {
						this.parents = {}
						this.content = ''
						for (const key of Object.keys(this.slots)) {
							const value = this.slots[key]
							if (value) {
								try {
									const children = []
									for (const child of parser.parse(value)) {
										if (child?.type === 'tag') {
											children.push({
												type: 'tag',
												name: child.name,
												attrs: child.attrs || {},
												source: child.children?.length ? parser.stringify(child.children) : ''
											})
										} else if (child.type === 'text') {
											children.push({ type: 'text', source: child.content })
										}
									}
									this.parents[key] = { children }
								} catch(e) {
									console.log('Could not parse html', e)
								}
								if (key !== 'default') {
									this.content += '\\n<template #' + key + '>\\n' + value + '\\n</template>\\n'
								} else {
									this.content += value
								}
							}
						}
						window.parent.postMessage({ parents: JSON.stringify(this.parents), content: this.content }, '*')
					}
				},
				template: \`
					<div :style="{ color: theme !== 'dark' ? '#000' : '#fff' }" style="height: 100%; width: 100%" v-if="Object.keys(slots)?.length && slot">
						<textarea
							v-model="slots[slot]"
							:style="{
								backgroundColor: theme === 'dark' ? '#242C33' : '#fff', color: theme !== 'dark' ? '#242C33' : '#fff',
								bottom: Object.keys(slots).length > 1 ? '50px' : '0px'
							}"
							:placeholder="compose"
							style="position: absolute; box-sizing: border-box; top: 0px; padding: 20px; width: 100%; resize: none; border: none; border-radius: 4px"
						/>
						<div style="position: absolute; bottom: 0px; display:flex; width: 100%; height: 40px;" v-if="Object.keys(slots).length > 1">
							<boxComponent
								backgroundColor="{\\\`default\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`#F3F6F8\\\`,\\\`dark\\\`:\\\`#242C33\\\`}},\\\`hover\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`#fff\\\`,\\\`dark\\\`:\\\`#000\\\`}}}"
								style="transition:all .3s linear;cursor:pointer!important"
								display="{\\\`default\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`inline-block\\\`}}}"
								padding="{\\\`default\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`0px\\\`}}}"
								marginRight="{\\\`default\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`5px\\\`}}}"
								borderRadius="{\\\`default\\\`:{\\\`xs\\\`:{\\\`light\\\`:\\\`6px\\\`}}}"
								v-for="key in slotKeys"
							>
								<button
									@click="slot = key"
									style="border:none;padding:5px 10px;cursor:pointer!important;height:40px;"
									title="Select slot"
									:style="{
										backgroundColor: key === slot ? (theme === 'dark' ? '#3c4954' : 'rgb(215 224 230)') : 'transparent'
									}"
								>
									#{{key}}
								</button>
							</boxComponent>
						</div>
					</div>
				\`
			}
			const app = createApp(Root)
			const theme = ref('${scope.theme}')
			const state = ref('default')
			const breakpoint = ref('')
			const themeReceived = ref('${scope.theme}')

			window.addEventListener('message', event => {
				if (event.data?.theme) {
					themeReceived.value = event.data.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
					if (themeReceived.value !== theme?.value) {
						theme.value = themeReceived?.value
					}
				}
			})

			app.provide('theme', computed(() => theme?.value))
			app.provide('state', computed(() => state?.value))
			app.provide('breakpoint', computed(() => breakpoint?.value))
			app.provide('setTheme', (value) => {
				theme.value = value
				if (typeof vpTheme !== 'undefined') vpTheme.value = value
				window.parent.postMessage({ theme: value }, '*')
			})
			app.provide('setState', (value) => {
				state.value = value
			})
			app.provide('setBreakpoint', (value) => {
				breakpoint.value = value
				if (typeof vpBreakpoint !== 'undefined') vpBreakpoint.value = value
			})
			app.mount('#app')
			</${'script'}>
			<style>
				body {
					color: ${scope.theme === 'dark' ? '#fff' : '#000'};
				}
			</style>
		</head>
		<body>
			<div id="app"></div>
		</body>
		</html>
	`;
	const blob = new Blob([content], {
		type: 'text/html'
	});
	return URL.createObjectURL(blob);
}