import GitHub from '@auth/core/providers/github'
import Reddit from '@auth/core/providers/reddit'
import { defineConfig } from 'auth-astro'

export default defineConfig({
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_CLIENT_ID,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
    }),
    Reddit({
      clientId: import.meta.env.AUTH_REDDIT_ID,
      clientSecret: import.meta.env.AUTH_REDDIT_SECRET,
    }),
  ],
})
