import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueSplide from '@splidejs/vue-splide';
import { store } from './store';

createApp(App).use(router).use(VueSplide).use(store).mount('#app');

// }
