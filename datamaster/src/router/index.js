import VueRouter from "vue-router";
// Import Component2 Kalian

import PoliPage from "@/views/PoliPage.vue";
import DocPage from "@/views/DocPage.vue";
import NursePage from "@/views/NursePage.vue";
import AdminPage from "@/views/AdminPage.vue";
import Vue from "vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Poliklinik Page",
    component: PoliPage,
  },
  {
    path: "/DocPage",
    name: "Doctor Page",
    component: DocPage,
  },
  {
    path: "/NursePage",
    name: "Nurse Page",
    component: NursePage,
  },
  {
    path: "/AdminPage",
    name: "Admin Page",
    component: AdminPage,
  },
];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});
export default router;
