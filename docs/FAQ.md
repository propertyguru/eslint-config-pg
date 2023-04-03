**FAQ**

- [I don't see any errors of Prettier in VScode.](#i-dont-see-any-errors-of-prettier-in-vscode)
- [I don't see rules like `comma-dangle` or `quotes`. Why?](#i-dont-see-rules-like-comma-dangle-or-quotes-why)
- [I don't want to run prettier command everytimes. Do we have any better way?](#i-dont-want-to-run-prettier-command-everytimes-do-we-have-any-better-way)
  - [VS Code](#vs-code)

## I don't see any errors of Prettier in VScode.

We integrate Prettier with ESLint by following [this document](https://prettier.io/docs/en/integrating-with-linters.html). Please check it. It recommends to use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) that it will be faster than using [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). Trades off will be it won't be part of ESLint so it can't show in VScode but you can do [this way](#i-dont-want-to-run-prettier-command-everytimes-do-we-have-any-better-way).

## I don't see rules like `comma-dangle` or `quotes`. Why?

We use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) package so it will turn off all rules that might conflict with Prettier. Even we add them. It will override by this package anyways.

## I don't want to run prettier command everytimes. Do we have any better way?

### VS Code

You can install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) then add these settings by [opening user settings as JSON format](https://stackoverflow.com/a/65909052/16171350). It will run Prettier as formatter when you save file.

```JSON
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```
