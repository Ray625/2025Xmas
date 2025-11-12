<template>
  <div class="section-title" :style="styleVars">
    <img
      v-if="showLeftIcon"
      :src="leftIcon"
      alt=""
      class="section-title__decor section-title__decor--left"
    />
    <span class="section-title__text">{{ title }}</span>
    <span class="section-title__text section-title__text--blur">{{
      title
    }}</span>
    <img
      v-if="showRightIcon"
      :src="rightIcon"
      alt=""
      class="section-title__decor section-title__decor--right"
    />
  </div>
</template>

<script setup lang="ts">
import leftIcon from "@/assets/icon/title_left.svg";
import rightIcon from "@/assets/icon/title_right.svg";

const props = withDefaults(
  defineProps<{
    title: string;
    bgColor?: string;
    width?: string | number;
    height?: string | number;
    showDecor?: boolean;
  }>(),
  {
    bgColor: "#f9f9f9",
    width: "453px",
    height: "86px",
    showDecor: true,
  }
);

const normalize = (value: string | number) =>
  typeof value === "number" ? `${value}px` : value;

const styleVars = {
  "--section-title-bg": props.bgColor,
  "--section-title-width": normalize(props.width),
  "--section-title-height": normalize(props.height),
} as Record<string, string>;

const showLeftIcon = props.showDecor;
const showRightIcon = props.showDecor;
</script>

<style scoped lang="scss">
.section-title {
  position: relative;
  width: var(--section-title-width);
  height: var(--section-title-height);
  background-color: var(--section-title-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-align: center;
}

.section-title__decor {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 72px;
  height: auto;
}

.section-title__decor--left {
  left: -72px;
}

.section-title__decor--right {
  right: -72px;
}

@media (max-width: 768px) {
  .section-title {
    width: 100%;
    font-size: 1.75rem;
    padding: 0 1rem;
  }

  .section-title__decor {
    display: none;
  }
}
.section-title__text--blur {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  filter: blur(10px);
  opacity: 0.5;
  z-index: 0;
}
</style>
