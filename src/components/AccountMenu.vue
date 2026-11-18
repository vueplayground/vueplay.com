<template>
	<div ref="root" class="vp-account" data-allow-mismatch="" @keydown.esc="open = false">
		<router-link v-if="!account?.user" class="vp-account__login" to="/login">Log in</router-link>
		<template v-else>
			<button
				type="button"
				class="vp-account__me"
				:aria-expanded="open ? 'true' : 'false'"
				aria-haspopup="menu"
				:aria-label="'Your account: ' + name"
				@click="open = !open"
			>
				<span class="vp-account__face" :style="{ backgroundImage: account.user.picture ? 'url(' + account.user.picture + ')' : undefined }">{{ account.user.picture ? '' : initials }}</span>
				<span class="vp-account__name">{{ name }}</span>
				<svg class="vp-account__more" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
			</button>
			<div class="vp-account__menu" :class="{ 'vp-account__menu--open': open }" role="menu">
				<div class="vp-account__who">
					<b>{{ name }}</b>
					<small v-if="account.user.email">{{ account.user.email }}</small>
				</div>
				<router-link class="vp-account__item" role="menuitem" to="/profile" @click="open = false">Profile</router-link>
				<router-link class="vp-account__item" role="menuitem" to="/tokens" @click="open = false">Tokens</router-link>
				<router-link class="vp-account__item" role="menuitem" to="/market/me" @click="open = false">Your market items</router-link>
				<router-link class="vp-account__item" role="menuitem" to="/market/orders" @click="open = false">Orders</router-link>
				<router-link class="vp-account__item vp-account__out" role="menuitem" to="/logout" @click="open = false">Log out</router-link>
			</div>
		</template>
	</div>
</template>
<script>
	// The account in the header: "Log in", or the picture of whoever is signed in with a small menu.
	// (In the phone menu the links are listed as they are, without a picture to press first.)
	export default {
		inject: ['account'],
		data: () => ({
			open: false
		}),
		computed: {
			name() {
				const user = this.account?.user || {};
				return [user.first_name, user.last_name].filter(Boolean).join(' ') || user.username || user.email || 'Your account';
			},
			initials() {
				return this.name.split(/\s+/).map(word => word[0]).join('').slice(0, 2).toUpperCase();
			}
		},
		mounted() {
			document.addEventListener('click', this.outside);
		},
		beforeUnmount() {
			document.removeEventListener('click', this.outside);
		},
		methods: {
			outside(event) {
				if (this.open && !this.$refs.root?.contains(event.target)) this.open = false;
			}
		}
	};

</script>
<style>
	.vp-account {
		position: relative;
		display: inline-flex;
		align-items: center;
	}

	.vp-account__login {
		padding: 0.45rem 0.75rem;
		border-radius: min(var(--vp-radius, 8px), 999px);
		color: inherit;
		font-size: 0.9375rem;
		font-weight: 600;
		text-decoration: none;
		transition: background-color 140ms ease;
	}

	.vp-account__login:hover {
		background: color-mix(in oklch, currentColor 7%, transparent);
	}

	.vp-account__me {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.2rem 0.4rem 0.2rem 0.2rem;
		border: 1px solid var(--vp-border);
		border-radius: 999px;
		background: none;
		color: inherit;
		cursor: pointer;
		font: inherit;
	}

	.vp-account__me:hover {
		background: color-mix(in oklch, currentColor 6%, transparent);
	}

	.vp-account__face {
		display: inline-grid;
		place-items: center;
		width: 1.9rem;
		height: 1.9rem;
		border-radius: 50%;
		background: color-mix(in oklch, var(--vp-primary) 22%, var(--vp-background)) center / cover no-repeat;
		color: var(--vp-text);
		font-size: 0.75rem;
		font-weight: 700;
	}

	.vp-account__name {
		display: none;
	}

	.vp-account__more {
		width: 1rem;
		height: 1rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		opacity: 0.7;
	}

	.vp-account__menu {
		display: none;
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		z-index: 30;
		min-width: 14rem;
		flex-direction: column;
		padding: 0.4rem;
		border: 1px solid var(--vp-border);
		border-radius: var(--vp-radius, 12px);
		background: var(--vp-background);
		color: var(--vp-text);
		box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.35);
	}

	.vp-account__menu--open {
		display: flex;
	}

	.vp-account__who {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0.65rem 0.6rem;
		border-bottom: 1px solid var(--vp-border);
		margin-bottom: 0.3rem;
		line-height: 1.35;
	}

	.vp-account__who small {
		color: var(--vp-muted);
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.vp-account__item {
		padding: 0.5rem 0.65rem;
		border-radius: 8px;
		color: inherit;
		font-size: 0.9375rem;
		text-decoration: none;
	}

	.vp-account__item:hover,
	.vp-account__item:focus-visible {
		background: var(--vp-surface);
	}

	.vp-account__out {
		color: var(--vp-muted);
	}

	/* in the phone menu: the links as rows, no picture to press first */
	.vp-site-header--narrow .vp-account {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.vp-site-header--narrow .vp-account__me {
		display: none;
	}

	.vp-site-header--narrow .vp-account__menu {
		display: flex;
		position: static;
		min-width: 0;
		padding: 0;
		border: 0;
		border-radius: 0;
		box-shadow: none;
		background: none;
	}

	.vp-site-header--narrow .vp-account__who {
		padding: 0.9rem 0 0.6rem;
		margin: 0;
	}

	.vp-site-header--narrow .vp-account__item,
	.vp-site-header--narrow .vp-account__login {
		padding: 0.9rem 0;
		border-bottom: 1px solid color-mix(in oklch, var(--vp-border) 70%, transparent);
		border-radius: 0;
		font-size: 1.0625rem;
	}

</style>
