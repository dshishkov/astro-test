import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      'no-unused-vars': 'error',
      'astro/semi': 'off',
    },
  },
  {
    ignores: ['.vercel/*'],
  },
]
