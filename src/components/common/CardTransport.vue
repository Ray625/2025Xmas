<template>
  <div class="transport-card">
    <div class="transport-card__title">
      <p>{{ t(`${title}`) }}</p>
      <button class="transport-card__btn" :class="openToggle ? '' : 'open'" @click="handleToggle">
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

const { t } = useI18n()

defineProps<{
  title: string
  transportList: string[]
}>()

const openToggle = ref(true)

const handleToggle = () => (openToggle.value = !openToggle.value)
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.transport-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  background-color: #f1f9f5;

  &__title {
    display: flex;
    padding: 12px 0;
    border-bottom: 2px solid vars.$color-text-green;
    @include mixins.typography(24px, 36px, 700, vars.$color-text-green);
  }

  &__btn {
    margin-left: auto;
    &.open {
      transform: rotate(180deg);
    }
  }

  &__detail {
    display: flex;
    flex-direction: row;
    gap: 40px;
    &--left,
    &--right {
      flex: 1 1 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: fit-content;
    }
    &__text {
      white-space: pre-line;
      @include mixins.typography(24px, 36px, 700, #000);
    }
  }
}

@media screen and (min-width: 1024px) {
  .transport-card__btn:hover {
    opacity: 0.8;
  }
}
</style>
