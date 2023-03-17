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
        <button class="google-auth" @click.prevent="signinWithGoogle">
          Sign in with google
        </button>
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
          <p class="error">{{ errMsg }}</p>
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
import { ref } from 'vue';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: null,
      emailErrMsg: null,
      errMsg: null,
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
        this.errMsg = 'Password Must contain at least 8 characters';
      setTimeout(() => {
        this.errMsg = '';
        this.emailErrMsg = '';
      }, 3000);
    },
    signinWithGoogle() {
      this.$store.dispatch('signinWithGoogle');
    },
    loginUser() {
      this.validate();
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log('logged in');
          console.log(auth.currentUser);
          this.$router.push({ name: 'Mirror' });
        })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              this.emailErrMsg = 'Invalid email';
              break;
            case 'auth/user-not-found':
              this.emailErrMsg = 'No account found with that email';
              break;
            case 'auth/wrong-password':
              this.errMsg = 'Incorrect password';
              break;
            default:
              this.errMsg = 'Email or password was incorrect';
              break;
          }
          console.log(errMsg.value);
        });
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
@media (max-width: 900px) {
  .form-wrap {
    flex-direction: column;
  }
  .form-wrap--right {
    display: none;
  }
  .form-wrap--left {
    padding: 7rem 4rem;
    width: 100%;
  }
  @media (max-width: 585px) {
    .form-wrap--left {
      padding: 4rem 2rem;
    }
  }
}
</style>
