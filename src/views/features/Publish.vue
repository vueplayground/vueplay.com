<template>
  <FeatureLayout current="/features/publish" title="Put your site online today" text="Build it in the Studio, press Publish, and share the address. Your own domain can follow whenever you are ready.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Publish</router-link>
      <Heading level="h1" size="huge" align="center">Online in one click, ready for search</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Publish saves your work, builds it and puts it live, with pages rendered on the server so they show fast and search engines read all of them. An SEO section tells you what each page still lacks.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Start building, free</Button>
        <Button href="#seo" size="large" variant="outline">See the SEO section</Button>
      </Stack>
    </Backdrop>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">One click</Paragraph>
          <Heading level="h2" size="xlarge">Press Publish, get an address</Heading>
          <Paragraph size="large" :muted="true">The green Publish button does the whole way by itself: what is not saved is saved, the saved work is built and put live, and a new site gets its own address at vueplay.com. Then it shows the address, with Open the site and Copy link.</Paragraph>
          <Paragraph :muted="true">If something goes wrong, it says which step and why, with Try again and the build's log.</Paragraph>
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of the Publish dialog: the steps done and the address of the site">
          <p class="vp-feat-art__title">Publish <small>bakery</small></p>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span class="vp-feat-dot vp-feat-dot--done">✓</span><span>Saving</span></li>
            <li class="vp-feat-art__item"><span class="vp-feat-dot vp-feat-dot--done">✓</span><span>Building</span></li>
            <li class="vp-feat-art__item"><span class="vp-feat-dot vp-feat-dot--done">✓</span><span>Setting up the address</span></li>
            <li class="vp-feat-art__item vp-feat-art__item--on"><span>bakery.vueplay.com<small>Your site is online</small></span><span class="vp-feat-btn vp-feat-btn--main">Open the site</span></li>
          </ul>
        </div>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Hosting that takes care of itself</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Your domain, fast pages, a way back</Heading>
      </Stack>
      <Columns :columns="3" gap="20px" min="250px">
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="globe-alt" title="Your own domain" text="Add a domain in the Launch section, prove it is yours with a DNS record, and point it at your site." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="server" title="Rendered on the server" text="Pages arrive as ready HTML, with the content from your data already in them, and come alive in the browser." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="clock" title="Staging and earlier versions" text="Try changes on a staging address first. The last versions that were live are kept, each with Restore." /></Card>
      </Columns>
    </Section>

    <Section anchor="seo">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the SEO section: a score for the site, and each page with its own score, the worst first">
          <div class="vp-feat-score"><strong>86</strong><span><b>Search score of the site</b><small>2 to fix, 3 to improve</small></span></div>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span class="vp-feat-num vp-feat-num--low">58</span><span>Menu<small>/menu · no description yet</small></span></li>
            <li class="vp-feat-art__item"><span class="vp-feat-num vp-feat-num--low">71</span><span>About<small>/about · no picture when shared</small></span></li>
            <li class="vp-feat-art__item"><span class="vp-feat-num vp-feat-num--ok">100</span><span>Front page<small>Fine</small></span></li>
          </ul>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">The SEO section</Paragraph>
          <Heading level="h2" size="xlarge">A score, and what to fix on each page</Heading>
          <Paragraph size="large" :muted="true">The SEO section gives the site one score and lists every page, the worst first. Open a page to see what it still lacks and set its title, description and picture right there.</Paragraph>
          <Feature icon="eye" layout="side" look="bare" title="Hidden pages" text="Hide a page from search engines and it is left out of the sitemap too." />
          <Feature icon="language" layout="side" look="bare" title="Language of the site" text="Tell search engines which language the site is written in." />
        </Stack>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Written for you</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Everything search engines and AI assistants read</Heading>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="document-text" title="sitemap.xml, robots.txt, llms.txt" text="Written each time you publish, for the address the site is published at. A file of your own is kept as it is." />
        <Feature icon="photo" title="Pictures when shared" text="A picture for the whole site, and one for any page, shown when a link is shared." />
        <Feature icon="check-badge" title="Rich results" text="Say what a page is, an article, an event, a local business, an organisation or a person, as structured data search engines read." />
      </Columns>
      <div class="vp-feat-chips vp-feat-chips--center" aria-label="The files written when the site is published">
        <code>/sitemap.xml</code><code>/robots.txt</code><code>/llms.txt</code>
      </div>
    </Section>

    <Section gap="28px">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Export</Paragraph>
          <Heading level="h2" size="xlarge">Or host it wherever you like</Heading>
          <Paragraph size="large" :muted="true">Your project is a normal Vue project. Download it, or push it to GitHub, and build it on any host that runs Vue. Publishing with Vue Play is a choice, not a lock.</Paragraph>
          <Button href="/features/code" variant="outline">Code and export</Button>
        </Stack>
        <pre class="vp-feat-code" aria-label="Building the exported project yourself">$ npm install
$ npm run build
<span class="c"># dist/ is ready for any static host</span></pre>
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
import { featureHead, pageSchema } from './featureList.js'
const description = 'Publish a Vue site in one click: your own domain, server-side rendering, an SEO score, sitemap, robots.txt and llms.txt, rich results and export.'
export default {
  name: 'FeaturesPublish',
  components: { FeatureLayout, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature },
  head() {
    return featureHead({
      path: '/features/publish',
      title: 'Publish and SEO for Vue sites · Vue Play Studio',
      description,
      schema: pageSchema({ path: '/features/publish', name: 'Publishing in Vue Play Studio', description }),
    })
  },
}
</script>
