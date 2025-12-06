<template>
  <div class="transport-card">
    <div class="transport-card__title" @click="handleToggle">
      <p>{{ t(`${title}`) }}</p>
      <button
        class="transport-card__btn"
        :class="openToggle ? '' : 'open'"
        @click.stop="handleToggle"
      >
        <img :src="iconArrow" alt="icon arrow" />
      </button>
    </div>
    <div v-if="openToggle" class="transport-card__detail">
      <div class="transport-card__detail--left">
        <TagCar car="bus" />
        <div class="transport-card__detail__text">{{ t(`${transportList[0]}`) }}</div>
      </div>
      <div class="transport-card__detail--right">
        <TagCar car="MRT" />
        <div class="transport-card__detail__text">{{ t(`${transportList[1]}`) }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import iconArrow from '@/assets/icon/arrow_up_sm.svg'
import TagCar from '@/components/common/TagCar.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()

const { t } = useI18n()

const props = defineProps<{
  title: string
  transportList: string[]
  defaultOpen?: boolean | null
}>()

const openToggle = ref(props.defaultOpen ? true : !['sm', 'xs'].includes(breakpoint.value))

const handleToggle = () => (openToggle.value = !openToggle.value)
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.transport-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  background-color: #f1f9f5;
  padding: 12px;
  border-radius: 16px;

  &__title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    @include mixins.text-body(vars.$color-text-green);
  }

  &__btn {
    &.open {
      transform: rotate(180deg);
    }
  }

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &--left,
    &--right {
      flex: 1 1 0;
      display: flex;
      flex-direction: row;
      gap: 8px;
      height: fit-content;
    }
    &__text {
      white-space: pre-line;
      @include mixins.car-text;
    }
  }
}

@media (min-width: 768px) {
  .transport-card {
    padding: 24px;
  }
}

@media screen and (min-width: 1024px) {
  .transport-card {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0;

    &__title {
      padding: 12px 0;
      border-bottom: 2px solid vars.$color-text-green;
      &:hover {
        cursor: pointer;
      }
    }

    &__detail {
      flex-direction: row;
      gap: 40px;
      &--left,
      &--right {
        flex-direction: column;
        gap: 12px;
      }
    }
  }

  .transport-card__btn:hover {
    opacity: 0.8;
  }
}
</style>
