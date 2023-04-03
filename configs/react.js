const typescript = require('./typescript')

module.exports = {
  ...typescript,
  overrides: [
    ...typescript.overrides,
    {
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
      ],
      settings: {
        react: {
          // If this line cause problem in future. Check https://github.com/yannickcr/eslint-plugin-react/issues/1955
          version: 'detect',
        },
      },
    },
  ],
}
