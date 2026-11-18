<template>
  <FeatureLayout current="/features/learn" title="Learn Vue on a page of your own" text="Open the Studio, pick a template and click anything on it. The tutor is already waiting beside the code.">
    <Backdrop kind="grid" tone="light" color1="#f59e0b" color2="#10a37c" color3="#f97316" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Learn</router-link>
      <Heading level="h1" size="huge" align="center">Learn Vue by clicking your own page</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">The Learn view puts the page above its code. Click anything and a tutor tells you what it is and how the Vue in it works, with links to the Vue guide. Made for beginners, classes and anyone curious about the code behind a site.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Try Learn, free</Button>
        <Button href="#syllabus" size="large" variant="outline">What you will learn</Button>
      </Stack>
      <LearnShot />
    </Backdrop>

    <Section gap="32px">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">The page and its code</Paragraph>
          <Heading level="h2" size="xlarge">Two views of the same thing</Heading>
          <Paragraph size="large" :muted="true">The page is on top and its code is right under it. Type over a heading on the page and the code changes; change the code and the page follows. There is no copy to keep in step: they are the same file.</Paragraph>
          <Paragraph :muted="true">On a phone the code is left out to give the page room, and the tutor still explains what you tap.</Paragraph>
        </Stack>
        <pre class="vp-feat-code" aria-label="A small Vue page: a heading, a v-if and a button"><span class="t">&lt;template&gt;</span>
  <span class="t">&lt;h1&gt;</span>Hello {{ '{' + '{' }} name {{ '}' + '}' }}<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;p</span> <span class="a">v-if</span>=<span class="s">"open"</span><span class="t">&gt;</span>We are open<span class="t">&lt;/p&gt;</span>
  <span class="t">&lt;Button</span> <span class="a">:href</span>=<span class="s">"link"</span><span class="t">&gt;</span>Go<span class="t">&lt;/Button&gt;</span>
<span class="t">&lt;/template&gt;</span>

