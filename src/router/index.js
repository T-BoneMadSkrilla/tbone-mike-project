import Vue from "vue";
import VueRouter from "vue-router";
import JobMatches from "../views/JobMatches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "jobMatches",
    component: JobMatches
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import("../views/Resume.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
