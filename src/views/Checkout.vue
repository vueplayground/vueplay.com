<template>
	<Home>
		<template #header="">
			<Header style="position: sticky; top: 0px"></Header>
		</template> <template #default="">
			<Box
				style="justify-content:center;padding:0px;min-height:calc(100vh - 60px)"
				expand="{`default`:{`xs`:{`light`:true}}}"
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
					>Checkout</Title>
					<Title
						style="text-align:center"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Design, develop & launch websites, apps, components, and more —<br />rediscover the joy of building, from syntax to creativity.</Title>
					<Link
						title="Get Started"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`50px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						marginBottom="{`default`:{`xs`:{`light`:`80px`}}}"
						style="position:unset"
					>
					</Link>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						justifyContent="{`default`:{`xs`:{`light`:`center`},`md`:{`light`:`space-between`}}}"
						flexWrap="{`default`:{`md`:{`light`:`nowrap`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`var(--color-secondary)`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							style="max-width:350px"
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
							>Design</Title><Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
							>Build stunning UIs with drag & drop, style controls, and precision.</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`#eb81e9ff`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							style="max-width:350px"
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
							>Develop</Title><Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
							>Develop with ease — from props to logic to layout.</Text>
						</Box>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`#37b6faff`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							flex="{`default`:{`md`:{`light`:`1 1 0`}}}"
							width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`auto`}}}"
							style="max-width:350px"
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
							>Launch</Title><Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
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
						</Box><img
							src="@/assets/screenshot.webp"
							style="border-radius:1px"
						/>
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
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>2.9K+</Title><Text
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
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>2.1K+</Title><Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Websites built with Vue Play</Text>
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
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								fontSize="{`default`:{`xs`:{`light`:`60px`},`lg`:{`light`:`80px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`100px`}}}"
							>418</Title><Text
								fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
								lineHeight="{`default`:{`xs`:{`light`:`25px`}}}"
								fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
								style="text-align:center"
							>Components built with Vue Play</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
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
		inject: ['account'],
		data: () => ({}),
		watch: {
			account() {
				console.log('Account updated', this.account);
			}
		},
		mounted() {
			console.log('account', this.account);
		}
	};

</script>
<style scoped></style>