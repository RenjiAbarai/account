import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  movie: [],
  loading:{
    cardData: [],
    isloadingComplete: false,
    busy: false
  }
}

const mutations = {
  [types.DOUBAN_BOOK] (state,  movie) {
    state.movie = state.movie.concat(movie)
  },
  updateLoadingState(state, data){
    state.loading.isloadingComplete = data
  },
  updateBusyState(state, data){
    state.loading.busy = data
  },
  addData(state, data){
    state.loading.cardData = state.loading.cardData.concat(data)
  },
  refreshData(state, data){
    state.loading.cardData = data
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
