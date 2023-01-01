<template>
  <div class="profile">
    <div class="container">
      <div class="profile-header">
        <div class="profile-header-left">
          <div class="profile-picture">
            {{ this.$store.state.profileInitials }}
          </div>
          <div class="profile-details">
            <p>PROFILE</p>
            <h1 class="username">
              <form @submit.prevent="updateProfile">
                <input type="text" v-model="username" />
              </form>
              {{ this.$store.state.profileUsername }}
            </h1>
            <p>💎4 arts uploaded</p>
          </div>
        </div>
        <div class="profile-header-right">
          <button @click="signOut" class="primary-btn">Logout</button>
        </div>
      </div>
      <div class="profile-grid">
        <BalllerCard :ballerCardsData="ballerCardsData" />
      </div>
    </div>
  </div>
</template>
<script>
import BalllerCard from '../../components/BallerCard';
import { getAuth } from 'firebase/auth';
export default {
  name: 'Profile',
  components: {
    BalllerCard,
  },
  methods: {
    signOut() {
      const auth = getAuth();
      auth.signOut();
      this.$router.push({ name: 'Home' });
    },
    updateProfile() {
      this.$store.dispatch('updateUsername');
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
    ballerCardsData() {
      return this.$store.state.ballerCardsData;
    },
  },
};
</script>
<style scoped>
.profile {
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.profile-header {
  display: flex;
  margin-bottom: 4rem;
  justify-content: space-between;
  align-items: center;
}
.profile-picture {
  background-color: var(--primary-color);
  color: var(--dark);
  padding: 5rem;
  border-radius: 50%;
  font-size: 6rem;
  box-shadow: 0.3rem 0.2rem 0.4rem 0.2rem rgba(225, 225, 225, 0.1);
  text-transform: uppercase;
}
.profile-header-left {
  gap: 2rem;
  display: flex;
  align-items: center;
}
.profile-header-right {
  display: flex;
  font-size: 1.8rem;
  align-items: center;
  gap: 0.8rem;
}
.logout-icon {
  height: 1.8rem;
}
.username {
  font-size: 8rem;
}
.profile-grid {
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
