import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

createApp(App).use(router).use(store).mount('#app');
