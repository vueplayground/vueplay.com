<template>
	<Box justifyContent="{`default`:{`sm`:{`light`:`center`}}}">
		<Box
			column="{`default`:{`xs`:{`light`:true}}}"
			style="max-width:100%;border-top-left-radius:30px;border-bottom-left-radius:30px;flex-grow:1"
			paddingTop="{`default`:{`xs`:{`light`:`50px`}}}"
			paddingRight="{`default`:{`xs`:{`light`:`40px`}}}"
			paddingLeft="{`default`:{`xs`:{`light`:`40px`}}}"
			color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 80%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 85%, black)`}}}"
			backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 1%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
			marginTop="{`default`:{`xs`:{`light`:`35px`}}}"
			marginBottom="{`default`:{`xs`:{`light`:`35px`}}}"
			width="{`default`:{`md`:{`light`:`50%`}}}"
			borderTopRightRadius="{`default`:{`xs`:{`light`:`30px`},`md`:{`light`:`0px`}}}"
			borderBottomRightRadius="{`default`:{`xs`:{`light`:`30px`},`md`:{`light`:`0px`}}}"
			borderColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`transparent`}}}"
			borderRightWidth="{`default`:{`xs`:{`light`:`1px`},`md`:{`light`:`0px`}}}"
			borderTopWidth="{`default`:{`xs`:{`light`:`1px`}}}"
			borderBottomWidth="{`default`:{`xs`:{`light`:`1px`}}}"
			borderLeftWidth="{`default`:{`xs`:{`light`:`1px`}}}"
			borderLeftStyle="{`default`:{`xs`:{`light`:`solid`}}}"
			borderRightStyle="{`default`:{`xs`:{`light`:`solid`}}}"
			borderTopStyle="{`default`:{`xs`:{`light`:`solid`}}}"
			borderBottomStyle="{`default`:{`xs`:{`light`:`solid`}}}"
		>
			<Box style="padding:0px">
				<Title
					type="{`default`:{`xs`:{`light`:`h2`}}}"
					fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					class="service-plan"
					color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
				>Hobby</Title>
			</Box>
			<Box
				style="align-items:end;padding:0px"
				marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
				marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
				overflow="{`default`:{`xs`:{`light`:`visible`}}}"
			>
				<Title
					type="{`default`:{`xs`:{`light`:`h2`}}}"
					fontSize="{`default`:{`xs`:{`light`:`46px`}}}"
					marginRight="{`default`:{`xs`:{`light`:`10px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					style="line-height:42px"
					class="service-price"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
				>FREE</Title><Text class="service-price-interval">/forever</Text>
			</Box>
			<Box
				style="padding:0px"
				class="service-description"
				marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
			>The perfect plan if you're just getting started with our service.</Box>
			<Box
				style="padding:0px"
				class="service-description"
				marginTop="{`default`:{`xs`:{`light`:`10px`}}}"
				column="{`default`:{`xs`:{`light`:true}}}"
			>
				<ul style="line-height:2">
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Drag & drop playground</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Transform tools</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Style controls</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Up to 3 applications</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Sell components</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>One click publish</span> </li>
				</ul>
				<Link
					title="Get started today"
					paddingRight="{`default`:{`xs`:{`light`:`5px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`5px`}}}"
					style="text-align:center;width:100%;display:inline-block;border:1px solid;transition:all .3s linear;border-radius:6px;position:unset"
					marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
					marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
					color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					borderTopColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`}},`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
					borderRightColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`}},`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
					borderBottomColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`}},`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
					borderLeftColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 20%, white)`}},`hover`:{`xs`:{`light`:`var(--color-primary)`}}}"
					:route="account ? '/profile' : '/login'"
				>
				</Link>
			</Box>
		</Box>
		<Box
			column="{`default`:{`xs`:{`light`:true}}}"
			style="max-width:100%;border-radius:30px;border:1px solid;flex-grow:1"
			paddingTop="{`default`:{`xs`:{`light`:`50px`}}}"
			paddingRight="{`default`:{`xs`:{`light`:`40px`}}}"
			paddingLeft="{`default`:{`xs`:{`light`:`40px`}}}"
			color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 70%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 70%, black)`}}}"
			width="{`default`:{`md`:{`light`:`50%`}}}"
			backgroundColor="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 40%, black)`,`dark`:`color-mix(in oklch, var(--color-neutral) 1%, white)`}}}"
			borderColor="{`default`:{`xs`:{`light`:`transparent`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, white)`}}}"
		>
			<Box style="padding:0px">
				<Title
					type="{`default`:{`xs`:{`light`:`h2`}}}"
					fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					class="service-plan"
					color="{`default`:{`xs`:{`light`:`var(--color-primary)`}}}"
				>Professional</Title>
			</Box>
			<Box
				style="align-items:end;padding:0px"
				marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
				marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
				overflow="{`default`:{`xs`:{`light`:`visible`}}}"
			>
				<Title
					type="{`default`:{`xs`:{`light`:`h2`}}}"
					fontSize="{`default`:{`xs`:{`light`:`46px`}}}"
					marginRight="{`default`:{`xs`:{`light`:`10px`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					style="line-height:42px"
					class="service-price"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 20%, white)`,`dark`:`color-mix(in oklch, var(--color-neutral) 20%, black)`}}}"
				>$9</Title><Text class="service-price-interval">/month</Text>
			</Box>
			<Box
				style="padding:0px"
				class="service-description"
				marginBottom="{`default`:{`xs`:{`light`:`20px`}}}"
			>Full access to all features, transform tools, controls and premium components.</Box>
			<Box
				style="padding:0px"
				class="service-description"
				marginTop="{`default`:{`xs`:{`light`:`10px`}}}"
				column="{`default`:{`xs`:{`light`:true}}}"
			>
				<ul style="line-height:2">
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>All free features</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Create teams & projects</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Premium components</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Push to github</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Unlimited applications</span> </li>
					<li><svg
							class="h-6 w-5 mt-1 mr-3 float-left"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
							style="color:var(--color-primary)"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
								clip-rule="evenodd"
							></path>
						</svg><span>Custom domains</span> </li>
				</ul>
				<Link
					title="Get started today"
					paddingRight="{`default`:{`xs`:{`light`:`5px`}}}"
					paddingTop="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingBottom="{`default`:{`xs`:{`light`:`10px`}}}"
					paddingLeft="{`default`:{`xs`:{`light`:`5px`}}}"
					style="text-align:center;width:100%;display:inline-block;transition:all .3s linear;border-radius:6px;position:unset"
					marginBottom="{`default`:{`xs`:{`light`:`30px`}}}"
					marginTop="{`default`:{`xs`:{`light`:`30px`}}}"
					color="{`default`:{`xs`:{`light`:`color-mix(in oklch, var(--color-neutral) 10%, white)`}}}"
					fontWeight="{`default`:{`xs`:{`light`:`500`}}}"
					backgroundColor="{`default`:{`xs`:{`light`:`var(--color-primary)`}},`hover`:{`xs`:{`light`:`color-mix(in oklch, var(--color-primary) 60%, white)`}}}"
					:route="account ? '/signup/checkout' : '/authorize-signup'"
				>
				</Link>
			</Box>
		</Box>
	</Box>
</template>
<script>
	import Link from '@vueplayio/link';
	import Text from '@vueplayio/text';
	import Title from '@vueplayio/title';
	import Box from '@vueplayio/box';
	export default {
		components: {
			Link: Link,
			Text: Text,
			Title: Title,
			Box: Box
		},
		inject: ['account'],
		data: () => ({}),
		head() {
			return {
				script: [{
					type: 'application/ld+json',
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": "Hobby Plan",
						"description": "Free basic access to explore and evaluate the service.",
						"image": "https://vueplay.com/thumbnails/samples/basic.png",
						"provider": {
							"@type": "Organization",
							"name": "Vue Play",
							"url": "https://vueplay.com",
							"logo": "https://vueplay.com/assets/vueplay-logo-long-fVs74bGe.webp"
						},
						"offers": {
							"@type": "Offer",
							"price": "0.00",
							"priceCurrency": "USD",
							"availability": "https://schema.org/InStock",
							"url": "https://vueplay.com/pricing#free"
						},
						"areaServed": {
							"@type": "Place",
							"name": "Worldwide"
						},
						"category": "Software",
						"termsOfService": "https://vueplay.com/terms-of-service",
						"brand": {
							"@type": "Brand",
							"name": "Vue Play",
							"url": "https://vueplay.com"
						}
					})
				}, {
					type: 'application/ld+json',
					innerHTML: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Product",
						"name": "Professional Plan",
						"description": "Full unlimited access to all features for professional use.",
						"image": "https://vueplay.com/thumbnails/samples/basic.png",
						"provider": {
							"@type": "Organization",
							"name": "Vue Play",
							"url": "https://vueplay.com",
							"logo": "https://vueplay.com/assets/vueplay-logo-long-fVs74bGe.webp"
						},
						"offers": {
							"@type": "Offer",
							"name": "Professional Plan - Monthly Subscription",
							"price": "9.00",
							"priceCurrency": "USD",
							"availability": "https://schema.org/InStock",
							"url": "https://vueplay.com/pricing#professional"
						},
						"areaServed": {
							"@type": "Place",
							"name": "Worldwide"
						},
						"category": "Software",
						"termsOfService": "https://vueplay.com/terms-of-service",
						"brand": {
							"@type": "Brand",
							"name": "Vue Play",
							"url": "https://vueplay.com"
						}
					})
				}]
			};
		}
	};

</script>
<style scoped></style>