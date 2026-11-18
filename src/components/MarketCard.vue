<template>
	<router-link class="vp-card" :to="productPath(component, category)">
		<div class="vp-card__picture" :class="'vp-card__picture--' + (picture?.kind || 'none')">
			<img v-if="picture?.kind === 'image'" :src="picture.src" alt="" loading="lazy" />
			<span v-else-if="picture?.kind === 'icon'" class="vp-card__icon" :style="picture.style" aria-hidden="true"></span>
			<svg v-else class="vp-card__placeholder" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v16H3zM3 9h18M9 9v11" /></svg>
		</div>
		<div class="vp-card__body">
			<div class="vp-card__tags">
				<span class="vp-chip">{{ capital(typeName(component.type)) }}</span>
				<span v-if="component.type === 'vue-sfc' && !component.versions?.length" class="vp-chip vp-chip--warn">Not released</span>
				<span v-else-if="component.latest_version" class="vp-card__version">v{{ component.latest_version }}</span>
				<span class="vp-card__price" :class="{ 'vp-card__price--paid': component.price }">{{ priceText(component.price) }}</span>
			</div>
			<h2 class="vp-card__title">{{ component.title || component.slug }}</h2>
			<p v-if="component.description" class="vp-card__text">{{ component.description }}</p>
		</div>
	</router-link>
</template>
<script>
	import { typeName, productPath, priceText, pictureOf } from '@/components/market.js';
	// One item in the Market: its picture or icon, what it is, its version, its price and its name
	export default {
		props: {
			component: { type: Object, required: true },
			category: { type: String, default: 'all' }
		},
		computed: {
			picture() {
				return pictureOf(this.component);
			}
		},
		methods: {
			typeName,
			productPath,
			priceText,
			capital: text => text.charAt(0).toUpperCase() + text.slice(1)
		}
	};

</script>
<style>
	.vp-card {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		border: 1px solid var(--vp-border);
		border-radius: 16px;
		background: var(--vp-background);
		color: var(--vp-text);
		text-decoration: none;
		transition: border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
	}

	.vp-card:hover {
		border-color: color-mix(in oklch, var(--vp-primary) 45%, var(--vp-border));
		box-shadow: 0 22px 44px -26px rgba(6, 40, 30, 0.4);
		transform: translateY(-2px);
	}

	.vp-card:focus-visible {
		outline: 2px solid var(--vp-primary);
		outline-offset: 3px;
	}

	.vp-card__picture {
		position: relative;
		display: grid;
		place-items: center;
		aspect-ratio: 16 / 10;
		border-bottom: 1px solid var(--vp-border);
		background:
			radial-gradient(120% 90% at 20% 0%, color-mix(in oklch, var(--vp-primary) 16%, transparent), transparent 60%),
			var(--vp-surface);
		overflow: hidden;
	}

	.vp-card__picture img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		transition: transform 300ms ease;
	}

	.vp-card:hover .vp-card__picture img {
		transform: scale(1.03);
	}

	.vp-card__icon {
		width: 34%;
		aspect-ratio: 1;
		background: var(--vp-primary);
		-webkit-mask: var(--icon) center / contain no-repeat;
		mask: var(--icon) center / contain no-repeat;
	}

	.vp-card__placeholder {
		width: 28%;
		fill: none;
		stroke: var(--vp-muted);
		stroke-width: 1.5;
	}

	.vp-card__body {
		display: flex;
		flex: 1;
		flex-direction: column;
		gap: 0.45rem;
		padding: 1rem 1.15rem 1.2rem;
	}

	.vp-card__tags {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
	}

	.vp-card__version {
		color: var(--vp-muted);
		font-size: 0.8125rem;
		font-variant-numeric: tabular-nums;
	}

	.vp-card__price {
		margin-left: auto;
		color: var(--vp-muted);
		font-size: 0.875rem;
		font-weight: 700;
	}

	.vp-card__price--paid {
		color: var(--vp-primary);
	}

	.vp-card__title {
		margin: 0.15rem 0 0;
		font-family: var(--vp-font-heading);
		font-size: 1.0625rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.vp-card__text {
		display: -webkit-box;
		margin: 0;
		overflow: hidden;
		color: var(--vp-muted);
		font-size: 0.9rem;
		line-height: 1.5;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

</style>
