import type { StorybookConfig } from "@storybook/react-vite";

// TODO: Can't import CSS here
// import "primeflex/primeflex.css";
// import "primeicons/fonts/primeicons.eot";
// import "primeicons/primeicons.css";
// import "primereact/resources/primereact.min.css";
// import "../src/index.css";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
