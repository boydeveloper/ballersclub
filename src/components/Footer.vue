<template>
  <footer class="section-footer">
    <div class="container">
      <div class="footer">
        <div class="footer-brand">BallersClub💎</div>
        <div class="footer-links">
          <router-link to="/" class="footer-link">Terms</router-link>
          <router-link to="/" class="footer-link">Privacy</router-link>
          <router-link to="/" class="footer-link">Cookies</router-link>
        </div>
        <div class="footer-links">
          <router-link to="/" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </router-link>
          <router-link to="/" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </router-link>

          <router-link class="social-link" to="/">
            <ion-icon name="logo-instagram"></ion-icon>
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
  /* font-family: var(--bold-font); */
  padding: 2.5rem 0 5rem;
  margin-top: auto;
  border-top: 0.3rem solid var(--primary-color);
}
.footer-brand {
  font-size: 2.5rem;
}
.footer {
  display: flex;
  align-items: center;
  /* gap: 2rem; */
  font-size: 1.8rem;
  justify-content: space-between;
}
.footer-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.8rem;
}
.footer-link:link,
.footer-link:visited {
  text-decoration: none;
  color: #fff;
}
.social-link:link,
.social-link:visited {
  font-size: 3rem;
  color: var(--color-white);
  transition: color 0.2s;
}
.social-link:hover {
  color: rgb(134, 132, 132);
}
@media (max-width: 900px) {
  .footer-brand {
    /* font-size: 2rem; */
  }
  .footer-link:link,
  .footer-link:visited {
    font-size: 1.6rem;
  }
  .social-link:link,
  .social-link:visited {
    font-size: 2rem;
  }
}
@media (max-width: 585px) {
  .footer {
    flex-direction: column;
    gap: 2rem;
  }
  .section-footer {
    padding: 2rem 0;
  }
}
</style>
