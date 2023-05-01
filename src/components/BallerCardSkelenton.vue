<template>
  <div class="skelenton" v-for="skelenton in ballerCardSkelentons">
    <div class="skelenton-img-box">
      <div class="skelenton-img"></div>
    </div>
    <div class="skelenton-details-box">
      <div class="details"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Cardskelenton',
  props: {
    ballerCardSkelentons: Array,
  },
};
</script>
<style scoped>
.skelenton {
  width: 100%;
  border: 0.2rem solid #ccc;
  display: block;
  border-radius: 0.3rem;
}
.skelenton-img-box {
  padding: 0.5rem;
}
.skelenton-img {
  height: 40rem;
  display: block;
  border-radius: inherit;
  background-position: top left;
  background-image: linear-gradient(
    90deg,
    #fff 0,
    rgb(229 229 229/ 90%) 4rem,
    #ccc 8rem
  );
  background-size: 300%;
  animation: wavy-loading 1.5s infinite;
}

.skelenton-details-box {
  padding: 1rem 0.5rem;
}
.details {
  height: 4rem;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    #fff 0,
    rgb(229 229 229/ 90%) 4rem,
    #ccc 8rem
  );
  background-size: 300%;
  animation: wavy-loading 1.5s infinite;
}
@keyframes wavy-loading {
  to {
    background-position: -100% 0;
  }
}
</style>
