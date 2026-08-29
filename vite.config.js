import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* GitHub Pages serves a project site from /<repo>/, not the domain root, so
   every asset URL needs that prefix. Locally it must stay '/'. The deploy
   workflow sets DEPLOY_TARGET=gh-pages; nothing else does, so `npm run dev`
   and `npm run build` are unaffected.

   The router reads the same value back through import.meta.env.BASE_URL, so
   the base is configured in exactly one place. */
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/THE-POLAR-TRENDS/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    open: false
  }
});
