import Vue from "vue";
import VueRouter from "vue-router";
import JobMatches from "../views/JobMatches.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "JobMatches",
    component: JobMatches
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import("../views/Resume.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => 
      import("../views/Profile.vue")
  },
  {
    path: "/universities",
    name: "Universities",
    component: () => 
      import("../views/Universities.vue")
  },
  {
    path: "/employers",
    name: "Employers",
    component: () => import("../views/Employers.vue"),
    children: [
      {
      path: "/job-post",
      component: () => 
        import("../components/NewJob.vue")
    },
    {
      path: "/candidates",
      component: () => 
        import("../components/Candidates.vue")
    }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
