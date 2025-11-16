<template>
  <div class="locale-card">
    <div class="locale-card__title">
      <slot name="title" />
    </div>
    <div class="locale-card__detail">
      <div class="locale-card__detail__header">
        <TagLocale v-if="shopKey" :shopKey="shopKey" />
        <div class="locale-card__detail__header__location">
          <img :src="iconInfo" alt="info icon" />
          <p>{{ location }}</p>
        </div>
        <ButtonToggle v-model="openToggle" class="ml-auto" />
      </div>
      <div v-if="openToggle">
        <slot name="detail" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TagLocale from "@/components/common/TagLocale.vue";
import ButtonToggle from "@/components/common/ButtonToggle.vue";
import iconInfo from "@/assets/icon/info.svg";
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    shopKey?: string;
    locationKey?: string;
  }>(),
  {}
);

const openToggle = ref(false);

const location = computed(() => t(`${props.locationKey}`));
</script>
<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.locale-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  &__title {
    padding: 12px 32px;
    border-bottom: 2px solid vars.$color-text-blue;
    @include mixins.typography(32px, 100%, 700);
  }

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 32px 32px;
    background-color: #ecf4f9;
    border-radius: 16px;
    &__header {
      display: flex;
      gap: 4px;
      align-items: center;
      &__location {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        @include mixins.typography(18px, 32px, 700);
      }
    }
  }
}
</style>
