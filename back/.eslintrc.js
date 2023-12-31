module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'sonarjs'],
  rules: {
    'eol-last': ['error', 'always'],
    'class-methods-use-this': ['error', { exceptMethods: ['up', 'down'] }],
    'linebreak-style': ['error', 'unix'],
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    camelcase: 'warn',
    'arrow-parens': [2, 'always'],
    //   no-promise-executor-return: off,
    //   quotes: [2, single],
    //   implicit-arrow-linebreak: off,
    //   consistent-return: off,
    //   @typescript-eslint/type-annotation-spacing: [error, { before: false, after: true }],
    //   @typescript-eslint/naming-convention: [
    //     error,
    //     {
    //       selector: property,
    //       format: [strictCamelCase],
    //       filter: {
    //         regex: ^_,
    //         match: false
    //       }
    //     }
    //   ],
    //   @typescript-eslint/no-unused-vars: [
    //     error,
    //     {
    //       argsIgnorePattern: ^_,
    //       ignoreRestSiblings: true
    //     }
    //   ],
    //   @typescript-eslint/lines-between-class-members: [
    //     error,
    //     always,
    //     { exceptAfterSingleLine: true }
    //   ],
    //   no-unused-vars: [
    //     error,
    //     {
    //       argsIgnorePattern: ^_,
    //       ignoreRestSiblings: true
    //     }
    //   ],
    //   import/no-import-module-exports: [error, { exceptions: [
    //     **/middlewares/mainValidations.ts,
    //     **/middlewares/permissions.ts,
    //     **/middlewares/validations.ts
    //   ] }],
    'object-curly-newline': 'off',
  //   template-curly-spacing: [error, always],
  //   max-params: [warn, 4],
  //   max-lines: off,
  //   max-lines-per-function: [
  //     warn,
  //     {
  //       max: 20,
  //       skipBlankLines: true,
  //       skipComments: true
  //     }
  //   ],
  //   max-len: [
  //     error,
  //     120,
  //     {
  //       ignoreComments: true
  //     }
  //   ],
  //   padding-line-between-statements: [error,
  //     { blankLine: always, prev: [const, if], next: *},
  //     { blankLine: never,    prev: [const], next: [const]}
  //   ],
  //   complexity: [error, 12],
  //   import/no-extraneous-dependencies: [off],
  //   sonarjs/cognitive-complexity: [error, 12],
  //   sonarjs/no-one-iteration-loop: [error],
  //   sonarjs/no-identical-expressions: [error],
  //   sonarjs/no-use-of-empty-return-value: [error],
  //   sonarjs/no-extra-arguments: [error],
  //   sonarjs/no-identical-conditions: [error],
  //   sonarjs/no-collapsible-if: [error],
  //   sonarjs/no-collection-size-mischeck: [error],
  //   sonarjs/no-duplicated-branches: [error],
  //   sonarjs/no-identical-functions: [error],
  //   sonarjs/no-redundant-boolean: [error],
  //   sonarjs/no-unused-collection: [error],
  //   sonarjs/no-useless-catch: [error],
  //   sonarjs/prefer-object-literal: [error],
  //   sonarjs/prefer-single-boolean-return: [error],
  //   sonarjs/no-inverted-boolean-check: [error]
  },
};
