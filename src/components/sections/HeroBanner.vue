<template>
  <section class="hero-banner">
    <div class="img img__bg"></div>
    <div class="img img__bg__snow"></div>
    <div class="img img__tree"></div>
    <div class="img img__city-left"></div>
    <div class="img img__city-right"></div>
    <div class="img img__tree__light-1"></div>
    <div class="img img__tree__light-2"></div>
    <div class="img img__deco"></div>
    <div class="img img__snow-1"></div>
    <div class="img img__snow-2"></div>
    <div class="img img__snow-3"></div>
    <div class="img img__item-1"></div>
    <div class="img img__item-2"></div>
    <div class="title img__title-1"></div>
    <div class="title img__title-2"></div>
  </section>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
:root {
  --header-height: 68px;
}

.hero-banner {
  position: relative;
  width: 100%;
  aspect-ratio: 1920/1080;
}

.img {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
}

.img__bg {
  inset: 0;
  background-image: url('@/assets/kv/kv_bg.png');
  background-position: top center;
  z-index: 0;
}

.img__bg__snow {
  inset: 0;
  background-image: url('@/assets/kv/kv_bg-snow.png');
  background-position: top center;
  z-index: 1;
  mix-blend-mode: screen;
}

.img__city-left {
  left: 0;
  bottom: 0;
  width: 40.5%;
  aspect-ratio: 780/900;
  background-image: url('@/assets/kv/kv_city_left.png');
  background-position: left bottom;
  z-index: 2;
}

.img__city-right {
  right: 0;
  bottom: 0;
  width: 40.5%;
  aspect-ratio: 780/900;
  background-image: url('@/assets/kv/kv_city_right.png');
  background-position: right bottom;
  background-size: contain;
  z-index: 2;
}

.img__tree {
  inset: 0;
  background-image: url('@/assets/kv/kv_tree.png');
  background-position: bottom center;
  z-index: 3;
}

.img__tree__light-1 {
  position: absolute;
  inset: 0;
  background-image: url('@/assets/kv/kv_tree-light_01.png');
  background-position: bottom center;
  z-index: 4;
  mix-blend-mode: screen;
}

.img__tree__light-2 {
  inset: 0;
  background-image: url('@/assets/kv/kv_tree-light_02.png');
  background-position: bottom center;
  z-index: 5;
  mix-blend-mode: screen;
}

.img__deco {
  left: 1%;
  top: 0;
  width: 13%;
  aspect-ratio: 250/540;
  background-image: url('@/assets/kv/kv_top-deco.png');
  background-position: top center;
  z-index: 2;
}

.img__snow-1 {
  inset: 0;
  background-image: url('@/assets/kv/kv_snow_01.png');
  background-position: top center;
  z-index: 6;
  animation: fadeCycle 4.5s linear infinite;
}

.img__snow-2 {
  inset: 0;
  background-image: url('@/assets/kv/kv_snow_02.png');
  background-position: top center;
  z-index: 6;
  animation: fadeCycle 4.5s linear infinite;
  animation-delay: 1.5s;
  opacity: 0;
}

.img__snow-3 {
  inset: 0;
  background-image: url('@/assets/kv/kv_snow_03.png');
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
  aspect-ratio: 1920/428;
  background-image: url('@/assets/kv/kv_item_01.png');
  background-position: bottom center;
  z-index: 7;
  animation: fadeInOut 2s linear infinite;
  animation-delay: 0s;
}

.img__item-2 {
  left: 0;
  bottom: 0;
  width: 100%;
  aspect-ratio: 1920/428;
  background-image: url('@/assets/kv/kv_item_02.png');
  background-position: bottom center;
  z-index: 7;
  animation: fadeInOut 2s linear infinite;
  animation-delay: 1s;
  opacity: 0;
}

.title {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 50%;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 8;
}

.img__title-1 {
  background-image: url('@/assets/kv/kv_title_01.png');
  background-position: center 40%;
}

.img__title-2 {
  background-image: url('@/assets/kv/kv_title_02.png');
  background-position: center 42%;
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

@media (min-width: 1440px) {
  .hero-banner {
    position: relative;
    width: 100%;
    margin-top: -100px;
    aspect-ratio: 1920/1080;
  }
}

@media (min-width: 1920px) {
  .hero-banner {
    margin-top: -132px;
  }
}
</style>
