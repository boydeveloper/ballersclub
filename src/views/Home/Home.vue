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
export default {
  name: 'Home',
  components: {
    Hero,
    Sponsors,
    Mission,
    Recents,
    Join,
  },
};
</script>
<style scoped></style>
