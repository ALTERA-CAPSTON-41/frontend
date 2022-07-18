import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { APILocation } from "@/constants/environment";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["token", "role"]
});

export default new Vuex.Store({
  plugins: [persistedDataState],

  state: {
    token: null,
    med: Object,
    sakit: "",
    total: null,
    totalPasien: null,
    totalNurse: null,
    totalPoli: null,
    totalAntrean: null,
    role: "",
    info: null,
    error: null,
    patients: [],
  },

  getters: {},


  mutations: {
    setToken(state, param) {
      state.token = param;
    },
    setMedRedByID(state, param) {
      state.med = param;
    },
    setPenyakit(state, param) {
      state.sakit = param;
    },
    setFeature(state, param) {
      state.total = param;
    },
    setFeatureAntrean(state, param) {
      state.totalAntrean = param;
    },
    setFeaturePasien(state, param) {
      state.totalPasien = param;
    },
    setFeaturePoli(state, param) {
      state.totalPoli = param;
    },
    setFeatureNurse(state, param) {
      state.totalNurse = param;
    },
    setInfo(state, param) {
      state.info = param;
    },
    setAdmin(state, param) {
      state.info = param;
    },
    setPatient(state, param) {
      state.patients = param;
    },
    setRole(state, param) {
      state.role = param;
    },
    setError(state, param) {
      state.role = param;
    },
  },

  actions: {
    // axios.post(url, body/payload/data, headers)
    // axios.post('/login', { email: value, password: value }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } })
    async fetchLogin(store, param) {
      axios.post("https://api.capstone.thisham.my.id/login", {
          email: param.email,
          password: param.password,
        })
        .then((response) => {
          if (response.data.meta.status === 201) {
            console.log("tes token", response);
            store.commit("setToken", response.data.data.token);
            store.commit("setRole", response.data.data.role);
            localStorage.setItem("authenticated", true);
            this.$router.push({ name: "BerandaPage" });
            return response;
          } else {
            store.commit("setInfo", response.data.message);
          }
        })
        .catch((error) => {
          store.commit("setInfo", "Email atau Password Salah");
          store.commit("setError", error);
        });
    },

    // code integrasi get data table antrian
    async getAllQueue(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/queues", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addQueue(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "queues", param, config).then((response) => {
        console.log(response);
      });
    },
    async deleteQueue(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.delete(APILocation + "queues/" + id, config).then((response) => {
        console.log("buat hapus ", response);
      });
      axios
        .get(APILocation + "/queues", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    // code integrasi get data table admin
    async getAllAdmin(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/admins", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addAdmin(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "admins", param, config).then((response) => {
        console.log(response);
      });
    },
    async deleteAdmin(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.delete(APILocation + "admins/" + id, config).then((response) => {
        console.log("buat hapus ", response);
      });
      axios
        .get(APILocation + "/admins", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    // code integrasi get data table doctor
    async getAllDoctors(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/doctors", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addDoctors(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "doctors", param, config).then((response) => {
        console.log(response);
      });
    },
    async deleteDoctors(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.delete(APILocation + "doctors/" + id, config).then((response) => {
        console.log("buat hapus ", response);
      });
      axios
        .get(APILocation + "/doctors", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    // code integrasi get data table nurse
    async getAllNurses(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/nurses", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addNurses(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "nurses", param, config).then((response) => {
        console.log(response);
      });
    },
    async updateNurses(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.update(APILocation + "nurses/" + id, config).then((response) => {
        console.log(response);
      });
    },
    async deleteNurses(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.delete(APILocation + "nurses/" + id, config).then((response) => {
        console.log("buat hapus ", response);
      });
      axios
        .get(APILocation + "/nurses", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    // code integrasi get data table poliklinik
    async getAllPoliklinik(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/polyclinics", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addPoli(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "polyclinics", param, config).then((response) => {
        console.log(response);
      });
    },
    async deletePoli(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios
        .delete(APILocation + "polyclinics/" + id, config)
        .then((response) => {
          console.log('buat hapus ',response);
        });
        axios
        .get(APILocation + "/polyclinics", {
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
    // integrasi rekam medis
    async fetchMedRecordByID(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .post(
          `https://api.capstone.thisham.my.id/medical-records/${param.id}`,
          config
        )
        .then((response) => store.commit("setMedRedByID", response.data.data));
    },

    async fetchCode(store, param) {
      await axios
        .get(`https://api.capstone.thisham.my.id/icd10/${param.code}`)
        .then((response) =>
          store.commit("setPenyakit", response.data.data[0].description)
        );
    },
    // integrasi beranda
    async fetchFeature(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .get(
          `https://api.capstone.thisham.my.id/dashboards/doctor`,
          config
        )
        .then((response) => 
          store.commit("setFeature", response.data.data.total)
        );
    },
    async fetchFeaturePasien(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .get(
          `https://api.capstone.thisham.my.id/dashboards/patient`,
          config
        )
        .then((response) => 
          store.commit("setFeaturePasien", response.data.data.total)
        );
    },
    async fetchFeaturePoli(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .get(
          `https://api.capstone.thisham.my.id/dashboards/polyclinic`,
          config
        )
        .then((response) => 
          store.commit("setFeaturePoli", response.data.data.total)
        );
    },
    async fetchFeatureNurse(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .get(
          `https://api.capstone.thisham.my.id/dashboards/nurse`,
          config
        )
        .then((response) => 
          store.commit("setFeatureNurse", response.data.data.total)
        );
    },
    async fetchFeatureAntrean(store, param) {
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      };
      await axios
        .get(
          `https://api.capstone.thisham.my.id/dashboards/queue`,
          config
        )
        .then((response) => 
          store.commit("setFeatureAntrean", response.data.data.total)
        );
    },
    // code integrasi get data table pasien
    async getAllPatient(store) {
      console.log("store", store);
      console.log("token", store.state.token);

      return axios
        .get(APILocation + "/patients", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
    async addPatient(store, param) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.post(APILocation + "patients", param, config).then((response) => {
        console.log(response);
      });
    },
    async EditPatient(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.put(APILocation + "patients" + id, config).then((response) => {
        console.log(response);
      });
    },
    async deletePatient(store, id) {
      const config = {
        headers: {
          Authorization: "Bearer " + store.state.token,
        },
      };
      axios.delete(APILocation + "patients/" + id, config).then((response) => {
        console.log("buat hapus ", response);
      });
      axios
        .get(APILocation + "/patients", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.state.token,
          },
        })
        .then((response) => {
          console.log("response: ", response);
          return response.data.data;
        })
        .catch((eror) => {
          store.commit("setInfo", eror);
        });
    },
  },
});
