<template>
  <a :href="href" target="_blank" class="btn-link-youtube"><slot></slot></a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
