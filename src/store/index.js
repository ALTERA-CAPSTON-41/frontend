import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from "../router/index";
import { APILocation } from '@/constants/environment';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],

  state: {
    token: "",
    med: Object,
    sakit: '',
    total: Number,
    role: "",
    info: "",
    patients: [],
  },

  getters: {},

  mutations: {
    setToken(state, param) {
      state.token = param.token;
      state.role = param.role;
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
    setInfo(state, param) {
      state.info = param;
    },
    setPatient(state, param) {
      state.patients = param;
    },
  },

  actions: {
    async fetchLogin(store, param) {
      axios.post(APILocation + "/login", {
          email: param.email,
          password: param.password
      }).then(response => console.log(response))
      router.push('/')
    },
    // code integrasi get data table
    async getAllPatient(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
      .get(APILocation + "/patients", {
        headers: {
          "Content-Type":"application/json",
          Authorization: "Bearer " + store.state.token,
        },
      })
      .then((response) => {
        console.log("response: ", response)
        return response.data.data;
      })
      .catch((eror) => {
        store.commit("setInfo", eror);
      });
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
