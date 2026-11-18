<template>
	<Page>
		<PageIntro eyebrow="Pricing" title="From idea to launch, covered" text="Stay on Hobby as long as you like, or switch to Professional for more features."></PageIntro>
		<Section space="small" gap="20px">
			<Pricing></Pricing>
			<Paragraph size="small" align="center" :muted="true">Prices in USD. Professional is billed monthly through Stripe.</Paragraph>
		</Section>
		<Section space="large" gap="28px" width="normal">
			<Stack direction="column" align="center" spread="center" gap="12px">
				<Paragraph size="small" align="center" class="vp-eyebrow">Compare</Paragraph>
				<Heading level="h2" size="large" align="center">What each plan includes</Heading>
			</Stack>
			<div class="vp-compare" role="region" aria-label="The plans compared">
				<table>
					<thead>
						<tr>
							<th scope="col"><span class="vp-compare__hidden">Feature</span></th>
							<th scope="col"><span class="vp-compare__plan">Hobby</span><small>Free</small></th>
							<th scope="col" class="vp-compare__pro"><span class="vp-compare__plan">Professional</span><small>$9 a month</small></th>
						</tr>
					</thead>
					<tbody v-for="group in comparison" :key="group.name">
						<tr class="vp-compare__group">
							<th scope="rowgroup" colspan="3">{{ group.name }}</th>
						</tr>
						<tr v-for="row in group.rows" :key="row[0]">
							<th scope="row">{{ row[0] }}</th>
							<td v-for="(cell, index) in [row[1], row[2]]" :key="index" :class="{ 'vp-compare__pro': index === 1 }">
								<svg v-if="cell === true" class="vp-compare__yes" viewBox="0 0 24 24" role="img" aria-label="Included"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
								<span v-else-if="cell === false" class="vp-compare__no" aria-label="Not included">—</span>
								<span v-else>{{ cell }}</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Section>
		<Section space="large" width="narrow" gap="28px" background="var(--vp-surface)">
			<Heading level="h2" size="large" align="center">Questions about pricing</Heading>
			<Accordion :faq="true" :items="questions"></Accordion>
		</Section>
		<Backdrop kind="mesh" tone="brand" color1="#10a37c" color2="#0b7a5c" color3="#17e8c2" motion="calm" space="large" align="center" gap="22px">
			<Heading level="h2" size="xlarge" align="center">Start on Hobby today</Heading>
			<Paragraph size="large" align="center" width="560px">Open the Studio, pick a template and publish. Upgrade when you need your own domain.</Paragraph>
			<Stack spread="center" gap="12px">
				<Button href="https://studio.vueplay.com" size="large" color="#ffffff" textColor="#0b5e48">Start building, free</Button>
				<Button href="/features" size="large" variant="outline" color="#ffffff">See the features</Button>
			</Stack>
		</Backdrop>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import Pricing from '@/components/Pricing.vue';
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import Accordion from '@vueplayio/accordion';
	import Backdrop from '@vueplayio/backdrop';
	import { pageHead, ORIGIN } from '@/components/head.js';
	const plan = (name, description, price, anchor) => ({
		'@context': 'https://schema.org',
		'@type': 'Product',
		name,
		description,
		image: ORIGIN + '/landing/studio-design.png',
		brand: { '@type': 'Brand', name: 'Vue Play' },
		category: 'Software',
		offers: {
			'@type': 'Offer',
			price,
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			url: ORIGIN + '/pricing#' + anchor
		}
	});
	export default {
		components: {
			Page,
			PageIntro,
			Pricing,
			Section,
			Heading,
			Paragraph,
			Stack,
			Button,
			Accordion,
			Backdrop
		},
		data: () => ({
			comparison: [{
				name: 'Build',
				rows: [
					['Visual editor: design, code, learn, animate', true, true],
					['Templates and the component library', true, true],
					['AI chat in the editor', true, true],
					['Git in the editor', true, true],
					['Components', '∞', '∞'],
					['Applications', '3', '∞']
				]
			}, {
				name: 'Launch and sell',
				rows: [
					['One click publish', true, true],
					['Sell components and templates', true, true],
					['Push to GitHub', false, true],
					['Custom domains', false, true],
					['Create teams', false, true],
					['Create projects', false, true]
				]
			}, {
				name: 'Support',
				rows: [
					['GitHub discussions', true, true],
					['GitHub issues', true, true],
					['Prioritized email support', false, true]
				]
			}],
			questions: [{
				title: 'Can I stay on Hobby for good?',
				text: 'Yes. Hobby is free forever, with the whole editor, the templates and up to three applications. Upgrade only when you need more.'
			}, {
				title: 'What do I get with Professional?',
				text: 'As many applications as you like, push to GitHub, your own domains for what you publish, and teams and projects to work with others. Email support is prioritized.'
			}, {
				title: 'How do I pay?',
				text: 'Professional costs $9 a month, in USD. You enter your billing details on vueplay.com and pay on a secure Stripe checkout page.'
			}, {
				title: 'Do I own what I build?',
				text: 'Yes, on every plan. Each project is a Vue project in Git that you can export and run anywhere Vue runs.'
			}, {
				title: 'Can I sell my own components and templates?',
				text: 'Yes, on both plans. Set up a seller account in the Studio, give a component or template a price, and it is sold in the Vue Play Market.'
			}]
		}),
		head() {
			return pageHead({
				title: 'Pricing · Vue Play',
				description: 'Vue Play pricing: Hobby is free forever with the whole editor and 3 applications. Professional is $9 a month with GitHub, custom domains and teams.',
				path: '/pricing',
				schema: [
					plan('Vue Play Hobby', 'Free basic access to Vue Play Studio: the whole editor, the templates and up to three applications.', '0.00', 'hobby'),
					plan('Vue Play Professional', 'Full access to Vue Play Studio for professional use: unlimited applications, GitHub, custom domains, teams and projects.', '9.00', 'professional')
				]
			});
		}
	};

