<template>
  <Navigation v-show="!navigation" />
  <router-view />
  <Footer v-show="!navigation" />
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.$store.commit('updateUser', user);
      if (user) {
        this.$store.dispatch('getCurrentUser');
      }
    });
    this.checkRoute();
  },
  data() {
    return {
      navigation: null,
    };
  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === 'Signup' ||
        this.$route.name === 'Login' ||
        this.$route.name === 'Forgotpassword'
      ) {
        this.navigation = true;
      } else {
        this.navigation = false;
      }
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --primary-color: #ff77f7;
  --dark: #120d18;
  --color-white: #fff;
}
html {
  font-size: 62.5%;
}
#app {
  display: flex;
  flex-direction: column;
  background-color: #120d18;
}
#app::-webkit-scrollbar-track {
  background-color: var(--primary-color);
}
body {
  font-size: 1.6rem;
  min-height: 100vh;
  color: #fff;
  font-family: 'Clash Grotesk', sans-serif;
}
.container {
  max-width: 120rem;
  padding: 0 2.5rem;
  margin: 0 auto;
}
.primary-heading {
  font-size: 3.5rem;
  color: #120d18;
  text-shadow: 2px 0 var(--primary-color), -2px 0 var(--primary-color),
    0 2px var(--primary-color), 0 -2px var(--primary-color),
    1px 1px var(--primary-color), -1px -1px var(--primary-color),
    1px -1px var(--primary-color), -1px 1px var(--primary-color);
  margin-bottom: 2rem;
}
.primary-btn:link,
.primary-btn:visited {
  text-decoration: none;
  color: var(--primary-color);
  padding: 1.4rem 1.8rem;
  display: inline-block;
  border: 0.2rem solid var(--primary-color);
  border-radius: 5rem;
  transition: opactity 0.3s;
}
.primary-btn {
  text-decoration: none;
  color: var(--primary-color);
  padding: 1.4rem 1.8rem;
  display: inline-block;
  font-size: 1.6rem;
  font-family: inherit;
  border: 0.2rem solid var(--primary-color);
  border-radius: 5rem;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  transition: opactity 0.3s;
  background: transparent;
}
.primary-btn:hover {
  opacity: 0.8;
}
.form-wrap {
  height: 100vh;
}
.form-wrap form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  padding: 5rem;
}
.form-wrap input {
  padding: 1.2rem;
}
.form-wrap button {
  padding: 1.2rem;
}
.error {
  color: red;
}
</style>
