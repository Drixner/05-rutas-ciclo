import { preventExtensions } from "core-js/core/object";
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
    props: (route) => {
      const id = Num(route.params.id);
      return isNaN(id) ? { id: 1 } : { id };
    },
  },
  //   pagina 404

  {
    path: "/:pathMatch(.*)*",
  component: () =>
      import(
        /*webpackChunkName: "NoPageFound"*/ "@/modules/shared/pages/NoPageFound"
      )
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
