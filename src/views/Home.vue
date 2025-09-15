<template>
	<Home>
		<template #header>
			<Header style="position: sticky; top: 0px;z-index:1"></Header>
		</template>
		<template #default>
			<Box
				style="justify-content:center;padding:0px;min-height:calc(100vh - 60px)"
				expand="true"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					column="{`default`:{`xs`:{`light`:true}}}"
					paddingTop="{`default`:{`xs`:{`light`:`100px`}}}"
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
					overflow="{`default`:{`xs`:{`light`:`visible`}}}"
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`96px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
					>Build Visually,
						<br />Create Anything
					</Title>
					<Title
						style="text-align:center"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Design, develop & launch websites, apps, components, and more —
						<br />rediscover the joy of building, from syntax to creativity.
					</Title>
					<Link
						title="Get Started"
						backgroundColor="{`hover`:{`xs`:{`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 15px`},`lg`:{`light`:`15px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`50px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`80px`}}}"
						style="background-image:linear-gradient(60deg, var(--color-primary), #4e6d8aff);transition:.15s linear all"
						external="true"
						target="_blank"
						route="https://studio.vueplay.com"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						width="{`default`:{`xs`:{`light`:`200px`},`lg`:{`light`:`250px`}}}"
						fontSize="{`default`:{`xs`:{`light`:`22px`},`lg`:{`light`:`26px`}}}"
						class="shadow-xl"
						icon="{`default`:{`xs`:{`light`:`--image-play-svg`}}}"
						iconReverse="true"
						iconSize="20px"
						filter="{`hover`:{`xs`:{`light`:`contrast(115%)`}}}"
						border="{`default`:{`xs`:{`light`:`4px solid`}}}"
						borderColor="{`default`:{`xs`:{`light`:`#1e3b4dff`,`dark`:`#021624ff`}},`hover`:{`xs`:{`light`:`#031b2bff`,`dark`:`#1e3b4dff`}}}"
						transform="{`default`:{`xs`:{`light`:`scale(1)`}},`hover`:{`xs`:{`light`:`scale(.97)`}}}"
					>
					</Link>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						overflow="{`default`:{`xs`:{`light`:`visible`}}}"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`30px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							style="max-width:350px;background-image:var(--image-brushed-alum-png);transition:all .2s linear"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							borderColor="{`default`:{`xs`:{`light`:`#1e3b4dff`,`dark`:`#021624ff`}}}"
							borderWidth="{`default`:{`xs`:{`light`:`4px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`#c940ffff`}}}"
							class="shadow-xl"
							transform="{`default`:{`xs`:{`light`:`scale(1)`}},`hover`:{`xs`:{`light`:`scale(1.05)`}}}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-10 h-10"
							>
								<path
									fill-rule="evenodd"
									d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
									clip-rule="evenodd"
								/>
							</svg>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								style="color:#f8d2fcff;text-shadow:1px 2px 1px #171616ff"
							>Design</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Build stunning UIs with drag & drop, style controls, and precision.</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`30px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							style="max-width:350px;background-image:var(--image-brushed-alum-png);transition:all .2s linear"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							borderColor="{`default`:{`xs`:{`light`:`#1e3b4dff`,`dark`:`#021624ff`}}}"
							borderWidth="{`default`:{`xs`:{`light`:`4px`}}}"
							class="shadow-xl"
							transform="{`default`:{`xs`:{`light`:`scale(1)`}},`hover`:{`xs`:{`light`:`scale(1.05)`}}}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-10 h-10 -ml-1"
							>
								<path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
							</svg>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								style="color:#e1faf4ff;text-shadow:1px 2px 1px #171616ff"
							>Develop</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Develop with ease — from props to logic to layout.</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`30px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`#f2340fff`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							style="max-width:350px;background-image:var(--image-brushed-alum-png);transition:all .2s linear"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							borderColor="{`default`:{`xs`:{`light`:`#1e3b4dff`,`dark`:`#021624ff`}}}"
							borderWidth="{`default`:{`xs`:{`light`:`4px`}}}"
							class="shadow-xl"
							transform="{`default`:{`xs`:{`light`:`scale(1)`}},`hover`:{`xs`:{`light`:`scale(1.05)`}}}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-10 h-10"
							>
								<path
									fill-rule="evenodd"
									d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
									clip-rule="evenodd"
								/>
								<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
							</svg>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								style="color:#fceae6ff;text-shadow:1px 2px 1px #171616ff"
							>Launch</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Launch with a click — preview, build, and go live.</Text>
						</Box>
					</Box>
					<Box
						marginTop="{`default`:{`xs`:{`light`:`80px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`100px`}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
					>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							gap="{`default`:{`xs`:{`light`:`8px`}}}"
							marginBottom="{`default`:{`xs`:{`light`:`15px`}}}"
							marginLeft="{`default`:{`xs`:{`light`:`1px`}}}"
						>
							<Box
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`50%`}}}"
								padding="{`default`:{`xs`:{`light`:`5px`}}}"
								border="{`default`:{`xs`:{`light`:`1px solid`}}}"
								borderColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							>
								<div></div>
							</Box>
							<Box
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`50%`}}}"
								padding="{`default`:{`xs`:{`light`:`5px`}}}"
								border="{`default`:{`xs`:{`light`:`1px solid`}}}"
								borderColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							>
								<div></div>
							</Box>
							<Box
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`50%`}}}"
								padding="{`default`:{`xs`:{`light`:`5px`}}}"
								border="{`default`:{`xs`:{`light`:`1px solid`}}}"
								borderColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							>
								<div></div>
							</Box>
						</Box>
						<img
							src="@/assets/screenshot.webp"
							style="border-radius:3px"
						/>
					</Box>
					<Box
						gap="{`default`:{`xs`:{`light`:`50px`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							:title="usersCount + ' registered users'"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>{{formatCount(usersCount)}}</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Registered users</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							:title="websitesCount + ' websites'"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>{{formatCount(websitesCount)}}</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Websites built</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							:title="componentsCount + ' components'"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>{{formatCount(componentsCount)}}</Title>
							<Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Components crafted</Text>
						</Box>
					</Box>
					<Box
						gap="{`default`:{`xs`:{`light`:`50px`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<a
								class="bg-slate-50 hover:bg-slate-100 rounded-lg"
								style="width:250px;display:block;border:1px;border-style:solid;border-color:#333;color:#333;margin-left:auto;margin-right:auto"
								href="https://github.com/marketplace/vue-play-studio"
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 24 24"
									style="float:left;padding:5px 0px 5px 12px"
									class="mt-1"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								<span style="padding-top:13px;display:inline-block;font-weight:bold;padding-bottom:12px;margin-left:20px">
									GitHub marketplace
								</span>
							</a>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<a
								href="https://www.producthunt.com/products/vueplay?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-vue&#0045;play&#0045;2"
								target="_blank"
							>
								<img
									src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=416946&theme=light&t=1752143504408"
									alt="Vue&#0032;Play - Create&#0032;Vue&#0032;Applications&#0032;using&#0032;a&#0032;Visual&#0032;Designer | Product Hunt"
									style="width: 250px; height: 54px;;margin:auto"
									width="250"
									height="54"
								/>
							</a>
						</Box>
					</Box>
					<Box
						gap="{`default`:{`xs`:{`light`:`50px`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`150px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<a
								href="https://madewithvuejs.com/p/vue-play/shield-link"
								target="_blank"
								class="inline-block mx-auto"
								data-allow-mismatch
							>
								<img src="https://madewithvuejs.com/storage/repo-shields/4476-shield.svg" />
							</a>
						</Box>
					</Box>
				</Box>
			</Box>
		</template>
		<template #footer>
			<Footer></Footer>
		</template>
	</Home>
