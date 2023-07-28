import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ByLetter from "../views/ByLetter.vue";
import ByIngredient from "../views/ByIngredient.vue";
import Meal from "../views/Meal.vue";
import ByName from "../views/ByName.vue";
import MealList from "../views/MealList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/byletter/:letter?",
    name: "byLetter",
    component: ByLetter,
  },
  {
    path: "/byIngredient/:ingredient?",
    name: "byIngredient",
    component: ByIngredient,
  },
  {
    path: "/meal",
    name: "meal",
    component: Meal,
  },
  {
    path: "/byname/:name?",
    name: "byname",
    component: ByName,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
