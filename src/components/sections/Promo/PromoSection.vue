<template>
  <section class="promo-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="promo" class="mb-[100px]" />
        <SectionTabs v-model="activeTab" :tabs="promoTabs" />
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Container from "@/components/layout/Container.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import SectionTabs from "@/components/common/SectionTabs.vue";
import { promoTabs } from "./const";

const activeTab = ref(0);
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
