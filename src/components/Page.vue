<template>
	<div class="vp-page">
		<Header></Header>
		<main class="vp-page__main">
			<slot></slot>
		</main>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from '@/components/Header.vue';
	import Footer from '@/components/Footer.vue';
	// The frame of every page but the front page: the header, the page, the footer, in the site's look.
	// The shared parts of a page's look are here too: .vp-prose for text to read, .vp-panel for a box,
	// .vp-form for fields, .vp-chip for a small label, .vp-code for a line to copy.
	export default {
		components: {
			Header,
			Footer
		}
	};

</script>
<style>
	.vp-page {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background: var(--vp-background);
		color: var(--vp-text);
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		flex: 1 1 auto;
		/* (clipped sideways but not a scroll box of its own: the document scrolls, so the header sticks to the window) */
		overflow-x: clip;
	}

	.vp-page__main {
		display: block;
		flex: 1 0 auto;
	}

	/* blocks in a band take its width (a band lines its parts up at the start, which would shrink them) */
	.vp-page .vp-section__inner> :where(div, ul, ol, nav, article, dl, table, form) {
		box-sizing: border-box;
		width: 100%;
	}

	.vp-page .vp-eyebrow {
		margin: 0;
		color: var(--vp-primary);
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 13px;
	}

	/* text to read: a reading width, headings, lists and links */
	.vp-prose {
		width: 100%;
		max-width: 46rem;
		margin: 0 auto;
		font-size: 1.0625rem;
		line-height: 1.75;
		color: var(--vp-text);
	}

	.vp-prose> :first-child {
		margin-top: 0;
	}

	.vp-prose h2 {
		margin: 2.6rem 0 0.8rem;
		font-family: var(--vp-font-heading);
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 1.3;
		letter-spacing: -0.01em;
	}

	.vp-prose h3 {
		margin: 2rem 0 0.6rem;
		font-size: 1.2rem;
		font-weight: 700;
		line-height: 1.35;
	}

	.vp-prose p {
		margin: 0 0 1.1rem;
	}

	.vp-prose ul,
	.vp-prose ol {
		margin: 0 0 1.2rem;
		padding-left: 1.4rem;
	}

	.vp-prose ul {
		list-style: disc;
	}

	.vp-prose ol {
		list-style: decimal;
	}

	.vp-prose li {
		margin: 0.35rem 0;
		padding-left: 0.2rem;
	}

	.vp-prose li::marker {
		color: var(--vp-primary);
	}

	.vp-prose a {
		color: var(--vp-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		text-decoration-thickness: 1px;
	}

	.vp-prose a:hover {
		text-decoration-thickness: 2px;
	}

	.vp-prose strong,
	.vp-prose b {
		font-weight: 700;
	}

	.vp-prose .vp-updated {
		display: inline-block;
		margin-bottom: 1.5rem;
		padding: 0.25rem 0.75rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		background: var(--vp-surface);
		color: var(--vp-muted);
		font-size: 0.875rem;
	}

	/* a box on the page */
	.vp-panel {
		box-sizing: border-box;
		padding: clamp(1.25rem, 3vw, 2rem);
		border: 1px solid var(--vp-border);
		border-radius: 16px;
		background: var(--vp-background);
	}

	.vp-panel--soft {
		background: var(--vp-surface);
	}

	/* a small label */
	.vp-chip {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.15rem 0.6rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		background: var(--vp-surface);
		color: var(--vp-muted);
		font-size: 0.8125rem;
		font-weight: 600;
		line-height: 1.6;
		white-space: nowrap;
	}

	.vp-chip--brand {
		border-color: color-mix(in oklch, var(--vp-primary) 35%, transparent);
		background: color-mix(in oklch, var(--vp-primary) 12%, transparent);
		color: color-mix(in oklch, var(--vp-primary) 75%, var(--vp-text));
	}

	.vp-chip--warn {
		border-color: color-mix(in oklch, #de601d 40%, transparent);
		background: color-mix(in oklch, #de601d 12%, transparent);
		color: color-mix(in oklch, #de601d 70%, var(--vp-text));
	}

	/* fields */
	.vp-form {
		display: grid;
		gap: 1rem;
	}

	.vp-form--two {
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	.vp-field {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
	}

	.vp-field>span {
		color: var(--vp-muted);
		font-size: 0.875rem;
		font-weight: 600;
	}

	.vp-field input,
	.vp-field select,
	.vp-input {
		box-sizing: border-box;
		width: 100%;
		min-height: 2.75rem;
		padding: 0.6rem 0.85rem;
		border: 1px solid var(--vp-border);
		border-radius: 10px;
		background: var(--vp-background);
		color: var(--vp-text);
		font: inherit;
		font-size: 1rem;
		transition: border-color 140ms ease, box-shadow 140ms ease;
	}

	.vp-field input:focus,
	.vp-field select:focus,
	.vp-input:focus {
		border-color: var(--vp-primary);
		outline: none;
		box-shadow: 0 0 0 3px color-mix(in oklch, var(--vp-primary) 22%, transparent);
	}

	.vp-field input[readonly] {
		background: var(--vp-surface);
	}

	/* a button that is not a link of the library (one that does something on the page) */
	.vp-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.45rem;
		min-height: 2.6rem;
		padding: 0.55rem 1.05rem;
		border: 1px solid var(--vp-border);
		border-radius: 10px;
		background: var(--vp-background);
		color: var(--vp-text);
		font: inherit;
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: border-color 140ms ease, filter 140ms ease;
	}

	.vp-btn:hover {
		border-color: var(--vp-primary);
	}

	.vp-btn--solid {
		border-color: var(--vp-primary);
		background: var(--vp-primary);
		color: var(--vp-primary-contrast);
	}

	.vp-btn--solid:hover {
		filter: brightness(1.07);
	}

	/* a line of code to copy */
	.vp-code {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		border: 1px solid var(--vp-border);
		border-radius: 12px;
		background: var(--vp-surface);
	}

	.vp-code pre {
		flex: 1;
		min-width: 0;
		margin: 0;
		padding: 0.9rem 1rem;
		overflow-x: auto;
		font: 500 0.875rem/1.6 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
		white-space: pre;
	}

	.vp-code button {
		flex: none;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		margin: 0.5rem 0.5rem 0 0;
		padding: 0.35rem 0.6rem;
		border: 1px solid var(--vp-border);
		border-radius: 8px;
		background: var(--vp-background);
		color: var(--vp-text);
		font-size: 0.8125rem;
		font-weight: 600;
		cursor: pointer;
	}

	.vp-code button:hover {
		border-color: var(--vp-primary);
		color: var(--vp-primary);
	}

	.vp-page svg.vp-i {
		width: 1rem;
		height: 1rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	/* the top of a page (PageIntro) */
	.vp-intro.vp-section--space-large {
		padding-bottom: clamp(28px, 5vw, 56px);
	}

	.vp-intro {
		background: linear-gradient(180deg, color-mix(in oklch, var(--vp-primary) 8%, var(--vp-background)), var(--vp-background));
	}

</style>
