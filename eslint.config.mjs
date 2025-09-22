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
 * We extend Next's recommended configs, then add:
 * - turn OFF react/no-unescaped-entities (so you don't have to escape every ' and ")
 * - keep unused-vars STRICT, but allow names that start with "_" on purpose
 * - keep Next internal-link rule and hooks deps rule as errors (quality, not fluff)
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
