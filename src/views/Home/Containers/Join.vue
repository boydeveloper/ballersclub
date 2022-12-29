<template>
  <div class="section-join">
    <div class="container">
      <div class="join-wrapper">
        <h2 class="primary-heading">Join our community</h2>
        <p class="join-text">
          By Joining ballersclub, you have the opportunity to discover and
          connect with other talented artists from around the world. It's a
          great way to network and exchange ideas, and who knows - you might
          just inspire or be inspired by someone you meet on our platform.
        </p>
        <router-link to="/" class="primary-btn">Get started</router-link>
        <div class="join">
          <div class="join-textbox"></div>
          <div class="join-Imgbox">
            <img
              src="../../../assets/imgs/welcomeballer.jpeg"
              alt="goose painitng"
            />
          </div>
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
.join {
  display: flex;
  gap: 4rem;
}
.join-Imgbox {
  margin-left: auto;
  width: 60%;
}
.join-Imgbox > img {
  width: 100%;
  margin-left: auto;
  height: 58rem;
  object-fit: contain;
}
.join-text {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}
</style>
