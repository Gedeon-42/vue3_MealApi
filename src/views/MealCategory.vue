<template>
  <h3 class="text-center mt-20">View all categories</h3>

  <div class="category-container">
    <div class="category-content" v-for="category of mealscategory">
      <router-link class="category-link" to="/">
        <img :src="category.strCategoryThumb" alt="" />
        <div class="categ-desc">
          <p>View Details</p>
        </div>
        <h3>{{ category.strCategory }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import { onMounted, ref } from "vue";

const mealscategory = ref([]);
function allmeals() {
  axiosClient.get("/categories.php").then(({ data }) => {
    console.log(data);
    mealscategory.value = data.categories;
  });
}
onMounted(() => {
  allmeals();
});
</script>

<style></style>
