// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * Turn OFF only the quotes/apostrophes-in-text rule.
 * Keep unused-var strict (allow names starting with "_").
 * Keep Next internal link rule and hooks deps as errors.
 */
export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "@next/next/no-html-link-for-pages": "error",
      "react-hooks/exhaustive-deps": "error"
    }
  }
];
