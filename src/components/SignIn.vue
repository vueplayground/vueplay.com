<template>
	<Section class="vp-intro" space="large" align="center" height="half">
		<div class="vp-panel vp-signin">
			<router-link to="/" class="vp-signin__logo" aria-label="Vue Play, the front page">
				<img src="@/_templates/arctic/assets/vueplay.webp" alt="" width="44" height="48" />
			</router-link>
			<h1 class="vp-signin__title">{{ title }}</h1>
			<p class="vp-signin__text">{{ text }}</p>
			<div class="vp-signin__providers" data-allow-mismatch="">
				<a v-for="provider in providers" :key="provider.key" class="vp-signin__provider" :href="`https://auth.vueplay.io/oauth/${provider.key}?app_url=${origin}${to}`">
					<img :src="provider.icon" alt="" width="22" height="22" :class="{ 'vp-signin__invert': provider.invert }" />
					<span>Continue with {{ provider.name }}</span>
				</a>
			</div>
			<p class="vp-signin__small">By continuing you agree to the <router-link to="/terms-of-service">terms of service</router-link> and the <router-link to="/privacy-policy">privacy policy</router-link>.</p>
		</div>
	</Section>
</template>
<script>
	import Section from '@vueplayio/section';
	import google from '@/assets/google.svg';
	import facebook from '@/assets/facebook.svg';
	import github from '@/assets/icons/github-black.svg';
	// Signing in through GitHub, Google or Facebook; the auth server sends the visitor back to `to` on this site
	export default {
		components: {
			Section
		},
		props: {
			title: { type: String, default: 'Log in to Vue Play' },
			text: { type: String, default: 'Continue with' },
			to: { type: String, default: '/profile' }
		},
		data: () => ({
			origin: 'https://vueplay.com',
			providers: [{
				key: 'github',
				name: 'GitHub',
				icon: github,
				invert: true
			}, {
				key: 'google',
				name: 'Google',
				icon: google
			}, {
				key: 'facebook',
				name: 'Facebook',
				icon: facebook
			}]
		}),
		mounted() {
			this.origin = location.origin;
		}
	};

</script>
<style>
	.vp-signin {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		max-width: 26rem;
		margin: 0 auto;
		padding: 2.25rem clamp(1.25rem, 5vw, 2.5rem);
		text-align: center;
		box-shadow: 0 30px 60px -36px rgba(6, 40, 30, 0.35);
	}

	.vp-signin__logo img {
		display: block;
		width: 44px;
		height: 48px;
		object-fit: contain;
	}

	.vp-signin__title {
		margin: 0.25rem 0 0;
		font-family: var(--vp-font-heading);
		font-size: 1.75rem;
		font-weight: 700;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.vp-signin__text {
		margin: 0 0 0.5rem;
		color: var(--vp-muted);
	}

	.vp-signin__providers {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		width: 100%;
	}

	.vp-signin__provider {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.65rem;
		min-height: 3rem;
		padding: 0.6rem 1rem;
		border: 1px solid var(--vp-border);
		border-radius: 10px;
		background: var(--vp-background);
		color: var(--vp-text);
		font-weight: 600;
		text-decoration: none;
		transition: border-color 140ms ease, background-color 140ms ease, transform 140ms ease;
	}

	.vp-signin__provider:hover {
		border-color: var(--vp-primary);
		background: var(--vp-surface);
		transform: translateY(-1px);
	}

	.vp-signin__provider img {
		width: 22px;
		height: 22px;
	}

	.dark .vp-signin__invert {
		filter: invert(1);
	}

	.vp-signin__small {
		margin: 0.5rem 0 0;
		color: var(--vp-muted);
		font-size: 0.8125rem;
	}

	.vp-signin__small a {
		color: inherit;
		text-decoration: underline;
	}

</style>
