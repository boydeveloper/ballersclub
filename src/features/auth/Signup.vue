<template>
  <div class="form-wrap">
    <form>
      <router-link to="/auth/login">login</router-link>
      <div class="error" v-show="error">{{ errorMsg }}</div>
      <input type="text" name="name" v-model="name" placeholder="name" />
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="username"
      />
      <input type="email" name="email" v-model="email" placeholder="email" />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="kwndkwnwkdkw"
      />

      <button @click.prevent="signup">Signup</button>
    </form>
  </div>
</template>
<script>
import { auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { db } from '../../firebase/firebaseInit';
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      error: null,
      errorMsg: '',
    };
  },
  methods: {
    async signup() {
      if (
        this.name !== '' &&
        this.username !== '' &&
        this.email !== '' &&
        this.password !== ''
      ) {
        this.error = false;
        this.errorMsg = '';
        const auth = getAuth();
        const createUser = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const result = await createUser.user;
        await setDoc(doc(db, 'users', result.uid), {
          name: this.name,
          username: this.username,
          email: this.email,
        });
        this.$router.push({ name: 'Home' });
        return;
      }
      this.error = true;
      this.errorMsg = 'please fill out the fields';
    },
  },
};
</script>
<style></style>
