<template>
  <section class="section-hero">
    <div class="container">
      <div class="hero">
        <div class="hero-textbox">
          <strong>A community of bubblegoose ballers.</strong>
          <h1>
            Discover the World of art on <br />
            BallersClub.
          </h1>
          <p>
            Updated collections of the BubbleGoose community Hub for
            creative,<br />
            experienced and beginner ballers.
          </p>
          <router-link to="/createballercard" class="primary-btn"
            >Get Started</router-link
          >
        </div>
        <div class="hero-img-box">
          <img
            src="../../../assets/imgs/snartdraw.svg"
            alt=""
            class="drawpen-img"
          />
          <img src="../../../assets/imgs/coin.svg" class="coin-img" alt="" />

          <div>
            <img
              src="../../../assets/imgs/bubblegoose-logo.png"
              alt="bubble goose"
              class="hero-img"
            />
          </div>
          <img
            src="../../../assets/imgs/gemstone.png"
            alt="gem stone"
            class="gem"
          />
          <img
            src="../../../assets/imgs/sketchbook.svg"
            alt=""
            class="sketch-book-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style scoped>
.section-hero {
  padding: 5rem 0;
}
.hero {
  display: flex;
  padding: 0rem 0 10rem;
  gap: 9rem;
  max-width: 120rem;
  margin: 0 auto;
}
.hero-textbox {
  padding-top: 5rem;
}

.hero-textbox > h1 {
  font-size: 4.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;
  color: #120d18;
  font-family: 'Clash Grotesk', sans-serif;
  text-shadow: 2px 0 var(--primary-color), -2px 0 var(--primary-color),
    0 2px var(--primary-color), 0 -2px var(--primary-color),
    1px 1px var(--primary-color), -1px -1px var(--primary-color),
    1px -1px var(--primary-color), -1px 1px var(--primary-color);
}
.hero-textbox > p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.hero-img-box {
  padding: 0 5rem;
  position: relative;
}
/* IMGS */
.hero-img {
  margin: 4rem 0 4rem 0;
  width: 100%;
  height: 20rem;
}
.drawpen-img {
  height: 9rem;
  width: 9rem;
  position: absolute;
  right: -2rem;
  transform: rotate(15deg);
}
.sketch-book-img {
  width: 11rem;
  position: absolute;
  height: 9rem;
  top: 0;
  left: -2rem;
}
.coin-img {
  height: 9rem;
  width: 14rem;
  position: absolute;
  top: 20rem;
  right: 0;
}
.gem {
  position: absolute;
  left: 0;
  transform: rotate(-15deg);
}
@media (max-width: 1061px) {
  .section-hero {
    padding-top: 2rem;
  }
  .hero {
    flex-direction: column;
    gap: 4rem;
  }
  .hero-textbox {
    padding-top: 3rem;
  }
  br {
    display: none;
  }

  .hero-img {
    max-width: 30rem;
    object-fit: contain;
  }
  @media (max-width: 585px) {
    .hero-textbox h1 {
      font-size: 3.8rem;
    }
  }
  @media (max-width: 391px) {
    .hero-textbox > h1 {
      font-size: 3.2rem;
    }
    .hero-textbox > p {
      font-size: 1.6rem;
    }
  }
}
</style>
