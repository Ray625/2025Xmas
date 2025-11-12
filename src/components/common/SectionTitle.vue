<template>
  <div class="section-title__container" :style="styleVars">
    <div class="section-title">
      <img
        v-if="showLeftIcon"
        :src="leftIcon"
        alt=""
        class="section-title__decor section-title__decor--left"
      />
      <h3 class="section-title__text">{{ title }}</h3>
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
  </div>
</template>

<script setup lang="ts">
import leftIcon from "@/assets/icon/title_left.svg"
import rightIcon from "@/assets/icon/title_right.svg"

const props = withDefaults(
  defineProps<{
    title: string
    bgColor?: string
    width?: string | number
    height?: string | number
    outWidth?: string | number
    outHeight?: string | number
    showDecor?: boolean
  }>(),
  {
    bgColor: "#FF7628",
    width: "453px",
    height: "86px",
    outWidth: "560px",
    outHeight: "132px",
    showDecor: true,
  }
)

const normalize = (value: string | number) =>
  typeof value === "number" ? `${value}px` : value

const styleVars = {
  "--section-title-bg": props.bgColor,
  "--section-title-width": normalize(props.width),
  "--section-title-height": normalize(props.height),
  "--section-title-outWidth": normalize(props.outWidth),
  "--section-title-outHeight": normalize(props.outHeight),
} as Record<string, string>

const showLeftIcon = props.showDecor
const showRightIcon = props.showDecor
</script>

<style scoped lang="scss">
.section-title {
  width: var(--section-title-width);
  height: var(--section-title-height);
  background-color: var(--section-title-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 38px;
  line-height: 100%;
  font-weight: 700;
  letter-spacing: 0;
  text-align: center;
  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--section-title-outWidth);
    height: var(--section-title-outHeight);
  }
}

.section-title__decor {
  position: absolute;
  transform: translateY(-50%);
  height: auto;
}

.section-title__decor--left {
  top: 49%;
  width: 120px;
  left: -15px;
}

.section-title__decor--right {
  top: 51%;
  width: 112px;
  right: 0;
}

.section-title__text {
  margin: 0;
  padding: 0;

  &--blur {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    filter: blur(10px);
    opacity: 0.6;
    z-index: 1;
    pointer-events: none;
    user-select: none;
  }
}
</style>
