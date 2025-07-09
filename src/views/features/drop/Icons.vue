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
							>Drop - Icons</Text>
						</Box>
						<div style="margin-bottom: 30px;">
							Vue Play supports dropping icons directly into your designs. Currently, it includes both
							<strong>solid</strong> and <strong>outlined</strong> icons from <strong><a
									href="https://github.com/tailwindlabs/heroicons"
									target="_blank"
									style="color:var(--color-primary)"
								>Tailwind Heroicons</a></strong>, with more icon libraries planned to be added in the future.
						</div>
						<Box
							style="padding:0px;gap:20px"
							marginBottom="{`default`:{`xs`:{`light`:`40px`}}}"
							data-allow-mismatch=""
						>
							<div v-if="!icons?.data?.length">Loading...</div>
							<Box
								v-for="icon in icons?.data || []"
								style="padding:0px"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
								color="{`default`:{`xs`:{`light`:`#ffffffff`}}}"
								:title="icon.slug"
							>
								<div style="display:flex;
    box-sizing: border-box;
    transition: linear all .2s;width:120px;height:80px;
    cursor: pointer;align-content:center;justify-content:center;align-items:center;flex-direction:column">
									<Box
										v-html="icon.outline || ''"
										style="width:100%;height:50px;padding:0px"
										justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
										alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									></Box><span style="font-size:12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: calc(100% - 20px);">{{ icon.title || icon.slug }}</span>
								</div>
							</Box>
						</Box>
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
			icons: null
		}),
		async mounted() {
			if (!this.icons) await this.getIcons();
		},
		async serverPrefetch() {
			const resultIcons = await fetch('https://manager.vueplay.io/icons?$limit=1000', {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			this.icons = await resultIcons.json();
		},
		methods: {
			async getIcons() {
				try {
					this.icons = await this.manager.service('icons')
						.find({
							query: {
								$limit: 1000
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
				title: 'Drop - Icons | Vue Play',
				meta: [
				{
					name: 'description',
					content: 'Vue Play supports dropping icons directly into your designs. Includes solid and outlined icons from Tailwind Heroicons, with more libraries coming soon.'
				},
				{
					property: 'og:title',
					content: 'Drop - Icons | Vue Play'
				},
				{
					property: 'og:description',
					content: 'Add beautiful icons easily to your Vue Play projects using solid and outlined Heroicons, improving your UI with minimal effort.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/features/drop/icons'
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
					content: 'Drop - Icons | Vue Play'
				},
				{
					name: 'twitter:description',
					content: 'Add beautiful icons easily to your Vue Play projects using solid and outlined Heroicons, improving your UI with minimal effort.'
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/features/drop/icons'
				}
				]
			}
			}
	};

</script>
<style scoped></style>