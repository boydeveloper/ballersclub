<template lang="">
  <div class="ballerProfile">
    <div class="banner-img"></div>
    <div class="profile-header">
      <div class="container">
        <div class="profile-wrapper">
          <div class="profile-box">
            <div class="initials-circle">{{ name.slice(0, 2) }}</div>
            <div class="baller-info">
              <h1>
                {{ name }}
              </h1>
              <p>4X BALLER OF THE WEEK🏆!</p>
              <p>Baller since, March 2023.</p>
            </div>
          </div>
          <button>
            <ion-icon name="diamond-outline"></ion-icon>
          </button>
        </div>
      </div>
    </div>
    <div class="container">
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
    <!-- </div> -->
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
.profile-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.profile-header {
  padding-bottom: 4rem;
  background-color: #1b191e;
  border-bottom: 0.4rem solid #fff;
}
button {
  background: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 4rem;
  border: none;
  color: #fff;
}

.Ballercards-box {
  padding: 4rem 0;
}
.banner-img {
  height: 20rem;
  background-size: cover;
  width: 100%;
  border-top: 0;
  border: #fff 0.4rem solid;
  background-position: 60% 50%;
  background-image: url('../../assets/imgs/ballercoverphoto.jpeg');
}
.profile-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: left;
}
/* .baller-info {
} */
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
  margin-top: -6rem;
  border: 0.4rem solid #fff;
  border-radius: 50%;
}

h1 {
  font-size: 4rem;
  text-transform: capitalize;
}
.Ballercards-box > h1 {
  margin-bottom: 4rem;
}
@media (max-width: 410px) {
  h1 {
    font-size: 2.2rem;
  }
  .Ballercards-box > h1 {
    font-size: 2.8rem;
  }
  button {
    font-size: 3.5rem;
    padding: 0.2rem 0.5rem;
  }
}
</style>
