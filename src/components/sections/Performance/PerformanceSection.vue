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
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import performanceMap from '@/assets/img/section_09_event.png'
import performanceMapM from '@/assets/img/m_section_09_event.png'
import performanceMapEn from '@/assets/img/section_09_event_en.png'
import performanceMapMEn from '@/assets/img/m_section_09_event_en.png'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const isEn = computed(() => locale.value.startsWith('en'))
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.performance-section {
  padding-top: 56px;
  padding-bottom: 112px;
  background-color: vars.$bg-blue;
}

.performance-section__title {
  margin-bottom: 20px;
}

.performance__img {
  display: none;
}

@media (min-width: 768px) {
  .performance__img--m {
    width: 80%;
  }
}

@media (min-width: 1024px) {
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

@media (min-width: 1920px) {
  .performance-section__title {
    margin-bottom: 56px;
  }
}
</style>
