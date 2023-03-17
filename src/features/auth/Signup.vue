<template>
  <div class="form-wrap">
    <div class="form-wrap--left">
      <h1 class="form-heading">Create account</h1>
      <form class="signup-form">
        <p>
          Have an account?
          <router-link class="auth-link" to="/auth/login">login</router-link>
        </p>
        <button class="google-auth" @click.prevent="signupWithGoogle">
          Signup with google
        </button>
        <div class="error" v-show="error">{{ errorMsg }}</div>
        <div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="danky75$"
          />
          <p class="error">{{ usernameErrMsg }}</p>
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
          <p class="error">{{ emailErrMsg }}</p>
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
          <p class="error">{{ passwordErrMsg }}</p>
        </div>

        <button class="signup-btn" @click.prevent="signup">
          {{ signupState }}
        </button>
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
      username: '',
      email: '',
      password: '',
      emailErrMsg: '',
      // defaultProfileImg: require('../../assets/imgs/default.jpg'),
      profileUrl: '',
      usernameErrMsg: '',
      passwordErrMsg: '',
      signupState: 'Signup',
    };
  },
  methods: {
    validate() {
      if (this.username === '')
        this.usernameErrMsg = 'Please, input a username';
      if (this.email === '') this.emailErrMsg = 'Please, input your email';
      if (this.email.indexOf('.com') === -1)
        this.emailErrMsg = "Email is invalid: it must contain '.com'";
      if (this.email.indexOf('.com') !== -1) this.emailErrMsg = '';
      if (this.password.length <= 7)
        this.passwordErrMsg = 'Password Must contain at least 8 characters';
    },
    signupWithGoogle() {
      this.$store.dispatch('signinWithGoogle');
    },
    async signup() {
      setTimeout(() => {
        this.emailErrMsg = '';
        this.usernameErrMsg = '';
        this.passwordErrMsg = '';
      }, 4000);
      this.validate();
      try {
        if (
          this.username !== '' &&
          this.email !== '' &&
          this.password !== '' &&
          this.email.indexOf('.com') !== -1
        ) {
          this.usernameErrMsg = '';
          this.emailErrMsg = '';
          this.passwordErrMsg = '';
          this.signupState = 'Loading....';
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
            timestamp: serverTimestamp(),
          });
          this.$router.push({ name: 'Home' });
          return;
        }
      } catch (error) {
        this.signupState = 'Signup';
        console.log(error.message);
      }
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
}
.signup-btn {
  font-family: var(--bold-font);
  padding: 1.2rem;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary-color);
}
@media (max-width: 900px) {
  .form-wrap {
    flex-direction: column;
  }
  .form-wrap--left {
    padding: 7rem 4rem;
    width: 100%;
  }
  .form-wrap--right {
    display: none;
  }
  @media (max-width: 585px) {
    .form-wrap--left {
      padding: 4rem 2rem;
    }
  }
}
</style>
