<template>
  <section class="section-recents">
    <div class="container">
      <div class="recents">
        <span class="primary-heading"> Recent Drops </span>
        <div class="recent-drops">
          <BallerCard :ballerCardsData="ballerCardsData" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BallerCard from '../../../components/BallerCard';
export default {
  name: 'Recents',
  components: { BallerCard },
  computed: {
    ballerCardsData() {
      return this.$store.state.ballerCardsData;
    },
  },
};
</script>
<style scoped>
.section-recents {
  padding: 5rem 0;
}

.recent-drops {
  display: grid;
  margin: 2rem 0;
  gap: 4rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