</script>
<style>
	/* the plans side by side: the plan names stay at the top under the site's header while the rows scroll past;
	   the table fits the width on a phone too, so nothing scrolls sideways (which would stop the names sticking) */
	.vp-compare {
		--vp-compare-top: 65px;
		width: 100%;
		max-width: 920px;
		margin: 0 auto;
		border: 1px solid var(--vp-border);
		border-radius: 16px;
		overflow: clip;
	}

	.vp-compare table {
		width: 100%;
		border-collapse: separate;
		border-spacing: 0;
		table-layout: fixed;
		font-size: 0.9375rem;
	}

	.vp-compare th,
	.vp-compare td {
		padding: 0.85rem 1.1rem;
		border-bottom: 1px solid var(--vp-border);
		text-align: center;
		vertical-align: middle;
	}

	.vp-compare tbody:last-child tr:last-child> * {
		border-bottom: 0;
	}

	.vp-compare th[scope='row'] {
		text-align: left;
		font-weight: 500;
		overflow-wrap: anywhere;
	}

	.vp-compare thead th {
		position: sticky;
		top: var(--vp-compare-top);
		z-index: 2;
		padding-top: 1rem;
		padding-bottom: 1rem;
		background: var(--vp-background);
		font-size: 1rem;
		font-weight: 700;
		line-height: 1.25;
	}

	.vp-compare thead th small {
		display: block;
		margin-top: 0.2rem;
		color: var(--vp-muted);
		font-size: 0.8125rem;
		font-weight: 500;
	}

	.vp-compare thead th:first-child {
		width: 50%;
	}

	.vp-compare__pro {
		background: color-mix(in oklch, var(--vp-primary) 6%, var(--vp-background));
	}

	.vp-compare thead .vp-compare__pro {
		background: color-mix(in oklch, var(--vp-primary) 6%, var(--vp-background));
		color: var(--vp-primary);
	}

	.vp-compare__group th {
		padding-top: 1.2rem;
		background: var(--vp-surface);
		color: var(--vp-muted);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-align: left;
		text-transform: uppercase;
	}

	/* a tick, a dash or a value: each in the middle of its column */
	.vp-compare__yes {
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		margin: 0 auto;
		fill: none;
		stroke: var(--vp-primary);
		stroke-width: 2.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.vp-compare__no {
		color: var(--vp-muted);
	}

	@media (max-width: 760px) {
		.vp-compare thead th:first-child {
			width: 44%;
		}
	}

	@media (max-width: 520px) {
		.vp-compare table {
			font-size: 0.875rem;
		}

		.vp-compare th,
		.vp-compare td {
			padding: 0.75rem 0.5rem;
		}

		.vp-compare th[scope='row'],
		.vp-compare__group th {
			padding-left: 0.85rem;
		}

		.vp-compare thead th {
			font-size: 0.875rem;
		}

		.vp-compare thead th small {
			font-size: 0.75rem;
		}
	}

	.vp-compare__hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
	}

</style>
