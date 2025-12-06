<template>
  <div class="light-card" :style="styleVars">
    <img v-if="lightImg" :src="lightImg" alt="light_img" class="light-card__img" loading="lazy" />
    <img
      v-if="decorate === 'clip'"
      :src="iconClip"
      alt="decorate"
      class="light-card__clip"
      loading="lazy"
    />
    <div class="light-card__name__group">
      <div
        v-if="lightName"
        class="light-card__name whitespace-pre-line"
        :class="{ 'small-name': props.smName }"
      >
        {{ lightName }}
      </div>
      <div
        v-if="shopName"
        class="light-card__shop__name whitespace-pre-line"
        :class="{ 'light-card__shop__name-en': isEn }"
      >
        {{ shopName }}
      </div>
    </div>
    <div class="light-card__divider"></div>
    <div class="light-card__detail">
      <div class="light-card__detail__group">
        <div class="light-card__detail__text">
          <img :src="iconMap" alt="icon_map" class="light-card__detail__icon" />
          <span class="whitespace-pre-line">{{ loaction }}</span>
        </div>
        <div v-if="props.showTime" class="light-card__detail__text">
          <img :src="iconTime" alt="icon_time" class="light-card__detail__icon" />
          <span class="whitespace-pre-line">{{ time }}</span>
        </div>
      </div>
      <div v-if="useStar && num" class="light-card__detail__star">{{ formattedNum }}</div>
      <div v-if="useStar && letter" class="light-card__detail__star">{{ letter }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import checker from '@/assets/mock/checker.png'
import iconClip from '@/assets/icon/card_light_clip.svg'
import iconMap from '@/assets/icon/map_solid.svg'
import iconTime from '@/assets/icon/date.svg'

const { t, locale } = useI18n()
const isEn = computed(() => locale.value.startsWith('en'))

const props = withDefaults(
  defineProps<{
    lightKey?: string
    lightImg?: string
    shopKey?: string
    locationKey?: string
    timeKey?: string
    decorate?: string
    useStar?: boolean
    num?: number
    letter?: string
    showTime?: boolean
    smName?: boolean
  }>(),
  {
    lightImg: checker,
    decorate: 'clip',
    useStar: true,
    showTime: true,
    smName: false,
  },
)

const lightName = computed(() => (props.lightKey ? t(props.lightKey) : ''))
const shopName = computed(() => (props.shopKey ? t(props.shopKey) : ''))
const loaction = computed(() => (props.locationKey ? t(props.locationKey) : ''))
const time = computed(() => (props.timeKey ? t(props.timeKey) : ''))
const formattedNum = computed(() => {
  if (props.num === undefined || props.num === null) return ''
  const numStr = String(props.num)
  return numStr.length === 1 ? `0${numStr}` : numStr.slice(0, 2)
})

const styleVars = computed(() => ({
  '--card-top-margin': props.decorate === 'clip' ? '56.4px' : '0px',
}))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.light-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: fit-content;
  max-width: 256px;
  border-radius: 4px;
  margin-top: var(--card-top-margin, 0);
  padding: 20px 20px 12px 20px;
  box-shadow: 0px 0px 24px 0px #f4e19d;
  background-color: vars.$color-white;

  &__name {
    @include mixins.light-card-name;
    &.small-name {
      @include mixins.light-card-shop-en;
    }
  }

  &__shop__name {
    @include mixins.light-card-shop;
    &-en {
      @include mixins.light-card-shop-en;
    }
  }

  &__img {
    width: 100%;
    max-width: 216px;
    height: auto;
    aspect-ratio: 240/176;
  }

  &__clip {
    position: absolute;
    top: calc(var(--card-top-margin, 0) * -1);
    left: 50%;
    height: 82px;
    transform: translateX(-50%);
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #868686;
  }

  &__detail {
    display: flex;
    flex-direction: row;

    &__group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    &__text {
      display: flex;
      align-items: center;
      gap: 2px;
      @include mixins.light-card-text;
    }

    &__icon {
      width: 20px;
      height: 20px;
    }

    &__star {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      width: 51px;
      min-width: 51px;
      aspect-ratio: 51/48;
      margin-left: auto;
      padding-top: 2px;
      background-image: url('@/assets/icon/star.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      @include mixins.typography(16px, 22px, 700, white);
    }
  }
}

@media (max-width: 1024px) {
  .light-card {
    max-width: 268px;

    &__img {
      max-width: 228px;
    }
  }
}

@media (max-width: 1920px) {
  .light-card {
    max-width: 280px;
    padding: 20px;
    &__img {
      max-width: 240px;
    }
  }
}
</style>
