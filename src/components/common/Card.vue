<template>
  <div class="card" :style="styleVars">
    <div v-if="cardTitle" class="card__title" :style="{ backgroundColor: textBgColor }">
      {{ cardTitle }}
    </div>
    <div class="card__body">
      <slot />
    </div>
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
    titleKey?: string
    bodyPadding?: string
    smBodyPadding?: string
    mdBodyPadding?: string
    lgBodyPadding?: string
    xlBodyPadding?: string
  }>(),
  {
    textBgColor: '#3277E1',
    bgColor: '#fff',
    smBodyPadding: '24px 12px 12px',
    mdBodyPadding: '28px 20px',
    lgBodyPadding: '48px 48px',
    xlBodyPadding: '64px 64px',
    bodyPadding: '75px 80px 80px',
  },
)

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ''))

const styleVars = computed(() => ({
  '--card-body-padding': props.bodyPadding,
  ...(props.smBodyPadding ? { '--card-body-padding-sm': props.smBodyPadding } : {}),
  ...(props.mdBodyPadding ? { '--card-body-padding-md': props.mdBodyPadding } : {}),
  ...(props.lgBodyPadding ? { '--card-body-padding-lg': props.lgBodyPadding } : {}),
  ...(props.xlBodyPadding ? { '--card-body-padding-xl': props.xlBodyPadding } : {}),
  '--card-body-bg-color': props.bgColor,
}))
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.card {
  width: 100%;
  height: fit-content;
  border-radius: 8px 8px 24px 24px;
  &__title {
    padding: 8px;
    @include mixins.card-title(vars.$color-white);
    text-align: center;
    border-radius: 8px 8px 0 0;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: var(--card-body-padding-sm);
    background-color: var(--card-body-bg-color);
    border-radius: 0 0 24px 24px;
  }
}

@media (min-width: 768px) {
  .card {
    width: 100%;
    height: fit-content;
    border-radius: 10px 10px 28px 28px;
    &__title {
      padding: 10px;
      border-radius: 10px 10px 0 0;
    }
    &__body {
      padding: var(--card-body-padding-md);
      border-radius: 0 0 28px 28px;
    }
  }
}

@media (min-width: 1024px) {
  .card {
    width: 100%;
    height: fit-content;
    border-radius: 12px 12px 40px 40px;
    &__title {
      padding: 12px;
      border-radius: 12px 12px 0 0;
    }
    &__body {
      padding: var(--card-body-padding-lg);
      border-radius: 0 0 40px 40px;
    }
  }
}

@media (min-width: 1440px) {
  .card {
    width: 100%;
    height: fit-content;
    border-radius: 12px 12px 40px 40px;
    &__title {
      padding: 12px;
      border-radius: 12px 12px 0 0;
    }
    &__body {
      padding: var(--card-body-padding-xl);
      border-radius: 0 0 40px 40px;
    }
  }
}

@media (min-width: 1920px) {
  .card {
    width: 100%;
    height: fit-content;
    border-radius: 12px 12px 40px 40px;
    &__title {
      padding: 15px;
      border-radius: 12px 12px 0 0;
    }
    &__body {
      padding: var(--card-body-padding);
      border-radius: 0 0 40px 40px;
    }
  }
}
</style>
