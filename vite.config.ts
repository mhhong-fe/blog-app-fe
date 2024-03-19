import {URL, fileURLToPath} from 'node:url';

import {defineConfig} from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';
import Unocss from 'unocss/vite';
import VueRouter from 'unplugin-vue-router/vite';

import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueRouter({}),
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue/macros', 'vue-router', 'pinia'],
            dts: true,
            vueTemplate: true,
            // 这些目录下的文件会被自动导入
            dirs: ['./src/composables/**', './src/api/**', './src/utils'],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: true,
        }),
        Unocss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element/var.scss" as *;`,
            },
        },
    },
});
