<template>
  <section class="landmark-section">
    <Container maxWidth="1528px" smMaxWidth="395px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="landmark" class="landmark-section_title" />
        <div class="map_m"></div>
        <div class="map__group">
          <img :src="xinyiMap" alt="xinyi map" class="ml-auto map_desktop" loading="lazy" />
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
import CardLight from '@/components/common/CardLight.vue'
import { xinyiLights } from '@/components/sections/Landmark/photo'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.landmark-section {
  padding-top: 40px;
  padding-bottom: 120px;
  background-color: vars.$color-text-blue;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  aspect-ratio: 390/445;
  background-image: url('@/assets/map/section_08_map.png');
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
  margin-bottom: 15px;
}

.light__card {
  width: 100%;
  min-width: 256px;
  max-width: 256px;
}

@media (min-width: 1024px) {
  .landmark-section {
    padding-top: 75px;
    padding-bottom: 170px;
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
    padding-top: 90px;
    padding-bottom: 220px;
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
        right: 10.5%;
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
