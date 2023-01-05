<template>
  <footer class="section-footer">
    <div class="container">
      <div class="footer">
        <div class="footer-text">
          Ballersclub.com All rights reserved &copy;2023.
        </div>
        <div class="footer-links">
          <router-link to="/" class="footer-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </router-link>
          <router-link to="/" class="footer-link">
            <ion-icon name="logo-github"></ion-icon>
          </router-link>
          <router-link class="footer-link" to="/">
            <ion-icon name="mail-outline"> </ion-icon>
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.section-footer {
  font-family: var(--bold-font);
  padding: 2.5rem 0;
  margin-top: auto;
  font-weight: 400;
  border-top: 0.3rem solid var(--primary-color);
}
.footer {
  display: flex;
  font-weight: 500;
  align-items: center;
  font-size: 1.8rem;
  justify-content: space-between;
}
.footer-links {
  display: flex;
  gap: 2rem;
  font-size: 1.8rem;
}
.footer-link:link,
.footer-link:visited {
  color: var(--color-white);
  transition: color 0.2s;
}
.footer-link:hover {
  color: rgb(134, 132, 132);
}
</style>
