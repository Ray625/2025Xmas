<template>
  <section class="lights-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="lights" class="lights-section__title" />
        <div class="w-full relative lights-section__tabs">
          <SectionTabs v-model="activeTab" :tabs="tabs" />
          <img :src="snoopyTabsXinyi" alt="snoopy img" class="snoopyXinyi" :class="{ en: isEn }" />
          <img
            :src="snoopyTabsEastern"
            alt="snoopy img"
            class="snoopyEastern"
            :class="{ en: isEn }"
          />
          <img
            :src="snoopyTabsTaipei"
            alt="snoopy img"
            class="snoopyTaipei"
            :class="{ en: isEn }"
          />
        </div>
        <Card
          v-if="activeTab === 0"
          title-key="sections.lights.xinyi.title"
          bodyPadding="40px"
          bgColor="#B4C5E3"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 5, 3, 1)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7, 4, 2)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn
              ? snoopyListRight(8, 6, 5, 3, 1)[breakpoint]
              : snoopyListRight(11, 8, 7, 4, 2)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
        >
          <div class="area__list">
            <div class="map_m">
              <img v-if="isEn" :src="xinyiMapMEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="xinyiMapM" alt="xinyi map" loading="lazy" />
            </div>
            <div class="map_desktop">
              <img v-if="isEn" :src="xinyiMapEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="xinyiMap" alt="xinyi map" loading="lazy" />
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
              <img v-if="isEn" :src="easternMapMEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="easternMapM" alt="xinyi map" loading="lazy" />
            </div>
            <div class="map_desktop">
              <img v-if="isEn" :src="easternMapEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="easternMap" alt="xinyi map" loading="lazy" />
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
              <img v-if="isEn" :src="taipeiMapMEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="taipeiMapM" alt="xinyi map" loading="lazy" />
            </div>
            <div class="map_desktop">
              <img v-if="isEn" :src="taipeiMapEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="taipeiMap" alt="xinyi map" loading="lazy" />
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
              <img v-if="isEn" :src="ximendingMapMEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="ximendingMapM" alt="xinyi map" loading="lazy" />
            </div>
            <div class="map_desktop">
              <img v-if="isEn" :src="ximendingMapEn" alt="xinyi map" loading="lazy" />
              <img v-else :src="ximendingMap" alt="xinyi map" loading="lazy" />
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
    <div class="bg-footer">
      <img :src="snoopyFooter" alt="snoopy background" class="snoopy-bg" :class="{ en: isEn }" />
      <img :src="snoopyFooterM" alt="snoopy background" class="snoopy-bg-m" :class="{ en: isEn }" />
    </div>
    <img :src="snoopy" alt="snoopy background" class="snoopy-img" />
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
import xinyiMapEn from '@/assets/map/section_07_map_01_xy_en.png'
import easternMapEn from '@/assets/map/section_07_map_02_ed_en.png'
import taipeiMapEn from '@/assets/map/section_07_map_03_other_en.png'
import ximendingMapEn from '@/assets/map/section_07_map_04_xm_en.png'
import xinyiMapMEn from '@/assets/map/m_section_07_map_01_xy_en.png'
import easternMapMEn from '@/assets/map/m_section_07_map_02_ed_en.png'
import taipeiMapMEn from '@/assets/map/m_section_07_map_03_other_en.png'
import ximendingMapMEn from '@/assets/map/m_section_07_map_04_xm_en.png'
import snoopyTabsXinyi from '@/assets/img/section_07_btn_01.png'
import snoopyTabsEastern from '@/assets/img/section_07_btn_02.png'
import snoopyTabsTaipei from '@/assets/img/section_07_btn_03.png'
import snoopy from '@/assets/img/section_07_snoopy.png'
import snoopyFooter from '@/assets/img/section_07_footer.png'
import snoopyFooterM from '@/assets/img/m_section_07_footer.png'

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
  position: relative;
  padding-top: 12px;
  padding-bottom: 148px;
  z-index: 1;
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

.snoopyXinyi {
  position: absolute;
  width: 100%;
  max-width: 78px;
  bottom: -12px;
  left: 4px;
  pointer-events: none;
  user-select: none;
  &.en {
    bottom: -12px;
    left: 4px;
  }
}

.snoopyTaipei {
  position: absolute;
  width: 100%;
  top: 60px;
  right: -2px;
  max-width: 96px;
  pointer-events: none;
  user-select: none;
  &.en {
    top: -8px;
    right: -20px;
  }
}

