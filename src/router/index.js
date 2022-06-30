import VueRouter from "vue-router";
// Import Component2 Kalian

import Pasien from "@/views/Pasien.vue";
import DetailPas from "@/views/DetailPas.vue";
import AddPas from "@/views/AddPas.vue";
import EditPas from "@/views/EditPas.vue";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Pasien",
    component: Pasien,
  },
  {
    path: "/DetailPas",
    name: "Detail Pasien",
    component: DetailPas,
  },
  {
    path: "/AddPas",
    name: "Tambah Pasien",
    component: AddPas,
  },
  {
    path: "/EditPas",
    name: "Edit Pasien",
    component: EditPas,
  },
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});
export default router;
