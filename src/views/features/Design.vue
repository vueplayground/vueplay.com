<template>
  <FeatureLayout current="/features/design" title="Design a real Vue site, visually" text="Pick a template or start blank, then click, drop and change. Everything you do is written as Vue code you own.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Design</router-link>
      <Heading level="h1" size="huge" align="center">Visual editing that writes real Vue</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Drop in components, elements, sections and whole pages. Change words on the page, settings with named controls, style with or without Tailwind, motion on a timeline and content from your own data.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Start designing, free</Button>
        <Button href="#insert" size="large" variant="outline">See how it works</Button>
      </Stack>
      <Shot src="/landing/studio-design.png" name="Design" label="The Design view: the page large in the middle, parts to add on the left, settings on the right" :hero="true" />
    </Backdrop>

    <Section anchor="insert">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Insert</Paragraph>
          <Heading level="h2" size="xlarge">Add a button, a section or a whole page</Heading>
          <Paragraph size="large" :muted="true">Drag what you need onto the page, or click it to put it after what is selected.</Paragraph>
          <Feature icon="puzzle-piece" layout="side" look="bare" title="Components" text="The Vue Play library by group: layout, text and buttons, pictures, header and footer, shop, forms, maps and chat, admin. Your own components are there too." />
          <Feature icon="code-bracket" layout="side" look="bare" title="Elements" text="Every HTML element, and ready layouts. Type a tag that is not listed and you can insert it as it is." />
          <Feature icon="document-text" layout="side" look="bare" title="Pages" text="Pick a template, then one of its pages, with or without its demo content. Use the parts of one site in another." />
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of the insert panel: the tabs Components, Elements and Pages, and groups of components">
          <div class="vp-feat-tabs"><span class="on">Components</span><span>Elements</span><span>Pages</span></div>
          <ul class="vp-feat-art__list">
            <li v-for="one in groups" :key="one.name" class="vp-feat-art__item"><span>{{ one.name }}<small>{{ one.items }}</small></span></li>
          </ul>
        </div>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Change what is selected</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Everything about an element, a tab each</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">Click anything on the page. The tabs at the side show what can be changed, and every change is written into the code as you make it.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="20px" min="250px">
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="document-text" title="Content" text="The words of what is selected. Type on the page itself or in the panel, or show them from your data." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="cog-6-tooth" title="Props" text="A component's settings with named controls: a short list where a number would be a guess, a slider or a colour where it is taste." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="paint-brush" title="Style" text="Size, space, colour, text, borders and shadows. Simple for the usual, All for every CSS property, and hover, focus and pressed states." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="swatch" title="Tailwind" text="Classes by picking, not typing. Simple shows the common ones, All shows every group. Tailwind 3 and 4 sites both work." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="code-bracket" title="Attributes" text="Any attribute of the tag: an id, an aria label, a data value or a Vue directive." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="squares-2x2" title="Layers" text="The page as a tree, to select, move and reorder what is hard to click on the canvas." /></Card>
      </Columns>
    </Section>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the screen sizes, from phone to wide screen, and the light and dark switch">
          <p class="vp-feat-art__title">Screen size <small>and theme</small></p>
          <div class="vp-feat-tabs"><span>Phone</span><span>Tablet</span><span class="on">Laptop</span><span>Desktop</span><span>Wide</span></div>
          <div class="vp-feat-chips"><span class="on">☀ Light</span><span>☾ Dark</span></div>
          <pre class="vp-feat-code" style="margin-top:14px"><span class="t">&lt;section</span> <span class="a">class</span>=<span class="s">"p-6 lg:p-16 bg-white dark:bg-slate-900"</span><span class="t">&gt;</span></pre>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Breakpoints and dark mode</Paragraph>
          <Heading level="h2" size="xlarge">Every screen, light and dark</Heading>
          <Paragraph size="large" :muted="true">See the page as a phone, a tablet or the full width with one click, or pick any of six screen sizes. Switch the canvas between light and dark to check both.</Paragraph>
          <Paragraph :muted="true">Tailwind classes and component settings can have a value of their own for each screen size and for dark mode. The library's components fold onto a phone by themselves, so most pages need nothing set per size.</Paragraph>
        </Stack>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Motion</Paragraph>
          <Heading level="h2" size="xlarge">A timeline and keyframes</Heading>
          <Paragraph size="large" :muted="true">The Animate view puts a timeline under the page. Add keyframes, drag them in time and change the style at each one. They are written as plain CSS keyframes.</Paragraph>
          <div class="vp-feat-chips"><span>When the page opens</span><span>As it scrolls into view</span><span>While it crosses the screen</span></div>
          <Paragraph :muted="true">On scroll, the scrolling sets how far an animation is: scroll back and it goes back.</Paragraph>
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of the timeline: three rows with keyframes, and the play head">
          <p class="vp-feat-art__title">Timeline <small>fade-up · 1.2 s</small></p>
          <div class="vp-feat-timeline">
            <div class="vp-feat-timeline__ruler"><span>0s</span><span>0.4</span><span>0.8</span><span>1.2</span></div>
            <div v-for="row in timeline" :key="row.name" class="vp-feat-timeline__row">
              <span>{{ row.name }}</span>
              <span class="vp-feat-timeline__track">
                <span class="vp-feat-timeline__span" :style="{ left: row.keys[0] + '%', width: (row.keys[row.keys.length - 1] - row.keys[0]) + '%' }"></span>
                <i v-for="key in row.keys" :key="key" class="vp-feat-timeline__key" :style="{ left: key + '%' }"></i>
                <i v-if="row.head" class="vp-feat-timeline__head" style="left:46%"></i>
              </span>
            </div>
          </div>
        </div>
      </Columns>
    </Section>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the Look section: colours, fonts, corners and design tokens">
          <p class="vp-feat-art__title">Look <small>the whole site</small></p>
          <div class="vp-feat-swatches" style="margin-bottom:14px"><i style="background:#10a37c"></i><i style="background:#0d1f1a"></i><i style="background:#f2f7f5"></i><i style="background:#f5c97a"></i><i style="background:#ffffff"></i></div>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span>Fonts<small>Headings and text</small></span></li>
            <li class="vp-feat-art__item"><span>Corners and width of the pages</span></li>
            <li class="vp-feat-art__item"><span>Design tokens<small>From Figma's variables, in the W3C format</small></span></li>
          </ul>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Pages and the site's look</Paragraph>
          <Heading level="h2" size="xlarge">Set the look once, for every page</Heading>
          <Paragraph size="large" :muted="true">The Look section sets the colours, fonts, corners and width for the whole site, with ready-made looks to start from. Bring design tokens in from Figma, or export your own.</Paragraph>
          <Feature icon="document-text" layout="side" look="bare" title="Pages" text="Add pages, give them their address, put them in the menu and set what search engines are told about each." />
          <Feature icon="language" layout="side" look="bare" title="More languages" text="Add the languages your site is in. The free AI translates what is missing, and you can check every text in a table." />
        </Stack>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Data</Paragraph>
          <Heading level="h2" size="xlarge">Show it from your data</Heading>
          <Paragraph size="large" :muted="true">Connect a CMS or an API in the Data section, then plug its fields into a component's settings or the words on a page. The editor shows real content while you design.</Paragraph>
          <div class="vp-feat-chips"><span>WordPress</span><span>Strapi</span><span>Directus</span><span>Contentful</span><span>Sanity</span><span>Ghost</span><span>Storyblok</span><span>Payload</span><span>Supabase</span><span>Shopify</span><span>Any REST or GraphQL API</span></div>
          <Paragraph :muted="true">Make a page for each post with one click, or show a list on the page you are on. Pages are filled on the server before they are sent, so search engines see the content too.</Paragraph>
        </Stack>
        <pre class="vp-feat-code" aria-label="Code written by the data plug: a list of posts bound to a source"><span class="c">&lt;!-- written by the plug, read back by the panel --&gt;</span>
