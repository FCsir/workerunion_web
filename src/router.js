import { createWebHashHistory, createRouter } from "vue-router";

import Index from "@/pages/Index.vue";
import Layout from "@/layout/Layout.vue";
import About from "@/pages/About.vue";
import DayilyLaw from "@/pages/DayilyLaw.vue";
import HotPage from "@/pages/HotPage.vue";
import NewPage from "@/pages/NewPage.vue";
import Recommdation from "@/pages/Recommdation.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    name: "index",
    children: [
      {
        path: "",
        component: Index,
      },
      {
        path: "/about",
        component: About,
        name: "about",
      },
      {
        path: "/dailylaw",
        component: DayilyLaw,
        name: "dailylaw",
      },
      {
        path: "/hot",
        component: HotPage,
        name: "hot",
      },
      {
        path: "/new",
        component: NewPage,
        name: "new",
      },
      {
        path: "/recommendation",
        component: Recommdation,
        name: "recommendation",
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
