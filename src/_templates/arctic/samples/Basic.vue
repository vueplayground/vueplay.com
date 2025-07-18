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
				>
					<Box style="justify-content:center;">
						<Title
							style="text-align:center"
							fontSize="{`default`:{`xs`:{`light`:`40px`},`sm`:{`light`:`45px`},`md`:{`light`:`50px`},`lg`:{`light`:`60px`},`xl`:{`light`:`70px`}}}"
							lineHeight="{`default`:{`xs`:{`light`:`50px`}}}"
							type="{`default`:{`xs`:{`light`:`h1`}}}"
						>Where quality takes shape</Title>
						<Title
							style="text-align:center;margin-top:30px;font-weight:326"
							type="{`default`:{`xs`:{`light`:`h2`}}}"
							fontSize="{`default`:{`xs`:{`light`:`16px`},`sm`:{`light`:`15px`},`md`:{`light`:`17px`},`lg`:{`light`:`22px`},`xl`:{`light`:`26px`}}}"
							lineHeight="{`default`:{`xs`:{`light`:`27px`}}}"
						>
							Bring your ideas to life with <b style="font-weight:500">Vue Play</b>, a powerful and intuitive builder.
						</Title>
					</Box>
					<Box
						style="justify-content:center;"
						paddingRight="{`default`:{`xs`:{`light`:`0px`}}}"
						paddingLeft="{`default`:{`xs`:{`light`:`0px`}}}"
						gap="{`default`:{`xs`:{`light`:`20px`},`sm`:{`light`:`30px`}}}"
					>
						<a
							class="w-40 hover:shadow-none shadow-lg duration-200 ease-linear transition font-bold text-white rounded-lg p-4 hover:bg-emerald-500 bg-emerald-400"
							style="text-align:center"
							target="_blank"
							href="https://vueplay.com"
						>Start Journey</a> <router-link
							class="w-40 hover:bg-fuchsia-700 bg-fuchsia-600 hover:shadow-none shadow-lg duration-200 ease-linear transition font-bold text-white rounded-lg p-4"
							style="text-align:center"
							to="/dashboard"
						>Dashboard</router-link>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Basic>
</template>
<script>
	import Basic from '@/_templates/arctic/views/Basic.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/_templates/arctic/components/Footer.vue';
	import Header from '@/_templates/arctic/components/Header.vue';
	export default {
		components: {
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