import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const dataState = createPersistedState({
  paths: [
    "movieName",
    "movieData",
    "movie",
    "showName",
    "tv",
    "showData",
    "movieURL",
    "showURL",
    "bp",
    "bpath",
    "mRating",
    "sRating",
    "mPop",
    "sPop",
    "sDate",
    "mDate",
    "mO",
    "sO",
  ],
});

export default new Vuex.Store({
  state: {
    movieName: "",
    movieData: {},
    movie: false,
    showName: "",
    tv: false,
    showData: {},
    movieURL: "",
    showURL: "",
    bp: "",
    bpath: "",
    mRating: "",
    mDate: "",
    mPop: "",
    sRating: "",
    sDate: "",
    sPop: "",
    mO: "",
    sO: "",
    loaded: false,
  },
  mutations: {
    GET_MOVIE(state, payload) {
      state.movieName = payload;
    },
    GET_MOVIE_DETAILS(state, payload) {
      state.movieData = payload;
    },
    SWITCH_MOVIE(state, payload) {
      state.movie = payload;
    },
    GET_SHOW(state, payload) {
      state.showName = payload;
    },
    GET_SHOW_DETAILS(state, payload) {
      state.showData = payload;
    },
    SWITCH_TV(state, payload) {
      state.tv = payload;
    },
    GET_MOVIE_URL(state, payload) {
      state.movieURL = payload;
    },
    GET_SHOW_URL(state, payload) {
      state.showURL = payload;
    },
    GET_BP(state, payload) {
      state.bp = payload;
    },
    GET_BPATH(state, payload) {
      state.bpath = payload;
    },
    GET_MRATING(state, payload) {
      state.mRating = payload;
    },
    GET_MPOP(state, payload) {
      state.mPop = payload;
    },
    GET_MDATE(state, payload) {
      state.mDate = payload;
    },
    GET_SRATING(state, payload) {
      state.sRating = payload;
    },
    GET_SPOP(state, payload) {
      state.sPop = payload;
    },
    GET_SDATE(state, payload) {
      state.sDate = payload;
    },
    GET_SO(state, payload) {
      state.sO = payload;
    },
    GET_MO(state, payload) {
      state.mO = payload;
    },
    IS_LOADED(state, payload) {
      state.loaded = payload
    }
  },
  actions: {},
  modules: {},
  plugins: [dataState],
});
