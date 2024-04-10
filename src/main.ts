import {createApp} from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './styles/index.scss';
import 'uno.css';
import 'animate.css';
import {createRouter, createWebHistory} from 'vue-router/auto';

import App from './App.vue';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
});

app.use(router);

app.use(ElementPlus);
app.mount('#app');
