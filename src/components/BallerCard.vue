<template>
  <div class="baller-card" v-for="data in ballerCardsData" id="data.id">
    <img src="../assets/imgs/gemstone.png" alt="gem stone" class="diamond" />
    <img
      :src="require(`../assets/imgs/${data.img}${data.id}.jpeg`)"
      alt="baller img"
      class="baller-img"
    />
    <div class="baller-details">
      <router-link to="/" class="baller-id">
        <ion-icon name="diamond"></ion-icon>
        {{ data.ballerId }}
      </router-link>
      <router-link to="/" class="baller-twitter">
        <ion-icon name="logo-twitter"></ion-icon>
        {{ data.twitter }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BallerCard',
  props: {
    ballerCardsData: Array,
  },
};
</script>
<style scoped>
.baller-card {
  border: 0.2rem solid var(--color-white);
  position: relative;
  border-radius: 0.3rem;
  overflow: hidden;
}

.diamond {
  position: absolute;
  top: 1rem;
  left: 1.3rem;
  height: 3rem;
  width: 3rem;
}
.baller-img {
  padding: 0.5rem;
  height: 40rem;
  width: 100%;
}
.baller-details {
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-top: 0.2rem solid var(--color-white);
}
.baller-id:link,
.baller-id:visited {
  color: #e89de6;
  display: flex;
  align-items: center;
  font-size: 2rem;
  transition: color 0.3s;
}
.baller-id:hover,
.baller-id:active {
  color: var(--primary-color);
}
.baller-twitter:link,
.baller-twitter:visited {
  display: flex;
  color: var(--color-white);
  transition: color 0.3s;
}
.baller-twitter:hover,
.baller-twitter:active {
  color: #1d9bf0;
}
</style>
