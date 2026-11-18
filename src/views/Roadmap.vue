<template>
	<Page>
		<PageIntro eyebrow="Roadmap" title="Roadmap" text="See what's next: upcoming ideas, features, and plans in motion."></PageIntro>
		<Section space="small" width="narrow" gap="32px">
			<article class="vp-panel vp-roadmap">
				<a class="vp-roadmap__picture" href="https://arctic.vueplay.com" target="_blank" rel="noopener">
					<img src="@/assets/flagship.png" alt="The Arctic template" width="1200" height="500" loading="lazy" />
				</a>
				<div class="vp-roadmap__words">
					<span class="vp-chip vp-chip--brand">In motion</span>
					<h2>Set sail with Arctic</h2>
					<p>Our flagship template Arctic is evolving. We’re bringing fresh improvements, smarter design, and exciting new possibilities. This is only the start of a bigger journey.</p>
					<a class="vp-roadmap__link" href="https://arctic.vueplay.com" target="_blank" rel="noopener">Open Arctic</a>
				</div>
			</article>
			<Stack spread="center" gap="12px">
				<Button href="/release-log" variant="outline">Open the release log</Button>
				<Button href="https://github.com/vueplayground/vueplay.com/discussions" variant="text" :newTab="true">Suggest an idea</Button>
			</Stack>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import Section from '@vueplayio/section';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { pageHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			Section,
			Stack,
			Button
		},
		head() {
			return pageHead({
				title: 'Roadmap · Vue Play',
				description: 'Explore the Vue Play roadmap to see upcoming features, improvements and our vision for future releases of the Studio and its templates.',
				path: '/roadmap'
			});
		}
	};

</script>
<style>
	.vp-roadmap {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding: 0;
		overflow: hidden;
	}

	.vp-roadmap__picture img {
		display: block;
		width: 100%;
		height: 260px;
		object-fit: cover;
	}

	.vp-roadmap__words {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.6rem;
		padding: 0 clamp(1.25rem, 3vw, 2rem) clamp(1.25rem, 3vw, 2rem);
	}

	.vp-roadmap__words h2 {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.vp-roadmap__words p {
		margin: 0;
		color: var(--vp-muted);
		font-size: 1.0625rem;
	}

	.vp-roadmap__link {
		color: var(--vp-primary);
		font-weight: 600;
		text-decoration: none;
	}

	.vp-roadmap__link:hover {
		text-decoration: underline;
	}

</style>
