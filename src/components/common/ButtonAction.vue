<template>
  <button class="action-button" :style="styleVars" @click="$emit('click')">
    <span class="action-button__label">
      <slot />
    </span>
    <span class="action-button__icon normal">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.8 16.6L16.6 11.8L11.8 7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 11.8H16.6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <span class="action-button__icon hover">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.8 16.6L16.6 11.8L11.8 7"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 11.8H16.6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    bgColor?: string
    hasBorder?: boolean
  }>(),
  {
    bgColor: '#45B035',
    hasBorder: true,
  },
)

defineEmits<{
  click: []
}>()

const styleVars = computed(() => ({
  '--action-button-bg': props.bgColor,
  '--outline': props.hasBorder ? '2px solid #fff' : `2px solid ${props.bgColor}`,
}))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.action-button {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px 20px 16px 24px;
  background-color: var(--action-button-bg);
  border-radius: 40px;
  outline: var(--outline);
  outline-offset: -2px;
  transition: all 0.2s ease;
  cursor: pointer;

  &__label {
    @include mixins.light-card-name(vars.$color-white);
  }

  &__icon {
    width: 24px;
    height: 24px;
    color: var(--action-button-bg);
    transform: translate(0, 1px);
    &.hover {
      display: none;
    }
  }

  &:hover {
    background-color: #fff;
    outline-color: var(--action-button-bg);
    span {
      color: var(--action-button-bg);
    }
    span.hover {
      display: block;
      color: var(--action-button-bg);
    }
    span.normal {
      display: none;
    }
  }
}
</style>
