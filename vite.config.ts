import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'design-system': path.resolve(__dirname, './src/design-system'),
      'node-fetch': 'isomorphic-fetch', // https://github.com/octokit/octokit.js/issues/2126
    },
  },
})
