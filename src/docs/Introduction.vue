<template>
	<section class="p-6 pt-20 md:pt-6 pb-40">
		<Meta
			title="Introduction"
			description="Introducing Vue Play, an innovative software for designing and developing Vue.js components and applications in a visually intuitive environment."
		>
		</Meta>
		<article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
			<h1 class="mb-6 text-4xl">
				Introduction
			</h1>
			<p
				style="margin-top:15px"
				class="text-xl py-2 font-medium"
			>

				Introducing Vue Play, an innovative software for designing and developing Vue.js components and applications in a visually intuitive environment.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Drag and drop elements onto the playground to construct component & templates without coding.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Select and style elements with ease using the toolbar's controls for adjusting properties like width, height, colors, gradients, and position.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Vue Play seamlessly integrates with Tailwind CSS, providing easy access to its extensive library of utility classes.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Navigate elements using keyboard shortcuts or the layers view.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Effortlessly paste HTML into the playground, duplicate elements, and move using drag and drop.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Connect to GitHub and publish your site to GitHub Pages in just a few clicks once you're satisfied with your creation.
			</p>
		</article>
	</section>
</template>
<script>
	import Meta from "@/components/Meta.vue";
	export default {
		components: {
			Meta
		},
		data: () => ({})
	};

</script>
<style scoped></style>