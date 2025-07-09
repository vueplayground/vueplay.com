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
						>Launch - Deploy</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play offers a one-click "Deploy" button that instantly publishes your site to the web, hosted directly by Vue Play. You can choose to deploy as a client-side (CSR) or server-side rendered (SSR) site, with optional hydration disabled—perfect for previewing your site the way search engines see it. Sites can be launched using a free subdomain like {yourname}.vueplay.com, or you can connect your own custom domain. Custom domains are verified by adding a generated TXT record and routed by updating your CNAME or ANAME record to the deployment URL provided by Vue Play. SSL certificates are fully managed and automatically handled, so your site is always served securely. You can also enable a staging site to safely preview and test changes before pushing them live. Additionally, Vue Play supports multiple origins, allowing you to serve your site from several domains or environments if needed.</div><img
							src="@/assets/deploy.png"
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
				title: 'Vue Play - One-Click Deploy Your Vue Sites',
				meta: [
				{
					name: 'description',
					content:
					'Deploy your Vue Play projects instantly with one click. Choose client-side or server-side rendering, connect custom domains with automatic SSL, and manage staging sites easily.'
				},
				{
					property: 'og:title',
					content: 'Vue Play - One-Click Deploy Your Vue Sites'
				},
				{
					property: 'og:description',
					content:
					'Publish your Vue Play projects effortlessly with free subdomains, custom domain support, SSL management, and multi-origin deployment.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/features/deploy'
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
					content: 'Vue Play - One-Click Deploy Your Vue Sites'
				},
				{
					name: 'twitter:description',
					content:
					'Deploy your Vue Play projects instantly with one click. Choose client-side or server-side rendering, connect custom domains with automatic SSL, and manage staging sites easily.'
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/features/deploy'
				}
				]
			}
		}
	};

</script>
<style scoped></style>