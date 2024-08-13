import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../pages/home/index.vue';
import AboutView from '../pages/about/index.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView },
    { path: '/about', component: AboutView },
];

// 前端路由，使用blo前缀
const router = createRouter({
    history: createWebHistory('blog'),
    routes,
});

export default router;
