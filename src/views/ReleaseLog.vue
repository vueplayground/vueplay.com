<template>
	<Home>
		<template #header>
			<Header style="position: sticky; top: 0px"></Header>
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
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`90px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
					>Release log</Title>
					<Title
						style="text-align:center;margin-bottom:50px"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Changelog of progress —
						<br />new features, fixes, and improvements as they happen.
					</Title>
					<main class="p-6 m-auto max-w-xl container">
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>17.09.2025 - Release 1.6.2</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Added support for more css styles</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>23.08.2025 - Release 1.6.1</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Toggle darkmode in monaco editor</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>23.08.2025 - Release 1.6.0</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Darkmode improvements</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>22.08.2025 - Release 1.5.8</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Darkmode in studio</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>16.08.2025 - Release 1.5.7</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - New toolbox view</li>
								<li>Feature - Switch between visual & code view</li>
								<li>Feature - Code & visual split view</li>
								<li>Feature - Editor tabs</li>
								<li>Feature - Git tool to track diffs & changes</li>
								<li>Feature - Visual npm dependency manager</li>
								<li>Feature - Shortcut for easier deployments</li>
								<li>Feature - More user friendly launch tool</li>
								<li>Feature - Improved navigation for mobile devices</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>05.08.2025 - Release 1.5.5 ~ 1.5.6</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Add transform origin pivot</li>
								<li>Bugfix - Fix OPFS issue reading symbolic link</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>03.08.2025 - Release 1.5.4</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Changed from indexed-db fs storage to OPFS</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>18.07.2025 - Release 1.5.3</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Build log</li>
								<li>Feature - Design update for main menu</li>
								<li>Feature - Sitemap generator</li>
								<li>Feature - Automatic sitemap update for routes</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>07.04.2025 - Release 1.5.2</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Global color swatches</li>
								<li>Feature - Color shadings</li>
								<li>Feature - Global stylesheet images</li>
								<li>Feature - Width & height tooltip</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>27.03.2025 - Release 1.5.1</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Merchant onboarding (Early Access)</li>
								<li>Feature - Pricing of components & templates</li>
								<li>Feature - Server Side Rendering </li>
								<li>Feature - Global styling</li>
								<li>Feature - Project cloning</li>
								<li>Feature - Template based starter kits</li>
								<li>Feature - Push to github for free users</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>27.02.2025 - Release 1.5.0</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Route editor</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>13.02.2025 - Release 1.4.9</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Drag & drop sections</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>02.02.2025 - Release 1.4.8</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>Feature - Comma separated filtering for styles and attributes</li>
								<li>Feature - Improvements to component controllers</li>
								<li>
									Feature - Support for component props with responsive breakpoints
								</li>
								<li>
									Feature - Support for component props with darkmode breakpoints
								</li>
								<li>
									Feature - Support for component props with selective breakpoints
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								17.01.2025 - Release 1.4.7
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Fixed renderer after vue update
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								16.01.2025 - Release 1.4.6
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Update to vue-3.5.13
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								06.01.2025 - Release 1.4.5
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Share and transfer applications
								</li>
								<li>
									Feature - Share and transfer components
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								29.11.2024 - Release 1.4.4
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Teams management
								</li>
								<li>
									Feature - Projects management
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								28.11.2024 - Release 1.4.3
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Fix build
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								28.11.2024 - Release 1.4.2
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Fix dependency injection
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								27.11.2024 - Release 1.4.1
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Fixes
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								27.11.2024 - Release 1.4.0
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - All style controllers available for free
								</li>
								<li>
									Feature - All elements available for free
								</li>
								<li>
									Feature - Improved backend API
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								15.07.2024 - Release 1.3.2
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Add zoom style control
								</li>
								<li>
									Feature - Add transform-origin style control
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								04.06.2024 - Release 1.3.1
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Display id attribute in DOM tree
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								29.04.2024 - Release 1.3.0
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Allow ctrl/cmd + s to save
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								29.04.2024 - Release 1.2.9
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Title adjustment for code editor
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								29.04.2024 - Release 1.2.8
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Require manual save on script edition using live code update editor
								</li>
								<li>
									Enhancement - Enable save button in code editor only if code has changed
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								23.03.2024 - Release 1.2.7
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Add github workflow permissions
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								20.03.2024 - Release 1.2.6
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Improved route explorer
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								11.03.2024 - Release 1.2.5
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Add update button to custom code editor
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								10.03.2024 - Release 1.2.4
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Fix - Code edition in modal for mobile
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								10.03.2024 - Release 1.2.3
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Code edition in separate window
								</li>
								<li>
									Feature - Realtime code/view mirroring for open .vue file
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.03.2024 - Release 1.2.2
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Enhancement - Updated starter kit
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								04.03.2024 - Release 1.2.1
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Added letter spacing
								</li>
								<li>
									Enhancement - Updated color picker & other dependencies
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								01.03.2024 - Release 1.2.0
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Hotfix - Error with new breadcrumb resolved
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								01.03.2024 - Release 1.1.9
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Breadcrumb DOM navigation
								</li>
								<li>
									Feature - Improved responsive code editor, opens in new window
								</li>
								<li>
									Enhancement - Improved files and DOM layer views
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								19.02.2024 - Release 1.1.8
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Feature - Updated starter kit for new applications
								</li>
								<li>
									Feature - Add object-position & object-fit controls
								</li>
								<li>
									Feature - Add new css units (svw, svh, lvw, lvh, dvw, dvh)
								</li>
								<li>
									Feature - Support router links when running inside router
								</li>
								<li>
									Feature - Default to File Explorer for apps
								</li>
								<li>
									Enhancement - Update to latest vue, vue-router & tailwindcss
								</li>
								<li>
									Enhancement - Update css style control design & improved controls
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								06.02.2024 - Release 1.1.7
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Component property controls
								</li>
								<li class>
									Feature - Attribute categories has been grouped
								</li>
								<li class>
									Feature - Swap between dynamic and static attributes
								</li>
								<li class>
									Enhancement - Improved attribute controls
								</li>
								<li class>
									Enhancement - Selector optimalization
								</li>
								<li class>
									Enhancement - Speed optimalization
								</li>
								<li class>
									Bugfix - Scroll position for controls should now work properly
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								25.01.2024 - Release 1.1.6
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Enhancement - Improvement of scoped isolation
								</li>
								<li class>
									Enhancement - Added icons on menu
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								10.01.2024 - Release 1.1.5
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Announcement - Starter Kit is under development
								</li>
								<li class>
									Enhancement - Temporarily hided uncompleted layouts
								</li>
								<li class>
									Enhancement - Moved desktop sync buttons to bottom of file explorer
								</li>
								<li class>
									Enhancement - Improved login page
								</li>
								<li class>
									Enhancement - Improved loader design
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.12.2023 - Release 1.1.4
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Bugfix - Fix dist folder and version args
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.12.2023 - Release 1.1.3
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Bugfix - Fix dependencies for npm package
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.12.2023 - Release 1.1.2
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Enhancement - Start and stop sync
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.12.2023 - Release 1.1.1
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Bugfix - Always check state after local changes (2)
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								05.12.2023 - Release 1.1.0
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Bugfix - Always check state after local changes
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								04.12.2023 - Release 1.0.9
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Published on npm: `npm i -g @vueplayground/vueplay`
								</li>
								<li class>
									Feature - CLI build with local project storage
								</li>
								<li class>
									Feature - Sync project directory to get full freedom using any text editor of your choice
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								21.10.2023 - Release 1.0.8
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Export Single File Component(s) as WordPress Elementor Addon Plugin
								</li>
								<li class>
									Feature - Relative paths supported
								</li>
								<li class>
									Feature - Typescript support
								</li>
								<li class>
									Feature - :slotted, :global and :deep support for scoped styles
								</li>
								<li class>
									Feature - Support ?raw imports identical to vite
								</li>
								<li class>
									Feature - Support .json imports
								</li>
								<li class>
									Enhancement - Improved controls to work side by side with Elementor controls
								</li>
								<li class>
									Enhancement - Speed improvements
								</li>
								<li class>
									Enhancement - File paths added to intellisense inside code editor
								</li>
								<li class>
									Fix - Live preview should now work (locally)
								</li>
								<li class>
									Fix - Multi line attributes now works
								</li>
								<li class>
									Pricing - Students have special price on Vue Play when purchased from
									<a
										href="https://github.com/marketplace/vue-play-studio"
										target="_blank"
										class="text-purple-700"
									>
										the Github Marketplace.
									</a>
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								26.09.2023 - Release 1.0.7
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Upgraded Tailwind Control Selectors
								</li>
								<li class>
									Feature - Hide unverified components from studio
								</li>
								<li class>
									Feature - Expose component attributes in advanced tab
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								14.08.2023 - Release 1.0.6
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Support for Composition API
								</li>
								<li class>
									Feature - Support for v-bind in styles
								</li>
								<li class>
									Feature - Added &lt;suspense/&gt; element to support async / await on root level of setup
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								24.07.2023 - Release 1.0.5
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Drag and drop Tailwind Hero Icons into the Playground
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								17.07.2023 - Release 1.0.4
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Feature - Create Single File Components
								</li>
								<li class>
									Feature - Publishment of Single File Components
								</li>
								<li class>
									Feature - Add keyframe on animation timeline
								</li>
								<li class>
									Feature - Duplicate keyframe on animation timeline
								</li>
								<li class>
									Feature - Delete keyframe on animation timeline
								</li>
								<li class>
									Feature - Line height style controller
								</li>
								<li class>
									Feature - Router highlight overlay
								</li>
								<li class>
									Enhancement - Correct position of drag and drop ghost
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								07.07.2023 - Release 1.0.3
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li
									class
									style="height:29px"
								>
									Design - Huge design update
								</li>
								<li
									class
									style="height:29px"
								>
									Enhancement - Better tailwind style controllers
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								20.06.2023 - Release 1.0.2
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li class>
									Design - Progress bar on save / pull / push
								</li>
								<li>
									Enhancement - Improved tailwind controller
								</li>
								<li>
									Enhancement - Simplified GitHub Pages deployment
								</li>
								<li>
									Feature - Keyboard element navigation
								</li>
								<li>
									Feature - Breakpoint toggles
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								12.06.2023 - Release 1.0.1
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Design - Improved navigation selector
								</li>
								<li>
									Design - Improved style controller navigation
								</li>
								<li>
									Feature - Server boost
								</li>
								<li>
									Feature - Speed optimization
								</li>
								<li>
									Feature - Tailwind style controller
								</li>
								<li>
									Feature - Copy (keyboard shorcut supported)
								</li>
								<li>
									Feature - Paste (keyboard shorcut supported)
								</li>
								<li>
									Feature - Keyboard shorcut supported for delete
								</li>
								<li>
									Feature - Keyboard shorcut supported for undo & redo
								</li>
								<li>
									Feature - Improved context menu
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								22.05.2023 - Release 1.0.0
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Design - New login screen
								</li>
								<li>
									Feature - Gradient color selection
								</li>
								<li>
									Feature - Default styles for elements
								</li>
								<li>
									Feature - Table demo content
								</li>
								<li>
									Feature - List demo content
								</li>
								<li>
									Feature - Allow drop on template
								</li>
								<li>
									Feature - Box shadow controller
								</li>
								<li>
									Feature - Text shadow controller
								</li>
								<li>
									Feature - Keyframe timeline view
								</li>
								<li>
									Bugfix - Fix file overwrite when switching between files
								</li>
							</ul>
						</Box>
						<Box
							class="shadow mb-6 rounded-lg bg-white p-6"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 10%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
						>
							<h3>
								02.05.2023 - First launch
							</h3>
							<ul class="indent-0 ml-5 list-disc">
								<li>
									Initial release - Launched on Product Hunt
								</li>
							</ul>
						</Box>
					</main>
					<Link
						title="Open roadmap"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`150px`}}}"
						style="position:unset"
						route="/roadmap"
					>
					</Link>
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
		data: () => ({}),
		head() {
			return {
				title: 'Vue Play - Release Log',
				meta: [{
					name: 'description',
					content: 'Stay updated with the latest features, improvements, and bug fixes in Vue Play by checking our Release Log.'
				}, {
					property: 'og:title',
					content: 'Vue Play - Release Log'
				}, {
					property: 'og:description',
					content: 'Stay updated with the latest features, improvements, and bug fixes in Vue Play by checking our Release Log.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/release-log'
				}, {
					property: 'og:image',
					content: 'https://vueplay.com/screenshot.png'
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play - Release Log'
				}, {
					name: 'twitter:description',
					content: 'Stay updated with the latest features, improvements, and bug fixes in Vue Play by checking our Release Log.'
				}, {
					name: 'twitter:image',
					content: 'https://vueplay.com/screenshot.png'
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/release-log'
				}]
			};
		}
	};

</script>
<style scoped>
	h3 {
		font-weight: bold;
	}

	ul {
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	li {
		padding-bottom: 5px;
	}

</style>