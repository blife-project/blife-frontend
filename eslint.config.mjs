import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginPrettier from "eslint-plugin-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prettier/prettier": ["error"],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-empty-pattern": "off"
    },
  },
];
