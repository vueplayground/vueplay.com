import {
    fileURLToPath,
    URL
} from 'url'
import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import dataUri from '@rollup/plugin-data-uri'

export default defineConfig({
    base: '/',
    plugins: [vue(), dataUri()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
        extensions: ['.vue', '.tsx', '.ts', '.mjs', '.js', '.jsx', '.json', '.wasm']
    }
})