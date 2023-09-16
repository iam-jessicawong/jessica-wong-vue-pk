<template>
  <v-app-bar dense dark class="navbar">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="20"
      />
      <h1>F2P Games</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn v-for="item in navItems" :key="item.path" :to="item.path" text>
      <span class="mr-2">{{ item.title }}</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    navItems: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Game's Giveaway",
        path: "/giveaway",
      },
    ],
  }),
};
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(16px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  background-color: rgba(17, 25, 40, 0.45) !important;
  position: absolute;
  z-index: 1;
}
</style>
