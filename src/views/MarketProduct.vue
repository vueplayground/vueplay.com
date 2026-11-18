<template>
	<Page>
		<Section space="small" gap="0px">
			<nav class="vp-crumbs" aria-label="Breadcrumbs">
				<router-link to="/market">Market</router-link>
				<span aria-hidden="true">/</span>
				<router-link :to="category === 'all' ? '/market' : `/market/${category}`">{{ categoryName }}</router-link>
				<span aria-hidden="true">/</span>
				<span aria-current="page">{{ component?.title || slug }}</span>
			</nav>
		</Section>
		<Section v-if="!component" space="xlarge" align="center">
			<span class="loader" role="status" aria-label="Loading"></span>
		</Section>
		<template v-else>
			<Section space="small" gap="40px">
				<div class="vp-product">
					<div class="vp-product__picture" :class="'vp-product__picture--' + (picture?.kind || 'none')">
						<img v-if="picture?.kind === 'image'" :src="picture.src" :alt="'The ' + (component.title || slug) + ' ' + kind" />
						<span v-else-if="picture?.kind === 'icon'" class="vp-product__icon" :style="picture.style" aria-hidden="true"></span>
						<svg v-else class="vp-product__placeholder" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v16H3zM3 9h18M9 9v11" /></svg>
					</div>
					<div class="vp-product__about">
						<div class="vp-product__tags">
							<span class="vp-chip vp-chip--brand">{{ kind.charAt(0).toUpperCase() + kind.slice(1) }}</span>
							<span v-if="component.type === 'vue-sfc' && shownVersion" class="vp-chip">v{{ shownVersion }}</span>
							<span v-if="!component.published" class="vp-chip vp-chip--warn">Not published</span>
						</div>
						<h1 class="vp-product__title">{{ component.title || component.slug }}</h1>
						<p class="vp-product__text">{{ component.description || 'No description provided.' }}</p>
						<div class="vp-product__buy">
							<div class="vp-product__price">
								<b>{{ priceText(component.price) }}</b>
								<span v-if="component.price">incl. tax</span>
							</div>
							<div class="vp-product__actions" data-allow-mismatch="">
								<router-link
									v-if="!readAccess && component.price && component.product_id"
									class="vp-btn vp-btn--solid"
									:to="`/market/${category}/${slug}/${version ? version + '/' : ''}checkout${account ? '' : '/authenticate'}`"
								>Purchase {{ priceText(component.price) }}</router-link>
								<button
									v-else-if="readAccess && component.type === 'vue-sfc'"
									type="button"
									class="vp-btn vp-btn--solid"
									@click="download('https://manager.vueplay.io/' + component?.slug + '@' + (version || component?.latest_version || 'latest') + '/esm')"
								>Download</button>
								<a class="vp-btn" href="https://studio.vueplay.com" target="_blank" rel="noopener">Use it in the Studio</a>
								<a v-if="component.type !== 'vue-sfc' && demo" class="vp-btn" :href="'https://' + slug + '.vueplay.com'" target="_blank" rel="noopener">Open the demo</a>
							</div>
						</div>
						<dl class="vp-product__facts" data-allow-mismatch="">
							<div v-if="component.type === 'vue-sfc' && shownVersion"><dt>Version</dt><dd>{{ shownVersion }}</dd></div>
							<div><dt>Created</dt><dd>{{ day(component.created_at) }}</dd></div>
							<div><dt>Updated</dt><dd>{{ day(component.updated_at) }}</dd></div>
							<div v-if="authors?.length"><dt>Author{{ authors.length > 1 ? 's' : '' }}</dt><dd>{{ authors.join(', ') }}</dd></div>
							<div v-if="teams?.length"><dt>Team{{ teams.length > 1 ? 's' : '' }}</dt><dd>{{ teams.join(', ') }}</dd></div>
							<div v-if="projects?.length"><dt>Project{{ projects.length > 1 ? 's' : '' }}</dt><dd>{{ projects.join(', ') }}</dd></div>
						</dl>
					</div>
				</div>
			</Section>
			<Section space="small" gap="16px">
				<h2 class="vp-product__h2">Preview</h2>
				<div v-if="component.showcase_url" class="vp-frame" data-allow-mismatch="children">
					<span class="loader vp-frame__loader"></span>
					<iframe :src="component.showcase_url" :title="'A preview of ' + (component.title || slug)"></iframe>
				</div>
				<div v-else-if="(component.type === 'vue-template' || component.type === 'vue-app') && demo !== false" class="vp-frame" data-allow-mismatch="children">
					<span class="loader vp-frame__loader"></span>
					<iframe v-if="demo" :src="'https://' + slug + '.vueplay.com'" :title="'The ' + (component.title || slug) + ' ' + kind + ', live'"></iframe>
				</div>
				<!-- no live demo: the whole front page as a picture (Vue Play's own templates have one), scrolled through
				     while it is pointed at, else a line that says so -->
				<div v-else-if="(component.type === 'vue-template' || component.type === 'vue-app') && pagePicture && !noPicture" class="vp-page-shot" data-allow-mismatch="children" :title="'The front page of ' + (component.title || slug)">
					<img :src="pagePicture" :alt="'The front page of the ' + (component.title || slug) + ' ' + kind" loading="lazy" @error="noPicture = true">
				</div>
				<p v-else-if="component.type === 'vue-template' || component.type === 'vue-app'" class="vp-panel vp-panel--soft" data-allow-mismatch="children">There is no live demo of this {{ kind }} yet. Open it in the Studio to look around.</p>
				<template v-if="component.type === 'vue-sfc'">
					<p v-if="component.disable_preview" class="vp-panel vp-panel--soft" data-allow-mismatch="children">Component is protected & preview disabled.</p>
					<ClientOnlyPlayground v-if="!component.disable_preview && client" :key="slug + '@' + (version || component.latest_version || 'latest')" :slug="slug" :version="version || component.latest_version || 'latest'" :title="component.title || slug" :token="account?.accessToken || ''" data-allow-mismatch="children" @analyze="a => analyze = a" @ready="playing = true" />
					<div v-show="!playing && !component.disable_preview && !client" class="vp-preview__ssr" data-allow-mismatch="children">
						<component v-for="(main, index) of dynamicComponents.filter(c => c.type === 'main')" :key="index" :is="main.component" />
					</div>
				</template>
			</Section>
			<Section space="medium" gap="24px">
				<div class="vp-use">
					<div class="vp-use__head">
						<div>
							<h2 class="vp-product__h2">Install and use</h2>
							<p v-if="component.type === 'vue-sfc' || component.versions?.length" class="vp-use__note">Installation guide for external usage. The component is also in Vue Play Studio, to drag and drop.</p>
						</div>
						<div v-if="account?.accessToken" data-allow-mismatch="">
							<button v-if="!token" type="button" class="vp-btn" title="Let your access token last for a year, else a short-living token from your current authentication session will be used." @click="newToken">
								<svg class="vp-i" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
								Use long-living token
							</button>
							<span v-else class="vp-chip vp-chip--brand">Using long-living token</span>
						</div>
					</div>
					<div v-if="component.public && !component.price && component.versions?.length" class="vp-use__step">
						<h3>Install using npm</h3>
						<div class="vp-code"><pre>{{ pre.install.text }}</pre><button type="button" @click="copy($event, pre.install.text)">Copy</button></div>
					</div>
					<div v-if="component.versions?.length" class="vp-use__step" data-allow-mismatch="">
						<h3>Install using npm from Vue Play registry</h3>
						<p>Token required for private and paid components. Put this in <code>.npmrc</code>:</p>
						<div class="vp-code"><pre>{{ npmrcText }}</pre><button type="button" @click="copy($event, npmrcText)">Copy</button></div>
						<p>then</p>
						<div class="vp-code"><pre>{{ pre.npmrcInstall.text }}</pre><button type="button" @click="copy($event, pre.npmrcInstall.text)">Copy</button></div>
					</div>
					<div class="vp-use__step" data-allow-mismatch="">
						<h3>Clone using git</h3>
						<p v-if="!account?.accessToken">Log in to see your access token.</p>
						<p v-else-if="!readAccess && component.price && component.product_id">Purchase it to be able to clone.</p>
						<div class="vp-code">
							<pre>{{ freeToClone ? pre.gitClone.text : gitCloneSecure.text }}</pre>
							<button type="button" @click="freeToClone ? copy($event, pre.gitClone.text) : copy($event, gitCloneSecure?.text)">Copy</button>
						</div>
					</div>
					<div v-if="component.public && !component.price && component.versions?.length" class="vp-use__step">
						<h3>Embed using CDN</h3>
						<div class="vp-code"><pre>{{ pre.embed.text }}</pre><button type="button" @click="copy($event, pre.embed.text)">Copy</button></div>
					</div>
				</div>
			</Section>
			<Section space="medium" gap="16px">
				<div class="vp-share">
					<h2 class="vp-product__h2">Share on social media</h2>
					<div class="vp-share__links">
						<a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl)" target="_blank" rel="noopener" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.791-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12" /></svg></a>
						<a :href="'https://www.reddit.com/submit?url=' + encodeURIComponent(shareUrl) + '&title=' + encodeURIComponent(component.title || slug)" target="_blank" rel="noopener" aria-label="Share on Reddit"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M12.606 20.986a.408.408 0 0 0-.289.696 5.74 5.74 0 0 0 3.712 1.14h-.012a5.68 5.68 0 0 0 3.715-1.152l-.014.01a.45.45 0 0 0 .035-.58l.001.001a.41.41 0 0 0-.58 0 4.92 4.92 0 0 1-3.152.912l.013.001a4.9 4.9 0 0 1-3.154-.922l.014.01a.4.4 0 0 0-.287-.119h-.003zM19.436 16a1.562 1.562 0 1 0 1.562 1.561A1.564 1.564 0 0 0 19.436 16m-6.873 0a1.56 1.56 0 1 1-.001 3.121A1.56 1.56 0 0 1 12.563 16m9.698-9.067a1.55 1.55 0 1 1-1.56 1.635v-.004l-3.245-.684-1 4.682a10.8 10.8 0 0 1 5.878 1.884l-.037-.024c.38-.379.905-.614 1.485-.614h.025-.001A2.194 2.194 0 0 1 25.998 16a2.27 2.27 0 0 1-1.249 2.011l-.013.006c.033.191.052.412.052.637v.014-.001c0 3.367-3.911 6.086-8.752 6.086s-8.752-2.719-8.752-6.086v-.005q0-.351.057-.687l-.003.024a2.191 2.191 0 0 1 .893-4.192h.001a2.2 2.2 0 0 1 1.509.613l-.001-.001a10.55 10.55 0 0 1 5.924-1.858h.004l1.106-5.226a.43.43 0 0 1 .173-.245l.002-.001a.44.44 0 0 1 .3-.052h-.003l3.631.771a1.52 1.52 0 0 1 1.375-.876zM16 1.004C7.718 1.004 1.004 7.718 1.004 16S7.718 30.996 16 30.996 30.996 24.282 30.996 16c0-4.141-1.678-7.89-4.392-10.604A14.95 14.95 0 0 0 16 1.004" /></svg></a>
						<a :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(component.title || slug)" target="_blank" rel="noopener" aria-label="Share on X"><svg viewBox="0 0 1200 1227" aria-hidden="true"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854z" /></svg></a>
						<a :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(shareUrl)" target="_blank" rel="noopener" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.286 0H1.709C.766 0 0 .777 0 1.73v20.54C0 23.223.766 24 1.709 24h20.577c.943 0 1.714-.777 1.714-1.73V1.73C24 .777 23.229 0 22.286 0M7.254 20.571H3.696V9.118H7.26V20.57zM5.475 7.554a2.063 2.063 0 0 1 0-4.125c1.136 0 2.063.926 2.063 2.062a2.06 2.06 0 0 1-2.063 2.063M20.587 20.57H17.03V15c0-1.329-.026-3.037-1.848-3.037-1.853 0-2.137 1.446-2.137 2.94v5.668H9.488V9.118H12.9v1.564h.048c.477-.9 1.64-1.848 3.37-1.848 3.6 0 4.27 2.373 4.27 5.459z" /></svg></a>
					</div>
					<div v-if="isAdmin" class="vp-share__admin" data-allow-mismatch="">
						<button v-if="!component.published" type="button" class="vp-btn vp-btn--solid" @click="publish()">Publish</button>
						<button v-else type="button" class="vp-btn" @click="unpublish()">Unpublish</button>
					</div>
				</div>
			</Section>
		</template>
	</Page>
