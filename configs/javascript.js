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
    'no-extra-bind': 'error',
    'no-implicit-globals': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
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
  overrides: [],
}