<span class="t">&lt;script&gt;</span>
export default {
  data: () => ({ name: <span class="s">'Ada'</span>, open: true, link: <span class="s">'/menu'</span> })
}
<span class="t">&lt;/script&gt;</span></pre>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the tutor: a Button component, what it is, and each piece of Vue in it with a link to the Vue guide">
          <p class="vp-feat-art__title">This element <small>Vue Play component</small></p>
          <pre class="vp-feat-code">&lt;Button :href="link"&gt;</pre>
          <ul class="vp-feat-art__list" style="margin-top:12px">
            <li class="vp-feat-art__item"><span><code>:href</code><small>The colon makes the value JavaScript: here the value named link in the script.</small></span></li>
            <li class="vp-feat-art__item"><span><code>&lt;Button&gt;</code><small>A component: a part of the page made in a file of its own.</small></span></li>
          </ul>
          <p class="vp-feat-art__note">Read more in the Vue guide · <span class="vp-feat-btn">✦ Ask the tutor</span></p>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">The tutor</Paragraph>
          <Heading level="h2" size="xlarge">Click to understand</Heading>
          <Paragraph size="large" :muted="true">Select any element and the Learn section says what it is for, shows its tag as it is written, and explains each piece of Vue in it in plain words.</Paragraph>
          <div class="vp-feat-chips" aria-label="What the tutor explains">
            <code v-pre>{{ }}</code><code>v-if</code><code>v-for</code><code>@click</code><code>:prop</code><code>class</code>
          </div>
          <Paragraph :muted="true">Each explanation links to the right page of the official Vue guide, for when you want to read more. An element with no Vue in it is called plain HTML, with a word on what Vue would look like.</Paragraph>
        </Stack>
      </Columns>
    </Section>

    <Section anchor="syllabus" gap="28px">
      <Stack direction="column" gap="14px">
        <Paragraph size="small" class="vp-feat-eyebrow">Try it · the syllabus</Paragraph>
        <Heading level="h2" size="xlarge">Nine tasks, nine ideas of Vue</Heading>
        <Paragraph size="large" :muted="true" width="760px">One step at a time, from words on a page to a component of your own. Each task has a hint and a bit of example code. When your page shows it done, it ticks itself and the next one opens. Only what you add counts, and your progress is kept for each project on your device.</Paragraph>
      </Stack>
      <div class="vp-learn-syllabus" role="table" aria-label="The nine tasks and what each teaches">
        <div class="vp-learn-syllabus__row vp-learn-syllabus__row--head" role="row">
          <span role="columnheader">#</span><span role="columnheader">The task</span><span role="columnheader">The idea of Vue</span><span role="columnheader">In the guide</span>
        </div>
        <div v-for="(task, i) in tasks" :key="task.title" class="vp-learn-syllabus__row" role="row">
          <span role="cell" class="vp-learn-syllabus__n">{{ i + 1 }}</span>
          <span role="cell"><b>{{ task.title }}</b></span>
          <span role="cell"><code>{{ task.code }}</code> {{ task.idea }}</span>
          <span role="cell"><a :href="task.doc" target="_blank" rel="noopener">{{ task.page }} ↗</a></span>
        </div>
      </div>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Ask the tutor</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Stuck? Ask, right beside your code</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">Ask the tutor writes a question about the element you picked, or the task you are on, into the AI chat. You read it, change it if you like, and send it. The chat is free for everyone who is signed in.</Paragraph>
      </Stack>
      <div class="vp-feat-art" style="max-width:640px;margin:0 auto" role="img" aria-label="A drawing of the AI chat with a question from Ask the tutor and an answer">
        <div class="vp-feat-chat">
          <div class="vp-feat-chat__me">How do I do this in Vue: Repeat an element for a list? Explain it simply, step by step.</div>
          <div class="vp-feat-chat__ai">Put the list in data(), then add v-for to the tag you want to repeat: <code>v-for="fruit in fruits"</code>. Vue makes one of it for each item…</div>
        </div>
      </div>
    </Section>

    <Section gap="32px">
      <Columns :columns="2" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="16px">
          <Paragraph size="small" class="vp-feat-eyebrow">A first lesson</Paragraph>
          <Heading level="h2" size="xlarge">From nothing to v-for in one class</Heading>
          <ol class="vp-learn-steps">
            <li><b>Open the Studio</b> in a browser and sign in. There is nothing to install.</li>
            <li><b>Make a site from a template</b>, the Blog or the Restaurant for example. It is a real Vue project, made for the student.</li>
            <li><b>Pick the Learn view.</b> The page is on top, its code under it.</li>
            <li><b>Click around.</b> The tutor says what each part is, and links to the guide.</li>
            <li><b>Do the first tasks</b>: change the words, add a Button, give an element a class, then show a value from the script.</li>
            <li><b>Ask the tutor</b> where it gets hard, about the element or the task.</li>
          </ol>
        </Stack>
        <Stack direction="column" align="start" gap="16px">
          <Paragraph size="small" class="vp-feat-eyebrow">For teachers</Paragraph>
          <Heading level="h2" size="xlarge">What a class gets</Heading>
          <Feature icon="globe-alt" layout="side" look="bare" title="Only a browser" text="School computers and Chromebooks need nothing installed." />
          <Feature icon="code-bracket" layout="side" look="bare" title="The code professionals write" text="Vue 3 single-file components, not a format made for teaching, so nothing has to be unlearned." />
          <Feature icon="user-group" layout="side" look="bare" title="Work to share" text="Put the class in a team and share projects with it, or let each student keep their own." />
          <Feature icon="arrow-trending-up" layout="side" look="bare" title="Room to grow" text="After the nine tasks, the Develop view, Git and packages from npm are one click away." />
        </Stack>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" width="narrow" gap="24px">
      <Heading level="h2" size="xlarge" align="center">Questions learners ask</Heading>
      <Accordion :faq="true" :items="questions" />
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
import Feature from '@vueplayio/feature'
import Accordion from '@vueplayio/accordion'
import FeatureLayout from './FeatureLayout.vue'
import LearnShot from './LearnShot.vue'
import { featureHead, pageSchema } from './featureList.js'
const description = 'Learn Vue 3 in the browser: the page above its code, a tutor that explains what you click, and nine tasks from {{ }} to your own component. For beginners and classes.'
// the Studio's path, in its order (learnPath.js), with the page of the Vue guide each task links to
const GUIDE = 'https://vuejs.org/guide/'
const tasks = [
  { title: 'Change the words on the page', code: '{{ }}', idea: 'A template is HTML that Vue fills in.', page: 'Template syntax', doc: GUIDE + 'essentials/template-syntax.html#text-interpolation' },
  { title: 'Add a Button', code: '<Button>', idea: 'A component is a part of the page made in a file of its own.', page: 'Components', doc: GUIDE + 'essentials/component-basics.html' },
  { title: 'Give an element a class', code: 'class', idea: 'Style an element through a class.', page: 'Class and style', doc: GUIDE + 'essentials/class-and-style.html' },
  { title: 'Show a value from the script', code: 'data()', idea: 'Values in the script show on the page, and change it when they change.', page: 'Reactivity', doc: GUIDE + 'essentials/reactivity-fundamentals.html' },
  { title: 'Show something only sometimes', code: 'v-if', idea: 'An element is there only while a value is true.', page: 'Conditional rendering', doc: GUIDE + 'essentials/conditional.html' },
  { title: 'Repeat an element for a list', code: 'v-for', idea: 'One element for each item of a list.', page: 'List rendering', doc: GUIDE + 'essentials/list.html' },
  { title: 'React to a click', code: '@click', idea: 'Do something when the visitor clicks.', page: 'Event handling', doc: GUIDE + 'essentials/event-handling.html' },
  { title: 'Pass a value to a component', code: ':prop', idea: 'A colon makes a setting JavaScript.', page: 'Props', doc: GUIDE + 'components/props.html' },
  { title: 'Make a component of your own', code: 'import', idea: 'Your own .vue file, used on the page.', page: 'Components', doc: GUIDE + 'essentials/component-basics.html' },
]
const questions = [
  { title: 'Do I need to know any code first?', text: 'No. The first task is changing words on a page. HTML and CSS come along as you go, and the tutor explains each part.' },
  { title: 'Which Vue does it teach?', text: 'Vue 3, written as single-file components: the same .vue files professional Vue projects are made of.' },
  { title: 'What does it cost?', text: 'You can start for free, and the AI tutor is free for everyone who is signed in. The pricing page shows what each plan includes.' },
  { title: 'Can I keep what I made?', text: 'Yes. Every project is a Vue project in Git. Publish it in one click, or export it and run it anywhere Vue runs.' },
  { title: 'Does the AI do the tasks for me?', text: 'It answers your questions. Ask the tutor writes a question into the chat for you to read and send, and the tasks only tick when your own page does them.' },
]
export default {
  name: 'FeaturesLearn',
  components: { FeatureLayout, LearnShot, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Feature, Accordion },
  data: () => ({ tasks, questions }),
  head() {
    return featureHead({
      path: '/features/learn',
      title: 'Learn Vue with a tutor · Vue Play Studio',
      description,
      image: '/landing/studio-learn.png',
      schema: pageSchema({ path: '/features/learn', name: 'Learn Vue in Vue Play Studio', description }),
    })
  },
}
</script>
<style>
.vp-learn-syllabus { display: grid; border: 1px solid var(--vp-border); border-radius: 14px; overflow: hidden; }
.vp-learn-syllabus__row { display: grid; grid-template-columns: 44px 1.2fr 1.6fr 1fr; gap: 14px; align-items: center; padding: 14px 18px; border-bottom: 1px solid var(--vp-border); font-size: 15px; }
.vp-learn-syllabus__row:last-child { border-bottom: 0; }
.vp-learn-syllabus__row--head { background: var(--vp-surface); color: var(--vp-muted); font-size: 13px; font-weight: 600; }
.vp-learn-syllabus__n { display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: color-mix(in srgb, #f59e0b 18%, transparent); color: #b45309; font-weight: 700; font-size: 13px; }
.vp-learn-syllabus code { padding: 1px 7px; border-radius: 6px; background: var(--vp-surface); border: 1px solid var(--vp-border); font: 600 13px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace; color: var(--vp-text); }
.vp-learn-syllabus__row span:not(.vp-learn-syllabus__n) { color: var(--vp-muted); line-height: 1.5; }
.vp-learn-syllabus b { color: var(--vp-text); font-weight: 600; }
.vp-learn-syllabus a { color: var(--vp-primary); font-weight: 600; text-decoration: none; white-space: nowrap; }
.vp-learn-syllabus a:hover { text-decoration: underline; }
@media (max-width: 760px) {
  .vp-learn-syllabus__row { grid-template-columns: 36px 1fr; row-gap: 4px; }
  .vp-learn-syllabus__row > span:nth-child(n + 3) { grid-column: 2; }
  .vp-learn-syllabus__row--head { display: none; }
}
.vp-learn-steps { margin: 0; padding: 0; list-style: none; counter-reset: step; display: grid; gap: 14px; }
.vp-learn-steps li { counter-increment: step; position: relative; padding-left: 44px; color: var(--vp-muted); line-height: 1.55; }
.vp-learn-steps li::before { content: counter(step); position: absolute; left: 0; top: -2px; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--vp-primary); color: var(--vp-primary-contrast, #fff); font-weight: 700; font-size: 14px; }
.vp-learn-steps b { color: var(--vp-text); }
</style>
