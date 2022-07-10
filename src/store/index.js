import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);


export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],

  state: {

  },

  getters: {

  },

  mutations: {

  },

  actions: {
    async fetchLogin(store, param) {
        axios.post('https://api.capstone.thisham.my.id/login', {
            email: param.email,
            password: param.password
        }).then(response => console.log(response))
        router.push('/')
    }
  },
});