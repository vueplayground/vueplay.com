<template>
	<Dashboard
		headerHeight="96"
		style="position:relative"
	>
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position:sticky; top: 0px; width: 100%"></Sidebar>
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
						>Transform - Layout</Text>
					</Box> <Text>
						<Box
							column="{`default`:{`xs`:{`light`:true},`sm`:{`light`:false}}}"
							style="padding:0px"
						>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								width="{`default`:{`lg`:{`light`:`50%`}}}"
								paddingRight="{`default`:{`lg`:{`light`:`30px`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								style="max-width:100%"
							>
								<div style="margin-bottom:40px">Vue Play is built from the ground up to be drag-and-drop friendly, making layout design fast, flexible, and visual. You can easily reposition components by dragging them within the canvas or between layers in the layout tree.</div>
								<div style="margin-bottom:40px">It provides smooth, intuitive controls that let you transform your layout without touching code. It’s perfect for designers and developers who want real-time feedback while crafting interfaces.</div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								style="padding:0px"
								width="{`default`:{`lg`:{`light`:`50%`}}}"
							><img
									src="@/assets/layers.png"
									style="width:100%;max-width:280px;border-radius:8px"
								/></Box>
						</Box>
					</Text>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import Link from '@vueplayio/link';
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/Sidebar.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
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
				title: 'Vue Play - Transform Layouts Visually and Effortlessly',
				meta: [
					{
						name: 'description',
						content: 'Design layouts visually with Vue Play. Drag, drop, and transform components in real-time using an intuitive interface built for designers and developers.'
					},
					{
						property: 'og:title',
						content: 'Vue Play - Visual Layout Transformation for Vue Components'
					},
					{
						property: 'og:description',
						content: 'Build beautiful layouts faster with Vue Play. Enjoy drag-and-drop editing, responsive design tools, and real-time feedback without writing code.'
					},
					{
						property: 'og:type',
						content: 'website'
					},
					{
						property: 'og:url',
						content: 'https://vueplay.com/features/transform/layout'
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
						content: 'Vue Play - Visual Layout Transformation for Vue Components'
					},
					{
						name: 'twitter:description',
						content: 'Design and transform your Vue layouts with ease. Vue Play offers drag-and-drop precision and a flexible visual editor for developers and designers alike.'
					},
					{
						name: 'twitter:image',
						content: image
					}
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://vueplay.com/features/transform/layout'
					}
				]
			}
		}
	};

</script>
<style scoped></style>