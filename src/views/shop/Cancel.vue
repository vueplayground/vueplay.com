<template>
	<Page>
		<Section class="vp-intro" space="xlarge" align="center" height="half" gap="18px">
			<Paragraph size="small" align="center" class="vp-eyebrow">Cancelled</Paragraph>
			<Heading level="h1" size="xlarge" align="center">Checkout cancelled</Heading>
			<Paragraph size="large" align="center" :muted="true" width="560px">Checkout was successfully cancelled. Nothing was charged for {{ product?.name || application?.title || product?.slug }}.</Paragraph>
			<Stack spread="center" gap="12px">
				<Button :href="`/market/${category || 'all'}/${slug}${version ? '/' + version : ''}`">Back to product</Button>
			</Stack>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			Section,
			Heading,
			Paragraph,
			Stack,
			Button
		},
		inject: ['account', 'manager', 'market', 'refresh'],
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
			await Promise.all([
				this.getApplication(),
				this.getCustomer()				
			])
			await Promise.all([
				this.getProduct(),
				this.cancelOrders()
			])
		},
		async serverPrefetch() {
			await Promise.all([
				this.getApplication(),
				this.getCustomer()				
			])
			await this.getProduct()
		},
		methods: {
			async cancelOrders() {
				if (!this.customer) return;
				const pendingOrders = await this.market.service('orders')
					.find({
						query: {
							customer_id: this.customer.id,
							status: 'pending'
						}
					});
				for (const order of pendingOrders?.data || []) {
					await this.market.service('orders')
						.cancel({
							order_id: order.id
						});
					await this.market.service('orders')
						.verify({
							order_id: order.id
						});
				}
				await this.refresh();
			},
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
			}
		},
		head() {
			return privateHead('Checkout cancelled · Vue Play Market');
		}
	};

</script>
