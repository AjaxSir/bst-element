import { defineConfig } from 'vite';
import  vue  from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue()
    ],
    build: {
        outDir: "dist/umd",
        lib: {
            entry: './index.ts',
            name: 'BstElement',
            fileName: 'index',
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetsFile: any) => {
                    if (assetsFile.name === 'style.css') return 'index.css'
                    return assetsFile.name as string;
                }
            },
        }
    }
})