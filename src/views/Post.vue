<template v-for="i in 8">
	<div
		class="bg-white flex flex-col h-screen">
		<VueNavigator
			class="absolute z-50" />
		<main
			style="width:100%;min-height:calc(100vh - 50px)"
			class="flex-1 relative overflow-auto">
			<div
				class="relative h-full w-full flex">
				<label
					class="bg-white fixed z-40 md:hidden cursor-pointer inline-flex items-center p-2 mt-16 lg:mt-4 ml-3 text-sm text-slate-900 rounded-lg"
					for="toggle"><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</label><input
					class="peer hidden"
					type="checkbox"
					id="toggle"
					v-model="menu" />
				<div
					class="bottom-0 bg-white pt-10 md:w-96 md:p-7 md:shadow-md shadow-lg border-r border-slate-200 peer-checked:px-7 peer-checked:pt-16 peer-checked:md:pt-10 peer-checked:pb-7 duration-200 transition-all ease-in-out w-0 max-w-full z-30 peer-checked:w-80 absolute md:relative top-0 overflow-auto">
					<button
						class="border mr-2 bg-slate-50 hover:bg-slate-100 rounded-2xl pl-3 pr-4 mb-4 py-2"
						@click="$router.push('/feedback')">
						<svg xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5 -mt-1 mr-1 inline">
							<path
								fill-rule="evenodd"
								d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
								clip-rule="evenodd" />
						</svg>
						Go back
					</button>
					<h3
						class="text-slate-500 font-medium mb-1 whitespace-nowrap">
						Status
					</h3><button
						:style="statusStyle(post)"
						class="border rounded text-xs py-0.5 px-1 mb-2">
						{{ post?.status?.title || 'Not set' }}
					</button>
					<h3
						class="text-slate-500 font-medium mb-1 whitespace-nowrap">
						Category
					</h3> <span>
						{{ post?.category?.title || 'Not set' }}
					</span>
					<h3
						class="text-slate-500 mt-4 font-medium mb-2 whitespace-nowrap">
						Voters
					</h3>
					<div class="flex mb-1.5"
						v-for="vote in votes">
						<div class="h-7 w-7 bg-cover rounded-full bg-slate-500"
							:style="'background-image: url(' + vote?.user?.[0]?.picture + ')'">
						</div><span
							class="text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow">
							{{ vote.user?.[0]?.name }}
						</span>
					</div>
					<div
						class="flex mb-1.5">
						<div
							class="h-7 w-7">
						</div><span
							class="text-sm pl-2 pt-1 text-ellipsis overflow-hidden whitespace-nowrap grow"
							v-show="false">
							and 35
							more...
						</span>
					</div>
				</div>
				<Topic
					class="bg-white m-auto grow h-full overflow-auto pt-16 lg:pt-7 relative"
					@post="post = $event"
					:id="id" />
				<div class="absolute h-full w-full"
					v-if="menu"
					@click="menu = false">
				</div>
			</div>
		</main>
		<Footer />
	</div>
</template>
<script>
	import VueNavigator from "@/components/Navigator.vue";
	import Footer from "@/components/Footer.vue";
	import Topic from "@/feedback/Topic.vue";
	export default { props: ["id"],
		components: { VueNavigator, Footer,
			Topic }, data: () =>
	({ menu: false, post: null }),
		computed: { votes() { return this
					.post?.votes } },
		methods: { statusStyle(
			post) { return { color: post
						?.status
						?.foregroundColor ||
						"#333",
					backgroundColor: post
						?.status
						?.backgroundColor ||
						"#F8FAFC",
					borderColor: post
						?.status
						?.foregroundColor ||
						"#E5E7EB" } } } };

</script>
<style scoped>
	main {
		display: inline-block;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	h1 {
		font-size: 60px;
		margin-top: 50px;
		margin-bottom: 30px;
	}

	em {
		font-style: normal;
		color: rgba(238, 76, 215, 1);
	}

	button.higlighted {
		color: #fff;
		background-color: #74AE86;
	}

	button.higlighted:hover {
		background-color: #8cab96ff;
	}

	section button {
		border: none;
		padding-top: 10px;
		padding-right: 15px;
		padding-bottom: 10px;
		padding-left: 15px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-size: 17px;
		margin-right: 20px;
		cursor: pointer;
		color: #072c38ff;
		transition: .5s ease background;
		background-color: rgb(235, 235, 235);
	}

	section button:last-child {
		margin-right: 0px;
	}

	section button:hover {
		background-color: #e6e6e6ff;
	}

	.feature-list {
		background-color: #74AE86;
		color: #ffffffff;
		text-align: left;
		padding: 20px 30px;
		box-sizing: border-box;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		margin-bottom: 50px;
		margin-top: 40px;
		max-width: calc(100% - 40px);
		margin-right: auto;
		margin-left: auto;
		width: 500px;
	}

	.feature-list>div {
		background-image: url(@/assets/check.png);
		background-position: 0px 6px;
		background-repeat: no-repeat;
		background-size: auto 20px;
		padding: 5px 30px;
	}

	label:has(+input:checked) {
		color: #000000ff;
		background: #ffffffff;
		box-shadow: 0px 0;
		margin-top: 12px;
	}

	.border-l-4 {
		margin-left: -1px;
	}

</style>