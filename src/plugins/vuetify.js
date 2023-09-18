import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        background: "#fff",
        primary: "#BD6267",
        secondary: "#5B4C97",
        accent: "#1C3CA1",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        background:
          "linear-gradient(to bottom right, rgba(3, 21, 68, 1), rgba(1, 7, 23, 1))",
        primary: "#1C3CA1",
        secondary: "#5B4C97",
        accent: "#BD6267",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});
