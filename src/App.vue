<template>
  <div class="app-container">

    <top-navbar />
    <left-drawer />

    <md-content id="content">
      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
    </md-content>
  </div>
</template>

<script>
import TopNavbar from '@/components/topNavbar.vue'
import LeftDrawer from '@/components/leftDrawer.vue'

export default {
  components: {
    TopNavbar,
    LeftDrawer
  }
}
</script>

<style>
  html, body, .app-container { height: 100%; }

  #content {
    height: calc(100% - 64px);
  }
</style>
