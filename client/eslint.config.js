import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginChaiFriendly from 'eslint-plugin-chai-friendly';
import pluginCypress from 'eslint-plugin-cypress/flat';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist/', '.yarn/', '**/.pnp.*'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  {
    files: ['**/*.{cjs,cts}'],
    languageOptions: {
      globals: globals.commonjs
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off'
    }
  },
  pluginCypress.configs.recommended,
  pluginChaiFriendly.configs.recommendedFlat,
  configPrettier,
);
