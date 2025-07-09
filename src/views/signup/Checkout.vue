<template>
	<Basic>
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%"></Header>
		</template> <template #default="">
			<Box
				expand="true"
				justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					style="padding-bottom:100px"
					column="{`default`:{`xs`:{`light`:true}}}"
					marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
				>
					<Box
						style="border-bottom-width:2px"
						borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 90%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 90%, black)`}}}"
						paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
						paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
					>
						<Text
							type="{`default`:{`xs`:{`dark`:`h1`}}}"
							fontSize="{`default`:{`xs`:{`light`:`30px`},`lg`:{`light`:`35px`}}}"
							class="hash"
							style="width:100%"
						>Checkout - Vue Play Professional</Text>
					</Box>
					<Box
						borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 90%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 90%, black)`}}}"
						paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
						paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
					>
						<Text
							type="{`default`:{`xs`:{`dark`:`h1`}}}"
							fontSize="{`default`:{`xs`:{`light`:`30px`},`lg`:{`light`:`35px`}}}"
							class="hash"
							style="width:100%"
						>Price: $9 inc. / mth.</Text>
					</Box>
					<Box
						v-if="customer"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						alignItems="{`default`:{`xs`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`5px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
						column="{`default`:{`xs`:{`light`:true}}}"
					>
						<label>First name</label> <input v-model="customer.first_name" /> <label>Middle name</label> <input v-model="customer.middle_name" /> <label>Last name</label> <input v-model="customer.last_name" /> <label>Email</label> <input v-model="customer.email" /> <label>Phone</label> <input v-model="customer.phone" /> <label>Billing country</label> <select v-model="customer.billing_country">
							<option
								v-for="key in Object.keys(ccs)"
								:value="key"
							>
								{{ ccs[key] }}
							</option>
						</select> <label>Billing state</label> <input v-model="customer.billing_state" /> <label>Billing street</label> <input v-model="customer.billing_street" /> <label>Billing city</label> <input v-model="customer.billing_city" /> <label>Billing zip</label> <input v-model="customer.billing_zip" />
						<Box
							backgroundColor="{`default`:{`xs`:{`light`:`var(--color-warning)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-warning) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-warning) 60%, black)`}}}"
							padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
							marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
							borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
							marginBottom="{`default`:{`xs`:{`light`:`80px`}}}"
							style="position:unset;width:100%;cursor:pointer;transition:.3s linear all;justify-content:center"
							@click="checkout()"
						>Checkout</Box>
					</Box>
					<Box
						v-else-if="!customer"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						alignItems="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
					>
						Only authenticated users can check out
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Basic>
</template>
<script>
	import * as VUE from 'vue';
	import Link from '@vueplayio/link';
	import Basic from '@/_templates/arctic/views/Basic.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import cc from 'iso-3166-1-alpha-2';
	export default {
		components: {
			Link: Link,
			Text: Text,
			Basic: Basic,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		inject: ['account', 'manager', 'market'],
		data: () => ({
			customer: {},
			order: null,
			ccs: []
		}),
		async created() {
			this.ccs = cc.getData();
		},
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
			return {
				title: 'Vue Play - Search Engine Optimization (SEO) Made Easy',
				meta: [{
					name: 'description',
					content: 'Learn how Vue Play simplifies Search Engine Optimization (SEO) for your Vue applications with dynamic meta tags and head management.'
				}, {
					property: 'og:title',
					content: 'Vue Play - Effortless SEO for Vue Developers'
				}, {
					property: 'og:description',
					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/features/search-engine-optimalization'
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play - Effortless SEO for Vue Developers'
				}, {
					name: 'twitter:description',
					content: 'Boost your Vue app visibility with Vue Play’s powerful SEO tools and dynamic head management.'
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/features/search-engine-optimalization'
				}]
			};
		}
	};

</script>
<style scoped>
	label {
		display: block;
	}

	input,
	select {
		height: 40px;
		border-radius: 8px;
		box-sizing: border-box;
		padding: 10px 20px;
		margin-bottom: 15px;
		color: color-mix(in oklch, var(--color-neutral) 20%, black);
		background-color: white;
		width: 100%;
	}

</style>