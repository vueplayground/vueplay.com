// sitemap.xml for vueplay.com, made from the router each time the site is built, so it never goes stale.
//
// Listed: every route that is one page (no `:param`, no catch-all, no redirect), except the private ones
// (accounts, checkouts, sign-in), plus the Market's public categories and the items in it (read from the
// manager when the build can reach it; without it the pages are still listed).
// A page's lastmod is when its view file last changed in git; where git cannot say, it is left out.
//
// Used by vite.config.js (the build writes dist/sitemap.xml; the dev server answers /sitemap.xml), and
// by hand: `node scripts/sitemap.mjs` prints it.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ORIGIN = 'https://vueplay.com'
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

// Pages kept out of search engines (they also say `robots: noindex` in their head, and robots.txt
// disallows them)
export const PRIVATE = [/^\/checkout(\/|$)/, /^\/profile$/, /^\/tokens$/, /^\/login$/, /^\/logout$/, /^\/authorize-/, /^\/signup(\/|$)/, /^\/market\/orders$/, /\/checkout(\/|$)/]

// The Market's categories that anyone can browse (the others are someone's own, or an admin's)
const MARKET_CATEGORIES = ['components', 'templates', 'priced']

// The routes array of src/router.js, read as JavaScript (its components are `() => import(…)`, which
// are never called here)
export function readRoutes(root = ROOT) {
  const text = readFileSync(join(root, 'src/router.js'), 'utf8')
  const start = text.search(/const\s+routes\s*=\s*\[/)
  if (start < 0) throw new Error('src/router.js has no `const routes = [`')
  let depth = 0, end = -1, quote = null
  const from = text.indexOf('[', start)
  for (let i = from; i < text.length; i++) {
    const ch = text[i]
    if (quote) {
      if (ch === '\\') i++
      else if (ch === quote) quote = null
      continue
    }
    if (ch === '/' && text[i + 1] === '/') { i = text.indexOf('\n', i); if (i < 0) break; continue }
    if (ch === '/' && text[i + 1] === '*') { i = text.indexOf('*/', i + 2) + 1; continue }
    if (ch === '"' || ch === "'" || ch === '`') quote = ch
    else if (ch === '[') depth++
    else if (ch === ']' && --depth === 0) { end = i + 1; break }
  }
  if (end < 0) throw new Error('could not find the end of the routes in src/router.js')
  return new Function(`return ${text.slice(from, end)}`)()
}

// Every page the routes make: its path and the view file it shows
export function pagesOf(routes, base = '') {
  const pages = []
  for (const route of routes || []) {
    const path = join('/', base, route.path || '').replace(/\/+$/, '') || '/'
    if (route.children?.length) pages.push(...pagesOf(route.children, path))
    if (!route.component || route.redirect) continue
    const file = /import\(\s*['"`]@\/([^'"`]+)['"`]\s*\)/.exec(String(route.component))?.[1]
    pages.push({ path, file: file ? 'src/' + file : null, meta: route.meta || {} })
  }
  return pages
}

export const listed = page =>
  !/[:*(?]/.test(page.path) && !PRIVATE.some(rule => rule.test(page.path)) &&
  page.meta?.sitemap !== false && !page.meta?.noindex && !page.meta?.private

// When a file last changed, from git (null where git is not there, as in a build from a tarball)
function changed(file, root) {
  if (!file) return null
  try {
    const at = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim()
    return at ? new Date(at).toISOString().split('.')[0] + 'Z' : null
  } catch (e) {
    return null
  }
}

// The items in the Market, at the address their page names as its own (MarketProduct.vue's canonical)
async function marketItems() {
  try {
    const query = 'https://manager.vueplay.io/applications?$limit=1000&public=true&published=true&hidden=false&$sort[updated_at]=-1'
    const response = await fetch(query, { signal: AbortSignal.timeout(10000) })
    if (!response.ok) return []
    const { data = [] } = await response.json()
    return data
      .filter(item => item?.slug && (item.type !== 'vue-sfc' || item.versions?.length))
      .map(item => ({
        path: `/market/${item.type === 'vue-sfc' ? 'components' : item.type === 'vue-template' ? 'templates' : 'all'}/${item.slug}`,
        lastmod: item.updated_at ? new Date(item.updated_at).toISOString().split('.')[0] + 'Z' : null
      }))
  } catch (e) {
    return []
  }
}

const escaped = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function sitemap({ root = ROOT, market = true } = {}) {
  const pages = pagesOf(readRoutes(root)).filter(listed)
  const market_ = pages.find(page => page.path === '/market')
  const entries = []
  const seen = new Set()
  const add = (path, lastmod, priority, changefreq = 'weekly') => {
    if (seen.has(path)) return
    seen.add(path)
    entries.push({ path, lastmod, priority, changefreq })
  }
  for (const page of pages) {
    const priority = page.path === '/' ? '1.0' : /^\/(pricing|features|market)$/.test(page.path) ? '0.9' : /^\/features\//.test(page.path) ? '0.8' : '0.6'
    add(page.path, changed(page.file, root), priority, page.path === '/release-log' || page.path === '/market' ? 'daily' : 'weekly')
  }
  if (market_) {
    for (const category of MARKET_CATEGORIES) add(`/market/${category}`, changed(market_.file, root), '0.7', 'daily')
    if (market) for (const item of await marketItems()) add(item.path, item.lastmod, '0.5')
  }
  const urls = entries.map(entry => [
    '  <url>',
    `    <loc>${escaped(ORIGIN + entry.path)}</loc>`,
    ...(entry.lastmod ? [`    <lastmod>${escaped(entry.lastmod)}</lastmod>`] : []),
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    '  </url>'
  ].join('\n'))
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

// The Vite plugin: the client build writes sitemap.xml into its output (over any copy from public/), and
// the dev server answers /sitemap.xml with the same
export function sitemapPlugin() {
  let config
  return {
    name: 'vueplay-sitemap',
    configResolved(resolved) {
      config = resolved
    },
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', async (req, res) => {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8')
        res.end(await sitemap({ root: config.root, market: false }))
      })
    },
    async closeBundle() {
      if (config.command !== 'build' || config.build.ssr) return
      const outDir = join(config.root, config.build.outDir)
      try {
        const text = await sitemap({ root: config.root })
        if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })
        writeFileSync(join(outDir, 'sitemap.xml'), text)
        config.logger.info(`sitemap.xml: ${(text.match(/<url>/g) || []).length} pages`)
      } catch (e) {
        // (a sitemap that cannot be made is not a site that cannot be built)
        config.logger.warn(`sitemap.xml was not made: ${e.message}`)
      }
    }
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const text = await sitemap()
  if (process.argv[2]) writeFileSync(process.argv[2], text)
  else process.stdout.write(text)
}
