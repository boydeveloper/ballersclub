<template>
  <section class="section-sponsors">
    <div class="container">
      <div class="sponsors">
        <img src="../../../assets/icons/spotify.svg" alt="spotify logo" />
        <img src="../../../assets/icons/coinbase.svg" alt="coinbase logo" />
        <img src="../../../assets/icons/dropbox.svg" alt="dropbox logo" />
        <img src="../../../assets/icons/webflow.svg" alt="webflow logo" />
        <img src="../../../assets/imgs/meta.png" alt="meta logo" />
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
}

.sponsors > img {
  height: 5rem;
  object-fit: contain;
  width: 100%;
}
.sponsors > img:last-child {
  margin-left: auto;
}
@media (max-width: 585px) {
  .sponsors {
    row-gap: 0;
    text-align: center;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
