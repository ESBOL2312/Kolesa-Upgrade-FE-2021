import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/api/products.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    accessories: [],
    clothes: [],
  },
  mutations: {
    userInfo (state, payload) {
      state.userInfo = payload
    },
    accessories (state, payload) {
      state.accessories = payload
    },
    clothes (state, payload) {
      state.clothes = payload
    },
    Order(state, payload){
      state.userInfo.score = payload
    }
  },
  actions: {
   async fetchClothes({ commit }){
      await api.getClothes().then(resp => {
        commit('clothes', resp.data)
      });
    },
    async fetchAccessories({commit}){
      await api.getAccessories().then(resp => {
        commit('accessories', resp.data)
      });
    },
    async fetchUserInfo({commit}){
      await api.getuserInfo().then(resp => {
        commit('userInfo', resp.data)
      });
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo;
    },
    accessories: state => {
      return state.accessories;
    },
    clothes: state => {
      return state.clothes;
    }
  }
})
