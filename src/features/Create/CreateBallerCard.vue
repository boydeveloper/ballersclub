<template>
  <div class="create-card">
    <div class="container">
      <form class="form">
        <div class="createCard-details">
          <h1>CreateCard💎</h1>
          <div>
            <label for="username">Username</label>
            <input type="text" v-model="username" id="username" />
          </div>
          <div>
            <label for="twitter">Twitter</label>
            <input type="text" v-model="twitter" id="twitter" />
          </div>
          <button @click.prevent="create">submit</button>
        </div>
        <label for="file" class="file-upload">
          <img ref="preview" class="preview" :src="imageData" />
          <input
            type="file"
            name="file"
            style="display: none"
            id="file"
            ref="ballerPhoto"
            @change="fileChange"
            accept=".png, .jpg, .jpeg"
          />
        </label>
      </form>
    </div>
  </div>
</template>
<script>
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
      username: this.$store.state.profileName,
      email: this.$store.state.profileEmail,
      twitter: '',
      file: null,
      ballerArt: null,
      imageData: '',
    };
  },
  methods: {
    fileChange() {
      this.file = this.$refs.ballerPhoto.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.$refs.preview.src = reader.result;
        localStorage.setItem('imageData', this.imageData);
      });
      reader.readAsDataURL(this.file);
    },
    async create() {
      this.file = this.$refs.ballerPhoto.files[0];
      const filename = this.file.name;

      const storage = getStorage();
      const storageRef = ref(storage, `${filename}--${uuidv4()}`);
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
            const docRef = await addDoc(collection(db, 'ballerCards'), {
              username: this.username,
              email: this.email,
              twitter: this.twitter,
              ballerPhoto: this.ballerArt,
              timestamp: serverTimestamp(),
            });
            // console.log(docRef.id);
            this.$router.push({ name: 'Home' });
          } catch (error) {
            console.log(error.message);
          }
        }
      );
    },
  },
  mounted() {
    this.imageData = localStorage.getItem('imageData');
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
  padding: 2rem 0;
  min-height: 100vh;
  font-family: var(--bold-font);
}
.create-card form {
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.createCard-details {
  width: 50%;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
}
.create-card input {
  width: 100%;
  margin-top: 0.5rem;
  padding: 1.2rem;
  font-family: inherit;
  font-size: 1.6rem;
  margin-top: 0.8rem;
  border-radius: 0.2rem;
  color: #fff;
  background: transparent;
  border: 0.2rem solid var(--primary-color);
}
.create-card input:focus {
  outline: none;
  border: 0.2rem solid var(--color-white);
}
.preview {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.create-card button {
  font-family: var(--bold-font);
  padding: 1.2rem;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary-color);
}
.file-upload {
  padding: 2rem;
  height: 40rem;
  width: 100%;
  /* padding: 19rem 4rem; */
  border: 0.3rem var(--primary-color) dotted;
}
</style>
