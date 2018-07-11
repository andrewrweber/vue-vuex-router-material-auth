<template>
  <div id="app">
    <h1>Auth Flow</h1>
    <ul>
      <li>
        <span class="logout" v-if="loggedIn" @click="logout">Log out</span>
        <router-link v-if="!loggedIn" to="/login">Log in</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/dashboard">Dashboard</router-link>
      </li>
    </ul>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
</template>

<script>
import store from './store'
import { AUTH_LOGOUT } from '@/store/actions/auth'

export default {
  computed: {
    loggedIn() {
      return store.getters.isAuthenticated;
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style lang="scss" scoped>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
  }

  #app {
    padding: 0 20px;
  }

  .logout {
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }

  a, .logout {
    color: #7f8c8d;
    text-decoration: none;
  }

  a:hover, .logout:hover {
    color: #4fc08d;
  }
</style>
