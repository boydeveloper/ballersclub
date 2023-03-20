<template>
  <section class="create-section">
    <div class="container">
      <div class="create">
        <div class="create__img--box">
          <img src="../../../assets/imgs/ballerhomepicidea.jpeg" alt="gooses" />
        </div>
        <div class="create__text--box">
          <h1 class="primary-heading">Create</h1>
          <p>
            Showcase your unique talents to the world with Ballersclub! Create
            your own Ballercard and share your artwork with a global community
            of talented artists. It's quick, easy, and free to join. Create
            today and take the first step Take the first step towards building
            your artistic legacy.
          </p>
          <router-link to="./createballercard" class="primary-btn"
            >Create
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Create',
};
</script>
<style scoped>
.create-section {
  margin: 5rem 0;
}
.create {
  display: flex;
  gap: 4rem;
}
.create__img--box {
  width: 50%;
}
.create__text--box {
  width: 50%;
}
img {
  width: 100%;
  height: 40rem;
  border-radius: 0.5rem;
  object-fit: cover;
}
p {
  margin-bottom: 2rem;
  line-height: 1.5;
}
@media (max-width: 887px) {
  .create {
    flex-direction: column-reverse;
  }
  .create__img--box,
  .create__text--box {
    width: 100%;
  }
}
@media (max-width: 585px) {
  .create-section {
    margin: 2.5rem 0;
  }
}
</style>
