import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultLayout from "../layout/DefaultLayout";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/giveaway",
        name: "giveaway",
        component: () => import("../views/GiveawayView.vue"),
      },
      {
        path: "/:id",
        name: "detail",
        component: () => import("../views/GameDetail.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
