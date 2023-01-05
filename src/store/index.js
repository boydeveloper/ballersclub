import { async } from '@firebase/util';
import { getAuth, updateProfile } from 'firebase/auth';
import {
  doc,
  getDoc,
  updateDoc,
  getDocs,
  collection,
} from 'firebase/firestore';
import { createStore } from 'vuex';
import { db } from '../firebase/firebaseInit';
export const store = createStore({
  state: {
    ballerCardsData: [],
    user: null,
    profileEmail: null,
    twitterHandle: '',
    profileUsername: '',
    profileName: '',
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      if (doc) {
        state.profileId = doc.id;
        state.profileEmail = doc.data().email;
        state.profileName = doc.data().username;
        state.profileUsername = doc.data().username;
      }
    },
    async setBallerCards(state) {
      const querySnapshot = await getDocs(collection(db, 'ballerCards'));
      let cards = [];
      querySnapshot.forEach((doc) => {
        cards.push({ ...doc.data(), id: doc.id });
        state.ballerCardsData = cards;
      });
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileUsername.slice(0, 2);
    },
    async setProfileName(state) {
      state.profileName = state.profileUsername;
    },
    changeUsername(state, payload) {
      state.profileUsername = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const auth = getAuth();
      const docRef = await doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        commit('setProfileInfo', docSnap);
        commit('setProfileInitials');
        commit('setProfileName');
      } else {
        console.log('No such document!');
      }
    },
    async updateUsername({ commit, state }) {
      const auth = getAuth();
      try {
        if (auth.currentUser.username !== state.profileUsername) {
          await updateProfile(auth.currentUser, {
            username: state.profileUsername,
          });
          const usernameRef = doc(db, 'users', auth.currentUser.uid);
          await updateDoc(usernameRef, {
            username: state.profileUsername,
          });
        }
        state.ballerCardsData.map(async (data) => {
          if (data.email === state.profileEmail) {
            const updateRef = doc(db, 'ballerCards', data.id);
            await updateDoc(updateRef, {
              username: state.profileUsername,
            });
          }
        });
        commit('setBallerCards');
        await commit('setProfileInitials');
        commit('setProfileName');
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  modules: {},
});
