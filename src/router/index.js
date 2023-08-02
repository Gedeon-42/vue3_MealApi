import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ByLetter from "../views/ByLetter.vue";
import ByIngredient from "../views/IngredientItem.vue";
import MealCategory from "../views/MealCategory.vue";
import ByName from "../views/ByName.vue";
import MealDetail from "../views/MealDetail";
import Ingredient from "../views/Ingredient";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/meal/:id",
    name: "MealDetail",
    component: MealDetail,
  },

  {
    path: "/byletter/:letter?",
    name: "byLetter",
    component: ByLetter,
  },
  {
    path: "/ingredient",
    name: "ingredient",
    component: Ingredient,
  },
  {
    path: "/Ingredient/:ingredient?",
    name: "byIngredient",
    component: ByIngredient,
  },
  {
    path: "/category",
    name: "category",
    component: MealCategory,
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