.snoopyEastern {
  display: none;
  pointer-events: none;
  user-select: none;
}

.snoopy-img {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100%;
  max-width: 180px;
  transform: translate(-50%, 0);
  pointer-events: none;
  user-select: none;
}

.snoopy-bg {
  display: none;
}

.bg-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
}

.snoopy-bg-m {
  position: absolute;
  top: 52%;
  left: 0;
  right: 0;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 768px) {
  .lights-section {
    padding-bottom: 200px;
  }

  .snoopy-img {
    max-width: 235px;
    transform: translate(-50%, 0);
  }

  .snoopyXinyi {
    max-width: 98px;
    bottom: -12px;
    left: 8px;
    pointer-events: none;
    user-select: none;
    &.en {
      bottom: -12px;
      left: 8px;
    }
  }

  .snoopyTaipei {
    top: 52px;
    right: -4px;
    max-width: 120px;
    &.en {
      top: 52px;
      right: -4px;
    }
  }

  .snoopy-bg {
    position: absolute;
    top: 64%;
    left: 0;
    right: 0;
    display: block;
    pointer-events: none;
    user-select: none;
  }

  .bg-footer {
    bottom: 0;
    height: 200px;
  }

  .snoopy-bg-m {
    display: none;
  }
}

@media (min-width: 1024px) {
  .lights-section {
    background-image: url('@/assets/img/section_07_footer.png');
    background-image: none;

    background-position: center bottom -11.2%;
    padding-bottom: 220px;
    &.en {
      background-position: center bottom -10.6%;
    }
  }

  .snoopy-img {
    max-width: 290px;
  }

  .snoopy-bg {
    top: 55%;
  }

  .bg-footer {
    bottom: 0;
    height: 200px;
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

  .snoopyXinyi {
    bottom: -50px;
    left: 0;
    max-width: 80px;
    &.en {
      bottom: -50px;
      left: 0;
    }
  }

  .snoopyEastern {
    position: absolute;
    top: 80px;
    right: 332px;
    display: block;
    width: 100%;
    max-width: 80px;
    &.en {
      top: 80px;
      right: 332px;
    }
  }

  .snoopyTaipei {
    top: 40px;
    right: -12px;
    max-width: 100px;
    &.en {
      top: 58px;
      right: -24px;
    }
  }
}

@media (min-width: 1440px) {
  .lights-section {
    background-position: center bottom -11.6%;
    padding-bottom: 260px;
    &.en {
      background-position: center bottom -11.2%;
    }
  }

  .snoopy-img {
    max-width: 345px;
    transform: translate(-50%, 0);
  }

  .snoopy-bg {
    top: 55%;
  }

  .bg-footer {
    bottom: 0;
    height: 260px;
  }

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

  .snoopyXinyi {
    bottom: -50px;
    left: 20px;
    max-width: 136px;
    &.en {
      bottom: -50px;
      left: 20px;
    }
  }

  .snoopyEastern {
    top: 76px;
    right: 420px;
    max-width: 100px;
    &.en {
      top: 76px;
      right: 404px;
    }
  }

  .snoopyTaipei {
    top: -12px;
    right: -22px;
    max-width: 170px;
    &.en {
      top: -12px;
      right: -22px;
    }
  }
}

@media (min-width: 1920px) {
  .lights-section {
    padding-bottom: 300px;
  }

  .snoopy-img {
    max-width: 404px;
    transform: translate(-50%, 0);
    bottom: 10px;
  }

  .bg-footer {
    bottom: 0;
    height: 260px;
  }

  .snoopy-bg {
    top: 106px;
    width: 100%;
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

  .snoopyXinyi {
    bottom: -88px;
    left: 84px;
    max-width: 156px;
    &.en {
      bottom: -88px;
      left: 84px;
    }
  }

  .snoopyEastern {
    top: 70px;
    right: 548px;
    max-width: 114px;
    &.en {
      top: 72px;
      right: 492px;
    }
  }

  .snoopyTaipei {
    top: -20px;
    right: 40px;
    max-width: 194px;
    &.en {
      top: -20px;
      right: 40px;
    }
  }
}

@media (min-width: 2560px) {
  .bg-footer {
    bottom: 0;
    height: 260px;
  }

  .snoopy-bg {
    top: 40px;
  }
}
</style>
