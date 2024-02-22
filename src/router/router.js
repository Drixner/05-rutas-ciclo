import { createRouter, createWebHashHistory } from "vue-router";

import ListPage from "@/modules/pokemon/pages/ListPage";
import PokemonPage from "@/modules/pokemon/pages/PokemonPage";

const routes = [
  { path: "/", component: ListPage },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: AboutPage*/ "@/modules/pokemon/pages/AboutPage.vue"
      ),
  },
  { path: "/id", component: PokemonPage },
  //   pagina 404
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/modules/shared/pages/NoPageFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
