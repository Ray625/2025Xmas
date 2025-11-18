<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__container">
        <div class="footer__wrapper">
          <div class="footer__content">
            <div class="footer__content__tag">{{ t('footer.host') }}</div>
            <img :src="hostImg" alt="logo" class="log log-taipie" />
          </div>
          <div class="footer__content">
            <div class="footer__content__tag">{{ t('footer.marketing') }}</div>
            <img :src="marketingImg" alt="logo" class="log log-click" />
          </div>
          <div class="footer__content">
            <div class="footer__content__tag">{{ t('footer.cooperate') }}</div>
            <img :src="cooperateImg" alt="logo" class="log log-group" />
          </div>
        </div>
        <div class="footer__text">
          <img :src="iconAd" alt="icon" />
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
import iconAd from '@/assets/icon/ad.svg'
import copyright from '@/assets/img/section_13_copyright.png'
import tree from '@/assets/img/section_13_tree.png'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
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
    gap: 86px;
    width: fit-content;
    height: 100%;
    margin: 0 auto;
    padding: 60px 60px 84px;
  }
  &__container {
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 42px;
    z-index: 10;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  &__content {
    display: grid;
    grid-template-columns: 128px auto;
    column-gap: 48px;
    max-width: 776px;
    &__tag {
      width: fit-content;
      height: fit-content;
      padding: 12px 16px;
      background-color: #fff;
      border-radius: 8px;
      @include mixins.typography(24px, 36px, 700);
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.copyright {
  position: relative;
  z-index: 10;
}

.tree {
  position: absolute;
  left: -30%;
  bottom: 0;
  z-index: 2;
}

.footer-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 200px;
  background-image: url('@/assets/img/section_13_ribbon_bottom.png');
  background-repeat: repeat;
  background-size: cover;
  background-position: bottom center;
  z-index: 0;
}

@media screen and (max-width: 1024px) {
}
</style>
