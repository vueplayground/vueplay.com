<template>
	<button
		style="position: relative; opacity: .8; transition: all .3s linear; width: 34px; height: 17px; background-color: rgba(255, 255, 255, 0.8); box-sizing: border-box; border-radius: 50px; overflow: hidden;"
		@click.stop="toggle"
		:class="{
			dark: storedTheme === 'dark',
			light: storedTheme === 'light'
		}"
	>
		<div style="position: absolute; width: calc((100% / 3) + 4px); aspect-ratio: 1/1; rounded: 50%; background-color: rgba(0, 0, 0, 0.5); box-sizing: border-box; top: 1px;
 left: calc(50% - (100% / 3 / 2) - 2px); border-radius: 50%; transition: all .3s linear;"></div>
	</button> </template>
<script>
	export default {
		data: () => ({
			storedTheme: null
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
		methods: {
			toggle() {
				if (this.theme === 'dark') {
					this.updateTheme('light');
				} else if (this.theme === 'light') {
					this.updateTheme(null);
				} else {
					this.updateTheme('dark');
				}
			}
		}
	};

</script>
<style scoped>
	button:hover {
		opacity: 1!important;
	}
	.dark button,
	button.dark {
		background-color: rgba(0, 0, 0, 0.8) !important;
	}

	.dark button>div,
	button.dark>div {
		background-color: rgba(255, 255, 255, 0.7) !important;
		left: calc(100% - calc(100% / 3) - 5px) !important;
	}

	.light button>div,
	button.light>div {
		left: 1px !important;
	}

</style>