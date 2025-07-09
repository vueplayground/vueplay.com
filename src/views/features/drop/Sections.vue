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
							>Drop - Sections</Text>
						</Box> <Text data-allow-mismatch="">
							<div style="margin-bottom: 30px;">Vue Play offers pre-made layout sections, combining multiple elements and components designed to help you build complex structures faster and easier.</div>
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
									v-for="section in sections?.data.filter(e => e.category_id === category.id) || []"
									style="padding:0px"
									backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
									color="{`default`:{`xs`:{`light`:`#ffffffff`}}}"
									:title="section.description"
								>
									<div style="display:flex;
    box-sizing: border-box;
    transition: linear all .2s;width:120px;height:80px;
    cursor: pointer;align-content:center;justify-content:center;align-items:center;flex-direction:column">
										<Box
											v-html="section.icon || ''"
											style="width:100%;height:50px;padding:0px"
											justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
											alignItems="{`default`:{`xs`:{`light`:`center`}}}"
											:title="section.title || section.slug"
											overflow="{`default`:{`xs`:{`light`:`visible`}}}"
										></Box><span style="font-size:12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: calc(100% - 20px);">{{ section.title || section.slug }}</span>
									</div>
								</Box>
							</Box>
							<p style="margin-bottom: 30px;">
							</p>
						</Text>
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
			sections: null
		}),
		async mounted() {
			if (!this.categories) await this.getCategories();
			if (!this.sections) await this.getSections();
		},
		async serverPrefetch() {
			await this.getCategories();
			await this.getSections();
		},
		methods: {
			async getCategories() {
				try {
					const result = await fetch('https://manager.vueplay.io/section_categories?$limit=1000', {
						headers: {
							'Content-Type': 'application/json'
						}
					});
					this.categories = await result.json();
				} catch (e) {
					console.log('err', e);
				}
			},
			async getSections() {
				try {
					const result = await fetch('https://manager.vueplay.io/sections?$limit=1000', {
						headers: {
							'Content-Type': 'application/json'
						}
					});
					this.sections = await result.json();
				} catch (e) {
					console.log('err', e);
				}
			}
		},
		head() {
			const image = 'https://vueplay.com/screenshot.png'
			const url = 'https://vueplay.com/features/drop/sections'
			const title = 'Drop - Sections | Vue Play'
			const description = 'Vue Play offers pre-made layout sections, combining multiple elements and components designed to help you build complex structures faster and easier.'

			return {
				title,
				meta: [
				{
					name: 'description',
					content: description
				},
				{
					property: 'og:title',
					content: title
				},
				{
					property: 'og:description',
					content: description
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: url
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
					content: title
				},
				{
					name: 'twitter:description',
					content: description
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: url
				}
				]
			}
			}
	};

</script>
<style scoped></style>