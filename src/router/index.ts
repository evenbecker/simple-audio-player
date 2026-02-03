import { createRouter, createWebHistory } from "vue-router";
import Station from "../components/Station.vue";
import NotFound from "../components/NotFound.vue";
import Blog from "../components/Blog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Station,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/:catchAll(.*)",
      name: "nofound",
      component: NotFound,
    },
  ],
});

export default router;
