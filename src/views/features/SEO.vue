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
						>Search Engine Optimalization</Text>
					</Box> <Text>
						<div style="margin-bottom:50px">
							Vue Play has built in support for
							<Link
								route="https://unhead.unjs.io"
								external="true"
								title="@unhead/vue"
								target="_blank"
								marginBottom="{`default`:{`xs`:{`light`:`10px`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-secondary) 70%, white)`,`dark`:`color-mix(in oklch, var(--color-secondary) 80%, black)`}}}"
								style="display:inline-block;width:110px;border-radius:6px;text-align:center;position:unset"
								paddingTop="{`default`:{`xs`:{`light`:`3px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`3px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, white)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, white)`}}}"
							>
							</Link>
							— a powerful library for managing &lt;head&gt; elements like titles, meta tags, links, and scripts in Vue applications. Although Unhead is framework-agnostic at its core, it integrates seamlessly into Vue through a simple and flexible API. Vue Play leverages it internally to handle SEO and page metadata dynamically.
							<br /> <br />Note: SEO features are only available for applications served via Server-Side Rendering (SSR).
						</div>
						<p style="margin-bottom:50px;font-weight:700">Example of adding meta data using Vue Options API:</p>
						<Box
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							style="padding:20px 20px 20px 0px;border-radius:8px"
							fontSize="{`default`:{`xs`:{`light`:`13px`}}}"
						>
							<pre>&nbsp; &nbsp; &nbsp; &nbsp;head() {<br/>			return {<br/>				title: 'Vue Play - Search Engine Optimization (SEO) Made Easy',<br/>				meta: [{<br/>					name: 'description',<br/>					content: 'Learn how Vue Play simplifies Search Engine Optimization (SEO) for your Vue applications with dynamic meta tags and head management.'<br/>				}, {<br/>					property: 'og:title',<br/>					content: 'Vue Play - Effortless SEO for Vue Developers'<br/>				}, {<br/>					property: 'og:description',<br/>					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'<br/>				}, {<br/>					property: 'og:type',<br/>					content: 'website'<br/>				}, {<br/>					property: 'og:url',<br/>					content: 'https://vueplay.com/features/search-engine-optimalization'<br/>				}, {<br/>					name: 'twitter:card',<br/>					content: 'summary_large_image'<br/>				}, {<br/>					name: 'twitter:title',<br/>					content: 'Vue Play - Effortless SEO for Vue Developers'<br/>				}, {<br/>					name: 'twitter:description',<br/>					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'<br/>				}],<br/>				link: [{<br/>					rel: 'canonical',<br/>					href: 'https://vueplay.com/features/search-engine-optimalization'<br/>				}]<br/>			};<br/>		}</pre>
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
				title: 'Vue Play - Search Engine Optimization (SEO) Made Easy',
				meta: [{
					name: 'description',
					content: 'Learn how Vue Play simplifies Search Engine Optimization (SEO) for your Vue applications with dynamic meta tags and head management.'
				}, {
					property: 'og:title',
					content: 'Vue Play - Effortless SEO for Vue Developers'
				}, {
					property: 'og:description',
					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/features/search-engine-optimalization'
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play - Effortless SEO for Vue Developers'
				}, {
					name: 'twitter:description',
					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/features/search-engine-optimalization'
				}]
			};
		}
	};

</script>
<style scoped></style>