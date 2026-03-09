// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { includeIgnoreFile } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
    ...storybook.configs["flat/recommended"]
]);

export default eslintConfig;
