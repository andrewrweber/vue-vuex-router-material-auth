/* eslint-disable promise/param-names */
import { OPEN_LEFT_DRAWER, CLOSE_LEFT_DRAWER } from '../actions/nav'

const state = { leftDrawerOpen: false }

const getters = {
  isLeftDrawerOpen: state => state.leftDrawerOpen,
}

const actions = {
  [OPEN_LEFT_DRAWER]: ({commit, dispatch}) => {
    commit(OPEN_LEFT_DRAWER)
  },
  [CLOSE_LEFT_DRAWER]: ({commit, dispatch}) => {
    commit(CLOSE_LEFT_DRAWER)
  }
}

const mutations = {
  [OPEN_LEFT_DRAWER]: (state) => {
    state.leftDrawerOpen = true
  },
  [CLOSE_LEFT_DRAWER]: (state) => {
    state.leftDrawerOpen = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
