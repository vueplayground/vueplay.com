<template>
	<Dashboard
		headerHeight="96"
		style="position:relative"
	>
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position:sticky; top: 0px; width: 100%"></Sidebar>
		</template> <template #default="">
			<Box
				expand="true"
				justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
			>

				<Box
					v-if="!component"
					expand="{`default`:{`xs`:{`light`:true}}}"
					justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
					height="{`default`:{`xs`:{`light`:`calc(100vh - 500px)`}}}"
				>
					<span class="loader" />
				</Box>
				<Box
					v-else=""
					contain="{`default`:{`xs`:{`light`:true}}}"
					style="padding-bottom:100px"
					column="{`default`:{`xs`:{`light`:true}}}"
					marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
				>
					<Box
						style="border-bottom-width:2px"
						borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 90%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 90%, black)`}}}"
						paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
						paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
					>
						<Text
							type="{`default`:{`xs`:{`dark`:`h1`}}}"
							fontSize="{`default`:{`xs`:{`light`:`30px`},`lg`:{`light`:`35px`}}}"
							class="hash"
							style="width:100%"
						>{{component?.title || component?.slug}}</Text>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							fontSize="{`default`:{`xs`:{`light`:`14px`},`lg`:{`light`:`16px`}}}"
							flexWrap="{`default`:{`xs`:{`light`:`nowrap`}}}"
							gap="{`default`:{`xs`:{`light`:`2px`},`lg`:{`light`:`25px`}}}"
							column="{`default`:{`xs`:{`light`:true},`lg`:{`light`:false}}}"
							marginBottom="{`default`:{`xs`:{`light`:`5px`},`lg`:{`light`:`0px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 70%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 70%, white)`}}}"
						>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
								v-if="component?.type === 'vue-sfc'"
							>Version: {{version && version !== 'latest' ? version : component?.latest_version}}</div>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
							>Created: {{new Date(component?.created_at).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })}}</div>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
							>Updated: {{new Date(component?.updated_at).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })}}</div>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
								v-if="authors?.length"
							>Author{{authors?.length &gt; 1 ? 's' : ''}}: {{authors?.join(',')}}</div>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
								v-if="teams?.length"
							>Team{{teams?.length &gt; 1 ? 's' : ''}}: {{teams?.join(',')}}</div>
							<div
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								class="hash"
								style="width:100%;display:inline-block;white-space:nowrap"
								v-if="projects?.length"
							>Project{{projects?.length &gt; 1 ? 's' : ''}}: {{projects?.join(',')}}</div>
						</Box>
					</Box>
					<Box
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						column="{`default`:{`xs`:{`light`:true},`sm`:{`light`:false}}}"
						reverse="{`default`:{`xs`:{`light`:true},`sm`:{`light`:false}}}"
						alignItems="{`default`:{`xs`:{`light`:`start`},`sm`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
						justifyContent="{`default`:{`sm`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`sm`:{`light`:`nowrap`}}}"
						style="flex-grow:0"
					>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							padding="{`default`:{`xs`:{`light`:`20px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`50%`}}}"
							style="flex-grow:1"
						>{{component?.description || 'No description provided.'}}</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`200px`},`xl`:{`light`:`245px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
							maxWidth="{`default`:{`sm`:{`light`:`250px`}}}"
						>
							<Box
								v-html="component?.icon?.startsWith('<svg') ? component?.icon : '<div></div>'"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								style="aspect-ratio:1/1;background-size:contain;background-repeat:no-repeat;background-position:center"
								overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								:style="{
backgroundImage: component?.icon?.startsWith('<svg') ? undefined : 'url(' + component?.icon + ')'
}"
								v-if="component?.icon"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							></Box>
							<Box
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								style="aspect-ratio:1/1;background-size:contain;background-repeat:no-repeat;background-position:center"
								overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								v-else-if="!component?.icon"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 32 32"
									xml:space="preserve"
									style="width:50%"
									v-if="component?.type === 'vue-sfc'"
								>
									<path
										d="m25.2 20.9-.7-.7 3.5-3.5-4.2-4.2-.7.7c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l.7-.7L15.3 4l-3.5 3.5-.7-.7C9.9 5.6 8 5.6 6.8 6.8s-1.2 3.1 0 4.2l.7.7L4 15.3l4.2 4.2.7-.7c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-.7.7 4.2 4.2 3.5-3.5.7.7c1.2 1.2 3.1 1.2 4.2 0 1.4-1.1 1.4-3 .2-4.2"
										style="fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
									/>
								</svg><svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									style="width:40%"
									v-else-if="component?.type !== 'vue-sfc'"
								>
									<path
										fill="none"
										stroke="#fff"
										stroke-width="2"
										d="M1 3h22v18H1zm0 5h22M7 8v13"
									/>
								</svg></Box>
							<Link
								v-if="!readAccess && component?.price && component?.product_id"
								:title="`Purchase \$${component.price / 100} inc.`"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-warning)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-warning) 85%, white)`,`dark`:`color-mix(in oklch, var(--color-warning) 85%, black)`}}}"
								padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
								style="position:unset"
								:route="`/market/${category}/${slug}/${version ? version + '/' : ''}checkout${account ? '' : '/authenticate'}`"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								marginTop="{`default`:{`xs`:{`light`:`10px`}}}"
							>
							</Link>
							<Link
								v-else-if="readAccess"
								title="Download"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 85%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 85%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 95%, black)`}}}"
								padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
								style="position:unset"
								@click="download('https://manager.vueplay.io/' + component?.slug + '@' + (version || component?.latest_version || 'latest') + '/esm')"
								target="_blank"
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								marginTop="{`default`:{`xs`:{`light`:`10px`}}}"
								v-if="component?.type === 'vue-sfc'"
							>
							</Link>
						</Box>
					</Box>
					<Box
						style="position: relative"
						data-allow-mismatch="children"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						alignItems="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
						flexWrap="{`default`:{`lg`:{`light`:`nowrap`}}}"
						v-if="component?.showcase_url"
					>
						<span
							style="position:absolute;top: calc(50% - 24px); left: calc(50% - 24px)"
							class="loader"
						/> <iframe
							:src="component.showcase_url"
							style="z-index: 1; width:100%;aspect-ratio:16/9;background:white"
						/>
					</Box>
					<Box
						style="position: relative"
						data-allow-mismatch="children"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						alignItems="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
						flexWrap="{`default`:{`lg`:{`light`:`nowrap`}}}"
						v-else-if="component?.type === 'vue-template' || component?.type === 'vue-app'"
					>
						<span
							style="position:absolute;top: calc(50% - 24px); left: calc(50% - 24px)"
							class="loader"
						/> <iframe
							:src="'https://' + slug + '.vueplay.com'"
							style="z-index: 1; width:100%;aspect-ratio:16/9;background:white"
						/>
					</Box>
					<Box
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						alignItems="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`normal`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
						flexWrap="{`default`:{`lg`:{`light`:`wrap`}}}"
						v-if="component?.type === 'vue-sfc'"
					>
						<Box
							data-allow-mismatch="children"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							v-if="component?.disable_preview"
						>Component is protected & preview disabled.</Box>
						<Box
							data-allow-mismatch="children"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							v-if="blobUrl && !component?.disable_preview && component?.type === 'vue-sfc'"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							paddingTop="{`default`:{`xs`:{`light`:`10px`}}}"
						>
							<Box
								style="width:100%"
								v-if="blobUrl && !component?.disable_preview"
							>
								<Box
									padding="{`default`:{`xs`:{`light`:`0px 5px`},`xl`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`100%`},`xl`:{`light`:`calc(100% - 250px)`}}}"
									style="flex-grow:1;position: relative"
								>
									<Box
										style="position: relative"
										padding="{`default`:{`xs`:{`light`:`0px`}}}"
										width="{`default`:{`xs`:{`light`:`100%`}}}"
										reverse="{`default`:{`xs`:{`light`:true}}}"
										marginBottom="{`default`:{`xs`:{`light`:`10px`}}}"
									>
										<Box
											backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
											style="transition:all .3s linear"
											display="{`default`:{`xs`:{`light`:`inline-block`}}}"
											padding="{`default`:{`xs`:{`light`:`0px`}}}"
											borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
											height="{`default`:{`xs`:{`light`:`40px`}}}"
											title="Toggle analyze"
										><button
												@click="toggleAnalyze()"
												style="padding:8px 8px"
												:title="displayAnalyze ? 'Open preview' : 'Show analysis'"
											><svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
													v-if="!displayAnalyze"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
													/>
												</svg><svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
													v-else-if="displayAnalyze"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
													/>
												</svg></button> </Box>
										<Box
											backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
											style="transition:all .3s linear"
											display="{`default`:{`xs`:{`light`:`inline-block`}}}"
											padding="{`default`:{`xs`:{`light`:`0px`}}}"
											borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
											height="{`default`:{`xs`:{`light`:`40px`}}}"
											marginRight="{`default`:{`xs`:{`light`:`5px`}}}"
											title="Toggle code"
										><button
												@click="toggleCode()"
												style="padding:8px 8px"
												:title="displayCode ? 'Open preview' : 'Show code'"
											><svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="currentColor"
													class="w-6 h-6"
													v-if="!displayCode"
												>
													<path
														fill-rule="evenodd"
														d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
														clip-rule="evenodd"
													/>
												</svg><svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
													v-else-if="displayCode"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
													/>
												</svg></button> </Box>
										<Box
											backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
											style="transition:all .3s linear"
											display="{`default`:{`xs`:{`light`:`inline-block`}}}"
											padding="{`default`:{`xs`:{`light`:`0px`}}}"
											borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
											height="{`default`:{`xs`:{`light`:`40px`}}}"
											:title="'Copy ' + (displayAnalyze ? 'analysis' : 'code')"
											marginRight="{`default`:{`xs`:{`light`:`5px`}}}"
										><button
												@click="copyDeep($event)"
												style="padding:8px 8px"
											><svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
													/>
												</svg></button> </Box>
										<Box
											padding="{`default`:{`xs`:{`light`:`0px`}}}"
											style="flex-grow:1"
											alignItems="{`default`:{`xs`:{`light`:`center`}}}"
											color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 70%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 70%, white)`}}}"
										>Component {{ displayCode ? 'code' : (displayAnalyze ? 'analysis' : 'preview') }}</Box>
									</Box> <span
										style="position:absolute;top: calc(50% - 24px); left: calc(50% - 24px)"
										class="loader"
									/> <iframe
										data-allow-mismatch="attribute"
										:src="blobUrl"
										id="playground"
										style="z-index: 1; width: 100%;aspect-ratio:16/9!important;border-radius:4px"
									/><iframe
										data-allow-mismatch="attribute"
										:src="blobUrl"
										id="modal"
										name="modal"
										style="width: 100%;height:100%;position:fixed;top:0px;left:0px;z-index:1000"
										v-show="modal"
									/><iframe
										data-allow-mismatch="attribute"
										:src="blobUrlSlots"
										id="slots"
										style="z-index: 1; width: 100%;aspect-ratio:16/9!important;margin-top:10px;max-height:150px"
										v-if="analyze?.analyze?.slots?.length"
										v-show="!displayAnalyze"
									/>
								</Box>
								<Box
									style="position: relative"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`100%`},`xl`:{`light`:`250px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`20px`},`xl`:{`light`:`0`}}}"
									height="{`default`:{`xs`:{`light`:`330px`},`lg`:{`light`:`470px`},`xl`:{`light`:`auto`}}}"
									v-if="analyze?.analyze?.props?.length"
									marginRight="{`default`:{`xl`:{`light`:`-20px`}}}"
									justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									v-show="!displayAnalyze"
								>
									<iframe
										data-allow-mismatch="attribute"
										:src="blobUrlControls"
										id="controls"
										style="z-index: 1; width: 100%;height:100%"
									/>
								</Box>
							</Box>
						</Box>
						<Box
							data-allow-mismatch="children"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
							v-else-if="!blobUrl || component?.disable_preview"
							style="aspect-ratio:16/9;width:100%"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						>
							<span class="loader" />
						</Box>
						<Box
							data-allow-mismatch="children"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							v-show="!blobUrl && !component?.disable_preview"
						>
							<component
								v-for="component of dynamicComponents.filter(c => c.type === 'main')"
								:is="component.component"
							/>
							<div v-if="!dynamicComponents.filter(c => c.type === 'main')?.length"></div>
						</Box>
					</Box>
					<Box
						marginBottom="{`default`:{`xs`:{`light`:`100px`}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 15%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
					>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							justifyContent="{`default`:{`xs`:{`light`:`space-evenly`}}}"
						>
							<Box
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								style="flex-grow:1"
							>
								<Box
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									gap="{`default`:{`xs`:{`light`:`8px`}}}"
									marginBottom="{`default`:{`xs`:{`light`:`15px`}}}"
									marginLeft="{`default`:{`xs`:{`light`:`1px`}}}"
									height="{`default`:{`xs`:{`light`:`12px`}}}"
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
							</Box>
							<Box
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								style="flex-grow:1"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
								v-if="account?.accessToken"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 30%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 50%, black)`}}}"
									style="right:15px;top:15px;transition:all .3s linear"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
								><button
										@click="newToken"
										title="Let your access token last for a year, else a short-living token from your current authentication session will be used."
										style="padding:8px 10px;display:flex"
										v-if="!token"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6 mr-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
											/>
										</svg>
										Use long-living token
									</button>
									<div
										style="padding: 10px 15px;display: flex"
										v-else-if="token"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6 mr-2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
											/>
										</svg>Using long living token</div>
								</Box>
							</Box>
						</Box>
						<Box
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							paddingTop="{`default`:{`xs`:{`light`:`20px`}}}"
							paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
							v-if="component?.type === 'vue-sfc' || component?.versions.le"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h2`},`xl`:{`light`:`h2`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
								fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
								style="width:100%"
							>Installation guide for external usage</Title>
							<Title
								fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								style="width:100%"
								type="{`default`:{`xs`:{`light`:`h3`}}}"
							>Note: Components is also available in Vue Play Studio via drag-and-drop.</Title>
						</Box>
						<Box
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							v-if="component?.public && !component?.price && component?.versions?.length"
						>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`20px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
							>
								<Title
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
								>Install using npm</Title>
							</Box>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
									style="transition:all .3s linear"
									position="{`default`:{`xs`:{`light`:`absolute`}}}"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
									marginRight="{`default`:{`xs`:{`light`:`9px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`9px`}}}"
								><button
										@click="copy($event, pre.install.text)"
										style="padding:10px 8px"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
											/>
										</svg></button> </Box> <code
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-if="component?.public && !component?.price"
									v-html="pre?.install?.html"
								/>
							</Box>
						</Box>
						<Box
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							v-if="component?.versions?.length"
						>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`20px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
							>
								<Title
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									:style="{
marginTop: (component?.public && !component?.price) ? '50px' : undefined
}"
								>Install using npm from Vue Play registry</Title>
								<Title
									fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
									fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									style="width:100%"
									type="{`default`:{`xs`:{`light`:`h3`}}}"
								>Token required for private and paid components</Title>
							</Box>
							<Box
								data-allow-mismatch=""
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
									style="transition:all .3s linear"
									position="{`default`:{`xs`:{`light`:`absolute`}}}"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
									marginRight="{`default`:{`xs`:{`light`:`9px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`9px`}}}"
								><button
										@click="copy($event, npmrcText)"
										style="padding:10px 8px"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
											/>
										</svg></button> </Box> <code
									v-if="(!token && !account?.accessToken)"
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-html="npmrcHTML + 'token'"
									data-allow-mismatch=""
								/><code
									v-if="(token || account?.accessToken)"
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-html="npmrcHTML + (token || account?.accessToken || 'token')"
									data-allow-mismatch=""
								/>
							</Box>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`10px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`10px`}}}"
							>
								<Title
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
								>then</Title>
							</Box>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
									style="transition:all .3s linear"
									position="{`default`:{`xs`:{`light`:`absolute`}}}"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
									marginRight="{`default`:{`xs`:{`light`:`9px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`9px`}}}"
								><button
										@click="copy($event, pre.npmrcInstall.text)"
										style="padding:10px 8px"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
											/>
										</svg></button> </Box> <code
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-html="pre?.npmrcInstall?.html"
								/>
							</Box>
						</Box>
						<Box
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`20px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
							>
								<Title
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
								>Clone using git</Title>
								<Title
									v-if="!account?.accessToken"
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									marginTop="{`default`:{`xs`:{`light`:`5px`}}}"
								>(Login to see access token)</Title>
								<Title
									v-else-if="!readAccess && component?.price && component?.product_id"
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`400`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									marginTop="{`default`:{`xs`:{`light`:`5px`}}}"
								>(Purchase to be able to clone)</Title>
							</Box>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
									style="transition:all .3s linear"
									position="{`default`:{`xs`:{`light`:`absolute`}}}"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
									marginRight="{`default`:{`xs`:{`light`:`9px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`9px`}}}"
								><button
										@click="component?.public && !component?.price && !((component?.type === 'vue-sfc' && component?.restrict_clone)) ? copy($event, pre.gitClone.text) : copy($event, gitCloneSecure?.text)"
										style="padding:10px 8px"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
											/>
										</svg></button> </Box> <code
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-if="component?.public && !component?.price && !((component?.type === 'vue-sfc' && component?.restrict_clone))"
									v-html="pre?.gitClone?.html"
								/> <code
									style="width:100%;overflow:auto;padding-right:50px;padding:20px 70px 20px 20px"
									v-else-if="!component?.public || component?.price || (component?.type === 'vue-sfc' && component?.restrict_clone)"
									v-html="gitCloneSecure?.html"
								/>
							</Box>
						</Box>
						<Box
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							width="{`default`:{`xs`:{`light`:`100%`}}}"
							v-if="component?.public && !component?.price && component?.versions?.length"
						>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								paddingTop="{`default`:{`xs`:{`light`:`20px`}}}"
								paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
							>
								<Title
									type="{`default`:{`xs`:{`light`:`h3`}}}"
									fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
									style="width:100%"
									color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
									marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
								>Embed using CDN</Title>
							</Box>
							<Box
								width="{`default`:{`xs`:{`light`:`100%`}}}"
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								v-if="component?.public && !component?.price"
								justifyContent="{`default`:{`xs`:{`light`:`flex-end`}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
							>
								<Box
									backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
									style="transition:all .3s linear"
									position="{`default`:{`xs`:{`light`:`absolute`}}}"
									display="{`default`:{`xs`:{`light`:`inline-block`}}}"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`6px`}}}"
									marginRight="{`default`:{`xs`:{`light`:`9px`}}}"
									marginTop="{`default`:{`xs`:{`light`:`9px`}}}"
								><button
										@click="copy($event, pre.embed.text)"
										style="padding:10px 8px"
									><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
											/>
										</svg></button> </Box> <code
									style="width:100%;overflow:auto;padding:20px 70px 20px 20px"
									v-html="pre?.embed?.html"
								/>
							</Box>
						</Box>
					</Box>
					<Box
						padding="{`default`:{`xs`:{`light`:`20px`}}}"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
						gap="{`default`:{`xs`:{`light`:`10px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`white`}}}"
					>
						<Title
							style="width:100%;margin-bottom:20px;margin-top:0px"
							fontWeight="{`default`:{`xs`:{`light`:`600`}}}"
						>Share on social media</Title><a
							:href="'https://www.facebook.com/sharer/sharer.php?u=https://vueplay.com/market/' + category + '/' + component?.slug"
							target="_blank"
						><svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								width="40"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.791-4.668 4.533-4.668 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12"
									fill="currentColor"
								/>
							</svg> </a><a
							:href="'https://www.reddit.com/submit?url=https://vueplay.com/market/' + category + '/' + component?.slug + '&title=' + component?.title"
							target="_blank"
						><svg
								width="42"
								viewBox="0 0 32 32"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill="currentColor"
									d="M12.606 20.986a.408.408 0 0 0-.289.696 5.74 5.74 0 0 0 3.712 1.14h-.012a5.68 5.68 0 0 0 3.715-1.152l-.014.01a.45.45 0 0 0 .035-.58l.001.001a.41.41 0 0 0-.58 0 4.92 4.92 0 0 1-3.152.912l.013.001a4.9 4.9 0 0 1-3.154-.922l.014.01a.4.4 0 0 0-.287-.119h-.003zM19.436 16a1.562 1.562 0 1 0 1.562 1.561A1.564 1.564 0 0 0 19.436 16m-6.873 0a1.56 1.56 0 1 1-.001 3.121A1.56 1.56 0 0 1 12.563 16m9.698-9.067a1.55 1.55 0 1 1-1.56 1.635v-.004l-3.245-.684-1 4.682a10.8 10.8 0 0 1 5.878 1.884l-.037-.024c.38-.379.905-.614 1.485-.614h.025-.001A2.194 2.194 0 0 1 25.998 16a2.27 2.27 0 0 1-1.249 2.011l-.013.006c.033.191.052.412.052.637v.014-.001c0 3.367-3.911 6.086-8.752 6.086s-8.752-2.719-8.752-6.086v-.005q0-.351.057-.687l-.003.024a2.191 2.191 0 0 1 .893-4.192h.001a2.2 2.2 0 0 1 1.509.613l-.001-.001a10.55 10.55 0 0 1 5.924-1.858h.004l1.106-5.226a.43.43 0 0 1 .173-.245l.002-.001a.44.44 0 0 1 .3-.052h-.003l3.631.771a1.52 1.52 0 0 1 1.375-.876zM16 1.004C7.718 1.004 1.004 7.718 1.004 16S7.718 30.996 16 30.996 30.996 24.282 30.996 16c0-4.141-1.678-7.89-4.392-10.604A14.95 14.95 0 0 0 16 1.004"
								/>
							</svg> </a><a
							:href="'https://twitter.com/intent/tweet?url=https://vueplay.com/market/' + category + '/' + component?.slug + '&text=' + component?.title"
							target="_blank"
						><svg
								width="38"
								viewBox="0 0 1200 1227"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854z"
									fill="currentColor"
								/>
							</svg> </a><a
							:href="'https://www.linkedin.com/shareArticle?mini=true&url=https://vueplay.com/market/' + category + '/' + component?.title"
							target="_blank"
						><svg
								width="40"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M22.286 0H1.709C.766 0 0 .777 0 1.73v20.54C0 23.223.766 24 1.709 24h20.577c.943 0 1.714-.777 1.714-1.73V1.73C24 .777 23.229 0 22.286 0M7.254 20.571H3.696V9.118H7.26V20.57zM5.475 7.554a2.063 2.063 0 0 1 0-4.125c1.136 0 2.063.926 2.063 2.062a2.06 2.06 0 0 1-2.063 2.063M20.587 20.57H17.03V15c0-1.329-.026-3.037-1.848-3.037-1.853 0-2.137 1.446-2.137 2.94v5.668H9.488V9.118H12.9v1.564h.048c.477-.9 1.64-1.848 3.37-1.848 3.6 0 4.27 2.373 4.27 5.459z"
									fill="currentColor"
								/>
							</svg> </a>
					</Box>
					<Link
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 85%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 85%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 95%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						style="position:unset"
						@click="publish()"
						target="_blank"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`15px`}}}"
						title="Publish"
						v-if="!component?.published && account?.authentication?.payload?.global_roles?.includes('admin')"
						tag="button"
					>
					</Link>
					<Link
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-info)`,`dark`:`color-mix(in oklch, var(--color-info) 85%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-info) 85%, white)`,`dark`:`color-mix(in oklch, var(--color-info) 95%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						style="position:unset"
						@click="unpublish()"
						target="_blank"
						width="{`default`:{`xs`:{`light`:`100%`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`15px`}}}"
						title="Unpublish"
						tag="button"
						v-else-if="component?.published && account?.authentication?.payload?.global_roles?.includes('admin')"
					>
					</Link>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import * as VUE from 'vue';
	import Link from '@vueplayio/link';
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/SidebarMarket.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import loadComponents from '@/utils/loadComponents.js';
	import loadPreview from '@/utils/loadPreview.js';
	import loadControls from '@/utils/loadControls.js';
	import loadSlots from '@/utils/loadSlots.js';
	export default {
		components: {
			Link: Link,
			Text: Text,
			Dashboard: Dashboard,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header,
			Sidebar: Sidebar
		},
		inject: ['account', 'auth', 'manager', 'market', 'theme', 'updateTheme'],
		props: {
			category: {
				type: String,
				default: 'components'
			},
			slug: {
				type: String,
				default: 'box'
			},
			version: {
				type: String,
				default: ''
			}
		},
		data: () => ({
			component: null,
			show: false,
			dynamicComponents: [],
			readAccess: false,
			blobUrlSlots: '',
			blobUrlControls: '',
			blobUrl: '',
			token: '',
			iframe: null,
			iframeModal: null,
			iframeControls: null,
			iframeSlots: null,
			analyze: null,
			modal: false,
			copyDeepEvent: null,
			displayCode: false,
			displayAnalyze: false
		}),
		async mounted() {
			await this.init(this.component ? true : false);
			window.addEventListener('message', this.handleMessage);
			this.iframe = document.getElementById('playground');
			this.iframeModal = document.getElementById('modal');
			this.iframeControls = document.getElementById('controls');
			this.iframeSlots = document.getElementById('slots');
		},
		async unmounted() {
			window.removeEventListener('message', this.handleMessage);
		},
		async serverPrefetch() {
			await this.init();
		},
		computed: {
			authors() {
				return this.analyze?.authors?.users;
			},
			teams() {
				return this.analyze?.authors?.teams;
			},
			projects() {
				return this.analyze?.authors?.projects;
			},
			icon() {
				return this.component?.icon?.replace('width', 'data-width')
					.replace('height', 'data-height');
			},
			gitCloneSecure() {
				return {
					text: `git -c http.extraHeader="authorization-x: Bearer ${this.token || this.account?.accessToken || 'token'}" clone https://git.vueplay.io/git/${this.component?.uuid}`,
					html: `git -c http.extraHeader="authorization-x: Bearer ${this.token || this.account?.accessToken || 'token'}" clone https://git.vueplay.io/git/${this.component?.uuid}`
				};
			},
			npmrcText() {
				return `# .npmrc\n@vueplayio:registry=https://manager.vueplay.io/\n//manager.vueplay.io/:_authToken=${this.token || this.account?.accessToken || 'token'}`;
			},
			npmrcHTML() {
				return `# .npmrc<br/>@vueplayio:registry=https://manager.vueplay.io/<br/>//manager.vueplay.io/:_authToken=`;
			},
			pre() {
				const version = this.version || this.component?.latest_version || 'latest';
				return {
					install: {
						text: `npm install https://manager.vueplay.io/${this.component?.slug}@${this.version || 'latest'}`,
						html: `npm install https://manager.vueplay.io/${this.component?.slug}@${this.version || 'latest'}`
					},
					npmrcInstall: {
						text: `npm install @vueplayio/${this.component?.slug}`,
						html: `npm install @vueplayio/${this.component?.slug}`
					},
					gitClone: {
						text: `git clone https://git.vueplay.io/git/${this.component?.uuid}`,
						html: `git clone https://git.vueplay.io/git/${this.component?.uuid}`
					},
					embed: {
						text: `<!doctype html>\n<html>\n  <head>\n    <${'script'} type="importmap">\n      {\n        "imports": {\n          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"\n        }\n      }\n    </${'script'}>\n    <${'script'} src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></${'script'}>\n    <${'script'} type="module">\n      import { createApp } from 'vue'\n      import App from 'https://manager.vueplay.io/${this.component?.slug}@${version}/esm'\n      createApp(App).mount('#app')\n    </${'script'}>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n</html>`,
						html: `&lt;!doctype html&gt;<br/>&lt;html&gt;<br/> &nbsp;&lt;head&gt;<br/> &nbsp; &nbsp;&lt;script type="importmap"&gt;<br/> &nbsp; &nbsp; &nbsp;{<br/> &nbsp; &nbsp; &nbsp; &nbsp;"imports": {<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;"vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"<br/> &nbsp; &nbsp; &nbsp; &nbsp;}<br/> &nbsp; &nbsp; &nbsp;}<br/> &nbsp; &nbsp;&lt;/script&gt;<br/> &nbsp; &nbsp;&lt;script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"&gt;&lt;/script&gt;<br/> &nbsp; &nbsp;&lt;script type="module"&gt;<br/> &nbsp; &nbsp; &nbsp;import { createApp } from 'vue'<br/> &nbsp; &nbsp; &nbsp;import App from 'https://manager.vueplay.io/${this.component?.slug}@${version}/esm'<br/> &nbsp; &nbsp; &nbsp;createApp(App).mount('#app')<br/> &nbsp; &nbsp;&lt;/script&gt;<br/> &nbsp;&lt;/head&gt;<br/> &nbsp;&lt;body&gt;<br/> &nbsp; &nbsp;&lt;div id="app"&gt;&lt;/div&gt;<br/> &nbsp;&lt;/body&gt;<br/>&lt;/html&gt;`
					}
				};
			}
		},
		watch: {
			async slug() {
				this.component = null;
				await this.init();
			},
			async theme(value) {
				if (this.iframe?.contentWindow) {
					this.iframe.contentWindow.postMessage({
						theme: value
					}, '*');
				}
				if (this.iframeControls.contentWindow) {
					this.iframeControls.contentWindow.postMessage({
						theme: value
					}, '*');
				}
				if (this.iframeSlots.contentWindow) {
					this.iframeSlots.contentWindow.postMessage({
						theme: value
					}, '*');
				}
			}
		},
		methods: {
			toggleCode() {
				this.displayCode = !this.displayCode;
				if (this.displayCode) this.displayAnalyze = false;
				this.iframe.contentWindow.postMessage({
					toggleCode: true
				}, '*');
			},
			toggleAnalyze() {
				this.displayAnalyze = !this.displayAnalyze;
				if (this.displayAnalyze) this.displayCode = false;
				this.iframe.contentWindow.postMessage({
					toggleAnalyze: true
				}, '*');
			},
			async init(lazy = false) {
				if (lazy) return await this.loadComponent();
				if (!this.version) {
					await this.checkReadAccess();
					if (!this.component) await this.getComponent();
					await this.loadComponent();
				} else {
					const sequenceA = (async () => {
						await this.checkReadAccess();
						if (!this.component) await this.getComponent();
					})();
					const sequenceB = this.loadComponent();
					await Promise.all([sequenceA, sequenceB]);
				}
			},
			async publish() {
				await this.manager.service('applications')
					.patch(this.component.id, {
						published: true
					});
				this.component = null;
				await this.init();
			},
			async unpublish() {
				await this.manager.service('applications')
					.patch(this.component.id, {
						published: false
					});
				this.component = null;
				await this.init();
			},
			formatDate(date) {
				const pad = n => String(n)
					.padStart(2, '0');
				return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} 23:59:59`;
			},
			async newToken() {
				try {
					const title = prompt('Name your token', `${this.component.title || this.slug}`);
					if (!title) return;
					const now = new Date();
					const token = await this.auth.service('auth_sessions')
						.create({
							revoked: false,
							expires_at: this.formatDate(new Date(new Date(now)
								.setFullYear(now.getFullYear() + 1))),
							title
						});
					this.token = token?.accessToken || '';
				} catch (e) {
					console.log(e);
				}
			},
			async handleMessage(event) {
				if (typeof event.data.theme !== 'undefined') {
					if (this.theme !== event.data.theme) {
						this.updateTheme(event.data.theme);
					}
				} else if (event.data.key) {
					if (this.iframe?.contentWindow) {
						this.iframe.contentWindow.postMessage({
							key: event.data.key,
							value: event.data.value
						}, '*');
					}
				} else if (typeof event.data.modal !== 'undefined') {
					this.modal = event.data.modal;
				} else if (event.data.parents) {
					if (this.iframe?.contentWindow) {
						this.iframe.contentWindow.postMessage({
							parents: event.data.parents,
							content: event.data.content
						}, '*');
					}
				} else if (event.data.copy) {
					await this.copy(this.copyDeepEvent, event.data.copy, event.data.html);
					const clipboardItems = await navigator.clipboard.read();
					console.log('clipboardItems', clipboardItems);
					for (const item of clipboardItems) {
						if (item.types.includes('text/html')) {
							const blobHTML = await item.getType('text/html');
							const htmlText = await blobHTML.text();
							console.log('htmlText', htmlText);
							const doc = new DOMParser()
								.parseFromString(htmlText, 'text/html');
							const preElement = doc.querySelector('pre');
							const json = JSON.parse(preElement.textContent);
							console.log('Parsed JSON from clipboard:', json);
							const codeElement = doc.querySelector('code');
							console.log('Parsed component from clipboard:', codeElement.innerHTML);
						}
						if (item.types.includes('text/plain')) {
							const blobText = await item.getType('text/plain');
							const htmlText = await blobText.text();
							console.log('plain text', htmlText);
						}
					}
				}
			},
			async copy(event, text, html = '') {
				try {
					if (!html) {
						await navigator.clipboard.writeText(text);
					} else {
						await navigator.clipboard.write([new ClipboardItem({
							'text/plain': new Blob([text], {
								type: 'text/plain'
							}),
							'text/html': new Blob([html], {
								type: 'text/html'
							})
						})]);
					}
					if (!event) return;
					const message = 'Copied!';
					const color = `color-mix(in oklch, var(--color-neutral) 90%, ${this.theme !== 'dark' ? 'black' : 'white'})`;
					const backgroundColor = `color-mix(in oklch, var(--color-neutral) 40%, ${this.theme !== 'dark' ? 'white' : 'black'})`;
					const target = event.target;
					const rect = target.getBoundingClientRect();
					const msg = document.createElement('div');
					msg.innerText = message;
					Object.assign(msg.style, {
						position: 'fixed',
						left: `${rect.left + rect.width / 2}px`,
						top: `${rect.top - 20}px`,
						transform: 'translate(-50%, -50%)',
						color,
						backgroundColor,
						borderRadius: '6px',
						padding: '4px 8px',
						zIndex: 9999,
						transition: 'all 1.9s ease',
						pointerEvents: 'none',
						opacity: '1',
						fontSize: '14px'
					});
					document.body.appendChild(msg);
					void msg.offsetWidth;
					msg.style.top = `${rect.top - 70}px`;
					msg.style.opacity = '0';
					setTimeout(() => {
						msg.remove();
					}, 1900);
				} catch (err) {
					alert('Could not copy to clipboard');
					console.error('Failed to copy text:', err);
				}
			},
			async copyDeep(event) {
				this.copyDeepEvent = event;
				this.iframe.contentWindow.postMessage({
					deepCopy: true
				}, '*');
			},
			async download(url) {
				const response = await fetch(url, {
					headers: {
						Authorization: `Bearer ${this.account?.accessToken}`
					}
				});
				const blob = await response.blob();
				const a = document.createElement('a');
				a.href = URL.createObjectURL(blob);
				a.download = this.slug + '.mjs';
				document.body.appendChild(a);
				a.click();
				a.remove();
				URL.revokeObjectURL(a.href);
			},
			async checkReadAccess() {
				try {
					const response = await fetch(`https://manager.vueplay.io/applications?slug=${this.slug}&strict=true`, {
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					const apps = await response.json();
					this.readAccess = apps?.data?.length ? true : false;
					if (this.readAccess) {
						this.component = apps?.data?.[0];
					}
				} catch (e) {
					this.readAccess = false;
					console.log('Could not check read access', e);
				}
			},
			async getComponent() {
				const res = await fetch(`https://manager.vueplay.io/applications?slug=${this.slug}`, {
					headers: {
						Authorization: `Bearer ${this.account?.accessToken}`
					}
				});
				const apps = await res.json();
				this.component = apps?.data?.[0];
			},
			normalize(input) {
				return input.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/[^a-zA-Z]/g, '');
			},
			async loadIframes() {
				const {
					componentURL,
					controls,
					analyze,
					vueName
				} = await loadComponents(this);
				this.analyze = analyze;
				const [blobUrl, blobUrlControls, blobUrlSlots] = await Promise.all([loadPreview({
					componentURL,
					scope: this,
					controls,
					analyze,
					vueName
				}), loadControls({
					componentURL,
					scope: this,
					controls,
					analyze,
					vueName
				}), loadSlots({
					scope: this,
					controls,
					analyze,
					vueName
				})]);
				this.blobUrl = blobUrl;
				this.blobUrlControls = blobUrlControls;
				this.blobUrlSlots = blobUrlSlots;
			},
			async loadComponent(url = `https://manager.vueplay.io/${this.slug}@${this.version || this.component?.latest_version || 'latest'}/esm`) {
				if (typeof window !== 'undefined') return this.loadIframes();
				if (this.component?.type !== 'vue-sfc' && !this.version) return;
				try {
					const response = await fetch(url, {
						headers: {
							Authorization: `Bearer ${this.account?.accessToken}`
						}
					});
					let code = await response.text();
					const importRegex = /import\s*{([^}]+)}\s*from\s*["']vue["']/g;
					code = code.replace(importRegex, (_, methodsString) => {
						const methodAliases = methodsString.split(',')
							.map(item => {
								const [method, alias] = item.split(' as ')
									.map(s => s.trim());
								return {
									method,
									alias: alias || method
								};
							});
						const destructureLine = `const { ${[...new Set(methodAliases.map(({
            method
          }) => method))].join(', ')} } = VUE;`;
						const aliasLines = methodAliases.filter(({
								method,
								alias
							}) => method !== alias)
							.map(({
								method,
								alias
							}) => `const ${alias} = ${method};`)
							.join('\n');
						return `${destructureLine}\n${aliasLines}`;
					});
					code = code.replaceAll(';;', ';');
					let exportedName;
					let cleanedCode;
					const matchNamed = code.match(/export\s*{\s*(\w+)\s+as\s+default\s*};?/);
					if (matchNamed) {
						exportedName = matchNamed[1];
						cleanedCode = code.replace(matchNamed[0], '');
					} else {
						const matchDirect = code.match(/export\s+default\s+(\w+);?/);
						if (matchDirect) {
							exportedName = matchDirect[1];
							cleanedCode = code.replace(matchDirect[0], '');
						} else {
							const matchInline = code.match(/export\s+default\s+(.+?);?$/s);
							if (matchInline) {
								const tempVar = '__default_export__';
								exportedName = tempVar;
								cleanedCode = code.replace(matchInline[0], `const ${tempVar} = ${matchInline[1]}`);
							} else {
								throw new Error('Could not find a valid default export');
							}
						}
					}
					const module = new Function('VUE', cleanedCode + `; return ${exportedName}`);
					this.dynamicComponents.push({
						type: 'main',
						component: module(VUE)
					});
				} catch (error) {
					console.error('Failed to load component:', error);
					this.dynamicComponents.push({
						type: 'main',
						component: VUE.defineAsyncComponent(() => import( /* @vite-ignore */ url))
					});
				}
			}
		},
		head() {
			const baseUrl = "https://vueplay.com";
			let title = "Vue Play Market";
			let description = "Explore and discover a wide range of Vue components and applications on the Vue Play Market.";
			let currentUrl = `${baseUrl}${this.$route.fullPath}`;
			if (!this.$route.fullPath && this.version) {
				currentUrl += `/market/${this.category}/${this.slug}/${this.version}`;
			} else if (!this.$route.fullPath) {
				currentUrl += `/market/${this.category}/${this.slug}`;
			}
			if (this.component) {
				title = `${this.component.title} - Vue Play Market`;
				description = this.component.description || `Explore "${this.component.title}" on Vue Play Market.`;
			}
			let imageUrl = `https://manager.vueplay.io/image/${this.slug}`;
			let script = [];
			if (this.component?.price) {
				const price = this.component.price / 100;
				script.push({
					type: 'application/ld+json',
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": this.component.title,
						"description": this.component.description,
						"image": imageUrl,
						"provider": {
							"@type": "Organization",
							"name": "Vue Play",
							"url": "https://vueplay.com",
							"logo": "https://vueplay.com/assets/vueplay-logo-long-fVs74bGe.webp"
						},
						"offers": {
							"@type": "Offer",
							"name": "Professional Plan - Monthly Subscription",
							"price": price,
							"priceCurrency": "USD",
							"availability": "https://schema.org/InStock",
							"url": currentUrl
						},
						"areaServed": {
							"@type": "Place",
							"name": "Worldwide"
						},
						"category": "Software",
						"termsOfService": "https://vueplay.com/terms-of-service",
						"brand": {
							"@type": "Brand",
							"name": "Vue Play",
							"url": "https://vueplay.com"
						}
					})
				});
			}
			return {
				title: title,
				meta: [{
					hid: 'description',
					name: 'description',
					content: description
				}, {
					hid: 'og:title',
					property: 'og:title',
					content: title
				}, {
					hid: 'og:description',
					property: 'og:description',
					content: description
				}, {
					hid: 'og:type',
					property: 'og:type',
					content: 'website'
				}, {
					hid: 'og:url',
					property: 'og:url',
					content: currentUrl
				}, {
					hid: 'og:image',
					property: 'og:image',
					content: imageUrl
				}, {
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					hid: 'twitter:title',
					name: 'twitter:title',
					content: title
				}, {
					hid: 'twitter:description',
					name: 'twitter:description',
					content: description
				}, {
					hid: 'twitter:image',
					name: 'twitter:image',
					content: imageUrl
				}],
				link: [{
					hid: 'canonical',
					rel: 'canonical',
					href: currentUrl
				}],
				script
			};
		}
	};

