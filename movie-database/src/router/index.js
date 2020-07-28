import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchMovie from "../views/SearchMovie.vue";
import MovieDetails from "../views/MovieDetails.vue";
import NProgress from "nprogress";
import ShowDetails from "../views/ShowDetails.vue";
import SearchTV from "../views/SearchTV.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const truth = true

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/searchMovie",
    name: "SearchMovie",
    component: SearchMovie,
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: MovieDetails,
    beforeRouteEnter(to, from, next) {
      store.commit("IS_LOADED", truth).then(() => next());
    },
  },
  {
    path: "/searchTV",
    name: "SearchTV",
    component: SearchTV,
  },
  {
    path: "/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
