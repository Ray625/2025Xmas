<template>
  <div class="section-title__container" :style="styleVars">
    <div class="section-title">
      <img
        v-if="showLeftIcon"
        :src="leftIcon"
        alt=""
        class="section-title__decor section-title__decor--left"
      />
      <h3 class="section-title__text" :id="presetConfig.id">
        {{ displayTitle }}
      </h3>
      <span class="section-title__text section-title__text--blur">
        {{ displayTitle }}
      </span>
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
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import leftIcon from "@/assets/icon/title_left.svg"
import rightIcon from "@/assets/icon/title_right.svg"
import { navConfig } from "@/data/navigation"

const titlePresets = navConfig.reduce(
  (acc, item) => {
    const id = item.href.replace("#", "")
    acc[item.key] = {
      id,
      titleKey: item.titleKey,
      bgColor: item.color,
    }
    return acc
  },
  {} as Record<
    (typeof navConfig)[number]["key"],
    {
      id: string
      titleKey: string
      bgColor: string
    }
  >
)

type TitlePresetKey = keyof typeof titlePresets

const props = withDefaults(
  defineProps<{
    preset: TitlePresetKey
    bgColor?: string
    textColor?: string
    width?: string | number
    height?: string | number
    outWidth?: string | number
    outHeight?: string | number
    showDecor?: boolean
  }>(),
  {
    width: "453px",
    height: "86px",
    outWidth: "560px",
    outHeight: "132px",
    showDecor: true,
  }
)

const { t } = useI18n()

const normalize = (value: string | number) =>
  typeof value === "number" ? `${value}px` : value

const presetConfig = computed(() => titlePresets[props.preset])

const styleVars = computed(() => {
  const config = presetConfig.value
  const bg = config.bgColor

  return {
    "--section-title-bg": bg,
    "--section-title-width": normalize(props.width),
    "--section-title-height": normalize(props.height),
    "--section-title-outWidth": normalize(props.outWidth),
    "--section-title-outHeight": normalize(props.outHeight),
  }
})

const showLeftIcon = computed(() => props.showDecor)
const showRightIcon = computed(() => props.showDecor)

const displayTitle = computed(() => t(presetConfig.value.titleKey))
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
    margin-left: auto;
    margin-right: auto;
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
