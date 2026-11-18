<template>
  <div class="vp-home">
    <Header style="position:sticky;top:0px;z-index:50"></Header>
    <main>
      <Backdrop kind="aurora" tone="light" color1="#10a37c" color2="#17e8c2" color3="#00a6ff" motion="calm" space="large" align="center" gap="26px" width="wide">
        <a class="vp-home-pill" href="/release-log"><span class="vp-home-pill__tag">New</span> The new Vue Play is here · see what changed</a>
        <Heading level="h1" size="huge" align="center">One editor for <span class="vp-home-grad">everyone who builds with Vue</span></Heading>
        <Paragraph size="large" align="center" :muted="true" width="700px">Designers, developers and AI working on the same code. Vue Play Studio is a visual editor that makes a real Vue project with Git, one you own and can take with you.</Paragraph>
        <Stack spread="center" gap="12px">
          <Button href="https://studio.vueplay.com" size="large">Start building, free</Button>
          <Button href="#templates" size="large" variant="outline">See the templates</Button>
        </Stack>
        <p class="vp-home-vue">
          <a class="vp-home-vue__made" href="https://vuejs.org" target="_blank" rel="noopener"><svg class="vp-home-vue__logo" viewBox="0 0 261.76 226.69" role="img" aria-label="Vue"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" class="vp-home-vue__inner" fill="#34495e"/></svg><span>Built for <b>Vue 3</b></span></a>
          <span class="vp-home-vue__dot" aria-hidden="true">·</span><span>Runs in the browser</span>
          <span class="vp-home-vue__dot" aria-hidden="true">·</span><span>Free to start</span>
          <span class="vp-home-vue__dot" aria-hidden="true">·</span><span>Export your code whenever you like</span>
        </p>
        <figure class="vp-home-shot vp-home-shot--hero" style="--shot: url(/landing/studio-design.png)">
          <div class="vp-home-shot__bar"><i></i><i></i><i></i><span>Vue Play Studio · Design</span></div>
          <div class="vp-home-shot__screen" role="img" aria-label="The Design view of Vue Play Studio: the page large in the middle, parts to add on the left, settings on the right"><span class="vp-home-shot__name">Design view</span></div>
        </figure>
      </Backdrop>
      <Section space="medium">
        <Columns :columns="4" min="150px" gap="24px">
          <Stat value="8" label="views of one editor" />
          <Stat value="17" label="templates to start from" />
          <Stat value="60+" label="components in the library" />
          <Stat value="1 click" label="to publish your site" />
        </Columns>
      </Section>
      <Section space="small" class="vp-home-vueband">
        <div class="vp-home-vueband__in">
          <svg class="vp-home-vueband__logo" viewBox="0 0 261.76 226.69" role="img" aria-label="The Vue logo"><path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/><path class="vp-home-vue__inner" d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/></svg>
          <div>
            <p class="vp-home-vueband__title">Made with Vue, for Vue</p>
            <p class="vp-home-vueband__text">Every site you make is a Vue 3 project of single-file components and Vue Router: the same code the Vue community writes, ready for any Vue developer to pick up.</p>
          </div>
          <a class="vp-home-vueband__link" href="https://vuejs.org" target="_blank" rel="noopener">About Vue ↗</a>
        </div>
      </Section>
      <Section anchor="views" background="var(--vp-surface)" gap="32px">
        <Stack direction="column" align="center" spread="center" gap="14px">
          <Paragraph size="small" align="center" class="vp-home-eyebrow">Views</Paragraph>
          <Heading level="h2" size="xlarge" align="center">The editor arranges itself for how you work</Heading>
          <Paragraph size="large" align="center" :muted="true" width="680px">Pick a view and the Studio shows the panels for that job. The project and the code stay the same, so a designer, a developer and an agent can work on one site without handing files back and forth.</Paragraph>
        </Stack>
        <Columns :columns="3" gap="20px" min="260px">
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="academic-cap" title="Learn" text="The page above its code, with a tutor that explains what you click." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="paint-brush" title="Design" text="The page large, with parts to add, words, pictures, style and the look of the site." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="sparkles" title="Animate" text="A timeline under the page and keyframes that play when the page opens or as it scrolls into view." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="code-bracket" title="Develop" text="The code beside the page, with the files, Git and packages." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="server" title="Backend" text="Connect the site to data and services: sources, bindings, logic and files." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="cpu-chip" title="Agent" text="The AI chat beside the page. Ask for a change, watch it happen, check it in Git." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="document-text" title="Content" text="For clients who keep a site up to date: pages, words and pictures, no layout tools." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="puzzle-piece" title="Everything" text="Every panel in its usual place, for when you want it all." /></Card>
          <Card look="outline" padding="28px" background="var(--vp-background)"><Feature icon="cursor-arrow-rays" title="Your own" text="Move, dock and tab any panel, then save the layout as a view of your own." /></Card>
        </Columns>
      </Section>
      <Section anchor="inside" gap="32px">
        <Stack direction="column" align="center" spread="center" gap="14px">
          <Paragraph size="small" align="center" class="vp-home-eyebrow">What is inside</Paragraph>
          <Heading level="h2" size="xlarge" align="center">Everything a Vue site needs, in one place</Heading>
          <Paragraph size="large" align="center" :muted="true" width="680px">Point at a card to see it lean, and open one for the whole story.</Paragraph>
        </Stack>
        <Columns :columns="4" gap="20px" min="230px">
          <TiltCard v-for="one in features" :key="one.path" look="shadow" tilt="10deg" depth="28px" class="vp-home-inside">
            <Feature :icon="one.icon" :title="one.name" :text="one.text" />
            <router-link :to="one.path" class="vp-home-inside__go">{{ one.name }} in detail →</router-link>
          </TiltCard>
        </Columns>
      </Section>
      <Section anchor="templates" width="full" gap="28px">
        <Stack direction="column" align="center" spread="center" gap="14px">
          <Paragraph size="small" align="center" class="vp-home-eyebrow">Templates</Paragraph>
          <Heading level="h2" size="xlarge" align="center">Start from one of 17 templates</Heading>
          <Paragraph size="large" align="center" :muted="true" width="680px">Each one is a whole site with its pages, pictures and look, built from the same components you edit. Pick one and change everything.</Paragraph>
        </Stack>
        <Marquee :seconds="70" gap="24px" label="Templates" class="vp-home-tiles">
          <Image src="/landing/templates/landing-page.jpg" alt="The Landing Page template" shape="16 / 10" radius="14px" caption="Landing page" class="vp-home-tile" />
          <Image src="/landing/templates/agency.jpg" alt="The Agency template" shape="16 / 10" radius="14px" caption="Agency" class="vp-home-tile" />
          <Image src="/landing/templates/portfolio-starter.jpg" alt="The Portfolio template" shape="16 / 10" radius="14px" caption="Portfolio" class="vp-home-tile" />
          <Image src="/landing/templates/blog-starter.jpg" alt="The Blog template" shape="16 / 10" radius="14px" caption="Blog" class="vp-home-tile" />
          <Image src="/landing/templates/ai-chat.jpg" alt="The AI Chat template" shape="16 / 10" radius="14px" caption="AI chat" class="vp-home-tile" />
          <Image src="/landing/templates/marketplace.jpg" alt="The Marketplace template" shape="16 / 10" radius="14px" caption="Marketplace" class="vp-home-tile" />
          <Image src="/landing/templates/webshop.jpg" alt="The Webshop template" shape="16 / 10" radius="14px" caption="Webshop" class="vp-home-tile" />
          <Image src="/landing/templates/restaurant.jpg" alt="The Restaurant template" shape="16 / 10" radius="14px" caption="Restaurant" class="vp-home-tile" />
          <Image src="/landing/templates/event.jpg" alt="The Event template" shape="16 / 10" radius="14px" caption="Event" class="vp-home-tile" />
        </Marquee>
        <Marquee :seconds="64" gap="24px" direction="right" label="More templates" class="vp-home-tiles">
          <Image src="/landing/templates/cv-starter.jpg" alt="The CV template" shape="16 / 10" radius="14px" caption="CV" class="vp-home-tile" />
          <Image src="/landing/templates/link-page.jpg" alt="The Link Page template" shape="16 / 10" radius="14px" caption="Link page" class="vp-home-tile" />
          <Image src="/landing/templates/services.jpg" alt="The Services template" shape="16 / 10" radius="14px" caption="Services" class="vp-home-tile" />
          <Image src="/landing/templates/documentation.jpg" alt="The Documentation template" shape="16 / 10" radius="14px" caption="Documentation" class="vp-home-tile" />
          <Image src="/landing/templates/non-profit.jpg" alt="The Non-profit template" shape="16 / 10" radius="14px" caption="Non-profit" class="vp-home-tile" />
          <Image src="/landing/templates/admin-dashboard.jpg" alt="The Admin Dashboard template" shape="16 / 10" radius="14px" caption="Admin dashboard" class="vp-home-tile" />
          <Image src="/landing/templates/shop-admin-starter.jpg" alt="The Shop Admin template" shape="16 / 10" radius="14px" caption="Shop admin" class="vp-home-tile" />
          <Image src="/landing/templates/helpdesk.jpg" alt="The Help Desk template" shape="16 / 10" radius="14px" caption="Help desk" class="vp-home-tile" />
        </Marquee>
        <Stack spread="center">
          <Button href="https://studio.vueplay.com" size="large">Pick a template</Button>
        </Stack>
      </Section>
      <FloatingShapes look="night" color1="#17e8c2" color2="#00a6ff" height="520px" class="vp-home-3d">
        <Paragraph size="small" align="center" class="vp-home-eyebrow vp-home-eyebrow--light">New in the library</Paragraph>
        <Heading level="h2" size="xlarge" align="center" color="#ffffff">3D, without writing a line of it</Heading>
        <Paragraph size="large" align="center" width="640px" color="rgba(255,255,255,.8)">Tilt cards, flip cards, a ring of pictures, a spinning cube, deep 3D text, floating shapes like these and a globe. Drop them on a page and pick their settings. Move your pointer here.</Paragraph>
        <Button href="/market/components" size="large" color="#17e8c2" textColor="#04161a">See the 3D components</Button>
      </FloatingShapes>
      <Section anchor="questions" width="narrow" gap="28px">
        <Heading level="h2" size="xlarge" align="center">Questions and answers</Heading>
        <Accordion :faq="true" :items="[{ title: 'Can I start for free?', text: 'Yes. Open the Studio, pick a template and start building. The pricing page shows what each plan includes.' }, { title: 'Do I own what I build?', text: 'Yes. Every project is a Vue project in a Git repository. You can export it and run it anywhere Vue runs.' }, { title: 'Do I need to know Vue?', text: 'No. You can build with the canvas, the templates and the AI chat. When you want to know how it works, the Learn view explains the code behind what you click.' }, { title: 'Can developers work in the same project?', text: 'Yes. The Develop view has the code, the files, Git and packages from npm. Code you write shows on the canvas, and what is changed on the canvas is written as code.' }, { title: 'Which AI does the chat use?', text: 'The chat in the editor is free for everyone who is signed in and runs on Vue Play’s own servers. You can also connect a model that runs on your own machine.' }, { title: 'Is Vue Play good for teaching?', text: 'Yes. The Learn view was made for beginners and classes: it runs in the browser, explains Vue as students click, and has small tasks that check themselves.' }]" />
      </Section>
      <Backdrop kind="mesh" tone="brand" color1="#10a37c" color2="#0b7a5c" color3="#17e8c2" motion="calm" space="large" align="center" gap="22px">
        <Heading level="h2" size="xlarge" align="center">Build your next Vue site with everyone on it</Heading>
        <Paragraph size="large" align="center" width="620px">Designers, developers, learners and AI, in one editor, on real code.</Paragraph>
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
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Backdrop from '@vueplayio/backdrop'
import Heading from '@vueplayio/heading'
import Paragraph from '@vueplayio/paragraph'
import Stack from '@vueplayio/stack'
import Button from '@vueplayio/button'
import Section from '@vueplayio/section'
import Columns from '@vueplayio/columns'
import Stat from '@vueplayio/stat'
import Card from '@vueplayio/card'
import Feature from '@vueplayio/feature'
import Marquee from '@vueplayio/marquee'
import Image from '@vueplayio/image'
import Accordion from '@vueplayio/accordion'
import TiltCard from '@vueplayio/tilt-card'
import FloatingShapes from '@vueplayio/floating-shapes'
import { FEATURES } from '@/views/features/featureList.js'
export default {
  name: 'Home',
  components: { Header, Footer, Backdrop, Heading, Paragraph, Stack, Button, Section, Columns, Stat, Card, Feature, Marquee, Image, Accordion, TiltCard, FloatingShapes },
  data: () => ({ features: FEATURES }),
  head() {
    return {
      title: 'Vue Play · One editor for everyone who builds with Vue',
      meta: [
        { name: 'description', content: 'A visual editor for Vue that makes a real Vue project with Git. Designers, developers and AI on the same code. 17 templates, free to start.' },
        { property: 'og:title', content: 'Vue Play · One editor for everyone who builds with Vue' },
        { property: 'og:description', content: 'A visual editor for Vue that makes a real Vue project with Git. Designers, developers and AI on the same code. 17 templates, free to start.' },
        { property: 'og:image', content: 'https://vueplay.com/landing/studio-design.png' },
        { property: 'og:url', content: 'https://vueplay.com/' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'canonical', href: 'https://vueplay.com/' }],
      script: [{ type: 'application/ld+json', innerHTML: '{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Vue Play Studio","applicationCategory":"DeveloperApplication","operatingSystem":"Web browser","url":"https://studio.vueplay.com","description":"A visual editor for Vue whose output is a real Vue project with Git that you own and can export. Designers, developers and AI work on the same code.","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"publisher":{"@type":"Organization","name":"Vue Play","url":"https://vueplay.com","logo":"https://vueplay.com/android-chrome-256x256.png"}}' }]
    }
  }
}
</script>
<style>
.vp-home {
  --vp-primary: #10a37c;
  --vp-primary-contrast: #ffffff;
  --vp-background: #ffffff;
  --vp-text: #0d1f1a;
  --vp-muted: #55666f;
  --vp-surface: #f2f7f5;
  --vp-border: #dfe8e5;
  --vp-radius: 12px;
  --vp-width: 1180px;
  --vp-font-heading: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--vp-background);
  color: var(--vp-text);
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  /* (the site's older Box component holds html, body and #app fixed to the window, so the page scrolls itself) */
  flex: 1 1 auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.vp-home.dark {
  --vp-primary: #2fd3a3;
  --vp-primary-contrast: #04140f;
  --vp-background: #0b1110;
  --vp-text: #eef4f2;
  --vp-muted: #9fb0ab;
  --vp-surface: #121b19;
  --vp-border: #24332f;
}
.vp-home main { display: block; }
.vp-home main > .vp-section[id], .vp-home main > .vp-backdrop[id] { scroll-margin-top: 110px; }

