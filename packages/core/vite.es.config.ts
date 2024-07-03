/*
 * @Date: 2024-07-03 13:22:50
 * @LastEditors: xiaolong.su@bst.ai
 * @LastEditTime: 2024-07-03 13:46:49
 * @Description: 
 */
import { defineConfig } from 'vite';
import  vue  from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// import type { Plugin } from 'vue'
const COM_NAME = [
    "Button"
]

export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: '../../tsconfig.build.json',
            outDir: "dist/types"
        })
    ],
    build: {
        outDir: "dist/es",
        lib: {
            entry: './index.ts',
            name: 'BstElement',
            fileName: 'index',
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue'
            ],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetsFile: any) => {
                    if (assetsFile.name === 'style.css') return 'index.css'
                    return assetsFile.name as string;
                },
                manualChunks(id: string) {
                    if (id.includes('node_modules')) {
                        return 'vendor'
                    }
                    if (id.includes('packages/hooks')) {
                        return 'hooks'
                    }
                    if (id.includes('packages/utils')) {
                        return 'utils'
                    }
                    for(let item of COM_NAME) {
                        if (id.includes(`packages/components/${item}`)) { 
                            return item;       
                        }
                    }
                }
            },
            
        }
    }
})