import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@component/atom': path.resolve('./src/component/1_atom'),
      '@component/molecule': path.resolve('./src/component/2_molecule'),
      '@component/organism': path.resolve('./src/component/3_organism'),
      '@component/template': path.resolve('./src/component/4_template'),
      '@component/page': path.resolve('./src/component/5_page'),
      '@component/app': path.resolve('./src/component/6_app'),
    },
  },
})
