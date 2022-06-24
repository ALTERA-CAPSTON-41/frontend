import Vue from "vue";
import VueRouter from "vue-router";
import Sidebar from "../components/SideBar.vue";
import Poliklinik from "../views/Poliklinik.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Sidebar,
    children:[
    {
        path: "/Poliklinik",
        name: "Poliklinik",
        component: Poliklinik,
    },
    ]
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