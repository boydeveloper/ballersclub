<template>
  <div>Forgotpassword</div>
  <form>
    <div class="form-wrap">
      <router-link to="/auth/login">login</router-link>
      <input type="email" v-model="email" />
      <div class="success" v-show="success">{{ successMsg }}</div>
      <span class="error" v-show="!success">{{ errMsg }}</span>
      <button @click.prevent="resetPassword">submit</button>
    </div>
  </form>
</template>
<script>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
export default {
  name: 'Forgotpassword',
  data() {
    return {
      email: '',
      success: null,
      errMsg: '',
      successMsg: 'email sent',
    };
  },
  methods: {
    resetPassword() {
      const auth = getAuth();

      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.success = true;

          // Update successful.
        })
        .catch((error) => {
          this.success = false;
          this.errMsg = error.message;
        });
    },
  },
};
</script>
<style scoped>
.form-wrap {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.success {
  color: green;
}
</style>
