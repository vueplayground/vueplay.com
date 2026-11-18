<template>
  <FeatureLayout current="/features/code" title="Real Vue code, from the first click" text="Open the Studio and look at the code behind any template. It is yours, in Git, ready to export.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Code</router-link>
      <Heading level="h1" size="huge" align="center">Real Vue code that you own</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Every change on the canvas is written as Vue in your project, and every line you write shows on the canvas. With Git, npm packages and GitHub built in, and nothing to convert when you leave.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Start building, free</Button>
        <Button href="#git" size="large" variant="outline">Git and GitHub</Button>
      </Stack>
      <Shot src="/landing/studio-develop.png" name="Develop" label="The Develop view: the code beside the page, with files and Git" :hero="true" />
    </Backdrop>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Code beside the page</Paragraph>
          <Heading level="h2" size="xlarge">One file, two ways to change it</Heading>
          <Paragraph size="large" :muted="true">The Develop view shows the code next to the page, or above it. Write in the editor and the page follows as you type; change something on the canvas and the code shows it. The panels read your own code back, so hand-written Vue stays editable visually.</Paragraph>
          <Feature icon="folder" layout="side" look="bare" title="Files and Find" text="The whole project as files: .vue, .js, .css, JSON. Search across every file with Find." />
          <Feature icon="cog-6-tooth" layout="side" look="bare" title="Logic" text="A component's script as a panel of its options: data, props, computed values, methods and the rest, each with a line on what it is for." />
        </Stack>
        <pre class="vp-feat-code" aria-label="A Vue single-file component, as the Studio writes it"><span class="t">&lt;template&gt;</span>
  <span class="t">&lt;Section</span> <span class="a">space</span>=<span class="s">"large"</span><span class="t">&gt;</span>
    <span class="t">&lt;Heading</span> <span class="a">level</span>=<span class="s">"h1"</span><span class="t">&gt;</span>Fresh bread daily<span class="t">&lt;/Heading&gt;</span>
    <span class="t">&lt;Button</span> <span class="a">href</span>=<span class="s">"/menu"</span><span class="t">&gt;</span>See the menu<span class="t">&lt;/Button&gt;</span>
  <span class="t">&lt;/Section&gt;</span>
<span class="t">&lt;/template&gt;</span>

<span class="t">&lt;script&gt;</span>
import Section from <span class="s">'@vueplayio/section'</span>
import Heading from <span class="s">'@vueplayio/heading'</span>
import Button from <span class="s">'@vueplayio/button'</span>
export default {
  components: { Section, Heading, Button }
}
<span class="t">&lt;/script&gt;</span></pre>
      </Columns>
    </Section>

    <Section anchor="git" background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the Git section: changed files, a commit message and the branch">
          <p class="vp-feat-art__title">Git <small>On main</small></p>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span>src/views/Home.vue<small>modified</small></span><span class="vp-feat-btn">Discard</span></li>
            <li class="vp-feat-art__item"><span>src/components/Menu.vue<small>new</small></span><span class="vp-feat-btn">Stage</span></li>
            <li class="vp-feat-art__item"><span>src/index.css<small>modified</small></span><span class="vp-feat-btn">Stage</span></li>
          </ul>
          <p class="vp-feat-art__note" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><span class="vp-feat-btn">New menu on the front page</span><span class="vp-feat-btn vp-feat-btn--main">Commit</span><span class="vp-feat-btn">Branches</span></p>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Git built in</Paragraph>
          <Heading level="h2" size="xlarge">Every project is a Git repository</Heading>
          <Paragraph size="large" :muted="true">See what changed, stage it and commit with a message. Discard a change you do not want. Make a branch to try something, switch between branches, and delete one when you are done.</Paragraph>
          <Feature icon="arrow-path" layout="side" look="bare" title="Connected to GitHub" text="Connect a repository of yours, then push what you commit and pull what others did. The Studio warns before anything would be lost." />
        </Stack>
      </Columns>
    </Section>

    <Section gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">The rest of a developer's tools</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Packages, export and what is next</Heading>
      </Stack>
      <Columns :columns="3" gap="20px" min="250px">
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="cube" title="Packages from npm" text="Search npm, add a package, update or remove one in the Packages section. Its tab shows how many are out of date." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="folder" title="Export, no lock-in" text="Download the whole project from Files, or push it to GitHub. It is a normal Vue and Vite project that runs anywhere Vue runs." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="command-line" title="A terminal is coming" text="A terminal in the editor is on its way. Until then, Packages and Git cover what you would type." /></Card>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Made for teams of both kinds</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Designers and developers on the same code</Heading>
        <Paragraph size="large" align="center" :muted="true" width="700px">The components are ordinary Vue with props. A developer can write a component, and a designer can place it and change its settings in the Props tab, with no handover in between.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="code-bracket" title="Plain Vue" text="Single-file components, Vue Router and Vite: a project any Vue developer knows." />
        <Feature icon="swatch" title="Your CSS, or Tailwind" text="Write CSS, use Tailwind 3 or 4, or both. The style panels read what is there." />
        <Feature icon="puzzle-piece" title="Components of your own" text="Make a component, give its props labels and controls, and release it for your other projects." />
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
const description = 'Vue Play Studio writes real Vue code beside the page: Git built in with commits and branches, npm packages, GitHub push and pull, and export.'
export default {
  name: 'FeaturesCode',
  components: { FeatureLayout, Shot, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature },
  head() {
    return featureHead({
      path: '/features/code',
      title: 'Real Vue code with Git · Vue Play Studio',
      description,
      image: '/landing/studio-develop.png',
      schema: pageSchema({ path: '/features/code', name: 'Code in Vue Play Studio', description }),
    })
  },
}
</script>
