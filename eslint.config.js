import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'eslint.config.js'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-x': reactX,
      'react-dom': reactDom,
      prettier: prettierPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,

      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
);
