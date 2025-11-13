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
import { computed } from "vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    textBgColor?: string
    bgColor?: string
    bodyPadding?: string
    titleKey?: string
    iconLeft?: string
    iconRight?: string
  }>(),
  {
    textBgColor: "#3277E1",
    bgColor: "#fff",
    bodyPadding: "32px",
    cardHeight: "fit-content",
  }
)

const styleVars = computed(() => ({
  backgroundColor: props.bgColor,
  "--card-body-padding": props.bodyPadding,
}))

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ""))
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;

.card {
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: var(--card-body-padding, 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  &__title {
    display: flex;
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    text-align: center;
    color: vars.$color-white;
    padding: 12px;
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

@media (max-width: 960px) {
  .card {
    padding: 0 1.5rem 2rem;
    border-radius: 16px;
  }
}
</style>
