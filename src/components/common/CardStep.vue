<template>
  <div class="card" :style="styleVars">
    <div class="card__title" :style="{ backgroundColor: textBgColor }">
      <div class="card__title__group">
        <span v-if="iconLeft" class="card__title__icon">
          <img :src="iconLeft" alt="icon" />
        </span>
        <p>{{ cardTitle }}</p>
        <span v-if="iconRight" class="card__title__icon">
          <img :src="iconRight" alt="icon" />
        </span>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    textBgColor?: string
    bgColor?: string
    bodyPadding?: string
    smBodyPadding?: string
    titleKey?: string
    iconLeft?: string
    iconRight?: string
  }>(),
  {
    textBgColor: '#3277E1',
    bgColor: '#fff',
    smBodyPadding: '16px 16px 54px',
    bodyPadding: '32px',
    cardHeight: 'fit-content',
  },
)

const styleVars = computed(() => ({
  backgroundColor: props.bgColor,
  '--card-body-padding': props.bodyPadding,
  '--card-body-padding-sm': props.smBodyPadding,
}))

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ''))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.card {
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: var(--card-body-padding-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  &__title {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    padding: 12px;
    @include mixins.text-title;
    &__group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: fit-content;
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
  }
}

@media (min-width: 1024px) {
  .card {
    padding: var(--card-body-padding, 32px);
  }
}

@media (min-width: 1920px) {
  .card {
    padding: var(--card-body-padding, 32px);
  }
}
</style>
