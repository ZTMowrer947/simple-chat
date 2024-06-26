import eslint from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals';
import tselint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser'

export default tselint.config(
  { ignores: ["dist/", "node_modules/"] },
  { files: ["**/*.{js,ts,mjs,cjs,mts,cts,vue}" ] },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslint.configs.recommended,
  ...tselint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tselint.parser,
      },
    }
  },
  {
    plugins: {
      'simple-import-sort': pluginImportSort
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn'
    },
  },
  configPrettier
)
