<template>
  <section class="section-sponsors">
    <div class="container">
      <div class="sponsors">
        <img src="../../../assets/icons/spotify.svg" alt="spotify logo" />
        <img src="../../../assets/icons/coinbase.svg" alt="coinbase logo" />
        <img src="../../../assets/icons/dropbox.svg" alt="dropbox logo" />
        <img src="../../../assets/icons/webflow.svg" alt="webflow logo" />
        <!-- <img src="../../../assets/icons/meta.png" alt="meta logo" /> -->
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Sponsors',
};
</script>
<style scoped>
.section-sponsors {
  padding: 2rem 0;
}
.sponsors {
  display: flex;
  justify-content: space-between;
}
</style>
