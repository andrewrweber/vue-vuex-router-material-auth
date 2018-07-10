<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login">
      <label><input v-model="username" placeholder="email"></label>
      <label><input v-model="password" placeholder="password" type="password"></label><br>
      <button type="submit">login</button>
      <!-- <p v-if="error" class="error">Bad login information</p> -->
    </form>
  </div>
</template>

<script>
  import {AUTH_REQUEST} from '@/store/actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
          this.$router.push('/')
        })
       }
    },
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
