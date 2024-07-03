/*
 * @Date: 2024-07-02 13:37:01
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-02 13:41:16
 * @Description: 
 */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    }
})