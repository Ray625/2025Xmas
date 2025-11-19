<template>
  <section class="promo-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="promo" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="mb-[88px]" />
        <Card v-if="activeTab === 0" title-key="sections.promo.xinyi.title" bodyPadding="40px">
          <div class="flex flex-col gap-8 w-full">
            <!-- 台北101 -->
            <CardLocale
              :title="xinyiList.taipei101.title"
              :locationList="xinyiList.taipei101.locationList"
            >
              <template #detail>
                <div class="">
                  {{ t('sections.promo.xinyi.taipei101.body') }}
                </div>
              </template>
            </CardLocale>
            <!-- 微風南山 -->
            <CardLocale
              :title="xinyiList.breeze.title"
              :locationList="xinyiList.breeze.locationList"
            >
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 微風松高 -->
            <CardLocale :locationList="xinyiList.breeze.locationList2">
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 微風信義 -->
            <CardLocale :locationList="xinyiList.breeze.locationList3">
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft3"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight3"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 新光三越 -->
            <CardLocale :title="xinyiList.SKM.title" :locationList="xinyiList.SKM.locationList">
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 遠百信義A13 -->
            <CardLocale :title="xinyiList.FEDS.title" :locationList="xinyiList.FEDS.locationList">
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.FEDS.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1 relative">
                    <img :src="snoopyImg" alt="snoopy" class="absolute bottom-0 right-0 w-full" />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 統一時代百貨 -->
            <CardLocale :title="xinyiList.uni.title" :locationList="xinyiList.uni.locationList">
              <template #detail>
                <div class="flex flex-row gap-8">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- BELLAVITA 寶麗廣場 -->
            <CardLocale
              :title="xinyiList.BELLAVITA.title"
              :locationList="xinyiList.BELLAVITA.locationList"
            >
              <template #detail>
                <div class="">
                  {{ t('sections.promo.xinyi.BELLAVITA.body') }}
                </div>
              </template>
            </CardLocale>
            <!-- 誠品 -->
            <!-- <CardLocale
              :title="taipeiList.eslite.title"
              :locationList="taipeiList.eslite.locationList"
            >
              <template #detail>
                <div class=""></div>
              </template>
            </CardLocale> -->
          </div>
        </Card>
        <Card v-if="activeTab === 1" title-key="sections.promo.eastern.title" bodyPadding="40px">
          <div class="flex flex-col w-full"></div>
        </Card>
        <Card v-if="activeTab === 2" title-key="sections.promo.taipei.title" bodyPadding="40px">
          <div class="flex flex-col w-full"></div>
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
import CardLocale from '@/components/common/CardLocale.vue'
import CardEvent from '@/components/common/CardEvent.vue'
import snoopyImg from '@/assets/img/section_06_snoopy.png'
import { useI18n } from 'vue-i18n'
import { usePromoLocations } from '@/components/sections/Promo/const'
import { useTabs } from '@/data/const'

const { t } = useI18n()

const activeTab = ref(0)
const tabs = computed(() => useTabs())
const { xinyiList } = usePromoLocations()
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.promo-section {
  padding-top: 100px;
  padding-bottom: 240px;
  background-color: vars.$bg-green;
}
</style>
