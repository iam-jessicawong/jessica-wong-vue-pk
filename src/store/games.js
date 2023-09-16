import axios from "axios";

const api = `https://www.freetogame.com/api/games`;

const state = () => ({
  games: [],
  top5Games: [],
  detailGame: {},
  error: ""
});

const mutations = {
  fetchAllGames(state) {
    axios
      .get(api)
      .then((res) => {
        state.games = res.data.articles;
        console.log(state.games);
      })
      .catch((err) => {
        alert("sorry something went wrong");
        console.error(err);
      });
  },
  fetchOneGame(state, param) {
    axios.get(api, {
      param: {
        id: param
      }
    })
    .then((res) => {
      state.detailGame = res.data
    })
    .catch((err) => {
      state.error = "sorry something went wrong";
      console.error(err);
    })
  },
  resetErrorState() {
    state.error = "";
  }
};

const actions = {
  getAllGames(store) {
    store.commit("fetchAllGames");
  },
  getOneGame(store, param) {
    store.commit("fetchOneGame", param)
  },
  resetError(store) {
    store.commit("resetErrorState")
  }
};

export default {
  state,
  mutations,
  actions,
};
