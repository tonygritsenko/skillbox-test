<template>
  <main>
    <section class="articles-page">
      <div class="container">
        <h2 class="articles-page__title">Articles</h2>
        <div class="articles-page__wrapper">
          <ArticleCard
            v-for="article in currentArticles"
            :key="article.id"
            :article="article"
          />
        </div>
        <AppPagination v-model="paginationIndex" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useArticleStore } from "~/store";
import ArticleCard from "~/components/ArticleCard.vue";
import type { TArticle } from "~/types";
import AppPagination from "~/components/AppPagination.vue";

const store = useArticleStore();

const paginationIndex = ref<number>(1);

const currentArticles = computed<TArticle[]>(() => {
  const start = (paginationIndex.value - 1) * 8;

  return store.articles.slice(start, start + 8);
});
</script>

<style scoped lang="scss">
.articles-page {
  padding: 120px 0 140px;

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    margin-bottom: 50px;
    gap: 32px;
  }

  &__title {
    margin-bottom: 59px;
    font-weight: 400;
    font-size: 84px;
    line-height: 100%;
  }
}
</style>
