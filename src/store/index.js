import Vue from 'vue';
import Vuex from 'vuex';
import { getLocations } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedLocation: 'Krabi, Thailand',
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
      const result = [{ "value": "Krabi, Thailand" }, { "value": "Chang Mai, Thailand" }, { "value": "Ha Long Bay, Vietnam" }, { "value": "Huu Lung, Vietnam" }, { "value": "Quoc Oai, Vietnam" }, { "value": "Mai Chau, Vietnam" }, { "value": "Paklenica, Croatia" }, {"value": "Istria, Croatia"}, {"value": "Split, Croatia"}, {"value": "Będkowska Valley, Poland"}, {"value": "Kobylańska Valley, Poland"}, {"value": "Bolechowicka Valley, Poland"}, {"value": "Mirów, Poland"}, { "value": "Rzędkowice, Poland" }, { "value": "Zakrzówek, Poland" }, { "value": "Góry Sokole, Poland" }, { "value": "Córdoba - Sierra Morena, Spain" }, { "value": "El Chorro - Malaga, Spain" }, { "value": "Calpe Area - Alicante, Spain" }, { "value": "Picos de Europe - Asturias, Spain" }, { "value": "Montserrat, Spain" }, { "value": "Sierra de Prades, Spain" }, { "value": "Vilanova de Meia, Spain" }, { "value": "Rodellar, Spain" }, { "value": "Val di Mello – Lombardy, Italy" }, { "value": "Sarca Valley – Trentino, Italy" }, { "value": "Orco Valley – Piedmont, Italy" }, { "value": "Rocca Sbarua – Piedmont, Italy" }, { "value": "Finale LIgure - Liguria, Italy" }, { "value": "Gran Sasso - Abruzzo, Italy" }, { "value": "Palinuro - Campania, Italy" }, { "value": "San Vito lo Capo - Sicily, Italy" }, { "value": "Cala Gonone - Sardinia, Italy" }, { "value": "Kalymnos, Greece" }, { "value": "Frankenjura - Bavaria, Germany" }, { "value": "Misja Pec, Slovenia" }, { "value": "Bovilla, Albania" }, { "value": "Brar, Albania" }, { "value": "Gjipe, Albania" }, { "value": "Përmet, Albania" }, { "value": "Theth, Albania" }, { "value": "Užice, Serbia" }, { "value": "Bor, Serbia" }, { "value": "Zupci - Durmitor, Montenegro" }, { "value": "Crvena greda - Durmitor, Montenegro" }, { "value": "Buljarica - Budva, Montenegro" }, ];
      result.sort((a, b) => (a.value > b.value) ? 1 : -1)
      commit('setAllLocations', result);  
    },

    getLocationData({ commit, state },  payload){
      const result = [ { title: 'Number of Routes', value: '70' }, { title: 'Grade 6a-6c', value: '40%' }, { title: 'Grade 7a-7c', value: '60%' }, { title: 'Best time to visit', value: 'November - March' } ]
      commit('setOneLocationData', result);
    },

  },

  modules: {

  },
});
