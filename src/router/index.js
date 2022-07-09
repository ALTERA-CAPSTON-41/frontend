import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/Sidebar.vue";
import Login from "../views/Login.vue";
import Administrator from "../views/Administrator.vue";
import Beranda from "../views/Beranda.vue";
import DaftarAntrean from "../views/DaftarAntrean.vue";
import AddAntrean from "../views/AddAntrean.vue";
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
import DetailAdmin from "../views/DetailAdmin.vue";

Vue.use(VueRouter);
const routes = [
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
        path: "/EditAntrean",
        name: "Edit Antrean",
        component: EditAntrean,
      },
      {
        path: "/AddAntrean",
        name: "Tambah Antrean",
        component: AddAntrean,
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
    ],
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    children: [],
  },
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
