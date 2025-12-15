<template>
  <div class="tag" :class="{ en: isEn }" :style="styleVars">{{ label }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isEn = computed(() => locale.value.startsWith('en'))

const props = withDefaults(
  defineProps<{
    labelKey?: string
    bgColor?: string
  }>(),
  {
    bgColor: '#FF8E9F',
  },
)

const label = computed(() => t(`${props.labelKey}`))

const styleVars = computed(() => ({
  '--bg-color': props.bgColor,
}))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 64px;
  height: fit-content;
  padding: 0 8px;
  border-radius: 4px;
  background-color: var(--bg-color);
  white-space: nowrap;
  @include mixins.typography(12px, 1.5, 700, vars.$color-white);
  &.en {
    margin-top: 2px;
    padding: 2px 8px;
    min-width: unset;
    align-self: flex-start;
    @include mixins.typography(10px, 1.5, 700, vars.$color-white);
  }
}
</style>
