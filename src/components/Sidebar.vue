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
					paddingLeft="{`default`:{`xs`:{`light`:`20px`}}}"
					paddingRight="{`default`:{`xs`:{`light`:`20px`}}}"
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
						<Link title="Drop">
						<Link
							title="Components"
							route="/features/drop/components"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Elements"
							route="/features/drop/elements"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Sections"
							route="/features/drop/sections"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Icons"
							route="/features/drop/icons"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link title="Transform">
						<Link
							title="Layout"
							route="/features/transform/layout"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Dimension"
							route="/features/transform/dimension"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Position"
							route="/features/transform/position"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Rotation"
							route="/features/transform/rotation"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Text"
							route="/features/transform/text"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link title="Control">
						<Link
							title="Content"
							route="/features/control/content"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Properties"
							route="/features/control/properties"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Styles"
							route="/features/control/styles"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Tailwind"
							route="/features/control/tailwind"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Attributes"
							route="/features/control/attributes"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Dynamic"
							route="/features/control/dynamic"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Darkmode"
							route="/features/control/darkmode"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Breakpoints"
							route="/features/control/breakpoints"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Keyframes"
							route="/features/control/keyframes"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link title="Templating">
						<Link
							title="Color Palette"
							route="/features/templating/color-palette"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Views"
							route="/features/templating/views"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Components"
							route="/features/templating/components"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Routes"
							route="/features/templating/routes"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link title="Code">
						<Link
							title="General"
							route="/features/code/general"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Real Time"
							route="/features/code/real-time"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Mockup"
							route="/features/code/mockup"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link title="Launch">
						<Link
							title="Deploy"
							route="/features/launch/deploy"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Export"
							route="/features/launch/export"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Publish"
							route="/features/launch/publish"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						</Link>
						<Link
							title="Teams"
							route="/features/teams"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Projects"
							route="/features/projects"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="SEO"
							route="/features/search-engine-optimalization"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Git"
							route="/features/git"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
						<Link
							title="Market"
							route="/features/market"
							marginTop="{`default`:{`md`:{`light`:`40`}}}"
						>
						</Link>
					</slot>
				</Navigator>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Link from '@vueplayio/link';
	import Navigator from '@vueplayio/navigator';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
			Navigator: Navigator,
			Box: Box
		},
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