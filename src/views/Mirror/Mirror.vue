<template>
  <div class="mirror">
    <div class="container">
      <FeaturedArts :ballerCardsData="ballerCardsData" />

      <h1>All Drops</h1>
      <div class="mirror-arts">
        <CardSkelenton
          v-if="!ballerCardsData"
          :ballerCardSkelentons="ballerCardSkelentons"
        />
        <BallerCard :ballerCardsData="ballerCardsData" />
      </div>
    </div>
  </div>
</template>
<script>
import BallerCard from '../../components/BallerCard';
import TopBallers from './Containers/TopBallers';
import FeaturedArts from './Components/FeaturedArts';
import CardSkelenton from '../../components/BallerCardSkelenton';
export default {
  name: 'Mirror',
  components: { FeaturedArts, TopBallers, BallerCard, CardSkelenton },
  computed: {
    ballerCardsData() {
      return this.$store.state.ballerCardsData;
    },
    ballerCardSkelentons() {
      return [1, 2, 3, 4, 5, 6];
    },
  },
};
</script>
<style scoped>
.mirror {
  min-height: 100vh;
}
.mirror-arts {
  padding: 2rem 0;
  display: grid;
  gap: 3.5rem;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 1061px) {
  .mirror-arts {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 585px) {
  .mirror-arts {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
