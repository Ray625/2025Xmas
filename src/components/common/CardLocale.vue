<template>
  <div class="location-card">
    <div v-if="title" class="location-card__title">
      {{ t(`${title}`) }}
    </div>
    <div class="location-card__detail">
      <div class="location-card__detail__header">
        <div class="location-card__detail__header__col">
          <div
            v-for="location in locationList"
            class="location-card__detail__header__group"
          >
            <TagLocale v-if="location.shopKey" :shopKey="location.shopKey" />
            <div class="location-card__detail__header__location">
              <img :src="iconInfo" alt="info icon" />
              <p>{{ t(`${location.locationKey}`) }}</p>
            </div>
          </div>
        </div>
        <ButtonToggle
          v-model="openToggle"
          class="location-card__detail__header__btn"
        />
      </div>
      <div v-if="openToggle" class="location-card__detail__body">
        <slot name="detail" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TagLocale from "@/components/common/TagLocale.vue";
import ButtonToggle from "@/components/common/ButtonToggle.vue";
import iconInfo from "@/assets/icon/info.svg";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps<{
  title?: string;
  locationList: Record<string, string>[];
}>();

const openToggle = ref(true);
</script>
<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.location-card {
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
      position: relative;
      display: flex;
      align-items: center;
      &__col {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 24px;
        max-height: 144px;
        flex: 1 1 0;
      }
      &__group {
        display: flex;
        gap: 4px;
        align-items: center;
        min-height: 60px;
      }

      &__location {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        @include mixins.typography(18px, 32px, 700);
      }

      &__btn {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    &__body {
      white-space: pre-line;
      @include mixins.typography(18px, 32px, 500, #000);
    }
  }
}
</style>
