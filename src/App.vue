<template>
  <div id="top" class="page">
    <HeaderBar />
    <main class="intro">
      <div class="intro__body">
        <p>{{ t("intro.placeholder") }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "@/components/layout/HeaderBar.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<style scoped>
.intro {
  padding: 4rem 1rem;
  color: #fff;
}

.intro__body {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}
</style>
