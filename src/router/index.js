import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/Sidebar.vue";
import Login from "../views/Login.vue";
import Administrator from "../views/Administrator.vue";
import Beranda from "../views/Beranda.vue";
import DaftarAntrean from "../views/DaftarAntrean.vue";
import AntreanPoli from "../views/AntreanPoli.vue";
import DetailAntrean from "../views/DetailAntrean.vue";
import EditAntrean from "../views/EditAntrean.vue";
import Dokter from "../views/Dokter.vue";
import Pasien from "../views/Pasien.vue";
import Perawat from "../views/Perawat.vue";
import Poliklinik from "../views/Poliklinik.vue";
import AddPerawat from "../views/AddPerawat.vue";
import DetailPerawat from "../views/DetailPerawat.vue";
import DetailDok from "../views/DetailDok.vue";
import AddDok from "../views/AddDok.vue";
import EditDok from "../views/EditDok.vue";
import EditPas from "../views/EditPas.vue";
import DetailPas from "../views/DetailPas.vue";
import AddPas from "../views/AddPas.vue";
import AddPoli from "../views/AddPoli.vue";
import AddRemdis from "../views/AddRemdis";
import AddResep from "../views/AddResep.vue";
import EditRes from "../views/EditRes.vue";
import EditPoli from "../views/EditPoli.vue";
import AddAdmin from "../views/AddAdmin.vue";
import EditAdmin from "../views/EditAdmin.vue";
import ProfilAdmin from "../views/ProfilAdmin.vue";
import DetailAdmin from "../views/DetailAdmin.vue";
import DetailRekam from "../views/DetailRekam.vue";
import UbahPassword from "../views/UbahPassword.vue";
import AddAntrean from "../views/AddAntrean.vue";
import EditPerawat from "../views/EditPerawat.vue";

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
        name: "Beranda",
        component: Beranda,
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
        path: "/Pasien",
        name: "Pasien",
        component: Pasien,
      },
      {
        path: "/DetailPas",
        name: " Detail Pasien",
        component: DetailPas,
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
        path: "/DetailPas",
        name: "DetailPas",
        component: DetailPas,
      },
      {
        path: "/AddDok",
        name: "AddDok",
        component: AddDok,
      },
      {
        path: "/AddPas",
        name: "AddPas",
        component: AddPas,
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
        path: "/EditPas",
        name: "EditPas",
        component: EditPas,
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
  base: "/",
  routes,
});

export default router;