</script>
<style scoped>
	@media (max-width: 1024px) {
		iframe {
			aspect-ratio: 1/2 !important;
		}
	}

	.loader {
		transform: rotateZ(45deg);
		perspective: 1000px;
		border-radius: 50%;
		width: 48px;
		height: 48px;
		color: #fff;
	}

	.loader:before,
	.loader:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: inherit;
		height: inherit;
		border-radius: 50%;
		transform: rotateX(70deg);
		animation: 1s spin linear infinite;
	}

	.loader:before {
		color: #697C8C;
	}

	.loader:after {
		color: #27A575;
		transform: rotateY(70deg);
		animation-delay: .4s;
	}

	@keyframes rotate {
		0% {
			transform: translate(-50%, -50%) rotateZ(0deg);
		}

		100% {
			transform: translate(-50%, -50%) rotateZ(360deg);
		}
	}

	@keyframes rotateccw {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}

		100% {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}

	@keyframes spin {

		0%,
		100% {
			box-shadow: .2em 0px 0 0px currentcolor;
		}

		12% {
			box-shadow: .2em .2em 0 0 currentcolor;
		}

		25% {
			box-shadow: 0 .2em 0 0px currentcolor;
		}

		37% {
			box-shadow: -.2em .2em 0 0 currentcolor;
		}

		50% {
			box-shadow: -.2em 0 0 0 currentcolor;
		}

		62% {
			box-shadow: -.2em -.2em 0 0 currentcolor;
		}

		75% {
			box-shadow: 0px -.2em 0 0 currentcolor;
		}

		87% {
			box-shadow: .2em -.2em 0 0 currentcolor;
		}
	}

</style>