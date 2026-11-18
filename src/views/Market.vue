<template>
	<Page>
		<PageIntro :eyebrow="intro.eyebrow" :title="intro.title" :text="intro.text">
			<div class="vp-market-search" role="search">
				<svg class="vp-i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
				<input v-model="term" type="search" :placeholder="searchText" :aria-label="searchText" />
			</div>
			<MarketNav></MarketNav>
		</PageIntro>
		<Section space="small" gap="20px">
			<p class="vp-market-count" aria-live="polite" data-allow-mismatch="">
				<template v-if="!components">Loading…</template>
				<template v-else>{{ shown.length }} {{ shown.length === 1 ? 'item' : 'items' }}{{ term ? ` for “${term}”` : '' }}</template>
			</p>
			<div v-if="components && !shown.length" class="vp-panel vp-panel--soft vp-market-empty">
				<h2>No results found</h2>
				<p>Try another word, or look in another category.</p>
			</div>
			<ul v-else class="vp-market-grid" data-allow-mismatch="children">
				<li v-for="component in shown" :key="component.id || component.slug">
					<MarketCard :component="component" :category="category"></MarketCard>
				</li>
			</ul>
		</Section>
		<Section space="medium" align="center" gap="14px">
			<Heading level="h2" size="medium" align="center">Make your own and sell it</Heading>
			<Paragraph :muted="true" align="center" width="560px">Build a component or a template in the Studio, give it a price, and publish it here.</Paragraph>
			<Stack spread="center" gap="12px">
				<Button href="https://studio.vueplay.com">Open the Studio</Button>
				<Button href="/pricing" variant="outline">Pricing</Button>
			</Stack>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import MarketNav from '@/components/SidebarMarket.vue';
	import MarketCard from '@/components/MarketCard.vue';
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { pageHead } from '@/components/head.js';
	// What each category is called and says; the ones under "Yours" and "Admin" are private
	const CATEGORIES = {
		all: ['Market', 'Vue Play Market', 'Components and templates made in Vue Play Studio, ready to drop into your site or to start a new one from.'],
		components: ['Market', 'Vue components', 'Components to drop into any Vue site: install them with npm, or drag them in in Vue Play Studio.'],
		templates: ['Market', 'Vue templates', 'Whole sites to start from, with their pages, pictures and look. Open one in the Studio and change everything.'],
		priced: ['Market', 'Premium components and templates', 'Components and templates sold by their makers in the Vue Play Market.'],
		me: ['Yours', 'Your market items', 'Everything you make or take part in.'],
		purchases: ['Yours', 'Your purchases', 'What you have bought in the Market.'],
		private: ['Yours', 'Your private items', 'Items only you and your teams can see.'],
		published: ['Yours', 'Your published items', 'Your items that are in the Market.'],
		'in-review': ['Yours', 'Your items in review', 'Your items waiting to be published.'],
		hidden: ['Yours', 'Your hidden items', 'Your items that are not listed.'],
		archived: ['Yours', 'Your archived items', 'Your items that are archived.'],
		'published-all': ['Admin', 'Published items', 'Everything that is published.'],
		'in-review-all': ['Admin', 'Items in review', 'Everything waiting to be published.'],
		'private-all': ['Admin', 'Private items', 'Everything that is private.'],
		'hidden-all': ['Admin', 'Hidden items', 'Everything that is hidden.'],
		'archived-all': ['Admin', 'Archived items', 'Everything that is archived.']
	};
	const PUBLIC = ['all', 'components', 'templates', 'priced'];
	export default {
		components: {
			Page,
			PageIntro,
			MarketNav,
			MarketCard,
			Section,
			Heading,
			Paragraph,
			Stack,
			Button
		},
		props: {
			category: {
				type: String,
				default: 'all'
			}
		},
		inject: ['manager', 'account'],
		data: () => ({
			components: null,
			term: ''
		}),
		async mounted() {
			if (this.components) return
			await this.getComponents();
		},
		async serverPrefetch() {
			await this.getComponents();
		},
		watch: {
			async category() {
				// (a search typed in goes on in the next category)
				if (this.term) await this.search();
				else await this.getComponents();
			},
			async term() {
				await this.search();
			}
		},
		computed: {
			type() {
				if (this.category === 'components') return 'vue-sfc';
				if (this.category === 'templates') return 'vue-template';
				return '';
			},
			intro() {
				const [eyebrow, title, text] = CATEGORIES[this.category] || [`Market`, `Market: ${this.category}`, ''];
				return { eyebrow, title, text };
			},
			searchText() {
				return this.category === 'all' ? 'Search the Market' : `Search in ${this.intro.title.toLowerCase()}`;
			},
			shown() {
				return this.components?.data || [];
			}
		},
		methods: {
			async getComponents() {
				if (this.account) return this.search();
				let query = 'https://manager.vueplay.io/applications?$limit=1000&public=true&published=true&hidden=false&$sort[updated_at]=-1';
				if (this.type) query += '&type=' + this.type;
				if (this.category === 'priced') query += '&price[$gt]=0';
				const res = await fetch(query);
				this.components = await res.json();
			},
			async search() {
				const query = {
					$limit: 1000,
					$sort: {
						updated_at: -1
					},
					title: {
						$like: '%' + this.term + '%'
					}
				};
				if (this.type) query.type = this.type;
				if (this.category === 'priced') query.price = {
					$gt: 0
				};
				if (this.category === 'me' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
				} else if (this.category === 'in-review-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.public = true;
					query.published = false;
				} else if (this.category === 'in-review' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = true;
					query.published = false;
				} else if (this.category === 'hidden-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.hidden = true;
				} else if (this.category === 'published' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = true;
					query.published = true;
				} else if (this.category === 'hidden' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.hidden = true;
				} else if (this.category === 'purchases' && this.account) {
					const apps = await this.manager.service('application_purchases')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					const appIds = apps?.data.map(app => app.application_id) || [];
					query.id = {
						$in: appIds || []
					};
					query.includeArchived = true;
				} else if (this.category === 'private' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = false;
				} else if (this.category === 'private-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.public = false;
				} else if (this.category === 'archived' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.archived_at = {
						$gt: '0000-01-01'
					};
				} else if (this.category === 'archived-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.archived_at = {
						$gt: '0000-01-01'
					};
				} else {
					query.public = true;
					query.published = true;
					query.hidden = false;
				}
				this.components = await this.manager.service('applications')
					.find({
						query
					});
			}
		},
		head() {
			const listed = PUBLIC.includes(this.category);
			const path = this.category === 'all' ? '/market' : `/market/${this.category}`;
			const titles = {
				all: 'Vue Play Market: Vue components and templates',
				components: 'Vue components · Vue Play Market',
				templates: 'Vue templates · Vue Play Market',
				priced: 'Premium components and templates · Vue Play Market'
			};
			const descriptions = {
				all: 'Browse Vue components and whole-site templates made in Vue Play Studio. Install them with npm, or start a new site from a template.',
				components: 'Vue components made in Vue Play Studio: install them with npm, embed them from a CDN, or drag them into your site in the Studio.',
				templates: 'Vue templates made in Vue Play Studio: whole sites with pages, pictures and a look of their own. Open one and change everything.',
				priced: 'Premium Vue components and templates sold by their makers in the Vue Play Market, with a preview of each before you buy.'
			};
			if (!listed) return pageHead({
				title: `${this.intro.title} · Vue Play Market`,
				description: 'Your Vue Play Market items: what you make, publish, keep private, archive and buy in the Vue Play Market.',
				noindex: true
			});
			return pageHead({
				title: titles[this.category],
				description: descriptions[this.category],
				path
			});
		}
	};

