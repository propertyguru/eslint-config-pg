# ESLint and Prettier config

Recommended ESLint and Prettier for typescript codebase project in PropertyGuru

## Setup
1. install package with your preferred package manager
``` 
npm install -D git+https://github.com/propertyguru/eslint-config-pg.git
```
**OR**

```
yarn add --dev git+https://github.com/propertyguru/eslint-config-pg.git
```


2. create or modify .eslintrc.js file with following content. and also update .prettierrc with .prettierrc file of this repository
```
{
  'extends': [
    'pg'
  ]
}
```
