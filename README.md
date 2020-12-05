# ESLint and Prettier config

Recommended ESLint and Prettier for typescript codebase project in PropertyGuru

## Setup
1. install package with your preferred package manager
``` 
npm install --save-dev eslint-config-pg
```
**OR**

```
yarn add --dev eslint-config-pg
```


2. create or modify .eslintrc.js file with following content. and also update .prettierrc with .prettierrc file of this repository
```
{
  'extends': [
    'pg'
  ]
}
```
