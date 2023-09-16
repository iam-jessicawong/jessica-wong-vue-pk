import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import games from "./games";
import giveaway from "./giveaway";

Vue.use(Vuex);

const persistedDataState = createPersistedState({
  paths: ["games", "giveaway"]
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    games: {
      namespaced: true,
      ...games
    },
    giveaway: {
      namespaced: true,
      ...giveaway
    }
  }
});
