<template>
  <section class="performance-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="performance" class="performance-section__title" />
        <img
          v-if="!isEn"
          :src="performanceMapM"
          alt="xinyi map"
          class="performance__img--m"
          loading="lazy"
        />
        <img
          v-if="isEn"
          :src="performanceMapMEn"
          alt="xinyi map"
          class="performance__img--m"
          loading="lazy"
        />

        <div class="w-full relative">
          <img :src="snoopySnowLeft" alt="snow" class="snoopy-snow-left" />
          <img :src="snoopySnowRight" alt="snow" class="snoopy-snow-right" />

          <img
            v-if="!isEn"
            :src="performanceMap"
            alt="xinyi map"
            class="max-w-full performance__img"
            loading="lazy"
          />
          <img
            v-if="isEn"
            :src="performanceMapEn"
            alt="xinyi map"
            class="max-w-full performance__img"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
    <div class="bg-footer">
      <div class="bg-footer-dark"></div>
      <div class="bg-footer-light"></div>
      <img :src="snoopyBg" alt="" class="snoopy-bg" />
      <img :src="snoopyM" alt="" class="snoopy-m" />
      <img :src="snoopy" alt="" class="snoopy" />
    </div>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import performanceMap from '@/assets/img/section_09_event.png'
import performanceMapM from '@/assets/img/m_section_09_event.png'
import performanceMapEn from '@/assets/img/section_09_event_en.png'
import performanceMapMEn from '@/assets/img/m_section_09_event_en.png'
import snoopySnowLeft from '@/assets/img/section_09_snow-left.png'
import snoopySnowRight from '@/assets/img/section_09_snow-right.png'
import snoopyBg from '@/assets/img/section_10_footer_top.png'
import snoopyM from '@/assets/img/m_section_10_people.png'
import snoopy from '@/assets/img/section_10_people.png'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const isEn = computed(() => locale.value.startsWith('en'))
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.performance-section {
  background-color: vars.$bg-blue;
}

.performance-section__title {
  margin-bottom: 20px;
}

.performance__img {
  display: none;
}

.snoopy-snow-left,
.snoopy-snow-right {
  display: none;
}

.bg-footer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  margin-top: 72px;
  &-dark {
    flex: 1 1 0;
    background-color: vars.$bg-blue;
  }
  &-light {
    flex: 1 1 0;
    background-color: vars.$bg-snow;
  }
}

.snoopy-m {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 314px;
  pointer-events: none;
  user-select: none;
}

.snoopy {
  display: none;
}
.snoopy-bg {
  width: 100%;
  position: absolute;
  top: 42%;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 768px) {
  .performance-section {
    padding-top: 32px;
  }

  .performance__img--m {
    width: 80%;
  }

  .bg-footer {
    height: 180px;
    margin-top: 100px;
  }

  .snoopy-bg {
    top: 16%;
  }
  .snoopy-m {
    display: none;
  }
  .snoopy {
    position: absolute;
    bottom: 40%;
    left: 50%;
    display: block;
    transform: translate(-50%, 0);
    max-width: 600px;
    pointer-events: none;
    user-select: none;
  }
}

@media (min-width: 1024px) {
  .snoopy-snow-left,
  .snoopy-snow-right {
    position: absolute;
    display: block;
    width: 100%;
  }

  .snoopy-snow-left {
    top: -7%;
    left: -1%;
    max-width: 180px;
  }

  .snoopy-snow-right {
    top: -6.5%;
    right: -1%;
    max-width: 174px;
  }

  .bg-footer {
    height: 180px;
    margin-top: 132px;
  }

  .snoopy-bg {
    top: 16%;
  }
  .snoopy {
    bottom: 20%;
    max-width: 854px;
  }

  .performance-section {
    padding-top: 64px;
  }

  .performance-section__title {
    margin-bottom: 36px;
  }

  .performance__img--m {
    display: none;
  }

  .performance__img {
    display: block;
  }
}

@media (min-width: 1440px) {
  .snoopy-snow-left {
    top: -6%;
    left: -8%;
    max-width: 220px;
  }

  .snoopy-snow-right {
    top: -5.5%;
    right: -9%;
    max-width: 212px;
  }

  .performance-section {
    padding-top: 92px;
  }

  .bg-footer {
    height: 200px;
    margin-top: 220px;
    margin-bottom: -2px;
  }

  .snoopy-bg {
    top: 16%;
  }
  .snoopy {
    bottom: 20%;
    max-width: 1108px;
  }
}

@media (min-width: 1920px) {
  .snoopy-snow-left {
    top: -5.5%;
    left: -10%;
    max-width: 260px;
  }

  .snoopy-snow-right {
    top: -5%;
    right: -10%;
    max-width: 256px;
  }

  .bg-footer {
    height: 200px;
    margin-top: 268px;
    margin-bottom: -2px;
  }

  .snoopy-bg {
    top: 16%;
  }
  .snoopy {
    bottom: 20%;
    max-width: 1372px;
  }

  .performance-section {
    padding-top: 200px;
  }

  .performance-section__title {
    margin-bottom: 56px;
  }
}
</style>
