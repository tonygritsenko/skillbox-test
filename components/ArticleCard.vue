<template>
  <div class="article">
    <div class="article__wrapper">
      <img class="article__image" :src="article.image" alt="Article image" />

      <p class="article__text">
        {{ article.preview }}
      </p>
      
      <NuxtLink :to="`/articles/${article.id}`" class="article__link"
        >Read more</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TArticle } from "~/types";

const props = defineProps<{
  article: TArticle;
}>();
</script>

<style scoped lang="scss">
@import "../assets/styles/vars";

.article {
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: 280px;
  min-height: 378px;

  padding-bottom: 4px;

  &__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in-out;
  }

  &:hover .article__wrapper {
    transform: translateY(-30px);
  }

  &__link {
    position: absolute;

    opacity: 0;
    visibility: hidden;

    cursor: pointer;

    transition: opacity 0.2s ease-in-out;

    &::after {
      position: absolute;
      content: "";
     
      bottom: 0;
      left: 0;

      width: 280px;
      height: 400px;
    }
  }

  &:hover .article__link {
    padding-top: 12px;

    opacity: 1;
    visibility: visible;
  }

  &__image {
    display: flex;
    margin-bottom: 24px;

    width: 100%;
    height: 280px;

    object-fit: cover;
    background-color: $violet-color;
  }

  &__text,
  &__link {
    line-height: 120%;
  }

  &__link {
    color: $violet-color;
  }
}
</style>
