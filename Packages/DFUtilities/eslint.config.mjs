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
            misMatch: "Copyright [(]C[)] Design[:]Funedikly. All rights reserved.",
            template: "/*!\n * Copyright (C) Design:Funedikly. All rights reserved.\n */\n\n",
        }],
    },
}]);