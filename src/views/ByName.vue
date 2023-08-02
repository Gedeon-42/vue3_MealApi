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
    <MealItem v-for="meal of meals" key="" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from "@/components/MealItem.vue";
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
