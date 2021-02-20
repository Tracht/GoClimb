import Vue from 'vue';
import Vuex from 'vuex';
import { getLocations } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLocation: 'Auckland',
    locationData: [],
    previouslySelectedLocations: [],
    allLocations: [],
  },

  // Synchronous tasks
  mutations: { 
    setLocationName(state, payload) { // The name of the location selected via Search, "Auckland"
      state.selectedLocation = payload;
      state.previouslySelectedLocations.push(payload);
    },
    setAllLocations(state, payload) { // An array of all locations available
      state.allLocations = payload;
    },
    setOneLocationData(state, payload) { // An array of objects - data relating to selected location
      state.locationData = payload;
    },
  },

  // Async tasks (API calls)
  actions: {
  // these need asyncs in front of the function name
    getLocations({ commit, state }, payload) {
      const result = [{ "value": "Auckland" }, { "value": "Brooklyn" }, { "value": "Canbarra" }, { "value": "Detroit" }, { "value": "Enfield" }, { "value": "Frankfurt" }, { "value": "Gainsville" }, {"value": "Huddlesfield"}];
      commit('setAllLocations', result);  
    },

    getLocationData({ commit, state },  payload){
      const result = [ { title: 'Percentage', value: '10%' }, { title: 'Cost', value: '£2,000' }, { title: 'Time', value: '4 months' } ]
      commit('setOneLocationData', result);
    },

  },

  modules: {

  },
});
