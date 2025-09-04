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
			backgroundColor="{`default`:{`xs`:{`light`:`#228a7fff`,`dark`:`#186666ff`}}}"
			color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-primary) 40%, white)`}}}"
			reverse="{`default`:{`xs`:{`light`:true}}}"
			height="{`default`:{`xs`:{`light`:`40px`}}}"
			backgroundImage="{`default`:{`xs`:{`light`:`linear-gradient(45deg, var(--color-primary), transparent)`,`dark`:`linear-gradient(45deg, color-mix(in oklch, var(--color-primary) 80%, black), transparent)`}}}"
		>
			<Box
				style="padding:8.5px 20px 8.5px 10px;align-items:center"
				color="{`default`:{`xs`:{`light`:`white`}}}"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-4 h-4"
				>
					<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
				</svg>
				<DarkmodeSwitch style="margin-right:4px;margin-left:4px"></DarkmodeSwitch>
				<svg
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
				backgroundColor="{`default`:{`xs`:{`light`:`#00000000`,`dark`:`#00000000`}},`hover`:{`xs`:{`light`:`#ffffff33`,`dark`:`#00000033`}}}"
				backgroundColorDrop="{`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 80%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 70%, black)`}}}"
				borderRadius="{`default`:{`xs`:{`light`:`25px`}}}"
			>
				<Link
					v-if="!account?.user"
					style="padding:5px;padding-right:10px;padding-left:10px"
					title="Login"
					route="/login"
				>
				</Link>
				<Link
					v-else-if="account?.user"
					style="padding:5px;padding-right:10px;padding-left:10px"
					title="Logout"
					route="/logout"
				>
				</Link>
				<Link
					v-if="account?.user"
					style="padding:5px;padding-right:10px;padding-left:10px"
					title="Tokens"
					route="/tokens"
				>
				</Link>
				<Link
					style="padding:5px;padding-right:10px;padding-left:10px"
					title="Studio"
					route="https://studio.vueplay.com"
					external="true"
					target="_blank"
					fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
					iconReverse="true"
					gap="{`default`:{`xs`:{`light`:`5px`}}}"
					icon="{`default`:{`xs`:{`light`:`--image-rocket-white-svg`}}}"
					iconSize="18px"
				>
				</Link>
			</Navigator>
			<div style="display:inline-flex;flex-grow:1">
				<div
					style="aspect-ratio:1/1;background-color:color-mix(in oklch, var(--color-primary) 60%, black);background-size:cover;background-position:center center;border-radius:50%;height:calc(100% - 13px);margin-top:6px;margin-left:23px;cursor:pointer;border:1px solid color-mix(in oklch, var(--color-primary) 60%, black);transition:.2s linear all"
					:style="{ backgroundImage: account?.user?.picture ? 'url(' + account.user.picture + ')' : undefined }"
					@click="$router.push('/profile')"
					v-if="account"
					title="Profile"
					class="avatar"
				></div>
			</div>
		</Box>
		<Box
			style="padding-top:0px;padding-bottom:0px;overflow:visible;width:100%"
			paddingRight="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`0px`}}}"
			paddingLeft="{`default`:{`xs`:{`light`:`17px`}}}"
		><router-link
				to="/"
				class="logo"
			>
				<Box style="padding:0px;padding-top:12px;padding-bottom:10px;align-items:center">
					<img
						src="@/_templates/arctic/assets/vueplay.webp"
						style="width:37px;height:40px;object-fit:contain;margin-right:15px"
					/>
					<span style="margin:0px;padding:0px;margin-left:-8px">Vue Play</span>
				</Box>
			</router-link>
			<Box
				style="align-items:center;overflow:visible;justify-content:flex-end"
				paddingRight="{`default`:{`xs`:{`light`:`5px`},`md`:{`light`:`0px`}}}"
				paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
				paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
				expand="{`default`:{`xs`:{`light`:true}}}"
			>
				<Box
					style="align-self:center;position:absolute;right:70px;height:62px;padding:0px"
					display="{`default`:{`md`:{`light`:`none`}}}"
				>
					<button
						@click="$router.push('/market')"
						style="width:100%;padding:0px 15px;"
					>
						<svg
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
							style="width:20px;float:left;margin-right:10px"
						>
							<path
								fill="currentColor"
								d="M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128s-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0z"
							/>
						</svg>
						Market
					</button>
				</Box>
				<Navigator
					backgroundColor="{`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}},`current`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 50%, black)`}},`active`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					style="height:100%;overflow:visible;transition:none;font-weight:250;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"
					fontWeight="{`current`:{`xs`:{`light`:`600`}}}"
					borderBottomWidth="{`default`:{`xs`:{`light`:`1px`},`md`:{`light`:`4px`}}}"
					borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`},`md`:{`light`:`#00000000`}}}"
					borderTopColor="{`default`:{`xs`:{`light`:`#00000000`}}}"
					toggleIcon="{`default`:{`xs`:{`light`:`--image-menu-dark-svg`,`dark`:`--image-menu-light-svg`}}}"
					closeIcon="{`default`:{`xs`:{`light`:`--image-x-dark-svg`,`dark`:`--image-x-light-svg`}}}"
					justifyToggle="{`default`:{`xs`:{`light`:`center`}}}"
					caretIcon="{`default`:{`xs`:{`light`:`--image-caret-dark-svg`,`dark`:`--image-caret-light-svg`}}}"
					backgroundColorDrop="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 45%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					alignToggle="{`default`:{`xs`:{`light`:`end`}}}"
					gap="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`5px`}}}"
					childrenGap="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingRight="{`default`:{`xs`:{`light`:`20px`},`md`:{`light`:`20px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`10px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`10px`},`md`:{`light`:`13px`}}}"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					backgroundColorModal="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
					borderLeftWidth="{`default`:{`xs`:{`light`:`5px`},`md`:{`light`:`0px`}}}"
					borderLeftColor="{`default`:{`xs`:{`light`:`#00000000`}}}"
					paddingTopModal="35px"
					translateXToggle="-7px"
					translateYToggle="5px"
					borderRadius="{`default`:{`xs`:{`light`:`25px`}}}"
					marginTop="{`default`:{`xs`:{`light`:`4px`}}}"
					marginBottom="{`default`:{`xs`:{`light`:`4px`}}}"
				>
					<slot>
						<Link
							title="Market"
							route="/market"
							icon="{`default`:{`xs`:{`light`:`--image-goods-black-svg`,`dark`:`--image-goods-white-svg`}}}"
						>
						</Link>
						<Link
							title="Features"
							route="/features"
							icon="{`default`:{`xs`:{`light`:`--image-star-black-svg`,`dark`:`--image-star-white-svg`}}}"
						>
						</Link>
						<Link
							title="Pricing"
							route="/pricing"
							icon="{`default`:{`xs`:{`light`:`--image-label-black-svg`,`dark`:`--image-label-white-svg`}}}"
						>
						</Link>
						<Link
							title="Github"
							route="https://github.com/vueplayground/vueplay.com/discussions/categories/announcements"
							icon="{`default`:{`xs`:{`light`:`--image-github-black-svg`,`dark`:`--image-github-white-svg`}}}"
							paddingLeft="{`default`:{`md`:{`light`:`10px`}}}"
							paddingRight="{`default`:{`md`:{`light`:`22px`}}}"
							target="_blank"
							external="true"
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
		inject: ['account'],
		data: () => ({})
	};

