import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:uno.css';
import { createApp } from 'vue';
import './styles/index.scss';
import 'animate.css';

// markdown

import router from './router/index';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app');
