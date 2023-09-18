import axios from "axios";

const api = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
const apiForSpecific = `https://free-to-play-games-database.p.rapidapi.com/api/game`;
const key = `9cd2129b50msha0a287c0ebb9f93p1e693ejsn3a19b2d3f8df`;
const host = `free-to-play-games-database.p.rapidapi.com`;

const state = () => ({
  games: [],
  top5Games: [],
  detailGame: {},
  searchKeyword: {},
  filteredGames: [],
  showedGames: [],
  latestRelease: [],
  page: 1,
  totalPage: 1,
  error: false,
  loading: false,
});

const mutations = {
  fetchAllGames(state) {
    axios
      .get(api, {
        params: { "sort-by": "release-date" },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      })
      .then((res) => {
        state.games = res.data;
        state.latestRelease = state.games.slice(0, 3);
        state.showedGames = state.games.slice(0, 12);
        state.totalPage = Math.round(state.games.length / 12);
      })
      .catch((err) => {
        state.error = true;
        console.error(err);
      });
  },
  fetchOneGame(state, param) {
    state.loading = true;
    axios
      .get(apiForSpecific, {
        params: {
          id: param,
        },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      })
      .then((res) => {
        state.loading = false;
        state.detailGame = res.data;
      })
      .catch((err) => {
        state.error = true;
        state.loading = false;
        console.error(err);
      });
  },
  fetchTop5Games(state) {
    axios
      .get(api, {
        params: { "sort-by": "popularity" },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      })
      .then((res) => {
        state.top5Games = res.data.slice(0, 5);
      })
      .catch((err) => {
        state.error = true;
        console.error(err);
      });
  },
  resetErrorState(state) {
    state.error = false;
  },
  changePage(state, param) {
    state.page = param;
    const start = param * 12 - 12;
    const end =
      param * 12 > state.games.length ? state.games.length : param * 12;
    state.showedGames = state.games.slice(start, end);
  },
};

const actions = {
  getAllGames(store) {
    store.commit("fetchAllGames");
  },
  getOneGame(store, param) {
    store.commit("fetchOneGame", param);
  },
  getTop5Games(store) {
    store.commit("fetchTop5Games");
  },
  resetError(store) {
    store.commit("resetErrorState");
  },
  changePageAction(store, param) {
    store.commit("changePage", param);
  },
};

export default {
  state,
  mutations,
  actions,
};
