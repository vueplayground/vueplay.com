<template>
	<div class="vp-panel vp-panel--soft vp-signed-out">
		<h2>{{ title }}</h2>
		<p>{{ text }}</p>
		<router-link class="vp-signed-out__button" to="/login">Log in</router-link>
	</div>
</template>
<script>
	// What a private page shows to someone who is not signed in
	export default {
		props: {
			title: { type: String, default: 'Log in to see this page' },
			text: { type: String, default: 'This page belongs to your Vue Play account.' }
		}
	};

</script>
<style>
	.vp-signed-out {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		max-width: 32rem;
		margin: 0 auto;
		text-align: center;
	}

	.vp-signed-out h2 {
		margin: 0;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.vp-signed-out p {
		margin: 0 0 0.5rem;
		color: var(--vp-muted);
	}

	.vp-signed-out__button {
		padding: 0.6rem 1.4rem;
		border-radius: 10px;
		background: var(--vp-primary);
		color: var(--vp-primary-contrast);
		font-weight: 600;
		text-decoration: none;
	}

</style>
