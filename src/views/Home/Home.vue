<template>
  <Hero />
  <Mission />
  <Recents />
  <Join />
</template>

<script>
import Hero from './Containers/Hero';
import Mission from './Containers/Mission';
import Join from './Containers/Join';
import Recents from './Containers/Recents';
export default {
  name: 'Home',
  components: {
    Hero,
    Mission,
    Recents,
    Join,
  },
};
</script>
<style scoped></style>
