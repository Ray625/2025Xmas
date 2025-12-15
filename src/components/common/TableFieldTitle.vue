<template>
  <div class="table-field" :style="styleVars" :class="{ flash: labelFor === 'flash' }">
    <p class="table-field__time">{{ t(`${eventData.date}`) }}</p>
    <p class="table-field__shop-name">{{ t(`${eventData.shop}`) }}</p>
    <p class="table-field__activity">{{ t(`${eventData.time}`) }}</p>
    <p class="table-field__location">{{ t(`${eventData.location}`) }}</p>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

type eventData = {
  time: string
  date: string
  shop: string
  location: string
}

const props = withDefaults(
  defineProps<{
    eventData: eventData
    borderRadius?: string
    hasRadius?: boolean
    bgColor?: string
    textColor?: string
    labelFor?: string
  }>(),
  {
    borderRadius: '20px',
    hasRadius: true,
    bgColor: '#FFF',
    textColor: '#000',
    labelFor: 'activity',
  },
)

const styleVars = computed(() => ({
  '--border-radius': props.hasRadius ? props.borderRadius : '0',
  '--background-color': props.bgColor,
  '--text-color': props.textColor,
}))
</script>
<style lang="scss" scoped>
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.table-field__time {
  @include mixins.typography-responsive(18px, 20px, 24px, 28px, 150%, 36px, 700, var(--text-color));
  white-space: pre-line;
}

.table-field__shop-name {
  @include mixins.typography-responsive(14px, 20px, 24px, 22px, 150%, 36px, 700, var(--text-color));
}

.table-field__activity {
  @include mixins.typography-responsive(16px, 20px, 24px, 22px, 150%, 36px, 700, var(--text-color));
}

.table-field__location {
  @include mixins.typography-responsive(14px, 20px, 24px, 22px, 150%, 36px, 700, var(--text-color));
}

.table-field {
  display: none;
}

@media (min-width: 1024px) {
  .table-field {
    display: grid;
    grid-template-columns: 220px 1fr 1.2fr 200px;
    column-gap: 20px;
    padding: 12px 20px;
    width: 100%;
    background-color: var(--background-color);
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    &.flash {
      grid-template-columns: 220px 1fr 200px 1.2fr;
    }
  }
}

@media (min-width: 1440px) {
  .table-field {
    display: grid;
    grid-template-columns: 240px 1fr 1.5fr 236px;
    column-gap: 20px;
    padding: 12px 20px;
    &.flash {
      grid-template-columns: 240px 1fr 200px 1.5fr;
    }
  }
}

@media (min-width: 1920px) {
  .table-field {
    display: grid;
    grid-template-columns: 284px 1fr 1.5fr 260px;
    column-gap: 20px;
    padding: 12px 20px;
    &.flash {
      grid-template-columns: 284px 1fr 200px 1.5fr;
    }
  }
}
</style>