</template>
<script>
	import * as VUE from 'vue';
	import Page from '@/components/Page.vue';
	import Section from '@vueplayio/section';
	import ComponentPlayground from '@/components/ComponentPlayground.vue';
	import { typeName, categoryOf, priceText, pictureOf } from '@/components/market.js';
	import { pageHead, ORIGIN } from '@/components/head.js';
	// One item in the Market: what it is, a live preview, how to install it, and buying it
	export default {
		components: {
			Page,
			Section,
			ClientOnlyPlayground: ComponentPlayground
		},
		inject: ['account', 'auth', 'manager', 'market', 'theme', 'updateTheme'],
		props: {
			category: {
				type: String,
				default: 'components'
			},
			slug: {
				type: String,
				default: 'box'
			},
			version: {
				type: String,
				default: ''
			}
		},
		data: () => ({
			component: null,
			show: false,
			dynamicComponents: [],
			readAccess: false,
			blobUrlSlots: '',
			blobUrlControls: '',
			blobUrl: '',
			token: '',
			iframe: null,
			iframeModal: null,
			iframeControls: null,
			iframeSlots: null,
			analyze: null,
			modal: false,
			copyDeepEvent: null,
			displayCode: false,
			displayAnalyze: false,
			// (whether <slug>.vueplay.com answers: a template or an application is shown live from there)
			demo: null,
			// (a picture of the whole front page could not be loaded: there is none for this template)
			noPicture: false,
			// (the preview is drawn in the browser only; until it is ready the server's drawing shows)
			client: false,
			playing: false
		}),
		async mounted() {
			this.client = true;
			await this.init(this.component ? true : false);
			window.addEventListener('message', this.handleMessage);
			this.iframe = document.getElementById('playground');
			this.iframeModal = document.getElementById('modal');
			this.iframeControls = document.getElementById('controls');
			this.iframeSlots = document.getElementById('slots');
			this.checkDemo();
		},
		async unmounted() {
			window.removeEventListener('message', this.handleMessage);
		},
		async serverPrefetch() {
			await this.init();
		},
		computed: {
			// Vue Play's own templates come with a picture of their whole front page
			pagePicture() {
				return this.slug ? `/landing/pages/${this.slug}.jpg` : ''
			},
			authors() {
				return this.analyze?.authors?.users;
			},
			teams() {
				return this.analyze?.authors?.teams;
			},
			projects() {
				return this.analyze?.authors?.projects;
			},
			picture() {
				return pictureOf(this.component);
			},
			kind() {
				return typeName(this.component?.type);
			},
			categoryName() {
				const names = { all: 'All', components: 'Components', templates: 'Templates', priced: 'Priced', me: 'Yours', purchases: 'Purchases' };
				return names[this.category] || this.category.charAt(0).toUpperCase() + this.category.slice(1).replace(/-/g, ' ');
			},
			isAdmin() {
				return this.account?.authentication?.payload?.global_roles?.includes('admin');
			},
			shownVersion() {
				return this.version && this.version !== 'latest' ? this.version : this.component?.latest_version;
			},
			shareUrl() {
				return ORIGIN + '/market/' + categoryOf(this.component?.type) + '/' + (this.component?.slug || this.slug);
			},
			freeToClone() {
				return this.component?.public && !this.component?.price && !(this.component?.type === 'vue-sfc' && this.component?.restrict_clone);
			},
			gitCloneSecure() {
				return {
					text: `git -c http.extraHeader="authorization-x: Bearer ${this.token || this.account?.accessToken || 'token'}" clone https://git.vueplay.io/git/${this.component?.uuid}`,
					html: `git -c http.extraHeader="authorization-x: Bearer ${this.token || this.account?.accessToken || 'token'}" clone https://git.vueplay.io/git/${this.component?.uuid}`
				};
			},
			npmrcText() {
				return `# .npmrc\n@vueplayio:registry=https://manager.vueplay.io/\n//manager.vueplay.io/:_authToken=${this.token || this.account?.accessToken || 'token'}`;
			},
			npmrcHTML() {
				return `# .npmrc<br/>@vueplayio:registry=https://manager.vueplay.io/<br/>//manager.vueplay.io/:_authToken=`;
			},
			pre() {
				const version = this.version || this.component?.latest_version || 'latest';
				return {
					install: {
						text: `npm install https://manager.vueplay.io/${this.component?.slug}@${this.version || 'latest'}`,
						html: `npm install https://manager.vueplay.io/${this.component?.slug}@${this.version || 'latest'}`
					},
					npmrcInstall: {
						text: `npm install @vueplayio/${this.component?.slug}`,
						html: `npm install @vueplayio/${this.component?.slug}`
					},
					gitClone: {
						text: `git clone https://git.vueplay.io/git/${this.component?.uuid}`,
						html: `git clone https://git.vueplay.io/git/${this.component?.uuid}`
					},
					embed: {
						text: `<!doctype html>\n<html>\n  <head>\n    <${'script'} type="importmap">\n      {\n        "imports": {\n          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"\n        }\n      }\n    </${'script'}>\n    <${'script'} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${'script'}>\n    <${'script'} type="module">\n      import { createApp } from 'vue'\n      import App from 'https://manager.vueplay.io/${this.component?.slug}@${version}/esm'\n      createApp(App).mount('#app')\n    </${'script'}>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>`,
						html: `&lt;!doctype html&gt;<br/>&lt;html&gt;<br/> &nbsp;&lt;head&gt;<br/> &nbsp; &nbsp;&lt;script type="importmap"&gt;<br/> &nbsp; &nbsp; &nbsp;{<br/> &nbsp; &nbsp; &nbsp; &nbsp;"imports": {<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"<br/> &nbsp; &nbsp; &nbsp; &nbsp;}<br/> &nbsp; &nbsp; &nbsp;}<br/> &nbsp; &nbsp;&lt;/script&gt;<br/> &nbsp; &nbsp;&lt;script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"&gt;&lt;/script&gt;<br/> &nbsp; &nbsp;&lt;script type="module"&gt;<br/> &nbsp; &nbsp; &nbsp;import { createApp } from 'vue'<br/> &nbsp; &nbsp; &nbsp;import App from 'https://manager.vueplay.io/${this.component?.slug}@${version}/esm'<br/> &nbsp; &nbsp; &nbsp;createApp(App).mount('#app')<br/> &nbsp; &nbsp;&lt;/script&gt;<br/> &nbsp;&lt;/head&gt;<br/> &nbsp;&lt;body&gt;<br/> &nbsp; &nbsp;&lt;div id="app"&gt;&lt;/div&gt;<br/> &nbsp;&lt;/body&gt;<br/>&lt;/html&gt;`
					}
				};
			}
		},
		watch: {
			async slug() {
				this.component = null;
				this.demo = null;
				await this.init();
				this.checkDemo();
			},
			async theme(value) {
				if (this.iframe?.contentWindow) {
					this.iframe.contentWindow.postMessage({
						theme: value
					}, '*');
				}
				if (this.iframeControls?.contentWindow) {
					this.iframeControls.contentWindow.postMessage({
						theme: value
					}, '*');
				}
				if (this.iframeSlots?.contentWindow) {
					this.iframeSlots.contentWindow.postMessage({
						theme: value
					}, '*');
				}
			}
		},
		methods: {
			priceText,
			// A site that is not there makes the request fail; one that is answers (unread, from another origin)
			async checkDemo() {
				if (typeof window === 'undefined' || !this.component || this.component.type === 'vue-sfc' || this.component.showcase_url) return;
				try {
					await fetch('https://' + this.slug + '.vueplay.com/', { mode: 'no-cors', cache: 'no-store' });
					this.demo = true;
				} catch (e) {
					this.demo = false;
				}
			},
			day(date) {
				if (!date) return '';
				return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
			},
			toggleCode() {
				this.displayCode = !this.displayCode;
				if (this.displayCode) this.displayAnalyze = false;
				this.iframe?.contentWindow?.postMessage({
					toggleCode: true
				}, '*');
			},
			toggleAnalyze() {
				this.displayAnalyze = !this.displayAnalyze;
				if (this.displayAnalyze) this.displayCode = false;
				this.iframe?.contentWindow?.postMessage({
					toggleAnalyze: true
				}, '*');
			},
			async init(lazy = false) {
				if (lazy) return await this.loadComponent();
				if (!this.version) {
					await this.checkReadAccess();
					if (!this.component) await this.getComponent();
					await this.loadComponent();
				} else {
					const sequenceA = (async () => {
						await this.checkReadAccess();
						if (!this.component) await this.getComponent();
					})();
					const sequenceB = this.loadComponent();
					await Promise.all([sequenceA, sequenceB]);
				}
			},
			async publish() {
				await this.manager.service('applications')
					.patch(this.component.id, {
						published: true
					});
				this.component = null;
				await this.init();
			},
			async unpublish() {
				await this.manager.service('applications')
					.patch(this.component.id, {
						published: false
					});
				this.component = null;
				await this.init();
			},
			formatDate(date) {
				const pad = n => String(n)
					.padStart(2, '0');
				return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} 23:59:59`;
			},
			async newToken() {
				try {
					const title = prompt('Name your token', `${this.component.title || this.slug}`);
					if (!title) return;
					const now = new Date();
					const token = await this.auth.service('auth_sessions')
						.create({
							revoked: false,
							expires_at: this.formatDate(new Date(new Date(now)
								.setFullYear(now.getFullYear() + 1))),
							title
						});
					this.token = token?.accessToken || '';
				} catch (e) {
					console.log(e);
				}
			},
			async handleMessage(event) {
				if (typeof event.data.theme !== 'undefined') {
					if (this.theme !== event.data.theme) {
						this.updateTheme(event.data.theme);
					}
				} else if (event.data.key) {
					if (this.iframe?.contentWindow) {
						this.iframe.contentWindow.postMessage({
							key: event.data.key,
							value: event.data.value
						}, '*');
					}
				} else if (typeof event.data.modal !== 'undefined') {
					this.modal = event.data.modal;
				} else if (event.data.parents) {
					if (this.iframe?.contentWindow) {
						this.iframe.contentWindow.postMessage({
							parents: event.data.parents,
							content: event.data.content
						}, '*');
					}
				} else if (event.data.copy) {
					await this.copy(this.copyDeepEvent, event.data.copy, event.data.html);
					const clipboardItems = await navigator.clipboard.read();
					console.log('clipboardItems', clipboardItems);
					for (const item of clipboardItems) {
						if (item.types.includes('text/html')) {
							const blobHTML = await item.getType('text/html');
							const htmlText = await blobHTML.text();
							console.log('htmlText', htmlText);
							const doc = new DOMParser()
								.parseFromString(htmlText, 'text/html');
							const preElement = doc.querySelector('pre');
							const json = JSON.parse(preElement.textContent);
							console.log('Parsed JSON from clipboard:', json);
							const codeElement = doc.querySelector('code');
							console.log('Parsed component from clipboard:', codeElement.innerHTML);
						}
						if (item.types.includes('text/plain')) {
							const blobText = await item.getType('text/plain');
							const htmlText = await blobText.text();
							console.log('plain text', htmlText);
						}
					}
				}
			},
			async copy(event, text, html = '') {
				try {
					if (!html) {
						await navigator.clipboard.writeText(text);
					} else {
						await navigator.clipboard.write([new ClipboardItem({
							'text/plain': new Blob([text], {
								type: 'text/plain'
							}),
							'text/html': new Blob([html], {
								type: 'text/html'
							})
						})]);
					}
					if (!event) return;
					const message = 'Copied!';
					const color = `color-mix(in oklch, var(--color-neutral) 90%, ${this.theme !== 'dark' ? 'black' : 'white'})`;
					const backgroundColor = `color-mix(in oklch, var(--color-neutral) 40%, ${this.theme !== 'dark' ? 'white' : 'black'})`;
					const target = event.target;
					const rect = target.getBoundingClientRect();
					const msg = document.createElement('div');
					msg.innerText = message;
					Object.assign(msg.style, {
						position: 'fixed',
						left: `${rect.left + rect.width / 2}px`,
						top: `${rect.top - 20}px`,
						transform: 'translate(-50%, -50%)',
						color,
						backgroundColor,
						borderRadius: '6px',
						padding: '4px 8px',
						zIndex: 9999,
						transition: 'all 1.9s ease',
						pointerEvents: 'none',
						opacity: '1',
						fontSize: '14px'
					});
					document.body.appendChild(msg);
					void msg.offsetWidth;
					msg.style.top = `${rect.top - 70}px`;
					msg.style.opacity = '0';
					setTimeout(() => {
						msg.remove();
					}, 1900);
				} catch (err) {
					alert('Could not copy to clipboard');
					console.error('Failed to copy text:', err);
				}
			},
			async copyDeep(event) {
				this.copyDeepEvent = event;
				this.iframe?.contentWindow?.postMessage({
					deepCopy: true
				}, '*');
			},
			async download(url) {
				const response = await fetch(url, {
					headers: {
						Authorization: `Bearer ${this.account?.accessToken}`
					}
				});
				const blob = await response.blob();
				const a = document.createElement('a');
				a.href = URL.createObjectURL(blob);
				a.download = this.slug + '.mjs';
				document.body.appendChild(a);
				a.click();
				a.remove();
				URL.revokeObjectURL(a.href);
			},
			async checkReadAccess() {
				try {
					const response = await fetch(`https://manager.vueplay.io/applications?slug=${this.slug}&strict=true`, {
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					const apps = await response.json();
					this.readAccess = apps?.data?.length ? true : false;
					if (this.readAccess) {
						this.component = apps?.data?.[0];
					}
				} catch (e) {
					this.readAccess = false;
					console.log('Could not check read access', e);
				}
			},
			async getComponent() {
				const res = await fetch(`https://manager.vueplay.io/applications?slug=${this.slug}`, {
					headers: {
						Authorization: `Bearer ${this.account?.accessToken}`
					}
				});
				const apps = await res.json();
				this.component = apps?.data?.[0];
			},
			normalize(input) {
				return input.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/[^a-zA-Z]/g, '');
			},
			async loadComponent(url = `https://manager.vueplay.io/${this.slug}@${this.version || this.component?.latest_version || 'latest'}/esm`) {
				if (typeof window !== 'undefined') return; // (the preview loads itself: ComponentPlayground)
				if (this.component?.type !== 'vue-sfc' && !this.version) return;
				try {
					const response = await fetch(url, {
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					let code = await response.text();
					const importRegex = /import\s*{([^}]+)}\s*from\s*["']vue["']/g;
					code = code.replace(importRegex, (_, methodsString) => {
						const methodAliases = methodsString.split(',')
							.map(item => {
								const [method, alias] = item.split(' as ')
									.map(s => s.trim());
								return {
									method,
									alias: alias || method
								};
							});
						const destructureLine = `const { ${[...new Set(methodAliases.map(({
            method
          }) => method))].join(', ')} } = VUE;`;
						const aliasLines = methodAliases.filter(({
								method,
								alias
							}) => method !== alias)
							.map(({
								method,
								alias
							}) => `const ${alias} = ${method};`)
							.join('\n');
						return `${destructureLine}\n${aliasLines}`;
					});
					code = code.replaceAll(';;', ';');
					let exportedName;
					let cleanedCode;
					const matchNamed = code.match(/export\s*{\s*(\w+)\s+as\s+default\s*};?/);
					if (matchNamed) {
						exportedName = matchNamed[1];
						cleanedCode = code.replace(matchNamed[0], '');
					} else {
						const matchDirect = code.match(/export\s+default\s+(\w+);?/);
						if (matchDirect) {
							exportedName = matchDirect[1];
							cleanedCode = code.replace(matchDirect[0], '');
						} else {
							const matchInline = code.match(/export\s+default\s+(.+?);?$/s);
							if (matchInline) {
								const tempVar = '__default_export__';
								exportedName = tempVar;
								cleanedCode = code.replace(matchInline[0], `const ${tempVar} = ${matchInline[1]}`);
							} else {
								throw new Error('Could not find a valid default export');
							}
						}
					}
					const module = new Function('VUE', cleanedCode + `; return ${exportedName}`);
					this.dynamicComponents.push({
						type: 'main',
						component: module(VUE)
					});
				} catch (error) {
					console.error('Failed to load component:', error);
					this.dynamicComponents.push({
						type: 'main',
						component: VUE.defineAsyncComponent(() => import( /* @vite-ignore */ url))
					});
				}
			}
		},
		head() {
			const kindCategory = categoryOf(this.component?.type);
			const path = `/market/${this.component ? kindCategory : this.category}/${this.component?.slug || this.slug}`;
			const image = `https://manager.vueplay.io/image/${this.slug}`;
			if (!this.component) {
				return pageHead({
					title: 'Vue Play Market item',
					description: 'An item in the Vue Play Market: Vue components and templates made in Vue Play Studio.',
					noindex: true
				});
			}
			const name = this.component.title || this.component.slug;
			const kind = typeName(this.component.type);
			let title = `${name} · Vue ${kind} · Vue Play Market`;
			if (title.length > 60) title = `${name} · Vue Play Market`;
			if (title.length > 60) title = name.slice(0, 60);
			let description = (this.component.description || '').replace(/\s+/g, ' ').trim();
			if (description.length < 70) description = (description ? description + ' ' : '') + `A Vue ${kind} in the Vue Play Market, made in Vue Play Studio${this.component.price ? '' : ', free to use'}.`;
			if (description.length > 160) description = description.slice(0, 157).replace(/\s+\S*$/, '') + '…';
			// (one that is not public, or not published, is kept out of search engines)
			const listed = this.component.public && this.component.published && !this.component.hidden;
			const schema = {
				'@context': 'https://schema.org',
				'@type': this.component.type === 'vue-sfc' ? 'SoftwareSourceCode' : 'CreativeWork',
				name,
				description,
				image,
				url: ORIGIN + path,
				dateCreated: this.component.created_at,
				dateModified: this.component.updated_at,
				...(this.component.type === 'vue-sfc' ? { programmingLanguage: 'Vue', version: this.component.latest_version } : {}),
				offers: {
					'@type': 'Offer',
					price: ((this.component.price || 0) / 100).toFixed(2),
					priceCurrency: 'USD',
					availability: 'https://schema.org/InStock',
					url: ORIGIN + path
				}
			};
			return pageHead({
				title,
				description,
				path,
				image,
				noindex: !listed,
				schema: listed ? schema : null
			});
		}
	};

