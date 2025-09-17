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
					>Roadmap</Title>
					<Title
						style="text-align:center"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
					>See what's next —
						<br />upcoming ideas, features, and plans in motion.
					</Title>
					<main class="p-6 m-auto max-w-xl container">
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 3%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>🧭 Set Sail with Arctic</h3>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								style="margin:0px;margin-top:10px;margin-bottom:10px"
							>Our flagship template Arctic is evolving. We’re bringing fresh improvements, smarter design, and exciting new possibilities. This is only the start of a bigger journey.</Text>
							<a
								href="https://arctic.vueplay.com"
								target="_blank"
							>
								<img
									src="@/assets/flagship.png"
									width="100"
									height="100"
									style="width:100%;height:250px;border-radius:11px;object-fit:cover"
								/>
							</a>
						</Box>
					</main>
					<Link
						title="Open release log"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`150px`}}}"
						style="position:unset"
						route="/release-log"
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
			return {
				title: 'Vue Play - Product Roadmap',
				meta: [{
					name: 'description',
					content: 'Explore Vue Play’s product roadmap to see upcoming features, improvements, and our vision for future releases.'
				}, {
					property: 'og:title',
					content: 'Vue Play - Product Roadmap'
				}, {
					property: 'og:description',
					content: 'Explore Vue Play’s product roadmap to see upcoming features, improvements, and our vision for future releases.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/roadmap'
				}, {
					property: 'og:image',
					content: 'https://vueplay.com/screenshot.png'
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play - Product Roadmap'
				}, {
					name: 'twitter:description',
					content: 'Explore Vue Play’s product roadmap to see upcoming features, improvements, and our vision for future releases.'
				}, {
					name: 'twitter:image',
					content: 'https://vueplay.com/screenshot.png'
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/roadmap'
				}]
			};
		}
	};

</script>
<style scoped>
	h3 {
		font-weight: bold;
	}

	ul {
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	li {
		padding-bottom: 5px;
	}

</style>