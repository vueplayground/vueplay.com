<template>
  <FeatureLayout current="/features/teams" title="Bring your team in" text="Make a team in the Studio, add the people you work with and share your projects with them.">
    <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="24px" width="wide">
      <router-link to="/features" class="vp-feat-crumb"><b>Features</b> Teams</router-link>
      <Heading level="h1" size="huge" align="center">Teams and shared projects</Heading>
      <Paragraph size="large" align="center" :muted="true" width="720px">Make a team, add the people you work with and give each a role. Share a project with a person, a team or another project, and everyone opens the same Vue project with its Git history.</Paragraph>
      <Stack spread="center" gap="12px">
        <Button href="https://studio.vueplay.com" size="large">Start building, free</Button>
        <Button href="#roles" size="large" variant="outline">See the roles</Button>
      </Stack>
    </Backdrop>

    <Section anchor="roles">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Teams</Paragraph>
          <Heading level="h2" size="xlarge">Everyone you work with, in one place</Heading>
          <Paragraph size="large" :muted="true">Make a team with a name, then add people by their name, username or e-mail. They need a Vue Play account, and they can accept or decline the invitation. Anyone can leave a team they are in.</Paragraph>
          <Feature icon="key" layout="side" look="bare" title="Owners" text="Add and remove people, and make someone an editor or an owner." />
          <Feature icon="paint-brush" layout="side" look="bare" title="Editors" text="Work on what the team has. Only an owner can change who is in it." />
        </Stack>
        <div class="vp-feat-art" role="img" aria-label="A drawing of a team: four people, each with a role">
          <p class="vp-feat-art__title">Team <small>Bakery web team</small></p>
          <ul class="vp-feat-art__list">
            <li v-for="one in people" :key="one.name" class="vp-feat-art__item">
              <span class="vp-feat-avatar" :style="{ background: one.color }" aria-hidden="true">{{ one.name.slice(0, 1) }}</span>
              <span>{{ one.name }}<small>{{ one.what }}</small></span>
              <span class="vp-feat-role" :class="{ 'vp-feat-role--owner': one.role === 'Owner' }">{{ one.role }}</span>
            </li>
          </ul>
          <p class="vp-feat-art__note">Find someone by name, username or e-mail…</p>
        </div>
      </Columns>
    </Section>

    <Section background="var(--vp-surface)">
      <Columns :columns="2" align="center" gap="56px" min="300px">
        <div class="vp-feat-art" role="img" aria-label="A drawing of the Share dialog of a project: shared with users, and with teams and projects">
          <div class="vp-feat-tabs"><span class="on">Users</span><span>Teams and Projects</span></div>
          <ul class="vp-feat-art__list">
            <li class="vp-feat-art__item"><span class="vp-feat-avatar" style="background:#0b7a5c" aria-hidden="true">M</span><span>Maria<small>Shared</small></span><span class="vp-feat-role">Editor</span></li>
            <li class="vp-feat-art__item"><span class="vp-feat-avatar" style="background:#00a6ff" aria-hidden="true">B</span><span>Bakery web team<small>Team</small></span><span class="vp-feat-role vp-feat-role--owner">Shared</span></li>
          </ul>
          <p class="vp-feat-art__note">Share with users… · Share with teams and projects…</p>
        </div>
        <Stack direction="column" align="start" gap="18px">
          <Paragraph size="small" class="vp-feat-eyebrow">Shared projects</Paragraph>
          <Heading level="h2" size="xlarge">Share a project with the people who need it</Heading>
          <Paragraph size="large" :muted="true">Share a project with single people, with a whole team, or with another project. What is shared with you is under Shared Projects in your account menu, next to your own.</Paragraph>
          <Feature icon="user-group" layout="side" look="bare" title="People or teams" text="Give a person access, or give it to a team and everyone in it has it, now and later." />
        </Stack>
      </Columns>
    </Section>

    <Section gap="32px">
      <Stack direction="column" align="center" spread="center" gap="14px">
        <Paragraph size="small" align="center" class="vp-feat-eyebrow">Working on one project</Paragraph>
        <Heading level="h2" size="xlarge" align="center">One project, each in the view that suits them</Heading>
        <Paragraph size="large" align="center" :muted="true" width="700px">A designer in Design, a developer in Develop, a client in Content: everyone opens the same files, in the view of the editor that suits their work.</Paragraph>
      </Stack>
      <Columns :columns="3" gap="36px" min="240px">
        <Feature icon="arrow-path" title="Work is combined" text="When someone saved newer work on the server, the Studio combines it with yours as you save, and says so." />
        <Feature icon="clipboard-document-check" title="History in Git" text="Every commit is kept with its message, so you can see what changed and when. Branches let one person try something without getting in the way." />
        <Feature icon="rocket-launch" title="Who put it live" text="The Launch section says when each version went live, who did it and from which commit, with Restore for the ones before." />
      </Columns>
      <Stack spread="center" gap="12px">
        <Button href="/features/views" variant="outline">See the views</Button>
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
import Feature from '@vueplayio/feature'
import FeatureLayout from './FeatureLayout.vue'
import { featureHead, pageSchema } from './featureList.js'
const description = 'Work together in Vue Play Studio: teams with owners and editors, projects shared with people, teams or other projects, and history kept in Git.'
const people = [
  { name: 'Ana', what: 'Design', role: 'Owner', color: '#10a37c' },
  { name: 'Maria', what: 'Develop', role: 'Editor', color: '#0b7a5c' },
  { name: 'Jonas', what: 'Content', role: 'Editor', color: '#00a6ff' },
  { name: 'Lee', what: 'Agent', role: 'Editor', color: '#d97706' },
]
export default {
  name: 'FeaturesTeams',
  components: { FeatureLayout, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Feature },
  data: () => ({ people }),
  head() {
    return featureHead({
      path: '/features/teams',
      title: 'Teams and shared projects · Vue Play Studio',
      description,
      schema: pageSchema({ path: '/features/teams', name: 'Teams in Vue Play Studio', description }),
    })
  },
}
</script>
