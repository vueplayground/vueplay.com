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
					marginBottom="{`default`:{`xs`:{`light`:`50px`}}}"
				>
					<Box
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						border="{`default`:{`xs`:{`light`:`1px solid #0002`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 0%, black)`}}}"
					><input
							v-model="term"
							style="padding:13px 15px;font-size:22px;width:100%;background-color:transparent;border-radius:8px;"
							:placeholder="`Search in category '${category}' ...`"
						/> </Box>
					<Box
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`60px`}}}"
						gap="{`default`:{`xs`:{`light`:`30px`}}}"
					>
						<div
							v-if="!components?.data?.length"
							style="padding: 5px"
						>
							No results found.
						</div><template v-for="component in components?.data || []">
							<Box
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`,`dark`:`color-mix(in oklch, var(--color-primary) 80%, black)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 80%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 70%, black)`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								@click="$router.push(`/market/${category || 'all'}/${component.slug}${component?.latest_version ? ('/' + component?.latest_version) : ''}`)"
								column="{`default`:{`xs`:{`light`:true}}}"
								flex="{`default`:{`xs`:{`light`:`0 0 calc((100% - 1 * 30px) / 2)`},`sm`:{`light`:`0 0 calc((100% - 1 * 30px) / 2)`},`lg`:{`light`:`0 0 calc((100% - 2 * 30px) / 3)`},`xl`:{`light`:`0 0 calc((100% - 3 * 30px) / 4)`}}}"
								style="flex-grow:0;cursor:pointer;position:relative;transition:.2s linear all"
								overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								fontSize="{`default`:{`xs`:{`light`:`14px`},`md`:{`light`:`18px`}}}"
								v-if="component?.type !== 'vue-sfc' || component?.versions?.length"
							>
								<div style="width:100%;position:absolute;left:0px;bottom:0px;color:color-mix(in oklch, var(--color-primary) 40%, white)">
									<div
										style="padding:3px 6px;color:#fffcfcff;background-color:#00a6ffe6"
										v-if="component?.price"
									>{{ '$' + (component?.price / 100) }}.00</div>
									<div style="padding:6px;background-color:color-mix(in oklch, var(--color-primary) 60%, black);text-align:center;text-transform:capitalize">{{ typeName(component?.type) }}</div>
								</div>
								<Title
									style="width:100%;overflow:hidden;text-overflow:ellipsis;text-align:center;font-weight:500;max-height:27px;white-space:nowrap"
									:title="component.title"
								>{{component.title}} </Title>
								<Title
									style="width:100%;overflow:visible;text-align:center;font-weight:300;height:0px"
									:title="component.title"
								>{{component.latest_version}}</Title>
								<Box
									v-html="component?.icon?.startsWith('<svg') ? component.icon : '<div></div>'"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`80%`}}}"
									style="aspect-ratio:16/9;background-size:cover;background-repeat:no-repeat;background-position:center"
									overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
									justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									:style="{
backgroundImage: component.icon?.startsWith('<svg') ? undefined : 'url(' + component.icon + ')'
}"
									v-if="component.icon"
									margin="{`default`:{`xs`:{`light`:`30px 0px 40px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
								></Box>
								<Box
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`80%`}}}"
									style="aspect-ratio:1/1;background-size:contain;background-repeat:no-repeat;background-position:center"
									overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
									justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									v-else-if="!component?.icon"
									marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
								><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										xml:space="preserve"
										style="width:50%"
										v-if="component?.type === 'vue-sfc'"
									>
										<path
											d="m25.2 20.9-.7-.7 3.5-3.5-4.2-4.2-.7.7c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l.7-.7L15.3 4l-3.5 3.5-.7-.7C9.9 5.6 8 5.6 6.8 6.8s-1.2 3.1 0 4.2l.7.7L4 15.3l4.2 4.2.7-.7c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-.7.7 4.2 4.2 3.5-3.5.7.7c1.2 1.2 3.1 1.2 4.2 0 1.4-1.1 1.4-3 .2-4.2"
											style="fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
										/>
									</svg><svg
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										v-else-if="component?.type !== 'vue-sfc'"
										style="width:40%"
									>
										<path
											fill="none"
											stroke="#fff"
											stroke-width="2"
											d="M1 3h22v18H1zm0 5h22M7 8v13"
										/>
									</svg></Box>
							</Box>
							<Box
								backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-danger) 80%, white)`,`dark`:`color-mix(in oklch, var(--color-danger) 80%, white)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-danger) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-danger) 90%, white)`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
								@click="$router.push(`/market/${category || 'all'}/${component.slug}${component?.latest_version ? ('/' + component?.latest_version) : ''}`)"
								column="{`default`:{`xs`:{`light`:true}}}"
								flex="{`default`:{`xs`:{`light`:`0 0 calc((100% - 1 * 30px) / 2)`},`sm`:{`light`:`0 0 calc((100% - 1 * 30px) / 2)`},`lg`:{`light`:`0 0 calc((100% - 2 * 30px) / 3)`},`xl`:{`light`:`0 0 calc((100% - 3 * 30px) / 4)`}}}"
								style="flex-grow:0;cursor:pointer;position:relative;transition:.2s linear all"
								overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
								alignItems="{`default`:{`xs`:{`light`:`center`}}}"
								fontSize="{`default`:{`xs`:{`light`:`14px`},`md`:{`light`:`18px`}}}"
								v-else-if="component?.type === 'vue-sfc' && !component?.versions?.length"
							>
								<div style="width:100%;position:absolute;left:0px;bottom:0px;color:color-mix(in oklch, var(--color-primary) 40%, white)">
									<div
										style="padding:3px 6px;background-color:var(--color-warning);color:#fffcfcff"
										v-if="component?.price"
									>{{ '$' + (component?.price / 100) }}.00</div>
									<div style="padding:6px;background-color:color-mix(in oklch, var(--color-primary) 60%, black);text-align:center;text-transform:capitalize">{{ typeName(component?.type) }}</div>
								</div>
								<Title
									style="width:100%;overflow:hidden;text-overflow:ellipsis;text-align:center;font-weight:500;max-height:27px;white-space:nowrap"
									:title="component.title"
								>{{component.title}}</Title>
								<Box
									v-html="component?.icon?.startsWith('<svg') ? component.icon : '<div></div>'"
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`80%`}}}"
									style="aspect-ratio:16/9;background-size:cover;background-repeat:no-repeat;background-position:center"
									overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
									justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									:style="{
backgroundImage: component.icon?.startsWith('<svg') ? undefined : 'url(' + component.icon + ')'
}"
									v-if="component.icon"
									margin="{`default`:{`xs`:{`light`:`30px 0px 40px`}}}"
									borderRadius="{`default`:{`xs`:{`light`:`4px`}}}"
								></Box>
								<Box
									padding="{`default`:{`xs`:{`light`:`0px`}}}"
									width="{`default`:{`xs`:{`light`:`80%`}}}"
									style="aspect-ratio:1/1;background-size:contain;background-repeat:no-repeat;background-position:center"
									overflow="{`default`:{`xs`:{`light`:`hidden`}}}"
									justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
									alignItems="{`default`:{`xs`:{`light`:`center`}}}"
									v-else-if="!component?.icon"
									marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
								><svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 32 32"
										xml:space="preserve"
										style="width:50%"
										v-if="component?.type === 'vue-sfc'"
									>
										<path
											d="m25.2 20.9-.7-.7 3.5-3.5-4.2-4.2-.7.7c-1.2 1.2-3.1 1.2-4.2 0-1.2-1.2-1.2-3.1 0-4.2l.7-.7L15.3 4l-3.5 3.5-.7-.7C9.9 5.6 8 5.6 6.8 6.8s-1.2 3.1 0 4.2l.7.7L4 15.3l4.2 4.2.7-.7c1.2-1.2 3.1-1.2 4.2 0 1.2 1.2 1.2 3.1 0 4.2l-.7.7 4.2 4.2 3.5-3.5.7.7c1.2 1.2 3.1 1.2 4.2 0 1.4-1.1 1.4-3 .2-4.2"
											style="fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10"
										/>
									</svg><svg
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
										v-else-if="component?.type !== 'vue-sfc'"
										style="width:40%"
									>
										<path
											fill="none"
											stroke="#fff"
											stroke-width="2"
											d="M1 3h22v18H1zm0 5h22M7 8v13"
										/>
									</svg></Box>
							</Box>
						</template>
					</Box>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer style="width: 100%"></Footer>
		</template>
	</Dashboard>
</template>
<script>
	import { useSSRContext } from 'vue'
	import Link from '@vueplayio/link';
	import Dashboard from '@/_templates/arctic/views/Dashboard.vue';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	import Sidebar from '@/components/SidebarMarket.vue';
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
		props: {
			category: {
				type: String,
				default: 'all'
			}
		},
		inject: ['manager', 'account'],
		data: () => ({
			components: null,
			term: ''
		}),
		async mounted() {
			if (this.components) return
			await this.getComponents();
		},
		async serverPrefetch() {
			await this.getComponents();
		},
		watch: {
			async category() {
				await this.getComponents();
			},
			async term() {
				await this.search();
			}
		},
		computed: {
			type() {
				if (this.category === 'components') return 'vue-sfc';
				if (this.category === 'templates') return 'vue-template';
				return '';
			}
		},
		methods: {
			typeName(type) {
				if (type === 'vue-sfc') return 'component';
				if (type === 'vue-app') return 'application';
				if (type === 'vue-template') return 'template';
				return type;
			},
			async getComponents() {
				if (this.account) return this.search();
				let query = 'https://manager.vueplay.io/applications?$limit=1000&public=true&published=true&hidden=false&$sort[updated_at]=-1';
				if (this.type) query += '&type=' + this.type;
				if (this.category === 'priced') query += '&price[$gt]=0';
				const res = await fetch(query);
				this.components = await res.json();
			},
			async search() {
				const query = {
					$limit: 1000,
					$sort: {
						updated_at: -1
					},
					title: {
						$like: '%' + this.term + '%'
					}
				};
				if (this.type) query.type = this.type;
				if (this.category === 'priced') query.price = {
					$gt: 0
				};
				if (this.category === 'me' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
				} else if (this.category === 'in-review-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.public = true;
					query.published = false;
				} else if (this.category === 'in-review' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = true;
					query.published = false;
				} else if (this.category === 'hidden-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.hidden = true;
				} else if (this.category === 'published' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = true;
					query.published = true;
				} else if (this.category === 'hidden' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.hidden = true;
				} else if (this.category === 'purchases' && this.account) {
					const apps = await this.manager.service('application_purchases')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					const appIds = apps?.data.map(app => app.application_id) || [];
					query.id = {
						$in: appIds || []
					};
					query.includeArchived = true;
				} else if (this.category === 'private' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.public = false;
				} else if (this.category === 'private-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.public = false;
				} else if (this.category === 'archived' && this.account) {
					const componentsUser = await this.manager.service('application_users')
						.find({
							query: {
								user_id: this.account.user.id,
								$limit: 1000
							}
						});
					query.id = {
						$in: componentsUser?.data?.map(c => c.application_id) || []
					};
					query.archived_at = {
						$gt: '0000-01-01'
					};
				} else if (this.category === 'archived-all' && this.account?.authentication?.payload?.global_roles?.includes('admin')) {
					query.archived_at = {
						$gt: '0000-01-01'
					};
				} else {
					query.public = true;
					query.published = true;
					query.hidden = false;
				}
				this.components = await this.manager.service('applications')
					.find({
						query
					});
			}
		},
		head() {
			const baseUrl = "https://vueplay.com";
			const imageUrl = `${baseUrl}/screenshot.png`; // Using the provided image URL

			let title = "Vue Play Market";
			let description = "Explore and discover a wide range of Vue components and applications on the Vue Play Market.";
			let currentUrl = `${baseUrl}/market`;

			// Customize title and description based on category
			if (this.category && this.category !== 'all') {
				const categoryName = this.typeName(this.type || this.category);
				title = `Vue Play Market - ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}s`;
				description = `Browse ${categoryName}s on the Vue Play Market. Find the perfect ${categoryName} for your next Vue project.`;
				currentUrl = `${baseUrl}/market/${this.category}`;
			}

			// Add search term to description if present
			if (this.term) {
				description += ` Search results for "${this.term}".`;
			}

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
					content: currentUrl
				}, {
					property: 'og:image',
					content: imageUrl
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
					content: imageUrl
				}],
				link: [{
					rel: 'canonical',
					href: currentUrl
				}]
			};
		}
	};

</script>