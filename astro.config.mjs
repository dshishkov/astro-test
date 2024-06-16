import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import auth from 'auth-astro'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [auth()],
})
