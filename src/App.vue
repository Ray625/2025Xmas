<template>
  <div id="top" class="page">
    <HeaderBar v-if="['xl', 'lg'].includes(breakpoint)" />
    <HeaderBarMobile v-if="['sm', 'md', 'xs'].includes(breakpoint)" />
    <HeroBanner />
    <RaffleSection />
    <PromoSection />
    <LightsSection />
    <LandmarkSection />
    <PerformanceSection />
    <MediaSection />
    <TransportationSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/layout/HeaderBar.vue'
import HeaderBarMobile from '@/components/layout/HeaderBarMobile.vue'
import HeroBanner from '@/components/sections/HeroBanner.vue'
import RaffleSection from '@/components/sections/Raffle/RaffleSection.vue'
import PromoSection from '@/components/sections/Promo/PromoSection.vue'
import LightsSection from '@/components/sections/Lights/LightsSection.vue'
import LandmarkSection from '@/components/sections/Landmark/LandmarkSection.vue'
import PerformanceSection from '@/components/sections/Performance/PerformanceSection.vue'
import MediaSection from '@/components/sections/Media/MediaSection.vue'
import TransportationSection from '@/components/sections/Transportation/TransportationSection.vue'
import ContactSection from '@/components/sections/Contact/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'

import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()
</script>
