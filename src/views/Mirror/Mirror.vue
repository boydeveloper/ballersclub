<template>
  <div class="mirror">
    <div class="container">
      <div class="mirror-arts">
        <BallerCard :ballerCardsData="ballerCardsData" />
      </div>
    </div>
  </div>
</template>
<script>
import BallerCard from '../../components/BallerCard';
export default {
  name: 'Mirror',
  components: { BallerCard },
  computed: {
    ballerCardsData() {
      return this.$store.state.ballerCardsData;
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
