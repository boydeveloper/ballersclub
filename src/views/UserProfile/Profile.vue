<template>
  <div class="profile">
    <div v-show="showModal" class="modal-bg"></div>
    <div class="coverPhoto"></div>
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
            <!-- <p>💎{{ cardsCount }} arts uploaded</p> -->
          </div>
        </div>
        <div class="profile-header-right">
          <button @click="logOut" class="primary-btn">Log Out</button>
        </div>
      </div>
      <div class="profile-drops">
        <h1>My Drops</h1>
        <!-- <div  class="no-drops">
        </div> -->
        <div
          :class="
            ballerCardsData.length === 0
              ? 'no-drops'
              : 'profile-grid grid--3--cols'
          "
        >
          <h1 v-if="ballerCardsData.length === 0">NO uploads yet</h1>
          <BalllerCard :ballerCardsData="ballerCardsData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BalllerCard from '../../components/BallerCard';
import UpdateProfileModal from './components/UpdateProfileModal';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import { onMounted } from 'vue';

export default {
  name: 'Profile',
  components: {
    BalllerCard,
    UpdateProfileModal,
  },
  data() {
    return {
      showModal: null,
      // drops: [],
    };
  },

  methods: {
    async logOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push({ name: 'Home' });
      });
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
      return this.$store.state.ballerCardsData.filter(
        (data) => data.username === this.$store.state.profileName
      );
    },
    cardsCount() {
      return this.ballerCardsData.length;
    },
  },
  onMounted,
};
</script>
<style scoped>
.profile {
  font-family: var(--bold-font);
  padding-bottom: 2rem;
  min-height: 100vh;
}
.profile-header {
  display: flex;
  margin-bottom: 6rem;
  width: 100%;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
}
.coverPhoto {
  height: 20rem;
  background-size: cover;
  width: 100%;
  border: 0.2rem solid var(--primary-color);
  border-top: 0;
  background-position: 60% 50%;
  background-image: url('../../assets/imgs/ballercoverphoto.jpeg');
}
.no-drops {
  display: flex;
  padding: 8rem 6rem;
  align-items: center;
  justify-content: center;
}
.profile-picture {
  background-color: var(--primary-color);
  color: var(--dark);
  border-radius: 50%;
  height: 15rem;
  width: 15rem;
  display: flex;
  align-items: center;
  margin-top: -8rem;
  justify-content: center;
  font-size: 6rem;
  box-shadow: 0.3rem 0.2rem 0.4rem 0.2rem rgba(225, 225, 225, 0.1);
  text-transform: uppercase;
}
.profile-header-left {
  gap: 2rem;
  flex-direction: column;
  display: flex;
  align-items: left;
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
  font-size: 6rem;
  cursor: pointer;
  text-transform: capitalize;
}
</style>
