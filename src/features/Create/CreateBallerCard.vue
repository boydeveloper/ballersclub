<template>
  <div class="create-card">
    <div class="container">
      <form class="form">
        <div class="createCard-details">
          <h1>CreateCard💎</h1>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              v-model="this.$store.state.profileUsername"
              id="username"
            />
            <p class="error">{{ usernameErrMsg }}</p>
          </div>
          <div>
            <label for="twitter">Twitter</label>
            <input type="text" v-model="twitter" id="twitter" />
            <p class="error">{{ twitterErrMsg }}</p>
          </div>
          <button @click.prevent="create">
            {{ pending ? 'Creating....' : 'Create' }}
          </button>
        </div>
        <label for="file" class="file-upload">
          <div v-show="!file" class="upload-caution">
            <ion-icon name="document-attach-outline"></ion-icon>
            <p :class="error ? 'error' : ''">Please select a file to upload</p>
          </div>
          <img ref="preview" v-show="file" class="preview" />
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

import { serverTimestamp } from '@firebase/firestore';
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
      usernameErrMsg: '',
      twitterErrMsg: '',
      error: null,
      pending: null,
      message: 'Create',
    };
  },
  methods: {
    fileChange() {
      this.file = this.$refs.ballerPhoto.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.$refs.preview.src = reader.result;
      });
      reader.readAsDataURL(this.file);
    },
    validate() {
      if (this.$store.state.profileUsername === '')
        this.usernameErrMsg = 'Input your Username';
      if (this.twitter === '') this.twitterErrMsg = 'input your twitter Handle';
      if (this.file === null) this.error = true;
    },
    async create() {
      this.validate();
      console.log('hie');

      setTimeout(() => {
        this.twitterErrMsg = '';
        this.usernameErrMsg = '';
        this.error = '';
      }, 4000);
      if (this.username !== '' && this.twitter !== '' && this.file !== null) {
        this.pending = true;
        this.file = this.$refs.ballerPhoto.files[0];
        const filename = this.file.name;
        const storage = getStorage();
        const storageRef = ref(storage, `${filename}--${uuidv4()}`);
        const uploadTask = uploadBytesResumable(storageRef, this.file);
        uploadTask.on(
          'state_changed',
          (snapshot) => {},
          (error) => {},
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
              await docRef;
              this.$store.commit('setBallerCards');
              this.$router.push({ name: 'Mirror' });
            } catch (error) {
              console.log(error.message);
            }
          }
        );
      }
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
  max-height: 36rem;
  object-fit: contain;
}
.upload-caution {
  font-size: 2.5rem;
  text-align: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 0.3rem var(--primary-color) dotted;
}
@media (max-width: 900px) {
  .create-card form {
    flex-direction: column-reverse;
  }
  h1 {
    text-align: center;
  }
}
@media (max-width: 585px) {
  .createCard-details {
    width: 100%;
  }
}
</style>
