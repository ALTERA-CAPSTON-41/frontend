import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/Sidebar.vue";
import Login from "../views/Login.vue";
import Administrator from "../views/Administrator.vue";
import Beranda from "../views/Beranda.vue";
import DaftarAntrean from "../views/DaftarAntrean.vue";
import Dokter from "../views/Dokter.vue";
import Pasien from "../views/Pasien.vue";
import Perawat from "../views/Perawat.vue";
import Poliklinik from "../views/Poliklinik.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Sidebar,
    children:[{
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
        path: "/Pasien",
        name: "Pasien",
        component: Pasien,
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
    ]
},
{
    path: "/Login",
    name: "Login",
    component: Login,
    children: [
    ]
},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});



export default router;