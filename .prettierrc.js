export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-astro'],
  importOrderSeparation: true,
  importOrder: ['^#(.*)$', '^[./]'],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx'],
  overrides: [
    { files: '*.svg', options: { parser: 'html' } },
    { files: '*.ts', options: { importOrderParserPlugins: ['typescript'] } },
    { files: '*.astro', options: { parser: 'astro' } },
  ],
}
