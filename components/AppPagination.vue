<template>
  <div class="pagination">
    <button
      class="pagination__control"
      @click="back"
      :class="firstIndex > 0 && 'pagination__control--active'"
    ><</button>
    <button
      v-for="x in 5"
      class="pagination__button"
      :class="firstIndex + x === modelValue && 'active'"
      @click="updateIndex(x)"
    >
      {{ firstIndex + x }}
    </button>
    <button class="pagination__control pagination__control--active" @click="next">></button>

  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '~/store'
 
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
function back() {
  if (firstIndex.value === 0) return
  firstIndex.value--
  emit("update:modelValue", props.modelValue - 1);
}
function next() {
  const articlesCount = useArticleStore().articles.length
  if (firstIndex.value === Math.ceil(articlesCount / 8)) return
  firstIndex.value++
  emit("update:modelValue", props.modelValue + 1);
}
</script>

<style scoped lang="scss">
.active {
  background: green;
}

.pagination__control {
  display: none;

  &--active {
    display: block;
  }
}

</style>
