<template>
  <v-app-bar dark class="navbar">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn-icons-png.flaticon.com/512/5260/5260498.png"
        transition="scale-transition"
        width="35"
      />
      <h1>F2P Games</h1>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      class="hidden-xs-only"
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      text
    >
      <span class="mr-2">{{ item.title }}</span>
    </v-btn>

    <v-menu bottom left class="hidden-sm-and-up">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" class="hidden-sm-and-up">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list v-for="item in navItems" :key="item.path" class="mobileNav">
        <v-list-item :to="item.path">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
  methods: {
    switchedTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
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

.mobileNav {
  backdrop-filter: blur(16px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
  background-color: rgba(17, 25, 40, 0.45) !important;
}

header {
  font-family: "Changa", sans-serif;
}
</style>
