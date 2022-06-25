import VueRouter from "vue-router";
// Import Component2 Kalian

import Dokter from "@/views/Dokter.vue";
import DetailDok from "@/views/DetailDok.vue";
import AddDok from "@/views/AddDok.vue";
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
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});
export default router;
