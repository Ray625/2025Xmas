<template>
  <div class="card" :style="styleVars">
    <div
      v-if="cardTitle"
      class="card__title"
      :style="{ backgroundColor: textBgColor }"
    >
      {{ cardTitle }}
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

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

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ""));

const styleVars = computed(() => ({
  backgroundColor: props.bgColor,
  "--card-body-padding": props.bodyPadding,
}));
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.card {
  width: 100%;
  height: fit-content;
  border-radius: 12px 12px 40px 40px;
  &__title {
    padding: 15px;
    @include mixins.typography(32px, 100%, 700, vars.$color-white);
    text-align: center;
    border-radius: 12px 12px 0 0;
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
