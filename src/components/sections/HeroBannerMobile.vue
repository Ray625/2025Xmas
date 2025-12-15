<template>
  <section class="hero-banner-mobile">
    <div class="img img__bg"></div>
    <div class="img img__bg__snow"></div>
    <div class="img img__tree"></div>
    <div class="img img__city"></div>
    <div class="img img__tree__light-1"></div>
    <div class="img img__tree__light-2"></div>
    <div class="img img__snow-1"></div>
    <div class="img img__snow-2"></div>
    <div class="img img__snow-3"></div>
    <div class="img img__item-1"></div>
    <div class="img img__item-2"></div>
    <div class="title img__title-1"></div>
    <div class="title img__title-2" :class="{ en: isEn }"></div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isEn = computed(() => locale.value.startsWith('en'))
</script>

<style scoped lang="scss">
.hero-banner-mobile {
  position: relative;
  width: 100%;
  aspect-ratio: 390/600;
}

.img {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
}

.img__bg {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_bg.png');
  background-position: top center;
  z-index: 0;
}

.img__bg__snow {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_bg-snow.png');
  background-position: top center;
  z-index: 1;
  mix-blend-mode: screen;
}

.img__city {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_city.png');
  background-position: bottom center;
  background-size: cover;
  z-index: 3;
}

.img__tree {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_tree.png');
  background-position: bottom center;
  z-index: 2;
}

.img__tree__light-1 {
  position: absolute;
  inset: 0;
  background-image: url('@/assets/kv/m_kv_tree-light_01.png');
  background-position: bottom center;
  z-index: 4;
  mix-blend-mode: screen;
}

.img__tree__light-2 {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_tree-light_02.png');
  background-position: bottom center;
  z-index: 5;
  mix-blend-mode: screen;
}

.img__snow-1 {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_snow_01.png');
  background-position: top center;
  z-index: 6;
  animation: fadeCycle 4.5s linear infinite;
  background-size: contain;
}

.img__snow-2 {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_snow_02.png');
  background-size: contain;
  background-position: top center;
  z-index: 6;
  animation: fadeCycle 4.5s linear infinite;
  animation-delay: 1.5s;
  opacity: 0;
}

.img__snow-3 {
  inset: 0;
  background-image: url('@/assets/kv/m_kv_snow_03.png');
  background-size: contain;
  background-position: top center;
  z-index: 6;
  animation: fadeCycle 4.5s linear infinite;
  animation-delay: 3s;
  opacity: 0;
}

.img__item-1 {
  left: 0;
  bottom: 0;
  width: 100%;
  aspect-ratio: 780/400;
  background-image: url('@/assets/kv/m_kv_item_01.png');
  background-position: bottom center;
  z-index: 7;
  animation: fadeInOut 2s linear infinite;
  animation-delay: 0s;
}

.img__item-2 {
  left: 0;
  bottom: 0;
  width: 100%;
  aspect-ratio: 780/400;
  background-image: url('@/assets/kv/m_kv_item_02.png');
  background-position: bottom center;
  z-index: 7;
  animation: fadeInOut 2s linear infinite;
  animation-delay: 1s;
  opacity: 0;
}

.title {
  position: absolute;
  background-repeat: no-repeat;
  inset: 0;
  z-index: 8;
}

.img__title-1 {
  background-image: url('@/assets/kv/m_kv_title_01.png');
  background-position: top center;
  background-size: contain;
}

.img__title-2 {
  background-image: url('@/assets/kv/m_kv_title_02.png');
  background-position: top center;
  background-size: contain;
  &.en {
    background-image: url('@/assets/kv/m_kv_title_02_en.png');
  }
}

@keyframes fadeCycle {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@media (min-width: 768px) {
  .hero-banner-mobile {
    display: none;
  }
}
</style>
