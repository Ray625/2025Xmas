<template>
  <section class="hero-banner">
    <div
      class="hero-banner__image"
      :style="{ backgroundImage: `url(${kvDesktop})` }"
    ></div>
  </section>
</template>
<script setup lang="ts">
import kvDesktop from "@/assets/kv/kv_desktop.png";
</script>

<style scoped lang="scss">
.hero-banner {
  position: relative;
  aspect-ratio: 1920 / 1080;
  width: 100%;
}

.hero-banner__image {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
}
</style>
