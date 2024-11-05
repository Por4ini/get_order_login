import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/views/AuthPage.vue";
import Login from "@/components/LoginСomponent.vue";

const routes = [
  {
    component: AuthPage,
    children: [
      {
        path: "/",
        component: Login,
      }
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

export default router;