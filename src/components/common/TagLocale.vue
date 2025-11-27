<template>
  <div class="tag">{{ location }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    shopKey?: string
  }>(),
  {},
)

const location = computed(() => t(`${props.shopKey}`))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.tag {
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #001a7d;
  @include mixins.text-body(vars.$color-white);
}
</style>