</template>
<script>
	import Text from '@vueplayio/text';
	import Link from '@vueplayio/link';
	import Home from '@/_templates/arctic/views/Home.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Text: Text,
			Link: Link,
			Home: Home,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		inject: ['auth', 'manager'],
		data: () => ({
			usersCount: 0,
			websitesCount: 0,
			templatesCount: 0,
			componentsCount: 0
		}),
		async mounted() {
			if (!this.usersCount) await this.init();
		},
		async serverPrefetch() {
			await this.init();
		},
		methods: {
			async init() {
				try {
					const usersCount = (await this.auth.service('users')
							.count({}))
						?.count;
					this.usersCount = usersCount || 0;
					const websitesCount = (await this.manager.service('applications')
							.count({
								type: 'vue-app'
							}))
						?.count;
					this.websitesCount = websitesCount || 0;
					const templatesCount = (await this.manager.service('applications')
							.count({
								type: 'vue-template'
							}))
						?.count;
					this.templatesCount = templatesCount || 0;
					const componentsCount = (await this.manager.service('applications')
							.count({
								type: 'vue-sfc'
							}))
						?.count;
					this.componentsCount = componentsCount || 0;
				} catch (e) {
					console.log('err', e);
				}
			},
			formatCount(n) {
				return n;
				if (n >= 1000) {
					return (n / 1000)
						.toFixed(1)
						.replace(/\.0$/, '') + 'K';
				}
				return n;
			}
		},
		head() {
			const title = "Vue Play - Build Visually, Create Anything";
			const description = "Design, develop & launch websites, apps, components, and more with Vue Play. Rediscover the joy of building, from syntax to creativity.";
			const url = "https://vueplay.com/";
			const image = "https://vueplay.com/screenshot.png";
			return {
				title: title,
				meta: [{
					name: 'description',
					content: description
				}, {
					property: 'og:title',
					content: title
				}, {
					property: 'og:description',
					content: description
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: url
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: title
				}, {
					name: 'twitter:description',
					content: description
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: url
				}]
			};
		}
	};

</script>
<style scoped></style>