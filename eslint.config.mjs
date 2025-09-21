import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "standard",
    // 'plugin:tailwindcss/recommended',
    "prettier"
  ),
  {
    rules: {
      "no-undef": "off",
    },
    // ignores: [
    //   "components/ui//*",
    //   ".next//",
    //   "node_modules/**/",
    //   "dist//*",
    //   "out//*"
    // ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    rules: {
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
