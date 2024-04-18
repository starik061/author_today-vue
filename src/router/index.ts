import { createRouter, createWebHistory } from "vue-router";
import SupportPage from "@/pages/SupportPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "supportPage",
      component: SupportPage
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("@/pages/SupportPage.vue")
    // }
  ]
});

export default router;
