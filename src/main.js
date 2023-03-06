import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';

let app;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user || user) {
    createApp(App).use(router).use(store).mount('#app');
  }
});
