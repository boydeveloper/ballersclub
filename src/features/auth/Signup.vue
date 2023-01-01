<template>
  <div class="form-wrap">
    <div class="form-wrap--left">
      <h1 class="form-heading">Create account</h1>
      <form class="signup-form">
        <p>
          Have an account?

          <router-link class="auth-link" to="/auth/login">login</router-link>
        </p>
        <div class="error" v-show="error">{{ errorMsg }}</div>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="danky75$"
          />
        </div>
        <div>
          <label for="email"> Email </label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            placeholder="Thutmose@gmail.com"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            v-model="password"
            placeholder="******"
          />
        </div>

        <button @click.prevent="signup">Signup</button>
      </form>
    </div>
    <div class="form-wrap--right">
      <img
        class="signup-img"
        src="../../assets/imgs/signup.jpeg"
        alt="Three gooses welcoming you to signup"
      />
    </div>
  </div>
</template>
<script>
import { auth, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import { db } from '../../firebase/firebaseInit';
import { serverTimestamp, setDoc, doc } from '@firebase/firestore';
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
<style scoped>
.form-wrap {
  display: flex;
}
.form-wrap--left {
  padding: 7rem 4rem 0rem;
  width: 40%;
  max-width: 50rem;
  margin: 0 auto;
}
.form-wrap--right {
  width: 60%;
  height: 100%;
}
.signup-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.signup-form label {
  font-size: 1.8rem;
  font-family: var(--bold-font);
}
.signup-form input {
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
.signup-form input:focus {
  outline: none;
  border: 0.2rem solid var(--color-white);
}
.signup-img {
  width: 100%;
  height: 100%;
  height: 100vh;
  object-fit: cover;
  /* object-position: center center; */
}
.signup-form > button {
  font-family: var(--bold-font);
  padding: 1.2rem;
  font-size: 1.8rem;
  color: #fff;
  background-color: var(--primary-color);
  /* border: 0.2rem solid var(--color-white); */
}
</style>
