<template>
  <button
    class="toggle-button"
    :class="{
      'toggle-button--expanded': modelValue,
      'toggle-button--hover': isHovered,
    }"
    @click="$emit('update:modelValue', !modelValue)"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28 21.3333L16 9.33331L4 21.3333"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isHovered = ref(false)
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;

.toggle-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 8px;
  outline: 2px solid vars.$color-text-blue;
  outline-offset: -2px;
  transition: background-color 0.2s ease;
  cursor: pointer;
  background-color: vars.$color-white;

  svg {
    width: 28px;
    height: 28px;
    color: vars.$color-text-blue;
    transform: rotate(180deg);
    transition: color 0.2s ease;
  }

  &--expanded {
    svg {
      transform: rotate(0);
    }
  }
}

@media (min-width: 1024px) {
  .toggle-button {
    width: 56px;
    height: 56px;

    &:hover {
      background-color: vars.$color-text-blue;
      color: vars.$color-white;
      svg {
        color: vars.$color-white;
      }
    }

    &--hover {
      svg {
        color: vars.$color-white;
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
}

@media (min-width: 1920px) {
  .toggle-button {
    width: 60px;
    height: 60px;

    svg {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
