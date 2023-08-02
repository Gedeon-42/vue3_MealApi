<template>
  <div class="meal-content">
    <router-link
      :to="{ name: 'MealDetail', params: { id: meal.idMeal } }"
      class="link-specific-page"
    >
      <img :src="meal.strMealThumb" />
      <h4>{{ meal.strMeal }}</h4>
    </router-link>

    <p><span>Category:</span>{{ meal.strCategory }}</p>
    <p><span>Location:</span>{{ meal.strArea }}</p>
    <div class="link">
      <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
      <a :href="meal.strSource" target="_blank" class="btn-link-source"
        >original source</a
      >
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "@/components/YoutubeButton.vue";
const { meal } = defineProps({
  meal: Object,
});
</script>
