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
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 4)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(8, 6, 4)[breakpoint] : snoopyListRight(11, 8, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
        >
          <div class="area__list">
            <div class="map_m">
              <img :src="xinyiMapM" alt="xinyi map" loading="lazy" />
            </div>
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
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(6, 5, 3, 2, 0)[breakpoint]?.reverse()
              : snoopyListLeft(11, 9, 7, 4, 2)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn
              ? snoopyListRight(6, 5, 3, 2, 0)[breakpoint]
              : snoopyListRight(11, 9, 7, 4, 2)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#FFB8C3"
        >
          <div class="area__list">
            <div class="map_m">
              <img :src="easternMapM" alt="xinyi map" loading="lazy" />
            </div>
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
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(7, 6, 4, 2, 1)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7, 4, 1)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn
              ? snoopyListRight(7, 6, 4, 2, 1)[breakpoint]
              : snoopyListRight(11, 8, 7, 4, 1)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#9A8FED"
        >
          <div class="area__list items-center">
            <div class="map_m">
              <img :src="taipeiMapM" alt="xinyi map" loading="lazy" />
            </div>
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
            <div class="map_m">
              <img :src="ximendingMapM" alt="xinyi map" loading="lazy" />
            </div>
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
import xinyiMapM from '@/assets/map/m_section_07_map_01_xy.png'
import easternMapM from '@/assets/map/m_section_07_map_02_ed.png'
import taipeiMapM from '@/assets/map/m_section_07_map_03_other.png'
import ximendingMapM from '@/assets/map/m_section_07_map_04_xm.png'
import iconPlay from '@/assets/icon/play_blue.svg'
import { tabsConfig } from '@/data/const'
import { useI18n } from 'vue-i18n'
import {
  xinyiLights,
  easternLights,
  taipeiLights,
  ximenLights,
} from '@/components/sections/Lights/photo'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()
import { snoopyListLeft, snoopyListRight, snoopyListGap } from '@/data/const'
const { t, locale } = useI18n()

const isEn = computed(() => locale.value.startsWith('en'))
const pageSize = computed(() => {
  if (breakpoint.value === 'lg') return 6
  if (breakpoint.value === 'md') return 4
  return 8
})
const activeTab = ref(0)
const tabs = computed(() => tabsConfig.map((tab) => ({ key: tab.key, label: t(tab.labelKey) })))
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
  @include mixins.text-title(#3277e1);
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
