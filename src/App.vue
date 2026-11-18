<template>
	<router-view :class="{ dark }" />
</template>
<script>
	// The site's look lives here once, light and dark (the same values the front page says for itself):
	// every page and the shared header and footer read these variables.
	// The theme is light, dark, or (none chosen) what the device prefers.
	export default {
		inject: ['theme'],
		data: () => ({
			systemDark: false
		}),
		computed: {
			dark() {
				return this.theme === 'dark' || (!this.theme && this.systemDark);
			}
		},
		watch: {
			dark: {
				handler(value) {
					if (typeof document === 'undefined') return;
					document.documentElement.classList.toggle('dark', value);
					document.documentElement.style.colorScheme = value ? 'dark' : 'light';
				}
			}
		},
		mounted() {
			const media = window.matchMedia?.('(prefers-color-scheme: dark)');
			this.systemDark = !!media?.matches;
			media?.addEventListener?.('change', event => {
				this.systemDark = event.matches;
			});
			document.documentElement.classList.toggle('dark', this.dark);
			document.documentElement.style.colorScheme = this.dark ? 'dark' : 'light';
		},
		head() {
			return {
				htmlAttrs: {
					lang: 'en'
				},
				link: [{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				}]
			};
		}
	};

</script>
<style>
	:root {
		--vp-primary: #10a37c;
		--vp-primary-contrast: #ffffff;
		--vp-background: #ffffff;
		--vp-text: #0d1f1a;
		--vp-muted: #55666f;
		--vp-surface: #f2f7f5;
		--vp-border: #dfe8e5;
		--vp-radius: 12px;
		--vp-width: 1180px;
		--vp-font-heading: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}

	.dark {
		--vp-primary: #2fd3a3;
		--vp-primary-contrast: #04140f;
		--vp-background: #0b1110;
		--vp-text: #eef4f2;
		--vp-muted: #9fb0ab;
		--vp-surface: #121b19;
		--vp-border: #24332f;
	}

	html,
	body {
		background: var(--vp-background);
	}

</style>
