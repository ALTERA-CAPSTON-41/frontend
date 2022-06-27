import VueRouter from "vue-router";
// Import Component2 Kalian

import Dokter from "@/views/Dokter.vue";
import DetailDok from "@/views/DetailDok.vue";
import AddDok from "@/views/AddDok.vue";
import EditDok from "@/views/EditDok.vue";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Doktor",
    component: Dokter,
  },
  {
    path: "/DetailDok",
    name: "Detail Page",
    component: DetailDok,
  },
  {
    path: "/AddDok",
    name: "Tambah Page",
    component: AddDok,
  },
  {
    path: "/EditDok",
    name: "Edit Page",
    component: EditDok,
  },
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});
export default router;
