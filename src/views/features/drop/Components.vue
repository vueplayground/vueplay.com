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
							>Drop - Components</Text>
						</Box> <Text>
							<div style="margin-bottom:30px">Vue Play comes with a set off built-in components that provide a flexible starting point for building layouts and interfaces:</div>
							<Box
								style="padding:0px;gap:20px"
								marginBottom="{`default`:{`xs`:{`light`:`40px`}}}"
								data-allow-mismatch=""
							>
								<div v-if="!applications?.data?.length">Loading...</div>
								<Box
									v-for="application in applications?.data || []"
									style="padding:0px"
									backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
									color="{`default`:{`xs`:{`light`:`#ffffffff`}}}"
									:title="application.description"
								>
									<div style="display:flex;
    box-sizing: border-box;
    transition: linear all .2s;width:120px;height:80px;
    cursor: pointer;align-content:center;justify-content:center;align-items:center;flex-direction:column">
										<Box
											v-html="application.icon || '<span></span>'"
											style="width:100%;height:50px;padding:0px"
											justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
											alignItems="{`default`:{`xs`:{`light`:`center`}}}"
										></Box><span style="font-size:12px">&lt;{{ application.title }}&gt;</span>
									</div>
								</Box>
							</Box>
						</Text>
						<div style="margin-bottom:30px">This built-in components support responsive breakpoints, enabling mobile-first design that adapts seamlessly to different screen sizes. They also support variation-based styling such as light mode and dark mode, as well as state-based styles like hover, active, current, and focus for the Navigator and Link components.</div>
						<div>Together, these components forms a strong foundation for building responsive, flexible interfaces in Vue Play.</div>
						<h2 style="width:100%;font-size:30px;margin-top:50px;margin-bottom:10px">Custom components</h2>
						<div style="margin-bottom:30px">Whether you're building internal UI libraries or open-sourcing design systems, Vue Play makes it easy to organize and distribute components. You can control visibility by keeping components private, sharing them with specific users or teams, or making them publicly available for broader reuse. Once added to a project, shared components become instantly available in the visual editor for drag-and-drop use—making building interfaces faster, more consistent, and highly collaborative.</div>
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
		inject: ['manager'],
		data: () => ({
			applications: null
		}),
		async mounted() {
			if (!this.applications) await this.getApplications();
		},
		async serverPrefetch() {
			await this.getApplications();
		},
		methods: {
			async getApplications() {
				try {
					const resultApplications = await fetch('https://manager.vueplay.io/applications?$limit=1000&type=vue-sfc&public=true&published=true&requireVersion=true&hidden=false', {
						headers: {
							'Content-Type': 'application/json'
						}
					});
					this.applications = await resultApplications.json();
				} catch (e) {
					console.log('err', e);
					this.applications = null;
				}
			}
		},
		head() {
			const image = "https://vueplay.com/screenshot.png";
			return {
				title: 'Vue Play — Built-in & Custom Components',
				meta: [{
					name: 'description',
					content: 'Explore Vue Play’s flexible built-in components and custom component support for responsive, mobile-first UI design and collaboration.'
				}, {
					property: 'og:title',
					content: 'Vue Play — Built-in & Custom Components'
				}, {
					property: 'og:description',
					content: 'Use Vue Play’s responsive components with light/dark modes and state styles, plus create and share custom components easily.'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					property: 'og:url',
					content: 'https://vueplay.com/features/components'
				}, {
					property: 'og:image',
					content: image
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'Vue Play — Built-in & Custom Components'
				}, {
					name: 'twitter:description',
					content: 'Build responsive, flexible interfaces with Vue Play’s built-in and custom components designed for collaboration and reuse.'
				}, {
					name: 'twitter:image',
					content: image
				}],
				link: [{
					rel: 'canonical',
					href: 'https://vueplay.com/features/components'
				}]
			};
		}
	};

</script>
<style scoped></style>