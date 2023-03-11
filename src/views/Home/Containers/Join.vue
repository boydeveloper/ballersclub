<template>
  <div class="section-join">
    <div class="container">
      <div class="join-wrapper">
        <div class="join">
          <!-- <div class="join-textbox"> -->
          <h2 class="primary-heading">Join our community</h2>
          <p class="join-text">
            By Joining ballersclub, you have the opportunity to discover and
            connect with other talented artists from around the world. It's a
            great way to network and exchange ideas, and who knows - you might
            just inspire or be inspired by someone you meet on our platform.
          </p>
          <router-link to="/" class="primary-btn join-btn"
            >Get started</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Join',
};
</script>
<style scoped>
.section-join {
  margin: 5rem 0;
}
.join {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../../assets/imgs/ballerhomepicidea.jpeg') center/cover no-repeat;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  border-radius: 2rem;
  padding: 4rem;
  text-align: center;
}

.join-text {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: var(--color-white);
}
@media (max-width: 585px) {
  .join {
    padding: 2.5rem;
  }
  .join-text {
    font-size: 1.6rem;
  }
}
</style>
