<template>
	<Box
		style="padding:0px;justify-content:center;overflow:visible;transition:background-color .3s linear;backdrop-filter:blur(5px)"
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-transparent) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-transparent) 40%, black)`}}}"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
		class="shadow"
	>
		<Box
			style="padding:0px"
			expand="{`default`:{`xs`:{`light`:true}}}"
			backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
			color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-primary) 40%, white)`}}}"
			reverse="{`default`:{`xs`:{`light`:true}}}"
			height="{`default`:{`xs`:{`light`:`40px`}}}"
		>
			<Box
				style="padding:8.5px 10px;align-items:center"
				color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`,`dark`:`var(--color-primary)`}}}"
			><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-4 h-4"
				>
					<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
				</svg>
				<DarkmodeSwitch style="margin-right:4px;margin-left:4px"></DarkmodeSwitch><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-3 h-3"
				>
					<path
						fill-rule="evenodd"
						d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
						clip-rule="evenodd"
					/>
				</svg>
			</Box>
			<Navigator
				style="padding:0px"
				direction="right"
				breakpointCap="0"
				color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 0%, white)`}}}"
				backgroundColor="{`default`:{`xs`:{`light`:`#00000000`,`dark`:`#00000000`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 80%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 70%, black)`}}}"
				backgroundColorDrop="{`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 80%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 70%, black)`}}}"
			>
				<Link
					style="padding:5px;padding-right:10px;padding-left:10px"
					title="Studio"
					route="https://studio.vueplay.com"
					external="true"
				>
				</Link>
			</Navigator>
		</Box>
		<Box
			style="padding-top:0px;padding-bottom:0px;overflow:visible;width:100%"
			paddingRight="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
			paddingLeft="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`10px`}}}"
		><router-link to="/">
				<Box style="padding:0px;padding-top:12px;padding-bottom:10px;align-items:center">
					<img
						src="@/_templates/arctic/assets/vueplay.webp"
						style="width:37px;height:40px;object-fit:contain;margin-right:15px"
					/><span style="margin:0px;padding:0px;margin-left:-8px">Vue Play</span>
				</Box>
			</router-link>
			<Box
				expand="{`default`:{`xs`:{`light`:true}}}"
				style="justify-content:flex-end;padding:0px;align-items:center;overflow:visible"
			>
				<Navigator
					backgroundColor="{`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					style="height:100%;overflow:visible;transition:none;font-weight:250;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"
					fontWeight="{`current`:{`xs`:{`light`:`600`}}}"
					borderBottomWidth="{`default`:{`xs`:{`light`:`1px`},`md`:{`light`:`4px`}}}"
					borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`},`md`:{`light`:`#00000000`}},`hover`:{`md`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}},`current`:{`md`:{`light`:`var(--color-neutral)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}},`active`:{`md`:{`light`:`var(--color-neutral)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}},`focus`:{`md`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
					borderTopColor="{`default`:{`xs`:{`light`:`#00000000`}}}"
					toggleIcon="{`default`:{`xs`:{`light`:`--image-menu-dark-svg`,`dark`:`--image-menu-light-svg`}}}"
					closeIcon="{`default`:{`xs`:{`dark`:`--image-x-light-svg`}}}"
					justifyToggle="{`default`:{`xs`:{`light`:`center`}}}"
					caretIcon="{`default`:{`xs`:{`dark`:`--image-caret-light-svg`}}}"
					backgroundColorDrop="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 45%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					alignToggle="{`default`:{`xs`:{`light`:`end`}}}"
					gap="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`0px`}}}"
					childrenGap="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingRight="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`10px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`10px`}}}"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					backgroundColorModal="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					borderLeftWidth="{`default`:{`xs`:{`light`:`5px`},`md`:{`light`:`0px`}}}"
					borderLeftColor="{`default`:{`xs`:{`light`:`#00000000`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}},`current`:{`xs`:{`light`:`var(--color-neutral)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}},`active`:{`xs`:{`light`:`var(--color-neutral)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}},`focus`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
					paddingTopModal="35px"
				>
					<slot>
						<Link
							title="Features"
							route="/features/drop/components"
						>
						</Link>
						<Link
							title="Pricing"
							route="/pricing"
						>
						</Link>
						<Link
							title=" Community"
							route="https://github.com/vueplayground/vueplay.com/discussions"
							icon="{`default`:{`xs`:{`light`:`--image-gh-black-svg`,`dark`:`--image-gh-white-svg`}}}"
							iconSize="30px"
							paddingLeft="{`default`:{`md`:{`light`:`10px`}}}"
							paddingRight="{`default`:{`md`:{`light`:`10px`}}}"
							target="_blank"
							external="true"
							gap="{`default`:{`xs`:{`light`:`5px`}}}"
						>
						</Link>
					</slot>
				</Navigator>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import DarkmodeSwitch from '@/components/DarkmodeSwitch.vue';
	import Link from '@vueplayio/link';
	import Navigator from '@vueplayio/navigator';
	import Box from '@vueplayio/box';
	export default {
		components: {
			DarkmodeSwitch: DarkmodeSwitch,
			Link: Link,
			Navigator: Navigator,
			Box: Box
		},
		data: () => ({})
	};

</script>
<style scoped>
	*,
	:global(body) {
		--image-menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--image-x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--image-caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--image-home-svg: url(@/_templates/arctic/assets/home.svg);
		--image-home-light-svg: url(@/_templates/arctic/assets/home-light.svg);
		--image-gh-black-svg: url(@/_templates/arctic/assets/gh-black.svg);
		--image-gh-white-svg: url(@/_templates/arctic/assets/gh-white.svg);
	}

	body * {
		--image-menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--image-x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--image-caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--image-home-svg: url(@/_templates/arctic/assets/home.svg);
		--image-home-light-svg: url(@/_templates/arctic/assets/home-light.svg);
		--image-gh-black-svg: url(@/_templates/arctic/assets/gh-black.svg);
		--image-gh-white-svg: url(@/_templates/arctic/assets/gh-white.svg);
	}

</style>