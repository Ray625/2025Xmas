<template>
  <section class="transportation-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <SectionTitle preset="transportation" class="transportation-section__title" />
          <div class="w-full relative transportation-section__tabs">
            <SectionTabs v-model="activeTab" :tabs="tabs" text-color="#00633A" />
            <img
              :src="snoopyTabsXinyi"
              alt="snoopy img"
              class="snoopyXinyi"
              :class="{ en: isEn }"
            />
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
            <img
              :src="snoopyTabsTaipeiM"
              alt="snoopy img"
              class="snoopyTaipeiM"
              :class="{ en: isEn }"
            />
          </div>
        </div>
        <Card
          v-if="activeTab === 0"
          :title-key="['sm', 'xs'].includes(breakpoint) ? '' : 'sections.promo.xinyi.title'"
          bodyPadding="52px 80px 80px"
          smBodyPadding="0"
          md-body-padding="0"
          textBgColor="#28B590"
          :bg-color="['sm', 'xs'].includes(breakpoint) ? '#82CFB4' : '#f1f9f5'"
          class="w-full"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 5)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(8, 6, 5)[breakpoint] : snoopyListRight(11, 8, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#82CFB4"
        >
          <div class="transportation-section__card__group">
            <CardTransport
              v-for="(locale, index) in xinyiList"
              :title="locale.title"
              :transportList="locale.transportList"
              class="w-full"
              :default-open="index === 0 ? true : null"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 1"
          :title-key="['sm', 'xs'].includes(breakpoint) ? '' : 'sections.promo.eastern.title'"
          bodyPadding="52px 80px 80px"
          smBodyPadding="0"
          md-body-padding="0"
          textBgColor="#28B590"
          :bg-color="['sm', 'xs'].includes(breakpoint) ? '#82CFB4' : '#f1f9f5'"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 5)[breakpoint]?.reverse()
              : snoopyListLeft(11, 9, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn
              ? snoopyListLeft(8, 6, 5)[breakpoint]?.reverse()
              : snoopyListRight(11, 9, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#82CFB4"
        >
          <div class="transportation-section__card__group">
            <CardTransport
              v-for="(locale, index) in easternList"
              :title="locale.title"
              :transportList="locale.transportList"
              class="w-full"
              :default-open="index === 0 ? true : null"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 2"
          :title-key="['sm', 'xs'].includes(breakpoint) ? '' : 'sections.promo.taipei.title'"
          bodyPadding="52px 80px 80px"
          smBodyPadding="0"
          md-body-padding="0"
          textBgColor="#28B590"
          :bg-color="['sm', 'xs'].includes(breakpoint) ? '#82CFB4' : '#f1f9f5'"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(7, 6, 4)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(7, 6, 4)[breakpoint] : snoopyListRight(11, 8, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#82CFB4"
        >
          <div class="transportation-section__card__group">
            <CardTransport
              v-for="(locale, index) in taipeiList"
              :title="locale.title"
              :transportList="locale.transportList"
              class="w-full"
              :default-open="index === 0 ? true : null"
            />
          </div>
        </Card>
      </div>
    </Container>
    <div class="bg-footer">
      <img :src="snoopyBgM" alt="snoopy background" class="snoopy-bg-m" />
      <img :src="snoopyM" alt="snoopy" class="snoopy-m" />
      <img :src="snoopyBg" alt="snoopy background" class="snoopy-bg" />
      <img :src="snoopy" alt="snoopy" class="snoopy" />
      <img :src="snoopyTree" alt="snoopy" class="snoopy-tree" />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import SectionTabs from '@/components/common/SectionTabs.vue'
import Card from '@/components/common/Card.vue'
import CardTransport from '@/components/common/CardTransport.vue'
import snoopyTabsXinyi from '@/assets/img/section_11_btn_01.png'
import snoopyTabsEastern from '@/assets/img/section_11_btn_02.png'
import snoopyTabsTaipei from '@/assets/img/section_11_btn_03.png'
import snoopyTabsTaipeiM from '@/assets/img/m_section_11_btn_03.png'
import snoopyBgM from '@/assets/img/m_section_11_footer.png'
import snoopyM from '@/assets/img/m_section_11_snoopy.png'
import snoopyBg from '@/assets/img/section_11_footer.png'
import snoopy from '@/assets/img/section_11_snoopy.png'
import snoopyTree from '@/assets/img/section_11_tree.png'
import { useTransport } from '@/components/sections/Transportation/const'
import { tabsConfig } from '@/data/const'
import { useViewport } from '@/composables/useViewport'
import { snoopyListLeft, snoopyListRight, snoopyListGap } from '@/data/const'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { breakpoint } = useViewport()

const { xinyiList, easternList, taipeiList } = useTransport()

const isEn = computed(() => locale.value.startsWith('en'))
const activeTab = ref(0)
const tabs = computed(() => tabsConfig.map((tab) => ({ key: tab.key, label: t(tab.labelKey) })))
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.transportation-section {
  padding-top: 52px;
  background-color: vars.$bg-green;
  background-image: url('@/assets/img/section_10_footer_bottom.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;

  &__card__group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
}

.transportation-section__title {
  margin-bottom: 20px;
}

.transportation-section__tabs {
  margin-bottom: 12px;
}

.snoopyXinyi {
  position: absolute;
  width: 100%;
  max-width: 124px;
  top: 16px;
  left: -16px;
  pointer-events: none;
  user-select: none;
  &.en {
    top: 8px;
    left: -20px;
  }
}

.snoopyTaipei {
  display: none;
}

.snoopyTaipeiM {
  position: absolute;
  width: 100%;
  top: 96px;
  right: -8px;
  max-width: 88px;
  pointer-events: none;
  user-select: none;
  &.en {
    top: 120px;
    right: -20px;
  }
}

.snoopyEastern {
  display: none;
  pointer-events: none;
  user-select: none;
}

.bg-footer {
  position: relative;
  width: 100%;
  height: 240px;
  margin-top: 12px;
}

.snoopy-bg-m {
  position: absolute;
  bottom: 0;
  pointer-events: none;
  user-select: none;
}

.snoopy-m {
  position: absolute;
  left: 50%;
  bottom: 52px;
  transform: translate(-50%, 0);
  max-width: 328px;
  pointer-events: none;
  user-select: none;
}

.snoopy {
  display: none;
}

.snoopy-bg {
  display: none;
}

.snoopy-tree {
  display: none;
}

@media (min-width: 768px) {
  .transportation-section {
    padding-top: 92px;
  }

  .snoopyXinyi {
    max-width: 154px;
    top: 16px;
    left: -20px;
    &.en {
      top: 16px;
      left: -20px;
    }
  }

  .snoopyTaipei {
    position: absolute;
    top: 0;
    right: -48px;
    display: block;
    width: 100%;
    max-width: 130px;
    pointer-events: none;
    user-select: none;
    &.en {
      top: 0;
      right: -48px;
    }
  }

  .snoopyTaipeiM {
    display: none;
  }

  .snoopy-bg-m {
    display: none;
  }

  .snoopy-m {
    display: none;
  }

  .bg-footer {
    height: 240px;
    margin-top: 24px;
  }
  .snoopy {
    position: absolute;
    bottom: 48px;
    left: 5%;
    display: block;
    max-width: 275px;
    pointer-events: none;
    user-select: none;
  }

  .snoopy-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: block;
    pointer-events: none;
    user-select: none;
  }

  .snoopy-tree {
    position: absolute;
    top: 24px;
    right: 5%;
    display: block;
    max-width: 380px;
    pointer-events: none;
    user-select: none;
  }
}

@media (min-width: 1024px) {
  .transportation-section {
    padding-top: 108px;
    background-color: vars.$bg-green;
    &__card__group {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
    }
  }

  .transportation-section__title {
    margin-bottom: 60px;
  }

  .transportation-section__tabs {
    margin-bottom: 64px;
  }

  .snoopyXinyi {
    max-width: 154px;
    top: 12px;
    left: -28px;
    &.en {
      top: 76px;
      left: -20px;
    }
  }

  .snoopyEastern {
    position: absolute;
    top: -34px;
    left: 308px;
    display: block;
    width: 100%;
    max-width: 100px;
    &.en {
      top: -52px;
      left: 308px;
    }
  }

  .snoopyTaipei {
    top: -20px;
    right: -28px;
    width: 100%;
    max-width: 130px;
    &.en {
      top: -12px;
      right: -28px;
    }
  }

  .bg-footer {
    height: 240px;
    margin-top: 64px;
  }
  .snoopy {
    bottom: 64px;
    left: 12%;
    max-width: 300px;
  }

  .snoopy-tree {
    top: 0px;
    right: 8%;
    max-width: 400px;
  }
}

@media (min-width: 1440px) {
  .transportation-section {
    padding-top: 132px;
  }

  .snoopyXinyi {
    max-width: 214px;
    top: 30px;
    left: -56px;
    &.en {
      top: 30px;
      left: -56px;
    }
  }

  .snoopyEastern {
    top: -36px;
    left: 392px;
    max-width: 110px;
    &.en {
      top: -60px;
      left: 392px;
    }
  }

  .snoopyTaipei {
    top: -108px;
    right: -60px;
    max-width: 200px;
    &.en {
      top: -108px;
      right: -60px;
    }
  }

  .bg-footer {
    height: 320px;
    margin-top: 80px;
  }
  .snoopy {
    bottom: 90px;
    left: 14%;
    max-width: 388px;
  }

  .snoopy-tree {
    top: 0px;
    right: 10%;
    max-width: 550px;
  }
}

@media (min-width: 1920px) {
  .transportation-section {
    padding-top: 180px;
  }

  .transportation-section__title {
    margin-bottom: 100px;
  }

  .transportation-section__tabs {
    margin-bottom: 80px;
  }

  .snoopyXinyi {
    max-width: 245px;
    top: 22px;
    left: 0;
    &.en {
      top: 22px;
      left: 0;
    }
  }

  .snoopyEastern {
    top: -44px;
    left: 516px;
    max-width: 123px;
    &.en {
      top: -80px;
      left: 516px;
    }
  }

  .snoopyTaipei {
    top: -160px;
    right: -8px;
    max-width: 241px;
    &.en {
      top: -160px;
      right: -8px;
    }
  }

  .bg-footer {
    height: 400px;
    margin-top: 112px;
  }

  .snoopy {
    bottom: 119px;
    left: 14%;
    max-width: 475px;
  }

  .snoopy-tree {
    top: 0px;
    right: 12.2%;
    max-width: 698px;
  }
}
</style>
