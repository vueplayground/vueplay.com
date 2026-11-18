<template>
	<Page>
		<Section class="vp-intro" space="xlarge" align="center" height="half" gap="18px">
			<Paragraph size="small" align="center" class="vp-eyebrow">Success</Paragraph>
			<Heading level="h1" size="xlarge" align="center">Welcome to Vue Play Professional</Heading>
			<Paragraph size="large" align="center" :muted="true" width="560px">Thank you for purchasing Vue Play professional. You may now login to get the full experience of Vue Play!</Paragraph>
			<Stack spread="center" gap="12px">
				<Button href="https://studio.vueplay.com" :newTab="true">Open Studio</Button>
				<Button href="/profile" variant="outline">Your profile</Button>
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
		data: () => ({
			customer: {},
			order: null
		}),
		async mounted() {
			await this.getCustomer()
			await this.verifyOrders()
		},
		async serverPrefetch() {
			await this.getCustomer()
		},
		methods: {
			async verifyOrders() {
				if (!this.customer) return;
				const pendingOrders = await this.market.service('orders')
					.find({
						query: {
							customer_id: this.customer.id,
							status: 'pending'
						}
					});
				for (const order of pendingOrders?.data || []) {
					const orderResult = await this.market.service('orders')
						.verify({
							order_id: order.id
						});
				}
				await this.refresh();
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
			return privateHead('Welcome to Professional · Vue Play');
		}
	};

</script>
