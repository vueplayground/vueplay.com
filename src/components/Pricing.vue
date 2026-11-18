<template>
	<Columns class="vp-plans" :columns="2" gap="24px" min="280px">
		<Price
			name="Hobby"
			text="The perfect plan if you're just getting started. Stay on it as long as you like."
			price="Free"
			period="forever"
			:features="hobby"
			button="Get started today"
			:href="account ? '/profile' : '/login'"
			level="h2"
		></Price>
		<Price
			name="Professional"
			text="For builders who publish for real: your own domains, GitHub, teams and as many applications as you need."
			price="$9"
			period="/ month"
			:features="professional"
			button="Get started today"
			:href="account ? '/signup/checkout' : '/authorize-signup'"
			:featured="true"
			badge="Most popular"
			level="h2"
		></Price>
	</Columns>
</template>
<script>
	import Columns from '@vueplayio/columns';
	import Price from '@vueplayio/price';
	// The two plans side by side. What each says it has is what the Studio gives it (the Studio's own
	// `premium` checks: unlimited applications, GitHub, custom domains, teams and projects).
	export default {
		components: {
			Columns,
			Price
		},
		inject: ['account'],
		data: () => ({
			hobby: [
				{ text: 'The whole visual editor, with every view' },
				{ text: '17 templates and the component library' },
				{ text: 'The free AI chat in the editor' },
				{ text: 'Git in the editor: commits and branches' },
				{ text: 'Up to 3 applications' },
				{ text: 'One click publish to a vueplay.com address' },
				{ text: 'Sell components and templates in the Market' }
			],
			professional: [
				{ text: 'Everything in Hobby' },
				{ text: 'Unlimited applications' },
				{ text: 'Push to and pull from GitHub' },
				{ text: 'Custom domains' },
				{ text: 'Create teams and projects' },
				{ text: 'Prioritized email support' }
			]
		})
	};

</script>
<style>
	.vp-plans {
		max-width: 920px;
		margin: 0 auto;
	}

	.vp-plans .vp-price {
		background: var(--vp-background);
	}

</style>
