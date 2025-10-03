import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact, prettier: pluginPrettier },
    extends: ["js/recommended", pluginReact.configs.flat.recommended],
    languageOptions: {
      globals: globals.browser,
      parser: "@babel/eslint-parser",
      parserOptions: {
        ecmaVersion: 2025,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "prettier/prettier": "error",   // Mostra erros de formatação do Prettier
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
