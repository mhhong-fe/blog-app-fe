import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/index.vue';
import About from '../pages/about/index.vue';
import Log from '../pages/log/index.vue';
import Demo from '../pages/demo/index.vue';
import ArticleDetail from '../pages/article-detail/index.vue';
import Articles from '../pages/articles/index.vue';
import { request } from '~/api';
import { API_ADD_ARTICLE_VIEW_COUNT } from '~/api/config/common';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'path', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/log', name: 'log', component: Log },
    { path: '/demo', name: 'demo', component: Demo },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/article/:id', name: 'article-detail', component: ArticleDetail },
];

// 前端路由，使用blog前缀
const router = createRouter({
    history: createWebHistory('blog'),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log({ to, from, next });
    if (to.name === 'article-detail' && to.params.id) {
        request(API_ADD_ARTICLE_VIEW_COUNT(Number(to.params.id)));
    }
    next();
});

export default router;
