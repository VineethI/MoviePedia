<template>
  <v-app class="showComponent">
      <ShowDetail/>
  </v-app>
</template>

<script>
import ShowDetail from '../components/ShowDetail.vue'
export default {
    components: {
        ShowDetail
    }
}
</script>

<style>
.showComponent {
    height: 100vh;
}
</style>