import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createStore } from 'vuex';
import { db } from '../firebase/firebaseInit';
export const store = createStore({
  state: {
    ballerCardsData: [
      {
        id: 1,
        ballerId: 'Zyzer91$',
        img: 'bubble',
        twitter: '@zyzer__dev',
      },
      {
        id: 2,
        ballerId: 'sexist9$',
        img: 'bubble',
        twitter: 'daniel__zx',
      },
      {
        id: 3,
        ballerId: 'damn98!',
        img: 'bubble',
        twitter: 'baller_99$',
      },
    ],
    user: null,
    profileEmail: null,
    profileUsername: null,
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
        state.profileUsername = doc.data().username;
      }
    },
    setProfileInitials(state) {
      state.profileInitials = state.profileUsername.slice(0, 2);
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
      } else {
        console.log('No such document!');
      }
    },
  },
  modules: {},
});
