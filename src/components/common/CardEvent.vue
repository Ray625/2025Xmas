<template>
  <div class="card-event">
    <div v-if="eventData.title" class="card-event__title">{{ title }}</div>
    <div class="card-event__body">
      <div v-if="eventData.text" class="card-event__body__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  eventData: Record<string, string>;
}>();

const { t } = useI18n();

const title = computed(() => t(`${props.eventData.title}`));
const text = computed(() => t(`${props.eventData.text}`));
</script>
<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.card-event {
  display: flex;
  flex-direction: column;
  &__title {
    @include mixins.typography(18px, 32px, 700, #000);
  }
  &__body {
    &__text {
      white-space: pre-line;
    }
  }
}
</style>
