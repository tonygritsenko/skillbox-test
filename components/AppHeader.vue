<template>
  <header class="app-header">
    <div class="app-header__container">
      <HomeLink type="qtim" />
      <nav class="app-header__nav">
        <div class="app-header__nav-links app-header__nav-links--left">
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
    </div>
  </header>
</template>

<script setup lang="ts">
import HomeLink from "~/ui/HomeLink.vue";
</script>

<style scoped lang="scss">
.app-header {
  &__container,
  &__nav,
  &__nav-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  &__container {
    max-width: 1340px;
    margin: 0 auto;
    padding: 35px 10px;
  }

  &__nav {
    max-width: 455px;
    width: 100%;

    &-links {
      &--left {
        max-width: 154px;
        width: 100%;
      }
    }

    &-button,
    &-link--black {
      border-radius: 999px;
    }

    &-button {
      width: 52px;
      height: 52px;
      border: 2px solid rgba(0, 0, 0, 0.1);
    }

    &-link {
      &--black {
        padding: 16px 32px;

        color: rgba(255, 255, 255, 1);
        background-color: rgba(16, 16, 16, 1);
      }
    }
  }
}
</style>
