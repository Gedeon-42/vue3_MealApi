<template>
  <div class="meal-detail-container">
    <div class="meal-detail-content">
      <h1 class="meal-detail-title">{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <div class="meal-detail-desc">
        <p>{{ meal.strInstructions }}</p>
      </div>
      <div class="ingredient-container">
        <h2>Ingredient</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="link">
        <YoutubeButton :href="meal.strYoutube"> Go to youtube</YoutubeButton>
        <a :href="meal.strSource" target="_blank" class="btn-link-source"
          >original source</a
        >
      </div>
    </div>
  </div>

  <pre>{{ meal }}</pre>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import YoutubeButton from "@/components/YoutubeButton.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meal = ref({});
axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
  meal.value = data.meals[0] || {};
  console.log(data);
});
</script>
