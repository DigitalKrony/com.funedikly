/** @type { import('@storybook/react-webpack5').StorybookConfig } */
/** @type { import ('@types/node') } */

import * as path from 'path';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
 webpackFinal: async config => {
  config.resolve.alias = {
    '@': path.resolve(__dirname, `..`, `src`),
  };

  return config;
 }
};
export default config;
