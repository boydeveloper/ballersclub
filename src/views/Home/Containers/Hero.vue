<template>
  <section class="section-hero">
    <div class="container">
      <div class="hero">
        <div class="hero-textbox">
          <strong>A community of ballers.</strong>
          <h1>
            Discover the World of art on <br />
            Bubblegoose.
          </h1>
          <p>
            Updated collections of the BubbleGoose community Hub for
            creative,<br />
            experienced and beginner ballers.
          </p>
          <router-link to="/" class="hero-btn">Get Started</router-link>
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
  gap: 9rem;
}
.hero-textbox {
  padding-top: 5rem;
}
.hero-textbox > h1 {
  font-size: 4.5rem;
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;
  color: var(--color-white);
  text-shadow: 2px 0 var(--primary-color), -2px 0 var(--primary-color),
    0 2px var(--primary-color), 0 -2px var(--primary-color),
    1px 1px var(--primary-color), -1px -1px var(--primary-color),
    1px -1px var(--primary-color), -1px 1px var(--primary-color);
}
.hero-textbox > p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: 500;
}
.hero-btn:link,
.hero-btn:visited {
  text-decoration: none;
  color: var(--primary-color);
  padding: 1.4rem 1.8rem;
  display: inline-block;
  border: 0.2rem solid var(--primary-color);
  border-radius: 5rem;
  transition: opactity 0.3s;
}
.hero-btn:hover {
  opacity: 0.8;
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
  bottom: -2rem;
  right: 0;
}
.gem {
  position: absolute;
  left: 0;
  bottom: 2rem;
  transform: rotate(-15deg);
}
</style>
