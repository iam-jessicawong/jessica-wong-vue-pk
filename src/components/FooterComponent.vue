<template>
  <footer class="py-10 px-sm-10 px-md-16 text-center">
    <div class="d-flex justify-center">
      <v-img
        alt="logo"
        class="shrink mr-2"
        contain
        src="https://cdn-icons-png.flaticon.com/512/5260/5260498.png"
        transition="scale-transition"
        width="35"
      />
      <h1>F2P Games</h1>
    </div>
    <p class="title">
      F2P Games is a website that provide information about all free to play
      games. Our information is based on FreeToGame API.
    </p>
    <v-divider></v-divider>
    <div class="credit px-10 pt-10">
      <p class="mb-0">©2023. All rights reserved. Made by Jessica Wong.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.credit {
  text-align: center;
  color: rgb(213, 213, 213);
}

footer {
  background-color: #1737a2;
}
</style>
