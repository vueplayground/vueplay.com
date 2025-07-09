<template>
	<Box
		column="{`default`:{`xs`:{`light`:true}}}"
		style="padding:0px;height:100vh;flex:1 1 auto"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, white)`}}}"
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
	>
		<slot name="header">
			<Header style="position:sticky;top:0px"></Header>
		</slot>
		<slot>
			<Box
				style="justify-content:center;padding:0px"
				expand="{`default`:{`xs`:{`light`:true}}}"
			>
				<Box
					column="{`default`:{`xs`:{`light`:true}}}"
					style="padding:0px;align-items:center;justify-content:center"
					contain="{`default`:{`xs`:{`light`:true}}}"
				>
					<Box style="justify-content:center;;padding-top:100px;padding-bottom:100px">
						<Title
							style="text-align:center"
							fontSize="{`default`:{`xs`:{`light`:`20px`},`sm`:{`light`:`30px`},`md`:{`light`:`40px`},`lg`:{`light`:`50px`},`xl`:{`light`:`60px`}}}"
							lineHeight="{`default`:{`xs`:{`light`:`50px`}}}"
							type="{`default`:{`xs`:{`light`:`h1`}}}"
						>Drop anything here ...</Title>
					</Box>
				</Box>
			</Box>
		</slot>
		<slot name="footer">
			<Footer>
			</Footer>
		</slot>
	</Box>
</template>
<script>
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/_templates/arctic/components/Footer.vue';
	import Header from '@/_templates/arctic/components/Header.vue';
	export default {
		components: {
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		data: () => ({})
	};

</script>
<style scoped></style>