<template>
  <div class="article">
    <img :src="article.image" alt="Article image" />
    <p class="article__text">
      {{ article.preview }}
    </p>
    <NuxtLink :to="`/articles/${article.id}`" class="article__link">Read more</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { type TArticle } from "~/types";

const props = defineProps<{
  article: TArticle;
}>();
</script>

<style scoped lang="scss">
.article {
  &__link {
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
  }

  &:hover .article__link {    
      opacity: 1;
      visibility: visible;      
  }
}
</style>
