import VueRouter from "vue-router";


Vue.use(VueRouter);
const routes = [
  {
    path: "/",

];
const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
