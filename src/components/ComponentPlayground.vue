<template>
  <!-- A component of the Market tried out: drawn in a frame of its own (with the site's colours, and something
       inside it where it holds other parts), its settings beside it, the code to use it as it is set. -->
  <div class="vp-play" :class="{ 'vp-play--code': showCode }">
    <div class="vp-play__main">
      <div class="vp-play__bar">
        <div class="vp-play__group" role="group" aria-label="Width">
          <button v-for="one in WIDTHS" :key="one.id" type="button" :class="{ 'is-on': width === one.id }" :aria-pressed="String(width === one.id)" :title="one.title" @click="width = one.id">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path :d="one.icon" /></svg>
            <span>{{ one.name }}</span>
          </button>
        </div>
        <span class="vp-play__space"></span>
        <button type="button" class="vp-play__btn" :class="{ 'is-on': outline }" :aria-pressed="String(outline)" title="Show the component's edges" @click="outline = !outline">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" stroke-dasharray="3 3" /></svg>
          <span>Edges</span>
        </button>
        <button type="button" class="vp-play__btn" :class="{ 'is-on': showCode }" :aria-pressed="String(showCode)" @click="showCode = !showCode">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" /></svg>
          <span>Code</span>
        </button>
      </div>
      <div class="vp-play__stage" :class="'vp-play__stage--' + width">
        <div v-if="!ready && !failed" class="vp-play__loading"><span class="loader"></span></div>
        <p v-if="failed" class="vp-play__failed">The preview could not be loaded. {{ failed }}</p>
        <iframe
          v-if="frameUrl"
          ref="frame"
          :src="frameUrl"
          :title="'A preview of ' + title"
          :style="{ height: height + 'px' }"
          @load="send"
        ></iframe>
      </div>
      <div v-if="showCode" class="vp-play__code">
        <div class="vp-play__codebar">
          <span>Use it like this, as it is set</span>
          <button type="button" class="vp-btn" @click="copy">{{ copied ? 'Copied' : 'Copy' }}</button>
        </div>
        <pre><code>{{ code }}</code></pre>
      </div>
    </div>

    <aside v-if="props.length" class="vp-play__settings" aria-label="Settings">
      <div class="vp-play__settings-head">
        <b>Settings</b>
        <button type="button" class="vp-play__reset" :disabled="!changed" @click="reset">Reset</button>
      </div>
      <input v-if="props.length > 8" v-model="filter" class="vp-play__filter" type="search" placeholder="Find a setting" aria-label="Find a setting">
      <div class="vp-play__list">
        <div v-for="prop in shown" :key="prop.name" class="vp-play__field" :class="'vp-play__field--' + prop.kind">
          <!-- a yes or no -->
          <label v-if="prop.kind === 'boolean'" class="vp-play__switch">
            <span class="vp-play__label">{{ prop.label }}</span>
            <input type="checkbox" :checked="!!values[prop.name]" @change="set(prop, $event.target.checked)">
            <i aria-hidden="true"></i>
          </label>

          <template v-else>
            <label class="vp-play__label" :for="'vp-play-' + prop.name">{{ prop.label }}</label>

            <!-- one of a list -->
            <select v-if="prop.kind === 'select'" :id="'vp-play-' + prop.name" class="vp-play__input" :value="valueOf(prop)" @change="set(prop, $event.target.value)">
              <option v-for="option in prop.options" :key="option.value" :value="option.value">{{ option.key ?? option.name ?? option.value }}</option>
            </select>

            <!-- a colour -->
            <div v-else-if="prop.kind === 'color'" class="vp-play__color">
              <input type="color" :value="hex(values[prop.name])" :aria-label="prop.label + ', picked'" @input="set(prop, $event.target.value)">
              <input :id="'vp-play-' + prop.name" class="vp-play__input" :value="values[prop.name] || ''" placeholder="As the site" @change="set(prop, $event.target.value)">
            </div>

            <!-- a size: a slider and its number -->
            <div v-else-if="prop.kind === 'slider'" class="vp-play__slider">
              <input type="range" :min="prop.min ?? 0" :max="prop.max ?? 100" :value="number(values[prop.name]) ?? prop.min ?? 0" :aria-label="prop.label" @input="set(prop, $event.target.value + (prop.unit || ''))">
              <span class="vp-play__amount">
                <input :id="'vp-play-' + prop.name" class="vp-play__input" :value="values[prop.name] || ''" :placeholder="'auto'" @change="set(prop, $event.target.value)">
              </span>
            </div>

            <!-- a number -->
            <input v-else-if="prop.kind === 'number'" :id="'vp-play-' + prop.name" class="vp-play__input" type="number" :min="prop.min" :max="prop.max" :value="values[prop.name]" @change="set(prop, $event.target.value === '' ? undefined : Number($event.target.value))">

            <!-- several lines -->
            <textarea v-else-if="prop.kind === 'textarea'" :id="'vp-play-' + prop.name" class="vp-play__input" rows="3" :value="values[prop.name] || ''" @change="set(prop, $event.target.value)"></textarea>

            <!-- a list of items, each with its fields -->
            <div v-else-if="prop.kind === 'list'" class="vp-play__items">
              <details v-for="(item, index) in (values[prop.name] || [])" :key="index" class="vp-play__item">
                <summary>
                  <span>{{ itemName(prop, item, index) }}</span>
                  <button type="button" class="vp-play__x" :aria-label="'Remove ' + itemName(prop, item, index)" @click.prevent="removeItem(prop, index)">×</button>
                </summary>
                <label v-for="field in prop.fields" :key="field.key" class="vp-play__subfield">
                  <span>{{ field.label || field.key }}</span>
                  <select v-if="field.options" class="vp-play__input" :value="item[field.key]" @change="setItem(prop, index, field.key, $event.target.value)">
                    <option v-for="option in field.options" :key="option.value" :value="option.value">{{ option.key ?? option.name ?? option.value }}</option>
                  </select>
                  <input v-else-if="field.control === 'boolean'" type="checkbox" :checked="!!item[field.key]" @change="setItem(prop, index, field.key, $event.target.checked)">
                  <input v-else class="vp-play__input" :type="field.control === 'number' ? 'number' : 'text'" :value="item[field.key] ?? ''" :placeholder="field.placeholder || ''" @change="setItem(prop, index, field.key, field.control === 'number' ? Number($event.target.value) : $event.target.value)">
                </label>
              </details>
              <button type="button" class="vp-play__add" @click="addItem(prop)">+ Add</button>
            </div>

            <!-- words, a picture's address, a link -->
            <input v-else :id="'vp-play-' + prop.name" class="vp-play__input" :value="values[prop.name] ?? ''" :placeholder="prop.placeholder || (prop.kind === 'media' ? 'https://… (a picture)' : '')" @change="set(prop, $event.target.value)">
          </template>
        </div>
        <p v-if="!shown.length" class="vp-play__none">No setting is called that.</p>
      </div>
    </aside>
  </div>
