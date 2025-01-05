import { createRouter, createWebHistory } from 'vue-router';

import { request } from '~/api';
import { API_ADD_ARTICLE_VIEW_COUNT } from '~/api/config/common';

const Home = () => import('../pages/home/index.vue');
const About = () => import('../pages/about/index.vue');
const Log = () => import('../pages/log/index.vue');
const Demo = () => import('../pages/demo/index.vue');
const Tools = () => import('../pages/tools/index.vue');

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'path', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/log', name: 'log', component: Log },
    { path: '/demo', name: 'demo', component: Demo },
    { path: '/tools', name: 'tools', component: Tools },
];

// 前端路由，使用blog前缀
const router = createRouter({
    history: createWebHistory('blog'),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name === 'article-detail' && to.params.id) {
        request(API_ADD_ARTICLE_VIEW_COUNT(Number(to.params.id)));
    }
    next();
});

export default router;
