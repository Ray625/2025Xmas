<template>
  <div
    class="section-title__container"
    :class="{ 'section-title-en__container': isEn }"
    :style="styleVars"
  >
    <div class="section-title" :class="{ 'section-title-en': isEn }">
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import leftIcon from '@/assets/icon/title_left.svg'
import rightIcon from '@/assets/icon/title_right.svg'
import { navConfig } from '@/data/navigation'

const titlePresets = navConfig.reduce(
  (acc, item) => {
    const id = item.href.replace('#', '')
    acc[item.key] = {
      id,
      titleKey: item.titleKey,
      bgColor: item.color,
    }
    return acc
  },
  {} as Record<
    (typeof navConfig)[number]['key'],
    {
      id: string
      titleKey: string
      bgColor: string
    }
  >,
)

type TitlePresetKey = keyof typeof titlePresets

const props = withDefaults(
  defineProps<{
    preset: TitlePresetKey
    bgColor?: string
    textColor?: string
    width?: string | number
    height?: string | number
    smWidth?: string | number
    smHeight?: string | number
    lgWidth?: string | number
    lgHeight?: string | number
    smOutWidth?: string | number
    smOutHeight?: string | number
    lgOutWidth?: string | number
    lgOutHeight?: string | number
    outWidth?: string | number
    outHeight?: string | number
    showDecor?: boolean
  }>(),
  {
    smWidth: '276px',
    smHeight: '52px',
    lgWidth: '364px',
    lgHeight: '72px',
    width: '453px',
    height: '86px',
    smOutWidth: '350px',
    smOutHeight: '94px',
    lgOutWidth: '450px',
    lgOutHeight: '120px',
    outWidth: '560px',
    outHeight: '132px',
    showDecor: true,
  },
)

const { t, locale } = useI18n()
const isEn = computed(() => locale.value.startsWith('en'))

const normalize = (value: string | number) => (typeof value === 'number' ? `${value}px` : value)

const presetConfig = computed(() => titlePresets[props.preset])

const styleVars = computed(() => {
  const config = presetConfig.value
  const bg = config.bgColor

  return {
    '--section-title-bg': bg,
    '--section-title-width-sm': normalize(props.smWidth),
    '--section-title-height-sm': normalize(props.smHeight),
    '--section-title-width-lg': normalize(props.lgWidth),
    '--section-title-height-lg': normalize(props.lgHeight),
    '--section-title-width': normalize(props.width),
    '--section-title-height': normalize(props.height),
    '--section-title-outWidth-sm': normalize(props.smOutWidth),
    '--section-title-outHeight-sm': normalize(props.smOutHeight),
    '--section-title-outWidth-lg': normalize(props.lgOutWidth),
    '--section-title-outHeight-lg': normalize(props.lgOutHeight),
    '--section-title-outWidth': normalize(props.outWidth),
    '--section-title-outHeight': normalize(props.outHeight),
  }
})

const showLeftIcon = computed(() => props.showDecor)
const showRightIcon = computed(() => props.showDecor)

const displayTitle = computed(() => t(presetConfig.value.titleKey))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.section-title {
  width: var(--section-title-width-sm, var(--section-title-width-lg, var(--section-title-width)));
  height: var(
    --section-title-height-sm,
    var(--section-title-height-lg, var(--section-title-height))
  );
  background-color: var(--section-title-bg);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @include mixins.typography(30px, 100%, 700, vars.$color-white);

  &__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--section-title-outWidth-sm);
    height: var(--section-title-outHeight-sm);
    margin-left: auto;
    margin-right: auto;
  }
}

.section-title-en {
  @include mixins.typography(24px, 100%, 700, vars.$color-white);
}

.section-title__decor {
  position: absolute;
  transform: translateY(-50%);
  height: auto;
}

.section-title__text {
  margin: 0;
  padding: 0;
  white-space: pre-line;

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

.section-title__decor--left {
  top: 49%;
  width: 88px;
  left: -10px;
}

.section-title__decor--right {
  top: 51%;
  width: 82px;
  right: 0;
}

@media (min-width: 1024px) {
  .section-title {
    width: var(--section-title-width-lg);
    height: var(--section-title-height-lg);
    @include mixins.typography(36px, 100%, 700, vars.$color-white);
  }
  .section-title-en {
    @include mixins.typography(28px, 100%, 700, vars.$color-white);
  }

  .section-title__container {
    width: var(--section-title-outWidth-lg);
    height: var(--section-title-outHeight-lg);
  }

  .section-title__decor--left {
    top: 49%;
    width: 100px;
    left: -12px;
  }

  .section-title__decor--right {
    top: 51%;
    width: 98px;
    right: 0;
  }
}

@media (min-width: 1920px) {
  .section-title {
    width: var(--section-title-width);
    height: var(--section-title-height);
    @include mixins.typography(38px, 100%, 700, vars.$color-white);
  }

  .section-title__container {
    width: var(--section-title-outWidth);
    height: var(--section-title-outHeight);
  }

  .section-title__decor--left {
    top: 49%;
    width: 120px;
    left: -15px;
  }

  .section-title__decor--right {
    top: 51%;
    width: 112px;
    right: 2px;
  }
}
</style>
