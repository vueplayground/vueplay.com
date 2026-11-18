<template>
  <div class="vp-feat">
    <Header style="position:sticky;top:0px;z-index:50"></Header>
    <main>
      <slot />
      <Section v-if="more && others.length" space="medium" gap="22px" class="vp-feat-more" aria-labelledby="vp-feat-more">
        <Heading level="h2" size="medium" align="center" id="vp-feat-more">More features</Heading>
        <nav class="vp-feat-more__row" aria-label="More features">
          <router-link v-for="one in others" :key="one.path" :to="one.path" class="vp-feat-more__link">{{ one.name }}</router-link>
          <router-link v-if="current !== '/features'" to="/features" class="vp-feat-more__link vp-feat-more__link--all">All features</router-link>
        </nav>
      </Section>
      <Backdrop kind="mesh" tone="brand" color1="#10a37c" color2="#0b7a5c" color3="#17e8c2" motion="calm" space="large" align="center" gap="22px">
        <Heading level="h2" size="xlarge" align="center">{{ title }}</Heading>
        <Paragraph size="large" align="center" width="620px">{{ text }}</Paragraph>
        <Stack spread="center" gap="12px">
          <Button href="https://studio.vueplay.com" size="large" color="#ffffff" textColor="#0b5e48">Start building, free</Button>
          <Button href="/pricing" size="large" variant="outline" color="#ffffff">Pricing</Button>
        </Stack>
      </Backdrop>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
// What every page of the Features section has around its own parts: the site's header, a row of the other
// feature pages, the call to start building, and the footer. The brand's variables and the shared parts
// (the screenshot frame, the small line over a heading, the drawings) are in features.css.
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Backdrop from '@vueplayio/backdrop'
import Heading from '@vueplayio/heading'
import Paragraph from '@vueplayio/paragraph'
import Stack from '@vueplayio/stack'
import Button from '@vueplayio/button'
import Section from '@vueplayio/section'
import { FEATURES } from './featureList.js'
import './features.css'
export default {
  name: 'FeatureLayout',
  components: { Header, Footer, Backdrop, Heading, Paragraph, Stack, Button, Section },
  props: {
    // the address of the page it is around (left out of the row of more features)
    current: { type: String, default: '' },
    // whether the row of the other feature pages is shown (the overview lists them all already)
    more: { type: Boolean, default: true },
    title: { type: String, default: 'Start building, free' },
    text: { type: String, default: 'Open the Studio in your browser, pick a template and make it yours. Your project is real Vue code with Git.' },
  },
  computed: {
    others() { return FEATURES.filter(one => one.path !== this.current) },
  },
}
</script>
