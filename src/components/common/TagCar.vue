<template>
  <div class="tag" :style="styleVars">
    <img :src="props.car === 'bus' ? iconBus : iconMRT" alt="icon car" />
    <p>{{ car }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import iconBus from '@/assets/icon/car_bus.svg'
import iconMRT from '@/assets/icon/car_MRT.svg'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    car: 'bus' | 'MRT'
  }>(),
  {
    car: 'bus',
  },
)

const car = computed(() => (props.car === 'bus' ? t('common.car.bus') : t('common.car.MRT')))

const styleVars = computed(() => ({
  '--text-color': props.car === 'bus' ? '#E03A3E' : '#001A7D',
  '--bg-color': props.car === 'bus' ? '#F6C4C5' : '#CCD1E5',
}))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 6px 8px 12px;
  border-radius: 8px;
  background-color: var(--bg-color);
  @include mixins.typography(18px, 362px, 700, var(--text-color));
  img {
    width: 24px;
    max-width: 100%;
    aspect-ratio: 1/1;
  }
}
</style>
