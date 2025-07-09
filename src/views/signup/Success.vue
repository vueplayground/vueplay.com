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
						>Success - Vue Play Professional</Text>
					</Box>
					<Box
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
					>Thank you for purchasing Vue Play professional.<br /><br />You may now login to get the full experience of Vue Play!</Box>
					<Link
						title="Open Studio"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`80px`}}}"
						style="position:unset;width:150px"
						external="true"
						target="_blank"
						route="https://studio.vueplay.com"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
					>
					</Link>
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
	}

</style>