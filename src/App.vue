<template>
  <div id="top" class="page">
    <Pop v-if="!isEn" :visible="openPopup" @close="() => (openPopup = false)" />
    <HeaderBar v-if="['xl'].includes(breakpoint)" />
    <HeaderBar v-if="['lg'].includes(breakpoint) && !isEn" />
    <HeaderBarMobile v-if="['sm', 'md', 'xs'].includes(breakpoint)" />
    <HeaderBarMobile v-if="['lg'].includes(breakpoint) && isEn" />
    <HeroBanner v-if="breakpoint !== 'xs'" />
    <HeroBannerMobile v-if="['xs'].includes(breakpoint)" />
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
import HeroBannerMobile from '@/components/sections/HeroBannerMobile.vue'
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
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import Pop from '@/components/common/Pop.vue'

const { locale } = useI18n()
const { breakpoint } = useViewport()

const openPopup = ref(true)

const isEn = computed(() => locale.value.startsWith('en'))
</script>
