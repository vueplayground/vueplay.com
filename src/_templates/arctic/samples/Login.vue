<template>
	<Login><template #default="">
			<img
				src="@/_templates/arctic/assets/logo.webp"
				width="100"
				height="100"
				style="margin:auto;margin-top:30px"
			/>
			<Title
				fontSize="{`default`:{`xs`:{`light`:`32px`}}}"
				style="align-self:center;font-weight:300"
			>Login</Title>
			<Box
				column="{`default`:{`xs`:{`light`:true}}}"
				paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
				overflow="{`default`:{`xs`:{`light`:`visible`}}}"
			><label style="margin-bottom:5px;font-weight:200">Username</label><input
					class="rounded p-3 shadow"
					style="color:color-mix(in oklch, var(--color-neutral) 20%, black)"
				/></Box>
			<Box
				column="{`default`:{`xs`:{`light`:true}}}"
				overflow="{`default`:{`xs`:{`light`:`visible`}}}"
			><label style="margin-bottom:5px;font-weight:200">Password</label><input
					class="rounded p-3 shadow"
					type="password"
					style="color:color-mix(in oklch, var(--color-neutral) 20%, black)"
				/></Box>
			<Box column="{`default`:{`xs`:{`light`:true}}}">
				<Link
					route="/"
					title="Login"
					class="shadow-lg hover:shadow-none duration-200 ease-linear transition font-bold rounded-lg p-4"
					style="text-align:center;width:100%;justify-content:center;align-content:center;display:block;font-weight:400"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 40%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`}}}"
					backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 90%, black)`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`16px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`16px`}}}"
				>
				</Link><a
					href="https://vueplay.com"
					target="_blank"
					style="margin-top:20px;font-weight:200"
				>Forgot password</a>
			</Box>
		</template>
		<template #footer="">
			<Footer></Footer>
		</template>
	</Login>
</template>
<script>
	import Login from '@/_templates/arctic/views/Login.vue';
	import Header from '@/_templates/arctic/components/Header.vue';
	import Footer from '@/_templates/arctic/components/Footer.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Link from '@vueplayio/link';
	export default {
		components: {
			Link: Link,
			Login: Login,
			Title: Title,
			Box: Box,
			Header: Header,
			Footer: Footer
		},
		data: () => ({})
	};

</script>
<style scoped></style>