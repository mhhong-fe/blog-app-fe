import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/index.vue';
import About from '../pages/about/index.vue';
import Log from '../pages/log/index.vue';
import Demo from '../pages/demo/index.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/log', component: Log },
    { path: '/demo', component: Demo },
];

// 前端路由，使用blo前缀
const router = createRouter({
    history: createWebHistory('blog'),
    routes,
});

export default router;
