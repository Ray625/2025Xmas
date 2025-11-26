<template>
  <div class="tag" :style="styleVars">
    <img :src="props.car === 'bus' ? iconBus : iconMRT" alt="icon car" class="tag__img" />
    <p class="whitespace-nowrap">{{ car }}</p>
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

const car = computed(() => (props.car === 'bus' ? t('common.car.bus') : t('common.car.mrt')))

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
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: fit-content;
  height: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(--bg-color);
  @include mixins.car-tag-color(var(--text-color));
  img {
    display: none;
  }
}

@media (min-width: 1024px) {
  .tag {
    gap: 4px;
    padding: 6px 12px;
    border-radius: 6px;
    img {
      display: block;
      width: 100%;
      max-width: 18px;
      aspect-ratio: 1/1;
    }
  }
}

@media (min-width: 1920px) {
  .tag {
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    img {
      max-width: 24px;
    }
  }
}
</style>
