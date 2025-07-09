<template>
	<Home>
		<template #header="">
			<Header style="position: sticky; top: 0px"></Header>
		</template> <template #default="">
			<Box
				style="justify-content:center;padding:0px;min-height:calc(100vh - 60px)"
				expand="true"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					column="{`default`:{`xs`:{`light`:true}}}"
					paddingTop="{`default`:{`xs`:{`light`:`100px`}}}"
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`90px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
					>Credits</Title>
					<Title
						style="text-align:center;margin-bottom:50px"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Acknowledging the talent and technology —<br />that make it all possible</Title>
					<Box>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
							gap="{`default`:{`xs`:{`light`:`10px`}}}"
						>
							<Link
								external="true"
								target="_blank"
								route="https://vuejs.org"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								title="Vue.js"
								style="position:unset"
							>
							</Link>
							<Link
								title="Feathersjs"
								external="true"
								target="_blank"
								route="https://feathersjs.com"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
							<Link
								title="TailwindCSS"
								external="true"
								target="_blank"
								route="https://tailwindcss.com"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
							<Link
								title="Hero Icons"
								external="true"
								target="_blank"
								route="https://heroicons.com"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</Box>
					</Box>
					<Link
						title="Open API Docs"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`150px`}}}"
						style="position:unset;margin-top:50px"
						route="/api-documentation"
					>
					</Link>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Home>
</template>
<script>
	import Text from '@vueplayio/text';
	import Link from '@vueplayio/link';
	import Home from '@/_templates/arctic/views/Home.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Text: Text,
			Link: Link,
			Home: Home,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		data: () => ({}),
		head() {
			return {
				title: 'Vue Play - Credits',
				meta: [
				{
					name: 'description',
					content: 'Acknowledging the talent and technology behind Vue Play — including Vue.js, Feathersjs, TailwindCSS, and Hero Icons.'
				},
				{
					property: 'og:title',
					content: 'Vue Play - Credits'
				},
				{
					property: 'og:description',
					content: 'Acknowledging the talent and technology behind Vue Play — including Vue.js, Feathersjs, TailwindCSS, and Hero Icons.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/credits'
				},
				{
					property: 'og:image',
					content: 'https://vueplay.com/screenshot.png'
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image'
				},
				{
					name: 'twitter:title',
					content: 'Vue Play - Credits'
				},
				{
					name: 'twitter:description',
					content: 'Acknowledging the talent and technology behind Vue Play — including Vue.js, Feathersjs, TailwindCSS, and Hero Icons.'
				},
				{
					name: 'twitter:image',
					content: 'https://vueplay.com/screenshots.png'
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/credits'
				}
				]
			}
			}
	};

</script>
<style scoped>
	h2 {
		font-size: 20px;
		font-weight: 700;
		margin-top: 50px;
		margin-bottom: 15px;
		text-align: left;
	}

</style>