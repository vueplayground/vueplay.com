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
					paddingTop="{`default`:{`xs`:{`light`:`100px`}}}"
					alignItems="{`default`:{`xs`:{`light`:`center`}}}"
				>
					<Title
						style="text-align:center;max-width:800px"
						fontSize="{`default`:{`xs`:{`light`:`45px`},`sm`:{`light`:`60px`},`md`:{`light`:`70px`},`lg`:{`light`:`88px`}}}"
						type="{`default`:{`xs`:{`light`:`h1`},`2xl`:{`light`:`h1`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`47px`},`sm`:{`light`:`67px`},`md`:{`light`:`72px`},`lg`:{`light`:`90px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`250`}}}"
					>Tokens</Title>
					<Title
						style="text-align:center"
						type="{`default`:{`xs`:{`light`:`h2`},`2xl`:{`light`:`h2`}}}"
						fontSize="{`default`:{`xs`:{`light`:`16px`},`md`:{`light`:`18px`},`lg`:{`light`:`20px`}}}"
						lineHeight="{`default`:{`xs`:{`light`:`25px`},`md`:{`light`:`28px`},`lg`:{`light`:`30px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`25px`}}}"
						fontWeight="{`default`:{`xs`:{`light`:`325`}}}"
					>Long living tokens — keep them secret.</Title><Text
						style="margin-bottom:30px;margin-top:70px;text-align:center;max-width:500px;border-radius:8px"
						padding="{`default`:{`xs`:{`light`:`20px`}}}"
						backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 5%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 30%, black)`}}}"
					>Tokens can be used inside .npmrc to install private and purchased components. It also provides access to Vue Play API’s and makes it possible to git clone private projects.</Text> <label style="margin-top:30px;margin-bottom:5px;width:200px;font-weight:150">Token name</label> <input
						v-model="title"
						style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
						placeholder="My token"
					/><label style="margin-top:10px;margin-bottom:5px;width:200px;font-weight:150">Expires in</label> <select
						v-model="expires"
						style="padding:15px;width:200px;margin-top:0px;margin-bottom:5px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
					>
						<option
							v-for="expire in expiresin"
							:value="expire.value"
						>{{expire.label}}</option>
					</select><input
						v-model="expires"
						style="padding:15px;width:200px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
					/>
					<Link
						title="Generate"
						backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
						padding="{`default`:{`xs`:{`light`:`12px 25px`}}}"
						marginTop="{`default`:{`xs`:{`light`:`15px`}}}"
						color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
						borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
						style="position:unset;width:200px"
						@click="createToken()"
						justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
						tag="button"
					>
					</Link>
					<Box
						column="{`default`:{`xs`:{`light`:false}}}"
						v-if="token"
					>
						<Box column="{`default`:{`xs`:{`light`:true}}}"><Text style="margin-bottom:15px;margin-top:15px">You’ll only see this token once. Keep it safe — it won’t be shown again.</Text><input
								v-model="token"
								style="padding:15px;width:100%;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black)"
								readonly=""
							/></Box>
					</Box>
					<Box
						column="{`default`:{`xs`:{`light`:true}}}"
						padding="{`default`:{`xs`:{`light`:`0px`}}}"
						style="max-width:100%;margin-top:50px;margin-bottom:150px"
						v-if="tokens?.data?.length"
					><Text style="margin-bottom:15px;font-weight:150">Existing tokens</Text>
						<Box
							v-for="token in tokens?.data || []"
							gap="{`default`:{`xs`:{`light`:`5px`}}}"
							padding="{`default`:{`xs`:{`light`:`0px`}}}"
							marginBottom="{`default`:{`xs`:{`light`:`25px`}}}"
							style="flex-wrap:nowrap;overflow:hidden"
						>
							<input
								v-model="token.title"
								style="padding:15px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black);margin-right:5px;flex-grow:1;flex-shrink:1;max-width:calc(60% - 80px - 12.5px)"
							/><input
								style="padding:15px;border-radius:5px;color:color-mix(in oklch, var(--color-neutral) 20%, black);margin-right:5px;flex-grow:1;flex-shrink:1;max-width:calc(40% - 80px - 12.5px);width:400px"
								:value="'Exp. ' + token.expires_at"
								:title="'Expires at ' + token.expires_at"
								readonly=""
							/>
							<Link
								title="Save"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-primary) 60%, black)`}}}"
								padding="{`default`:{`xs`:{`light`:`12px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
								@click="save(token)"
								style="width:80px"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								tag="button"
							>
							</Link>
							<Link
								title="Revoke"
								backgroundColor="{`default`:{`xs`:{`light`:`var(--color-danger)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-danger) 60%, white)`,`dark`:`color-mix(in oklch, var(--color-danger) 60%, black)`}}}"
								padding="{`default`:{`xs`:{`light`:`12px`}}}"
								color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 0%, white)`}}}"
								borderRadius="{`default`:{`xs`:{`light`:`5px`}}}"
								@click="revoke(token)"
								style="width:80px"
								justifyContent="{`default`:{`xs`:{`light`:`center`}}}"
								tag="button"
							>
							</Link>
						</Box>
					</Box>
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
		inject: ['account', 'auth'],
		data: () => ({
			tokensDemo: null,
			tokens: {
				data: [{
					id: 1,
					title: 'Token 1',
					revoked: false,
					expires_at: '2025-05-22 14:03:16.232'
				}, {
					id: 2,
					title: 'Token 2',
					revoked: false,
					expires_at: '2025-05-22 14:03:16.232'
				}]
			},
			expires: '',
			expiresin: [],
			title: '',
			token: ''
		}),
		async mounted() {
			this.generateExpirationOptions();
			this.expires = this.expiresin.find(exp => exp.label === 'a year')
				?.value;
			await this.list();
		},
		methods: {
			expiryAlternatives() {
				this.expiresin;
			},
			async save(token) {
				const res = await this.auth.service('auth_sessions')
					.patch(token.id, {
						title: token.title
					});
				await this.list();
				alert('Updated!');
			},
			async revoke(token) {
				const res = await this.auth.service('auth_sessions')
					.patch(token.id, {
						revoked: true
					});
				await this.list();
				alert('Revoked!');
			},
			async createToken() {
				if (!this.title) return alert('Token name is required');
				try {
					const token = await this.auth.service('auth_sessions')
						.create({
							revoked: false,
							expires_at: this.expires,
							title: this.title
						});
					this.token = token?.accessToken || '';
					this.title = '';
					await this.list();
				} catch (e) {
					console.log(e);
				}
			},
			async list() {
				this.tokens = await this.auth.service('auth_sessions')
					.find({
						query: {
							revoked: false,
							$sort: {
								created_at: -1
							}
						}
					});
			},
			formatDate(date) {
				const pad = n => String(n)
					.padStart(2, '0');
				return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} 23:59:59`;
			},
			generateExpirationOptions() {
				const now = new Date();
				const options = [{
					label: 'a week',
					date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
				}, {
					label: 'a month',
					date: new Date(new Date(now)
						.setMonth(now.getMonth() + 1))
				}, {
					label: '6 months',
					date: new Date(new Date(now)
						.setMonth(now.getMonth() + 6))
				}, {
					label: 'a year',
					date: new Date(new Date(now)
						.setFullYear(now.getFullYear() + 1))
				}, {
					label: '3 years',
					date: new Date(new Date(now)
						.setFullYear(now.getFullYear() + 3))
				}, {
					label: 'never',
					date: null
				}];
				this.expiresin = options.map(option => ({
					label: option.label,
					value: option.date ? this.formatDate(option.date) : '9999-12-31 23:59:59'
				}));
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