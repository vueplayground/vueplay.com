<template>
	<Section class="vp-intro" space="large" :align="align" gap="18px" :width="width">
		<Paragraph v-if="eyebrow" size="small" :align="align" class="vp-eyebrow">{{ eyebrow }}</Paragraph>
		<Heading level="h1" size="xlarge" :align="align">{{ title }}</Heading>
		<Paragraph v-if="text" size="large" :align="align" :muted="true" width="680px">{{ text }}</Paragraph>
		<slot></slot>
	</Section>
</template>
<script>
	import Section from '@vueplayio/section';
	import Heading from '@vueplayio/heading';
	import Paragraph from '@vueplayio/paragraph';
	// The top of a page: a small line over the heading, the page's one H1, and a line under it
	export default {
		components: {
			Section,
			Heading,
			Paragraph
		},
		props: {
			eyebrow: { type: String, default: '' },
			title: { type: String, default: '' },
			text: { type: String, default: '' },
			align: { type: String, default: 'center' },
			width: { type: String, default: 'normal' }
		}
	};

</script>
