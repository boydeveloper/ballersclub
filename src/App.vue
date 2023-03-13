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
    this.$store.commit('setBallerCards');
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
  --bolder-font: 'Clash Grotesk', sans-serif;
}
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
#app {
  display: flex;
  overflow-x: hidden;
  min-height: 100vh;
  flex-direction: column;
  background-color: #120d18;
}
body {
  font-size: 1.6rem;
  overflow-x: hidden;
  min-height: 100vh;
  font-display: swap;
  font-family: var(--bolder-font);
  color: #fff;
  font-weight: 700;
}
.container {
  max-width: 120rem;
  padding: 0 2.5rem;
  margin: 0 auto;
}
.primary-heading {
  font-size: 3.5rem;
  font-weight: 700;
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
  min-height: 100vh;
}
.grid--3--cols {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
}
.auth-link:link,
.auth-link:visited {
  color: rgb(227, 221, 221);
  transition: color 0.3s;
}
.auth-link:active,
.auth-link:hover {
  color: var(--primary-color);
}
.form-heading {
  font-family: var(--bold-font);
  font-size: 3.5rem;
}
.error {
  color: #e03131;
}
@media (max-width: 1061px) {
  .grid--3--cols {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .container {
    padding: 0 2rem;
  }
}
@media (max-width: 585px) {
  .grid--3--cols {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .primary-btn:link {
    padding: 1.2rem 1.4rem;
    font-size: 1.6rem;
  }
}
@media (max-width: 391px) {
  .primary-heading {
    font-size: 3.2rem;
  }
  .container {
    padding: 0 1.2rem;
  }
}
</style>
