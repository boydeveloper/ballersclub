<template>
  <div class="form-wrap">
    <div class="form-wrap--left">
      <div class="login-header">
        <h1 class="form-heading">Sign in to continue</h1>
        <p>
          Don't have an account?
          <router-link class="auth-link" to="/auth/signup">
            Create now
          </router-link>
        </p>
        <p class="google-auth">Sign in with google</p>
        <div class="or-txt">or</div>
      </div>
      <form class="login-form">
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Thutmose@gmail.com"
            v-model="email"
          />
          <p class="error">{{ emailErrMsg }}</p>
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="password"
            placeholder="******"
          />
          <p class="error">{{ passwordErrMsg }}</p>
        </div>
        <button @click.prevent="loginUser">
          {{ message }}
        </button>
      </form>
    </div>
    <div class="form-wrap--right">
      <img
        class="login-img"
        src="../../assets/imgs/welcomeballer.jpeg"
        alt="welcome back image"
      />
    </div>
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
      emailErrMsg: '',
      passwordErrMsg: '',
      pending: null,
      message: 'login',
    };
  },

  methods: {
    validate() {
      if (this.email === '') this.emailErrMsg = 'input your email';
      if (this.email.indexOf('.com') === -1)
        this.emailErrMsg = "Email is invalid: it must contain '.com'";
      if (this.password.length <= 7)
        this.passwordMsg = 'Password mMust contain at least 8 characters';
    },
    async loginUser() {
      setTimeout(() => {
        this.emailErrMsg = '';
        this.passwordErrMsg = '';
      }, 4000);
      this.validate();
      try {
        if (
          this.email !== '' &&
          this.password !== '' &&
          this.email.indexOf('.com') !== -1
        ) {
          this.emailErrMsg = '';
          this.passwordErrMsg = '';
          this.message = 'Loading.....';
          const auth = getAuth();
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.pending = false;
          this.$router.push({ name: 'Mirror' });
        }
      } catch (err) {
        this.message = 'Login';
        if (err.message === 'Firebase: Error (auth/wrong-password).')
          this.passwordErrMsg = 'wrong password';
      }
    },
  },
};
</script>
<style scoped>
.form-wrap {
  color: var(--color-white);
  display: flex;
}
.form-wrap--left {
  padding: 7rem 4rem;
  width: 40%;
  max-width: 50rem;
  margin: 0 auto;
}
.form-wrap--right {
  width: 60%;
}

.login-header {
  margin-bottom: 2rem;
}

.login-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 100vh;
}
.login-form {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}
.or-txt {
  text-align: center;
  margin: 1rem 0;
}
.google-auth {
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem;
  cursor: pointer;
  margin-top: 1.4rem;
  box-shadow: 0 0.1rem 0.2rem var(--primary-color);
  text-align: center;
}
.login-form label {
  font-size: 1.8rem;
  font-family: var(--bold-font);
}
.login-form input {
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
.login-form input:focus {
  outline: none;
  border: 0.2rem solid var(--color-white);
}
.login-form > button {
  font-family: var(--bold-font);
  padding: 1.2rem;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary-color);
}
.disabled {
  background-color: #e414d6 !important;
}
</style>
