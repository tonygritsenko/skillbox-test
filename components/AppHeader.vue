<template>
  <header class="app-header">
    <HomeLink type="qtim" />
    <nav class="app-header__nav">
      <div class="app-header__nav-links">
        <a href="#" class="app-header__nav-link">Works</a>
        <a href="#" class="app-header__nav-link">About</a>
      </div>
      <div class="app-header__nav-links">
        <button class="app-header__nav-button">
          <img src="~/assets/images/en.svg" alt="English" />
        </button>
        <a href="#" class="app-header__nav-link app-header__nav-link--black">
          Let&rsquo;s work
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import HomeLink from "~/ui/HomeLink.vue";
</script>

<style scoped  lang="scss">
.app-header {
  display: flex;
}

</style>
