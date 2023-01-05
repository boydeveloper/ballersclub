<template>
  <section class="section-mission">
    <div class="container">
      <div class="mission">
        <div class="mission-textbox">
          <div class="misson-header"></div>
          <h2 class="primary-heading">Our Mission</h2>
          <p class="mission-text">
            At BallersClub, we believe in the power of art and the value of
            supporting and empowering artists. Our mission is to provide a
            platform where artists can showcase and potentially sell their work,
            and to create a community where they can connect, network, and
            exchange ideas with other creatives. Through the use of NFT
            technology, we aim to give artists the opportunity to sell their
            digital art in a way that is verifiable and secure, while also
            providing a space for them to share and grow their work with a
            supportive community. We are dedicated to fostering creativity and
            celebrating the talent of our community members, and we invite you
            to join us on this journey. Together, we can help artists reach new
            heights and showcase their work to a wider audience.
          </p>
        </div>
        <div class="mission-imgbox">
          <img
            src="../../../assets/imgs/bubblegoosePro.jpeg"
            alt="gooses painting"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Mission',
};
</script>
<style scoped>
.section-mission {
  margin: 5rem 0;
}
.mission {
  display: flex;
  gap: 4rem;
}
.mission-textbox {
  padding-top: 8rem;
  width: 50%;
}
.mission-imgbox {
  width: 50%;
  margin-left: auto;
}
.mission-imgbox > img {
  width: 100%;
  height: 58rem;
  object-fit: cover;
  border-radius: 3rem;
}
.mission-text {
  font-size: 1.8rem;
}
</style>
