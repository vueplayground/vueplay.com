<template>
  <FeatureLayout current="/features/views" title="Work the way your role works" text="Open the Studio, pick a view and start. You can change it whenever you like, the project stays where it is.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Views</router-link>
      <Heading level="h1" size="huge" align="center">An editor that arranges itself for each role</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Learn, Design, Animate, Develop, Backend, Agent or Content: pick a view and the Studio shows the sections for that job. The project, what is selected and the history stay as they are.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Start building, free</Button>
        <Button href="#views" size="large" variant="outline">See the views</Button>
      </Stack>
      <Shot src="/landing/studio-design.png" name="Design" label="The Design view: the page large in the middle, parts to add on the left, settings on the right" :hero="true" />
    </Backdrop>

    <Section anchor="views" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Built-in views</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Eight ways into one project</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">Each view turns on the sections its work needs and leaves the rest out of the way. Find them under View → Views, or press the keys beside each.</Paragraph>
      </Stack>
      <Columns :columns="4" gap="20px" min="250px">
        <Card v-for="(one, i) in views" :key="one.name" look="outline" padding="24px" gap="14px" background="var(--vp-background)">
          <Feature :icon="one.icon" :title="one.name" :text="one.text" />
          <span class="vp-feat-keys" :aria-label="'Cmd or Ctrl, Alt and ' + (i + 1)"><kbd>⌘</kbd><kbd>⌥</kbd><kbd>{{ i + 1 }}</kbd></span>
        </Card>
      </Columns>
      <Paragraph size="small" align="center" :muted="true">⌘ ⌥ on a Mac, Ctrl Alt on Windows and Linux.</Paragraph>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">One project</Paragraph>
          <Heading level="h2" size="xlarge">A designer, a developer and an agent on the same site</Heading>
          <Paragraph size="large" :muted="true">A view changes only the editor. The designer sees the page large, the developer sees the code beside it, and the Agent view puts the AI chat next to the page. They all work on the same files, so nobody hands anything over.</Paragraph>
          <Feature icon="code-bracket" layout="side" look="bare" title="Develop and Backend" text="The code beside the page. Develop adds files, logic, Git and packages; Backend opens the Data section for sources and bindings." />
          <Feature icon="document-text" layout="side" look="bare" title="Content" text="For the people who keep a site up to date: pages, words, pictures, data and search, with no layout tools to break things with." />
        </Stack>
        <Shot src="/landing/studio-develop.png" name="Develop" label="The Develop view: the code beside the page, with files and Git" />
      </Columns>
    </Section>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the View menu: the list of views with their keys, and a view of one's own at the end">
          <p class="vp-feat-art__title">View → Views <small>one at a time</small></p>
          <ul class="vp-feat-art__list">
            <li v-for="(one, i) in views.slice(0, 5)" :key="one.name" class="vp-feat-art__item" :class="{ 'vp-feat-art__item--on': i === 2 }">
              <span>{{ one.name }}</span>
              <span class="vp-feat-keys"><kbd>⌘</kbd><kbd>⌥</kbd><kbd>{{ i + 1 }}</kbd></span>
            </li>
            <li class="vp-feat-art__item"><span>Everything, Content, Learn …</span></li>
            <li class="vp-feat-art__item"><span>My review layout <small>a view of your own</small></span></li>
          </ul>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Your own views</Paragraph>
          <Heading level="h2" size="xlarge">Arrange it, then keep it</Heading>
          <Paragraph size="large" :muted="true">Every section can be moved, docked beside another, put in a tab or opened in a window of its own. When the editor is the way you like it, save it as a view with a name. Rename it or remove it later; your views are kept on your device.</Paragraph>
          <div class="vp-feat-chips"><span>Move</span><span>Dock</span><span>Tab</span><span>Float</span><span>Save as a view</span></div>
        </Stack>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">View → Sections</Paragraph>
          <Heading level="h2" size="xlarge">Every section, on or off</Heading>
          <Paragraph size="large" :muted="true">Want Git in the Design view, or the timeline while you write code? View → Sections lists every section of the editor with a tick. Turn one on and it is there; turn it off and it is gone until you want it again.</Paragraph>
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of View → Sections: a list of the editor's sections, most of them ticked">
          <p class="vp-feat-art__title">View → Sections</p>
          <ul class="vp-feat-art__list">
            <li v-for="one in sections" :key="one.name" class="vp-feat-art__item">
              <span class="vp-feat-dot" :class="{ 'vp-feat-dot--done': one.on }">{{ one.on ? '✓' : '' }}</span>
              <span>{{ one.name }}</span>
            </li>
          </ul>
        </div>
      </Columns>
    </Section>

    <Section gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">First start</Paragraph>
        <Heading level="h2" size="xlarge" align="center">It asks how you want to work</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">The first time you open the Studio it starts in Learn and asks once which view suits you. Pick one, and that is how the editor opens from then on.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="academic-cap" title="New to Vue?" text="Learn puts the page above its code, with a tutor and small tasks." />
        <Feature icon="paint-brush" title="Designing?" text="Design gives the page the room, with parts to add and the look of the site." />
        <Feature icon="cpu-chip" title="Working with AI?" text="Agent puts the chat beside the page and Git to look over what changed." />
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
const description = 'Views arrange Vue Play Studio for each role: Learn, Design, Animate, Develop, Backend, Agent, Content, Everything, or a layout of your own.'
// in the order of their keys (Cmd/Ctrl + Alt + 1 to 8); the words are the Studio's own
const views = [
  { name: 'Design', icon: 'paint-brush', text: 'The page large, with what is inserted, its content and style, the pages, the look and search.' },
  { name: 'Animate', icon: 'clock', text: 'For motion: the timeline under the page, keyframes in the styles, and the style and settings of what moves.' },
  { name: 'Develop', icon: 'code-bracket', text: 'The code beside the page, with the files, logic, Git and packages.' },
  { name: 'Backend', icon: 'server', text: 'For connecting the site to data and services: data sources and bindings, logic, files, packages and Git.' },
  { name: 'Agent', icon: 'sparkles', text: 'The AI chat beside the page: ask for a change, see it happen, and look over what changed in Git.' },
  { name: 'Content', icon: 'document-text', text: 'For keeping a site up to date: the pages, their words and pictures, the data and search. No layout tools.' },
  { name: 'Learn', icon: 'academic-cap', text: 'The page above and its code below, what the selected element is and the Vue in it, small tasks to try, and the AI to ask.' },
  { name: 'Everything', icon: 'squares-2x2', text: 'Every section, in the usual places.' },
]
const sections = [
  { name: 'Components and Elements', on: true },
  { name: 'Content, Props and Style', on: true },
  { name: 'Pages, Look and SEO', on: true },
  { name: 'Files, Git and Packages', on: false },
  { name: 'Data', on: false },
  { name: 'AI', on: true },
  { name: 'Timeline', on: true },
]
export default {
  name: 'FeaturesViews',
  components: { FeatureLayout, Shot, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature },
  data: () => ({ views, sections }),
  head() {
    return featureHead({
      path: '/features/views',
      title: 'Views: an editor for each role · Vue Play Studio',
      description,
      schema: pageSchema({ path: '/features/views', name: 'Views in Vue Play Studio', description }),
    })
  },
}
</script>
