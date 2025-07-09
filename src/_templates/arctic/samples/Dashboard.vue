<template>
	<Dashboard headerHeight="96">
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%;z-index:10"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position: sticky; top: 0px; width: 100%"></Sidebar>
		</template> <template #default="">
			<Box
				style="padding:0px;min-height:200px;padding-bottom:100px"
				expand="{`default`:{`xs`:{`light`:true}}}"
			>
				<Box
					column="{`default`:{`xs`:{`light`:true},`md`:{`light`:false}}}"
					expand="{`default`:{`xs`:{`light`:true}}}"
					width="{`default`:{`xs`:{`light`:`100%`}}}"
					gap="{`default`:{`xs`:{`light`:`20px`}}}"
				>
					<Box
						column="{`default`:{`md`:{`light`:true}}}"
						gap="{`default`:{`xs`:{`light`:`20px`}}}"
						style="padding:0px"
					>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						>
							<Title
								type="{`default`:{`md`:{`light`:`h2`}}}"
								fontWeight="{`default`:{`md`:{`light`:`550`}}}"
							>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
						</Box>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						>
							<Title
								type="{`default`:{`md`:{`light`:`h2`}}}"
								fontWeight="{`default`:{`md`:{`light`:`550`}}}"
							>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
						</Box>
					</Box>
					<Box
						column="{`default`:{`md`:{`light`:true}}}"
						gap="{`default`:{`xs`:{`light`:`20px`}}}"
						style="padding:0px"
					>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
							style="background-size:cover"
						>
							<Title
								type="{`default`:{`md`:{`light`:`h2`}}}"
								fontWeight="{`default`:{`md`:{`light`:`550`}}}"
							>Title</Title><Text
								fontWeight="{`default`:{`md`:{`light`:`200`}}}"
								style="margin-bottom:10px"
							>Lorem ipsum dolor sit amet</Text><img
								src="@/_templates/arctic/assets/placeholder.svg"
								width="100"
								height="100"
							/>
						</Box>
					</Box>
				</Box>
				<Box
					column="{`default`:{`xs`:{`light`:true},`md`:{`light`:false}}}"
					expand="{`default`:{`xs`:{`light`:true}}}"
					width="{`default`:{`xs`:{`light`:`100%`}}}"
					gap="{`default`:{`xs`:{`light`:`20px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
				>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					>
						<Title
							type="{`default`:{`md`:{`light`:`h2`}}}"
							fontWeight="{`default`:{`md`:{`light`:`550`}}}"
						>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
					</Box>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					>
						<Title
							type="{`default`:{`md`:{`light`:`h2`}}}"
							fontWeight="{`default`:{`md`:{`light`:`550`}}}"
						>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
					</Box>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					>
						<Title
							type="{`default`:{`md`:{`light`:`h2`}}}"
							fontWeight="{`default`:{`md`:{`light`:`550`}}}"
						>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
					</Box>
				</Box>
				<Box
					column="{`default`:{`xs`:{`light`:true},`md`:{`light`:false}}}"
					expand="{`default`:{`xs`:{`light`:true}}}"
					width="{`default`:{`xs`:{`light`:`100%`}}}"
					gap="{`default`:{`xs`:{`light`:`20px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
				>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					>
						<Title
							type="{`default`:{`md`:{`light`:`h2`}}}"
							fontWeight="{`default`:{`md`:{`light`:`550`}}}"
						>Title</Title><Text
							fontWeight="{`default`:{`md`:{`light`:`200`}}}"
							style="margin-bottom:10px"
						>Lorem ipsum dolor sit amet</Text><img
							src="@/_templates/arctic/assets/placeholder.svg"
							width="100"
							height="100"
						/>
					</Box>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
					>
						<Title
							type="{`default`:{`md`:{`light`:`h2`}}}"
							fontWeight="{`default`:{`md`:{`light`:`550`}}}"
						>Title</Title><Text fontWeight="{`default`:{`md`:{`light`:`200`}}}">Lorem ipsum dolor sit amet</Text>
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
	import Footer from '@/_templates/arctic/components/Footer.vue';
	import Header from '@/_templates/arctic/components/Header.vue';
	import Sidebar from '@/_templates/arctic/components/Sidebar.vue';
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
		data: () => ({})
	};

</script>
<style scoped></style>