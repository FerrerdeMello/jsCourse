// eslint.config.js
import { defineConfig } from 'eslint/config';
import pluginPrettier from 'eslint-plugin-prettier';

export default defineConfig({
  files: ['**/*.{js,jsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    prettier: pluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error', // Faz Prettier reportar erros no ESLint
    'no-unused-vars': 'warn',     // Boa prática: avisar sobre variáveis não usadas
  },
});
