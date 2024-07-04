/*
 * @Date: 2024-07-04 11:37:22
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-04 11:54:56
 * @Description: 
 */
import DefaultTheme from "vitepress/theme";
import { type App } from "vue";
import BstElement from "bst-element";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

import "@vitepress-demo-preview/component/dist/style.css"
import "bst-element/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", ElementPlusContainer);
    app.use(BstElement);
  },
};
