import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import './styles/global_styles.css';
import App from './App.vue';
import router from './router/router.config';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
