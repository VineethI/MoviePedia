<template>
  <v-container>
    <v-col>
      <template v-for="(show, $searchIndex) in this.$store.state.showData">
        <v-row id="row" v-if="show.poster_path" :key="$searchIndex">
          <v-card
            @click="goToShow(show)"
            width="50%"
            height="23.5vh"
            class="mCard rounded-lg d-inline-block ma-auto"
          >
            <v-row id="card-row">
              <v-col cols="3" class="pa-0">
                <v-img
                  class="image"
                  height="180"
                  width="130"
                  :src="'https://image.tmdb.org/t/p/w200/' + show.poster_path"
                ></v-img>
              </v-col>
              <v-col cols="8" class="pa-5">
                <div>
                  <h3 style="{padding-top: '10px'}">{{show.original_name}}</h3>
                  <p>{{show.first_air_date}}</p>
                  <br />
                  <p class="overview">{{show.overview}}</p>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}
            <template v-slot:action="{ attrs }">
              <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
          </v-snackbar>
        </v-row>
      </template>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: "Show Details Unavailable",
      timeout: 3000
    };
  },
  methods: {
    goToShow(show) {
      if (show.backdrop_path) {
        this.$router.push({
          name: "ShowDetails",
          params: { id: show.original_name },
          query: { obj: show, sho: show.id }
        });
      } else {
        console.log("no backdrop");
        this.snackbar = true
      }
    }
  }
};
</script>

<style style lang="scss">
.mCard {
  cursor: pointer;
  border-radius: 10px;
}

#row {
  height: 26.1vh;
  margin: 2%;
  border-radius: 10px;
}

.image {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.overview {
  font-size: 0.9rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.card-row {
  height: 26.1vh;
  border-radius: 10px;
}
</style>


