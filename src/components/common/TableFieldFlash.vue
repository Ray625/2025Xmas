<template>
  <div class="table-field" :style="styleVars">
    <p class="table-field__time">{{ t(`${eventData.date}`) }}</p>
    <p class="table-field__shop-name">{{ t(`${eventData.shop}`) }}</p>
    <p class="table-field__activity">{{ t(`${eventData.time}`) }}</p>
    <p class="table-field__location">{{ t(`${eventData.location}`) }}</p>
  </div>
  <div class="table-field-mobile">
    <p class="table-field__time">{{ t(`${eventData.date}`) }}</p>
    <div class="table-field_body">
      <div class="table-field_row">
        <TagActivity labelKey="common.flashTag.shop" />
        <p class="table-field__shop-name">{{ t(`${eventData.shop}`) }}</p>
      </div>
      <div class="table-field_row">
        <TagActivity labelKey="common.flashTag.time" bg-color="#FFB8C3" />
        <p class="table-field__activity">{{ t(`${eventData.time}`) }}</p>
      </div>
      <div class="table-field_row">
        <TagActivity labelKey="common.flashTag.location" bg-color="#FFB8C3" />
        <p class="table-field__location">{{ t(`${eventData.location}`) }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TagActivity from '@/components/common/TagActivity.vue'
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
  }>(),
  {
    borderRadius: '20px',
    hasRadius: false,
    bgColor: '#FFF',
    textColor: '#000',
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

.table-field-mobile {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 12px;
  gap: 8px;
  background-color: var(--background-color);
  &:not(:last-child) {
    border-bottom: 1px solid #e6e8f2;
  }
}

.table-field_body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
}

.table-field_row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.table-field__time {
  @include mixins.typography-responsive(18px, 20px, 24px, 28px, 150%, 36px, 700, var(--text-color));
  white-space: pre-line;
}

.table-field__shop-name {
  @include mixins.typography-responsive(16px, 20px, 24px, 22px, 150%, 36px, 700, var(--text-color));
}

.table-field__activity {
  @include mixins.typography-responsive(14px, 20px, 24px, 22px, 150%, 36px, 700, var(--text-color));
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
    grid-template-columns: 220px 1fr 200px 1.2fr;
    column-gap: 20px;
    padding: 12px 20px;
    width: 100%;
    background-color: var(--background-color);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  .table-field-mobile {
    display: none;
  }
}

@media (min-width: 1440px) {
  .table-field {
    display: grid;
    grid-template-columns: 240px 1fr 200px 1.5fr;
    column-gap: 20px;
    padding: 12px 20px;
  }
}

@media (min-width: 1920px) {
  .table-field {
    display: grid;
    grid-template-columns: 284px 1fr 200px 1.5fr;
    column-gap: 20px;
    padding: 12px 20px;
  }
}
</style>
