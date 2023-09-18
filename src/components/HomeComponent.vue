<template>
  <v-main>
    <v-carousel hide-delimiters show-arrows-on-hover cycle height="100vh">
      <v-carousel-item
        v-for="game in top5Games"
        :key="game.id"
        :src="game.thumbnail"
        transition="slide-x-transition"
      >
        <v-sheet color="rgba(0, 0, 0, 0.7)" tile>
          <v-row class="carousel-content pa-md-5">
            <div class="content container">
              <h1 class="mb-0">{{ game.title }}</h1>
              <h2 class="mb-3">
                {{ game.publisher }}
                <v-chip class="mx-3 font-weight-regular" color="info">{{
                  game.genre
                }}</v-chip>
                <v-chip class="font-weight-regular">{{ game.platform }}</v-chip>
              </h2>
              <p class="text-h6">{{ game.short_description }}</p>
              <v-btn :to="'/' + game.id" color="primary">See detail</v-btn>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <section>
      <v-container class="py-16 mt-10 px-md-16 px-sm-10">
        <v-row class="mb-5">
          <v-col cols="12" class="text-center">
            <h4
              class="text-h4 font-weight-regular font-share-tech text-uppercase"
            >
              About Us
            </h4>
            <h1 class="text-h1 font-changa">Welcome to F2P Games</h1>
            <p class="text-h5 font-share-tech">
              We give information about free to play games. Thank you for
              visiting us!
            </p>
            <v-btn color="primary" href="#games">Explore games</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-container class="py-15 px-md-16 px-sm-10">
        <v-row class="text-center mb-5">
          <v-col cols="12">
            <h2 class="text-h2 font-changa font-weight-medium">
              Latest Release
            </h2>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col
            v-for="game in latest"
            :key="game.id"
            align-self="start"
            md="4"
            cols="12"
            sm="6"
          >
            <game-card
              :id="game.id"
              :title="game.title"
              :publisher="game.publisher"
              :genre="game.genre"
              :platform="game.platform"
              :thumbnail="game.thumbnail"
              :release_date="game.release_date"
              :short_description="game.short_description"
              :isnew="true"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section id="games">
      <v-container class="py-15 px-md-16 px-sm-10">
        <v-row class="text-center mb-5">
          <v-col>
            <h2 class="text-h2 font-changa font-weight-medium mb-3">
              All Games
            </h2>
            <p class="title">
              See all free to play games you can play on PC, website or both.
              Simply search what game you would like to know from the filter bar
              bellow.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="game in games"
            :key="game.id"
            align-self="start"
            md="4"
            lg="3"
            cols="12"
            sm="6"
          >
            <game-card
              :id="game.id"
              :title="game.title"
              :publisher="game.publisher"
              :genre="game.genre"
              :platform="game.platform"
              :thumbnail="game.thumbnail"
              :release_date="game.release_date"
              :short_description="game.short_description"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                color="secondary"
                v-model="page"
                class="my-4"
                :length="totalPage"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </section>
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
    page: 1,
  }),
  mounted() {
    this.$store.dispatch("games/getTop5Games");
    this.$store.dispatch("games/getAllGames");
  },
  computed: {
    games() {
      return this.$store.state.games.showedGames;
    },
    top5Games() {
      return this.$store.state.games.top5Games;
    },
    latest() {
      return this.$store.state.games.latestRelease;
    },
    totalPage() {
      return this.$store.state.games.totalPage;
    },
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("games/changePageAction", page);
    },
  },
  watch: {
    page: function (val) {
      this.changePage(val);
    },
  },
};
</script>

<style scoped>
.v-carousel .v-sheet {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.carousel-content {
  color: rgb(222, 222, 222);
}

.carousel-content .content {
  padding: 2rem;
}
</style>
