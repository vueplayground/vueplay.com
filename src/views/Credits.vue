<template>
	<Page>
		<PageIntro eyebrow="Credits" title="Credits" text="Acknowledging the talent and technology that make it all possible."></PageIntro>
		<Section space="medium" gap="32px">
			<Columns :columns="2" gap="20px" min="260px">
				<Card v-for="credit in credits" :key="credit.href" look="outline" padding="24px" gap="6px" :href="credit.href" :newTab="true">
					<Heading level="h2" size="small">{{ credit.name }}</Heading>
					<Paragraph :muted="true">{{ credit.text }}</Paragraph>
				</Card>
			</Columns>
			<Stack spread="center">
				<Button href="/api-documentation" variant="outline">Open the API docs</Button>
			</Stack>
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
			credits: [{
				name: 'Vue.js',
				href: 'https://vuejs.org',
				text: 'The framework every page, component and template is written in.'
			}, {
				name: 'Feathers',
				href: 'https://feathersjs.com',
				text: 'The framework behind the Vue Play APIs and their real-time connections.'
			}, {
				name: 'Tailwind CSS',
				href: 'https://tailwindcss.com',
				text: 'The utility classes sites can use for their styles.'
			}, {
				name: 'Heroicons',
				href: 'https://heroicons.com',
				text: 'Icons drawn by the makers of Tailwind CSS.'
			}]
		}),
		head() {
			return pageHead({
				title: 'Credits · Vue Play',
				description: 'Acknowledging the talent and technology behind Vue Play, including Vue.js, Feathers, Tailwind CSS and Heroicons.',
				path: '/credits'
			});
		}
	};

</script>
