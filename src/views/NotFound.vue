<template>
	<Page>
		<Section class="vp-intro" space="xlarge" align="center" height="half" gap="18px">
			<Paragraph size="small" align="center" class="vp-eyebrow">404</Paragraph>
			<Heading level="h1" size="xlarge" align="center">Page not found</Heading>
			<Paragraph size="large" align="center" :muted="true" width="560px">We could not find what you were looking for. It may have moved, or the address may be mistyped.</Paragraph>
			<Stack spread="center" gap="12px">
				<Button href="/">Take me home</Button>
				<Button href="/market" variant="outline">Browse the market</Button>
			</Stack>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { pageHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			Section,
			Heading,
			Paragraph,
			Stack,
			Button
		},
		head() {
			return pageHead({
				title: 'Page not found · Vue Play',
				description: 'The page you were looking for is not on vueplay.com. It may have moved, or the address may be mistyped.',
				noindex: true,
				status: 404
			});
		}
	};

</script>
