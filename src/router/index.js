import { createRouter, createWebHistory } from 'vue-router';
// views
import Home from '../views/Home/Home';
import Mirror from '../views/Mirror/Mirror';
import Profile from '../views/UserProfile/Profile.vue';
import BallerProfile from '../views/Profile/BallerProfile.vue';
import CreateBallerCard from '../features/Create/CreateBallerCard';

import Login from '../features/auth/Login';
import Signup from '../features/auth/Signup';
import Forgotpassword from '../features/auth/Forgotpassword';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
    path: '/:id',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile',
      requiresAuth: true,
    },
  },
  {
    path: '/baller/:id',
    name: 'Baller-Profile',
    component: BallerProfile,
    meta: {
      title: 'Baller-Profile',
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  let user = await getCurrentUser();
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (user) {
      return next();
    }
    return next({ name: 'Login' });
  }
  return next();
});

export default router;
