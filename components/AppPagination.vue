<template>
  <div class="pagination">
    <button
      class="pagination__control pagination__control--previous"
      @click="back"
      :class="firstIndex > 0 && 'pagination__control--active'"
    >
      <img src="~/assets/images/arrow.svg" alt="<" />
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
      <img src="~/assets/images/arrow.svg" alt=">" />
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
  display: flex;
  gap: 8px;

  &__control {
    position: absolute;

    opacity: 0;
    visibility: hidden;
    
    transition: opacity 0.2s ease-in-out;

    &--active {
      position: static;
      
      opacity: 1;
      visibility: visible;
    }
  }

  &__button,
  &__control {
    width: 44px;
    height: 44px;

    border-radius: 12px;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #e8e8e8;
    }
  }

  &__button {
    font-size: 16px;
    background-color: #f3f3f3;

    &--active {
      background-color: #101010;
      color: #ffffff;

      &:hover {
        background-color: #101010;
      }
    }
  }

  &__control {
    border: 1px solid #e8e8e8;

    &--previous {
      transform: rotate(180deg);
    }
  }
}
</style>
