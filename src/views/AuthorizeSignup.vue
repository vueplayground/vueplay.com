<template>
	<Page>
		<SignIn title="Get Vue Play Professional" text="Log in first, then check out. $9 a month." to="/signup/checkout"></SignIn>
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
		inject: ['account'],
		mounted() {
			if (this.account) this.$router.push('/signup/checkout');
		},
		head() {
			return privateHead('Sign up · Vue Play', 'Sign up for Vue Play Professional with your GitHub, Google or Facebook account, then check out securely.');
		}
	};

</script>
