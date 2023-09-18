<template>
  <v-container class="mt-16 py-10 px-sm-10 px-5">
    <v-row class="hidden-xs-only">
      <v-col>
        <v-btn @click="$router.go(-1)" color="secondary">Back</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="loading">
      <v-col class="text-center"
        ><h5 class="text-h5">Loading... Please wait</h5></v-col
      >
    </v-row>
    <v-row v-if="!loading">
      <v-col cols="12" md="4">
        <v-img
          :src="gameDetail.thumbnail"
          :alt="'image ' + gameDetail.thumbnail"
          class="rounded-xl"
        ></v-img>
        <h5 class="title hidden-sm-and-down mt-5">
          Visit official site:
          <a
            :href="gameDetail.game_url"
            target="_blank"
            rel="noopener noreferrer"
            >Link</a
          >
        </h5>
        <h5 class="title mt-5">See more information and user reviews</h5>
        <v-btn
          color="primary"
          target="_blank"
          :href="gameDetail.freetogame_profile_url"
          >Visit FreeToGame</v-btn
        >
      </v-col>
      <v-col cols="12" md="8">
        <h2 class="text-h2 font-changa font-weight-medium">
          {{ gameDetail.title }}
        </h2>
        <div class="d-flex flex-column flex-sm-row">
          <h5 class="text-h5">Publisher: {{ gameDetail.publisher }}</h5>
          <h5 class="mx-4 text-h5 hidden-xs-only">|</h5>
          <h5 class="text-h5">Developer: {{ gameDetail.developer }}</h5>
        </div>
        <div class="my-3">
          <v-chip class="title" color="info">{{ gameDetail.genre }}</v-chip>
          <v-chip class="ml-4 title" color="accent">{{
            gameDetail.platform
          }}</v-chip>
          <v-chip class="ml-4 title" color="success">{{
            gameDetail.status
          }}</v-chip>
          <p class="title mt-3">Release Date: {{ gameDetail.release_date }}</p>
        </div>
        <p class="text-subtitle-1">{{ gameDetail.description }}</p>
        <h5 class="title hidden-md-and-up">
          Visit official site:
          <a
            :href="gameDetail.game_url"
            target="_blank"
            rel="noopener noreferrer"
            >Link</a
          >
        </h5>
        <v-divider
          v-if="gameDetail.minimum_system_requirements"
          class="my-10"
        ></v-divider>
        <v-row v-if="gameDetail.minimum_system_requirements">
          <v-col>
            <div class="title">
              <h6 class="text-h6">Minimum System Requirements:</h6>
              <ul>
                <li
                  v-for="sysreq in gameDetail.minimum_system_requirements"
                  :key="sysreq"
                >
                  {{ sysreq }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
        <v-divider class="my-10"></v-divider>
        <v-row>
          <v-col cols="12">
            <h6 class="text-h6">{{ gameDetail.title }} Sneak Peek</h6>
          </v-col>
          <v-col v-if="gameDetail?.screenshots?.length === 0" cols="12">
            <p class="title grey--text">
              Sorry there's still no image for this game...
            </p>
          </v-col>
          <v-col
            v-for="image in gameDetail.screenshots"
            :key="image.id"
            sm="6"
            cols="12"
          >
            <v-img
              :src="image.image"
              :alt="'image ' + image.image"
              class="rounded-xl"
              eager
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GameDetail",
  data: () => ({}),
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("games/getOneGame", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.games.loading;
    },
    gameDetail() {
      return this.$store.state.games.detailGame;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
