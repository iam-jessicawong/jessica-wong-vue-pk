<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <header-component />
    <router-view />
    <footer-component />
  </v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "DefaultLayout",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style>
.v-application,
.v-application .text-h5,
.v-application .text-h6,
.v-application .title,
.v-application .text-body-1,
.v-application .text-body-2,
.v-application .text-subtitle-1 {
  font-family: "Share Tech", sans-serif !important;
}

.v-application .font-share-tech {
  font-family: "Share Tech", sans-serif !important;
}

.v-application .font-changa {
  font-family: "Changa", sans-serif !important;
}

.container {
  max-width: unset;
  padding-right: 16px;
  padding-left: 16px;
}
</style>
