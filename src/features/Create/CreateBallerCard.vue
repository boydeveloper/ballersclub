<template>
  <div class="create-card">
    <form action="#">
      <input type="text" v-model="username" />
      <input type="text" v-model="twitter" />
      <input
        type="file"
        ref="ballerPhoto"
        id="blog-photo"
        @change="fileChange"
        accept=".png, .jpg, .jpeg"
      />
      <button @click.prevent="create">submit</button>
    </form>
  </div>
</template>
<script>
import { file } from '@babel/types';
import { uuidv4 } from '@firebase/util';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import { serverTimestamp, setDoc, doc } from '@firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseInit';
export default {
  name: 'CreateBallerCard',
  data() {
    return {
      username: this.$store.state.profileUsername,
      email: this.$store.state.profileEmail,
      twitter: '',
      file: null,
      ballerArt: null,
    };
  },
  methods: {
    async create() {
      this.file = this.$refs.ballerPhoto.files[0];
      const filename = this.file.name;
      console.log(filename);
      const storage = getStorage();
      const storageRef = ref(storage, `${filename}--${uuidv4()}`);
      // console.log(this.twitter);
      const uploadTask = uploadBytesResumable(storageRef, this.file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.log(error.message);
        },
        async () => {
          const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);
          this.ballerArt = await imgUrl;
          try {
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, 'ballerCards'), {
              username: this.username,
              email: this.email,
              twitter: this.twitter,
              ballerPhoto: this.ballerArt,
              timestamp: serverTimestamp(),
            });
            console.log(docRef.id);
            // await setDoc(doc(db, 'ballerCards', this.profileId),);
            this.$router.push({ name: 'Home' });
          } catch (error) {
            console.log(error.message);
          }
        }
      );
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },

    twitterHandle() {
      return this.$store.state.profileId;
    },
  },
};
</script>
<style scoped>
.create-card {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.create-card form {
  padding: 1.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}
.create-card input {
  padding: 1.2rem;
}
</style>