/* the small line over a heading */
.vp-home .vp-home-eyebrow {
  margin: 0;
  color: var(--vp-primary);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 13px;
}

/* the end of the main heading in the brand's colours, a shine going slowly over it */
.vp-home-grad {
  background: linear-gradient(100deg, #0b8f6c 0%, #10a37c 20%, #00a6ff 45%, #17c8a8 70%, #10a37c 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  animation: vp-home-shine 10s ease-in-out infinite alternate;
}
@keyframes vp-home-shine { to { background-position: 100% 0; } }
@media (prefers-reduced-motion: reduce) { .vp-home-grad { animation: none; } }

/* the cards that lead to the feature pages */
.vp-home-inside { height: 100%; }
.vp-home-inside__go { margin-top: auto; color: var(--vp-primary); font-weight: 600; text-decoration: none; }
.vp-home-inside__go:hover { text-decoration: underline; }
.vp-home-inside__go::after { content: ''; position: absolute; inset: 0; border-radius: inherit; }
.vp-home-eyebrow--light { color: #17e8c2 !important; }

/* under the buttons: the Vue logo, and what is true of every plan */
.vp-home-vue {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px 10px;
  margin: 0;
  color: var(--vp-muted);
  font-size: 14px;
}
.vp-home-vue__made {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px 4px 8px;
  border: 1px solid color-mix(in srgb, #41b883 40%, var(--vp-border));
  border-radius: 999px;
  background: color-mix(in srgb, #41b883 8%, var(--vp-background));
  color: var(--vp-text);
  text-decoration: none;
  transition: border-color 150ms ease;
}
.vp-home-vue__made:hover { border-color: #41b883; }
.vp-home-vue__made b { color: #2f9e6e; }
.vp-home-vue__logo { width: 20px; height: 18px; flex: none; }
.vp-home-vue__dot { opacity: .5; }
.dark .vp-home-vue__inner { fill: #c9d6e2; }
.dark .vp-home-vue__made b { color: #41b883; }
@media (max-width: 560px) { .vp-home-vue__dot { display: none; } .vp-home-vue > span:not(.vp-home-vue__dot) { width: 100%; text-align: center; } }

/* the band with the Vue logo */
.vp-home-vueband__in {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  box-sizing: border-box;
  padding: 22px 28px;
  border: 1px solid color-mix(in srgb, #41b883 35%, var(--vp-border));
  border-radius: 18px;
  background: linear-gradient(100deg, color-mix(in srgb, #41b883 10%, var(--vp-background)), var(--vp-background) 70%);
}
.vp-home-vueband__logo { flex: none; width: 64px; height: 56px; }
.vp-home-vueband__title { margin: 0 0 4px; font-family: var(--vp-font-heading); font-size: 1.25rem; font-weight: 800; color: var(--vp-text); }
.vp-home-vueband__text { margin: 0; color: var(--vp-muted); line-height: 1.55; }
.vp-home-vueband__link { flex: none; margin-left: auto; color: #2f9e6e; font-weight: 600; text-decoration: none; white-space: nowrap; }
.vp-home-vueband__link:hover { text-decoration: underline; }
@media (max-width: 700px) {
  .vp-home-vueband__in { flex-direction: column; align-items: flex-start; gap: 14px; padding: 22px; }
  .vp-home-vueband__link { margin-left: 0; }
}

/* the pill over the main heading */
.vp-home-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 16px 6px 6px;
  border: 1px solid var(--vp-border);
  border-radius: 999px;
  background: color-mix(in srgb, var(--vp-background) 75%, transparent);
  backdrop-filter: blur(6px);
  color: var(--vp-text);
  font-size: 14px;
  text-decoration: none;
  transition: border-color 0.15s;
}
.vp-home-pill:hover { border-color: var(--vp-primary); }
.vp-home-pill__tag {
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--vp-primary);
  color: var(--vp-primary-contrast);
  font-weight: 600;
  font-size: 12px;
}

/* a screenshot of the Studio in a window; until the picture is there, a sketch of the editor with the view's name */
.vp-home-shot {
  margin: 0;
  width: 100%;
  border: 1px solid var(--vp-border);
  border-radius: 14px;
  overflow: hidden;
  background: var(--vp-background);
  box-shadow: 0 30px 60px -30px rgba(6, 40, 30, 0.35), 0 8px 20px -10px rgba(6, 40, 30, 0.15);
  text-align: left;
}
.vp-home-shot--hero { max-width: 1120px; margin-top: 28px; }
.vp-home-shot__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-bottom: 1px solid var(--vp-border);
  background: var(--vp-surface);
  font-size: 12px;
  color: var(--vp-muted);
}
.vp-home-shot__bar i { width: 10px; height: 10px; border-radius: 50%; background: var(--vp-border); }
.vp-home-shot__bar span { margin-left: 10px; }
.vp-home-shot__screen {
  position: relative;
  /* (the name in the middle of the page part, between the side panels: 18% at the left, 22% at the right) */
  box-sizing: border-box;
  padding: 0 22% 0 18%;
  aspect-ratio: 1500 / 720;
  display: grid;
  place-items: center;
  --bar: color-mix(in srgb, var(--vp-border) 80%, transparent);
  --soft: color-mix(in srgb, var(--vp-primary) 14%, transparent);
  background:
    /* panels at the sides: rows of a list */
    linear-gradient(var(--bar), var(--bar)) 2.5% 8% / 12% 2.4% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 2.5% 15% / 9% 2.4% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 2.5% 22% / 11% 2.4% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 2.5% 29% / 8% 2.4% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 97.5% 8% / 16% 2.4% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 97.5% 16% / 16% 6% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 97.5% 27% / 16% 6% no-repeat,
    /* the page in the middle: a heading, a line, a button and three cards */
    linear-gradient(var(--bar), var(--bar)) 47.1% 14% / 30% 5% no-repeat,
    linear-gradient(var(--bar), var(--bar)) 47.4% 23% / 22% 2.4% no-repeat,
    linear-gradient(var(--vp-primary), var(--vp-primary)) 47.8% 31% / 8% 4.5% no-repeat,
    linear-gradient(var(--soft), var(--soft)) 26.2% 82% / 16% 26% no-repeat,
    linear-gradient(var(--soft), var(--soft)) 47.6% 82% / 16% 26% no-repeat,
    linear-gradient(var(--soft), var(--soft)) 69% 82% / 16% 26% no-repeat,
    linear-gradient(var(--vp-surface), var(--vp-surface)) left top / 18% 100% no-repeat,
    linear-gradient(var(--vp-surface), var(--vp-surface)) right top / 22% 100% no-repeat,
    linear-gradient(var(--vp-border), var(--vp-border)) 18% 0 / 1px 100% no-repeat,
    linear-gradient(var(--vp-border), var(--vp-border)) 78% 0 / 1px 100% no-repeat,
    var(--vp-background);
}
.vp-home-shot__name {
  padding: 8px 16px;
  border: 1px dashed var(--vp-border);
  border-radius: 999px;
  color: var(--vp-muted);
  font-size: 14px;
  background: var(--vp-background);
}
.vp-home-shot__screen::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--shot) center top / cover no-repeat;
}

/* the templates in moving rows */
.vp-home .vp-home-tile { width: 340px; }
.vp-home .vp-home-tile .vp-image__img { border: 1px solid var(--vp-border); }
.vp-home .vp-home-tile figcaption { margin-top: 10px; font-weight: 600; font-size: 15px; color: var(--vp-text); text-align: left; }
@media (max-width: 600px) {
  .vp-home .vp-home-tile { width: 250px; }
  .vp-home-shot__name { display: none; }
  .vp-home-pill { font-size: 13px; }
}
</style>
