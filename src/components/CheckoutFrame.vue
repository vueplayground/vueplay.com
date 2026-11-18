<template>
	<Section space="small" width="normal">
		<div class="vp-checkout">
			<div class="vp-checkout__main">
				<slot></slot>
			</div>
			<aside class="vp-panel vp-panel--soft vp-checkout__summary" aria-label="Order summary">
				<p class="vp-checkout__label">Order summary</p>
				<p class="vp-checkout__item">{{ item }}</p>
				<p v-if="about" class="vp-checkout__about">{{ about }}</p>
				<div class="vp-checkout__total"><span>Total</span><b>{{ price }}</b></div>
				<p class="vp-checkout__safe">
					<svg class="vp-i" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
					You pay on Stripe's secure page after this step.
				</p>
			</aside>
		</div>
	</Section>
</template>
<script>
	import Section from '@vueplayio/section';
	// A checkout: the form at the left, what is bought and its price at the right
	export default {
		components: {
			Section
		},
		props: {
			item: { type: String, default: '' },
			about: { type: String, default: '' },
			price: { type: String, default: '' }
		}
	};

</script>
<style>
	.vp-checkout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 20rem;
		gap: 24px;
		align-items: start;
	}

	.vp-checkout__main {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.vp-checkout__summary {
		position: sticky;
		top: 96px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.vp-checkout__label {
		margin: 0;
		color: var(--vp-muted);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.vp-checkout__item {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 700;
	}

	.vp-checkout__about {
		margin: 0;
		color: var(--vp-muted);
		font-size: 0.9375rem;
	}

	.vp-checkout__total {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		margin-top: 0.5rem;
		padding-top: 0.75rem;
		border-top: 1px solid var(--vp-border);
	}

	.vp-checkout__total b {
		font-size: 1.5rem;
	}

	.vp-checkout__safe {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		margin: 0.25rem 0 0;
		color: var(--vp-muted);
		font-size: 0.8125rem;
	}

	.vp-checkout__actions {
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 860px) {
		.vp-checkout {
			grid-template-columns: 1fr;
		}

		.vp-checkout__summary {
			position: static;
			order: -1;
		}
	}

</style>
