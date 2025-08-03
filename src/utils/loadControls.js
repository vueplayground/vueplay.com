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
	let watchers = ``
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
			show: ${analyze?.analyze?.props?.length > 5 ? 'false' : 'true'},
			name: '${prop.name}',
			value: undefined, 
			component: this.${comp},
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
		watchers += `'elems.${prop.name}.value'(value) {\n`
		watchers += `window.parent.postMessage({ key: '${prop.name}', value }, '*')\n`
		watchers += `},\n`
	}
	elements += `}`;
	const controlBlob = controls.find(c => c.control === 'control');
	const content = `
		<!doctype html>
		<html>
		<head>
			<${'style'}>
			textarea, input, select {
				background-color: white;
			}
			</${'style'}>
			<${'script'} type="importmap">
			{
				"imports": {
					"${vueName}": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"
				}
			}
			</${'script'}>
			<${'script'} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${'script'}>
			<${'script'} type="module">
			import ${'{ createApp, computed, ref }'} from '${vueName}'
			import App from '${componentURL}'
			import Control from '${controlBlob.blob}'

			${imports}

			const Root = {
				inject: ['theme', 'breakpoint', 'state'],
				components: { App, Control${components} },
				data: () => ({
					filter: '',
					elems: null,
					elemsOriginal: null,
					content: '',
					parents: {},
					children: [],
					${components.replace(',', '')}
				}),
				created() {
					this.elems = ${elements}
					this.elemsOriginal = ${elements}
				},
				computed: {
					elements() {
						let arr = []
						if (!this.elems) return arr
						for (const key of Object.keys(this.elems)) {
							const elem = this.elems[key]
							if (!this.filter || elem?.name?.toLowerCase().includes(this.filter?.toLowerCase())) {
								arr.push(elem)
							}
						}
						return arr
					}
				},
				watch: {
					${watchers}
				},
				template: \`
					<div style="width: 100%; height: 100%; overflow: auto; display: inline-flex; flex-direction: column">
						<div :style="{
							backgroundColor: theme !== 'dark' ? '#E8EDF2' : '#070A0D',
							color: theme !== 'dark' ? '#000' : '#fff'
						}" style="padding: 0 5px 10px; display: block; position: sticky; top: 0px; z-index:1000">
							<input v-model="filter" placeholder="Filter props ..." :style="{backgroundColor: theme === 'dark' ? '#242C33' : '#fff'}" style="width: 100%; height: 40px; padding: 10px;border-radius:4px"/>
						</div>
						<div style="padding-top: 0px;z-index:999;">
							<div style="display:block;" v-for="element in elements" :style="{marginBottom: (element.show || filter) ? '20px' : '5px'}">
								<label
									@click="element.show = !element.show"
									:style="{
										backgroundColor: theme === 'dark' ? '#2A3037' : '#dee6ef',
										color: theme !== 'dark' ? '#000' : '#fff'
									}"
									style="cursor: pointer; margin-left: 5px; font-size: 14px; display: block; width: calc(100% - 10px); padding: 5px; border-radius: 4px; text-transform: capitalize; font-weight: 500"
								>
									{{element.name}}
									<svg :style="{transform: 'rotate(' + (element.show || filter ? 90 : 0) + 'deg)'}" style="transition: all .3s linear; width: 15px; float: right; margin-top: 3px;" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M96 220a12 12 0 0 1-8.485-20.485L159.029 128 87.515 56.485a12 12 0 0 1 16.97-16.97l80 80a12 12 0 0 1 0 16.97l-80 80A11.96 11.96 0 0 1 96 220"/></svg>
								</label>
								<Control
									v-if="element.show || filter"
									:component="element.component"
									:options="element.options"
									:themes="element.themes"
									:breakpoints="element.breakpoints"
									:states="element.states"
									:unit="element.unit"
									:placeholder="element.placeholder"
									:type="element.type"
									:min="element.min"
									:max="element.max"
									:args="element.args"
									v-model="element.value"
								/>
							</div>
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
				themeReceived.value = event.data.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
				if (themeReceived.value !== theme.value) {
					theme.value = themeReceived.value
				}
			})

			app.provide('theme', computed(() => theme.value))
			app.provide('state', computed(() => state.value))
			app.provide('breakpoint', computed(() => breakpoint.value))
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