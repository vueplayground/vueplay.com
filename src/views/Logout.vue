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
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
					justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`96px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
						marginTop="{`default`:{`xs`:{`light`:`-100px`}}}"
					>Good bye 👋🏼</Title>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Home>
</template>
<script>
	import Text from '@vueplayio/text';
	import Home from '@/_templates/arctic/views/Home.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Text: Text,
			Home: Home,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		inject: ['logout'],
		data: () => ({}),
		async mounted() {
			try {
				await this.logout();
				setTimeout(() => {
					this.$router.push('/');
				}, 1500);
			} catch (e) {
				console.log('err', e);
			}
		}
	};

</script>
<style scoped></style>