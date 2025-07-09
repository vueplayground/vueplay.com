<template>
	<Basic>
		<template #header="">
			<Header style="position: sticky; top: 0px"></Header>
		</template> <template #default="">
			<Box
				style="justify-content:center;padding:0px;min-height:calc(100vh - 60px)"
				expand="{`default`:{`xs`:{`light`:true}}}"
			>
				<Box
					column="{`default`:{`xs`:{`light`:true}}}"
					style="padding:0px;align-items:center;justify-content:center"
					contain="{`default`:{`xs`:{`light`:true}}}"
					marginBottom="{`default`:{`xs`:{`light`:`150px`,`dark`:`150px`}}}"
				>
					<Box
						style="justify-content:center;"
						column="{`default`:{`xs`:{`light`:true}}}"
						marginTop="{`default`:{`xs`:{`light`:`80px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`10px`},`lg`:{`light`:`60px`}}}"
					>
						<Title
							style="text-align:center"
							fontSize="{`default`:{`xs`:{`light`:`40px`},`sm`:{`light`:`45px`},`md`:{`light`:`50px`},`lg`:{`light`:`60px`},`xl`:{`light`:`70px`}}}"
							lineHeight="{`default`:{`xs`:{`light`:`50px`}}}"
							type="{`default`:{`xs`:{`light`:`h1`}}}"
						>From idea to launch—covered</Title>
						<Title
							style="text-align:center;margin-top:30px;font-weight:326"
							type="{`default`:{`xs`:{`light`:`h2`}}}"
							fontSize="{`default`:{`xs`:{`light`:`16px`},`sm`:{`light`:`15px`},`md`:{`light`:`17px`},`lg`:{`light`:`22px`},`xl`:{`light`:`26px`}}}"
							lineHeight="{`default`:{`xs`:{`light`:`27px`}}}"
						>Stay on Hobby as long as you like, or switch to Professional for more features.</Title>
					</Box>
					<Pricing style="max-width:1000px"></Pricing>
					<Box
						style="justify-content:center;"
						expand="{`default`:{`xs`:{`light`:true}}}"
						column="{`default`:{`xs`:{`light`:true}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
						padding="{`default`:{`lg`:{`light`:`20px 45px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`60px`}}}"
					>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
							>
								<div></div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="font-weight:600;flex-grow:0;flex-shrink:0"
								fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`13px`}}}"
							>Hobby</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="font-weight:600;flex-grow:0;flex-shrink:0"
								fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderTopLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								borderTopRightRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`13px`}}}"
							>Professional</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							style="font-weight:600"
							fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}}}"
							borderTopLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							borderBottomLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Features</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Drag & drop playground</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>One click publish</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Sell components</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Push to github</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Custom domains</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Premium components</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Create teams</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Create projects</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Create components</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									width="800"
									height="800"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									transform="rotate(180)"
									style="color:var(--color-primary)"
									class="w-6 h-6"
								>
									<path
										d="M10.18 9.32a4.47 4.47 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.82 4.82 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									width="800"
									height="800"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									transform="rotate(180)"
									style="color:var(--color-primary)"
									class="w-6 h-6"
								>
									<path
										d="M10.18 9.32a4.47 4.47 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.82 4.82 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Create applications</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>3</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									width="800"
									height="800"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									transform="rotate(180)"
									style="color:var(--color-primary)"
									class="w-6 h-6"
								>
									<path
										d="M10.18 9.32a4.47 4.47 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.82 4.82 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							style="font-weight:600"
							fontSize="{`default`:{`xs`:{`light`:`15px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}}}"
							borderTopLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							borderBottomLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Support</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
								style="flex-grow:0;flex-shrink:0"
							>
								<div></div>
							</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Github discussions</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Github issues</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								style="flex-grow:0;flex-shrink:0"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 75%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 75%, white)`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								column="{`default`:{`xs`:{`light`:true}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
							>Prioritized email support</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`80px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`13px`}}}"
								style="flex-grow:0;flex-shrink:0"
							>—</Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`10px`}}}"
								width="{`default`:{`xs`:{`light`:`120px`},`sm`:{`light`:`150px`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								overflow="{`default`:{`xs`:{`light`:`visible`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 50%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								style="text-align:center;flex-grow:0;flex-shrink:0"
								borderBottomLeftRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								borderBottomRightRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`13px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, black)`}}}"
							><svg
									class="h-6 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									data-slot="icon"
									style="color:var(--color-primary)"
								>
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
										clip-rule="evenodd"
									></path>
								</svg></Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Basic>
</template>
<script>
	import Pricing from '@/components/Pricing.vue';
	import Basic from '@/_templates/arctic/views/Basic.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Pricing: Pricing,
			Basic: Basic,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		data: () => ({})
	};

</script>
<style scoped></style>