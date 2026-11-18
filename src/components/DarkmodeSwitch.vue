<template>
	<button
		type="button"
		class="vp-theme-switch"
		data-allow-mismatch=""
		:title="label"
		:aria-label="label"
		@click.stop="toggle"
	>
		<svg v-if="storedTheme === 'light'" viewBox="0 0 24 24" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
		</svg>
		<svg v-else-if="storedTheme === 'dark'" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
		</svg>
		<svg v-else viewBox="0 0 24 24" aria-hidden="true">
			<rect x="3" y="4" width="18" height="12" rx="2" />
			<path d="M8 20h8M12 16v4" />
		</svg>
		<span class="vp-theme-switch__text">{{ text }}</span>
	</button>
</template>
<script>
	// Light, the device's own choice, or dark: one press goes to the next.
	export default {
		data: () => ({
			storedTheme: typeof global !== 'undefined' ? global?.theme : null
		}),
		mounted() {
			this.storedTheme = localStorage.getItem('theme');
		},
		inject: ['theme', 'updateTheme'],
		watch: {
			theme() {
				this.storedTheme = localStorage.getItem('theme');
			}
		},
		computed: {
			text() {
				if (this.storedTheme === 'dark') return 'Dark';
				if (this.storedTheme === 'light') return 'Light';
				return 'As the device';
			},
			label() {
				const next = this.storedTheme === 'dark' ? 'light' : this.storedTheme === 'light' ? 'as the device' : 'dark';
				return `Theme: ${this.text.toLowerCase()}. Switch to ${next}`;
			}
		},
		methods: {
			toggle() {
				if (this.storedTheme === 'dark') {
					this.updateTheme('light');
				} else if (this.storedTheme === 'light') {
					this.updateTheme(null);
				} else {
					this.updateTheme('dark');
				}
				this.storedTheme = localStorage.getItem('theme');
			}
		}
	};

</script>
<style>
	.vp-theme-switch {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 2.375rem;
		height: 2.375rem;
		padding: 0;
		border: 0;
		border-radius: 999px;
		background: none;
		color: color-mix(in oklch, currentColor 74%, transparent);
		cursor: pointer;
		transition: background-color 140ms ease, color 140ms ease;
	}

	.vp-theme-switch:hover {
		background: color-mix(in oklch, currentColor 8%, transparent);
		color: inherit;
	}

	.vp-theme-switch:focus-visible {
		outline: 2px solid var(--vp-primary, #10a37c);
		outline-offset: 2px;
	}

	.vp-theme-switch svg {
		flex: none;
		width: 1.15rem;
		height: 1.15rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.vp-theme-switch__text {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}

</style>
