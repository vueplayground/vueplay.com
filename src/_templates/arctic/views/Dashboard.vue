<template>
	<Box
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
		style="padding: 0px;overflow:auto"
		column="{`default`:{`xs`:{`light`:true}}}"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, white)`}}}"
	>
		<Box
			:height="'{`default`:{`xs`:{`light`:`' + headerHeight + 'px`}}}'"
			style="position: sticky; top: 0px; overflow: visible; padding: 0px;z-index:11"
		>
			<slot name="header">
				<Header style="width:100%;z-index:10"></Header>
			</slot>
		</Box>
		<Box
			style="padding: 0px"
			:style="{top: 102 + 'px'}"
			width="{`default`:{`xs`:{`light`:`100%`},`md`:{`light`:`200px`}}}"
			:height="'{`default`:{`md`:{`light`:`calc(100% - ' + headerHeight + 'px)`}}}'"
			overflow="{`default`:{`md`:{`light`:`auto`}}}"
			position="{`default`:{`xs`:{`light`:`sticky`},`md`:{`light`:`fixed`}}}"
			class="md:z-10 md:shadow"
		>
			<slot name="sidebar">
				<Sidebar
					style="width:100%;z-index:5"
					class="md:shadow"
				></Sidebar>
			</slot>
		</Box>
		<Box
			style="padding: 0px"
			:height="'{`default`:{`md`:{`light`:`calc(100% - ' + headerHeight + 'px)`}}}'"
			column="{`default`:{`xs`:{`light`:true},`md`:{`light`:false}}}"
			expand="{`default`:{`xs`:{`light`:true}}}"
			overflow="{`default`:{`xs`:{`light`:`visible`}}}"
			backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
		>
			<Box
				style="padding: 0px;;min-width:0px"
				expand="{`default`:{`xs`:{`light`:true}}}"
				column="{`default`:{`xs`:{`light`:true}}}"
				height="{`default`:{`md`:{`light`:`100%`}}}"
				overflow="{`default`:{`md`:{`light`:`visible`}}}"
				marginLeft="{`default`:{`md`:{`light`:`200px`}}}"
			>
				<slot>
					<Box
						expand="{`default`:{`xs`:{`light`:true}}}"
						style="align-items:center;overflow:hidden"
					>
						<Title
							style="text-align:center;width:100%"
							fontSize="{`default`:{`xs`:{`light`:`20px`},`sm`:{`light`:`30px`},`md`:{`light`:`40px`},`lg`:{`light`:`50px`},`xl`:{`light`:`60px`}}}"
							type="{`default`:{`xs`:{`light`:`h1`}}}"
							paddingTop="{`default`:{`xs`:{`light`:`100px`}}}"
							paddingBottom="{`default`:{`xs`:{`light`:`100px`}}}"
						>Drop anything here ...</Title>
					</Box>
				</slot>
				<Box style="min-height:100px;padding:0px">
					<slot name="footer">
						<Footer style="width:100%"></Footer>
					</slot>
				</Box>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Title from '@vueplayio/title';
	import Footer from '@/_templates/arctic/components/Footer.vue';
	import Header from '@/_templates/arctic/components/Header.vue';
	import Sidebar from '@/_templates/arctic/components/Sidebar.vue';
	import Box from '@vueplayio/box';
	export default {
		props: {
			headerHeight: {
				type: Number,
				default: 96,
				control: 'slider'
			}
		},
		components: {
			Title: Title,
			Footer: Footer,
			Header: Header,
			Sidebar: Sidebar,
			Box: Box
		},
		data: () => ({})
	};

</script>
<style scoped></style>