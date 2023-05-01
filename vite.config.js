import fs from 'fs'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dataUri from '@rollup/plugin-data-uri'

if (fs.existsSync('./cache')) fs.rmSync('./cache', { recursive: true })

export default defineConfig({
  plugins: [vue(), dataUri()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    extensions: ['.vue', '.tsx', '.ts', '.mjs', '.js', '.jsx', '.json', '.wasm']
  },
  define: {
    '{}': {}
  }
})