</script>
<style>
	.vp-market-search {
		position: relative;
		width: 100%;
		max-width: 36rem;
		margin-top: 0.5rem;
	}

	.vp-market-search svg {
		position: absolute;
		top: 50%;
		left: 1.1rem;
		width: 1.2rem !important;
		height: 1.2rem !important;
		transform: translateY(-50%);
		color: var(--vp-muted);
		pointer-events: none;
	}

	.vp-market-search input {
		box-sizing: border-box;
		width: 100%;
		height: 3.25rem;
		padding: 0 1.25rem 0 3rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		background: var(--vp-background);
		color: var(--vp-text);
		font: inherit;
		font-size: 1.0625rem;
		box-shadow: 0 10px 30px -18px rgba(6, 40, 30, 0.35);
		transition: border-color 140ms ease, box-shadow 140ms ease;
	}

	.vp-market-search input:focus {
		border-color: var(--vp-primary);
		outline: none;
		box-shadow: 0 0 0 4px color-mix(in oklch, var(--vp-primary) 20%, transparent);
	}

	.vp-market-count {
		margin: 0;
		color: var(--vp-muted);
		font-size: 0.9375rem;
	}

	.vp-market-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
		gap: 22px;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.vp-market-grid>li {
		display: flex;
	}

	.vp-market-empty {
		text-align: center;
	}

	.vp-market-empty h2 {
		margin: 0 0 0.25rem;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.vp-market-empty p {
		margin: 0;
		color: var(--vp-muted);
	}

</style>