</template>
<script>
// The frame: Vue from a CDN, the component's own build (with "vue" renamed for a protected one), mounted with the
// values it is sent. It tells the page its real starting values (what a list starts with cannot be read from the
// source) and how tall it is.
const frameHtml = ({ componentURL, vueName, slots, dark, inside }) => `<!doctype html>
<html class="${dark ? 'dark' : ''}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="importmap">{ "imports": { "${vueName}": "https://unpkg.com/vue@3.5.13/dist/vue.esm-browser.prod.js" } }<\/script>
<style>
  :root { --vp-primary: #10a37c; --vp-primary-contrast: #fff; --vp-background: #fff; --vp-text: #0d1f1a; --vp-muted: #55666f; --vp-surface: #f2f7f5; --vp-border: #dfe8e5; --vp-radius: 12px; --vp-width: 1100px; --vp-font-heading: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color-scheme: light; }
  .dark { --vp-primary: #2fd3a3; --vp-primary-contrast: #04140f; --vp-background: #0b1110; --vp-text: #eef4f2; --vp-muted: #9fb0ab; --vp-surface: #121b19; --vp-border: #24332f; color-scheme: dark; }
  html, body { margin: 0; background: var(--vp-background); color: var(--vp-text); font: 16px/1.6 system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }
  #stage { box-sizing: border-box; padding: 32px; min-height: 160px; display: flow-root; }
  #stage.edges > * { outline: 1.5px dashed color-mix(in srgb, var(--vp-primary) 55%, transparent); outline-offset: 3px; min-height: 2px; }
  .demo { display: grid; gap: 10px; justify-items: start; }
  .demo h3 { margin: 0; font-family: var(--vp-font-heading); font-size: 1.35rem; line-height: 1.25; }
  .demo p { margin: 0; color: var(--vp-muted); }
  .demo--item { padding: 18px 20px; border: 1px solid var(--vp-border); border-radius: 12px; background: var(--vp-surface); min-width: 160px; }
  .demo a { display: inline-block; padding: 8px 16px; border-radius: 999px; background: var(--vp-primary); color: var(--vp-primary-contrast); font-weight: 600; text-decoration: none; font-size: 14px; }
</style>
</head>
<body>
<div id="app"></div>
<script type="module">
import { createApp, h, reactive } from '${vueName}'
import App from '${componentURL}'
// (as in the editor: a component with nothing to show yet, a chart or a list of posts, shows its samples)
window.studio = true
const state = reactive({ props: {}, edges: true })
const slots = ${JSON.stringify(slots)}
const inside = '${inside}'
const demo = () => h('div', { class: 'demo' }, [h('h3', 'Something inside'), h('p', 'Whatever is put in it shows here, like this heading, these words and a button.'), h('a', { href: '#', onClick: e => e.preventDefault() }, 'A button')])
const item = n => h('div', { class: 'demo demo--item' }, [h('h3', 'Part ' + n), h('p', 'One of the parts put in it.')])
const filling = () => inside === 'many' ? [item(1), item(2), item(3)] : demo()
const root = createApp({
  render: () => h('div', { id: 'stage', class: state.edges ? 'edges' : '' }, [h(App, { ...state.props, ref: 'it' }, slots.includes('default') && inside !== 'none' ? { default: filling } : undefined)]),
  mounted() {
    const it = this.$refs.it
    let start = {}
    try { start = JSON.parse(JSON.stringify(it && it.$props || {})) } catch (e) {}
    parent.postMessage({ vpPlay: 'start', props: start }, '*')
    // (the content's own height: the document's can never be less than the frame it is in)
    const stage = document.getElementById('stage')
    const tell = () => parent.postMessage({ vpPlay: 'height', height: Math.ceil(stage.getBoundingClientRect().height) + 2 }, '*')
    new ResizeObserver(tell).observe(stage)
    tell()
  }
})
root.config.errorHandler = e => parent.postMessage({ vpPlay: 'error', message: String(e && e.message || e) }, '*')
addEventListener('message', e => {
  const m = e.data || {}
  if (m.vpPlay === 'props') state.props = m.props || {}
  if (m.vpPlay === 'edges') state.edges = !!m.on
  if (m.vpPlay === 'dark') document.documentElement.classList.toggle('dark', !!m.on)
})
root.mount('#app')
<\/script>
</body>
</html>`

