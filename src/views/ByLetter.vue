<template>
  <p>search by letter</p>
  <pre>{{ news }}</pre>
</template>

<script setup>
import store from "../store";
import { computed } from "vue";

const news = computed(() => store.state.news);
</script>

<style></style>
