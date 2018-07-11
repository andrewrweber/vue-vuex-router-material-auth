<template>
  <div class="page-container">
    <md-app id="app">
      <md-app-toolbar class="md-primary" md-elevation="1">
        <h3 class="md-title" style="flex: 1">App Title</h3>

        <router-link v-if="!loggedIn" to="/login">
          <md-button class="md-primary">
            Log In
          </md-button>
        </router-link>

        <md-button v-if="loggedIn" class="md-primary" @click="logout">
          Log Out
        </md-button>

      </md-app-toolbar>

      <md-app-content id="content">
        <template v-if="$route.matched.length">
          <router-view></router-view>
        </template>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import store from '@/store'
import { AUTH_LOGOUT } from '@/store/actions/auth'

export default {
  computed: {
    loggedIn() {
      return store.getters.isAuthenticated
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  }
}
</script>

<style>
  html, body, .page-container, #app { height: 100%; }
</style>