// what is put in a component that holds other parts: several for those that line them up, nothing for words
const MANY = ['columns', 'stack', 'marquee', 'carousel-slides', 'reveal', 'motion-effects']
// pictures to show where a component would otherwise be an empty frame (the same ones the library preview uses)
const PIC = n => `https://images.unsplash.com/photo-${['1506744038136-46273834b3fb', '1501785888041-af3ef285b470', '1470071459604-3b5ec3a7fe05', '1441974231531-c6227db76b6e', '1500530855697-b586d89ba3ee', '1469474968028-56623f02e42e', '1447752875215-b2761acb3c5d', '1433086966358-54859d0ed716'][n % 8]}?w=900&q=70`
const SAMPLES = {
  image: () => ({ src: PIC(0), alt: 'Mountains in the morning light' }),
  photos: () => ({ images: [0, 1, 2, 3, 4, 5].map(n => ({ src: PIC(n), alt: 'A landscape' })) }),
  'photo-gallery': () => ({ images: [0, 1, 2, 3, 4, 5, 6, 7].map(n => ({ src: PIC(n), caption: 'Picture ' + (n + 1), tag: ['Mountains', 'Forest', 'Water'][n % 3] })) }),
  video: () => ({ src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', title: 'A flower opening' }),
  slideshow: start => ({ slides: (start.slides || []).map((slide, n) => ({ ...slide, image: slide.image || PIC(n + 2) })) }),
}

const WIDTHS = [
  { id: 'full', name: 'Desktop', title: 'As wide as there is room', icon: 'M3 5h18v11H3zM8 20h8M12 16v4' },
  { id: 'tablet', name: 'Tablet', title: '768 pixels wide', icon: 'M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2' },
  { id: 'phone', name: 'Phone', title: '390 pixels wide', icon: 'M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 18h2' },
]

// "showTitle" → "Show title"
const words = name => String(name).replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, c => c.toUpperCase()).replace(/ ([A-Z])(?=[a-z])/g, (m, c) => ' ' + c.toLowerCase())
const kindOf = prop => {
  if (prop.type === 'Boolean' || prop.control === 'boolean') return 'boolean'
  if (Array.isArray(prop.options) && prop.options.length) return 'select'
  if (prop.control === 'list' || prop.type === 'Array') return 'list'
  if (prop.control === 'color') return 'color'
  if (prop.control === 'slider' || prop.control === 'dimensions') return 'slider'
  if (prop.control === 'number' || prop.type === 'Number') return 'number'
  if (prop.control === 'textarea') return 'textarea'
  if (prop.control === 'media') return 'media'
  return 'text'
}
const clone = v => v === undefined ? undefined : JSON.parse(JSON.stringify(v))

export default {
  name: 'ComponentPlayground',
  props: {
    slug: { type: String, required: true },
    version: { type: String, default: 'latest' },
    title: { type: String, default: '' },
    token: { type: String, default: '' },
  },
  emits: ['analyze', 'ready'],
  data: () => ({ WIDTHS, width: 'full', outline: true, showCode: false, frameUrl: '', ready: false, failed: '', height: 260, analysis: null, start: {}, values: {}, filter: '', copied: false, dark: false }),
  computed: {
    props() {
      return (this.analysis?.props || [])
        .filter(p => p && p.hidden !== true && p.hidden !== 'true')
        .map(p => ({ ...p, label: p.label || words(p.name), kind: kindOf(p), fields: (p.fields || []).map(f => typeof f === 'string' ? { key: f, label: words(f) } : f) }))
    },
    shown() {
      const q = this.filter.trim().toLowerCase()
      return q ? this.props.filter(p => (p.label + ' ' + p.name).toLowerCase().includes(q)) : this.props
    },
    changed() {
      return JSON.stringify(this.values) !== JSON.stringify(this.start)
    },
    tag() {
      return (this.title || this.slug).replace(/[^A-Za-z0-9]+(.)?/g, (m, c) => c ? c.toUpperCase() : '').replace(/^./, c => c.toUpperCase())
    },
    // the settings that differ from where it started, as a template would write them
    code() {
      const attrs = []
      for (const prop of this.props) {
        const value = this.values[prop.name]
        if (JSON.stringify(value) === JSON.stringify(this.start[prop.name])) continue
        const name = prop.name.replace(/[A-Z]/g, c => '-' + c.toLowerCase())
        if (typeof value === 'string') attrs.push(`${name}="${value.replace(/"/g, '&quot;')}"`)
        else if (value === true) attrs.push(name)
        else if (value !== undefined) attrs.push(`:${name}='${JSON.stringify(value)}'`)
      }
      const slot = (this.analysis?.slots || []).includes('default')
      const open = attrs.length > 2 ? `<${this.tag}\n  ${attrs.join('\n  ')}\n` : `<${this.tag}${attrs.length ? ' ' + attrs.join(' ') : ''}`
      return `<script>\nimport ${this.tag} from '@vueplayio/${this.slug}'\n\nexport default {\n  components: { ${this.tag} }\n}\n</` + `script>\n\n<template>\n  ${(slot ? open + '>\n    <!-- what goes inside -->\n  </' + this.tag + '>' : open + (attrs.length > 2 ? '/>' : ' />')).replace(/\n/g, '\n  ')}\n</template>`
    },
  },
  watch: {
    width() { this.$nextTick(() => this.tellHeight()) },
    outline(on) { this.post({ vpPlay: 'edges', on }) },
  },
  async mounted() {
    window.addEventListener('message', this.hear)
    this.dark = document.documentElement.classList.contains('dark')
    this.themeWatch = new MutationObserver(() => {
      this.dark = document.documentElement.classList.contains('dark')
      this.post({ vpPlay: 'dark', on: this.dark })
    })
    this.themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    try {
      const base = `https://manager.vueplay.io/${this.slug}@${this.version || 'latest'}`
      const headers = this.token ? { Authorization: `Bearer ${this.token}` } : {}
      const [analyzeRes, codeRes] = await Promise.all([fetch(base + '/analyze', { headers }), fetch(base + '/esm', { headers })])
      if (!analyzeRes.ok || !codeRes.ok) throw new Error(`(${analyzeRes.status}/${codeRes.status})`)
      const [analyze, code] = await Promise.all([analyzeRes.json(), codeRes.text()])
      this.analysis = analyze?.analyze || {}
      this.$emit('analyze', analyze)
      const vueName = code.includes('This component is protected by Vue Play') ? 'v' + Math.random().toString(36).slice(2, 7) : 'vue'
      const componentURL = URL.createObjectURL(new Blob([code.replace(/from\s*["']vue["']/g, `from "${vueName}"`)], { type: 'application/javascript' }))
      this.componentURL = componentURL
      const inside = this.analysis.wysiwyg ? 'none' : MANY.includes(this.slug) ? 'many' : 'one'
      this.frameUrl = URL.createObjectURL(new Blob([frameHtml({ componentURL, vueName, slots: this.analysis.slots || [], dark: this.dark, inside })], { type: 'text/html' }))
    } catch (e) {
      this.failed = e.message || ''
    }
  },
  beforeUnmount() {
    window.removeEventListener('message', this.hear)
    this.themeWatch?.disconnect()
    if (this.frameUrl) URL.revokeObjectURL(this.frameUrl)
    if (this.componentURL) URL.revokeObjectURL(this.componentURL)
  },
  methods: {
    hear(event) {
      const frame = this.$refs.frame
      if (!frame || event.source !== frame.contentWindow) return
      const m = event.data || {}
      if (m.vpPlay === 'start') {
        const start = {}
        for (const prop of this.props) start[prop.name] = clone(m.props?.[prop.name])
        // (a component that would be an empty frame gets sample pictures, as its starting point here)
        Object.assign(start, SAMPLES[this.slug] ? SAMPLES[this.slug](start) : {})
        this.start = start
        this.values = clone(start)
        this.ready = true
        this.post({ vpPlay: 'props', props: this.values })
        this.$emit('ready')
      }
      if (m.vpPlay === 'height') this.height = Math.max(160, Math.min(1400, m.height || 0))
      if (m.vpPlay === 'error' && !this.ready) this.failed = m.message
    },
    post(message) {
      this.$refs.frame?.contentWindow?.postMessage(JSON.parse(JSON.stringify(message)), '*')
    },
    send() {
      this.post({ vpPlay: 'edges', on: this.outline })
      if (this.ready) this.post({ vpPlay: 'props', props: this.values })
    },
    tellHeight() {
      this.post({ vpPlay: 'edges', on: this.outline })
    },
    valueOf(prop) {
      const value = this.values[prop.name]
      return value == null ? prop.default : value
    },
    set(prop, value) {
      this.values = { ...this.values, [prop.name]: value }
      this.post({ vpPlay: 'props', props: this.values })
    },
    setItem(prop, index, key, value) {
      const list = clone(this.values[prop.name] || [])
      list[index] = { ...list[index], [key]: value }
      this.set(prop, list)
    },
    addItem(prop) {
      const list = clone(this.values[prop.name] || [])
      const item = {}
      for (const field of prop.fields) item[field.key] = field.control === 'boolean' ? false : field.control === 'number' ? 0 : ''
      list.push(list.length ? { ...clone(list[list.length - 1]) } : item)
      this.set(prop, list)
    },
    removeItem(prop, index) {
      const list = clone(this.values[prop.name] || [])
      list.splice(index, 1)
      this.set(prop, list)
    },
    itemName(prop, item, index) {
      const first = prop.fields.map(f => item?.[f.key]).find(v => typeof v === 'string' && v.trim() && !/^(--|https?:)/.test(v))
      return first || `${prop.label} ${index + 1}`
    },
    reset() {
      this.values = clone(this.start)
      this.post({ vpPlay: 'props', props: this.values })
    },
    number(value) {
      const n = parseFloat(value)
      return isNaN(n) ? undefined : n
    },
    hex(value) {
      return /^#[0-9a-f]{6}$/i.test(value || '') ? value : '#10a37c'
    },
    async copy() {
      try {
        await navigator.clipboard.writeText(this.code)
        this.copied = true
        setTimeout(() => { this.copied = false }, 1600)
      } catch (e) {}
    },
  },
}
</script>
<style>
.vp-play {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  gap: 16px;
  align-items: start;
}
.vp-play__main { min-width: 0; border: 1px solid var(--vp-border); border-radius: 16px; overflow: hidden; background: var(--vp-surface); }
.vp-play__bar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 10px 12px; border-bottom: 1px solid var(--vp-border); background: var(--vp-background); }
.vp-play__space { flex: 1; }
.vp-play__group { display: inline-flex; padding: 3px; border: 1px solid var(--vp-border); border-radius: 10px; background: var(--vp-surface); }
.vp-play__group button,
.vp-play__btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--vp-muted);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.vp-play__btn { border: 1px solid var(--vp-border); border-radius: 9px; }
.vp-play__group button.is-on { background: var(--vp-background); color: var(--vp-text); box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); }
.vp-play__btn.is-on { border-color: var(--vp-primary); color: var(--vp-primary); }
.vp-play__group button:focus-visible, .vp-play__btn:focus-visible { outline: 2px solid var(--vp-primary); outline-offset: 2px; }
.vp-play svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.vp-play__stage {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px;
  min-height: 220px;
  background-image: radial-gradient(color-mix(in srgb, var(--vp-text) 12%, transparent) 1px, transparent 1px);
  background-size: 16px 16px;
}
.vp-play__stage iframe {
  display: block;
  width: 100%;
  border: 1px solid var(--vp-border);
  border-radius: 12px;
  background: var(--vp-background);
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.35);
  transition: max-width 250ms ease, height 150ms ease;
}
.vp-play__stage--tablet iframe { max-width: 768px; }
.vp-play__stage--phone iframe { max-width: 390px; }
.vp-play__loading { position: absolute; inset: 0; display: grid; place-items: center; z-index: 1; background: var(--vp-surface); }
.vp-play__failed { margin: 0; align-self: center; color: var(--vp-muted); }
.vp-play__code { border-top: 1px solid var(--vp-border); background: #0f1720; }
.vp-play__codebar { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 8px 12px; color: #9fb0bf; font-size: 13px; }
.vp-play__code pre { margin: 0; padding: 4px 16px 16px; overflow-x: auto; color: #d6e2ee; font: 500 13px/1.7 ui-monospace, SFMono-Regular, Menlo, monospace; }
.vp-play__settings {
  position: sticky;
  top: 80px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 100px);
  border: 1px solid var(--vp-border);
  border-radius: 16px;
  background: var(--vp-background);
  overflow: hidden;
}
.vp-play__settings-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--vp-border); }
.vp-play__reset { padding: 4px 10px; border: 1px solid var(--vp-border); border-radius: 8px; background: transparent; color: var(--vp-text); font: inherit; font-size: 12px; font-weight: 600; cursor: pointer; }
.vp-play__reset:disabled { opacity: 0.4; cursor: default; }
.vp-play__filter { margin: 10px 14px 0; padding: 7px 10px; border: 1px solid var(--vp-border); border-radius: 9px; background: var(--vp-surface); color: var(--vp-text); font: inherit; font-size: 13px; }
.vp-play__list { display: grid; gap: 14px; padding: 14px; overflow-y: auto; }
.vp-play__field { display: grid; gap: 6px; min-width: 0; }
.vp-play__label { font-size: 13px; font-weight: 600; color: var(--vp-text); }
.vp-play__input {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 7px 10px;
  border: 1px solid var(--vp-border);
  border-radius: 9px;
  background: var(--vp-background);
  color: var(--vp-text);
  font: inherit;
  font-size: 13px;
}
.vp-play__input:focus { outline: none; border-color: var(--vp-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-primary) 20%, transparent); }
textarea.vp-play__input { resize: vertical; }
.vp-play__switch { display: flex; align-items: center; justify-content: space-between; gap: 10px; cursor: pointer; }
.vp-play__switch input { position: absolute; opacity: 0; width: 1px; height: 1px; }
.vp-play__switch i { position: relative; flex: none; width: 36px; height: 20px; border-radius: 999px; background: var(--vp-border); transition: background 150ms ease; }
.vp-play__switch i::after { content: ''; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25); transition: transform 150ms ease; }
.vp-play__switch input:checked + i { background: var(--vp-primary); }
.vp-play__switch input:checked + i::after { transform: translateX(16px); }
.vp-play__switch input:focus-visible + i { outline: 2px solid var(--vp-primary); outline-offset: 2px; }
.vp-play__color { display: grid; grid-template-columns: 36px 1fr; gap: 8px; }
.vp-play__color input[type='color'] { width: 36px; height: 34px; padding: 2px; border: 1px solid var(--vp-border); border-radius: 9px; background: var(--vp-background); cursor: pointer; }
.vp-play__slider { display: grid; grid-template-columns: 1fr 84px; gap: 8px; align-items: center; }
.vp-play__slider input[type='range'] { -webkit-appearance: none; appearance: none; width: 100%; height: 22px; background: transparent; cursor: pointer; }
.vp-play__slider input[type='range']::-webkit-slider-runnable-track { height: 4px; border-radius: 999px; background: var(--vp-border); }
.vp-play__slider input[type='range']::-moz-range-track { height: 4px; border-radius: 999px; background: var(--vp-border); }
.vp-play__slider input[type='range']::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; margin-top: -6px; border-radius: 50%; background: var(--vp-primary); box-shadow: 0 0 0 3px var(--vp-background), 0 1px 3px rgba(0, 0, 0, 0.3); }
.vp-play__slider input[type='range']::-moz-range-thumb { width: 16px; height: 16px; border: 0; border-radius: 50%; background: var(--vp-primary); box-shadow: 0 0 0 3px var(--vp-background), 0 1px 3px rgba(0, 0, 0, 0.3); }
.vp-play__slider input[type='range']:focus-visible { outline: 2px solid var(--vp-primary); outline-offset: 2px; border-radius: 6px; }
.vp-play__items { display: grid; gap: 6px; }
.vp-play__item { border: 1px solid var(--vp-border); border-radius: 9px; background: var(--vp-surface); }
.vp-play__item summary { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 7px 10px; font-size: 13px; cursor: pointer; list-style: none; }
.vp-play__item summary::-webkit-details-marker { display: none; }
.vp-play__item summary span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.vp-play__item[open] summary { border-bottom: 1px solid var(--vp-border); }
.vp-play__x { flex: none; width: 22px; height: 22px; padding: 0; border: 0; border-radius: 6px; background: transparent; color: var(--vp-muted); font-size: 16px; line-height: 1; cursor: pointer; }
.vp-play__x:hover { background: var(--vp-border); color: var(--vp-text); }
.vp-play__subfield { display: grid; gap: 4px; padding: 6px 10px; font-size: 12px; color: var(--vp-muted); }
.vp-play__add { justify-self: start; padding: 5px 10px; border: 1px dashed var(--vp-border); border-radius: 8px; background: transparent; color: var(--vp-primary); font: inherit; font-size: 13px; font-weight: 600; cursor: pointer; }
.vp-play__none { margin: 0; color: var(--vp-muted); font-size: 13px; }
@media (max-width: 900px) {
  .vp-play { grid-template-columns: 1fr; }
  .vp-play__settings { position: static; max-height: none; }
  .vp-play__group span { display: none; }
}
@media (max-width: 520px) {
  .vp-play__stage { padding: 10px; }
  .vp-play__btn span { display: none; }
}
</style>
