<template>
  <section class="section-mission">
    <div class="container">
      <div class="mission">
        <div class="mission-textbox">
          <div class="misson-header"></div>
          <h2 class="primary-heading">Mission</h2>
          <p class="mission-text">
            Through the use of NFT technology, we aim to give artists the
            opportunity to sell their digital art in a way that is verifiable
            and secure, while also providing a space for them to share and grow
            their work with a supportive community; dedicated to fostering
            creativity and celebrating the talent of our community members, and
            we invite you to join us on this journey.
          </p>
          <router-link class="primary-btn" to="/createballercard"
            >Join our mission</router-link
          >
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
  width: 50%;
}
.mission-imgbox {
  width: 50%;
  margin-left: auto;
}
.mission-imgbox > img {
  width: 100%;
  height: 40rem;
  border-radius: 0.5rem;
  object-fit: cover;
}
.mission-text {
  line-height: 1.5;
  margin-bottom: 2rem;
}
@media (max-width: 887px) {
  .mission {
    flex-direction: column;
  }
  .mission-textbox {
    padding: 0;
  }
  .mission-imgbox,
  .mission-textbox {
    width: 100%;
  }
}
@media (max-width: 585px) {
  .section-mission {
    margin: 2.5rem 0;
  }
  .mission-text {
    font-size: 1.6rem;
  }
}
</style>
