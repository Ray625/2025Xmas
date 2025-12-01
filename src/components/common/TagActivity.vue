<template>
  <div class="tag" :style="styleVars">{{ label }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
  width: fit-content;
  padding: 0 8px;
  border-radius: 4px;
  background-color: var(--bg-color);
  @include mixins.typography(12px, 26px, 700, vars.$color-white);
}
</style>
