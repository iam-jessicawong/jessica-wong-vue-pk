<template>
  <v-card class="mx-auto card">
    <v-img class="white--text align-end" height="200px" :src="thumbnail">
      <v-card-title class="font-changa">{{ title }}</v-card-title>
    </v-img>

    <v-card-title>
      End on:
      {{
        new Date(this.end_date).toLocaleString() !== "Invalid Date"
          ? new Date(this.end_date).toLocaleString()
          : "no end date"
      }}
    </v-card-title>

    <v-card-subtitle> {{ description }} </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        target="_blank"
        :href="gamerpower_url"
      >
        Go to giveaway page
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ instructions }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "GiveawayCard",
  props: {
    id: Number,
    title: String,
    thumbnail: String,
    description: String,
    gamerpower_url: String,
    instructions: String,
    end_date: String,
  },
  data: () => ({
    show: false,
  }),
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
</style>
