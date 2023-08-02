<template>
  <div class="ingredient-wrapper">
    <div class="ing-form">
      <form action="" method="get">
        <input type="text" placeholder="search" />
        <button type="submit">search</button>
      </form>
    </div>
    <div v-for="ingred of ingredients" class="ingredient-container">
      <div class="ingredient-content">
        <router-link
          :to="{
            name: 'byIngredient',
            params: { ingredient: ingred.idIngredient },
          }"
          ><h3>{{ ingred.strIngredient }}</h3>
          <p>{{ ingred.strDescription }}</p></router-link
        >
      </div>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const ingredients = ref([]);
const route = useRoute("");
onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    ingredients.value = data.meals;
    console.log(data);
  });
});
</script>

<style></style>
