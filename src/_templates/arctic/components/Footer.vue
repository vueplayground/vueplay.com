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
				style="justify-content:center"
				paddingTop="{`default`:{`xs`:{`light`:`50px`}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`60px`}}}"
			>
				<Title
					type="{`default`:{`xs`:{`light`:`h2`}}}"
					fontSize="{`default`:{`xs`:{`light`:`20px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`548`}}}"
				>Footer</Title>
			</Box>
			<Box
				contain="{`default`:{`xs`:{`light`:true}}}"
				style="padding:0px 40px;line-height:40px"
				justifyContent="{`default`:{`sm`:{`light`:`space-between`}}}"
			>
				<Box width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`auto`}}}">
					<ul class="indent-2">
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
					</ul>
				</Box>
				<Box width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`auto`}}}">
					<ul class="indent-2">
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
					</ul>
				</Box>
				<Box width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`auto`}}}">
					<ul class="indent-2">
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
					</ul>
				</Box>
				<Box width="{`default`:{`xs`:{`light`:`100%`},`sm`:{`light`:`auto`}}}">
					<ul class="indent-2">
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
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
			>
				<p
					style="font-weight:100"
					data-allow-mismatch=""
				>© Copyright {{new Date().getFullYear()}} - Your Company</p>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Title: Title,
			Box: Box
		},
		data: () => ({})
	};

</script>
<style scoped></style>