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
						>Transform - Text</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play supports inline text editing with a true WYSIWYG (What You See Is What You Get) experience. Simply click on any text element in the canvas to start editing it directly—no switching views or opening side panels. You can change content, apply styles, and see your updates in real time, exactly as they’ll appear in the final design.</div><img
							src="@/assets/wysiwyg.png"
							style="width:100%;max-width:600px;background-color:#ffffffff;border-radius:8px"
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
				title: 'Vue Play - Inline Text Editing with WYSIWYG Support',
				meta: [
					{
						name: 'description',
						content: 'Effortlessly edit text directly on the canvas with Vue Play’s WYSIWYG interface. See exactly how your content will look in real time as you build.'
					},
					{
						property: 'og:title',
						content: 'Vue Play - Inline Text Editing with WYSIWYG Support'
					},
					{
						property: 'og:description',
						content: 'Vue Play offers a seamless inline editing experience with real-time previews. Instantly edit text without switching views.'
					},
					{
						property: 'og:type',
						content: 'website'
					},
					{
						property: 'og:url',
						content: 'https://vueplay.com/features/text'
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
						content: 'Vue Play - Inline Text Editing with WYSIWYG Support'
					},
					{
						name: 'twitter:description',
						content: 'Effortlessly edit text directly on the canvas with Vue Play’s real-time WYSIWYG editor.'
					},
					{
						name: 'twitter:image',
						content: image
					}
				],
				link: [
					{
						rel: 'canonical',
						href: 'https://vueplay.com/features/text'
					}
				]
			};
		}
	};

</script>
<style scoped></style>