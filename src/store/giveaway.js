import axios from "axios";

const api = `https://gamerpower.p.rapidapi.com/api/giveaways`;
const key = `9cd2129b50msha0a287c0ebb9f93p1e693ejsn3a19b2d3f8df`;
const host = `gamerpower.p.rapidapi.com`;

const state = () => ({
  giveaways: [],
  giveawayDetail: {},
  error: "",
});

const mutations = {
  fetchAllGiveAways(state) {
    axios
      .get(api, {
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": host,
        },
      })
      .then((res) => {
        state.giveaways = res.data.slice(0, 20);
        console.log(state.giveaways);
      })
      .catch((err) => {
        alert("sorry something went wrong");
        console.error(err);
      });
  },
  fetchOneGiveaway(state, param) {
    axios
      .get(api, {
        param: {
          id: param,
        },
      })
      .then((res) => {
        state.giveawayDetail = res.data;
      })
      .catch((err) => {
        state.error = "sorry something went wrong";
        console.error(err);
      });
  },
  resetErrorState() {
    state.error = "";
  },
};

const actions = {
  getAllGiveAways(store) {
    store.commit("fetchAllGiveAways");
  },
  getOneGiveaway(store, param) {
    store.commit("fetchOneGiveaway", param);
  },
  resetError(store) {
    store.commit("resetErrorState");
  },
};

export default {
  state,
  mutations,
  actions,
};
