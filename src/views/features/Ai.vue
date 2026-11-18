<template>
  <FeatureLayout current="/features/ai" title="Ask for it, watch it happen" text="Sign in to the Studio and open the AI chat. It is free, and everything it does can be taken back.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> AI</router-link>
      <Heading level="h1" size="huge" align="center">An AI that edits the same code you do</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Ask the free AI chat in the Studio to add a section, write the words or fix a layout. It makes the change in your project, in front of you, and one click takes it all back. And with the AI chat app component, your own sites get a chat of their own.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Try the AI chat, free</Button>
        <Button href="#chat-app" size="large" variant="outline">AI for your sites</Button>
      </Stack>
      <Shot src="/landing/studio-agent.png" name="Agent" label="The Agent view: the AI chat beside the page" :hero="true" />
    </Backdrop>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">In the editor</Paragraph>
          <Heading level="h2" size="xlarge">Changes, not suggestions</Heading>
          <Paragraph size="large" :muted="true">The chat works through the same steps you would: it inserts components, sets their props, writes styles, adds pages and edits files. You see each change on the canvas as it happens, and Git shows every line it touched.</Paragraph>
          <Feature icon="hand-raised" layout="side" look="bare" title="It asks first" text="Before it changes your files it asks: allow it once, or for the rest of the chat." />
          <Feature icon="arrow-path" layout="side" look="bare" title="One click takes it back" text="Take back puts every file the chat changed back as it was. Undo brings it all back again." />
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of the AI chat: a request, the steps the AI takes, and the question before it changes a file">
          <div class="vp-feat-chat">
            <div class="vp-feat-chat__me">Add a section with three opening hours cards under the hero</div>
            <span class="vp-feat-chat__step">Reads src/views/Home.vue</span>
            <span class="vp-feat-chat__step">Inserts Section, Columns and three Cards</span>
            <div class="vp-feat-chat__ask"><span>Change src/views/Home.vue?</span><span class="vp-feat-btn vp-feat-btn--main">Allow</span><span class="vp-feat-btn">Allow all in this chat</span><span class="vp-feat-btn">Deny</span></div>
            <div class="vp-feat-chat__ai">Done: the section is under the hero, with Monday to Friday, Saturday and Sunday.</div>
          </div>
        </div>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">What to ask for</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Everything the editor can do</Heading>
        <Paragraph size="large" align="center" :muted="true" width="680px">The chat is given the tools that fit what you ask, so it can work on any part of the site.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="puzzle-piece" title="Pages and sections" text="Insert components, fill in their settings, add a page or a whole section." />
        <Feature icon="document-text" title="Words" text="Write the text of a page, shorten it, or change its tone." />
        <Feature icon="paint-brush" title="Style and motion" text="Change the look, write CSS rules, add an animation with keyframes." />
        <Feature icon="server" title="Data" text="Connect a CMS or an API, bind its fields and make a page for each item." />
        <Feature icon="language" title="Languages" text="Translate the site's texts into the languages it is in." />
        <Feature icon="code-bracket" title="Code" text="Write and fix files, components and scripts, then check the result." />
      </Columns>
    </Section>

    <Section>
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the chat's choice of where the answers come from: Vue Play, or a model server of your own">
          <p class="vp-feat-art__title">Model from</p>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item vp-feat-art__item--on"><span>Vue Play<small>Free for everyone who is signed in</small></span></li>
            <li class="vp-feat-art__item"><span>Local<small>A model server on your own computer</small></span></li>
          </ul>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Free to use</Paragraph>
          <Heading level="h2" size="xlarge">Free for everyone who is signed in</Heading>
          <Paragraph size="large" :muted="true">The chat runs on Vue Play's own servers and costs nothing to use. When many ask at once, it tells you your place in line. Prefer to keep it on your machine? Point the chat at a model server on your own computer instead.</Paragraph>
        </Stack>
      </Columns>
    </Section>

    <Section anchor="chat-app" background="var(--vp-surface)" gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">AI chat app component</Paragraph>
        <Heading level="h2" size="xlarge" align="center">Put a full AI chat in your own sites</Heading>
        <Paragraph size="large" align="center" :muted="true" width="720px">The AI chat app is a component of the library: a whole chat app like the big ones, for your visitors. Drop it on a page, or start from the AI Chat template.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="20px" min="250px">
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="server" title="Your choice of service" text="OpenAI and any server that speaks its chat API, Anthropic, or a service of your own. Your key stays behind your own address, or visitors bring their own." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="wrench-screwdriver" title="Tools over MCP" text="Connect remote MCP servers. The chat lists their tools, asks the visitor before one runs if you want it to, and shows what was sent and what came back." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="user-group" title="Agents" text="Assistants set up for one kind of job: a name, instructions, starter questions and tools of their own. Visitors can make their own too." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="chat-bubble-left-right" title="A chat like the big ones" text="Chats down the side, answers streamed and written in Markdown, code with Copy, Stop, Edit and Try again." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="light-bulb" title="Thinking shown" text="Where the model thinks before it answers, the chat folds that away above the answer for those who want to read it." /></Card>
        <Card look="outline" padding="26px" background="var(--vp-background)"><Feature icon="photo" title="Pictures and files" text="Visitors can add pictures and text files to a message: chosen, dropped or pasted." /></Card>
      </Columns>
      <Stack spread="center" gap="12px">
        <Button href="/features/templates" variant="outline">See the AI Chat template</Button>
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
import FeatureLayout from './FeatureLayout.vue'
import Shot from './Shot.vue'
import { featureHead, pageSchema } from './featureList.js'
const description = 'A free AI chat in Vue Play Studio that makes changes in the editor, and an AI chat app component with agents and MCP tools for your own sites.'
export default {
  name: 'FeaturesAi',
  components: { FeatureLayout, Shot, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Card, Feature },
  head() {
    return featureHead({
      path: '/features/ai',
      title: 'AI that edits your Vue site · Vue Play Studio',
      description,
      image: '/landing/studio-agent.png',
      schema: pageSchema({ path: '/features/ai', name: 'AI in Vue Play Studio', description }),
    })
  },
}
</script>
