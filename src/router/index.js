import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/Sidebar.vue";
import Login from "../views/Login.vue";
import Administrator from "../views/Administrator/Administrator.vue";
import BerandaPage from "../views/BerandaPage.vue";
import DaftarAntrean from "../views/Antrean/DaftarAntrean.vue";
import AntreanPoli from "../views/Antrean/AntreanPoli.vue";
import DetailAntrean from "../views/Antrean/DetailAntrean.vue";
import EditAntrean from "../views/Antrean/EditAntrean.vue";
import Dokter from "../views/Dokter/Dokter.vue";
import Perawat from "../views/Perawat/Perawat.vue";
import Poliklinik from "../views/Poliklinik/Poliklinik.vue";
import AddPerawat from "../views/Perawat/AddPerawat.vue";
import DetailPerawat from "../views/Perawat/DetailPerawat.vue";
import DetailDok from "../views/Dokter/DetailDok.vue";
import AddDok from "../views/Dokter/AddDok.vue";
import EditDok from "../views/Dokter/EditDok.vue";
import AddPoli from "../views/Poliklinik/AddPoli.vue";
import AddRemdis from "../views/AddRemdis";
import AddResep from "../views/AddResep.vue";
import EditRes from "../views/EditRes.vue";
import EditPoli from "../views/Poliklinik/EditPoli.vue";
import AddAdmin from "../views/Administrator/AddAdmin.vue";
import EditAdmin from "../views/Administrator/EditAdmin.vue";
import ProfilAdmin from "../views/ProfilAdmin.vue";
import DetailAdmin from "../views/Administrator/DetailAdmin.vue";
import DetailRekam from "../views/DetailRekam.vue";
import UbahPassword from "../views/UbahPassword.vue";
import AddAntrean from "../views/Antrean/AddAntrean.vue";
import EditPerawat from "../views/Perawat/EditPerawat.vue";
import DetailPoli from "../views/Poliklinik/DetailPoli.vue";
import Patient from "../views/Patient/Patient.vue";
import AddPat from "../views/Patient/AddPat.vue";
import EditPat from "../views/Patient/EditPat.vue";
import DetailPat from "../views/Patient/DetailPat.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Sidebar,
    children: [
      {
        path: "/",
        name: "BerandaPage",
        component: BerandaPage,
      },
      {
        path: "/DaftarAntrean",
        name: "Daftar Antrean",
        component: DaftarAntrean,
      },
      {
        path: "/DetailAntrean",
        name: "Detail Antrean",
        component: DetailAntrean,
      },
      {
        path: "/DetailRekam",
        name: "Detail Rekam",
        component: DetailRekam,
      },
      {
        path: "/EditAntrean",
        name: "Edit Antrean",
        component: EditAntrean,
      },
      {
        path: "/AddAntrean",
        name: "Add Antrean",
        component: AddAntrean,
      },
      {
        path: "/AddAntreanPoli",
        name: "Antrean Poli",
        component: AntreanPoli,
      },

      {
        path: "/Patient",
        name: "Patient",
        component: Patient,
      },

      {
        path: "/DetailAdmin",
        name: " Detail Admin",
        component: DetailAdmin,
      },
      {
        path: "/Poliklinik",
        name: "Poliklinik",
        component: Poliklinik,
      },
      {
        path: "/Dokter",
        name: "Dokter",
        component: Dokter,
      },
      {
        path: "/Perawat",
        name: "Perawat",
        component: Perawat,
      },
      {
        path: "/Administrator",
        name: "Administrator",
        component: Administrator,
      },
      {
        path: "/AddPerawat",
        name: "AddPerawat",
        component: AddPerawat,
      },
      {
        path: "/AddAdmin",
        name: "AddAdmin",
        component: AddAdmin,
      },
      {
        path: "/AddPoli",
        name: "AddPoli",
        component: AddPoli,
      },
      {
        path: "/DetailPoli",
        name: "DetailPoli",
        component: DetailPoli,
      },
      {
        path: "/EditPoli",
        name: "EditPoli",
        component: EditPoli,
      },
      {
        path: "/EditAdmin",
        name: "EditAdmin",
        component: EditAdmin,
      },
      {
        path: "/EditPerawat",
        name: "EditPerawat",
        component: EditPerawat,
      },
      {
        path: "/ProfileAdministrator",
        name: "ProfilAdmin",
        component: ProfilAdmin,
      },
      {
        path: "/DetailPerawat",
        name: "DetailPerawat",
        component: DetailPerawat,
      },
      {
        path: "/DetailDok",
        name: "DetailDok",
        component: DetailDok,
      },

      {
        path: "/AddDok",
        name: "AddDok",
        component: AddDok,
      },

      {
        path: "/AddPat",
        name: "AddPat",
        component: AddPat,
      },
      {
        path: "/EditPat",
        name: "EditPat",
        component: EditPat,
      },
      {
        path: "/DetailPat",
        name: "DetailPat",
        component: DetailPat,
      },
      {
        path: "/AddRemdis",
        name: "AddRemdis",
        component: AddRemdis,
      },
      {
        path: "/AddResep",
        name: "AddResep",
        component: AddResep,
      },
      {
        path: "/EditDok",
        name: "EditDok",
        component: EditDok,
      },
      {
        path: "/EditRes",
        name: "EditRes",
        component: EditRes,
      },
      {
        path: "/UbahPassword",
        name: "UbahPassword",
        component: UbahPassword,
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  if (to.name === "Login" && isAuthenticated) next({ name: "BerandaPage" });
  else next();
});

export default router;
