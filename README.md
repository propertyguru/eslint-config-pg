# ESLint and Prettier config

Recommended ESLint and Prettier for typescript codebase project in PropertyGuru

**Table of Contents**

- [ESLint and Prettier config](#eslint-and-prettier-config)
  - [Setup](#setup)
  - [Note for previous users.](#note-for-previous-users)
- [Documents](#documents)
- [TODO](#todo)

## Setup

1. Install package with your preferred package manager.

```
npm install -D @propertyguru/eslint-config-pg
```

**Note:** We recommend to use NPM v7 or newer because it can install peer dependencies automatically.

**OR**

```
yarn add --dev @propertyguru/eslint-config-pg
```

2. Create or modify .eslintrc.js file with following content.

```
{
  'extends': [
    'pg'
  ]
}
```

You can change `pg` to be another explicit configs. Here is available configs.

- `pg/configs/typescript` For TypeScript files only. This is default of `pg`.
- `pg/configs/react-typescript` For React and TypeScript files only.
- `pg/configs/react` For React files only.
- `pg/configs/javascript` For JavaScript files only.
- `pg/configs/legacy` For project that still using rule from v1.0.3. I preserved this for not cause breaking changes. We will remove it later.

**Note:** You can test above configs by using `npm run print:eslint:config` to see full config from ESLint.

3. Update `.prettierrc.json` with [.prettierrc.json](./.prettierrc.json) file from this repository. You can change value as you need. More options is [here](https://prettier.io/docs/en/options.html).

4. Update your `package.json` to add these custom `script` for using in your repo. You can change path of `./` to be another path. It's up to you.

```JSON
    "eslint": "eslint ./ --ext .js,.jsx,.ts,.tsx",
    "prettier": "prettier ./ --check",
    "lint": "npm run eslint && npm run prettier",
    "fix": "npm run eslint -- --fix && npm run prettier -- --write",
```

then you can use these commands under these scenarios.

- `npm run lint` or `yarn lint` when PR checking process happen or before you commit. You can add this as `pre-commit` by using [husky](https://typicode.github.io/husky/).
- `npm run fix` or `yarn fix` on local machine to make sure everythings is clean.

## Note for previous users.

You still can access previous major version from [here](https://github.com/propertyguru/eslint-config-pg/tree/v1.0.3). We will migrate rules from previous version into here later.

# Documents

- [FAQ](./docs/FAQ.md)

# TODO

- Migrate rules from [previous versions](https://github.com/propertyguru/eslint-config-pg/tree/v1.0.3) to new rule config.
  - eslint-plugin-functional
  - eslint-plugin-import
