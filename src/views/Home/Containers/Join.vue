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
          <!-- </div> -->

          <!-- <img
              src="../../../assets/imgs/welcomeballer.jpeg"
              alt="goose painitng"
            /> -->
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
  /* background-color: var(--primary-color); */
  background-image: url(../../../assets/imgs/welcomeballer.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top top;
  border-radius: 2rem;
  padding: 4rem;
  text-align: center;
}
.join-textbox {
  width: 60%;
}
.join-Imgbox > img {
  width: 100%;
  /* margin-bottom: auto; */
  /* height: 78rem; */
  object-fit: contain;
}
.join-text {
  margin-bottom: 1rem;
  font-size: 2rem;
}
.join-btn:link,
.join-btn:visited {
}
</style>
