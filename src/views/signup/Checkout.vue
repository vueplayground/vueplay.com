<template>
	<Page>
		<PageIntro eyebrow="Checkout" title="Checkout: Vue Play Professional" text="Your billing details first. Then you pay on Stripe's secure page."></PageIntro>
		<CheckoutFrame item="Vue Play Professional" about="Vue Play full access to all features." price="$9 inc. / mth.">
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
		data: () => ({
			customer: {},
			order: null
		}),
		async mounted() {
			await this.getCustomer();
		},
		async serverPrefetch() {
			await this.getCustomer();
		},
		methods: {
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
							origin: location.origin + '/signup/checkout',
							title: 'Vue Play Professional',
							description: 'Vue Play full access to all features',
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
								product_id: null,
								service_id: null,
								plan_id: 1,
								// Vue Play
								tier_id: 2,
								// Premium
								quantity: 1
							}]
						});
					location.href = this.order.redirect_url;
				} catch (e) {
					alert(e.message);
					console.log(e);
				}
			}
		},
		head() {
			return privateHead('Checkout · Vue Play Professional');
		}
	};

</script>
