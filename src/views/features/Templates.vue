<template>
  <FeatureLayout current="/features/templates" title="Start from a whole site" text="Open the Studio, pick one of the 17 templates and change everything about it.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Templates</router-link>
      <Heading level="h1" size="huge" align="center">Templates and components to build with</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">17 templates, each a whole site with its pages, pictures and look. A library of about 56 components they are made from. And a marketplace where you can sell templates of your own.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Pick a template</Button>
        <Button href="#components" size="large" variant="outline">See the components</Button>
      </Stack>
    </Backdrop>

    <Section anchor="templates" width="wide" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">17 templates</Paragraph>
        <Heading level="h2" size="xlarge" align="center">A whole site, ready to change</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">Every template is built from the same library components you edit, so nothing in it is fixed. Pick one when you make a project, or take single pages from any of them later.</Paragraph>
      </Stack>
      <div class="vp-feat-tiles">
        <Image v-for="one in templates" :key="one.file" :src="'/landing/templates/' + one.file + '.jpg'" :alt="'The ' + one.name + ' template'" shape="16 / 10" radius="12px" :caption="one.name" class="vp-feat-tile" />
      </div>
    </Section>

    <Section anchor="components" background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">The component library</Paragraph>
        <Heading level="h2" size="xlarge" align="center">About 56 components that fit together</Heading>
        <Paragraph size="large" align="center" :muted="true" width="700px">Each is changed with a few named settings, works on a phone by itself and takes the colours and fonts of your site. Here they are, as they are grouped in the Studio.</Paragraph>
      </Stack>
      <Columns :columns="4" gap="20px" min="250px">
        <Card v-for="group in groups" :key="group.name" look="outline" padding="24px" gap="6px" background="var(--vp-background)">
          <Feature :icon="group.icon" :title="group.name" text="" />
          <p class="vp-feat-names">{{ group.items }}</p>
        </Card>
      </Columns>
    </Section>

    <Section gap="32px">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Made to be edited</Paragraph>
          <Heading level="h2" size="xlarge">Settings with names, not guesses</Heading>
          <Paragraph size="large" :muted="true">A component's Props tab shows what it can do in words: a size from Small to Large, a slider for room, a colour for taste. The text is typed on the page itself.</Paragraph>
          <Feature icon="device-phone-mobile" layout="side" look="bare" title="Fits a phone by itself" text="Sizes scale with the screen and columns fold, without a setting per screen size." />
          <Feature icon="swatch" layout="side" look="bare" title="Themed in one place" text="Colours, corners, width and fonts come from the site's look, so a change there changes every component." />
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of the Props tab of a Button: link, look, size and colour">
          <p class="vp-feat-art__title">Props <small>Button</small></p>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span>Link<small>/menu</small></span></li>
            <li class="vp-feat-art__item"><span>Look</span><span class="vp-feat-chips"><span class="on">Filled</span><span>Outline</span><span>Soft</span></span></li>
            <li class="vp-feat-art__item"><span>Size</span><span class="vp-feat-chips"><span>Small</span><span>Medium</span><span class="on">Large</span></span></li>
            <li class="vp-feat-art__item"><span>Color</span><span class="vp-feat-swatches"><i style="background:#10a37c;width:24px;height:24px"></i></span></li>
          </ul>
        </div>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Marketplace</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Sell what you make</Heading>
        <Paragraph size="large" align="center" :muted="true" width="700px">Made a site others could start from? Make it a template from the Monetize section. Give it away or set a price; it is listed where everybody picks their templates, and others can start a project from it or take its pages one by one.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="swatch" title="Make it a template" text="One switch turns a project into a template, with a name, a picture and a description." />
        <Feature icon="banknotes" title="Paid through Stripe" text="Set up a seller account with Stripe and the money from each sale is paid out to you." />
        <Feature icon="puzzle-piece" title="Share components" text="Publish a component to the library, and after a review everybody can drop it into their pages." />
      </Columns>
      <Stack spread="center" gap="12px">
        <Button href="/market" variant="outline">Visit the marketplace</Button>
      </Stack>
    </Section>
  </FeatureLayout>
</template>
<script>
import Backdrop from '@vueplayio/backdrop'
import Heading from '@vueplayio/heading'
import Paragraph from '@vueplayio/paragraph'
import Stack from '@vueplayio/stack'
import Button from '@vueplayio/button'
import Section from '@vueplayio/section'
import Columns from '@vueplayio/columns'
import Card from '@vueplayio/card'
import Feature from '@vueplayio/feature'
import Image from '@vueplayio/image'
import FeatureLayout from './FeatureLayout.vue'
import { featureHead, pageSchema } from './featureList.js'
const description = 'Start from one of 17 Vue templates, build with about 56 library components, and sell templates of your own on the Vue Play marketplace.'
const templates = [
  { file: 'landing-page', name: 'Landing page' },
  { file: 'agency', name: 'Agency' },
  { file: 'portfolio-starter', name: 'Portfolio' },
  { file: 'blog-starter', name: 'Blog' },
  { file: 'ai-chat', name: 'AI chat' },
  { file: 'marketplace', name: 'Marketplace' },
  { file: 'webshop', name: 'Webshop' },
  { file: 'restaurant', name: 'Restaurant' },
  { file: 'event', name: 'Event' },
  { file: 'cv-starter', name: 'CV' },
  { file: 'link-page', name: 'Link page' },
  { file: 'services', name: 'Services' },
  { file: 'documentation', name: 'Documentation' },
  { file: 'non-profit', name: 'Non-profit' },
  { file: 'admin-dashboard', name: 'Admin dashboard' },
  { file: 'shop-admin-starter', name: 'Shop admin' },
  { file: 'helpdesk', name: 'Help desk' },
]
// the groups of the Studio's insert panel (navigatorInsertCatalog.ts), with the names of their tiles
const groups = [
  { name: 'Layout', icon: 'squares-2x2', items: 'Section, Columns, Stack, Tabs, Accordion, Divider, Spacer, Reveal, Motion, Backdrop' },
  { name: 'Text and buttons', icon: 'document-text', items: 'Heading, Paragraph, Button, Icon, Card, Feature, Stat, Testimonial, Price, Logos, Marquee, Posts, Code, Countdown' },
  { name: 'Pictures and video', icon: 'photo', items: 'Image, Photos, Gallery, Carousel, Slideshow, Video' },
  { name: 'Header, menu and footer', icon: 'bookmark', items: 'Site Header, Menu, Breadcrumbs, Search, Languages, Footer' },
  { name: 'Shop', icon: 'shopping-cart', items: 'Products, Product Page, Cart, Cart Button, Checkout, Product' },
  { name: 'Forms and accounts', icon: 'envelope', items: 'Form, Sign In, Signed In, Profile, Account Button' },
  { name: 'Maps and chat', icon: 'map', items: 'Street Map, Chat Box, AI Chat App' },
  { name: 'Admin', icon: 'chart-bar', items: 'Admin Menu, Table, Chart, Activity, Task Board' },
]
export default {
  name: 'FeaturesTemplates',
  components: { FeatureLayout, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature, Image },
  data: () => ({ templates, groups }),
  head() {
    return featureHead({
      path: '/features/templates',
      title: 'Templates and components · Vue Play Studio',
      description,
      image: '/landing/templates/landing-page.jpg',
      schema: pageSchema({ path: '/features/templates', name: 'Templates and components for Vue Play Studio', description }),
    })
  },
}
</script>
