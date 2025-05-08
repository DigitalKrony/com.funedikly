/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import { defineConfig, globalIgnores } from "eslint/config";
import notice from "eslint-plugin-notice";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([globalIgnores(["_tpl/*"]), {
  plugins: {
    notice,
  },
  files: ["**/*.{ts, js, json}"],
  languageOptions: {
    globals: {},
    parser: tsParser,
    ecmaVersion: 5,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "notice/notice": ["error", {
      templateFile: "./../../common/config/eslint/copyright.js"
    }]
  },
}]);