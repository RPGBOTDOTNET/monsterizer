import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest-setup.js"],

    coverage: {
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
