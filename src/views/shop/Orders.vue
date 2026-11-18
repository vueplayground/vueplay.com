<template>
	<Page>
		<PageIntro eyebrow="Account" title="Orders" text="What you have ordered in Vue Play, and where each order stands.">
			<MarketNav></MarketNav>
		</PageIntro>
		<Section space="small" gap="16px">
			<SignedOut v-if="!account?.user" title="Log in to see your orders" text="Your orders belong to your Vue Play account."></SignedOut>
			<div v-else-if="!(orders?.data || []).length" class="vp-panel vp-panel--soft vp-orders__empty">No orders found.</div>
			<div v-else class="vp-orders" role="region" aria-label="Your orders" tabindex="0">
				<table>
					<thead>
						<tr>
							<th scope="col">Order</th>
							<th scope="col">Date</th>
							<th scope="col">Price</th>
							<th scope="col">Status</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="order in orders.data" :key="order.id">
							<td><b>#{{ order.id }}</b> {{ order.title }}</td>
							<td>{{ (new Date(order.created_at)).toLocaleDateString() }}</td>
							<td>${{ (order.price / 100).toFixed(2) }}</td>
							<td><span class="vp-chip" :class="{ 'vp-chip--brand': order.status === 'completed' }">{{ order.status }}</span></td>
						</tr>
					</tbody>
				</table>
			</div>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import MarketNav from '@/components/SidebarMarket.vue';
	import SignedOut from '@/components/SignedOut.vue';
	import Section from '@vueplayio/section';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			PageIntro,
			MarketNav,
			SignedOut,
			Section
		},
		inject: ['market', 'account'],
		data: () => ({
			orders: { data: [] },
		}),
		async mounted() {
			await this.getComponent();
		},
		watch: {
			async account(value) {
				if (value) await this.getComponent();
			}
		},
		methods: {
			async getComponent() {
				if (!this.account) return;
				this.orders = await this.market.service('orders')
					.find({
						query: {
							$sort: {
								created_at: -1 // Descending order
							},
							$limit: 1000
						}
					});
				console.log('orders', this.orders);
			}
		},
		head() {
			return privateHead('Orders · Vue Play');
		}
	};

</script>
<style>
	.vp-orders {
		overflow-x: auto;
		border: 1px solid var(--vp-border);
		border-radius: 16px;
	}

	.vp-orders table {
		width: 100%;
		min-width: 34rem;
		border-collapse: collapse;
		font-size: 0.9375rem;
	}

	.vp-orders th,
	.vp-orders td {
		padding: 0.8rem 1rem;
		border-bottom: 1px solid var(--vp-border);
		text-align: left;
	}

	.vp-orders thead th {
		background: var(--vp-surface);
		color: var(--vp-muted);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.vp-orders tbody tr:last-child td {
		border-bottom: 0;
	}

	.vp-orders__empty {
		text-align: center;
		color: var(--vp-muted);
	}

</style>
