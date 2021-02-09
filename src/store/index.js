import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLocation: null,
    locationsList: null,
    locationData: null,
  },
  mutations: {
    // mutations have to be synchronous
  },
  actions: {
    // actions do not have to be synchronous
    getLocations({ commit }) {
      commit('getLocations');
    },
    getSelectedLocation({ commit }) {
      commit('getSelectedLocation');
    },
    getLocationData({ commit }) {
      commit('getLocationData');
    },
  },
  modules: {
  },
});
