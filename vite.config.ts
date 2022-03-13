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
      'hooks': path.resolve(__dirname, './src/hooks'),
      'node-fetch': 'isomorphic-fetch', // https://github.com/octokit/octokit.js/issues/2126
      'utils': path.resolve(__dirname, './src/utils'),
    },
  },
})
