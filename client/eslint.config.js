import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import configPrettier from 'eslint-config-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from "eslint-plugin-vue";


export default tseslint.config(
  { ignores: ['dist/', '.yarn/', '**/.pnp.*' ]},
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },
  configPrettier,
);
