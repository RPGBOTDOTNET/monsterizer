import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest-setup.js"],

    coverage: {
      exclude: [
        "**/tests/**",
        "**/*.css",
        "**/*.type.ts",
        "**/*.test.{ts,tsx}",
        "main.tsx",
        "vitest-setup.ts",
      ],
      include: ["src/**/*.{ts,tsx}"],
      reporter: ["text", "json", "html"],
    },
    projects: [
      {
        extends: true,
        test: {
          include: ["src/**/*.test.{ts,tsx}"],
        },
      },
    ],
  },
});
