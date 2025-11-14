<template>
  <div class="card" :style="styleVars">
    <div v-if="cardTitle" class="card__title">
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
import bg from "@/assets/backgrounds/stamp_bg.png";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    titleKey?: string;
    bodyPadding?: string;
  }>(),
  {
    titleKey: "",
    bodyPadding: "40px 72px",
  }
);

const cardTitle = computed(() => (props.titleKey ? t(props.titleKey) : ""));

const styleVars = computed(() => ({
  "--card-body-padding": props.bodyPadding,
  backgroundImage: `url(${bg})`,
}));
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.card {
  width: 100%;
  height: fit-content;
  border-radius: 16px;
  padding: var(--card-body-padding, 40px 72px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &__title {
    @include mixins.typography(38px, 100%, 700, vars.$color-white);
    text-shadow: 0 0 8px #0000004d;
    text-align: center;
  }
  &__body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 12px;
  }
}

@media (max-width: 960px) {
  .card {
    padding: 0 1.5rem 2rem;
    border-radius: 16px;
  }
}
</style>
