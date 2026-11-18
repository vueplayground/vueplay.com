<template>
	<Page>
		<SignIn title="Log in to buy" text="Log in first, then you can check out." :to="checkoutPath"></SignIn>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import SignIn from '@/components/SignIn.vue';
	import { privateHead } from '@/components/head.js';
	export default {
		components: {
			Page,
			SignIn
		},
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
		inject: ['account'],
		computed: {
			checkoutPath() {
				return `/market/${this.category}/${this.slug}/${this.version ? this.version + '/' : ''}checkout`;
			}
		},
		mounted() {
			if (this.account) this.$router.push(this.checkoutPath);
		},
		head() {
			return privateHead('Log in to buy · Vue Play', 'Log in to Vue Play with your GitHub, Google or Facebook account to buy from the Vue Play Market.');
		}
	};

</script>
