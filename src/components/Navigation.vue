<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <div class="nav-brand">Bubblegoose💎</div>
        <ul class="nav-links">
          <router-link to="/" class="nav-link"> Mirror</router-link>
          <router-link to="/" class="nav-link"> About</router-link>
          <router-link to="/" class="nav-link">Get started</router-link>
          <router-link to="/" class="nav-link">Login</router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
};
</script>

<style scoped>
.header {
  background-color: var(--primary-color);
  color: var(--color-white);
}
.navbar {
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  align-items: center;
}
.nav-brand {
  font-size: 3.5rem;
  font-weight: 700;
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
.nav-link:hover {
  color: #ebbbe8;
}
</style>
