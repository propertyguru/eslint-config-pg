# ESLint and Prettier config

Recommended ESLint and Prettier for typescript codebase project in PropertyGuru

**Table of Contents**

- [ESLint and Prettier config](#eslint-and-prettier-config)
  - [Setup](#setup)
  - [Note](#note)
- [Documents](#documents)
- [TODO](#todo)

## Setup

1. Install package with your preferred package manager.

    ```bash
    npm install -D @propertyguru/eslint-config-pg
    # Or
    yarn add --dev @propertyguru/eslint-config-pg
    # Or
    pnpm install --dev @propertyguru/eslint-config-pg
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
    - `pg/configs/react-typescript` For React with TypeScript files.

3. Create Prettier config by copy [.prettierrc.json](./.prettierrc.json) file from this repository into root of your repository. You can change value as you need. More options is [here](https://prettier.io/docs/en/options.html).

4. Enable [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://typicode.github.io/husky/) in your repo. This will do pre-commit task for lint checker and run prettier automatically. Target directory will be `src/` so you can edit in `.lintstagedrc` later.

    You can run follow these commands.
    ```bash
    echo -e '{\n  "{src}/**/**.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"]\n}' > .lintstagedrc
    git add  .lintstagedrc
    npm pkg set scripts.prepare="husky install"
    npm run prepare
    npx husky add .husky/pre-commit "npx lint-staged"
    git add .husky/pre-commit
    ```

5. \[Optional\] Run these command to add script commands to your project. You can change path of `./src` to be another path. It's up to you.

    ```bash
    npm pkg set scripts.eslint="eslint ./src --ext .js,.jsx,.ts,.tsx"
    npm pkg set scripts.prettier="prettier ./src --check"
    npm pkg set scripts.lint="npm run eslint && npm run prettier"
    npm pkg set scripts.fix="npm run eslint -- --fix && npm run prettier -- --write"
    ```

    then you can use these commands under these scenarios.

    - `npm run lint` or `yarn lint` when PR checking process happen or before you commit.
    - `npm run fix` or `yarn fix` on local machine to make sure everythings is clean.

## Note

1. We recommend to use NPM v7 or newer because it can install peer dependencies automatically or you can use Yarn as well.
2. You can test eslint configs in this repo by running `npm run print:eslint:config` to see full config from ESLint.
3. For previous users. You still can access previous major version from [here](https://github.com/propertyguru/eslint-config-pg/tree/v1.0.3).

# Documents

- [FAQ](./docs/FAQ.md)

# TODO

- Migrate rules from [previous versions](https://github.com/propertyguru/eslint-config-pg/tree/v1.0.3) to new rule config.
  - eslint-plugin-functional
  - eslint-plugin-import
