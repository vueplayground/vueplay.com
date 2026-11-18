<template>
	<Page>
		<PageIntro eyebrow="Account" title="Tokens" text="Long-living tokens: keep them secret."></PageIntro>
		<Section space="small" width="narrow" gap="28px">
			<p class="vp-tokens__about">Tokens can be used inside .npmrc to install private and purchased components. They also give access to the Vue Play APIs and make it possible to git clone private projects.</p>
			<SignedOut v-if="!account?.user" title="Log in to make tokens" text="Tokens belong to your Vue Play account."></SignedOut>
			<template v-else>
				<form class="vp-panel" @submit.prevent="createToken()">
					<h2 class="vp-tokens__h2">New token</h2>
					<div class="vp-form vp-form--two">
						<label class="vp-field"><span>Token name</span><input v-model="title" placeholder="My token" required /></label>
						<label class="vp-field"><span>Expires in</span>
							<select v-model="expires">
								<option v-for="expire in expiresin" :key="expire.label" :value="expire.value">{{ expire.label }}</option>
							</select>
						</label>
						<label class="vp-field"><span>Expires at</span><input v-model="expires" /></label>
					</div>
					<div class="vp-tokens__go">
						<button type="submit" class="vp-btn vp-btn--solid">Generate</button>
					</div>
				</form>
				<div v-if="token" class="vp-panel vp-panel--soft vp-tokens__new">
					<p>You’ll only see this token once. Keep it safe: it won’t be shown again.</p>
					<div class="vp-code"><pre>{{ token }}</pre><button type="button" @click="copyToken">{{ copied ? 'Copied' : 'Copy' }}</button></div>
				</div>
				<div v-if="tokens?.data?.length" class="vp-tokens__list">
					<h2 class="vp-tokens__h2">Existing tokens</h2>
					<div v-for="item in tokens.data" :key="item.id" class="vp-tokens__row">
						<label class="vp-field"><span>Name</span><input v-model="item.title" /></label>
						<div class="vp-tokens__expiry" :title="'Expires at ' + item.expires_at">Exp. {{ item.expires_at }}</div>
						<div class="vp-tokens__actions">
							<button type="button" class="vp-btn" @click="save(item)">Save</button>
							<button type="button" class="vp-btn vp-tokens__revoke" @click="revoke(item)">Revoke</button>
						</div>
					</div>
				</div>
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
		inject: ['account', 'auth'],
		data: () => ({
			tokens: {
				data: []
			},
			expires: '',
			expiresin: [],
			title: '',
			token: '',
			copied: false
		}),
		async mounted() {
			this.generateExpirationOptions();
			this.expires = this.expiresin.find(exp => exp.label === 'a year')
				?.value;
			await this.list();
		},
		watch: {
			async account(value) {
				if (value) await this.list();
			}
		},
		methods: {
			async save(token) {
				await this.auth.service('auth_sessions')
					.patch(token.id, {
						title: token.title
					});
				await this.list();
				alert('Updated!');
			},
			async revoke(token) {
				await this.auth.service('auth_sessions')
					.patch(token.id, {
						revoked: true
					});
				await this.list();
				alert('Revoked!');
			},
			async createToken() {
				if (!this.title) return alert('Token name is required');
				try {
					const token = await this.auth.service('auth_sessions')
						.create({
							revoked: false,
							expires_at: this.expires,
							title: this.title
						});
					this.token = token?.accessToken || '';
					this.copied = false;
					this.title = '';
					await this.list();
				} catch (e) {
					console.log(e);
				}
			},
			async copyToken() {
				try {
					await navigator.clipboard.writeText(this.token);
					this.copied = true;
				} catch (e) {
					alert('Could not copy to clipboard');
				}
			},
			async list() {
				if (!this.account) return;
				this.tokens = await this.auth.service('auth_sessions')
					.find({
						query: {
							revoked: false,
							$sort: {
								created_at: -1
							}
						}
					});
			},
			formatDate(date) {
				const pad = n => String(n)
					.padStart(2, '0');
				return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} 23:59:59`;
			},
			generateExpirationOptions() {
				const now = new Date();
				const options = [{
					label: 'a week',
					date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
				}, {
					label: 'a month',
					date: new Date(new Date(now)
						.setMonth(now.getMonth() + 1))
				}, {
					label: '6 months',
					date: new Date(new Date(now)
						.setMonth(now.getMonth() + 6))
				}, {
					label: 'a year',
					date: new Date(new Date(now)
						.setFullYear(now.getFullYear() + 1))
				}, {
					label: '3 years',
					date: new Date(new Date(now)
						.setFullYear(now.getFullYear() + 3))
				}, {
					label: 'never',
					date: null
				}];
				this.expiresin = options.map(option => ({
					label: option.label,
					value: option.date ? this.formatDate(option.date) : '9999-12-31 23:59:59'
				}));
			}
		},
		head() {
			return privateHead('Tokens · Vue Play');
		}
	};

</script>
<style>
	.vp-tokens__about {
		margin: 0;
		color: var(--vp-muted);
		text-align: center;
	}

	.vp-tokens__h2 {
		margin: 0 0 1rem;
		font-size: 1.125rem;
		font-weight: 700;
	}

	.vp-tokens__go {
		display: flex;
		justify-content: flex-end;
		margin-top: 1.25rem;
	}

	.vp-tokens__new {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.vp-tokens__new p {
		margin: 0;
		font-weight: 600;
	}

	.vp-tokens__new pre {
		white-space: pre-wrap;
		word-break: break-all;
	}

	.vp-tokens__row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto auto;
		align-items: end;
		gap: 0.75rem;
		padding: 0.9rem 0;
		border-top: 1px solid var(--vp-border);
	}

	.vp-tokens__expiry {
		padding-bottom: 0.7rem;
		color: var(--vp-muted);
		font-size: 0.875rem;
		white-space: nowrap;
	}

	.vp-tokens__actions {
		display: flex;
		gap: 0.4rem;
	}

	.vp-tokens__revoke:hover {
		border-color: #e62020;
		color: #e62020;
	}

	@media (max-width: 600px) {
		.vp-tokens__row {
			grid-template-columns: 1fr;
		}

		.vp-tokens__expiry {
			padding: 0;
		}
	}

</style>
