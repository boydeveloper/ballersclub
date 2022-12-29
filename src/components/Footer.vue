<template>
  <footer class="section-footer">
    <div class="container">
      <div class="footer">
        <div class="footer-text">
          &copy;💎Bubblegoose.All rights reserved.cc:carl jones
        </div>
        <div class="footer-links">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="mail-outline"></ion-icon>
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
  padding: 2rem 0;
  margin-top: auto;
  background-color: var(--primary-color);
}
.footer {
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
