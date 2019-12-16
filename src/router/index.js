import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Startscreen from "../views/Startscreen";
import Highscore from "../views/Highscore";
import Spielstart from "../views/Spielstart";
import Freundesuchen from "../views/Freundesuchen";
import Freundeliste from "../views/Freundeliste";
import Schwierigkeitsgrad from "../views/Schwierigkeitsgrad";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Startscreen",
    name: "Startscreen",
    component: Startscreen
  },
  {
    path: "/Highscore",
    name: "Highscore",
    component: Highscore
  },
  {
    path: "/Spielstart",
    name: "Spielstart",
    component: Spielstart
  },
  {
    path: "/Freundesuchen",
    name: "Freundesuchen",
    component: Freundesuchen
  },
  {
    path: "/Freundeliste",
    name: "Freundeliste",
    component: Freundeliste
  },
  {
    path: "/Schwierigkeitsgrad",
    name: "Schwierigkeitsgrad",
    component: Schwierigkeitsgrad
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
