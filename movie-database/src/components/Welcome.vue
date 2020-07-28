<template>
  <div class="contain">
    <v-row id="home-row">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>
          Welcome to
          <br />MoviePedia
        </h1>
        <vue-typer text="The Free Database for Movies and TV Originals"></vue-typer>
        <div class="welcomeBtns">
          <v-btn @click="switchMovie" class="welcomeMovie" text>
            Search Movie
          </v-btn>
          <v-btn @click="switchTV" class="welcomeTV" text>
            Search TV Show
          </v-btn>
        </div>
        
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      movie: false,
      tv: false
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss">
h1 {
  font-size: 3.5rem;
  font-family: "Lexend Deca", sans-serif;
  line-height: 150%;
}

#home-row {
  height: 89.5vh;
}

.contain {
  height: 91.5vh;
}

.vue-typer {
  margin: 35px 0px;
  font-family: "Lexend Deca", sans-serif;
}

.welcomeMovie {
  border-radius: 15px;
  border: 1.5px solid black;
  margin: 10px;
}

.welcomeMovie:hover {
  color: white;
  background-color: black;
}

.welcomeTV {
  border-radius: 15px;
  border: 1.5px solid black;
  margin: 10px;
}

.welcomeTV:hover {
  color: white;
  background-color: black;
}
</style>
