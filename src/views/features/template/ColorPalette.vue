<template>
	<Dashboard headerHeight="96">
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%;z-index:10"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position: sticky; top: 0px; width: 100%;z-index:5"></Sidebar>
		</template> <template #default="">
			<Box
				expand="{`default`:{`xs`:{`light`:true}}}"
				justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
				style="padding-bottom:80px"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					column="{`default`:{`xs`:{`light`:true}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
					style="width:100%;padding:0px"
				>
					<Box
						contain="{`default`:{`xs`:{`light`:true}}}"
						column="{`default`:{`xs`:{`light`:true}}}"
						marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
						paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
						paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
						style="width:100%"
					>
						<Box
							style="border-bottom-width:2px"
							borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 90%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 90%, black)`}}}"
							paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
							paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
							paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
							marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
							paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
						>
							<Text
								type="{`default`:{`xs`:{`dark`:`h1`}}}"
								fontSize="{`default`:{`xs`:{`light`:`30px`},`lg`:{`light`:`35px`}}}"
								class="hash"
							>Templating - Color Palette</Text>
						</Box> <Text>
							<p>Vue Play comes with a thoughtfully designed color system featuring primary, secondary, neutral, transparent, info, success, warning, and danger palettes by default — each with 9 automatically generated shades. Simply define a base color for each palette in your global CSS, and the full spectrum will be instantly available in the dropdown swatches across your controllers.</p>
						</Text>
					</Box>
					<Box
						contain="{`default`:{`xs`:{`light`:true}}}"
						style="padding:0px;width:100%"
						column="{`default`:{`xs`:{`light`:true},`xl`:{`light`:false}}}"
					>
						<Box
							expand="{`default`:{`xs`:{`light`:true},`xl`:{`light`:false}}}"
							style="font-weight:400;letter-spacing:2px;box-sizing:border-box"
							fontSize="{`default`:{`xs`:{`light`:`10px`},`sm`:{`light`:`14px`},`lg`:{`light`:`18px`},`xl`:{`light`:`14px`}}}"
							width="{`default`:{`xl`:{`light`:`50%`}}}"
						>
							<Box
								style="padding:0px"
								width="{`default`:{`xs`:{`light`:`50%`}}}"
							>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-primary)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Primary</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-primary);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-primary) 20%, white);aspect-ratio:1.3/1;border-bottom-left-radius:6px;border-bottom-right-radius:6px"></div>
								</Box>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-secondary)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Secondary</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-secondary);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-secondary) 20%, white);aspect-ratio:1.3/1;border-bottom-right-radius:6px;border-bottom-left-radius:6px"></div>
								</Box>
							</Box>
							<Box
								style="padding:0px"
								width="{`default`:{`xs`:{`light`:`50%`},`md`:{`light`:`50%`}}}"
							>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-neutral)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Neutral</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-neutral);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-neutral) 20%, white);aspect-ratio:1.3/1;border-bottom-right-radius:6px;border-bottom-left-radius:6px"></div>
								</Box>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-neutral)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Transparent</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-transparent);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-transparent) 20%, white);aspect-ratio:1.3/1;border-bottom-right-radius:6px;border-bottom-left-radius:6px"></div>
								</Box>
							</Box>
						</Box>
						<Box
							expand="{`default`:{`xs`:{`light`:true},`xl`:{`light`:false}}}"
							style="font-weight:400;letter-spacing:2px;box-sizing:border-box"
							fontSize="{`default`:{`xs`:{`light`:`10px`},`sm`:{`light`:`14px`},`lg`:{`light`:`18px`},`xl`:{`light`:`14px`}}}"
							width="{`default`:{`xl`:{`light`:`50%`}}}"
						>
							<Box
								style="padding:0px"
								width="{`default`:{`xs`:{`light`:`50%`},`md`:{`light`:`50%`}}}"
							>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-info)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Info</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-info);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-info) 20%, white);aspect-ratio:1.3/1;border-bottom-left-radius:6px;border-bottom-right-radius:6px"></div>
								</Box>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-success)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Success</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-success);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-success) 20%, white);aspect-ratio:1.3/1;border-bottom-left-radius:6px;border-bottom-right-radius:6px"></div>
								</Box>
							</Box>
							<Box
								style="padding:0px"
								width="{`default`:{`xs`:{`light`:`50%`},`md`:{`light`:`50%`}}}"
							>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-warning)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Warning</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 20%, black);aspect-ratio:1.3/1;border-top-right-radius:6px;border-top-left-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-warning);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-warning) 20%, white);aspect-ratio:1.3/1;border-bottom-right-radius:6px;border-bottom-left-radius:6px"></div>
								</Box>
								<Box
									column="{`default`:{`xs`:{`light`:true}}}"
									style="flex-basis:0%;overflow:hidden"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								>
									<Title
										style="text-align:center;color:var(--color-danger)"
										marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
										type="{`default`:{`xs`:{`light`:`h3`}}}"
									>Danger</Title>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 20%, black);aspect-ratio:1.3/1;border-top-left-radius:6px;border-top-right-radius:6px"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 40%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 60%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 80%, black);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:var(--color-danger);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 80%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 60%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 40%, white);aspect-ratio:1.3/1"></div>
									<div style="width:100%;background-color:color-mix(in oklch, var(--color-danger) 20%, white);aspect-ratio:1.3/1;border-bottom-right-radius:6px;border-bottom-left-radius:6px"></div>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/Sidebar.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Text: Text,
			Dashboard: Dashboard,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header,
			Sidebar: Sidebar
		},
		data: () => ({}),
		head() {
			const image = "https://vueplay.com/screenshot.png";
			return {
				title: 'Vue Play — Templating & Color Palette',
				meta: [{
					name: 'description',
					content: 'Discover Vue Play’s color system with primary, secondary, neutral, and transparent palettes featuring generated shades.'
				}, {
					property: 'og:title',
					content: 'Vue Play — Templating & Color Palette'
				}, {
					property: 'og:description',
					content: 'Explore a versatile color palette designed for Vue Play, including primary, secondary, neutral, and transparent colors.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/features/templating/color-palette'
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play — Templating & Color Palette'
				}, {
					name: 'twitter:description',
					content: 'Explore Vue Play’s thoughtfully designed color system and its automatic shade generation.'
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/features/templating/color-palette'
				}]
			};
		}
	};

</script>
<style scoped></style>