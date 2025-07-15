<template>
	<Box
		style="padding:0px;justify-content:center;overflow:visible;transition:background-color .3s linear;backdrop-filter:blur(5px)"
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-transparent) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-transparent) 40%, black)`}}}"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
		expand="{`default`:{`2xl`:{`light`:true}}}"
	>
		<Box
			style="padding-top:0px;padding-bottom:0px;overflow:visible;width:100%;padding-right:0;padding-left:0"
			paddingRight="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`40px`}}}"
			paddingLeft="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`40px`}}}"
			column="{`default`:{`xs`:{`light`:true}}}"
		>
			<Box
				expand="{`default`:{`xs`:{`light`:true}}}"
				style="justify-content:flex-start;align-items:center;overflow:visible"
				paddingTop="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
				paddingRight="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
				paddingLeft="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
			>
				<Navigator
					backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-transparent) 25%, black)`},`md`:{`light`:`#00000000`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`},`sm`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					style="padding:0px;height:100%;overflow:visible;transition:none;font-weight:250"
					fontWeight="{`current`:{`xs`:{`light`:`600`}}}"
					toggleIcon="{`default`:{`xs`:{`light`:`--image-submenu-dark-svg`,`dark`:`--image-submenu-light-svg`}}}"
					closeIcon="{`default`:{`xs`:{`light`:`--image-x-dark-svg`,`dark`:`--x-light-svg`}}}"
					justifyToggle="{`default`:{`xs`:{`light`:`center`}}}"
					caretIcon="{`default`:{`xs`:{`light`:`--image-caret-dark-svg`,`dark`:`--caret-light-svg`}}}"
					backgroundColorDrop="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 25%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 35%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					alignToggle="{`default`:{`xs`:{`light`:`start`}}}"
					gap="{`default`:{`xs`:{`light`:`0px`}}}"
					childrenGap="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingRight="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`15px`}}}"
					orientation="Column"
					paddingBottom="{`default`:{`xs`:{`light`:`15px`}}}"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					borderLeftWidth="{`default`:{`xs`:{`light`:`5px`}}}"
					borderLeftColor="{`default`:{`xs`:{`light`:`#00000000`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}},`current`:{`xs`:{`light`:`var(--color-primary)`}},`active`:{`xs`:{`light`:`var(--color-primary)`}},`focus`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
					backgroundColorModal="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 25%, black)`}}}"
					paddingTopModal="96px"
					translateXToggle="calc(-100vw + 65px)"
					toggleSize="30px"
					borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					borderBottomWidth="{`default`:{`xs`:{`light`:`1px`}}}"
					caretSize="14px"
					verticalLeftIndent="15px"
				>
					<slot>
						<Title
							type="{`default`:{`xs`:{`light`:`h3`}}}"
							fontWeight="{`default`:{`xs`:{`light`:`700`}}}"
							padding="{`default`:{`xs`:{`light`:`25px`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, white)`}}}"
						>Market</Title>
						<Link
							title="All"
							route="/market/all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Components"
							route="/market/components"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Templates"
							route="/market/templates"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Priced"
							route="/market/priced"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Personal"
							v-if="account"
						>
						<Link
							title="All"
							route="/market/me"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Purchases"
							route="/market/purchases"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Private"
							route="/market/private"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Published"
							route="/market/published"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="In review"
							route="/market/in-review"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Hidden"
							route="/market/hidden"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Archived"
							route="/market/archived"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Orders"
							route="/market/orders"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link
							title="Admin"
							v-if="account?.authentication?.payload?.global_roles?.includes('admin')"
						>
						<Link
							title="Published"
							route="/market/published-all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="In review"
							route="/market/in-review-all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Private"
							route="/market/private-all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Hidden"
							route="/market/hidden-all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Archived"
							route="/market/archived-all"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
					</slot>
				</Navigator>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Title from '@vueplayio/title';
	import Link from '@vueplayio/link';
	import Navigator from '@vueplayio/navigator';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Title: Title,
			Link: Link,
			Navigator: Navigator,
			Box: Box
		},
		inject: ['account'],
		data: () => ({})
	};

</script>
<style scoped>
	* {
		--menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--logo-svg: url(@/_templates/arctic/assets/logo.svg);
	}

	:global(body) {
		--menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--logo-svg: url(@/_templates/arctic/assets/logo.svg);
	}

</style>