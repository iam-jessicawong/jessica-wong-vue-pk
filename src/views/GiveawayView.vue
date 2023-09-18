<template>
  <v-container class="mt-16 py-10 px-sm-10 px-5">
    <v-row class="text-center">
      <v-col>
        <h1 class="text-h1 font-changa font-weight-bold">Giveaways</h1>
        <p class="title mt-3 mb-10">
          20 latest giveaways information from GamerPower. To see more about the
          giveaway visit giveaway page
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="giveaway in giveaways"
        :key="giveaway.id"
        align-self="start"
        md="4"
        lg="3"
        cols="12"
        sm="6"
      >
        <giveaway-card
          :id="giveaway.id"
          :title="giveaway.title"
          :description="giveaway.description"
          :gamerpower_url="giveaway.gamerpower_url"
          :thumbnail="giveaway.thumbnail"
          :instructions="giveaway.instructions"
          :end_date="giveaway.end_date"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GiveawayCard from "@/components/GiveawayCard.vue";

export default {
  name: "GiveawayView",
  components: { GiveawayCard },
  data: () => ({}),
  mounted() {
    this.$store.dispatch("giveaway/getAllGiveAways");
  },
  computed: {
    giveaways() {
      return this.$store.state.giveaway.giveaways;
    },
  },
};
</script>
