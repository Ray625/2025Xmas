<template>
  <div class="section-tabs">
    <button
      v-for="(tab, index) in tabs"
      :key="tab.key ?? index"
      class="section-tabs__item"
      :class="{ 'section-tabs__item--active': index === currentIndex }"
      type="button"
      @click="handleClick(index)"
    >
      <span class="section-tabs__label">{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
interface TabItem {
  key?: string | number;
  label: string;
}

const props = defineProps<{
  tabs: TabItem[];
  modelValue?: number;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: number];
  select: [value: number];
}>();

const currentIndex = computed(() => props.modelValue ?? internalIndex.value);

const internalIndex = ref(0);

watch(
  () => props.modelValue,
  (val) => {
    if (val === undefined) return;
    internalIndex.value = val;
  },
  { immediate: true }
);

const handleClick = (index: number) => {
  internalIndex.value = index;
  emit("update:modelValue", index);
  emit("select", index);
};
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.section-tabs {
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
}

.section-tabs__item {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  max-width: 100%;
  height: 120px;
  padding: 24px;
  border-radius: 12px;
  outline: 3px solid vars.$color-white;
  outline-offset: -3px;
  background-color: transparent;
  @include mixins.typography(32px, 100%, 700, vars.$color-white);
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.section-tabs__item--active {
  background-color: vars.$color-white;
  color: vars.$color-text-blue;
}

@media (max-width: 960px) {
}
</style>
