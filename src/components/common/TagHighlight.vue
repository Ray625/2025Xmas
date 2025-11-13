<template>
  <div class="tag-highlight" :style="styleVars">
    <span v-if="icon" class="tag-highlight__icon">
      <img :src="icon" alt="icon" />
    </span>
    <span class="tag-highlight__text">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    icon?: string;
    textColor?: string;
  }>(),
  {
    icon: "",
    textColor: "#5E4FD4",
  }
);

const styleVars = computed(() => ({
  "--tag-highlight-color": props.textColor,
}));
</script>

<style scoped lang="scss">
.tag-highlight {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 60px;
  width: fit-content;
  padding: 12px 24px 12px 16px;
  border-radius: 8px;
  font-size: 24px;
  line-height: 36px;
  font-weight: 700;
  color: var(--tag-highlight-color, #5e4fd4);
  outline: 2px solid var(--tag-highlight-color, #5e4fd4);
  outline-offset: -2px;
}

.tag-highlight__icon img {
  width: 24px;
  height: 24px;
}
</style>
