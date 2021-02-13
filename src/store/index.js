import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLocation: null,
    selectedLocationData: {},
    previouslySelectedLocations: [],
    locationsList: [],
  },

  mutations: { // mutations have to be synchronous
    setSelectedLocation(state, payload) {
      state.selectedLocation = payload;
      state.previouslySelectedLocations.push(payload);
    },
  },

  actions: { // actions are used for asynchronous tasks (i.e. fetching / axios)
    getLocations({ commit }) {
      commit('getLocations');
    },
    getSelectedLocation({ commit }) {
      commit('getSelectedLocation');
    },
    getSelectedLocationData({ commit }) {
      commit('getSelectedLocationData');
    },
    setLoginDataFromLocalStore({ commit }) {
      commit('setLoginDataFromLocalStore');
    },
  },

  modules: {
  },
});
