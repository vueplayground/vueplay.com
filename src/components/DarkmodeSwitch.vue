<template>
	<button
		style="position: relative; opacity: .8; transition: all .3s linear; width: 34px; height: 17px; box-sizing: border-box; border-radius: 50px; overflow: hidden;"
		@click.stop="toggle"
		:class="{
			dark: storedTheme === 'dark',
			light: storedTheme === 'light'
		}"
		:style="{ backgroundColor }"
	>
		<div
			:style="{ backgroundColor: backgroundColorSwitch, left }"
			style="position: absolute; width: calc((100% / 3) + 4px); aspect-ratio: 1/1; rounded: 50%; box-sizing: border-box; top: 1px; border-radius: 50%; transition: all .3s linear;"></div>
	</button> </template>
<script>
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
			backgroundColor() {
				if (this.theme === 'dark') return 'rgba(0, 0, 0, 0.8)'
				return 'rgba(255, 255, 255, 0.8)'
			},
			backgroundColorSwitch() {
				if (this.theme === 'dark') return 'rgba(255, 255, 255, 0.7)'
				return 'rgba(0, 0, 0, 0.5)'
			},
			left() {
				if (this.storedTheme === 'dark') return 'calc(100% - calc(100% / 3) - 5px)'
				if (this.storedTheme === 'light') return '1px'
				return 'calc(50% - (100% / 3 / 2) - 2px)'
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
			}
		}
	};

</script>
<style scoped>
	button:hover {
		opacity: 1!important;
	}
</style>