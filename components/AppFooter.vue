<template>
  <footer class="app-footer">
    <div class="container">
      <div class="app-footer__wrapper">
        <p class="app-footer__text app-footer__text--top">
          Is&nbsp;there a&nbsp;project?
        </p>
        <div class="app-footer__content">
          <div class="app-footer__left">
            <span class="app-footer__title app-footer__title-top"
              >Let&rsquo;s work</span
            >
            <span class="app-footer__title app-footer__title-bottom"
              >together</span
            >
          </div>
          <div class="app-footer__right">
            <div class="app-footer__right-wrapper">
              <p class="app-footer__text app-footer__right-text">
                For all questions
              </p>
              <div class="app-footer__right-links">
                <a
                  href="tel:+79202780068"
                  class="app-footer__text app-footer__right-link"
                  >+7 (920) 278&mdash;00&mdash;68</a
                >
                <a
                  href="mailto:qtim@agency.com"
                  class="app-footer__text app-footer__right-link"
                  >qtim@agency.com</a
                >
              </div>
            </div>
            <div class="app-footer__right-wrapper">
              <p class="app-footer__text app-footer__right-text">
                Office in&nbsp;Russia
              </p>
              <div class="app-footer__right-links">
                <p class="app-footer__text app-footer__text--upper">
                  139 Ruben Station Lake Drew, NM&nbsp;52678
                </p>
                <a href="#" class="app-footer__text app-footer__right-link"
                  ><img src="~/assets/images/location.svg" alt="Location"
                /></a>
              </div>
            </div>
            <div class="app-footer__right-wrapper">
              <p class="app-footer__text app-footer__right-text">
                Office in&nbsp;Dubai
              </p>
              <div class="app-footer__right-links">
                <p class="app-footer__text app-footer__text--upper">
                  139 Ruben Station Lake Drew, NM&nbsp;52678
                </p>
                <a href="#" class="app-footer__text app-footer__right-link"
                  ><img src="~/assets/images/location.svg" alt="Location"
                /></a>
              </div>
            </div>
          </div>
        </div>
        <div class="app-footer__bottom">
          <div class="app-footer__bottom-links">
            <a href="#" class="app-footer__bottom-link">Facebook</a>
            <a href="#" class="app-footer__bottom-link">Instagram</a>
            <a href="#" class="app-footer__bottom-link">Telegram</a>
          </div>
          <NuxtLink
            class="app-footer__bottom-link app-footer__bottom-link--black"
            >Go</NuxtLink
          >
          <div class="app-footer__bottom-links">
            <a href="#" class="app-footer__bottom-link">Behance</a>
            <a href="#" class="app-footer__bottom-link">Linkedn</a>
            <a href="#" class="app-footer__bottom-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "../assets/styles/vars";

.app-footer {
  position: relative;
  padding: 140px 0 30px;
  background-color: $violet-color;
  overflow: hidden;

  &__wrapper {
    display: flex;
    flex-direction: column;

    min-height: 730px;
  }

  &__text {
    font-size: 16px;
    line-height: 120%;

    &--top {
      margin-bottom: 56px;
    }

    &--upper {
      margin-bottom: 4px;
      text-transform: uppercase;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    margin-bottom: auto;
    gap: 24px;
  }

  &__left {
    display: flex;
    flex-direction: column;

    max-width: 464px;
  }

  &__title {
    position: relative;
    font-size: 112px;
    line-height: 100%;
    width: fit-content;

    &-top {
      &::after {
        position: absolute;
        content: "";

        right: 0;
        bottom: 0;

        width: 426px;
        height: 1px;

        background-color: #101010;
      }
    }

    &-bottom {
      &::before {
        position: absolute;
        content: "";

        left: 0;
        bottom: 0;
        width: 77px;

        height: 1px;
        background-color: #101010;
      }

      &::after {
        position: absolute;
        content: "";

        right: 0;
        bottom: 0;
        width: 223px;

        height: 1px;
        background-color: #101010;
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;

    max-width: 384px;
    width: 100%;

    gap: 36px;

    &-wrapper {
      display: flex;
      flex-direction: column;

      max-width: 152px;

      gap: 12px;
    }

    &-links {
      display: flex;
      flex-direction: column;

      gap: 4px;
    }
  }

  &__bottom,
  &__bottom-links {
    display: flex;
    gap: 32px;
  }

  &__bottom {
   
    justify-content: space-between;

    &-link {
      padding-bottom: 9px;

      text-decoration: underline;
      text-decoration-color: #101010;
      text-decoration-thickness: 1px;
      text-underline-offset: 9px;

      &--black {
        position: absolute;

        display: flex;
        justify-content: center;
        align-items: center;

        padding-bottom: 89px;

        width: 358px;
        height: 358px;

        left: calc(50% - 358px / 2);
        bottom: -179px;

        font-size: 32px;
        color: #ffffff;
        text-decoration: none;

        background-color: #101010;
        border-radius: 999px;
      }
    }
  }
}
</style>
