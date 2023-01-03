<template>
  <div class="UppdatProfileModal">
    <div class="update-header">
      <h1>Profile Details</h1>
      <span @click="$emit('close-Modal')">X</span>
    </div>
    <div class="update-cta">
      <div class="initials">{{ this.$store.state.profileInitials }}</div>
      <form @submit.prevent="updateProfile">
        <input type="text" v-model="username" />
        <button type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UpdateProfileModal',
  data() {
    return {
      username: this.$store.state.profileUsername,
    };
  },
  methods: {
    updateProfile() {
      this.$emit('close-Modal');
      this.$store.dispatch('updateUsername');
      this.$store.state.profileName = this.$store.state.UppdatProfileModal;
    },
  },
  computed: {
    username: {
      get() {
        return this.$store.state.profileUsername;
      },
      set(payload) {
        this.$store.commit('changeUsername', payload);
      },
    },
  },
  ballerCardsData() {
    return this.$store.state.ballerCardsData;
  },
};
</script>
<style scoped>
.UppdatProfileModal {
  position: fixed;
  top: 50%;
  z-index: 4;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #120d18;
  padding: 4rem 2rem;
  border-radius: 1.2rem;
  border: 0.2rem solid var(--primary-color);
}
.update-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.update-header > h1 {
  font-size: 1.8rem;
}
.update-header > span {
  cursor: pointer;
}
.update-cta {
  display: flex;
  align-items: center;
  gap: 2rem;
  color: #fff;
}

.update-cta input {
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.2rem;
  font-family: inherit;
  font-size: 1.6rem;
  border-radius: 0.2rem;
  color: #fff;
  background: transparent;
  border: 0.2rem solid var(--primary-color);
}
.update-cta input:focus {
  outline: none;
  border: 0.2rem solid var(--color-white);
}
.update-cta button {
  padding: 1rem 1.6rem;
  border-radius: 0.2rem;
  border: 0.2rem solid var(--primary-color);
  font-family: inherit;
  background: transparent;
  color: var(--white-color);
  border-radius: 0.2rem;
  font-size: 1.4rem;
  margin-left: auto;
  margin-top: 1rem;
}

.initials {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  border-radius: 50%;
  width: 12rem;
  font-size: 4rem;
  text-transform: uppercase;
  background-color: var(--primary-color);
}
</style>
