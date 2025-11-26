<template>
  <section class="lights-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="lights" class="lights-section__title" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="lights-section__tabs" />
        <Card
          v-if="activeTab === 0"
          title-key="sections.lights.xinyi.title"
          bodyPadding="40px"
          bgColor="#B4C5E3"
        >
          <div class="area__list">
            <div class="xinyi-map_m map_m"></div>
            <div class="map_desktop">
              <img :src="xinyiMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="xinyiLights"
              :page-size="pageSize"
              bodyMinHeight="967px"
              :use-bg="false"
              :use-star="true"
              bgColor="#B4C5E3"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 1"
          textBgColor="#FF8E9F"
          title-key="sections.lights.eastern.title"
          bodyPadding="40px"
          bgColor="#B4C5E3"
        >
          <div class="area__list">
            <div class="eastern-map_m map_m"></div>
            <div class="map_desktop">
              <img :src="easternMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="easternLights"
              :page-size="pageSize"
              bodyMinHeight="967px"
              :use-bg="false"
              :use-star="true"
              bgColor="#B4C5E3"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 2"
          textBgColor="#5E4FD4"
          title-key="sections.lights.taipei.title"
          bodyPadding="40px"
          bgColor="#B4C5E3"
        >
          <div class="area__list items-center">
            <div class="taipei-map_m map_m"></div>
            <div class="map_desktop">
              <img :src="taipeiMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="taipeiLights"
              :page-size="pageSize"
              bodyMinHeight="967px"
              :use-bg="false"
              :use-star="true"
              bgColor="#B4C5E3"
            />
            <div class="ximending__title">
              <div class="ximending__title__group">
                <span class="ximending__title__icon">
                  <img :src="iconPlay" alt="icon" />
                </span>
                <p>{{ t('sections.lights.ximending.title') }}</p>
                <span class="ximending__title__icon">
                  <img :src="iconPlay" alt="icon" />
                </span>
              </div>
            </div>
            <div class="ximending-map_m map_m"></div>
            <div class="map_desktop">
              <img :src="ximendingMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="ximenLights"
              :page-size="pageSize"
              bodyMinHeight="967px"
              :use-bg="false"
              :use-star="true"
              bgColor="#B4C5E3"
            />
          </div>
        </Card>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import SectionTabs from '@/components/common/SectionTabs.vue'
import Card from '@/components/common/Card.vue'
import CardStamp from '@/components/common/CardStamp.vue'
import xinyiMap from '@/assets/map/section_07_map_01_xy.png'
import easternMap from '@/assets/map/section_07_map_02_ed.png'
import taipeiMap from '@/assets/map/section_07_map_03_other.png'
import ximendingMap from '@/assets/map/section_07_map_04_xm.png'
import iconPlay from '@/assets/icon/play_blue.svg'
import { useTabs } from '@/data/const'
import { useI18n } from 'vue-i18n'
import {
  xinyiLights,
  easternLights,
  taipeiLights,
  ximenLights,
} from '@/components/sections/Lights/photo'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()

const { t } = useI18n()

const pageSize = computed(() => {
  if (breakpoint.value === 'lg') return 6
  if (breakpoint.value === 'md') return 4
  return 8
})
const activeTab = ref(0)
const tabs = computed(() => useTabs())
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.lights-section {
  padding-top: 12px;
  padding-bottom: 148px;
  background-color: vars.$bg-blue;
}

.lights-section__title {
  margin-bottom: 20px;
}

.lights-section__tabs {
  margin-bottom: 12px;
}

.map_m {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.xinyi-map_m {
  aspect-ratio: 342/382;
  background-image: url('@/assets/map/section_07_map_01_xy.png');
}

.eastern-map_m {
  aspect-ratio: 1200/820;
  background-image: url('@/assets/map/section_07_map_02_ed.png');
}

.taipei-map_m {
  aspect-ratio: 1400/820;
  background-image: url('@/assets/map/section_07_map_03_other.png');
}

.ximending-map_m {
  aspect-ratio: 700/500;
  background-image: url('@/assets/map/section_07_map_04_xm.png');
}

.map_desktop {
  display: none;
}

.area__list {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

.ximending__title {
  display: flex;
  justify-content: center;
  width: calc(100% - 80px);
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 8px;
  background-color: #ecf4f9;
  text-align: center;
  @include mixins.typography(24px, 36px, 700, #3277e1);
  &__group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: fit-content;
  }
  &__icon {
    width: 24px;
    height: 24px;
  }
}

@media (min-width: 1024px) {
  .lights-section {
    padding-top: 100px;
    padding-bottom: 196px;
  }

  .lights-section__title {
    margin-bottom: 60px;
  }

  .lights-section__tabs {
    margin-bottom: 50px;
  }

  .locale-card__list {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .ximending__title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

@media (min-width: 1440px) {
  .map_m {
    display: none;
  }

  .map_desktop {
    display: block;
  }

  .ximending__title {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}

@media (min-width: 1920px) {
  .lights-section {
    padding-top: 100px;
    padding-bottom: 240px;
  }

  .lights-section__title {
    margin-bottom: 100px;
  }

  .lights-section__tabs {
    margin-bottom: 88px;
  }

  .area-list {
    gap: 32px;
  }

  .ximending__title {
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
