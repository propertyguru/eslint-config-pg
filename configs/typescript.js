const base = require('./javascript')

module.exports = {
  ...base,
  overrides: [
    ...base.overrides,
    {
      files: [
        '*.ts*', // ts,tsx
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        // We don't enable this because it will pick on this current directory.
        // You add this on your project if you need.
        // but `project` param should be enough.
        // tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: [
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
      },
    },
  ],
}
