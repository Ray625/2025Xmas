<!-- IconStrip.vue -->
<template>
  <div class="icon-strip" :style="stripStyle">
    <div v-for="(key, idx) in sequence" :key="idx" class="icon" :style="iconStyle(key)"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// 這裡用三個 SVG component，或直接用 <img :src="...">
import IconSnoopyL from '@/assets/icon/title-icon_snoopy_left.svg'
import IconSnoopyR from '@/assets/icon/title-icon_snoopy_right.svg'
import IconSnow from '@/assets/icon/title-icon_snow.svg'

const props = withDefaults(
  defineProps<{
    sequence?: Array<'left' | 'right' | 'snow'>
    gap?: string | number
    color?: string
  }>(),
  {
    sequence: () => ['snow', 'left', 'snow', 'right'],
    gap: '24px',
    color: '#90BFFF',
  },
)

const iconMap = { left: IconSnoopyL, right: IconSnoopyR, snow: IconSnow }

const stripStyle = computed(() => ({
  display: 'flex',
  gap: typeof props.gap === 'number' ? `${props.gap}px` : props.gap,
  alignItems: 'center',
}))

const iconStyle = (key: 'left' | 'right' | 'snow') => {
  const size =
    key === 'snow'
      ? { w: '35px', h: '40px' }
      : key === 'left' || key === 'right'
        ? { w: '23px', h: '32px' }
        : { w: '24px', h: '24px' }

  const maskUrl = `url("${iconMap[key]}")`

  return {
    width: size.w,
    height: size.h,
    backgroundColor: props.color,
    display: 'block',
    maskImage: maskUrl,
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    maskSize: 'contain',
    maskType: 'alpha' as const,
    WebkitMaskImage: maskUrl,
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    WebkitMaskSize: 'contain',
  }
}
</script>

<style scoped>
.icon {
  flex: 0 0 auto;
}
</style>
