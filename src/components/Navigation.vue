<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="nav-brand">BallersClub💎</router-link>
        <ul class="nav-links">
          <router-link to="/mirror" :class="user ? 'nav-link 💪🏾' : 'nav-link'">
            Mirror</router-link
          >
          <router-link v-if="!user" to="/auth/signup" class="nav-link"
            >Signup</router-link
          >
          <router-link v-if="!user" to="/auth/login" class="nav-link"
            >Login</router-link
          >
          <router-link
            to="/createballercard"
            v-show="user"
            class="nav-link hide"
          >
            Create
          </router-link>
          <router-link
            to="/createballercard"
            class="nav-link isMobile"
            v-show="user"
          >
            <span class="material-symbols-outlined FS"> edit_square </span>
          </router-link>
          <router-link
            :to="'/' + this.$store.state.profileName"
            v-if="user"
            class="profile"
            ref="profile"
          >
            <span>
              {{ this.$store.state.profileInitials }}
            </span>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navOpen: false,
    };
  },
  components: {},
  computed: {
    isMobile() {
      return window.innerWidth < 522;
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
  border-bottom: solid 0.3rem var(--primary-color);
  color: var(--color-white);
  font-family: var(--bold-font);
  background-color: var(--dark);
  position: relative;
}
.navbar {
  display: flex;
  padding: 2rem 0;
  height: 8rem;
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
  /* align-items: baseline; */
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
  background-color: var(--primary-color);
  color: var(--dark);
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  border-radius: 50%;
}
.hide {
  display: block;
}
.isMobile {
  display: none;
}
.FS {
  height: 2.5rem;
  width: 2.5rem;
}
@media (max-width: 551px) {
  .nav-brand:link {
    font-size: 2.5rem;
  }
  .nav-links {
    gap: 2rem;
  }
  .isMobile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .💪🏾 {
    margin-top: 0.5rem;
  }
  .hide {
    display: none;
  }
}
@media (max-width: 410px) {
  .navbar {
    padding: 1.5rem 0;
    height: 6rem;
  }
  .nav-links {
    gap: 1.2rem;
    font-weight: 700;
    font-family: 'Rubik', sans-serif;
  }
  .nav-brand:link {
    font-size: 2.2rem;
  }
  .nav-link:link {
    font-size: 1.6rem;
  }

  .profile:link,
  .profile:visited {
    font-size: 1.8rem;
    height: 3.5rem;
    width: 3.5rem;
  }
}
</style>
