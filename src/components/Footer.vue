<template>
	<Box
		style="padding:0px;overflow:visible;transition:background-color .3s linear;justify-content:center"
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 60%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 60%, white)`}}}"
	>
		<Box
			contain="{`default`:{`xs`:{`light`:true}}}"
			style="justify-content:center"
		>
			<Box
				contain="{`default`:{`xs`:{`light`:true}}}"
				style="padding:0px 40px;line-height:40px"
				justifyContent="{`default`:{`sm`:{`light`:`space-between`}}}"
				marginTop="{`default`:{`xs`:{`light`:`60px`},`md`:{`light`:`80px`}}}"
				fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
			>
				<Box
					width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`25%`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`0px`},`sm`:{`light`:`20px`}}}"
					justifyContent="{`default`:{`md`:{`light`:`center`}}}"
					overflow="{`default`:{`xs`:{`light`:`visible`}}}"
				>
					<ul class="indent-2">
						<li>
							<Link
								title="Roadmap"
								route="/roadmap"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
						<li>
							<Link
								title="Release log"
								route="/release-log"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
					</ul>
				</Box>
				<Box
					width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`25%`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`0px`},`sm`:{`light`:`20px`}}}"
					justifyContent="{`default`:{`md`:{`light`:`center`}}}"
					overflow="{`default`:{`xs`:{`light`:`visible`}}}"
				>
					<ul class="indent-2">
						<li>
							<Link
								title="API docs"
								route="/api-documentation"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
						<li>
							<Link
								title="Credits"
								route="/credits"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
					</ul>
				</Box>
				<Box
					width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`25%`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`0px`},`sm`:{`light`:`20px`}}}"
					justifyContent="{`default`:{`md`:{`light`:`center`}}}"
					overflow="{`default`:{`xs`:{`light`:`visible`}}}"
				>
					<ul class="indent-2">
						<li>
							<Link
								title="Discussions"
								route="https://github.com/vueplayground/vueplay.com/discussions"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								external="true"
								target="_blank"
								style="position:unset"
							>
							</Link>
						</li>
						<li>
							<Link
								title="Issues"
								route="https://github.com/vueplayground/vueplay.com/issues"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								external="true"
								target="_blank"
								style="position:unset"
							>
							</Link>
						</li>
					</ul>
				</Box>
				<Box
					width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`25%`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`0px`},`sm`:{`light`:`20px`}}}"
					justifyContent="{`default`:{`md`:{`light`:`center`}}}"
					overflow="{`default`:{`xs`:{`light`:`visible`}}}"
				>
					<ul class="indent-2">
						<li>
							<Link
								title="Terms of service"
								route="/terms-of-service"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
						<li>
							<Link
								title="Privacy policy"
								route="/privacy-policy"
								color="{`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
								style="position:unset"
							>
							</Link>
						</li>
					</ul>
				</Box>
			</Box>
			<Box
				contain="{`default`:{`xs`:{`light`:true}}}"
				style="justify-content:center;padding-top:40px"
				paddingTop="{`default`:{`xs`:{`light`:`10px`}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`20px`}}}"
			>
				<hr style="width:100%" />
			</Box>
			<Box
				contain="{`default`:{`xs`:{`light`:true}}}"
				style="justify-content:center"
				paddingTop="{`default`:{`xs`:{`light`:`50px`}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`80px`}}}"
				fontSize="{`default`:{`xs`:{`light`:`14px`}}}"
			>
				<p
					style="font-weight:100"
					data-allow-mismatch=""
				>© Copyright {{new Date().getFullYear()}} - Siglar Development AS</p>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Link from '@vueplayio/link';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
			Title: Title,
			Box: Box
		},
		data: () => ({})
	};

</script>
<style scoped></style>