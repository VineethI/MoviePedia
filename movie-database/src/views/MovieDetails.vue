<template>
  <v-app class="movieComponent">
      <MovieDetail/>
  </v-app>
</template>

<script>
import MovieDetail from '../components/MovieDetail.vue'
export default {
    components: {
        MovieDetail
    }
}
</script>

<style>
.movieComponent {
    height: 90vh;
}
</style>