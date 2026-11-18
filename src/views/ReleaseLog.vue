<template>
	<Page>
		<PageIntro eyebrow="Release log" title="Release log" text="Changelog of progress: new features, fixes, and improvements as they happen."></PageIntro>
		<Section space="small" width="narrow">
			<ol class="vp-releases">
				<li v-for="release in releases" :key="release.date + release.version" class="vp-release">
					<div class="vp-release__when">
						<time :datetime="release.date">{{ day(release.date) }}</time>
					</div>
					<div class="vp-release__body">
						<h2 class="vp-release__title">{{ release.version ? 'Release ' + release.version + (release.title ? ' · ' + release.title : '') : release.title }}</h2>
						<ul class="vp-release__items">
							<li v-for="(item, index) in release.items" :key="index">
								<span v-if="item[0]" class="vp-chip" :class="kindClass(item[0])">{{ item[0] }}</span>
								<span>{{ item[1] }}</span>
							</li>
						</ul>
					</div>
				</li>
			</ol>
			<Stack spread="center">
				<Button href="/roadmap" variant="outline">See the roadmap</Button>
			</Stack>
		</Section>
	</Page>
</template>
<script>
	import Page from '@/components/Page.vue';
	import PageIntro from '@/components/PageIntro.vue';
	import Section from '@vueplayio/section';
	import Stack from '@vueplayio/stack';
	import Button from '@vueplayio/button';
	import { pageHead } from '@/components/head.js';
	// Every release of the Studio, newest first (the same list as RELEASELOG.md in the Studio repository)
	export default {
		components: {
			Page,
			PageIntro,
			Section,
			Stack,
			Button
		},
		data: () => ({
			releases: [
				{
					"date": "2026-11-18",
					"version": "2.0.0",
					"title": "The new Vue Play",
					"items": [
					 [
					  "Feature",
					  "Views: the editor arranges itself for how you work, with Learn, Design, Animate, Develop, Backend, Agent, Content and Everything, plus views of your own (Cmd+Alt+1-8)"
					 ],
					 [
					  "Feature",
					  "Learn: the page above its code, a tutor that explains the selected element and the Vue in it, nine tasks that tick themselves, and Ask the tutor"
					 ],
					 [
					  "Feature",
					  "View → Sections turns any section on or off; every section can be moved, docked, tabbed and floated"
					 ],
					 [
					  "Feature",
					  "A new component library: 56 components, from sections and headings to a shop, admin tables and charts, an AI chat app, maps and forms"
					 ],
					 [
					  "Feature",
					  "17 templates: landing page, agency, portfolio, blog, AI chat, marketplace, webshop, restaurant, event, CV, link page, services, documentation, non-profit, admin dashboard, shop admin and help desk"
					 ],
					 [
					  "Feature",
					  "AI chat in the editor, free for everyone signed in: it asks before it changes anything, and one click takes it all back"
					 ],
					 [
					  "Feature",
					  "The AI chat app component talks to OpenAI-compatible servers (Ollama, LM Studio, OpenRouter) and Anthropic, with agents and tools over MCP"
					 ],
					 [
					  "Feature",
					  "SEO: a section with the site's search score and every page's issues one click from fixing; rich results; sitemap.xml, robots.txt and llms.txt written when you publish"
					 ],
					 [
					  "Feature",
					  "Pages: real pictures of each page, a search field, groups, copy and delete"
					 ],
					 [
					  "Feature",
					  "Packages: add, update and remove npm packages in their own section"
					 ],
					 [
					  "Feature",
					  "Content can be shown from your data (a CMS or an API), also the words before and after an element"
					 ],
					 [
					  "Feature",
					  "Commit, Discard and Preview sit next to Publish; a new start page, and a choice of view on first login"
					 ],
					 [
					  "Feature",
					  "Tailwind 4 alongside Tailwind 3, and a Tailwind panel with every class in groups"
					 ],
					 [
					  "Fix",
					  "Sign-in stays signed in across tabs: a newer token is taken over, and a call refused for a revoked token is made again"
					 ],
					 [
					  "Fix",
					  "A tab whose files are held by another tab no longer stays blank: it says so and starts by itself when they are free"
					 ]
					]
				},
				{
					"date": "2025-12-02",
					"version": "1.6.5",
					"title": "",
					"items": [
						[
							"Fix",
							"Fix json import"
						]
					]
				},
				{
					"date": "2025-12-02",
					"version": "1.6.4",
					"title": "",
					"items": [
						[
							"Fix",
							"Fix routing"
						]
					]
				},
				{
					"date": "2025-11-24",
					"version": "1.6.3",
					"title": "",
					"items": [
						[
							"Feature",
							"Prepared for offline usage"
						],
						[
							"Fix",
							"Several bug fixes and performance upgrades"
						]
					]
				},
				{
					"date": "2025-09-17",
					"version": "1.6.2",
					"title": "",
					"items": [
						[
							"Feature",
							"Added support for more css styles"
						]
					]
				},
				{
					"date": "2025-08-23",
					"version": "1.6.1",
					"title": "",
					"items": [
						[
							"Feature",
							"Toggle darkmode in monaco editor"
						]
					]
				},
				{
					"date": "2025-08-23",
					"version": "1.6.0",
					"title": "",
					"items": [
						[
							"Feature",
							"Darkmode improvements"
						]
					]
				},
				{
					"date": "2025-08-22",
					"version": "1.5.8",
					"title": "",
					"items": [
						[
							"Feature",
							"Darkmode in studio"
						]
					]
				},
				{
					"date": "2025-08-16",
					"version": "1.5.7",
					"title": "",
					"items": [
						[
							"Feature",
							"New toolbox view"
						],
						[
							"Feature",
							"Switch between visual & code view"
						],
						[
							"Feature",
							"Code & visual split view"
						],
						[
							"Feature",
							"Editor tabs"
						],
						[
							"Feature",
							"Git tool to track diffs & changes"
						],
						[
							"Feature",
							"Visual npm dependency manager"
						],
						[
							"Feature",
							"Shortcut for easier deployments"
						],
						[
							"Feature",
							"More user friendly launch tool"
						],
						[
							"Feature",
							"Improved navigation for mobile devices"
						]
					]
				},
				{
					"date": "2025-08-05",
					"version": "1.5.5 ~ 1.5.6",
					"title": "",
					"items": [
						[
							"Feature",
							"Add transform origin pivot"
						],
						[
							"Bugfix",
							"Fix OPFS issue reading symbolic link"
						]
					]
				},
				{
					"date": "2025-08-03",
					"version": "1.5.4",
					"title": "",
					"items": [
						[
							"Feature",
							"Changed from indexed-db fs storage to OPFS"
						]
					]
				},
				{
					"date": "2025-07-18",
					"version": "1.5.3",
					"title": "",
					"items": [
						[
							"Feature",
							"Build log"
						],
						[
							"Feature",
							"Design update for main menu"
						],
						[
							"Feature",
							"Sitemap generator"
						],
						[
							"Feature",
							"Automatic sitemap update for routes"
						]
					]
				},
				{
					"date": "2025-04-07",
					"version": "1.5.2",
					"title": "",
					"items": [
						[
							"Feature",
							"Global color swatches"
						],
						[
							"Feature",
							"Color shadings"
						],
						[
							"Feature",
							"Global stylesheet images"
						],
						[
							"Feature",
							"Width & height tooltip"
						]
					]
				},
				{
					"date": "2025-03-27",
					"version": "1.5.1",
					"title": "",
					"items": [
						[
							"Feature",
							"Merchant onboarding (Early Access)"
						],
						[
							"Feature",
							"Pricing of components & templates"
						],
						[
							"Feature",
							"Server Side Rendering"
						],
						[
							"Feature",
							"Global styling"
						],
						[
							"Feature",
							"Project cloning"
						],
						[
							"Feature",
							"Template based starter kits"
						],
						[
							"Feature",
							"Push to github for free users"
						]
					]
				},
				{
					"date": "2025-02-27",
					"version": "1.5.0",
					"title": "",
					"items": [
						[
							"Feature",
							"Route editor"
						]
					]
				},
				{
					"date": "2025-02-13",
					"version": "1.4.9",
					"title": "",
					"items": [
						[
							"Feature",
							"Drag & drop sections"
						]
					]
				},
				{
					"date": "2025-02-02",
					"version": "1.4.8",
					"title": "",
					"items": [
						[
							"Feature",
							"Comma separated filtering for styles and attributes"
						],
						[
							"Feature",
							"Improvements to component controllers"
						],
						[
							"Feature",
							"Support for component props with responsive breakpoints"
						],
						[
							"Feature",
							"Support for component props with darkmode breakpoints"
						],
						[
							"Feature",
							"Support for component props with selective breakpoints"
						]
					]
				},
				{
					"date": "2025-01-17",
					"version": "1.4.7",
					"title": "",
					"items": [
						[
							"Feature",
							"Fixed renderer after vue update"
						]
					]
				},
				{
					"date": "2025-01-16",
					"version": "1.4.6",
					"title": "",
					"items": [
						[
							"Feature",
							"Update to vue-3.5.13"
						]
					]
				},
				{
					"date": "2025-01-06",
					"version": "1.4.5",
					"title": "",
					"items": [
						[
							"Feature",
							"Share and transfer applications"
						],
						[
							"Feature",
							"Share and transfer components"
						]
					]
				},
				{
					"date": "2024-11-29",
					"version": "1.4.4",
					"title": "",
					"items": [
						[
							"Feature",
							"Teams management"
						],
						[
							"Feature",
							"Projects management"
						]
					]
				},
				{
					"date": "2024-11-28",
					"version": "1.4.3",
					"title": "",
					"items": [
						[
							"Feature",
							"Fix build"
						]
					]
				},
				{
					"date": "2024-11-28",
					"version": "1.4.2",
					"title": "",
					"items": [
						[
							"Feature",
							"Fix dependency injection"
						]
					]
				},
				{
					"date": "2024-11-27",
					"version": "1.4.1",
					"title": "",
					"items": [
						[
							"Feature",
							"Fixes"
						]
					]
				},
				{
					"date": "2024-11-27",
					"version": "1.4.0",
					"title": "",
					"items": [
						[
							"Feature",
							"All style controllers available for free"
						],
						[
							"Feature",
							"All elements available for free"
						],
						[
							"Feature",
							"Improved backend API"
						]
					]
				},
				{
					"date": "2024-07-15",
					"version": "1.3.2",
					"title": "",
					"items": [
						[
							"Feature",
							"Add zoom style control"
						],
						[
							"Feature",
							"Add transform-origin style control"
						]
					]
				},
				{
					"date": "2024-06-04",
					"version": "1.3.1",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Display id attribute in DOM tree"
						]
					]
				},
				{
					"date": "2024-04-29",
					"version": "1.3.0",
					"title": "",
					"items": [
						[
							"Feature",
							"Allow ctrl/cmd + s to save"
						]
					]
				},
				{
					"date": "2024-04-29",
					"version": "1.2.9",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Title adjustment for code editor"
						]
					]
				},
				{
					"date": "2024-04-29",
					"version": "1.2.8",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Require manual save on script edition using live code update editor"
						],
						[
							"Enhancement",
							"Enable save button in code editor only if code has changed"
						]
					]
				},
				{
					"date": "2024-03-23",
					"version": "1.2.7",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Add github workflow permissions"
						]
					]
				},
				{
					"date": "2024-03-20",
					"version": "1.2.6",
					"title": "",
					"items": [
						[
							"Feature",
							"Improved route explorer"
						]
					]
				},
				{
					"date": "2024-03-11",
					"version": "1.2.5",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Add update button to custom code editor"
						]
					]
				},
				{
					"date": "2024-03-10",
					"version": "1.2.4",
					"title": "",
					"items": [
						[
							"Fix",
							"Code edition in modal for mobile"
						]
					]
				},
				{
					"date": "2024-03-10",
					"version": "1.2.3",
					"title": "",
					"items": [
						[
							"Feature",
							"Code edition in separate window"
						],
						[
							"Feature",
							"Realtime code/view mirroring for open .vue file"
						]
					]
				},
				{
					"date": "2024-03-05",
					"version": "1.2.2",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Updated starter kit"
						]
					]
				},
				{
					"date": "2024-03-04",
					"version": "1.2.1",
					"title": "",
					"items": [
						[
							"Feature",
							"Added letter spacing"
						],
						[
							"Enhancement",
							"Updated color picker & other dependencies"
						]
					]
				},
				{
					"date": "2024-03-01",
					"version": "1.2.0",
					"title": "",
					"items": [
						[
							"Hotfix",
							"Error with new breadcrumb resolved"
						]
					]
				},
				{
					"date": "2024-03-01",
					"version": "1.1.9",
					"title": "",
					"items": [
						[
							"Feature",
							"Breadcrumb DOM navigation"
						],
						[
							"Feature",
							"Improved responsive code editor, opens in new window"
						],
						[
							"Enhancement",
							"Improved files and DOM layer views"
						]
					]
				},
				{
					"date": "2024-02-19",
					"version": "1.1.8",
					"title": "",
					"items": [
						[
							"Feature",
							"Updated starter kit for new applications"
						],
						[
							"Feature",
							"Add object-position & object-fit controls"
						],
						[
							"Feature",
							"Add new css units (svw, svh, lvw, lvh, dvw, dvh)"
						],
						[
							"Feature",
							"Support router links when running inside router"
						],
						[
							"Feature",
							"Default to File Explorer for apps"
						],
						[
							"Enhancement",
							"Update to latest vue, vue-router & tailwindcss"
						],
						[
							"Enhancement",
							"Update css style control design & improved controls"
						]
					]
				},
				{
					"date": "2024-02-06",
					"version": "1.1.7",
					"title": "",
					"items": []
				},
				{
					"date": "2024-01-25",
					"version": "1.1.6",
					"title": "",
					"items": []
				},
				{
					"date": "2024-01-10",
					"version": "1.1.5",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-05",
					"version": "1.1.4",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-05",
					"version": "1.1.3",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-05",
					"version": "1.1.2",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-05",
					"version": "1.1.1",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-05",
					"version": "1.1.0",
					"title": "",
					"items": []
				},
				{
					"date": "2023-12-04",
					"version": "1.0.9",
					"title": "",
					"items": []
				},
				{
					"date": "2023-10-21",
					"version": "1.0.8",
					"title": "",
					"items": []
				},
				{
					"date": "2023-09-26",
					"version": "1.0.7",
					"title": "",
					"items": []
				},
				{
					"date": "2023-08-14",
					"version": "1.0.6",
					"title": "",
					"items": []
				},
				{
					"date": "2023-07-24",
					"version": "1.0.5",
					"title": "",
					"items": []
				},
				{
					"date": "2023-07-17",
					"version": "1.0.4",
					"title": "",
					"items": []
				},
				{
					"date": "2023-07-07",
					"version": "1.0.3",
					"title": "",
					"items": []
				},
				{
					"date": "2023-06-20",
					"version": "1.0.2",
					"title": "",
					"items": [
						[
							"Enhancement",
							"Improved tailwind controller"
						],
						[
							"Enhancement",
							"Simplified GitHub Pages deployment"
						],
						[
							"Feature",
							"Keyboard element navigation"
						],
						[
							"Feature",
							"Breakpoint toggles"
						]
					]
				},
				{
					"date": "2023-06-12",
					"version": "1.0.1",
					"title": "",
					"items": [
						[
							"Design",
							"Improved navigation selector"
						],
						[
							"Design",
							"Improved style controller navigation"
						],
						[
							"Feature",
							"Server boost"
						],
						[
							"Feature",
							"Speed optimization"
						],
						[
							"Feature",
							"Tailwind style controller"
						],
						[
							"Feature",
							"Copy (keyboard shorcut supported)"
						],
						[
							"Feature",
							"Paste (keyboard shorcut supported)"
						],
						[
							"Feature",
							"Keyboard shorcut supported for delete"
						],
						[
							"Feature",
							"Keyboard shorcut supported for undo & redo"
						],
						[
							"Feature",
							"Improved context menu"
						]
					]
				},
				{
					"date": "2023-05-22",
					"version": "1.0.0",
					"title": "",
					"items": [
						[
							"Design",
							"New login screen"
						],
						[
							"Feature",
							"Gradient color selection"
						],
						[
							"Feature",
							"Default styles for elements"
						],
						[
							"Feature",
							"Table demo content"
						],
						[
							"Feature",
							"List demo content"
						],
						[
							"Feature",
							"Allow drop on template"
						],
						[
							"Feature",
							"Box shadow controller"
						],
						[
							"Feature",
							"Text shadow controller"
						],
						[
							"Feature",
							"Keyframe timeline view"
						],
						[
							"Bugfix",
							"Fix file overwrite when switching between files"
						]
					]
				},
				{
					"date": "2023-05-02",
					"version": "",
					"title": "First launch",
					"items": [
						[
							"Initial release",
							"Launched on Product Hunt"
						]
					]
				}
			]
		}),
		methods: {
			day(date) {
				const [year, month, dayOfMonth] = date.split('-').map(Number);
				const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				return dayOfMonth + ' ' + months[month - 1] + ' ' + year;
			},
			kindClass(kind) {
				if (kind === 'Feature' || kind === 'Initial release') return 'vp-chip--brand';
				if (/fix/i.test(kind)) return 'vp-chip--warn';
				return '';
			}
		},
		head() {
			return pageHead({
				title: 'Release log · Vue Play',
				description: 'Every Vue Play Studio release, newest first: the new features, fixes and improvements in each version since the first launch.',
				path: '/release-log'
			});
		}
	};

</script>
<style>
	.vp-releases {
		display: flex;
		flex-direction: column;
		margin: 0 0 40px;
		padding: 0;
		list-style: none;
	}

	.vp-release {
		display: grid;
		grid-template-columns: 9rem 1fr;
		gap: 1.5rem;
		padding: 1.75rem 0;
		border-bottom: 1px solid var(--vp-border);
	}

	.vp-release:first-child {
		padding-top: 0;
	}

	.vp-release__when {
		padding-top: 0.2rem;
		color: var(--vp-muted);
		font-size: 0.9375rem;
		font-variant-numeric: tabular-nums;
	}

	.vp-release__title {
		margin: 0 0 0.75rem;
		font-family: var(--vp-font-heading);
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.3;
	}

	.vp-release__items {
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.vp-release__items li {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		line-height: 1.55;
	}

	.vp-release__items .vp-chip {
		flex: none;
		font-size: 0.75rem;
	}

	@media (max-width: 640px) {
		.vp-release {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}
	}

</style>
