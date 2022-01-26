import { createWebHistory, createRouter } from "vue-router";

import Index from "@/pages/Index.vue";
import Layout from "@/layout/Layout.vue";
import About from "@/pages/About.vue";
import DayilyLaw from "@/pages/DayilyLaw.vue";
import HotPage from "@/pages/HotPage.vue";
import NewPage from "@/pages/NewPage.vue";
import Recommdation from "@/pages/Recommdation.vue";
import Login from "@/pages/Login.vue";
import Register from "@/pages/Register.vue";
import PostDetail from "@/pages/PostDetail.vue";
import Profile from "@/pages/Profile.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import WritePost from "@/pages/WritePost.vue";

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
      {
        path: "/write",
        component: WritePost,
        name: "write-post",
        meta: {
          isAuthenticated: true,
        },
      },
      {
        path: "/post/:postid",
        component: PostDetail,
        name: "postdetail",
      },
      {
        path: "/user/:userid",
        component: Profile,
        name: "profile",
        meta: {
          isAuthenticated: true,
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/register",
    component: Register,
    name: "register",
  },
  { path: "/:catchAll(.*)", component: PageNotFound },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = to.meta.isAuthenticated;
  const accessToken = localStorage.getItem("accessToken");
  console.log("to---", to);
  if (to.name != "login" && isAuthenticated && !accessToken) {
    next({ name: "login" });
  } else next();
});
