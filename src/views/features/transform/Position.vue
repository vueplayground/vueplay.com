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
						>Transform - Position</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Precisely control layout with absolute positioning. With the transform position tool, you can place elements exactly where you want by simply dragging them across the canvas. This is especially useful for custom designs, overlays, and creative layouts that require fine-tuned placement.</div><img
							src="@/assets/position.png"
							style="width:100%;max-width:320px"
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
				title: 'Vue Play - Transform Position',
				meta: [
					{
						name: 'description',
						content: 'Learn how to precisely position elements using Vue Play’s transform tool. Drag and place components exactly where you want them for pixel-perfect layouts.'
					},
					{
						property: 'og:title',
						content: 'Vue Play - Transform Position'
					},
					{
						property: 'og:description',
						content: 'Drag and drop elements with precision using Vue Play’s transform positioning. Ideal for creative layouts and exact designs.'
					},
					{
						property: 'og:type',
						content: 'website'
					},
					{
						property: 'og:url',
						content: 'https://vueplay.com/features/transform/position'
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
						content: 'Vue Play - Transform Position'
					},
					{
						name: 'twitter:description',
						content: 'Drag and drop elements with precision using Vue Play’s transform positioning. Ideal for creative layouts and exact designs.'
					},
					{
						name: 'twitter:image',
						content: image
					}
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://vueplay.com/features/transform/position'
					}
				]
			};
		}
	};

</script>
<style scoped></style>