<template>
	<SiteHeader
		class="vp-top"
		brand="Vue Play"
		:logo="logo"
		:links="links"
		button="Start building, free"
		buttonLink="https://studio.vueplay.com"
		:sticky="true"
		:phoneWidth="1000"
	>
		<div class="vp-top__extra">
			<DarkmodeSwitch></DarkmodeSwitch>
			<AccountMenu></AccountMenu>
		</div>
	</SiteHeader>
</template>
<script>
	import SiteHeader from '@vueplayio/site-header';
	import DarkmodeSwitch from '@/components/DarkmodeSwitch.vue';
	import AccountMenu from '@/components/AccountMenu.vue';
	import logo from '@/_templates/arctic/assets/vueplay.webp';
	// The top of every page: the name, the main pages, the theme, the account and the way into the Studio.
	export default {
		components: {
			SiteHeader,
			DarkmodeSwitch,
			AccountMenu
		},
		data: () => ({
			logo,
			links: [{
				text: 'Features',
				href: '/features'
			}, {
				text: 'Learn',
				href: '/features/learn'
			}, {
				text: 'Market',
				href: '/market'
			}, {
				text: 'Pricing',
				href: '/pricing'
			}, {
				text: 'Docs',
				href: '/api-documentation'
			}]
		})
	};

</script>
<style>
	.vp-top {
		color: var(--vp-text);
		font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		line-height: 1.5;
		z-index: 50;
	}

	.vp-top .vp-site-header__inner {
		max-width: var(--vp-width, 1180px);
	}

	.vp-top .vp-site-header__logo {
		height: 2.1rem;
	}

	.vp-top__extra {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		margin-left: 0.5rem;
		padding-left: 0.75rem;
		border-left: 1px solid var(--vp-border);
	}

	.vp-top .vp-site-header__button {
		margin-left: 0.5rem;
	}

	/* in the phone menu: the theme and the account under the links */
	.vp-site-header--narrow .vp-top__extra {
		flex-direction: column-reverse;
		align-items: stretch;
		margin: 0;
		padding: 0;
		border: 0;
	}

	.vp-site-header--narrow .vp-theme-switch {
		justify-content: flex-start;
		width: auto;
		height: auto;
		padding: 0.9rem 0;
		border-radius: 0;
		color: inherit;
		font-size: 1.0625rem;
	}

	.vp-site-header--narrow .vp-theme-switch:hover {
		background: none;
	}

	.vp-site-header--narrow .vp-theme-switch__text {
		position: static;
		width: auto;
		height: auto;
		clip: auto;
	}

</style>
