import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/SideBar.vue";
import Poliklinik from "../views/Poliklinik.vue";
import DetailPoliklinik from "../views/DetailPoliklinik.vue";
import TambahPoliklinik from "../views/TambahPoliklinik.vue";
import EditPoliklinik from "../views/EditPoliklinik.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Sidebar,
    children: [
      {
        path: "/Poliklinik",
        name: "Poliklinik",
        component: Poliklinik,
      },
      {
        path: "/DetailPoliklinik",
        name: "Detail Poliklinik",
        component: DetailPoliklinik,
      },
      {
        path: "/TambahPoliklinik",
        name: "Tambah Poliklinik",
        component: TambahPoliklinik,
      },
      {
        path: "/EditPoliklinik",
        name: "Edit Poliklinik",
        component: EditPoliklinik,
      },
    ],
  },
  // {
  //     path: "/Login",
  //     name: "Login",
  //     component: Login,
  //     children: [
  //     ]
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
