<template>
  <section class="promo-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="promo" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="tabs" class="mb-[88px]" />
        <Card
          v-if="activeTab === 0"
          title-key="sections.promo.xinyi.title"
          bodyPadding="40px"
        >
          <div class="flex flex-col gap-8 w-full">
            <!-- 台北101 -->
            <CardLocale locationKey="sections.promo.xinyi.taipei101.locale">
              <template #title>
                {{ t("sections.promo.xinyi.taipei101.title") }}
              </template>
              <template #detail> 123 </template>
            </CardLocale>
            <!-- 微風 -->
            <CardLocale
              shopKey="sections.promo.xinyi.breeze.title"
              locationKey="sections.promo.xinyi.breeze.locale"
              :showBtn="true"
            >
              <template #title>
                {{ t("sections.promo.xinyi.breeze.title") }}
              </template>
              <template #detail> 123 </template>
            </CardLocale>
          </div>
        </Card>
        <Card
          v-if="activeTab === 1"
          title-key="sections.promo.eastern.title"
          bodyPadding="40px"
        >
          <div class="flex flex-col w-full"></div>
        </Card>
        <Card
          v-if="activeTab === 2"
          title-key="sections.promo.taipei.title"
          bodyPadding="40px"
        >
          <div class="flex flex-col w-full"></div>
        </Card>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import Container from "@/components/layout/Container.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import SectionTabs from "@/components/common/SectionTabs.vue";
import Card from "@/components/common/Card.vue";
import CardLocale from "@/components/common/CardLocale.vue";
import { useI18n } from "vue-i18n";
import { usePromoTabs } from "@/components/sections/Promo/const";

const { t } = useI18n();

const activeTab = ref(0);
const tabs = computed(() => usePromoTabs());
</script>
<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.promo-section {
  padding-top: 100px;
  padding-bottom: 240px;
  background-color: vars.$bg-green;
}
</style>
