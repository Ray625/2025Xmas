<template>
  <div id="top" class="page">
    <HeaderBar />
    <HeroBanner />
    <RaffleSection />
    <PromoSection />
    <LightsSection />
    <LandmarkSection />
    <PerformanceSection />
    <MediaSection />
    <TransportationSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/layout/HeaderBar.vue'
import HeroBanner from '@/components/sections/HeroBanner.vue'
import RaffleSection from '@/components/sections/Raffle/RaffleSection.vue'
import PromoSection from '@/components/sections/Promo/PromoSection.vue'
import LightsSection from '@/components/sections/Lights/LightsSection.vue'
import LandmarkSection from '@/components/sections/Landmark/LandmarkSection.vue'
import PerformanceSection from '@/components/sections/Performance/PerformanceSection.vue'
import MediaSection from '@/components/sections/Media/MediaSection.vue'
import TransportationSection from '@/components/sections/Transportation/TransportationSection.vue'
import ContactSection from '@/components/sections/Contact/ContactSection.vue'
</script>
