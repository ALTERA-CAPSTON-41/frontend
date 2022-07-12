import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router/index";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],

  state: {
    token: null,
    med: Object,
    sakit: '',
    total: Number,
  },

  getters: {},

  mutations: {
    setToken(state, param) {
      state.token = param
    },
    setMedRedByID(state, param) {
      state.med = param
    },

    setPenyakit(state, param) {
      state.sakit = param
    },

    setFeature(state, param) {
      state.total = param
    },
  },

  actions: {
    async fetchLogin(store, param) {
      axios.post("https://api.capstone.thisham.my.id/login", {
          email: param.email,
          password: param.password
      }).then(response => console.log(response))
      router.push('/')
    },
    async fetchMedRecordByID(store, param) {
    const config = {
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }
    await axios
      .post(
        `https://api.capstone.thisham.my.id/medical-records/${param.id}`,
        config
      )
      .then((response) => store.commit('setMedRedByID', response.data.data))
    },

  async fetchCode(store, param) {
    await axios
      .get(`https://api.capstone.thisham.my.id/icd10/${param.code}`)
      .then((response) =>
        store.commit('setPenyakit', response.data.data[0].description)
      )
  },

  async fetchFeature(store, param) {
    const config = {
      headers: {
        Authorization: `Bearer ${param.token}`,
      },
    }

    await axios
      .get(
        `https://api.capstone.thisham.my.id/dashboards/${param.feature}`,
        config
      )
      .then((response) => store.commit('setFeature', response.data.data.total))
  },
},
});
