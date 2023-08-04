module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 12, // es2021
  },
  extends: [
    // Ref: https://eslint.org/docs/latest/rules/
    'eslint:recommended',
    // Need to put after eslint rule! Ref: https://github.com/prettier/eslint-config-prettier
    'prettier',
  ],
  plugins: [],
  rules: {
    // Please put rules for JS file only!
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-underscore-dangle': 'error',
    'no-console': 'error',

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['moment', 'moment-timezone'],
            message: 'moment is deprecated. Please use date-fns instead.',
          },
        ],
      },
    ],

    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],

    // Keep as historical config but it got ignore by Prettier.
    //
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'comma-spacing': [
    //   'error',
    //   {
    //     before: false,
    //     after: true,
    //   },
    // ],
    // 'eol-last': ['error', 'always'],
    // 'keyword-spacing': 'error',
    // 'no-trailing-spaces': 'error',
    // quotes: [
    //   'error',
    //   'single',
    //   {
    //     avoidEscape: true,
    //   },
    // ],
    // 'space-before-blocks': 'error',
    // 'space-infix-ops': 'error',
  },
  overrides: [
    {
      // For TypeScript
      files: [
        '*.ts*', // ts,tsx
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',

        // You might need to override this in your repo of your tsconfig.json isn't on root directory.
        project: ['./tsconfig.json'],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      plugins: ['@typescript-eslint', 'import', 'no-relative-import-paths'],
      extends: [
        'plugin:import/recommended',
        'plugin:import/typescript',
        // Ref: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
        'plugin:@typescript-eslint/recommended',
        // Ref: https://typescript-eslint.io/linting/typed-linting/
        // Ref: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Ref: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/strict.ts
        'plugin:@typescript-eslint/strict',
      ],
      rules: {
        // Ref: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': 'error',

        // Ref: https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/
        '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
        'import/no-duplicates': ['error', { 'prefer-inline': true }],
        'import/order': [
          'error',
          { groups: [['builtin', 'external', 'internal']] },
        ],

        // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
        '@typescript-eslint/naming-convention': [
          'error',
          // Allow camelCase variables, PascalCase variables, and UPPER_CASE variables
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          // Allow camelCase functions, and PascalCase functions
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'enum',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          // PascalCase for classes, and we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],

        'no-relative-import-paths/no-relative-import-paths': [
          'error',
          { allowSameFolder: true, rootDir: 'src', prefix: '@' },
        ],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      // For React
      files: ['*.{j,t}sx'],
      env: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['react'],
      extends: [
        // Ref: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
        'plugin:react/recommended',
        // Ref: https://www.npmjs.com/package/eslint-plugin-react-hooks
        'plugin:react-hooks/recommended',
        // Ref: https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
        'plugin:react/jsx-runtime',
      ],
      settings: {
        react: {
          // If this line cause problem in future. Check https://github.com/yannickcr/eslint-plugin-react/issues/1955
          version: 'detect',
        },
      },
    },
    {
      // For React TypeScript
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off', // Since we do not use prop-types. We use typescript.
        'react/require-default-props': 'off', // Since we do not use prop-types. We use typescript.
      },
    },
  ],
}
