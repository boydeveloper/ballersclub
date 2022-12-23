<template>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  name: 'App',
  components: {
    Navigation,
  },
  methods: {},
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
  --color-white: #fff;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  font-family: 'Clash Grotesk', sans-serif;
}
.container {
  max-width: 140rem;
  padding: 0 3.2rem;
  margin: 0 auto;
}
</style>
