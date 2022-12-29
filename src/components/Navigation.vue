<template>
  <header :class="navOpen ? 'header open' : 'header'">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="nav-brand">BallersClub💎</router-link>
        <ul class="nav-links">
          <router-link to="/mirror" class="nav-link"> Mirror</router-link>
          <router-link v-if="!user" to="/auth/signup" class="nav-link"
            >Get started</router-link
          >
          <router-link v-if="!user" to="/auth/login" class="nav-link"
            >Login</router-link
          >
          <router-link to="/createballercard" v-show="user" class="addArt">
            <img src="../assets/icons/add.svg" alt="add icon" />
          </router-link>
          <router-link to="/profile" v-if="user" class="profile" ref="profile">
            <span>
              {{ this.$store.state.profileInitials }}
            </span>
          </router-link>
        </ul>
        <button @click="toggleNav">
          <div class="hamburger-stroke-I"></div>
          <div class="hamburger-stroke-I"></div>
          <div class="hamburger-stroke-I"></div>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { getAuth } from 'firebase/auth';
export default {
  name: 'Navigation',

  data() {
    return {
      navOpen: false,
    };
  },
  components: {},
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
.header {
  background-color: var(--primary-color);
  color: var(--color-white);
  position: relative;
}
.navbar {
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;
}
.nav-brand:link,
.nav-brand:visited {
  font-size: 3.5rem;
  text-decoration: none;
  font-weight: 700;
  color: var(--color-white);
  font-family: 'Clash Grotesk', sans-serif;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.nav-link:link,
.nav-link:visited {
  color: var(--color-white);
  text-decoration: none;
  font-size: 2rem;
  transition: color 0.3s;
}
.addArt {
  position: relative;
}
.gem {
  height: 2.4rem;
  width: 2.4rem;
  position: absolute;

  bottom: 0;
  transform: rotate(-35deg);
}
.nav-link:hover {
  color: #ebbbe8;
}

.profile:link,
.profile:visited {
  text-transform: uppercase;
  font-size: 2rem;
  background-color: #120d18;
  color: var(--color-white);
  text-decoration: none;
  padding: 1rem;
  border-radius: 50%;
}
button {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: right;
  cursor: pointer;
  align-items: flex-end;
  display: none;
}
button > div {
  content: '';
  border-radius: 0.2rem;
  height: 0.4rem;
  width: 3rem;
  transition: transform 0.3s;
  background-color: var(--color-white);
}
button > div:nth-child(2) {
  width: 2.5rem;
}
@media (max-width: 1061px) {
  button {
    display: flex;
  }
  .nav-links {
    position: fixed;
    top: 0;
    z-index: 4;
    flex-direction: column;
    right: 0;
    padding: 8rem;
    width: 50%;
    align-items: flex-end;
    background-color: var(--primary-color);
    height: 100vh;
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: 0.3s transform;
    transform-origin: right;
  }

  .open .nav-links {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
}
</style>
