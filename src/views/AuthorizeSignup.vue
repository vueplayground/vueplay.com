<template>
	<Login>
		<template #header="">
			<Header></Header>
		</template> <template #default="">
			<img
				src="@/_templates/arctic/assets/vueplay.webp"
				width="100"
				height="100"
				style="margin:auto;margin-top:60px;cursor:pointer"
				@click="$router.push('/')"
			/>
			<Title
				style="text-align:center"
				marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
				marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
				fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
				fontWeight="{`default`:{`xs`:{`light`:`700`}}}"
			>Continue with</Title>
			<Box
				column="{`default`:{`xs`:{`light`:true}}}"
				margin="{`default`:{`xs`:{`light`:`auto`}}}"
				width="{`default`:{`xs`:{`light`:`100%`}}}"
				style="max-width:280px"
				gap="{`default`:{`xs`:{`light`:`20px`}}}"
				marginBottom="{`default`:{`xs`:{`light`:`130px`}}}"
			>
				<Link
					:route="`https://auth.vueplay.io/oauth/github?app_url=${origin}/signup/checkout`"
					title="Github"
					class="shadow-md hover:shadow-none duration-200 ease-linear transition hover:shadow-sm"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 50%, black)`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`12px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`12px`}}}"
					external="true"
					icon="{`default`:{`xs`:{`light`:`--image-gh-black-svg`,`dark`:`--image-gh-white-svg`}}}"
					iconSize="35px"
					paddingLeft="{`default`:{`xs`:{`light`:`12px`}}}"
					gap="{`default`:{`xs`:{`light`:`22px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
					borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
					style="font-size:20px;position:unset"
				>
				</Link>
				<Link
					:route="`https://auth.vueplay.io/oauth/google?app_url=${origin}/signup/checkout`"
					title="Google"
					class="shadow-md hover:shadow-none duration-200 ease-linear transition hover:shadow-sm"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 50%, black)`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`12px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`12px`}}}"
					external="true"
					icon="{`default`:{`xs`:{`light`:`--image-google-svg`}}}"
					iconSize="35px"
					paddingLeft="{`default`:{`xs`:{`light`:`12px`}}}"
					gap="{`default`:{`xs`:{`light`:`22px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
					borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
					style="font-size:20px;position:unset"
				>
				</Link>
				<Link
					:route="`https://auth.vueplay.io/oauth/facebook?app_url=${origin}/signup/checkout`"
					title="Facebook"
					class="shadow-md hover:shadow-none duration-200 ease-linear transition hover:shadow-sm"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 50%, black)`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`12px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`12px`}}}"
					external="true"
					icon="{`default`:{`xs`:{`light`:`--image-facebook-svg`}}}"
					iconSize="35px"
					paddingLeft="{`default`:{`xs`:{`light`:`12px`}}}"
					gap="{`default`:{`xs`:{`light`:`22px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
					borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
					style="font-size:20px;position:unset"
				>
				</Link>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Login>
</template>
<script>
	import Link from '@vueplayio/link';
	import Login from '@/_templates/arctic/views/Login.vue';
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
			Login: Login,
			Title: Title,
			Box: Box,
			Header: Header,
			Footer: Footer
		},
		inject: ['account'],
		data: () => ({
			origin: 'vueplay.com'
		}),
		mounted() {
			if (this.account) this.$router.push('/signup/checkout');
			this.origin = location.origin;
		},
		head() {
			const image = 'https://vueplay.com/screenshot.png'
			return {
				title: 'Signup - Vue Play',
				meta: [
				{
					name: 'description',
					content: 'Signup to Vue Play using Github, Google, or Facebook.'
				},
				{
					property: 'og:title',
					content: 'Signup - Vue Play'
				},
				{
					property: 'og:description',
					content: 'Use your Github, Google, or Facebook account to sign in to Vue Play quickly and safely.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://vueplay.com/signup'
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
					content: 'Signup - Vue Play'
				},
				{
					name: 'twitter:description',
					content: 'Use your Github, Google, or Facebook account to sign in to Vue Play quickly and safely.'
				},
				{
					name: 'twitter:image',
					content: image
				}
				],
				link: [
				{
					rel: 'canonical',
					href: 'https://vueplay.com/signup'
				}
				]
			}
		}
	};

</script>
<style scoped></style>