</script>
<style scoped>
	.logo:hover {
		transform: scale(97%);
		transition: linear all .2s;
	}

	.avatar:hover {
		border: 1px solid black !important;
		transform: scale(95%);
	}

	*,
	:global(body) {
		--image-menu-dark-svg: url(@/_templates/arctic/assets/menu-dark.svg);
		--image-menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--image-x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--image-caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--image-home-svg: url(@/_templates/arctic/assets/home.svg);
		--image-home-light-svg: url(@/_templates/arctic/assets/home-light.svg);
		--image-gh-black-svg: url(@/_templates/arctic/assets/gh-black.svg);
		--image-gh-white-svg: url(@/_templates/arctic/assets/gh-white.svg);
	}

	body * {
		--image-menu-dark-svg: url(@/_templates/arctic/assets/menu-dark.svg);
		--image-menu-light-svg: url(@/_templates/arctic/assets/menu-light.svg);
		--image-x-light-svg: url(@/_templates/arctic/assets/x-light.svg);
		--image-caret-light-svg: url(@/_templates/arctic/assets/caret-light.svg);
		--image-home-svg: url(@/_templates/arctic/assets/home.svg);
		--image-home-light-svg: url(@/_templates/arctic/assets/home-light.svg);
		--image-gh-black-svg: url(@/_templates/arctic/assets/gh-black.svg);
		--image-gh-white-svg: url(@/_templates/arctic/assets/gh-white.svg);
	}

</style>