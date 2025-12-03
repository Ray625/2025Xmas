<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__container">
        <div class="footer__wrapper">
          <div class="footer__content">
            <div class="footer__content__tag tag-center" :class="{ en: isEn }">
              {{ t('footer.host') }}
            </div>
            <img :src="hostImg" alt="logo" class="log log-taipie" />
          </div>
          <div class="footer__content">
            <div class="footer__content__tag tag-center" :class="{ en: isEn }">
              {{ t('footer.marketing') }}
            </div>
            <img :src="marketingImg" alt="logo" class="log log-click" />
          </div>
          <div class="footer__content">
            <div class="footer__content__tag tag-center" :class="{ en: isEn }">
              {{ t('footer.cooperate') }}
            </div>
            <img :src="cooperateImg" alt="logo" class="log log-group" />
          </div>
        </div>
        <div class="footer__text">
          <div class="footer__ad">{{ t('footer.ad') }}</div>
        </div>
      </div>
      <img :src="copyright" alt="copyright" class="copyright" />
      <img :src="tree" alt="tree" class="tree" />
    </div>
    <div class="footer-bg"></div>
  </footer>
</template>
<script setup lang="ts">
import hostImg from '@/assets/img/section_13_logo_01.png'
import marketingImg from '@/assets/img/section_13_logo_02.png'
import cooperateImg from '@/assets/img/section_13_logo_03.png'
import copyright from '@/assets/img/section_13_copyright.png'
import tree from '@/assets/img/section_13_tree.png'

import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

const isEn = computed(() => locale.value.startsWith('en'))
</script>
<style lang="scss" scoped>
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.footer {
  position: relative;
  width: 100%;
  background: #000c3b;
  &__inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    width: fit-content;
    height: 100%;
    margin: 0 auto;
    padding: 28px 24px;
  }
  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    z-index: 10;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__content {
    display: grid;
    grid-template-columns: 64px auto;
    column-gap: 12px;
    max-width: 776px;
    &__tag {
      width: fit-content;
      height: fit-content;
      padding: 2px 8px;
      background-color: #fff;
      border-radius: 8px;
      @include mixins.footer-tag;
      &.en {
        @include mixins.footer-tag;
        padding: 4px 6px;
        border-radius: 2px;
        text-align: center;
        justify-self: flex-end;
        &.tag-center {
          align-self: center;
        }
      }
    }
  }
  &__text {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    img {
      max-width: 20px;
    }
  }
}

.log-click {
  max-height: 30px;
}

.copyright {
  position: relative;
  z-index: 10;
  max-width: 80px;
}

.tree {
  position: absolute;
  left: 5%;
  bottom: 0;
  z-index: 2;
  width: 100%;
  max-width: 92px;
}

.footer-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 84px;
  background-image: url('@/assets/img/section_13_ribbon_bottom.png');
  background-repeat: repeat;
  background-size: cover;
  background-position: bottom center;
  z-index: 0;
}

.footer__ad {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: 0.5px solid #fff;
  padding: 0 4px;
  @include mixins.typography-responsive(8px, 10px, 12px, 1.5, 1.5, 1.5, 400, #fff);
}

@media screen and (min-width: 768px) {
  .footer {
    &__inner {
      gap: 48px;
      padding: 60px 60px 84px;
    }
    &__container {
      flex-direction: row;
      gap: 42px;
    }
    &__content {
      grid-template-columns: 80px auto;
      column-gap: 48px;
      &__tag {
        padding: 12px 16px;
      }
    }
    &__text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      img {
        max-width: unset;
      }
    }
  }

  .tree {
    left: 5%;
    max-width: 168px;
  }

  .footer-bg {
    min-height: 200px;
  }

  .log-click {
    max-height: 40px;
  }

  .copyright {
    max-width: unset;
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    &__inner {
      gap: 86px;
      padding: 60px 60px 84px;
    }
    &__container {
      flex-direction: row;
      gap: 42px;
    }
    &__wrapper {
      gap: 36px;
    }
    &__content {
      grid-template-columns: 104px auto;
    }
  }

  .tree {
    left: 0;
    max-width: 250px;
  }

  .footer-bg {
    min-height: 200px;
  }

  .log-click {
    max-height: unset;
  }

  .footer__ad {
    padding: 0 8px;
  }
}

@media screen and (min-width: 1440px) {
  .footer {
    &__inner {
      gap: 86px;
      padding: 60px 60px 84px;
    }
    &__container {
      flex-direction: row;
      gap: 42px;
    }
    &__wrapper {
      gap: 60px;
    }
  }

  .tree {
    left: -10%;
    max-width: 300px;
  }

  .footer-bg {
    min-height: 200px;
  }
}

@media screen and (min-width: 1920px) {
  .footer {
    &__inner {
      gap: 86px;
      padding: 60px 60px 84px;
    }
    &__container {
      flex-direction: row;
      gap: 42px;
    }
    &__content {
      grid-template-columns: 128px auto;
    }
  }

  .tree {
    left: -30%;
    max-width: 400px;
  }

  .footer-bg {
    min-height: 200px;
  }
}
</style>
