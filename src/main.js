import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

setTimeout(() => {
  createApp(App).use(router).use(store).mount('#app');
}, 2000);
