import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Fremd-Code (BMAD-METHOD) – nicht unser Projekt, wird auch im Build
    // per tsconfig ausgeschlossen. Sonst hunderte fremde Lint-Fehler.
    "docs/**",
    // Präsentations-Build-Skript (gehört nicht zur Web-App).
    "praesentation/**",
  ]),
]);

export default eslintConfig;
