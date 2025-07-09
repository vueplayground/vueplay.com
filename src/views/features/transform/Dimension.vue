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
						>Transform - Dimension</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Simply click and drag the corners or borders of any element or component to adjust its width and height directly on the canvas. This visual approach to layout editing speeds up design workflows and gives you precise control without writing a single line of code.</div><img
							src="@/assets/transform.png"
							style="width:100%;max-width:520px"
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
				title: 'Vue Play - Visual Dimension Control with Drag Handles',
				meta: [{
					name: 'description',
					content: 'Learn how Vue Play lets you resize components visually with click-and-drag precision directly in the canvas.'
				}, {
					property: 'og:title',
					content: 'Vue Play - Visual Component Resizing'
				}, {
					property: 'og:description',
					content: 'Click and drag to resize components in Vue Play. Design visually without code.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/features/transform/dimension'
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play - Visual Component Resizing'
				}, {
					name: 'twitter:description',
					content: 'Click and drag to resize components in Vue Play. Design visually without code.'
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/features/transform/dimension'
				}]
			};
		}
	};

</script>
<style scoped></style>