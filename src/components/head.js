// The head of a page: its title and description, the tags a shared link shows, the one address search
// engines should list it under, and, for a private page, that it is kept out of search engines.
// Used as `head() { return pageHead({ … }) }` in a view.
export const ORIGIN = 'https://vueplay.com'
export const SHARE_IMAGE = ORIGIN + '/landing/studio-design.png'

export function pageHead({ title, description, path = '', image = SHARE_IMAGE, type = 'website', noindex = false, schema = null, status = 0 }) {
  const meta = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: 'Vue Play' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ]
  if (image) meta.push({ property: 'og:image', content: image }, { name: 'twitter:image', content: image })
  if (path && !noindex) meta.push({ property: 'og:url', content: ORIGIN + path })
  if (noindex) meta.push({ name: 'robots', content: 'noindex' })
  // (the server answers with this status: a page that is not there says 404)
  if (status) meta.push({ name: 'prerender-status-code', content: String(status) })
  const head = { title, meta }
  if (path && !noindex) head.link = [{ rel: 'canonical', href: ORIGIN + path }]
  if (schema) head.script = [schema].flat().map(one => ({ type: 'application/ld+json', innerHTML: JSON.stringify(one) }))
  return head
}

// A private page (an account, a checkout): a title and a line, never listed
export const privateHead = (title, description = 'Your Vue Play account: sign in, manage your profile, tokens, orders and checkout.') =>
  pageHead({ title, description, noindex: true })
