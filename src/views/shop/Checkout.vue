<template>
	<Page>
		<PageIntro eyebrow="Checkout" :title="'Checkout: ' + (product?.name || application?.title || product?.slug || slug)" text="Your billing details first. Then you pay on Stripe's secure page."></PageIntro>
		<CheckoutFrame :item="product?.name || application?.title || product?.slug || slug" :about="product?.description || application?.description || ''" :price="application?.price ? '$' + (application.price / 100) + ' inc.' : ''">
			<form v-if="account?.user && customer" class="vp-panel" @submit.prevent="checkout()">
				<CustomerFields :customer="customer"></CustomerFields>
				<div class="vp-checkout__actions" style="margin-top:1.25rem">
					<button type="submit" class="vp-btn vp-btn--solid">Checkout</button>
				</div>
			</form>
			<SignedOut v-else title="Only authenticated users can check out" text="Log in first, then come back to check out."></SignedOut>
		</CheckoutFrame>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import CheckoutFrame from '@/components/CheckoutFrame.vue';
	import CustomerFields from '@/components/CustomerFields.vue';
	import SignedOut from '@/components/SignedOut.vue';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			CheckoutFrame,
			CustomerFields,
			SignedOut
		},
		inject: ['account', 'manager', 'market'],
		props: {
			category: {
				type: String,
				default: 'all'
			},
			slug: {
				type: String,
				default: ''
			},
			version: {
				type: String,
				default: ''
			}
		},
		data: () => ({
			application: null,
			product: null,
			customer: {},
			order: null
		}),
		async mounted() {
			await this.getApplication();
			await this.getProduct();
			await this.getCustomer();
		},
		async serverPrefetch() {
			await this.getApplication();
			await this.getProduct();
			await this.getCustomer();
		},
		computed: {
			icon() {
				return this.application?.icon?.replace('width', 'data-width')
					.replace('height', 'data-height');
			}
		},
		methods: {
			async getApplication() {
				const res = await fetch(`https://manager.vueplay.io/applications?slug=${this.slug}`);
				const apps = await res.json();
				this.application = apps?.data?.[0];
			},
			async getProduct() {
				// (an item that is not for sale has no product)
				if (!this.application?.product_id) return;
				const res = await fetch(`https://market.vueplay.io/products/${this.application?.product_id}`);
				this.product = await res.json();
			},
			async getCustomer() {
				if (!this.account?.user) return;
				const res = await fetch(`https://market.vueplay.io/customer_users?user_id=${this.account.user.id}`, {
					headers: {
						Authorization: `Bearer ${this.account?.accessToken}`
					}
				});
				const customerUser = (await res.json())
					?.data?.[0];
				if (customerUser) {
					const resCustomer = await fetch(`https://market.vueplay.io/customers/${customerUser.customer_id}`, {
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					this.customer = await resCustomer.json();
				} else {
					const resCustomer = await fetch(`https://market.vueplay.io/customers`, {
						method: 'POST',
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					this.customer = await resCustomer.json();
				}
			},
			async checkout() {
				try {
					this.order = await this.market.service('orders')
						.checkout({
							origin: location.origin + `/market/${this.category || 'all'}/${this.slug}/${this.version ? this.version + '/' : ''}checkout`,
							title: this.product.name,
							description: this.product.description,
							customer: {
								first_name: this.customer.first_name,
								middle_name: this.customer.middle_name,
								last_name: this.customer.last_name,
								email: this.customer.email,
								phone: this.customer.phone,
								billing_country: this.customer.billing_country,
								billing_state: this.customer.billing_state,
								billing_street: this.customer.billing_street,
								billing_city: this.customer.billing_city,
								billing_zip: this.customer.billing_zip,
								shipping_country: this.customer.billing_country,
								shipping_state: this.customer.billing_state,
								shipping_street: this.customer.billing_street,
								shipping_city: this.customer.billing_city,
								shipping_zip: this.customer.billing_zip,
								currency: 'USD'
							},
							provider: 'stripe',
							orderLines: [{
								product_id: this.product.id,
								service_id: null,
								plan_id: null,
								tier_id: null,
								quantity: 1
							}],
							meta: {
								user_id: this.account.user.id
							}
						});
					location.href = this.order.redirect_url;
				} catch (e) {
					alert(e.message);
					console.log(e);
				}
			}
		},
		head() {
			return privateHead('Checkout · Vue Play Market');
		}
	};

</script>
