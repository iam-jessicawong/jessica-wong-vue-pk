<template>
  <v-card class="mx-auto card" :to="'/' + id">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="thumbnail" :alt="'image ' + title"></v-img>

    <v-card-title class="pb-0 text-h5 font-changa"
      >{{ title }}
      <v-chip v-if="isnew" class="ml-4" color="error">New</v-chip>
    </v-card-title>

    <v-card-text>
      <h3 class="font-weight-regular">{{ publisher }}</h3>

      <div class="my-4 text-subtitle-1">
        <v-chip color="info">{{ genre }}</v-chip>
      </div>

      <div>{{ short_description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        class="font-weight-bold text-subtitle-1"
        text
        :to="'/' + id"
      >
        See more
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    id: Number,
    title: String,
    thumbnail: String,
    publisher: String,
    release_date: String,
    genre: String,
    short_description: String,
    platform: String,
    isnew: Boolean,
  },
};
</script>

<style scoped>
.card {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.55);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
}

.cardLight {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
