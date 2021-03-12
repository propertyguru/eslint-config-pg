module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    ignorePatterns: ["/*.*"],
    plugins: ['@typescript-eslint/eslint-plugin','functional'],
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      "plugin:functional/external-recommended",
      "plugin:functional/no-mutations"
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "error",
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/explicit-module-boundary-types": ["error", {
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions:true,
        allowDirectConstAssertionInArrowFunctions:true,
        allowArgumentsExplicitlyTypedAsAny:true,
      }],
      "@typescript-eslint/explicit-function-return-type":"off",
      "@typescript-eslint/ban-types": [
        "error",
        {
          "types": {
            "{}": {
              "message": "Use object instead."
            },
            "Array": {
              "message": "Use [] instead."
            },
            "Boolean": {
              "message": "Use lowercase version instead."
            },
            "Function": {
              "message": "Use arrow function type signature instead."
            },
            "Number": {
              "message": "Use lowercase version instead."
            },
            "Object": {
              "message": "Use lowercase version instead."
            },
            "String": {
              "message": "Use lowercase version instead."
            }
          }
        }
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        { "selector": "class", "format": ["PascalCase"] }
      ],
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/dot-notation": "error",
      "@typescript-eslint/explicit-member-accessibility": [
        "off",
        {
          "accessibility": "explicit"
        }
      ],
      "@typescript-eslint/indent": [
        "error",
        2,
        {
          "FunctionDeclaration": {
            "parameters": "first"
          },
          "FunctionExpression": {
            "parameters": "first"
          }
        }
      ],
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "none",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ],
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-for-in-array": "off",
      "@typescript-eslint/no-inferrable-types": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-require-imports": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": true
        }
      ],
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      "@typescript-eslint/prefer-namespace-keyword": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/quotes": [
        "error",
        "single"
      ],
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/semi": [
        "error",
        "never"
      ],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          "path": "always",
          "types": "prefer-import",
          "lib": "always"
        }
      ],
      "@typescript-eslint/type-annotation-spacing": "error",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/unified-signatures": "error",
      "arrow-body-style": [
        "error",
        "always"
      ],
      "arrow-parens": [
        "error",
        "as-needed"
      ],
      "brace-style": [
        "error",
        "1tbs"
      ],
      "camelcase": "off",
      "comma-dangle": [
        "error",
        "always-multiline"
      ],
      "complexity": [
        "error",
        {
          "max": 5
        }
      ],
      "constructor-super": "error",
      "curly": "off",
      "default-case": "error",
      "eol-last": "error",
      "eqeqeq": [
        "error",
        "smart"
      ],
      "id-blacklist": [
        "error",
        "any",
        "Number",
        "number",
        "String",
        "string",
        "Boolean",
        "boolean",
        "Undefined",
        "undefined"
      ],
      "id-match": "error",
      "import/no-default-export": "off",
      "import/no-internal-modules": "off",
      "linebreak-style": "off",
      "max-classes-per-file": [
        "error",
        2
      ],
      "max-len": "off",
      "max-lines": [
        "error",
        300
      ],
      "new-parens": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-console": "warn",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-empty": "off",
      "no-eval": "error",
      "no-fallthrough": "error",
      "no-invalid-regexp": "error",
      "no-invalid-this": "off",
      "no-irregular-whitespace": "error",
      "no-magic-numbers": ["error", { ignoreDefaultValues: true, detectObjects: true , ignore:[0,1]}],
      "no-multiple-empty-lines": "error",
      "no-new-wrappers": "error",
      "no-null/no-null": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": ["error"],
      "no-regex-spaces": "error",
      "no-restricted-imports": "error",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-underscore-dangle": "error",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "no-var": "error",
      "no-void": "error",
      "object-shorthand": "error",
      "one-var": [
        "error",
        "never"
      ],
      "padding-line-between-statements": [
        "error",
        {
          "blankLine": "always",
          "prev": "*",
          "next": "return"
        }
      ],
      "prefer-const": "error",
      "prefer-object-spread": "error",
      "prefer-template": "error",
      "quote-props": [
        "error",
        "as-needed"
      ],
      "radix": "error",
      "space-before-function-paren": [
        "error",
        {
          "anonymous": "always",
          "asyncArrow": "always",
          "named": "never"
        }
      ],
      "space-in-parens": [
        "off",
        "never"
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          "markers": [
            "/"
          ]
        }
      ],
      "sort-keys":["error", "asc",{minKeys: 3}],
      "use-isnan": "error",
      "yoda": "error",
    },
  };
