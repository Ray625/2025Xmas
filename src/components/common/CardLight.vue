<template>
  <div class="light-card" :style="styleVars">
    <img
      v-if="lightImg"
      :src="lightImg"
      alt="light_img"
      class="light-card__img"
      loading="lazy"
    />
    <img
      v-if="decorate === 'clip'"
      :src="iconClip"
      alt="decorate"
      class="light-card__clip"
      loading="lazy"
    />
    <div class="light-card__name__group">
      <div v-if="lightName" class="light-card__name">
        {{ lightName }}
      </div>
      <div v-if="shopName" class="light-card__shop__name">
        {{ shopName }}
      </div>
    </div>
    <div class="light-card__divider"></div>
    <div class="light-card__detail">
      <div class="light-card__detail__text">
        <img :src="iconMap" alt="icon_map" class="light-card__detail__icon" />
        <span>{{ loaction }}</span>
      </div>
      <div class="light-card__detail__text">
        <img :src="iconTime" alt="icon_time" class="light-card__detail__icon" />
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import checker from "@/assets/backgrounds/checker.png";
import iconClip from "@/assets/icon/card_light_clip.svg";
import iconMap from "@/assets/icon/map_solid.svg";
import iconTime from "@/assets/icon/date.svg";

const { t } = useI18n();

const props = withDefaults(
  defineProps<{
    lightKey?: string;
    lightImg?: string;
    shopKey?: string;
    locationKey?: string;
    timeKey?: string;
    decorate?: string;
  }>(),
  {
    lightImg: checker,
    decorate: "clip",
  }
);

const lightName = computed(() => (props.lightKey ? t(props.lightKey) : ""));
const shopName = computed(() => (props.shopKey ? t(props.shopKey) : ""));
const loaction = computed(() =>
  props.locationKey ? t(props.locationKey) : ""
);
const time = computed(() => (props.timeKey ? t(props.timeKey) : ""));

const styleVars = computed(() => ({
  "--card-top-margin": props.decorate === "clip" ? "56.4px" : "0px",
}));
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.light-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  margin-top: var(--card-top-margin, 0);
  padding: 20px;
  box-shadow: 0px 0px 24px 0px #f4e19d;
  background-color: vars.$color-white;

  &__name {
    @include mixins.typography(20px, 26px, 700);
  }

  &__shop__name {
    @include mixins.typography(18px, 32px, 500);
  }

  &__img {
    width: 240px;
    max-width: 100%;
    height: auto;
  }

  &__clip {
    position: absolute;
    top: calc(var(--card-top-margin, 0) * -1);
    left: 50%;
    height: 82px;
    transform: translateX(-50%);
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #868686;
  }

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    &__text {
      display: flex;
      align-items: center;
      gap: 2px;
      @include mixins.typography(16px, 22px, 500);
    }

    &__icon {
      width: 20px;
      height: 20px;
    }
  }
}

@media (max-width: 960px) {
}
</style>
