<template>
  <md-toolbar class="md-primary" md-elevation="1">
    <md-button v-if="loggedIn" class="md-icon-button" @click="showNavigation">
      <md-icon>menu</md-icon>
    </md-button>

    <h3 class="md-title" style="flex: 1">App Title</h3>

    <router-link v-if="!loggedIn" to="/login">
      <md-button class="md-primary">
        Log In
      </md-button>
    </router-link>

    <md-button v-if="loggedIn" class="md-primary" @click="logout">
      Log Out
    </md-button>

  </md-toolbar>
</template>

<script>
import store from '@/store'
import { AUTH_LOGOUT } from '@/store/actions/auth'
import { OPEN_LEFT_DRAWER } from '@/store/actions/nav'

import TopNavbar from '@/components/topNavbar.vue'

export default {
  name: 'TopNavbar',
  computed: {
    loggedIn() {
      return store.getters.isAuthenticated
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    },
    showNavigation: function () {
      this.$store.dispatch(OPEN_LEFT_DRAWER);
    }
  }
}
</script>
