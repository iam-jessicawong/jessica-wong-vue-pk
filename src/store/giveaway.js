import axios from "axios";

const api = `https://www.gamerpower.com/api/giveaways`;

const state = () => ({
  giveaways: [],
  giveawayDetail: {},
  error: ""
});

const mutations = {
  fetchAllGiveAways(state) {
    axios
      .get(api)
      .then((res) => {
        state.giveaways = res.data.articles;
        console.log(state.giveaways);
      })
      .catch((err) => {
        alert("sorry something went wrong");
        console.error(err);
      });
  },
  fetchOneGiveaway(state, param) {
    axios.get(api, {
      param: {
        id: param
      }
    })
    .then((res) => {
      state.giveawayDetail = res.data
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
  getAllGiveAways(store) {
    store.commit("fetchAllGiveAways");
  },
  getOneGiveaway(store, param) {
    store.commit("fetchOneGiveaway", param)
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
