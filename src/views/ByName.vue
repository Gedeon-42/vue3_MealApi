<template>
  <div class="form-container">
    <input
      v-model="keyword"
      type="text"
      placeholder="search"
      @change="searchMeals"
    />
  </div>
  <div class="meal-container">
    <div class="meal-content" v-for="meal of meals" key="meal.">
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
  </div>
  <pre>{{ meals }}</pre>
</template>

<script setup>
import YoutubeButton from "@/components/YoutubeButton.vue";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const keyword = ref("");
const route = useRoute();

const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style></style>