<span class="t">&lt;Posts</span>
  <span class="a">:items</span>=<span class="s">"$bind('blog', 'posts', {
    title: 'title.rendered|text',
    date: 'date|date'
  })"</span>
<span class="t">/&gt;</span>
<span class="t">&lt;h1&gt;</span>{{ '{' + '{' }} $bind('blog', 'post', 'title.rendered|text') {{ '}' + '}' }}<span class="t">&lt;/h1&gt;</span></pre>
      </Columns>
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
import FeatureLayout from './FeatureLayout.vue'
import Shot from './Shot.vue'
import { featureHead, pageSchema } from './featureList.js'
const description = 'Design Vue sites visually: insert components, sections and pages; change content, props, style and Tailwind; breakpoints, dark mode, motion and data.'
const groups = [
  { name: 'Layout', items: 'Section, Columns, Stack, Tabs, Accordion, Reveal …' },
  { name: 'Text and buttons', items: 'Heading, Paragraph, Button, Card, Feature, Price …' },
  { name: 'Pictures and video', items: 'Image, Gallery, Carousel, Slideshow, Video …' },
  { name: 'Header, menu and footer', items: 'Site Header, Menu, Search, Footer …' },
  { name: 'Shop · Forms · Maps and chat · Admin', items: 'Products, Cart, Form, Sign In, Map, Chat, Table …' },
]
const timeline = [
  { name: 'Heading', keys: [0, 40], head: true },
  { name: 'Paragraph', keys: [15, 60] },
  { name: 'Button', keys: [35, 70, 100] },
]
export default {
  name: 'FeaturesDesign',
  components: { FeatureLayout, Shot, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature },
  data: () => ({ groups, timeline }),
  head() {
    return featureHead({
      path: '/features/design',
      title: 'Visual design for Vue sites · Vue Play Studio',
      description,
      schema: pageSchema({ path: '/features/design', name: 'Design in Vue Play Studio', description }),
    })
  },
}
</script>
