# ESLint and Prettier config

Recommended ESLint and Prettier for TypeScript and React.js codebase project in PropertyGuru. Actually it can works for JavaScript as well but I recommend to use TypeScript for newer project.

**Table of Contents**

- [ESLint and Prettier config](#eslint-and-prettier-config)
  - [Setup](#setup)
  - [Note](#note)
- [Documents](#documents)

## Setup

1. Install package with your preferred package manager.

    ```bash
    npm install -D @propertyguru/eslint-config-pg husky lint-staged

    # PNPM
    pnpm add -D @propertyguru/eslint-config-pg husky lint-staged

    # Yarn classic or Yarn 1.x
    npx install-peerdeps -Y @propertyguru/eslint-config-pg
    yarn add --dev @propertyguru/eslint-config-pg husky lint-staged

    # Yarn modern or Yarn 2.x
    yarn add --dev @propertyguru/eslint-config-pg husky lint-staged
    ```

    Note: I recommend to use latest version of NPM or PNPM or Yarn 2 to make sure peerDependencies will install properly. In Yarn Classic version doesn't have this feature that why we need to run `npx install-peerdeps` as above.

2. Create or modify `.eslintrc.json` file with following content.

    ```
    {
      "extends": [
        "@propertyguru/pg"
      ]
    }
    ```

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

5. Run these command to add script commands to your project. You can change path of `./src` to be another path. It's up to you.

    ```bash
    npm pkg set scripts.eslint="eslint ./src --ext .js,.jsx,.ts,.tsx"
    npm pkg set scripts.prettier="prettier ./src --check"
    npm pkg set scripts.lint="npm run eslint && npm run prettier"
    npm pkg set scripts.fix="npm run eslint -- --fix && npm run prettier -- --write"
    ```

    then you can use these commands under these scenarios.

    - `npm run lint` or `yarn lint` when PR checking process happen or before you commit.
    - `npm run fix` or `yarn fix` on local machine to make sure everythings is clean.

6. On your `tsconfig.json` file. Please add these config to make absolute paths with `@/*` as prefix. This is best solution so far and it's default config on Next.js project as well.
    ```json
    {
      "compilerOptions": {
        // ...

        // You can add this way.
        "baseUrl": "./src",
        "paths": {
          "@/*": ["./*"]
        }

        // Or this way without baseUrl config.
        "paths": {
          "@/*": ["./src/*"]
        }
      }
    }
    ```

## Note

1. You can test eslint configs in this repo by running `npm run print:eslint:config` to see full config from ESLint.
2. For previous users. You still can access previous major version from [here](https://github.com/propertyguru/eslint-config-pg/tree/v1.0.3).
3. Please don't add another packages that have Eslint style only like Airbnb. We try to reduce dependency as much as we can.
4. If you still found you can't run `npm run lint` with error about missing packages from peerDependencies. Please run `npm info "@propertyguru/eslint-config-pg" peerDependencies` to check requires peerDependencies and add in your project manually.

# Documents

- [FAQ](./docs/FAQ.md)
