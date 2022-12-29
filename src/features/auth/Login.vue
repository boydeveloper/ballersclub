<template>
  <div class="form-wrap">
    <router-link to="/auth/signup">Signup</router-link>
    <form>
      <button>gmail</button>
      <button>twitter</button>
      <br />
      <input type="email" name="email" placeholder="email" v-model="email" />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="kwdk;dwnkdwndkwd"
      />
      <button @click.prevent="loginUser">login</button>
      <div class="error">{{ errorMsg }}</div>
    </form>
    <router-link to="/auth/forgotpassword">forgotpassword</router-link>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      error: null,
      errorMsg: '',
    };
  },

  methods: {
    async loginUser() {
      try {
        if (this.email !== '' && this.password !== '') {
          this.error = false;
          this.errorMsg = '';
          const auth = getAuth();
          // const currentUser = getAuth().currentUser;
          await signInWithEmailAndPassword(auth, this.email, this.password);
          // console.log(currentUser.uid);
          this.$router.push({ name: 'Mirror' });
        }
      } catch (err) {
        this.error = true;
        this.errorMsg = err.message;
      }
    },
  },
};
</script>
<style></style>
