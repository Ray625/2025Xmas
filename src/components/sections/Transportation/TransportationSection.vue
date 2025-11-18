<template>
  <section class="transportation-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="transportation" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="mb-[80px]" />
        <Card
          v-if="activeTab === 0"
          title-key="sections.promo.xinyi.title"
          bodyPadding="52px 80px 80px"
          textBgColor="#28B590"
          bg-color="#f1f9f5"
        >
          <div class="promo-section__card__group">
            <CardTransport
              v-for="locale in xinyiList"
              :title="locale.title"
              :transportList="locale.transportList"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 1"
          title-key="sections.promo.eastern.title"
          bodyPadding="52px 80px 80px"
          textBgColor="#28B590"
          bg-color="#f1f9f5"
        >
          <div class="promo-section__card__group"></div>
        </Card>
        <Card
          v-if="activeTab === 2"
          title-key="sections.promo.taipei.title"
          bodyPadding="52px 80px 80px"
          textBgColor="#28B590"
          bg-color="#f1f9f5"
        >
          <div class="promo-section__card__group"></div>
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
import { useTabs } from '@/data/const'

const { xinyiList } = useTransport()

const activeTab = ref(0)
const tabs = computed(() => useTabs())
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.transportation-section {
  padding-top: 100px;
  padding-bottom: 240px;
  background-color: vars.$bg-green;
  &__card__group {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>
