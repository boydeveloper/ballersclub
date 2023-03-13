<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide v-for="topBaller in topBallers">
      <img :src="topBaller.ballerPhoto" alt="Sample 1" class="img" />
      <button class="baller-name">{{ topBaller.username }}</button>
    </SplideSlide>
  </Splide>

  <Splide>
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/sea-green';
export default {
  name: 'MyComponent',
  props: {
    ballerCardsData: Array,
  },
  components: {
    Splide,
    SplideSlide,
  },

  computed: {
    topBallers() {
      return this.$store.state.ballerCardsData.slice(-3);
    },
  },
};
</script>
<style>
.img {
  width: 100%;
  object-fit: cover;
  height: 40rem;
  border-radius: 0.5rem;
}
.splide {
  padding: 4rem 3em;
}
.splide__arrow {
  border: 0.2rem solid #fff;
  height: 5rem;
  pointer-events: all;
  border-radius: 0.8rem;
  width: 5rem;
  color: #fff !important;
  background: var(--primary-color) !important;
  opacity: 1;
}
.splide__arrow svg {
  fill: #fff;
}
.baller-name {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--dark);
  z-index: 6;
  border: 0.2rem solid #fff;
  border-radius: 0.5rem;
  padding: 1rem 1.8rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--bolder-font);
  background: var(--primary-color);
}

.splide__arrow:hover:not(:disabled) svg {
  fill: #fff;
}
.splide__pagination__page.is-active {
  background: var(--primary-color);
}
@media (max-width: 585px) {
  .splide {
    padding: 4rem 2rem;
  }
  .splide__arrow svg {
    height: 2rem;
  }
  .splide__arrow {
    height: 4.4rem;
    width: 4.4rem;
  }
  .splide__arrow--prev {
    left: 0.4em;
  }
  .splide__arrow--next {
    right: 0.4em;
  }
}
</style>
