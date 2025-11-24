<template>
  <section class="landmark-section">
    <Container maxWidth="1528px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="landmark" class="mb-[75px]" />
        <div class="map__group">
          <img :src="xinyiMap" alt="xinyi map" class="ml-auto" loading="lazy" />
          <div class="map__card__container">
            <CardLight class="map__card map__card--left" v-bind="xinyiLights[9]" />
            <CardLight class="map__card map__card--right" v-bind="xinyiLights[10]" />
          </div>
        </div>
        <div class="light__group">
          <CardLight
            v-for="light in xinyiLights.slice(0, 9)"
            :key="light.id ?? light.lightKey"
            :useStar="true"
            v-bind="light"
            class="max-w-[280px]"
          />
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
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.landmark-section {
  padding-top: 90px;
  padding-bottom: 220px;
  background-color: vars.$color-text-blue;
}

.map {
  &__group {
    position: relative;
  }
  &__card {
    position: absolute;

    &__container {
      position: absolute;
      top: 0;
      left: 0;
      right: 50%;
      bottom: 0;
    }
    &--left {
      top: 8%;
      right: 47%;
      transform: rotate(-7.25deg);
    }
    &--right {
      top: 32%;
      right: 4%;
      transform: rotate(9deg);
    }
  }
}

.light__group {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin-top: 120px;
}
</style>
