<template>
  <component
    :is="tag"
    class="mx-auto w-full px-4 sm:px-6 lg:px-10"
    :class="[maxClass]"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string;
    size?: "lg" | "xl" | "xxl" | "full";
  }>(),
  {
    tag: "div",
    size: "xl",
  }
);

const sizeMap: Record<typeof props.size, string> = {
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  xxl: "max-w-7xl",
  full: "max-w-none",
};

const maxClass = sizeMap[props.size];
</script>
