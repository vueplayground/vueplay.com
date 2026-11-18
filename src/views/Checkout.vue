<template>
	<Page>
		<PageIntro eyebrow="Checkout" title="Checkout" text="Design, develop & launch websites, apps, components, and more: rediscover the joy of building, from syntax to creativity.">
			<Stack spread="center" gap="12px">
				<Button href="/pricing" size="large">Get Started</Button>
			</Stack>
		</PageIntro>
		<Section space="small" gap="40px">
			<Columns :columns="3" gap="32px" min="220px">
				<Feature icon="paint-brush" title="Design" text="Build stunning UIs with drag & drop, style controls, and precision."></Feature>
				<Feature icon="code-bracket" title="Develop" text="Develop with ease, from props to logic to layout."></Feature>
				<Feature icon="rocket-launch" title="Launch" text="Launch with a click: preview, build, and go live."></Feature>
			</Columns>
			<figure class="vp-checkout-shot">
				<img src="@/assets/screenshot.webp" alt="Vue Play Studio" loading="lazy" />
			</figure>
			<Columns :columns="3" min="160px">
				<Stat value="2.9K+" label="Registered users"></Stat>
				<Stat value="2.1K+" label="Websites built with Vue Play"></Stat>
				<Stat value="418" label="Components built with Vue Play"></Stat>
			</Columns>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import Section from '@vueplayio/section';
	import Columns from '@vueplayio/columns';
	import Feature from '@vueplayio/feature';
	import Stat from '@vueplayio/stat';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			Section,
			Columns,
			Feature,
			Stat,
			Stack,
			Button
		},
		inject: ['account'],
		head() {
			return privateHead('Checkout · Vue Play');
		}
	};

</script>
<style>
	.vp-checkout-shot {
		margin: 0;
		overflow: hidden;
		border: 1px solid var(--vp-border);
		border-radius: 14px;
		box-shadow: 0 30px 60px -30px rgba(6, 40, 30, 0.35);
	}

	.vp-checkout-shot img {
		display: block;
		width: 100%;
	}

</style>
