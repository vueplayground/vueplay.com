<template>
	<Page>
		<SignIn title="Log in to Vue Play" text="One account for the Studio, the Market and this site." to="/profile"></SignIn>
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
		head() {
			return privateHead('Log in · Vue Play', 'Log in to Vue Play with your GitHub, Google or Facebook account, quickly and safely, to reach the Studio and the Market.');
		}
	};

</script>
