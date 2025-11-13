<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <div
      v-if="cardTitle"
      class="card__title"
      :style="{ backgroundColor: textBgColor }"
    >
      {{ cardTitle }}
    </div>
    <div class="card__body" :style="{ padding: bodyPadding }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = withDefaults(
  defineProps<{
    textBgColor?: string;
    bgColor?: string;
    titleKey?: string;
    bodyPadding?: string;
  }>(),
  {
    textBgColor: "#3277E1",
    bgColor: "#fff",
    titleKey: "",
    bodyPadding: "75px 80px 80px",
  }
);

const { t } = useI18n();

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ""));
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;

.card {
  width: 100%;
  height: fit-content;
  border-radius: 12px 12px 40px 40px;
  &__title {
    border-radius: 12px 12px 0 0;
    font-size: 32px;
    line-height: 100%;
    font-weight: 700;
    text-align: center;
    color: vars.$color-white;
    padding: 15px;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--card-body-padding, 75px 80px 80px);
  }
}

@media (max-width: 960px) {
  .card {
    padding: 0 1.5rem 2rem;
    border-radius: 16px;
  }
}
</style>
