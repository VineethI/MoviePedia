<template>
  <v-app style="position: relative;  overflow:hidden " class="background" text-center>
    <v-img
      style="filter: brightness(30%); object-fit: cover"
      :src="'https://image.tmdb.org/t/p/original' + this.$store.state.bpath"
    ></v-img>
    <div class="details">
      <div class="contain">
        <h1 class="movieTitle">{{this.$route.params.id}}</h1>
        <div class="summary">
          <div class="rating">
            <v-icon color="yellow">mdi-star</v-icon>
            <h5 class="ratingNum">{{this.$store.state.sRating}}</h5>
          </div>
          <div class="runTime">
            <v-icon color="yellow">mdi-calendar</v-icon>
            <h5 class="ratingNum">{{this.$store.state.sDate}}</h5>
          </div>
          <div class="popularity">
            <v-icon color="yellow">mdi-account</v-icon>
            <h5 class="ratingNum">Popularity: {{this.$store.state.sPop}}</h5>
          </div>
        </div>
        <br />
        <br />
        <div class="movieOverview">
          <p class="textOverview">{{this.$store.state.sO}}</p>
        </div>
        <br />
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="movieTrailer" color="black" v-bind="attrs" v-on="on">Clip</v-btn>
          </template>
          <div>
            <section>
              <iframe
                class="video"
                width="500"
                height="335"
                :src="'https://www.youtube.com/embed/' + this.$store.state.showURL"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </section>
          </div>
        </v-dialog>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false
    };
  },
  created() {
    if (this.$route.query.obj.backdrop_path) {
      this.$store.commit("GET_BPATH", this.$route.query.obj.backdrop_path);
      this.$store.commit("GET_SRATING", this.$route.query.obj.vote_average);
      this.$store.commit("GET_SPOP", this.$route.query.obj.popularity);
      this.$store.commit("GET_SDATE", this.$route.query.obj.first_air_date);
      this.$store.commit("GET_SO", this.$route.query.obj.overview);
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${this.$route.query.obj.id}/videos?api_key=764be64d861a984d028100205e82080e&language=en-US`
        )
        .then(res => {
          this.$store.commit("GET_SHOW_URL", res.data.results[0].key);
        });
    }
  }
};
</script>

<style lang="scss">
.details {
  position: absolute;
  display: flex;
  width: 140vh;
  height: 100vh;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  .contain {
    padding: 15% 15%;
    width: 140vh;
    .movieTitle {
      color: white;
      font-size: 4rem;
    }
    .summary {
      display: flex;
      .rating {
        display: flex;
        align-items: center;
        .ratingNum {
          color: white;
          padding: 2px 0px 0px 10px;
        }
      }
      .runTime {
        padding-left: 40px;
        display: flex;
        align-items: center;
        .ratingNum {
          color: white;
          padding: 2px 0px 0px 10px;
        }
      }
      .popularity {
        padding-left: 40px;
        display: flex;
        align-items: center;
        .ratingNum {
          color: white;
          padding: 2px 0px 0px 10px;
        }
      }
    }
    .movieOverview {
      .textOverview {
        color: white;
        font-size: 1rem;
      }
    }
    .movieTrailer {
      border-radius: 15px;
      border: 2px solid white;
      color: white;
    }

    .movieTrailer:hover {
      background-color: black;
      border: 2px solid white;
    }
  }
}

.video {
  border-radius: 15px;
}
</style>