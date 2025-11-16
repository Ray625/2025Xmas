<template>
  <section class="lights-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="lights" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="mb-[88px]" />
        <Card v-if="activeTab === 0" title-key="sections.lights.xinyi.title" bodyPadding="40px">
          <div class="flex flex-col gap-8 w-full">
            <CardStamp
              :lights="xinyiLights"
              :page-size="8"
              bodyMinHeight="967px"
              :use-bg="false"
              :use-star="true"
            />
          </div>
        </Card>
        <Card
          v-if="activeTab === 1"
          textBgColor="#FF8E9F"
          title-key="sections.lights.eastern.title"
          bodyPadding="40px"
        >
          <div class="flex flex-col w-full"></div>
        </Card>
        <Card
          v-if="activeTab === 2"
          textBgColor="#5E4FD4"
          title-key="sections.lights.taipei.title"
          bodyPadding="40px"
        >
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
import CardStamp from '@/components/common/CardStamp.vue'
import { useI18n } from 'vue-i18n'
import { useLightsTabs, useLightsList } from '@/components/sections/Lights/const'

const { t } = useI18n()

const activeTab = ref(0)
const tabs = computed(() => useLightsTabs())
const { xinyiLights } = useLightsList()
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.lights-section {
  padding-top: 100px;
  padding-bottom: 240px;
  background-color: vars.$bg-blue;
}
</style>
