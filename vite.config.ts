import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { analyzer } from 'vite-bundle-analyzer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDevelopment = mode === 'development';
    return {
        plugins: [
            vue(),
            UnoCSS({
                theme: {
                    screens: {
                        md: '900',
                        lg: '1280',
                    },
                },
            }),
            // 只在开发环境看看
            isDevelopment && analyzer(),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '~': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/blogApi': {
                    target: 'http://localhost:4000',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/blogApi/, ''), // 可选: 修改路径
                },
            },
        },
        build: {
            assetsDir: 'blog/assets',
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        // 例如，将 'lodash' 和 'axios' 拆分为独立的包
                        if (id.includes('node_modules/element-plus')) {
                            return 'element-plus'; // 生成 lodash.js
                        }
                        if (id.includes('node_modules/pdf-vue3')) {
                            return 'pdf-vue3'; // 生成 axios.js
                        }
                    },
                },
            },
        },
    };
});
