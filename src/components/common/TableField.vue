<template>
  <div class="table-field" :style="styleVars">
    <p class="table-field__time">{{ t(`${event.time}`) }}</p>
    <p class="table-field__shop-name">{{ t(`${event.shop}`) }}</p>
    <p class="table-field__activity">{{ t(`${event.name}`) }}</p>
    <p class="table-field__location">{{ t(`${event.location}`) }}</p>
  </div>
  <div class="table-field-mobile">
    <p class="table-field__time">{{ t(`${event.time}`) }}</p>
    <div class="table-field_body">
      <div class="table-field_row">
        <TagActivity labelKey="common.activityTag.name" />
        <p class="table-field__activity">{{ t(`${event.name}`) }}</p>
      </div>
      <div class="table-field_row">
        <TagActivity labelKey="common.activityTag.shop" bg-color="#FFB8C3" />
        <p class="table-field__shop-name">{{ t(`${event.shop}`) }}</p>
      </div>
      <div class="table-field_row">
        <TagActivity labelKey="common.activityTag.location" bg-color="#FFB8C3" />
        <p class="table-field__location">{{ t(`${event.location}`) }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TagActivity from '@/components/common/TagActivity.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

type event = {
  time: string
  name: string
  shop: string
  location: string
}

const props = withDefaults(
  defineProps<{
    event: event
    borderRadius?: string
    hasRadius?: boolean
    bgColor?: string
  }>(),
  {
    borderRadius: '20px',
    hasRadius: false,
    bgColor: '#FFF',
  },
)

const styleVars = computed(() => ({
  '--border-radius': props.hasRadius ? props.borderRadius : '0',
  '--background-color': props.bgColor,
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
}

.table-field__time {
  @include mixins.typography-responsive(18px, 20px, 24px, 28px, 150%, 36px, 700, #000);
  white-space: pre-line;
}

.table-field__shop-name {
  @include mixins.typography-responsive(14px, 20px, 24px, 22px, 150%, 36px, 700, #000);
}

.table-field__activity {
  @include mixins.typography-responsive(16px, 20px, 24px, 22px, 150%, 36px, 700, #000);
}

.table-field__location {
  @include mixins.typography-responsive(14px, 20px, 24px, 22px, 150%, 36px, 700, #000);
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
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  .table-field-mobile {
    display: none;
  }
}

@media (min-width: 1440px) {
  .table-field {
    display: grid;
    grid-template-columns: 240px 1fr 1.5fr 236px;
    column-gap: 20px;
    padding: 12px 20px;
  }
}

@media (min-width: 1920px) {
  .table-field {
    display: grid;
    grid-template-columns: 284px 1fr 1.5fr 260px;
    column-gap: 20px;
    padding: 12px 20px;
  }
}
</style>
