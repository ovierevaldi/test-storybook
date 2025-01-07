import type { StorybookConfig } from "@storybook/react-vite";
import { optimizeDeps } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core:{
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, {configType}){
    const { mergeConfig } = await import('vite');

    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode']
      }
    })
  }
};
export default config;
