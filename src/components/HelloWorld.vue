<template>
  <v-main>
    <v-carousel hide-delimiters show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        transition="slide-x-transition"
      >
        <v-sheet color="rgba(0, 0, 0, 0.5)" tile>
          <v-row class="carousel-content">
            <div class="content container">
              <h1>Title</h1>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-row>
        <v-col align-self="start" md="4" cols="12" sm="6">
          <game-card />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import GameCard from "./GameCard.vue";

export default {
  name: "HelloWorld",
  components: {
    GameCard,
  },
  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>

<style scoped>
.container {
  max-width: unset;
  padding-right: 16px;
  padding-left: 16px;
}

.v-carousel .v-sheet {
  position: relative;
  top: 25rem;
}

.carousel-content {
  color: rgb(222, 222, 222);
}

.carousel-content .content {
  padding: 2rem;
}
</style>
