<template>
	<SiteFooter
		class="vp-bottom"
		brand="Vue Play"
		text="One editor for everyone who builds with Vue. Designers, developers and AI on the same real code."
		:links="links"
		note="© {year} Siglar Development AS"
		level="h2"
	>
		<a class="vp-bottom__github" href="https://github.com/vueplayground/vueplay.com" target="_blank" rel="noopener" aria-label="Vue Play on GitHub">
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
			</svg>
			<span>GitHub</span>
		</a>
	</SiteFooter>
</template>
<script>
	import SiteFooter from '@vueplayio/footer';
	// The bottom of every page: the pages people look for there, in four groups, and the small print.
	export default {
		components: {
			SiteFooter
		},
		data: () => ({
			links: [
				{ group: 'Product', text: 'Vue Play Studio', href: 'https://studio.vueplay.com' },
				{ group: 'Product', text: 'Features', href: '/features' },
				{ group: 'Product', text: 'Learn', href: '/features/learn' },
				{ group: 'Product', text: 'Templates', href: '/market/templates' },
				{ group: 'Product', text: 'Market', href: '/market' },
				{ group: 'Product', text: 'Pricing', href: '/pricing' },
				{ group: 'Resources', text: 'Roadmap', href: '/roadmap' },
				{ group: 'Resources', text: 'Release log', href: '/release-log' },
				{ group: 'Resources', text: 'API docs', href: '/api-documentation' },
				{ group: 'Resources', text: 'Credits', href: '/credits' },
				{ group: 'Community', text: 'Announcements', href: 'https://github.com/vueplayground/vueplay.com/discussions/categories/announcements' },
				{ group: 'Community', text: 'Discussions', href: 'https://github.com/vueplayground/vueplay.com/discussions' },
				{ group: 'Community', text: 'Issues', href: 'https://github.com/vueplayground/vueplay.com/issues' },
				{ group: 'Company', text: 'Terms of service', href: '/terms-of-service' },
				{ group: 'Company', text: 'Privacy policy', href: '/privacy-policy' },
				{ group: 'Company', text: 'support@vueplay.com', href: 'mailto:support@vueplay.com' }
			]
		})
	};

</script>
<style>
	.vp-bottom {
		background: var(--vp-surface);
		color: var(--vp-text);
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		line-height: 1.5;
	}

	.vp-bottom .vp-footer__inner {
		max-width: var(--vp-width, 1180px);
	}

	.vp-bottom__github {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.25rem;
		padding: 0.4rem 0.85rem 0.4rem 0.6rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		color: inherit;
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		transition: border-color 140ms ease, color 140ms ease;
	}

	.vp-bottom__github:hover {
		border-color: var(--vp-primary);
		color: var(--vp-primary);
	}

	.vp-bottom__github svg {
		width: 1.1rem;
		height: 1.1rem;
		fill: currentColor;
	}

</style>
