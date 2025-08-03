<template>
	<Home>
		<template #header="">
			<Header style="position: sticky; top: 0px"></Header>
		</template> <template #default="">
			<Box
				style="justify-content:center;padding:0px;min-height:calc(100vh - 60px)"
				expand="true"
			>
				<Box
					contain="{`default`:{`xs`:{`light`:true}}}"
					column="{`default`:{`xs`:{`light`:true}}}"
					paddingTop="{`default`:{`xs`:{`light`:`100px`}}}"
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`90px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
					>Profile</Title>
					<Title
						style="text-align:center"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Keep your information up to date.</Title>
					<div
						style="width:100px;aspect-ratio:1/1;background-color:var(--color-neutral);background-size:cover;background-position:center center;border-radius:50%;margin-top:35px"
						:style="{ backgroundImage: acc?.user?.picture ? 'url(' + acc.user.picture + ')' : undefined }"
					></div>
					<Box style="max-width:520px">
						<Box
							style="width:100%"
							padding="{`default`:{`xs`:{`light`:`20px 20px 0px`}}}"
							justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						><label style="font-weight:150">Created at {{(new Date(acc?.user?.created_at)).toLocaleString()}}</label></Box>
						<Box
							style="width:100%"
							padding="{`default`:{`xs`:{`light`:`10px 20px 0px`}}}"
							justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						><label style="margin-bottom:5px;font-weight:150">Updated at {{(new Date(acc?.user?.updated_at)).toLocaleString()}}</label></Box>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
						>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Username</label><input
									v-model="acc.user.username"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Username"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">First name</label><input
									v-model="acc.user.first_name"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="First name"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Middle name</label><input
									v-model="acc.user.middle_name"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Middle name"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Last name</label><input
									v-model="acc.user.last_name"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Last name"
								/></Box>
						</Box>
						<Box
							column="{`default`:{`xs`:{`light`:true}}}"
							alignItems="{`default`:{`xs`:{`light`:`center`}}}"
						>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Email {{acc?.user?.email && !acc?.user?.email_verified_at ? '(Unverified)' : ''}}</label><input
									v-model="acc.user.email"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Email"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Phone {{acc?.user?.phone && !acc?.user?.phone_verified_at ? '(Unverified)' : ''}}</label><input
									v-model="acc.user.phone"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Phone"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Picture</label><input
									v-model="acc.user.picture"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="Picture url"
								/></Box>
							<Box
								column="{`default`:{`xs`:{`light`:true}}}"
								padding="{`default`:{`xs`:{`light`:`0px`}}}"
								marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							><label style="margin-bottom:5px;width:200px;font-weight:150">Locale</label><input
									v-model="acc.user.locale"
									style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
									placeholder="My token"
								/></Box>
						</Box>
					</Box>
					<Box marginBottom="{`default`:{`xs`:{`light`:`100px`}}}">
						<Link
							title="Update"
							backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
							padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
							marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
							color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
							borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
							style="width:200px;height:50px"
							@click="save()"
							justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
							tag="button"
						>
						</Link>
					</Box>
					<Title
						style="margin-bottom:20px"
						v-if="acc?.authentication?.payload?.global_roles?.length"
					>Global Roles</Title>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						style="font-weight:500;font-size:18px"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						v-if="acc?.authentication?.payload?.global_roles?.length"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`calc(100vw - 60px)`},`sm`:{`light`:`200px`}}}"
							style="text-align:center;flex-shrink:0;flex-grow:0"
							v-for="role in acc?.authentication?.payload?.global_roles"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
							>{{role}}</Title>
						</Box>
					</Box>
					<Title
						style="margin-top:80px;margin-bottom:20px"
						v-if="acc?.authentication?.payload?.groups?.filter(g => g.type !== 'product-access')?.length"
					>Connected Groups</Title>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						style="font-weight:500;font-size:18px"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						v-if="acc?.authentication?.payload?.groups?.filter(g => g.type !== 'product-access')?.length"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`calc(100vw - 60px)`},`sm`:{`light`:`200px`}}}"
							style="text-align:center;flex-shrink:0;flex-grow:0"
							v-for="group in acc?.authentication?.payload?.groups?.filter(g => g.type !== 'product-access')"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
							>{{group.name || group.slug}}</Title>
						</Box>
					</Box>
					<Title
						style="margin-top:80px;margin-bottom:20px"
						v-if="acc?.authentication?.payload?.groups?.filter(g => g.type === 'product-access')?.length"
					>Connected Products</Title>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						style="font-weight:500;font-size:18px"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						v-if="acc?.authentication?.payload?.groups?.filter(g => g.type === 'product-access')?.length"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`calc(100vw - 60px)`},`sm`:{`light`:`200px`}}}"
							style="text-align:center;flex-shrink:0;flex-grow:0"
							v-for="group in acc?.authentication?.payload?.groups?.filter(g => g.type === 'product-access')"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
							>{{group.name || group.slug}}</Title>
						</Box>
					</Box>
					<Title
						style="margin-top:80px;margin-bottom:20px"
						v-if="subscriptions?.data?.length"
					>Subscriptions</Title>
					<Box
						gap="{`default`:{`xs`:{`light`:`25px`}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
						style="font-weight:500;font-size:18px"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						v-if="subscriptions?.data?.length"
					>
						<Box
							borderRadius="{`default`:{`xs`:{`light`:`8px`}}}"
							backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
							column="{`default`:{`xs`:{`light`:true}}}"
							width="{`default`:{`xs`:{`light`:`calc(100vw - 60px)`},`sm`:{`light`:`200px`}}}"
							style="text-align:center;flex-shrink:0;flex-grow:0"
							v-for="subscription in subscriptions?.data || []"
						>
							<Title
								type="{`default`:{`xs`:{`light`:`h3`}}}"
								marginTop="{`default`:{`xs`:{`light`:`12px`}}}"
								marginBottom="{`default`:{`xs`:{`light`:`12px`}}}"
							>Vue Play<br /><br />Status: {{ subscription.status }}</Title>
						</Box>
					</Box>
					<div style="margin-bottom:150px"></div>
				</Box>
			</Box>
		</template> <template #footer="">
			<Footer></Footer>
		</template>
	</Home>
</template>
<script>
	import Text from '@vueplayio/text';
	import Link from '@vueplayio/link';
	import Home from '@/_templates/arctic/views/Home.vue';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';
	export default {
		components: {
			Text: Text,
			Link: Link,
			Home: Home,
			Title: Title,
			Box: Box,
			Footer: Footer,
			Header: Header
		},
		inject: ['account', 'auth', 'market'],
		data: () => ({
			subscriptions: {
				data: [{
					status: 'active',
					customer_id: 1,
					order_id: 1,
					plan_id: 1,
					tier_id: 1,
					payment_provider_id: 4,
					interval: 'daily',
					interval_count: 30,
					trial_period_days: 14,
					trial_started_at: '2024-11-27 22:02:08',
					started_at: '2025-04-28 15:25:24',
					ended_at: '2025-04-28 15:25:24',
					last_billed_at: '2025-04-28 15:25:24',
					last_due_at: '2025-04-28 15:25:24'
				}]
			}
		}),
		computed: {
			acc() {
				return this.account || {
					"accessToken": "eymFtZSIVgc",
					"authentication": {
						"accessToken": "eymFtZSIVgc",
						"strategy": "jwt",
						"payload": {
							"global_roles": ["admin", "authenticated"],
							"groups": [{
								"id": 4,
								"slug": "base",
								"name": "Base",
								"type": "projects",
								"roles": ["admin"]
							}, {
								"id": 5,
								"slug": "layouts",
								"name": "Layouts",
								"type": "projects",
								"roles": ["admin"]
							}, {
								"id": 16,
								"slug": "siglar",
								"name": "Siglar",
								"type": "teams",
								"roles": ["team-owner"]
							}, {
								"id": 18,
								"slug": "bortgang",
								"name": "Bortgang",
								"type": "projects",
								"roles": ["project-owner"]
							}, {
								"id": 20,
								"slug": "core",
								"name": "Core",
								"type": "teams",
								"roles": ["admin"]
							}, {
								"id": 30,
								"slug": "buk",
								"name": "BUK",
								"type": "teams",
								"roles": ["admin"]
							}, {
								"id": 31,
								"slug": "coralpen",
								"name": "Coralpen",
								"type": "teams",
								"roles": ["admin"]
							}, {
								"id": 32,
								"slug": "proposals",
								"name": "Proposals",
								"type": "projects",
								"roles": ["admin"]
							}, {
								"id": 33,
								"slug": "bcc",
								"name": "BCC",
								"type": "teams",
								"roles": ["admin"]
							}, {
								"id": 34,
								"slug": "deprecated",
								"name": "Deprecated",
								"type": "projects",
								"roles": ["admin"]
							}, {
								"id": 35,
								"slug": "next",
								"name": "Next",
								"type": "projects",
								"roles": ["admin"]
							}, {
								"id": 37,
								"slug": "experimental-pro-product-3",
								"name": "Experimental Pro",
								"type": "product-access",
								"roles": ["templates-read"]
							}, {
								"id": 27,
								"slug": "ttt",
								"type": "teams",
								"roles": ["templates-read"]
							}, {
								"id": 38,
								"slug": "experimental-pro2-product-4",
								"type": "product-access",
								"roles": ["templates-read"]
							}, {
								"id": 40,
								"slug": "experimental-pro4-product-6",
								"type": "product-access",
								"roles": ["templates-read"]
							}],
							"iat": 1747733332,
							"exp": 1747992532,
							"aud": "localhost",
							"iss": "coralpen",
							"sub": "8",
							"jti": "e6f502a9-d1a1-4039-b910-6b0f3d7276da"
						}
					},
					"user": {
						"id": 8,
						"username": "steffan",
						"first_name": "Steffan",
						"middle_name": null,
						"last_name": "Halvorsen",
						"picture": "https://avatars.githubusercontent.com/u/4593184?v=4",
						"locale": "no",
						"phone": null,
						"email_verified_at": "2025-05-20T09:28:52.000Z",
						"phone_verified_at": null,
						"created_at": "2024-11-26T15:27:47.000Z",
						"updated_at": "2025-05-20T09:28:52.000Z",
						"email": "steffanhalv@gmail.com"
					},
					"refreshToken": "5c8beb03d8609dc328f7e253497fef44b9787c0254204931f1665d5e086137d9b05cb0880564640b484252cdd10cac358fbba42962944fc84083ab1c916e8f1f"
				};
			}
		},
		async mounted() {
			await this.getSubscriptions();
		},
		watch: {
			account() {
				console.log('Account updated', this.account);
			}
		},
		methods: {
			async save() {
				try {
					const result = await this.auth.service('users')
						.patch(this.acc.user.id, {
							username: this.acc.user.username,
							first_name: this.acc.user.first_name,
							middle_name: this.acc.user.middle_name,
							last_name: this.acc.user.last_name,
							email: this.acc.user.email,
							phone: this.acc.user.phone,
							locale: this.acc.user.locale
						});
					alert('Profile has successfully been updated!');
					console.log('res', result);
				} catch (e) {
					alert(e.message);
					console.log(e);
				}
			},
			async getSubscriptions() {
				this.subscriptions = await this.market.service('subscriptions')
					.find({
						query: {
							status: {
								$in: ['active', 'pending', 'trial']
							}
						}
					});
			}
		}
	};

</script>
<style scoped>
	input,
	select {
		background-color: white;
	}

</style>