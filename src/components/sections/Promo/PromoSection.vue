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
            <CardLocale
              :title="xinyiList.taipei101.title"
              :locationList="xinyiList.taipei101.locationList"
            >
              <template #detail>
                <div class="">
                  {{ t("sections.promo.xinyi.taipei101.body") }}
                </div>
              </template>
            </CardLocale>
            <!-- 微風 -->
            <CardLocale
              :title="xinyiList.breeze.title"
              :locationList="xinyiList.breeze.locationList"
            >
              <template #detail>
                <div class=""></div>
              </template>
            </CardLocale>
            <CardLocale
              :title="xinyiList.eslite.title"
              :locationList="xinyiList.eslite.locationList"
            >
              <template #detail>
                <div class=""></div>
              </template>
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

const xinyiList = {
  taipei101: {
    title: "sections.promo.xinyi.taipei101.title",
    locationList: [
      {
        locationKey: "sections.promo.xinyi.taipei101.location",
      },
    ],
  },
  breeze: {
    title: "sections.promo.xinyi.breeze.title",
    locationList: [
      {
        shopKey: "sections.promo.xinyi.breeze.shop",
        locationKey: "sections.promo.xinyi.breeze.location",
      },
    ],
  },
  eslite: {
    title: "sections.promo.xinyi.eslite.title",
    locationList: Array.from({ length: 4 }, (_, index) => {
      const suffix = index === 0 ? "" : index;
      return {
        shopKey: `sections.promo.xinyi.eslite.shop${suffix}`,
        locationKey: `sections.promo.xinyi.eslite.location${suffix}`,
      };
    }),
  },
};
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
