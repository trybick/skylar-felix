import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  basePath: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  ...compat
    .extends(
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
      'plugin:@typescript-eslint/recommended',
      'eslint-config-prettier'
    )
    .map((config) => ({
      ...config,
      settings: {
        ...config.settings,
        react: {
          version: 'detect',
        },
      },
    })),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/no-named-as-default': 'off',
      'jsx-a11y/no-autofocus': 'off',
    },
  },
];
