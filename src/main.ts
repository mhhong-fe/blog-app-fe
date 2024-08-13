import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router/index';
import 'element-plus/dist/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(router)
    .use(ElementPlus)
    .mount('#app');
