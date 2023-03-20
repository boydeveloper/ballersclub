<template>
  <section class="section-recents">
    <div class="container">
      <div class="recents">
        <span class="primary-heading"> Recent Drops </span>
        <div class="recent-drops grid--3--cols">
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
      return this.$store.state.ballerCardsData.slice(0, 6);
    },
  },
};
</script>
<style scoped>
.section-recents {
  padding: 5rem 0;
}

.recent-drops {
  margin: 2rem 0;
}
@media (max-width: 585px) {
  .section-recents {
    padding: 0;
  }
}
</style>
