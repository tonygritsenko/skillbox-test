<template>
  <div>
    <div>
      {{ article?.preview }}
    </div>
    <img :src="article?.image" alt="Article image">
    <div>
      {{ article?.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TArticle } from "~/types";

const route = useRoute();

const { data: article } = await useAsyncData(async () => {
  const id = route.params.id;
  const response = await $fetch(
    `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
  );
  return response as TArticle;
});
</script>

<style scoped></style>
