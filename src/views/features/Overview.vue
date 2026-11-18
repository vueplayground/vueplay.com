<template>
  <FeatureLayout current="/features" :more="false">
    <!-- the reference: no big picture (the front page has that), every feature listed, grouped by part -->
    <Section space="medium" gap="22px" class="vp-feat-ref-head">
      <Paragraph size="small" class="vp-feat-eyebrow">Features</Paragraph>
      <Heading level="h1" size="xlarge">Every feature of Vue Play Studio</Heading>
      <Paragraph size="large" :muted="true" width="760px">The whole list, part by part, as it is today. Each part has a page of its own with pictures and the details.</Paragraph>
      <nav class="vp-feat-jump" aria-label="Parts of the Studio">
        <a v-for="group in groups" :key="group.id" :href="'#' + group.id">{{ group.name }}</a>
        <a href="#roles">Who uses what</a>
      </nav>
    </Section>

    <Section gap="20px" background="var(--vp-surface)">
      <div class="vp-feat-ref">
        <section v-for="group in groups" :id="group.id" :key="group.id" class="vp-feat-ref__group" :aria-labelledby="group.id + '-title'">
          <header class="vp-feat-ref__head">
            <span class="vp-feat-badge" aria-hidden="true"><Icon :name="group.icon" :size="22" color="var(--vp-primary)" /></span>
            <h2 :id="group.id + '-title'">{{ group.name }}</h2>
            <router-link v-if="group.page" :to="group.page" class="vp-feat-ref__more" :aria-label="group.name + ' in detail'">Details →</router-link>
          </header>
          <ul class="vp-feat-ref__list">
            <li v-for="item in group.items" :key="item[0]"><b>{{ item[0] }}</b> {{ item[1] }}</li>
          </ul>
        </section>
      </div>
    </Section>

    <Section anchor="roles" gap="28px">
      <Stack direction="column" gap="12px">
        <Paragraph size="small" class="vp-feat-eyebrow">Views</Paragraph>
        <Heading level="h2" size="xlarge">Who uses what</Heading>
        <Paragraph size="large" :muted="true" width="720px">Each view shows the panels for one kind of work. Any panel can be turned on in any view, and your own arrangement can be saved as a view of its own.</Paragraph>
      </Stack>
      <div class="vp-feat-table-wrap" tabindex="0" aria-label="Which panels each view shows">
        <table class="vp-feat-table">
          <thead>
            <tr><th scope="col">View</th><th v-for="panel in panels" :key="panel" scope="col">{{ panel }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="role in roles" :key="role.name">
              <th scope="row">{{ role.name }}<small>{{ role.who }}</small></th>
              <td v-for="panel in panels" :key="panel" :aria-label="role.has.includes(panel) ? 'Yes' : 'No'">{{ role.has.includes(panel) ? '●' : '' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>

    <Section background="var(--vp-surface)" gap="28px">
      <Heading level="h2" size="large">Each part in detail</Heading>
      <nav class="vp-feat-pages" aria-label="Feature pages">
        <router-link v-for="one in features" :key="one.path" :to="one.path" class="vp-feat-pages__link">
          <span class="vp-feat-badge" aria-hidden="true"><Icon :name="one.icon" :size="22" color="var(--vp-primary)" /></span>
          <span class="vp-feat-pages__words">
            <b>{{ one.name }}</b>
            <span>{{ one.text }}</span>
          </span>
        </router-link>
      </nav>
    </Section>
  </FeatureLayout>
</template>
<script>
import Heading from '@vueplayio/heading'
import Paragraph from '@vueplayio/paragraph'
import Stack from '@vueplayio/stack'
import Section from '@vueplayio/section'
import Icon from '@vueplayio/icon'
import FeatureLayout from './FeatureLayout.vue'
import { FEATURES, featureHead } from './featureList.js'
const description = 'Every feature of Vue Play Studio in one list: views for each role, design, animation, code and Git, data, the free AI chat, the component library, templates, publishing and SEO, Learn and teams.'

const groups = [
  { id: 'views', icon: 'squares-2x2', name: 'Views', page: '/features/views', items: [
    ['Eight views', 'Learn, Design, Animate, Develop, Backend, Agent, Content and Everything, and views of your own.'],
    ['Panels that move', 'Every panel can be dragged, docked, put in tabs or floated in a window of its own.'],
    ['Your own views', 'Save an arrangement and switch to it from the menu or with Cmd+Alt+1 to 8.'],
    ['A choice at the start', 'New people start in Learn and are asked once how they want to work.'],
  ] },
  { id: 'design', icon: 'paint-brush', name: 'Design', page: '/features/design', items: [
    ['Insert', 'Components, elements and whole ready-made pages, by dragging or a click.'],
    ['Change in place', 'Words written on the page; props, style and Tailwind classes in their panels.'],
    ['Style', 'Simple rows in plain words, or every CSS property in groups with a search.'],
    ['Screen sizes', 'Full width, tablet and phone at a click, with the page drawn at that width.'],
    ['Several at once', 'Select more than one element and move, copy, style or delete them together.'],
    ['The look of the site', 'Colours, fonts, corners and logo in one place; design tokens from Figma in and out.'],
    ['Pages', 'Real pictures of each page, their addresses, menus, copies and a header and footer per page.'],
    ['More languages', 'A copy of each page per language, kept in step, with the missing words translated by AI.'],
  ] },
  { id: 'motion', icon: 'film', name: 'Animation', page: '/features/design', items: [
    ['Timeline', 'Keyframes on a timeline under the page, with a curve for each step.'],
    ['When it plays', 'As the page opens, as a part scrolls into view, or while it crosses the screen.'],
    ['Its parts in turn', 'Animate the children of an element one after another, with a wait between.'],
    ['States', 'Hover, focus and pressed styles for any element, with how fast it changes.'],
  ] },
  { id: 'code', icon: 'code-bracket', name: 'Code and Git', page: '/features/code', items: [
    ['Real Vue', 'Single-file components in a normal Vue project; the canvas and the code are the same file.'],
    ['Code editor', 'The editor of VS Code, with Vue and TypeScript, beside the page or in a window of its own.'],
    ['Git', 'Commit, discard, branches and what changed, kept on Vue Play or pushed to GitHub.'],
    ['Packages', 'Search npm, add, update and remove packages in their own panel.'],
    ['Tailwind 3 and 4', 'Both, each site on its own version, with a way to upgrade.'],
    ['Export', 'Take the whole project and run it anywhere Vue runs.'],
  ] },
  { id: 'data', icon: 'circle-stack', name: 'Data', page: '/features/design', items: [
    ['Sources', 'Connect a CMS or any API in the Data panel, with ready settings for the common ones.'],
    ['Bind it', 'Show words, pictures and lists from your data, also before and after an element.'],
    ['Pages from content', 'One page per post or product, made from a source.'],
    ['Forms and sign-in', 'Forms and accounts that talk to your own backend.'],
  ] },
  { id: 'ai', icon: 'sparkles', name: 'AI', page: '/features/ai', items: [
    ['Free AI chat', 'For everyone who is signed in. It adds sections, writes words and fixes layouts.'],
    ['Asks first', 'A change to your files waits for your Allow, and one click takes back all it did.'],
    ['Your own model', 'Connect a model that runs on your own machine instead.'],
    ['A chat app for your sites', 'OpenAI-compatible servers and Anthropic, agents, tools over MCP, streamed answers.'],
  ] },
  { id: 'library', icon: 'swatch', name: 'Library and templates', page: '/features/templates', items: [
    ['Over 60 components', 'Page parts, pictures and motion, forms, maps, shop, admin, chat and a new 3D group.'],
    ['3D', 'Tilt and flip cards, a ring carousel, a spinning cube, deep text, floating shapes and a globe.'],
    ['17 templates', 'Whole sites with their pages, pictures and look, to change from top to bottom.'],
    ['Market', 'Sell your own components and templates, or buy those of others.'],
  ] },
  { id: 'publish', icon: 'rocket-launch', name: 'Publish and SEO', page: '/features/publish', items: [
    ['One click', 'Saved, built and live at a vueplay.com address, or on your own domain.'],
    ['Rendered on the server', 'Pages arrive ready to read for people and search engines.'],
    ['SEO section', 'A score for the site and what each page still lacks, one click from fixing.'],
    ['Written for you', 'sitemap.xml, robots.txt and llms.txt each time you publish.'],
    ['Rich results', 'Say what a page is, an article, an event, a product, in the terms search engines read.'],
  ] },
  { id: 'learn', icon: 'academic-cap', name: 'Learn', page: '/features/learn', items: [
    ['Page above code', 'The Learn view shows both, the same file.'],
    ['A tutor', 'Explains what you click, with links to the Vue guide.'],
    ['Nine tasks', 'From changing words to making a component, each ticking itself.'],
  ] },
  { id: 'teams', icon: 'user-group', name: 'Teams', page: '/features/teams', items: [
    ['Teams', 'Owners and editors, and projects shared with the people and teams you pick.'],
    ['Content view', 'For clients who keep the words and pictures up to date, with no layout tools.'],
  ] },
]

const panels = ['Insert', 'Content', 'Style', 'Pages', 'Code', 'Git', 'Data', 'Timeline', 'AI', 'Tutor']
const roles = [
  { name: 'Learn', who: 'Beginners and classes', has: ['Insert', 'Content', 'Style', 'Pages', 'Code', 'AI', 'Tutor'] },
  { name: 'Design', who: 'Designers', has: ['Insert', 'Content', 'Style', 'Pages', 'Timeline', 'AI'] },
  { name: 'Animate', who: 'Motion designers', has: ['Insert', 'Style', 'Timeline', 'AI'] },
  { name: 'Develop', who: 'Developers', has: ['Insert', 'Style', 'Code', 'Git', 'AI'] },
  { name: 'Backend', who: 'Integrators', has: ['Code', 'Git', 'Data', 'AI'] },
  { name: 'Agent', who: 'Working with AI', has: ['Pages', 'Git', 'AI'] },
  { name: 'Content', who: 'Editors and clients', has: ['Content', 'Pages', 'Data'] },
  { name: 'Everything', who: 'Every panel', has: panels },
]

export default {
  name: 'FeaturesOverview',
  components: { FeatureLayout, Heading, Paragraph, Stack, Section, Icon },
  data: () => ({ features: FEATURES, groups, panels, roles }),
  head() {
    return featureHead({
      path: '/features',
      title: 'Every feature of Vue Play Studio, the visual Vue editor',
      description,
      schema: {
        '@type': 'SoftwareApplication',
        name: 'Vue Play Studio',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web browser',
        url: 'https://studio.vueplay.com',
        description,
        featureList: groups.flatMap(group => group.items.map(item => item[0] + ': ' + item[1])),
        publisher: { '@type': 'Organization', name: 'Vue Play', url: 'https://vueplay.com' },
      },
    })
  },
}
</script>
<style>
.vp-feat-ref-head { padding-top: clamp(2.5rem, 6vw, 4.5rem); }
.vp-feat-jump { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px; }
.vp-feat-jump a {
  padding: 6px 14px;
  border: 1px solid var(--vp-border);
  border-radius: 999px;
  color: var(--vp-text);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color .15s, color .15s;
}
.vp-feat-jump a:hover { border-color: var(--vp-primary); color: var(--vp-primary); }
.vp-feat-ref {
  width: 100%;
  columns: 3 300px;
  column-gap: 28px;
}
.vp-feat-ref__group {
  break-inside: avoid;
  margin: 0 0 28px;
  padding: 22px 24px;
  border: 1px solid var(--vp-border);
  border-radius: 14px;
  background: var(--vp-background);
  scroll-margin-top: 90px;
}
.vp-feat-badge {
  display: inline-grid;
  place-items: center;
  flex: none;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  background: color-mix(in srgb, var(--vp-primary) 12%, transparent);
}
.vp-feat-badge > * { display: block; }
.vp-feat-ref__head { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
.vp-feat-ref__head h2 { flex: 1; }
.vp-feat-ref__head h2 { margin: 0; font-family: var(--vp-font-heading); font-size: 1.2rem; font-weight: 700; letter-spacing: -0.01em; }
.vp-feat-ref__more { flex: none; color: var(--vp-primary); font-size: 13px; font-weight: 600; text-decoration: none; }
.vp-feat-ref__more:hover { text-decoration: underline; }
.vp-feat-ref__list { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
.vp-feat-ref__list li { position: relative; padding-left: 24px; color: var(--vp-muted); line-height: 1.5; font-size: 15px; }
.vp-feat-ref__list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 6px;
  width: 12px;
  height: 7px;
  border-left: 2px solid var(--vp-primary);
  border-bottom: 2px solid var(--vp-primary);
  transform: rotate(-45deg);
}
.vp-feat-ref__list b { color: var(--vp-text); font-weight: 600; }
.vp-feat-table-wrap { width: 100%; align-self: stretch; overflow-x: auto; border: 1px solid var(--vp-border); border-radius: 14px; }
.vp-feat-table-wrap:focus-visible { outline: 2px solid var(--vp-primary); outline-offset: 2px; }
.vp-feat-table { width: 100%; min-width: 760px; border-collapse: collapse; font-size: 14px; }
.vp-feat-table th, .vp-feat-table td { padding: 12px 10px; border-bottom: 1px solid var(--vp-border); text-align: center; }
.vp-feat-table thead th { background: var(--vp-surface); font-weight: 600; color: var(--vp-muted); font-size: 13px; }
.vp-feat-table tbody th { text-align: left; font-weight: 600; white-space: nowrap; }
.vp-feat-table tbody th small { display: block; color: var(--vp-muted); font-weight: 400; font-size: 12px; }
.vp-feat-table td { color: var(--vp-primary); font-size: 16px; }
.vp-feat-table tbody tr:last-child > * { border-bottom: 0; }
.vp-feat-pages { width: 100%; align-self: stretch; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; }
.vp-feat-pages__link {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px;
  border: 1px solid var(--vp-border);
  border-radius: 12px;
  background: var(--vp-background);
  color: var(--vp-text);
  text-decoration: none;
  transition: border-color .15s, transform .15s;
}
.vp-feat-pages__link:hover { border-color: var(--vp-primary); transform: translateY(-2px); }
.vp-feat-pages__words { display: grid; gap: 4px; }
.vp-feat-pages__words span { color: var(--vp-muted); font-size: 14px; line-height: 1.45; }
</style>
