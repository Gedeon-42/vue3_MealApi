<template>
  <div>
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      key="letter"
      >{{ letter }}</router-link
    >
    <div v-for="i of ingredient">{{ i.idIngredient }}</div>
    <pre>{{ ingredient }}</pre>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "@/axiosClient";
//const meals = computed(() => store.state.meals);

const letters = "ABCDEFGHIJKLMNOPKLSTUVWYZ".split("");
const ingredient = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredient.value = response.data;
});
</script>
<style></style>
