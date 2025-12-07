<template>
  <section class="landmark-section">
    <Container maxWidth="1528px" smMaxWidth="395px">
      <div class="flex flex-col items-center relative">
        <SectionTitle preset="landmark" class="landmark-section_title" />
        <div class="map_m">
          <img v-if="isEn" :src="xinyiMapMEn" alt="xinyi map" loading="lazy" />
          <img v-else :src="xinyiMapM" alt="xinyi map" loading="lazy" />
        </div>
        <div class="map__group">
          <img
            v-if="isEn"
            :src="xinyiMapEn"
            alt="xinyi map"
            class="ml-auto map_desktop"
            loading="lazy"
          />
          <img v-else :src="xinyiMap" alt="xinyi map" class="ml-auto map_desktop" loading="lazy" />
          <div class="map__card__container">
            <CardLight class="map__card map__card--left" v-bind="xinyiLights[9]" />
            <CardLight class="map__card map__card--right" v-bind="xinyiLights[10]" />
          </div>
        </div>
        <div class="light__group">
          <CardLight
            v-if="['xl', 'lg'].includes(breakpoint)"
            v-for="light in xinyiLights.slice(0, 9)"
            :key="light.id ?? light.lightKey"
            :useStar="true"
            v-bind="light"
            class="light__card"
            :decorate="breakpoint === 'xl' ? 'clip' : 'none'"
          />
          <CardLight
            v-if="['md'].includes(breakpoint)"
            v-for="light in xinyiLights"
            :key="light.id ?? light.lightKey"
            :useStar="true"
            v-bind="light"
            class="light__card"
            :decorate="breakpoint === 'xl' ? 'clip' : 'none'"
          />
          <div v-if="['sm', 'xs'].includes(breakpoint)" class="lights__list">
            <CardLight
              v-for="light in xinyiLights"
              :key="light.id ?? light.lightKey"
              :useStar="true"
              v-bind="light"
              class="light__card"
              decorate="none"
            />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import xinyiMap from '@/assets/map/section_08_map.png'
import xinyiMapEn from '@/assets/map/section_08_map_en.png'
import xinyiMapM from '@/assets/map/m_section_08_map.png'
import xinyiMapMEn from '@/assets/map/m_section_08_map_en.png'
import CardLight from '@/components/common/CardLight.vue'
import { xinyiLights } from '@/components/sections/Landmark/photo'
import { useViewport } from '@/composables/useViewport'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

const { breakpoint } = useViewport()

const isEn = computed(() => locale.value.startsWith('en'))
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.landmark-section {
  padding-top: 12px;
  padding-bottom: 120px;
  background-color: vars.$color-text-blue;
  background-image: url('@/assets/img/m_section_07_footer.png'),
    url('@/assets/img/m_section_08_bg.png');
  background-repeat: no-repeat;
  background-position: center top -22%, center top 11.8%;
  background-size: auto, contain;
}

.map {
  &__group {
    position: relative;
  }
  &__card {
    position: absolute;
    max-width: 280px;

    &__container {
      display: none;
    }
  }
}

.map_m {
  width: 100%;
}

.map_desktop {
  display: none;
}

.light__group {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 0;
  }
}

.lights__list {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
}

.landmark-section_title {
  position: relative;
  margin-bottom: 15px;
  z-index: 1;
}

.light__card {
  width: 100%;
  min-width: 256px;
  max-width: 256px;
}

@media (min-width: 768px) {
  .landmark-section {
    background-position: center top -14.6%, center top 9.4%;
  }
}

@media (min-width: 1024px) {
  .landmark-section {
    padding-bottom: 170px;
    background-image: url('@/assets/img/section_07_footer.png'),
      url('@/assets/img/section_08_bg.png');
    background-repeat: no-repeat;
    background-position: center top -7%, center top 3%;
    background-size: auto, 120%;
  }

  .map_m {
    display: none;
  }

  .map_desktop {
    display: block;
  }

  .landmark-section_title {
    margin-bottom: 45px;
  }

  .light__group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    margin-top: 60px;
  }
}

@media (min-width: 1440px) {
  .landmark-section {
    padding-top: 30px;
    padding-bottom: 170px;
    background-image: url('@/assets/img/section_07_footer.png'),
      url('@/assets/img/section_08_bg.png');
    background-position: center top -7%, center top 6%;
    background-size: auto, 120%;
  }

  .map {
    &__group {
      position: relative;
    }
    &__card {
      position: absolute;
      max-width: 280px;

      &__container {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 50%;
        bottom: 0;
      }
      &--left {
        top: 8%;
        left: -10%;
        transform: rotate(-7.25deg);
      }
      &--right {
        top: 32%;
        right: 10.5%;
        transform: rotate(9deg);
      }
    }
  }
  .light__group {
    margin-top: 90px;
  }

  .light__card {
    max-width: 280px;
  }
}

@media (min-width: 1920px) {
  .landmark-section {
    position: relative;
    padding-top: 20px;
    padding-bottom: 220px;
    background-image: url('@/assets/img/section_08_bg.png');
    background-position: center top;
    background-size: contain;
  }

  .map {
    &__group {
      position: relative;
    }
    &__card {
      position: absolute;
      max-width: 280px;

      &__container {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 50%;
        bottom: 0;
      }
      &--left {
        top: 8%;
        left: unset;
        right: 47%;
        transform: rotate(-7.25deg);
      }
      &--right {
        top: 32%;
        right: 4.5%;
        transform: rotate(9deg);
      }
    }
  }

  .landmark-section_title {
    margin-bottom: 75px;
  }

  .light__group {
    gap: 32px;
    margin-top: 120px;
  }
}
</style>
