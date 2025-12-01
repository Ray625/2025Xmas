<template>
  <section class="transportation-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col">
        <div class="flex flex-col items-center">
          <SectionTitle preset="transportation" class="transportation-section__title" />
          <SectionTabs
            v-model="activeTab"
            :tabs="tabs"
            text-color="#00633A"
            class="transportation-section__tabs"
          />
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
          :title-bg-list-left="snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()"
          :title-bg-list-right="snoopyListRight(11, 8, 7)[breakpoint]"
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
          :title-bg-list-left="snoopyListLeft(11, 9, 7)[breakpoint]?.reverse()"
          :title-bg-list-right="snoopyListRight(11, 9, 7)[breakpoint]"
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
          :title-bg-list-left="snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()"
          :title-bg-list-right="snoopyListRight(11, 8, 7)[breakpoint]"
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
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import SectionTabs from '@/components/common/SectionTabs.vue'
import Card from '@/components/common/Card.vue'
import CardTransport from '@/components/common/CardTransport.vue'
import { useTransport } from '@/components/sections/Transportation/const'
import { tabsConfig } from '@/data/const'
import { useViewport } from '@/composables/useViewport'
import { snoopyListLeft, snoopyListRight, snoopyListGap } from '@/data/const'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { breakpoint } = useViewport()

const { xinyiList, easternList, taipeiList } = useTransport()

const activeTab = ref(0)
const tabs = computed(() => tabsConfig.map((tab) => ({ key: tab.key, label: t(tab.labelKey) })))
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.transportation-section {
  padding-top: 40px;
  padding-bottom: 200px;
  background-color: vars.$bg-green;
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

@media (min-width: 1024px) {
  .transportation-section {
    padding-top: 100px;
    padding-bottom: 240px;
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
}

@media (min-width: 1920px) {
  .transportation-section__title {
    margin-bottom: 100px;
  }

  .transportation-section__tabs {
    margin-bottom: 80px;
  }
}
</style>
