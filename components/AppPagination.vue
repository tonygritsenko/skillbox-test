<template>
  <div class="pagination">
    <button
      class="pagination__control"
      @click="back"
      :class="firstIndex > 0 && 'pagination__control--active'"
    >
      <
    </button>

    <button
      v-for="page in 5"
      :key="page"
      class="pagination__button"
      :class="firstIndex + page === modelValue && 'pagination__button--active'"
      @click="updateIndex(page)"
    >
      {{ firstIndex + page }}
    </button>

    <button
      class="pagination__control"
      @click="next"
      :class="firstIndex < showPages() && 'pagination__control--active'"
    >
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from "~/store";

const props = defineProps<{
  modelValue: number;
}>();

const firstIndex = ref<number>(0);

const emit = defineEmits<{
  (e: "update:modelValue", payload: number): void;
}>();

function updateIndex(numberOrder: number) {
  emit("update:modelValue", numberOrder + firstIndex.value);
}

function totalPages() {
  const articlesCount = useArticleStore().articles.length;

  return Math.ceil(articlesCount / 8);
}

function back() {
  if (firstIndex.value === 0) return;
  firstIndex.value--;
  emit("update:modelValue", props.modelValue - 1);
}

function next() {
  if (firstIndex.value === totalPages()) return;

  firstIndex.value++;

  emit("update:modelValue", props.modelValue + 1);
}

function showPages() {
  return Math.ceil(totalPages() / 2);
}
</script>

<style scoped lang="scss">
.pagination {
  &__control {
    display: none;

    &--active {
      display: block;
    }
  }

  &__button {
    &--active {
      background: green;
    }
  }
}
</style>
