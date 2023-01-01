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
import { getAuth } from 'firebase/auth';
//
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: false,
    },
  },
  {
    path: '/mirror',
    name: 'Mirror',
    component: Mirror,
    meta: {
      title: 'Mirror',
      requiresAuth: false,
    },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      requiresAuth: false,
    },
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup',
      requiresAuth: false,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
      requiresAuth: true,
    },
  },
  {
    path: '/auth/forgotpassword',
    name: 'Forgotpassword',
    component: Forgotpassword,
    meta: {
      title: 'Fogotpassword',
      requiresAuth: false,
    },
  },
  {
    path: '/createballercard',
    name: 'Create',
    component: CreateBallerCard,
    meta: {
      title: 'Create',
      requiresAuth: true,
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

router.beforeEach(async (to, from, next) => {
  let user = getAuth().currentUser;

  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      return next();
    }
    return next({ name: 'Login' });
  }
  return next();
});

export default router;
