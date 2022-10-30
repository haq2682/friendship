import './bootstrap';
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import router from './router';
import StyleClass from 'primevue/styleclass';

const app = createApp({});

import App from './App.vue';
app.component('app', App);

app.use(router).use(PrimeVue).directive('styleclass', StyleClass).mount('#app');
