export default async ({
	scope,
	analyze,
	controls,
	componentURL,
	vueName
}) => {
	let imports = ``;
	let components = ``;
	let elements = `{`;
	let attributes = ``;
	let slotTemplate = ``;
	for (const slot of analyze?.analyze?.slots || []) {
		slotTemplate += `<template #${slot}><template v-for="node in (parents?.['${slot}']?.children || [])">
				
			<template v-if="node.type === 'text'">
				{{ node.source }}
			</template>

			<component v-else :is="node.name" v-bind="node.attrs" v-html="node.source"/>

		</template></template>`;
	}
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
		elements += `${prop.name}: {
			name: '${prop.name}',
			value: undefined, 
			component: ${comp},
			options: ${prop.options ? JSON.stringify(prop.options) : 'undefined'},
			unit: ${prop.unit ? `'${prop.unit}'` : 'undefined'},
			units: ${prop.units ? JSON.stringify(prop.units) : 'undefined'},
			placeholder: ${prop.placeholder ? `'${prop.placeholder}'` : 'undefined'},
			type: ${prop.type ? `'${prop.type}'` : 'undefined'},
			min: ${prop.min ?? 'undefined'},
			max: ${prop.max ?? 'undefined'},
			default: undefined,
			args: ${prop.args ? JSON.stringify(prop.args) : 'undefined'},
			breakpoints: ${prop.breakpoints ? JSON.stringify(prop.breakpoints) : 'undefined'},
			states: ${prop.states ? JSON.stringify(prop.states) : prop.groups ? JSON.stringify(prop.groups) : 'undefined'},
			themes: ${prop.themes ? JSON.stringify(prop.themes) : 'undefined'},
		},`;
		attributes += ` :${prop.name}="elems.${prop.name}?.value"`;
	}
	elements += `}`;
	const controlBlob = controls.find(c => c.control === 'control');
	const content = `
		<!doctype html>
		<html>
		<head>
			<${'script'} type="importmap">
			{
				"imports": {
					"${vueName}": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js",
    				"vue3-json-viewer": "https://cdn.jsdelivr.net/npm/vue3-json-viewer@2.4.0/+esm"
				}
			}
			</${'script'}>
			<${'script'} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${'script'}>
			<${'script'} type="module">
			import ${'{ createApp, computed, ref }'} from '${vueName}'
			import App from '${componentURL}'
			import Control from '${controlBlob.blob}'
			import beautify from 'https://cdn.jsdelivr.net/npm/js-beautify@1.15.4/+esm'

			${imports}

			if (window.name !== 'modal') {

				const Root = {
					inject: ['theme', 'breakpoint', 'state'],
					components: { App },
					data: () => ({
						elems: ${elements},
						elemsOriginal: ${elements},
						content: '',
						parents: {},
						children: [],
						${components.replace(',', '')},
						displayCode: false,
						displayAnalyze: false,
						analyze: ${JSON.stringify(analyze)}
					}),
					mounted() {
						window.addEventListener('message', this.handleMessage);
					},
					async unmounted() {
						window.removeEventListener('message', this.handleMessage);
					},
					computed: {
						code() {
							try {
								let name = '${scope.component?.slug}'.replace(/[^a-zA-Z]+(.)/g, (m, chr) => chr.toUpperCase()).trim()
								name = name.charAt(0).toUpperCase() + name.substring(1)

								let output = '<' + name
								for (const key of Object.keys(this.elems)) {
									if (this.elems[key]?.value !== this.elemsOriginal[key]?.value && this.elems[key]?.value !== '{}') {
										if (typeof this.elems[key]?.value === 'string') {
											output += ' ' + key + '="' + this.elems[key]?.value + '"'
										} else if (typeof this.elems[key]?.value === 'boolean') {
											output += ' ' + key + '="' + (this.elems[key]?.value ? 'true' : 'false') + '"'
										} else if (typeof this.elems[key]?.value === 'object' && this.elems[key]?.value !== null && this.elems[key]?.value !== {}) {
											output += ' :' + key + '="' + JSON.stringify(this.elems[key].value) + '"'
										} else {
											output += ' :' + key + '="' + this.elems[key]?.value + '"'
										}
									}
								}

								if (this.content) {
									output += '>' + this.content + '</' + name + '>'
								} else {
									output += '/>'
								}

								return beautify.html(output, {
									"indent_size": "1",
									"indent_char": "\\t",
									"max_preserve_newlines": "1",
									"preserve_newlines": true,
									"keep_array_indentation": false,
									"break_chained_methods": true,
									"indent_scripts": "normal",
									"brace_style": "collapse",
									"space_before_conditional": true,
									"unescape_strings": false,
									"jslint_happy": false,
									"end_with_newline": true,
									"wrap_line_length": "0",
									"indent_inner_html": false,
									"comma_first": false,
									"e4x": false,
									"indent_empty_lines": false,
									"wrap-attributes": "force-expand-multiline",
									"wrap-attributes-min-attrs": 2
								})
							} catch(e) {
								return ''
							}
						}
					},
					methods: {
						async handleMessage(event) {
							if (event?.data?.key && this.elems[event.data.key]) {
								this.elems[event.data.key].value = event.data?.value
							} else if (event?.data?.parents) {
								this.parents = JSON.parse(event.data.parents)
								this.content = event.data.content
							} else if (event?.data?.deepCopy) {
								await this.copy()
							} else if (event?.data?.toggleCode) {
								this.displayCode = !this.displayCode
								if (this.displayCode) this.displayAnalyze = false
							} else if (event?.data?.toggleAnalyze) {
								this.displayAnalyze = !this.displayAnalyze
								if (this.displayAnalyze) this.displayCode = false
							}
						},
						async copy(event) {
							try {
								const data = {
									name,
									slug: '${scope.component?.slug}',
									version: '${scope.version || scope.component?.latest_version}',
									source: 'https://manager.vueplay.com/${scope.component?.slug}@${scope.version || scope.component?.latest_version}/esm'
								}
								window.parent.postMessage({
									copy: this.displayAnalyze ? JSON.stringify(this.analyze) : this.code,
									html: '<pre>' + JSON.stringify(data) + '</pre>' + '<code>' + this.code + '</code>'
								}, '*')
							} catch (err) {
								alert('Could not copy to clipboard');
								console.error('Failed to copy text:', err);
							}
						}
					},
					template: \`
						<div
							v-if="elems"
							:style="{
								color: theme !== 'dark' ? '#000' : '#fff',
								backgroundColor: theme === 'dark' ? '#000' : '#fff'
							}"
							style="height: 100%; width: 100%; overflow: auto"
						>
							<pre style="padding: 20px" v-if="displayAnalyze">{{analyze}}</pre>
							<pre style="padding: 20px" v-else-if="displayCode">{{code}}</pre>
							<App ${attributes} v-else-if="!content"/>
							<App ${attributes} v-else>${slotTemplate}</App>
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
			} else {
				window.parent.postMessage({ registerModal: true }, '*')
			}
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