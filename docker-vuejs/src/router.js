import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/one")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/two")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/three")
    }
  ]
});
