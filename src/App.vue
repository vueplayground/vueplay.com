<template>
	<router-view :class="{ dark: theme === 'dark' }" />
</template>
<script>
	export default {
		inject: ['theme'],
		data: () => ({}),
		head() {
			return {
				link: [{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}]
			};
		}
	};

</script>