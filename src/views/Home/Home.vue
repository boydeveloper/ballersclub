<template>
  <Hero />
  <Sponsors />
  <Recents />
  <Mission />
  <Join />
</template>

<script>
import Hero from './Containers/Hero';
import Sponsors from './Containers/Sponsors.vue';
import Mission from './Containers/Mission';
import Join from './Containers/Join';
import Recents from './Containers/Recents';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
export default {
  name: 'Home',
  components: {
    Hero,
    Sponsors,
    Mission,
    Recents,
    Join,
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
    // this.checkRoute();
  },
};
</script>
<style scoped></style>
