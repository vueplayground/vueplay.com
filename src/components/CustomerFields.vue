<template>
	<div class="vp-form vp-form--two">
		<label class="vp-field"><span>First name</span><input v-model="customer.first_name" autocomplete="given-name" /></label>
		<label class="vp-field"><span>Middle name</span><input v-model="customer.middle_name" autocomplete="additional-name" /></label>
		<label class="vp-field"><span>Last name</span><input v-model="customer.last_name" autocomplete="family-name" /></label>
		<label class="vp-field"><span>Email</span><input v-model="customer.email" type="email" autocomplete="email" /></label>
		<label class="vp-field"><span>Phone</span><input v-model="customer.phone" type="tel" autocomplete="tel" /></label>
		<label class="vp-field"><span>Billing country</span>
			<select v-model="customer.billing_country" autocomplete="country">
				<option v-for="key in Object.keys(countries)" :key="key" :value="key">{{ countries[key] }}</option>
			</select>
		</label>
		<label class="vp-field"><span>Billing state</span><input v-model="customer.billing_state" autocomplete="address-level1" /></label>
		<label class="vp-field"><span>Billing street</span><input v-model="customer.billing_street" autocomplete="street-address" /></label>
		<label class="vp-field"><span>Billing city</span><input v-model="customer.billing_city" autocomplete="address-level2" /></label>
		<label class="vp-field"><span>Billing zip</span><input v-model="customer.billing_zip" autocomplete="postal-code" /></label>
	</div>
</template>
<script>
	import cc from 'iso-3166-1-alpha-2';
	// Who the invoice is for (the payment itself is made on Stripe's page after this)
	export default {
		props: {
			customer: { type: Object, required: true }
		},
		data: () => ({
			countries: cc.getData()
		})
	};

</script>
