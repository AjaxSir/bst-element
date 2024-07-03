/*
 * @Date: 2024-07-02 15:21:29
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-02 15:30:23
 * @Description: 
 */
/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
