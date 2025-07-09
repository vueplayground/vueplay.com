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
						>Launch - Export</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play also offers an "Export" option for users who prefer to self-host their projects. With a single click on the Build button, Vue Play compiles your project and packages the final dist folder into a downloadable .tar archive. This export contains everything needed to deploy the site independently, giving you full control over how and where it’s hosted—whether on your own server, a cloud provider, or a static hosting platform. You can also connect your project to GitHub and push code changes or commits directly from Vue Play, streamlining your development workflow.</div>
						<div style="margin-bottom:20px">Note: The export option supports client-side rendering (CSR) only and does not include server-side rendering (SSR) capabilities.</div><img
							src="@/assets/build.png"
							style="width:100%;max-width:270px;border-radius:10px"
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
				title: 'Vue Play - Export Your Projects for Self-Hosting',
				meta: [
				{
					name: 'description',
					content:
					'Export your Vue Play project as a downloadable package for self-hosting. Includes everything needed to deploy independently with client-side rendering support.'
				},
				{
					property: 'og:title',
					content: 'Vue Play - Export Your Projects for Self-Hosting'
				},
				{
					property: 'og:description',
					content:
					'Download your Vue Play projects as .tar archives for full control over deployment. Supports client-side rendering and integrates with GitHub for streamlined workflows.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/features/export'
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
					content: 'Vue Play - Export Your Projects for Self-Hosting'
				},
				{
					name: 'twitter:description',
					content:
					'Export your Vue Play project as a downloadable package for self-hosting. Includes everything needed to deploy independently with client-side rendering support.'
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/features/export'
				}
				]
			}
		}
	};

</script>
<style scoped></style>