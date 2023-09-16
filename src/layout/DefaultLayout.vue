<template>
  <v-app>
    <header-component />
      <v-content>
        <router-view />
      </v-content>
    <footer-component />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: "DefaultLayout",
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style scoped>
.container {
  margin-left: 10px;
}
</style>