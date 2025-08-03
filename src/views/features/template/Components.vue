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
						>Templating - Components</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play supports adding components to templates, making it easy to reuse pre-made components specifically designed for the template. Once a component is added to a template, it can be seamlessly used across various views, ensuring consistency and saving time when building new pages. This feature helps you maintain a unified look and feel throughout your project, as all the components will automatically match the style and design choices defined in your template.</div><img
							src="@/assets/components.png"
							style="width:100%;max-width:700px;border-radius:8px"
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
			const image = "https://vueplay.com/screenshot.png";
			return {
				title: 'Vue Play - Templating Components',
				meta: [
					{
						name: 'description',
						content: 'Reuse pre-made components across your templates effortlessly with Vue Play. Maintain consistent design and speed up building new pages.'
					},
					{
						property: 'og:title',
						content: 'Vue Play - Templating Components'
					},
					{
						property: 'og:description',
						content: 'Add and reuse components in your templates to keep consistent style and design throughout your Vue Play projects.'
					},
					{
						property: 'og:type',
						content: 'website'
					},
					{
						property: 'og:url',
						content: 'https://vueplay.com/features/templating/components'
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
						content: 'Vue Play - Templating Components'
					},
					{
						name: 'twitter:description',
						content: 'Add and reuse components in your templates to keep consistent style and design throughout your Vue Play projects.'
					},
					{
						name: 'twitter:image',
						content: image
					}
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://vueplay.com/features/templating/components'
					}
				]
			}
		}
	};

</script>
<style scoped></style>