<template>
  <section class="lights-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="lights" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="mb-[88px]" />
        <Card
          v-if="activeTab === 0"
          title-key="sections.lights.xinyi.title"
          bodyPadding="40px"
          bgColor="#B4C5E3"
        >
          <div class="flex flex-col gap-8 w-full">
            <div>
              <img :src="xinyiMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="xinyiLights"
              :page-size="8"
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
          <div class="flex flex-col gap-8 w-full">
            <div>
              <img :src="easternMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="easternLights"
              :page-size="8"
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
          <div class="flex flex-col gap-8 w-full items-center">
            <div>
              <img :src="taipeiMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="taipeiLights"
              :page-size="8"
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
            <div>
              <img :src="ximendingMap" alt="xinyi map" loading="lazy" />
            </div>
            <CardStamp
              :lights="taipeiLights"
              :page-size="8"
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
import { useLightsTabs, useLightsList } from '@/components/sections/Lights/const'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeTab = ref(0)
const tabs = computed(() => useLightsTabs())
const { xinyiLights, easternLights, taipeiLights } = useLightsList()
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.lights-section {
  padding-top: 100px;
  padding-bottom: 240px;
  background-color: vars.$bg-blue;
}

.ximending__title {
  display: flex;
  justify-content: center;
  width: calc(100% - 80px);
  margin-top: 40px;
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
</style>
