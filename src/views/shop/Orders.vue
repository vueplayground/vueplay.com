<template>
	<Dashboard
		headerHeight="96"
		style="position:relative"
	>
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position:sticky; top: 0px; width: 100%"></Sidebar>
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
						>Orders</Text>
					</Box>
					<Box
						v-if="!(orders?.data || [])?.length"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
					>
						No orders found.
					</Box>
					<Box
						style="justify-content:center;"
						expand="{`default`:{`xs`:{`light`:true}}}"
						column="{`default`:{`xs`:{`light`:true}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
						marginTop="{`default`:{`xs`:{`light`:`60px`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						v-else-if="(orders?.data || [])?.length"
					>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
							>
								<div></div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="font-weight:600;flex-grow:0;flex-shrink:0"
								fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`13px`}}}"
							>Price</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="font-weight:600;flex-grow:0;flex-shrink:0"
								fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`13px`}}}"
							>Status</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							style="font-weight:600"
							fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}}}"
							borderTopLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							borderBottomLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Orders</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
							v-for="order in orders?.data || []"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>#{{ order.id }} - {{(new Date(order.created_at)).toLocaleDateString()}}: &nbsp;{{ order.title }}</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>${{order.price / 100}}.00</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="flex-grow:0;flex-shrink:0"
								:style="{
									color: order.status === 'completed' ? 'var(--color-primary)' : ''
								}"
							>{{ order.status }}</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import * as VUE from 'vue';
	import Link from '@vueplayio/link';
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/SidebarMarket.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
			Text: Text,
			Dashboard: Dashboard,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header,
			Sidebar: Sidebar
		},
		inject: ['market'],
		data: () => ({
			orders: { data: [] },
			ordersDemo: {
				data: [{
					"id": 71,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 1,
					"title": "Vue Play Professional",
					"description": "Vue Play full access to all features",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 900,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 900,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 900,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 0,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": null,
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1fpwKkavD1tiLTUqyBD8blCtbaWMFZrijo6tL5BK6lWAfuceNhYjYcpKD#fid2cGd2ZndsdXFsamtQa2x0cGBrYHZ2QGtkZ2lgYSc%2FY2RpdmApJ2R1bE5gfCc%2FJ3VuWmlsc2BaMDRJdE1QRkRUdmYwSWozSTx8T0s3Rl09VDxRSVA0UVQzMmpNcF1JclY1b3BpV2ZqSWJvblBNcGNcNT1iYF9BdmpfTm1NUzVNNEBBZjNiV3JwfHRoRmFxNFc1NXFUV3BgXXFtJyknY3dqaFZgd3Ngdyc%2FcXdwYCknaWR8anBxUXx1YCc%2FJ3Zsa2JpYFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-21T09:47:21.000Z",
					"updated_at": "2025-05-21T09:47:38.000Z"
				}, {
					"id": 65,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "completed",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1W4PrmO1OWIipzvrqMALDxFu3vJLVfSHD6OgibeXmMZ2rI2yTrQ3WkF15#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T17:24:17.000Z",
					"updated_at": "2025-05-13T17:24:52.000Z"
				}, {
					"id": 64,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1AzzEK1Lg2h3mDL2zQsnclU7xI4IeiYFyK6MSdDJDpLk6PMHL3dDn9JiE#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T17:22:17.000Z",
					"updated_at": "2025-05-13T17:22:34.000Z"
				}, {
					"id": 63,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1e0Hx5Q9RYFzyvEYcT7Uvpsni7LALzUceEPhKfCIN74UURLuIGs88qKwM#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T17:18:28.000Z",
					"updated_at": "2025-05-13T17:20:29.000Z"
				}, {
					"id": 62,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1f6lAvaSUn2o83fWEm6K3WWCPVanrZbAcSA3nyF4U6laI6kRtNRvG3CWT#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T16:46:56.000Z",
					"updated_at": "2025-05-13T17:11:20.000Z"
				}, {
					"id": 61,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1RnJkh6p1C0tfl0Qbq0AbbWzTZMhcvgvtxue0ZajsTodnaBNSIjIzQC6y#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T16:21:33.000Z",
					"updated_at": "2025-05-13T16:45:51.000Z"
				}, {
					"id": 60,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1HHY5VrpupoaVpeP16MDkzvzNKesibSdarjHR0hWdTSWTcMdEEodJIskC#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T15:23:48.000Z",
					"updated_at": "2025-05-13T15:38:55.000Z"
				}, {
					"id": 59,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1bFRGF9bjnr0UQcBiOEeO97JMuAcmfSWqDW3aVpc3rXyq4qllLFoDoTWX#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T15:21:32.000Z",
					"updated_at": "2025-05-13T15:22:48.000Z"
				}, {
					"id": 58,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "cancelled",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a18NwtY3DM3zNNq3qSOTPEi6TAs7ZTRxOaECyaZ8Xogk1vfIqbL7HwP1L2#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T14:24:50.000Z",
					"updated_at": "2025-05-13T15:17:40.000Z"
				}, {
					"id": 57,
					"provider_order_id": null,
					"customer_id": 14,
					"account_id": 5,
					"title": "Compy",
					"description": "",
					"status": "completed",
					"shipping_status": "no-shipping",
					"currency": "USD",
					"price": 200,
					"discount": 0,
					"shipping_fee": 0,
					"amount": 200,
					"account_currency": "USD",
					"account_exchange_rate": 1,
					"account_amount": 0,
					"account_vat": 0,
					"account_provider_fee": 0,
					"account_passthrough_fee": 0,
					"account_application_fee": 0,
					"account_net": 140,
					"platform_currency": "USD",
					"platform_exchange_rate": 1,
					"platform_amount": 60,
					"platform_vat": 0,
					"platform_provider_fee": 0,
					"platform_passthrough_fee": 0,
					"platform_net": 0,
					"billing_country": "NO",
					"billing_state": "Telemark",
					"billing_street": "Gravavegen 49",
					"billing_city": "Porsgrunn",
					"billing_zip": "3940",
					"shipping_tracking_number": null,
					"shipping_country": "NO",
					"shipping_state": "Telemark",
					"shipping_street": "Gravavegen 49",
					"shipping_city": "Porsgrunn",
					"shipping_zip": "3940",
					"notes": null,
					"next_actions": null,
					"meta": {
						"user_id": 1174
					},
					"redirect_url": "https://checkout.stripe.com/c/pay/cs_live_a1bWEKs01yYImFOz10Ic8rQdPXz9rW8oObt78AH5eu89U31txj9MlgavRc#fidkdWxOYHwnPyd1blppbHNgWjA0SXRNUEZEVHZmMElqM0k8fE9LN0ZdPVQ8UUlQNFFUMzJqTXBdSXJWNW9waVdmaklib25QTXBjXDU9YmBfQXZqX05tTVM1TTRAQWYzYldycHx0aEZhcTRXNTVxVFdwYF1xbScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl",
					"estimated_delivery_at": null,
					"created_at": "2025-05-13T14:17:49.000Z",
					"updated_at": "2025-05-13T15:08:19.000Z"
				}]
			}
		}),
		async mounted() {
			await this.getComponent();
		},
		methods: {
			async getComponent() {
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
<style scoped></style>