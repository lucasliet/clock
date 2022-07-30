import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/clock/',
  plugins: [preact()],
  server: {
    open: true
  },
  build: { target: 'esnext' }
})
