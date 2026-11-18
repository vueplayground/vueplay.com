import {
    fileURLToPath,
    URL
} from 'url'
import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import dataUri from '@rollup/plugin-data-uri'
import { sitemapPlugin } from './scripts/sitemap.mjs'

export default defineConfig({
    base: '/',
    // (sitemap.xml is made from src/router.js on every build: scripts/sitemap.mjs)
    plugins: [vue(), dataUri(), sitemapPlugin()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: ['.vue', '.tsx', '.ts', '.mjs', '.js', '.jsx', '.json', '.wasm']
    },
    build: {
        minify: 'esbuild'
    }
})
