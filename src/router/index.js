import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterUser.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/products/Index.vue"),
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: () => import("../views/products/Edit.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import("../views/products/Create.vue"),
    },
    {
      path: "/graphics",
      name: "graphics",
      component: () => import("../views/products/Graphic.vue"),
    },
    {
      path: "/reports",
      name: "reports",
      component: () => import("../views/products/Reports.vue"),
    },
    {
      path: "/users",
      name: "users",
      component: () => import("../views/users/Index.vue"),
    },
    {
      path: "/editUser/:id",
      name: "editUser",
      component: () => import("../views/users/EditUser.vue"),
    },
    {
      path: "/create-user",
      name: "create-user",
      component: () => import("../views/users/CreateUser.vue"),
    },
    {
      path: "/email",
      name: "email",
      component: () => import("../views/email/Email.vue"),
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    next("/login");
  } else {
    next();
  }
});

export default router;