</script>
<style>
	.vp-crumbs {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
		color: var(--vp-muted);
		font-size: 0.9rem;
	}

	.vp-crumbs a {
		color: inherit;
		text-decoration: none;
	}

	.vp-crumbs a:hover {
		color: var(--vp-primary);
	}

	.vp-crumbs [aria-current] {
		color: var(--vp-text);
		font-weight: 600;
	}

	.vp-product {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
		gap: clamp(24px, 4vw, 56px);
		align-items: start;
	}

	.vp-product__picture {
		position: relative;
		display: grid;
		place-items: center;
		aspect-ratio: 16 / 10;
		overflow: hidden;
		border: 1px solid var(--vp-border);
		border-radius: 18px;
		background:
			radial-gradient(120% 90% at 20% 0%, color-mix(in oklch, var(--vp-primary) 18%, transparent), transparent 60%),
			var(--vp-surface);
		box-shadow: 0 30px 60px -36px rgba(6, 40, 30, 0.4);
	}

	.vp-product__picture img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.vp-product__icon {
		width: 32%;
		aspect-ratio: 1;
		background: var(--vp-primary);
		-webkit-mask: var(--icon) center / contain no-repeat;
		mask: var(--icon) center / contain no-repeat;
	}

	.vp-product__placeholder {
		width: 26%;
		fill: none;
		stroke: var(--vp-muted);
		stroke-width: 1.5;
	}

	.vp-product__about {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	.vp-product__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.vp-product__title {
		margin: 0;
		font-family: var(--vp-font-heading);
		font-size: clamp(2rem, 4vw, 2.75rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.vp-product__text {
		margin: 0;
		color: var(--vp-muted);
		font-size: 1.0625rem;
		line-height: 1.65;
	}

	.vp-product__buy {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		padding: 1.1rem 1.2rem;
		border: 1px solid var(--vp-border);
		border-radius: 14px;
		background: var(--vp-surface);
	}

	.vp-product__price {
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
	}

	.vp-product__price b {
		font-size: 1.75rem;
		font-weight: 800;
		letter-spacing: -0.02em;
	}

	.vp-product__price span {
		color: var(--vp-muted);
		font-size: 0.875rem;
	}

	.vp-product__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.vp-product__facts {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
		gap: 0.9rem 1.25rem;
		margin: 0.25rem 0 0;
	}

	.vp-product__facts dt {
		color: var(--vp-muted);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.vp-product__facts dd {
		margin: 0.1rem 0 0;
		font-weight: 500;
		overflow-wrap: anywhere;
	}

	.vp-product__h2 {
		margin: 0;
		font-family: var(--vp-font-heading);
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: -0.015em;
	}

	.vp-frame {
		position: relative;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		border: 1px solid var(--vp-border);
		border-radius: 14px;
		background: var(--vp-surface);
	}

	.vp-frame--flat {
		border-radius: 0 0 14px 14px;
		border-top: 0;
	}

	.vp-frame iframe {
		position: relative;
		z-index: 1;
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
		background: white;
	}

	.vp-frame__loader {
		position: absolute !important;
		top: calc(50% - 24px);
		left: calc(50% - 24px);
	}

	.vp-preview {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 16px;
	}

	.vp-preview--controls {
		grid-template-columns: minmax(0, 1fr) 320px;
	}

	.vp-preview__bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.35rem;
		padding: 0.45rem;
		border: 1px solid var(--vp-border);
		border-radius: 14px 14px 0 0;
		background: var(--vp-surface);
	}

	.vp-preview__bar button {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.35rem 0.65rem;
		border: 1px solid transparent;
		border-radius: 8px;
		background: none;
		color: var(--vp-text);
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
	}

	.vp-preview__bar button:hover,
	.vp-preview__bar .vp-preview__on {
		border-color: var(--vp-border);
		background: var(--vp-background);
	}

	.vp-preview__label {
		margin-left: auto;
		padding-right: 0.5rem;
		color: var(--vp-muted);
		font-size: 0.8125rem;
	}

	.vp-preview__modal {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		width: 100%;
		height: 100%;
		border: 0;
	}

	.vp-preview__slots {
		display: block;
		width: 100%;
		max-height: 150px;
		aspect-ratio: 16 / 9;
		margin-top: 10px;
		border: 1px solid var(--vp-border);
		border-radius: 12px;
	}

	.vp-preview__controls {
		overflow: hidden;
		border: 1px solid var(--vp-border);
		border-radius: 14px;
		background: var(--vp-surface);
	}

	.vp-preview__controls iframe {
		display: block;
		width: 100%;
		height: 100%;
		min-height: 420px;
		border: 0;
	}

	.vp-use {
		display: flex;
		flex-direction: column;
		gap: 1.75rem;
		padding: clamp(1.25rem, 3vw, 2rem);
		border: 1px solid var(--vp-border);
		border-radius: 18px;
	}

	.vp-use__head {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.vp-use__note {
		margin: 0.35rem 0 0;
		color: var(--vp-muted);
	}

	.vp-use__step {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.vp-use__step h3 {
		margin: 0;
		font-size: 1.0625rem;
		font-weight: 700;
	}

	.vp-use__step p {
		margin: 0;
		color: var(--vp-muted);
		font-size: 0.9375rem;
	}

	.vp-use__step code {
		font: 600 0.9em ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	}

	.vp-share {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem 1.5rem;
	}

	.vp-share__links {
		display: flex;
		gap: 0.5rem;
	}

	.vp-share__links a {
		display: inline-grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		color: var(--vp-text);
		transition: border-color 140ms ease, color 140ms ease;
	}

	.vp-share__links a:hover {
		border-color: var(--vp-primary);
		color: var(--vp-primary);
	}

	.vp-share__links svg {
		width: 1.15rem;
		height: 1.15rem;
		fill: currentColor;
	}

	.vp-share__admin {
		margin-left: auto;
	}

	@media (max-width: 900px) {
		.vp-product {
			grid-template-columns: 1fr;
		}

		.vp-preview--controls {
			grid-template-columns: minmax(0, 1fr);
		}

		.vp-frame {
			aspect-ratio: 3 / 4;
		}
	}

	.loader {
		position: relative;
		display: inline-block;
		transform: rotateZ(45deg);
		perspective: 1000px;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		color: #fff;
	}

	.loader:before,
	.loader:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		transform: rotateX(70deg);
		animation: 1s vp-spin linear infinite;
	}

	.loader:before {
		color: #697C8C;
	}

	.loader:after {
		color: #27A575;
		transform: rotateY(70deg);
		animation-delay: .4s;
	}

	@keyframes vp-spin {

		0%,
		100% {
			box-shadow: .2em 0px 0 0px currentcolor;
		}

		12% {
			box-shadow: .2em .2em 0 0 currentcolor;
		}

		25% {
			box-shadow: 0 .2em 0 0px currentcolor;
		}

		37% {
			box-shadow: -.2em .2em 0 0 currentcolor;
		}

		50% {
			box-shadow: -.2em 0 0 0 currentcolor;
		}

		62% {
			box-shadow: -.2em -.2em 0 0 currentcolor;
		}

		75% {
			box-shadow: 0px -.2em 0 0 currentcolor;
		}

		87% {
			box-shadow: .2em -.2em 0 0 currentcolor;
		}
	}

.vp-page-shot {
	height: 560px;
	overflow: hidden;
	border: 1px solid var(--vp-border);
	border-radius: 14px;
	background: var(--vp-surface);
}
.vp-page-shot img {
	display: block;
	width: 100%;
	height: auto;
	transform: translateY(0);
	transition: transform 6s ease-in-out;
}
.vp-page-shot:hover img {
	transform: translateY(calc(-100% + 560px));
}
@media (prefers-reduced-motion: reduce) {
	.vp-page-shot { overflow-y: auto; }
	.vp-page-shot:hover img { transform: none; }
}
</style>
