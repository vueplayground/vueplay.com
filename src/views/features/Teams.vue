<template>
	<Dashboard
		headerHeight="96"
		style="position:relative"
	>
		<template #header="">
			<Header style="position: sticky; top: 0px; width: 100%"></Header>
		</template> <template #sidebar="">
			<Sidebar style="position:sticky; top: 0px; width: 100%"></Sidebar>
		</template> <template #default="">
			<Box
				expand="{`default`:{`xs`:{`light`:true}}}"
				justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					style="padding-bottom:100px"
					column="{`default`:{`xs`:{`light`:true}}}"
					marginTop="{`default`:{`xs`:{`light`:`40px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`0px`}}}"
					paddingRight="{`default`:{`lg`:{`light`:`40px`}}}"
					paddingLeft="{`default`:{`lg`:{`light`:`40px`}}}"
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
						>Teams</Text>
					</Box> <Text>
						<div style="margin-bottom:20px">Vue Play also supports the creation of Teams, which function in much the same way as projects. Teams provide a collaborative environment where you can organize and manage applications, components, and users. Like projects, teams allow for easy sharing of resources across different members, facilitating teamwork and coordination. Whether you're working within a single team or collaborating across multiple teams, Vue Play makes it simple to share components and applications, ensuring smooth collaboration and efficient management of your assets.</div> <img
							src="@/assets/teams.png"
							style="width:100%;max-width:700px;border-radius:10px"
						/>
					</Text>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import Link from '@vueplayio/link';
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/Sidebar.vue';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
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
			const title = "Vue Play Teams - Collaborate and Manage Projects Seamlessly";
			const description = "Discover how Vue Play Teams enable collaborative management of applications, components, and users. Organize your projects, share resources, and boost teamwork with Vue Play.";
			const url = "https://vueplay.com/features/teams";
			const image = "https://vueplay.com/screenshot.png";
			return {
				title: title,
				meta: [{
					name: 'description',
					content: description
				}, {
					property: 'og:title',
					content: title
				}, {
					property: 'og:description',
					content: description
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: url
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: title
				}, {
					name: 'twitter:description',
					content: description
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: url
				}]
			};
		}
	};

</script>
<style scoped></style>