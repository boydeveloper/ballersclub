import { createRouter, createWebHistory } from 'vue-router';
// views
import Home from '../views/Home/Home';
import Mirror from '../views/Mirror/Mirror';
import Profile from '../views/Profile/Profile.vue';
//
import CreateBallerCard from '../features/Create/CreateBallerCard';
// auth
import Login from '../features/auth/Login';
import Signup from '../features/auth/Signup';
import Forgotpassword from '../features/auth/Forgotpassword';
//
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/mirror',
    name: 'Mirror',
    component: Mirror,
    meta: {
      title: 'Mirror',
    },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup',
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
    },
  },
  {
    path: '/auth/forgotpassword',
    name: 'Forgotpassword',
    component: Forgotpassword,
    meta: {
      title: 'Fogotpassword',
    },
  },
  {
    path: '/createballercard',
    name: 'Create',
    component: CreateBallerCard,
    meta: {
      title: 'Create',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Ballersclub | ${to.meta.title}`;

  next();
});
export default router;
