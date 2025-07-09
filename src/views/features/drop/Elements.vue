<template>
	<Dashboard headerHeight="96">
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%;z-index:10"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position: sticky; top: 0px; width: 100%;z-index:5"></Sidebar>
		</template> <template #default="">
			<Box
				expand="{`default`:{`xs`:{`light`:true}}}"
				justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
				style="padding-bottom:80px"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					column="{`default`:{`xs`:{`light`:true}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
					style="width:100%;padding:0px"
				>
					<Box
						contain="{`default`:{`xs`:{`light`:true}}}"
						column="{`default`:{`xs`:{`light`:true}}}"
						marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
						paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
						paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
						style="width:100%"
					>
						<Box
							style="border-bottom-width:2px"
							borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 90%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 90%, black)`}}}"
							paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
							paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
							paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
							marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
							paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<Text
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								fontSize="{`default`:{`xs`:{`light`:`30px`},`lg`:{`light`:`35px`}}}"
								class="hash"
							>Drop - Elements</Text>
						</Box> <Text data-allow-mismatch="">
							<div style="margin-bottom: 30px;">Vue Play supports dropping native HTML elements directly into your projects. Almost every standard HTML element is available, allowing you to build flexible layouts and content without limitations.</div>
							<Box
								style="padding:0px;gap:20px"
								v-for="category in categories?.data || []"
								marginBottom="{`default`:{`xs`:{`light`:`40px`}}}"
							>
								<h2
									style="width:100%;font-size:30px;margin-top:30px"
									:id="category.title"
								>{{category.title}}</h2>
								<div style="width:100%;margin-bottom:15px">
									{{category.description}}
								</div>
								<Box
									v-for="element in elements?.data.filter(e => e.category_id === category.id) || []"
									style="padding:0px"
									backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
									color="{`default`:{`xs`:{`light`:`#ffffffff`}}}"
									:title="element.description"
								>
									<div style="display:flex;
    box-sizing: border-box;
    transition: linear all .2s;width:120px;height:80px;
    cursor: pointer;align-content:center;justify-content:center;align-items:center;flex-direction:column">
										<Box
											v-html="element.icon || ''"
											style="width:100%;height:50px;padding:0px"
											justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
											alignItems="{`default`:{`xs`:{`light`:`center`}}}"
										></Box><span style="font-size:12px">&lt;{{ element.tag }}&gt;</span>
									</div>
								</Box>
							</Box>
						</Text>
						<div style="margin-bottom: 30px;">All elements comes with prop, attribute & style controls where it is supported, allowing you to configure them for any use case.</div>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/Sidebar.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Text: Text,
			Dashboard: Dashboard,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header,
			Sidebar: Sidebar
		},
		inject: ['manager'],
		data: () => ({
			categories: null,
			elements: null
		}),
		async mounted() {
			if (!this.categories) await this.getCategories();
			if (!this.elements) await this.getElements();
		},
		async serverPrefetch() {
			const resultCategories = await fetch('https://manager.vueplay.io/element_categories?$limit=1000&id[$nin][]=11&id[$nin][]=12', {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			this.categories = await resultCategories.json();
			const resultElements = await fetch('https://manager.vueplay.io/elements?$limit=1000&category_id[$nin][]=11&category_id[$nin][]=12&experimental=false&deprecated=false', {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			this.elements = await resultElements.json();
		},
		methods: {
			async getCategories() {
				try {
					this.categories = await this.manager.service('element_categories')
						.find({
							query: {
								$limit: 1000,
								id: {
									$nin: [11, 12]
								}
							}
						});
				} catch (e) {
					console.log('err', e);
				}
			},
			async getElements() {
				try {
					this.elements = await this.manager.service('elements')
						.find({
							query: {
								$limit: 1000,
								category_id: {
									$nin: [11, 12]
								},
								experimental: false,
								deprecated: false
							}
						});
				} catch (e) {
					console.log('err', e);
				}
			}
		},
		head() {
			const image = 'https://vueplay.com/screenshot.png'

			return {
				title: 'Drop - Elements | Vue Play',
				meta: [
				{
					name: 'description',
					content: 'Vue Play supports dropping native HTML elements directly into your projects, enabling flexible layouts and rich content with full customization.'
				},
				{
					property: 'og:title',
					content: 'Drop - Elements | Vue Play'
				},
				{
					property: 'og:description',
					content: 'Build flexible layouts easily by dropping native HTML elements with Vue Play’s intuitive interface.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/features/drop/elements'
				},
				{
					property: 'og:image',
					content: image
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					name: 'twitter:title',
					content: 'Drop - Elements | Vue Play'
				},
				{
					name: 'twitter:description',
					content: 'Build flexible layouts easily by dropping native HTML elements with Vue Play’s intuitive interface.'
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/features/drop/elements'
				}
				]
			}
			}
	};

</script>
<style scoped></style>