<template lang="">
  <div class="ballerProfile">
    <div class="banner-img">
      <!-- <img src="../../assets/imgs/signup.jpeg" alt="school of ballers" /> -->
    </div>
    <div class="container">
      <div class="profile-box">
        <div class="initials-circle">{{ name.slice(0, 2) }}</div>
        <h1>
          {{ name }}
        </h1>
      </div>
      <div class="Ballercards-box">
        <h1>{{ name }}'s Drops.</h1>
        <div class="grid--3--cols">
          <BallerCard
            :ballerCardsData="
              ballerCardsData.filter((card) => card.username === name)
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BallerCard from '../../components/BallerCard';
export default {
  name: 'BallerProfile',
  components: { BallerCard },
  data() {
    return {
      name: '',
    };
  },
  mounted() {
    this.name = this.$route.params.id;
  },

  computed: {
    ballerCardsData() {
      this.name = this.$route.params.id;
      return this.$store.state.ballerCardsData;
    },
  },
};
</script>
<style scoped>
.ballerProfile {
  min-height: 100vh;
}
.Ballercards-box {
  padding: 4rem 0;
}
.banner-img {
  height: 20rem;
  background-size: cover;
  width: 100%;
  background-position: 60% 50%;
  background-image: url('../../assets/imgs/signup.jpeg');
}
.profile-box {
  display: flex;
  gap: 3rem;
  /* margin-top: -3rem; */
  align-items: center;
}
.initials-circle {
  background-color: var(--primary-color);
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 14.5rem;
  height: 14.5rem;
  font-size: 3.2rem;
  margin-top: -4rem;
  border: 0.4rem solid #fff;
  border-radius: 50%;
}

h1 {
  font-size: 4rem;
  text-transform: capitalize;
  margin-bottom: 2rem;
  text-decoration: un;
}
</style>
