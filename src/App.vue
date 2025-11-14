<template>
  <div id="top" class="page">
    <HeaderBar />
    <HeroBanner />
    <RaffleSection />
    <PromoSection />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from "@/components/layout/HeaderBar.vue";
import HeroBanner from "@/components/sections/HeroBanner.vue";
import RaffleSection from "@/components/sections/Raffle/RaffleSection.vue";
import PromoSection from "@/components/sections/Promo/PromoSection.vue";
</script>
