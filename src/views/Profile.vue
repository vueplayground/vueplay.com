<template>
	<Page>
		<PageIntro eyebrow="Account" title="Profile" text="Keep your information up to date."></PageIntro>
		<Section space="small" width="narrow" gap="28px">
			<SignedOut v-if="!acc?.user" title="Log in to see your profile" text="Your profile, your teams and your subscription are here once you are logged in."></SignedOut>
			<template v-else>
				<div class="vp-panel vp-profile__who">
					<div class="vp-profile__face" :style="{ backgroundImage: acc.user.picture ? 'url(' + acc.user.picture + ')' : undefined }"></div>
					<div>
						<h2>{{ [acc.user.first_name, acc.user.last_name].filter(Boolean).join(' ') || acc.user.username }}</h2>
						<p data-allow-mismatch="">Created {{ (new Date(acc.user.created_at)).toLocaleString() }} · Updated {{ (new Date(acc.user.updated_at)).toLocaleString() }}</p>
					</div>
				</div>
				<form class="vp-panel" @submit.prevent="save()">
					<div class="vp-form vp-form--two">
						<label class="vp-field"><span>Username</span><input v-model="acc.user.username" placeholder="Username" autocomplete="username" /></label>
						<label class="vp-field"><span>First name</span><input v-model="acc.user.first_name" placeholder="First name" autocomplete="given-name" /></label>
						<label class="vp-field"><span>Middle name</span><input v-model="acc.user.middle_name" placeholder="Middle name" autocomplete="additional-name" /></label>
						<label class="vp-field"><span>Last name</span><input v-model="acc.user.last_name" placeholder="Last name" autocomplete="family-name" /></label>
						<label class="vp-field"><span>Email {{ acc.user.email && !acc.user.email_verified_at ? '(Unverified)' : '' }}</span><input v-model="acc.user.email" type="email" placeholder="Email" autocomplete="email" /></label>
						<label class="vp-field"><span>Phone {{ acc.user.phone && !acc.user.phone_verified_at ? '(Unverified)' : '' }}</span><input v-model="acc.user.phone" type="tel" placeholder="Phone" autocomplete="tel" /></label>
						<label class="vp-field"><span>Picture</span><input v-model="acc.user.picture" placeholder="Picture url" /></label>
						<label class="vp-field"><span>Locale</span><input v-model="acc.user.locale" placeholder="en" /></label>
					</div>
					<div class="vp-profile__save">
						<button type="submit" class="vp-btn vp-btn--solid">Update</button>
					</div>
				</form>
				<div v-if="subscriptions?.data?.length" class="vp-profile__list">
					<h2>Subscriptions</h2>
					<ul>
						<li v-for="(subscription, index) in subscriptions.data" :key="index" class="vp-chip vp-chip--brand">Vue Play · Status: {{ subscription.status }}</li>
					</ul>
				</div>
				<div v-else class="vp-profile__list" data-allow-mismatch="">
					<h2>Subscriptions</h2>
					<p>You are on Hobby. <router-link to="/pricing">See Professional</router-link></p>
				</div>
				<div v-if="roles.length" class="vp-profile__list">
					<h2>Global roles</h2>
					<ul><li v-for="role in roles" :key="role" class="vp-chip">{{ role }}</li></ul>
				</div>
				<div v-if="groups.length" class="vp-profile__list">
					<h2>Connected groups</h2>
					<ul><li v-for="group in groups" :key="group.id || group.slug" class="vp-chip">{{ group.name || group.slug }}</li></ul>
				</div>
				<div v-if="products.length" class="vp-profile__list">
					<h2>Connected products</h2>
					<ul><li v-for="group in products" :key="group.id || group.slug" class="vp-chip">{{ group.name || group.slug }}</li></ul>
				</div>
				<p class="vp-profile__more"><router-link to="/tokens">Tokens</router-link> · <router-link to="/market/orders">Orders</router-link> · <router-link to="/logout">Log out</router-link></p>
			</template>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import SignedOut from '@/components/SignedOut.vue';
	import Section from '@vueplayio/section';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			SignedOut,
			Section
		},
		inject: ['account', 'auth', 'market'],
		data: () => ({
			subscriptions: null
		}),
		computed: {
			acc() {
				return this.account;
			},
			roles() {
				return this.acc?.authentication?.payload?.global_roles || [];
			},
			groups() {
				return this.acc?.authentication?.payload?.groups?.filter(g => g.type !== 'product-access') || [];
			},
			products() {
				return this.acc?.authentication?.payload?.groups?.filter(g => g.type === 'product-access') || [];
			}
		},
		async mounted() {
			await this.getSubscriptions();
		},
		watch: {
			async account(value) {
				if (value) await this.getSubscriptions();
			}
		},
		methods: {
			async save() {
				try {
					const result = await this.auth.service('users')
						.patch(this.acc.user.id, {
							username: this.acc.user.username,
							first_name: this.acc.user.first_name,
							middle_name: this.acc.user.middle_name,
							last_name: this.acc.user.last_name,
							email: this.acc.user.email,
							phone: this.acc.user.phone,
							locale: this.acc.user.locale
						});
					alert('Profile has successfully been updated!');
					console.log('res', result);
				} catch (e) {
					alert(e.message);
					console.log(e);
				}
			},
			async getSubscriptions() {
				if (!this.account) return;
				try {
					this.subscriptions = await this.market.service('subscriptions')
						.find({
							query: {
								status: {
									$in: ['active', 'pending', 'trial']
								}
							}
						});
				} catch (e) {
					console.log('Could not read the subscriptions', e);
				}
			}
		},
		head() {
			return privateHead('Profile · Vue Play');
		}
	};

</script>
<style>
	.vp-profile__who {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.vp-profile__who h2 {
		margin: 0;
		font-size: 1.35rem;
		font-weight: 700;
	}

	.vp-profile__who p {
		margin: 0.15rem 0 0;
		color: var(--vp-muted);
		font-size: 0.875rem;
	}

	.vp-profile__face {
		flex: none;
		width: 72px;
		height: 72px;
		border: 1px solid var(--vp-border);
		border-radius: 50%;
		background: var(--vp-surface) center / cover no-repeat;
	}

	.vp-profile__save {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.25rem;
	}

	.vp-profile__list h2 {
		margin: 0 0 0.6rem;
		font-size: 1rem;
		font-weight: 700;
	}

	.vp-profile__list ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.vp-profile__list p,
	.vp-profile__more {
		margin: 0;
		color: var(--vp-muted);
	}

	.vp-profile__list a,
	.vp-profile__more a {
		color: var(--vp-primary);
		font-weight: 600;
		text-decoration: none;
	}

</style>
