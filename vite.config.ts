import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { analyzer } from 'vite-bundle-analyzer';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDevelopment = mode === 'development';
    return {
        plugins: [
            vue(),
            UnoCSS({
                theme: {
                    screens: {
                        lg: '1280px',
                    },
                },
            }),
            // 只在开发环境看看
            isDevelopment && analyzer(),
            compression({
                // 压缩算法，支持 'gzip' 或 'brotli'
                algorithm: 'gzip',
                // 是否在构建时删除原文件
                deleteOriginFile: false,
                // 其他可选配置
                threshold: 10240, // 只对大于10KB的文件进行压缩
                ext: '.gz', // 生成的文件后缀
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '~': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:4000',
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''), // 可选: 修改路径
                },
            },
        },
        build: {
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
