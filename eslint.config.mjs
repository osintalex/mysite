import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  { ignores: ["node_modules", "dist", "build", "coverage"] },
  js.configs.recommended,
  prettierConfig,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.vitest },
    },
    plugins: { react, prettier },
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      "prettier/prettier": ["error"],
      "react/react-in-jsx-scope": "off",
    },
  },
];
