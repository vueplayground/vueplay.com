<template>
	<Page>
		<PageIntro eyebrow="Docs" title="Vue Play APIs" text="Direct access for developers: integrate Vue Play your way."></PageIntro>
		<Section space="small" gap="32px">
			<Columns :columns="2" gap="20px" min="280px">
				<Card v-for="api in apis" :key="api.href" look="outline" padding="26px" gap="8px" :href="api.href" :newTab="true">
					<span class="vp-chip">{{ api.host }}</span>
					<Heading level="h2" size="small">{{ api.name }}</Heading>
					<Paragraph :muted="true">{{ api.text }}</Paragraph>
				</Card>
			</Columns>
			<div class="vp-panel vp-panel--soft vp-api-note">
				<Heading level="h2" size="small">Calling them</Heading>
				<Paragraph :muted="true">Private calls take a token. Make a long-living one on the Tokens page, then send it as <code>Authorization: Bearer &lt;token&gt;</code>. The same token installs private and purchased components from the Vue Play registry and clones private projects with git.</Paragraph>
				<Stack gap="12px">
					<Button href="/tokens" size="small">Your tokens</Button>
					<Button href="/credits" size="small" variant="outline">Open credits</Button>
				</Stack>
			</div>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import Section from '@vueplayio/section';
	import Columns from '@vueplayio/columns';
	import Card from '@vueplayio/card';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { pageHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			Section,
			Columns,
			Card,
			Heading,
			Paragraph,
			Stack,
			Button
		},
		data: () => ({
			apis: [{
				name: 'Vue Play Authentication API',
				host: 'auth.vueplay.io',
				href: 'https://auth.vueplay.io/docs',
				text: 'Users, signing in and tokens.'
			}, {
				name: 'Vue Play Manager API',
				host: 'manager.vueplay.io',
				href: 'https://manager.vueplay.io/docs',
				text: 'Applications, components and templates, and the packages built from them.'
			}, {
				name: 'Vue Play Market API',
				host: 'market.vueplay.io',
				href: 'https://market.vueplay.io/docs',
				text: 'Sellers, products, orders, subscriptions and payments.'
			}, {
				name: 'Vue Play Hub API',
				host: 'hub.vueplay.io',
				href: 'https://hub.vueplay.io/docs',
				text: 'The services of the Vue Play hub.'
			}]
		}),
		head() {
			return pageHead({
				title: 'API documentation · Vue Play',
				description: 'Direct access for developers: the Vue Play Authentication, Manager, Market and Hub APIs, with docs for every service and how to call them.',
				path: '/api-documentation'
			});
		}
	};

</script>
<style>
	.vp-api-note {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.vp-api-note code {
		padding: 0.1rem 0.35rem;
		border: 1px solid var(--vp-border);
		border-radius: 6px;
		background: var(--vp-background);
		font: 600 0.875em ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
	}

</style>
