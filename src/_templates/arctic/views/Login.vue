<template>
	<Box
		column="{`default`:{`xs`:{`light`:true}}}"
		style="padding:0px;height:100vh;flex:1 1 auto;overflow:visible"
		color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, white)`}}}"
		backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
	>
		<slot name="header">
			<Header style="position:sticky;top:0px"></Header>
		</slot>
		<Box
			style="padding:0px;overflow:visible;"
			expand="{`default`:{`xs`:{`light`:true}}}"
			width="{`default`:{`xs`:{`light`:`100%`}}}"
			backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 40%, black)`}}}"
			justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
		>
			<Box
				style="padding:0px;justify-content:center;overflow:visible"
				contain="{`default`:{`xs`:{`light`:true}}}"
				alignItems="{`default`:{`xs`:{`light`:`center`}}}"
			>
				<Box
					style="max-width:400px"
					column="{`default`:{`xs`:{`light`:true}}}"
					margin="{`default`:{`xs`:{`light`:`30px`}}}"
				>
					<slot>
						<Title
							paddingLeft="{`default`:{`xs`:{`light`:`20px`}}}"
							fontSize="{`default`:{`xs`:{`light`:`32px`}}}"
							style="text-align:center"
						>Add anything here ...</Title>
					</slot>
				</Box>
			</Box>
		</Box>
		<slot name="footer">
			<Footer>
			</Footer>
		</slot>
	</Box>
</template>
<script>
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Header from '@/_templates/arctic/components/Header.vue';
	import Footer from '@/_templates/arctic/components/Footer.vue';
	export default {
		components: {
			Title: Title,
			Box: Box,
			Header: Header,
			Footer: Footer
		},
		data: () => ({})
	};

</script>
<style scoped></style>