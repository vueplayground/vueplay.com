<template>
	<Home>
		<template #header>
			<Header style="position: sticky; top: 0px"></Header>
		</template>
		<template #default>
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
					>Vue Play APIs</Title>
					<Title
						style="text-align:center;margin-bottom:50px"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Direct access for developers —
						<br />integrate Vue Play your way
					</Title>
					<Box>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
							gap="{`default`:{`xs`:{`light`:`10px`}}}"
						>
							<Link
								title="Vue Play Authentication API"
								external="true"
								target="_blank"
								route="https://auth.vueplay.io/docs"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
							<Link
								title="Vue Play Manager API"
								external="true"
								target="_blank"
								route="https://manager.vueplay.io/docs"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
							<Link
								title="Vue Play Market API"
								external="true"
								target="_blank"
								route="https://market.vueplay.io/docs"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
							<Link
								title="Vue Play Hub API"
								external="true"
								target="_blank"
								route="https://hub.vueplay.io/docs"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</Box>
					</Box>
					<Link
						title="Open credits"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`150px`}}}"
						style="position:unset;margin-top:50px"
						route="/credits"
					>
					</Link>
				</Box>
			</Box>
		</template>
		<template #footer>
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
			const url = 'https://vueplay.com/api/documentation';
			const title = "Unlock the Power of Vue Play APIs";
			const description = 'Direct access for developers — integrate Vue Play your way. Explore Authentication, Manager, and Market APIs for seamless developer control and integration.';
			const image = "https://vueplay.com/screenshot.png";
			return {
				title,
				meta: [{
					name: 'description',
					content: description
				}, {
					property: 'og:title',
					content: title
				}, {
					property: 'og:description',
					content: description
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: url
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary'
				}, {
					name: 'twitter:title',
					content: title
				}, {
					name: 'twitter:description',
					content: description
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: url
				}]
			};
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