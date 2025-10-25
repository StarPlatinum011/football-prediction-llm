import js from "@eslint/js";
import globals from "globals";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import * as pluginSecurityModule from "eslint-plugin-security";

const pluginSecurity = (pluginSecurityModule as any)?.default ?? pluginSecurityModule;

export default [
  {
    // First, ignore build and dependency directories
    ignores: ["dist/**", "node_modules/**", ".next/**"],
  },
  {
    // Base config for all JavaScript files
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
  },
  {
    // TypeScript specific config only for source files
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      security: pluginSecurity,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...pluginSecurity.configs.recommended.rules,
    },
  },
];