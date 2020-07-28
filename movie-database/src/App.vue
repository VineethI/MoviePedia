<template>
  <v-app id="app">
    <v-app-bar app color="black" dark>
      <router-link to="/">
        <v-img :src="img" height="60px" width="150px" contain></v-img>
      </router-link>

      <v-spacer></v-spacer>


      <v-btn v-if="this.$store.state.movie" icon @click="getMovie">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        v-show="this.$store.state.movie"  
        class="minimize-height rounded-pill"
        hide-details
        light
        solo
        v-model="movieName"
        @keyup.enter="getMovie"
        height="20px"
        placeholder="Search a Movie here"
      ></v-text-field>

      <v-btn v-show="this.$store.state.tv" icon @click="getTV">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
        v-if="this.$store.state.tv"  
        class="minimize-height rounded-pill"
        hide-details
        light
        solo
        v-model="showName"
        @keyup.enter="getTV"
        height="20px"
        placeholder="Search a TV Original here"
      ></v-text-field>
      <v-spacer></v-spacer>


      <v-btn :class="{movieActive: this.$store.state.movie}" @click="switchMovie" text>Movie</v-btn>
      <v-btn :class="{showActive: this.$store.state.tv}" @click="switchTV" text>TV</v-btn>
      <v-btn text>Favorites</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieName: "",
      showName: '',
      movie: false,
      tv: false,
      img: require("./assets/mp.png")
    };
  },
  methods: {
    getMovie() {
      this.$store.commit("GET_MOVIE", this.movieName);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=764be64d861a984d028100205e82080e&language=en-US&query=${this.$store.state.movieName}&page=1&include_adult=false`
        )
        .then(res => {
          this.$store.commit("GET_MOVIE_DETAILS", res.data.results);
          this.movieName = "";
          if (this.$route.name === "SearchMovie") {
            return;
          } else {
            this.$router.push({ name: "SearchMovie" });
          }
        });
    },
    getTV() {
      this.$store.commit("GET_SHOW", this.showName);
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=764be64d861a984d028100205e82080e&language=en-US&query=${this.$store.state.showName}&page=1&include_adult=false`
        )
        .then(res => {
          this.$store.commit("GET_SHOW_DETAILS", res.data.results);
          this.showName = "";
          if (this.$route.name === "SearchTV") {
            return;
          } else {
            this.$router.push({ name: "SearchTV" });
          }
        });
    },
    switchMovie() {
      this.tv = false
      this.movie = true
      this.$store.commit('SWITCH_TV', this.tv)
      this.$store.commit('SWITCH_MOVIE', this.movie)
    },
    switchTV() {
      this.movie = false
      this.tv = true
      this.$store.commit('SWITCH_MOVIE', this.movie)
      this.$store.commit('SWITCH_TV', this.tv)
    }
  }
};
</script>

<style lang="scss">
.img {
  height: 10%;
  width: 10%;
}

.movieActive {
  border-bottom: 2px solid white;
}

.showActive {
  border-bottom: 2px solid white;
}
</style>
