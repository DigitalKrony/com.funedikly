
/*!
 * Copyright (C) Verizon. All rights reserved.
 */

module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['_tpl/*'],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'notice'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true
  },
  rules: {
    'notice/notice': ['error', {
      misMatch: "Copyright [(]C[)] Design[:]Funedikly. All rights reserved.",
      template: `/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

`
    }]
  }
};
