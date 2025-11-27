<template>
  <div class="card" :style="styleVars">
    <div v-if="cardTitle" class="card__title">
      {{ cardTitle }}
    </div>
    <div class="card__body">
      <div class="card__body__lights">
        <CardLight
          v-for="light in props.lights"
          :key="light.id ?? light.lightKey"
          :useStar="useStar"
          v-bind="light"
          :showTime="props.showTime"
          class="card__light card__light--sm"
          decorate="none"
        />
        <CardLight
          v-for="light in paginatedLights"
          :key="light.id ?? light.lightKey"
          :useStar="useStar"
          v-bind="light"
          :showTime="props.showTime"
          class="card__light card__light--lg"
        />
      </div>
    </div>

    <div class="card__pager" v-if="hasPagination">
      <button class="card__pager__btn" :disabled="currentPage === 1" @click="goPrev">
        <img :src="arrowLeft" alt="arrow" class="card__pager__btn__icon" />
      </button>
      <div class="card__pager__dots">
        <button
          v-for="page in totalPages"
          :key="page"
          class="card__pager__dot"
          :class="{ 'card__pager__dot--active': page === currentPage }"
          @click="currentPage = page"
        ></button>
      </div>
      <button class="card__pager__btn" :disabled="currentPage === totalPages" @click="goNext">
        <img :src="arrowRight" alt="arrow" class="card__pager__btn__icon" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import bg from '@/assets/img/section_04_pic-bg.png'
import CardLight from '@/components/common/CardLight.vue'
import arrowLeft from '@/assets/icon/arrow_page_left.svg'
import arrowRight from '@/assets/icon/arrow_page_right.svg'

type CardLightItem = {
  id?: string | number
  num?: number
  lightKey: string
  shopKey?: string
  locationKey?: string
  timeKey?: string
  bgColor?: string
  lightImg?: string
  decorate?: string
  letter?: string
  useStar?: boolean
  showTime?: boolean
}

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    titleKey?: string
    bodyPadding?: string
    lights?: CardLightItem[]
    pageSize?: number
    bodyMinHeight?: string
    useBg?: boolean
    useStar?: boolean
    bgColor?: string
    showTime?: boolean
  }>(),
  {
    titleKey: '',
    bodyPadding: '40px 72px',
    lights: () => [],
    pageSize: 8,
    bodyMinHeight: '520px',
    useBg: true,
    useStar: false,
    showTime: true,
  },
)

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ''))

const styleVars = computed(() => ({
  '--card-body-padding': props.bodyPadding,
  '--card-body-min-height': props.bodyMinHeight,
  '--page-size': props.pageSize,
  backgroundImage: props.useBg ? `url(${bg})` : 'none',
  backgroundColor: props.useBg ? '' : props.bgColor,
}))

const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(props.lights.length / props.pageSize)))

watch(
  () => [props.lights.length, props.pageSize],
  () => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = totalPages.value
    }
  },
  { immediate: true },
)

const paginatedLights = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize
  const end = start + props.pageSize
  return props.lights.slice(start, end)
})

const hasPagination = computed(() => props.lights.length > props.pageSize)

const goPrev = () => {
  if (currentPage.value > 1) currentPage.value -= 1
}

const goNext = () => {
  if (currentPage.value < totalPages.value) currentPage.value += 1
}
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.card {
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  padding-top: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &__title {
    @include mixins.stamp-card-title;
    text-shadow: 0 0 8px #0000004d;
    text-align: center;
    margin-bottom: 8px;
  }
  &__body {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__body__lights {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    min-width: fit-content;
    height: fit-content;
    padding: 24px 20px;
    .card__light {
      min-width: 256px;
      &--lg {
        display: none;
      }
      &--sm {
        display: flex;
      }
    }
  }

  &__pager {
    display: none;
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    gap: 28px;

    &__btn {
      width: 60px;
      height: 60px;
      border-radius: 999px;
      border: none;
      background: vars.$color-white;
      color: vars.$color-text-blue;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &__icon {
        margin: 0 auto;
        width: 32px;
        height: 32px;
      }
    }

    &__dots {
      display: flex;
      gap: 28px;
    }

    &__dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      border: none;
      background: rgba(255, 255, 255, 0.5);
      cursor: pointer;

      &--active {
        background: vars.$color-white;
      }
    }
  }
}

@media (min-width: 1024px) {
  .card {
    width: 100%;
    height: fit-content;
    border-radius: 16px;
    padding: var(--card-body-padding, 40px 72px);
    &__body {
      overflow-x: auto;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .card__pager {
    display: flex;
  }

  .card__body__lights {
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(calc(var(--page-size) / 2), minmax(256px, 1fr));
    column-gap: 32px;
    row-gap: 12px;
    min-height: var(--card-body-min-height, 520px);

    .card__light {
      min-width: 268px;
      height: fit-content;
      &--lg {
        display: flex;
      }
      &--sm {
        display: none;
      }
    }
  }
}

@media (min-width: 1920px) {
  .card__body__lights {
    grid-template-columns: repeat(calc(var(--page-size) / 2), minmax(280px, 1fr));
  }
}
</style>
