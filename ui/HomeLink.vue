<template>
  <NuxtLink class="app-header__logo-link" v-if="type === 'qtim'" to="#">
    <img src="~/assets/images/qtim.svg" alt="Logo" />
  </NuxtLink>
  <NuxtLink class="app-header__logo-link" v-if="type === 'payot'" to="#">
    <img src="~/assets/images/payot.svg" alt="Logo" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  type: "qtim" | "payot";
}>();
</script>

<style scoped></style>
