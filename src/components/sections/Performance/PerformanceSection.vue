<template>
  <section class="performance-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="performance" class="mb-[55px]" />
        <img :src="performanceMap" alt="xinyi map" class="max-w-full" loading="lazy" />
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import performanceMap from '@/assets/img/section_09_event.png'
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.performance-section {
  padding-top: 56px;
  padding-bottom: 112px;
  background-color: vars.$bg-blue;
}
</style>
