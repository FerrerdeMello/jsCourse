/**
 * ESLint Configuration (Flat Config Format)
 * Documentação: https://eslint.org/docs/latest/use/configure/configuration-files-new
 *
 * PADRÃO DE DESIGN: Configuration Object Pattern
 * Centraliza todas as configurações em objetos estruturados,
 * facilitando manutenção e compreensão das regras aplicadas.
 *
 * IMPORTANTE: Este é o formato NOVO (ESLint 9+), chamado "Flat Config"
 * Substitui o antigo .eslintrc.* por ser mais simples e flexível.
 */

import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // Configuração base recomendada do ESLint
  // Fonte: https://eslint.org/docs/latest/rules/
  js.configs.recommended,

  // Configurações globais
  {
    // Define para quais arquivos estas regras se aplicam
    files: ['**/*.{js,jsx}'],

    // Configuração de linguagem
    languageOptions: {
      ecmaVersion: 'latest', // Suporta sintaxe JavaScript mais recente
      sourceType: 'module', // Código usa ES Modules (import/export)

      // Variáveis globais disponíveis
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',

        // Node.js globals (para arquivos de config)
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
      },

      // Parser options para JSX
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita parsing de JSX
        },
      },
    },

    // Plugins utilizados
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      prettier: prettierPlugin,
    },

    // Configurações específicas do React
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React instalada
      },
    },

    /**
     * REGRAS CUSTOMIZADAS
     * Documentação de cada regra disponível em: https://eslint.org/docs/latest/rules/
     */
    rules: {
      // ========================================
      // PRETTIER INTEGRATION
      // ========================================
      // Executa Prettier como regra do ESLint
      // Fonte: https://github.com/prettier/eslint-plugin-prettier
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],

      // ========================================
      // REACT RULES
      // ========================================
      // React 17+ não requer import React em arquivos JSX
      // Fonte: https://react.dev/blog/2020/09/22/introducing-the-new-jsx-transform
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Avisa sobre PropTypes faltando (boa prática para documentação)
      'react/prop-types': 'warn',

      // Previne variáveis JSX não utilizadas
      'react/jsx-uses-vars': 'error',

      // Garante uso correto de key em listas
      'react/jsx-key': 'error',

      // Previne uso de índice como key (anti-pattern)
      'react/no-array-index-key': 'warn',

      // ========================================
      // REACT HOOKS RULES
      // Fonte: https://react.dev/reference/rules/rules-of-hooks
      // ========================================
      ...reactHooksPlugin.configs.recommended.rules,

      // ========================================
      // REACT REFRESH (Vite Fast Refresh)
      // ========================================
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // ========================================
      // JAVASCRIPT BEST PRACTICES
      // ========================================

      // Console: Avisa sobre console.log (devem ser removidos em produção)
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Variáveis não utilizadas (com exceções úteis)
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // Ignora args que começam com _
          varsIgnorePattern: '^_', // Ignora vars que começam com _
        },
      ],

      // Variáveis não definidas
      'no-undef': 'error',

      // ========================================
      // CODE STYLE (complementam Prettier)
      // ========================================

      // Ponto e vírgula: OBRIGATÓRIO
      // Justificativa: Previne bugs de ASI (Automatic Semicolon Insertion)
      semi: ['error', 'always'],

      // Aspas: simples para JavaScript, duplas para JSX
      quotes: ['error', 'single', { avoidEscape: true }],

      // Vírgula trailing: ES5 style (objetos, arrays)
      'comma-dangle': ['error', 'es5'],

      // ========================================
      // MODERN JAVASCRIPT
      // ========================================

      // Proíbe uso de var (use let/const)
      // Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
      'no-var': 'error',

      // Prefere const quando variável não é reatribuída
      'prefer-const': 'error',

      // Prefere arrow functions em callbacks
      'prefer-arrow-callback': 'warn',

      // Prefere template literals em vez de concatenação
      'prefer-template': 'warn',

      // Prefere destructuring quando possível
      'prefer-destructuring': [
        'warn',
        {
          array: false, // Não força para arrays (pode ser verboso)
          object: true, // Força para objetos
        },
      ],

      // ========================================
      // COMPARISON & EQUALITY
      // ========================================

      // Força uso de === e !== (evita type coercion)
      eqeqeq: ['error', 'always'],

      // ========================================
      // ERROR PREVENTION
      // ========================================

      // Previne reatribuição de parâmetros de função
      'no-param-reassign': ['error', { props: false }],

      // Previne código unreachable
      'no-unreachable': 'error',

      // Previne comparações desnecessárias
      'no-constant-condition': 'warn',

      // Previne funções assíncronas sem await
      'require-await': 'warn',
    },
  },

  // Aplica configuração do Prettier por último para desabilitar regras conflitantes
  // Fonte: https://github.com/prettier/eslint-config-prettier
  prettierConfig,

  // Ignora arquivos/diretórios específicos
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      'vite.config.js',
    ],
  },
];

