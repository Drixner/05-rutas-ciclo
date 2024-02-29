import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "listPage"*/ "@/modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    name: "Pokemon-id",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
      ),
  },
  //   pagina 404
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"
      ),
  },
];
// esto es otro comentario

// esta es una forma de hacerlo

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
