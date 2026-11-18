<template>
	<Page>
		<Section class="vp-intro" space="xlarge" align="center" height="half" gap="18px">
			<Heading level="h1" size="xlarge" align="center">Good bye 👋🏼</Heading>
			<Paragraph size="large" align="center" :muted="true">You are logged out. Taking you to the front page…</Paragraph>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			Section,
			Heading,
			Paragraph
		},
		inject: ['logout'],
		async mounted() {
			try {
				await this.logout();
				setTimeout(() => {
					this.$router.push('/');
				}, 1500);
			} catch (e) {
				console.log('err', e);
			}
		},
		head() {
			return privateHead('Logged out · Vue Play');
		}
	};

</script>
