<template>
  <div class="location-card">
    <div v-if="title" class="location-card__title">
      {{ t(`${title}`) }}
    </div>
    <div class="location-card__detail" :class="props.cardClass">
      <div class="location-card__detail__header">
        <div
          class="location-card__detail__header__col"
          :class="{ 'lot-location': locationList.length > 2 }"
        >
          <div
            v-for="location in locationList"
            class="location-card__detail__header__group"
            :class="{ 'lot-location': locationList.length > 2 }"
          >
            <TagLocale v-if="location.shopKey" :shopKey="location.shopKey" />
            <div
              v-if="['md', 'lg', 'xl'].includes(breakpoint)"
              class="location-card__detail__header__location"
            >
              <img :src="iconInfo" alt="info icon" />
              <p>{{ t(`${location.locationKey}`) }}</p>
            </div>
          </div>
          <div
            v-if="['xs', 'sm'].includes(breakpoint) && props.locationList[0]?.locationKey"
            class="location-card__detail__header__location"
          >
            <img :src="iconInfo" alt="info icon" />
            <p v-if="props.locationList.length > 0">
              {{ t(`${props.locationList[0] && props.locationList[0].locationKey}`) }}
            </p>
          </div>
        </div>
        <ButtonToggle
          v-if="showBtb"
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
import TagLocale from '@/components/common/TagLocale.vue'
import ButtonToggle from '@/components/common/ButtonToggle.vue'
import iconInfo from '@/assets/icon/info.svg'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()

const { t } = useI18n()

const props = withDefaults(
  defineProps<{
    title?: string
    locationList?: Record<string, string>[]
    cardClass?: string
    defaultOpen?: boolean
    showBtb?: boolean
  }>(),
  {
    title: '',
    locationList: () => [],
    showBtb: true,
  },
)

// const openToggle = ref(props.defaultOpen ? true : !['sm', 'xs'].includes(breakpoint.value))

const openToggle = ref(true)
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.location-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  &__title {
    width: 100%;
    padding: 12px 32px;
    border-bottom: 2px solid vars.$color-text-blue;
    @include mixins.typography(32px, 100%, 700);
  }

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 12px;
    background-color: #ecf4f9;
    border-radius: 16px;
    &__header {
      position: relative;
      display: flex;
      align-items: center;
      &__col {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        flex: 1 1 0;
      }
      &__group {
        display: flex;
        gap: 4px;
        align-items: flex-start;
      }

      &__location {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0;
        @include mixins.typography-responsive;
      }

      &__btn {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    &__body {
      white-space: pre-line;
      @include mixins.locale-card-text;
    }
  }
}

@media (min-width: 768px) {
  .location-card {
    &__detail {
      padding: 24px 32px 32px;
    }
  }

  .location-card__detail__header__location {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    @include mixins.text-note-lg(vars.$color-text-blue);
  }
}

@media (min-width: 1024px) {
  .location-card__detail__header__col {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    row-gap: 12px;
    flex: 1 1 0;
  }

  .location-card__detail__header__group {
    align-items: center;
    min-height: 60px;
  }
}

@media (min-width: 1440px) {
  .location-card__detail__header__col.lot-location {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 12px;
    flex: 1 1 0;
    max-height: 240px;
  }

  .location-card__detail__header__group.lot-location {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (min-width: 1920px) {
  .location-card__detail__header__col.lot-location {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 24px;
    max-height: 144px;
    flex: 1 1 0;
  }

  .location-card__detail__header__group.lot-location {
    flex-direction: row;
    align-items: center;
  }
}
</style>
