// The pages of the Features section, in the order they are listed (the overview, the "More features" row at the
// end of each page), and the head() each page gives itself.
export const FEATURES = [
  { path: '/features/views', name: 'Views', icon: 'squares-2x2', text: 'The editor arranges itself for each role: learn, design, animate, develop, backend, agent or content.' },
  { path: '/features/learn', name: 'Learn', icon: 'academic-cap', text: 'The page above its code, a tutor that explains what you click, and nine tasks that tick themselves.' },
  { path: '/features/design', name: 'Design', icon: 'paint-brush', text: 'Insert parts, sections and whole pages, then change words, settings, style, motion and data.' },
  { path: '/features/code', name: 'Code', icon: 'code-bracket', text: 'Real Vue code beside the page, with Git, branches, npm packages, GitHub and export.' },
  { path: '/features/ai', name: 'AI', icon: 'sparkles', text: 'A free AI chat that makes the change in the editor, and a chat app for your own sites.' },
  { path: '/features/templates', name: 'Templates', icon: 'swatch', text: '17 whole sites to start from, a library of components, and a marketplace to sell your own.' },
  { path: '/features/publish', name: 'Publish', icon: 'rocket-launch', text: 'One click to go live, your own domain, pages rendered on the server and an SEO score.' },
  { path: '/features/teams', name: 'Teams', icon: 'user-group', text: 'Teams with owners and editors, and projects shared with the people and teams you pick.' },
]

const SITE = 'https://vueplay.com'

/**
 * The head of a feature page: title, description, sharing tags and the canonical address; `schema` (an object)
 * is written as JSON-LD.
 */
export function featureHead({ path, title, description, image = '/landing/studio-design.png', schema = null }) {
  const url = SITE + path
  const picture = SITE + image
  const head = {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: picture },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: url }],
  }
  if (schema) head.script = [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...schema }) }]
  return head
}

/** A WebPage about a part of Vue Play Studio */
export const pageSchema = ({ path, name, description }) => ({
  '@type': 'WebPage',
  name,
  description,
  url: SITE + path,
  isPartOf: { '@type': 'WebSite', name: 'Vue Play', url: SITE },
  about: { '@type': 'SoftwareApplication', name: 'Vue Play Studio', applicationCategory: 'DeveloperApplication', operatingSystem: 'Web browser', url: 'https://studio.vueplay.com' },
})
