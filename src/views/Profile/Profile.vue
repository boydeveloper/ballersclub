<template>
  <div class="profile">
    <div v-show="showModal" class="modal-bg"></div>
    <UpdateProfileModal
      v-show="showModal"
      @close-modal="closeModal"
      v-on:handle-update="updateProfile"
    />
    <div class="container">
      <div class="profile-header">
        <div class="profile-header-left">
          <div class="profile-picture">
            {{ this.$store.state.profileInitials }}
          </div>
          <div class="profile-details">
            <p>PROFILE</p>
            <h1 class="username" @click="openModal">
              {{ this.$store.state.profileName }}
            </h1>
            <p>💎4 arts uploaded</p>
          </div>
        </div>
        <div class="profile-header-right">
          <button @click="signOut" class="primary-btn">Logout</button>
        </div>
      </div>
      <div class="profile-drops">
        <h1>My Drops</h1>
        <div class="profile-grid">
          <BalllerCard :ballerCardsData="ballerCardsData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BalllerCard from '../../components/BallerCard';
import UpdateProfileModal from './components/UpdateProfileModal';
import { getAuth } from 'firebase/auth';

export default {
  name: 'Profile',
  components: {
    BalllerCard,
    UpdateProfileModal,
  },
  data() {
    return {
      showModal: null,
    };
  },
  methods: {
    signOut() {
      const auth = getAuth();
      auth.signOut();
      this.$router.push({ name: 'Home' });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  computed: {
    ballerCardsData() {
      return this.$store.state.ballerCardsData;
    },
  },
};
</script>
<style scoped>
.profile {
  font-family: var(--bold-font);
  padding: 2rem 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.profile-header {
  display: flex;
  margin-bottom: 6rem;
  justify-content: space-between;
  align-items: center;
}
.profile-picture {
  background-color: var(--primary-color);
  color: var(--dark);
  /* padding: 5rem; */
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

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
.modal-bg {
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: block;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.738);
}
.profile-drops h1 {
  font-size: 3.5rem;
  margin-bottom: 1.4rem;
}
.logout-icon {
  height: 1.8rem;
}
.username {
  font-size: 8rem;
  cursor: pointer;
}
.profile-grid {
  /* padding: 4rem 0; */
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
