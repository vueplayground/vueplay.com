<template>
	<nav class="vp-market-nav" aria-label="Market categories">
		<div class="vp-market-nav__group">
			<router-link v-for="link in shop" :key="link.to" :to="link.to" class="vp-market-nav__link" :class="{ 'vp-market-nav__link--here': here(link.to) }" :aria-current="here(link.to) ? 'page' : undefined">{{ link.text }}</router-link>
		</div>
		<details v-if="account" class="vp-market-nav__more" :open="personalOpen" data-allow-mismatch="">
			<summary>Yours</summary>
			<div class="vp-market-nav__group">
				<router-link v-for="link in personal" :key="link.to" :to="link.to" class="vp-market-nav__link" :class="{ 'vp-market-nav__link--here': here(link.to) }" :aria-current="here(link.to) ? 'page' : undefined">{{ link.text }}</router-link>
			</div>
		</details>
		<details v-if="admin" class="vp-market-nav__more" :open="adminOpen" data-allow-mismatch="">
			<summary>Admin</summary>
			<div class="vp-market-nav__group">
				<router-link v-for="link in adminLinks" :key="link.to" :to="link.to" class="vp-market-nav__link" :class="{ 'vp-market-nav__link--here': here(link.to) }" :aria-current="here(link.to) ? 'page' : undefined">{{ link.text }}</router-link>
			</div>
		</details>
	</nav>
</template>
<script>
	// The Market's categories: what is for sale to everyone, what is yours (signed in), and the admin lists
	export default {
		inject: ['account'],
		data: () => ({
			shop: [
				{ text: 'All', to: '/market' },
				{ text: 'Components', to: '/market/components' },
				{ text: 'Templates', to: '/market/templates' },
				{ text: 'Priced', to: '/market/priced' }
			],
			personal: [
				{ text: 'All yours', to: '/market/me' },
				{ text: 'Purchases', to: '/market/purchases' },
				{ text: 'Private', to: '/market/private' },
				{ text: 'Published', to: '/market/published' },
				{ text: 'In review', to: '/market/in-review' },
				{ text: 'Hidden', to: '/market/hidden' },
				{ text: 'Archived', to: '/market/archived' },
				{ text: 'Orders', to: '/market/orders' }
			],
			adminLinks: [
				{ text: 'Published', to: '/market/published-all' },
				{ text: 'In review', to: '/market/in-review-all' },
				{ text: 'Private', to: '/market/private-all' },
				{ text: 'Hidden', to: '/market/hidden-all' },
				{ text: 'Archived', to: '/market/archived-all' }
			]
		}),
		computed: {
			admin() {
				return this.account?.authentication?.payload?.global_roles?.includes('admin');
			},
			personalOpen() {
				return this.personal.some(link => this.here(link.to));
			},
			adminOpen() {
				return this.adminLinks.some(link => this.here(link.to));
			}
		},
		methods: {
			here(to) {
				const path = this.$route.path.replace(/\/$/, '');
				if (to === '/market') return path === '/market' || path === '/market/all';
				return path === to;
			}
		}
	};

</script>
<style>
	.vp-market-nav {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: 0.6rem 1rem;
	}

	.vp-market-nav__group {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.4rem;
	}

	.vp-market-nav__link {
		padding: 0.4rem 0.95rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		background: var(--vp-background);
		color: var(--vp-text);
		font-size: 0.9375rem;
		font-weight: 500;
		text-decoration: none;
		transition: border-color 140ms ease, background-color 140ms ease;
	}

	.vp-market-nav__link:hover {
		border-color: color-mix(in oklch, var(--vp-primary) 50%, var(--vp-border));
	}

	.vp-market-nav__link--here {
		border-color: var(--vp-primary);
		background: var(--vp-primary);
		color: var(--vp-primary-contrast);
		font-weight: 600;
	}

	.vp-market-nav__link--here:hover {
		border-color: var(--vp-primary);
	}

	.vp-market-nav__more {
		position: relative;
	}

	.vp-market-nav__more summary {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.4rem 0.95rem;
		border: 1px dashed var(--vp-border);
		border-radius: 999px;
		color: var(--vp-muted);
		font-size: 0.9375rem;
		font-weight: 600;
		cursor: pointer;
		list-style: none;
	}

	.vp-market-nav__more summary::-webkit-details-marker {
		display: none;
	}

	.vp-market-nav__more summary::after {
		content: '';
		width: 0.4rem;
		height: 0.4rem;
		border-right: 1.5px solid currentColor;
		border-bottom: 1.5px solid currentColor;
		transform: translateY(-2px) rotate(45deg);
	}

	.vp-market-nav__more[open] summary {
		border-style: solid;
		color: var(--vp-text);
	}

	.vp-market-nav__more[open] {
		flex-basis: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.6rem;
	}

</style>
