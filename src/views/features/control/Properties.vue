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
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					style="padding-bottom:100px"
					column="{`default`:{`xs`:{`light`:true}}}"
					marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
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
						>Control - Properties</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play includes flexible prop controllers that let you visually manage component behavior and configuration. Whether you're toggling a boolean, selecting from options, or binding dynamic values, prop controllers give you an intuitive interface for setting props without touching code. Combined with powerful breakpoint support, you can adjust both props and styles per screen size—ensuring your components look and behave perfectly across mobile, tablet, and desktop.</div><img
							src="@/assets/props.png"
							style="width:100%;max-width:300px"
						/>
					</Text>
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
		data: () => ({}),
		head() {
			const image = 'https://vueplay.com/screenshot.png'
			const url = 'https://vueplay.com/features/control/properties'
			const title = 'Control – Properties | Vue Play'
			const description = 'Manage props visually with Vue Play’s prop controllers. Bind booleans, values, and breakpoints using an intuitive interface—no code needed. Ensure perfect behavior across all devices with responsive support.'

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