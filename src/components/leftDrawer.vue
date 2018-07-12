<template>
  <md-drawer :md-active.sync="showNavigation">
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
    </md-toolbar>

    <md-list>
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text">Spam</span>
      </md-list-item>
    </md-list>
  </md-drawer>
</template>

<script>
import store from '@/store'
import { OPEN_LEFT_DRAWER, CLOSE_LEFT_DRAWER } from '@/store/actions/nav'

export default {
  name: 'LeftDrawer',
  computed: {
    showNavigation: {
      get: function () {
        return store.getters.isLeftDrawerOpen
      },
      set: function (isOpen) {
        if(isOpen) { store.dispatch(OPEN_LEFT_DRAWER) }
        else { store.dispatch(CLOSE_LEFT_DRAWER) }
      }
    }
  }
}
</script>
