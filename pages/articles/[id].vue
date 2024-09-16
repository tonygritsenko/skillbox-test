<template>
  <section class="article-page">
    <div class="container">
      <h2 class="article-page__title">
        {{ article?.preview }}
      </h2>
      <img
        class="article-page__image"
        :src="article?.image"
        alt="Article image"
      />

      <span class="article-page__description">About</span>

      <p class="article-page__text">
        {{ article?.description }}
      </p>
    </div>
  </section>
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

<style scoped lang="scss">
.article-page {
  padding: 120px 0 80px;

  &__title {
    margin-bottom: 73px;

    font-weight: 400;
    font-size: 84px;
    line-height: 100%;
  }

  &__image {
    margin-bottom: 80px;

    width: 100%;
    height: 700px;

    object-fit: cover;
  }

  &__description {
    display: block;
    margin-bottom: 32px;
    font-size: 16px;
  }

  &__text {
    font-size: 36px;
    line-height: 124%;
  }
}
</style>
