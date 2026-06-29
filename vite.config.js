import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works on GitHub Pages project subpaths
  // (e.g. username.github.io/repo/) as well as custom domains / root.
  base: './',
  plugins: [react()],
})
