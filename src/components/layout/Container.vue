<template>
  <component
    :is="tag"
    class="container-shell mx-auto w-full h-fit"
    :style="styleVars"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type SizePreset = "lg" | "xl" | "xxl" | "full";

const props = withDefaults(
  defineProps<{
    tag?: string;
    size?: SizePreset;
    maxWidth?: number | string;
    mdMaxWidth?: number | string;
    lgMaxWidth?: number | string;
    paddingX?: number | string;
    mdPaddingX?: number | string;
    lgPaddingX?: number | string;
  }>(),
  {
    tag: "div",
    size: "full",
  }
);

const presetMap: Record<SizePreset, string> = {
  lg: "64rem", // 1024px
  xl: "72rem", // 1152px
  xxl: "120rem", // 1920px
  full: "100%",
};

const normalizeSize = (value?: number | string) => {
  if (value === undefined || value === null || value === "") return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

const styleVars = computed(() => {
  const base = normalizeSize(props.maxWidth) ?? presetMap[props.size];
  const md = normalizeSize(props.mdMaxWidth);
  const lg = normalizeSize(props.lgMaxWidth);
  const padding = normalizeSize(props.paddingX) ?? "1rem";
  const paddingMd = normalizeSize(props.mdPaddingX);
  const paddingLg = normalizeSize(props.lgPaddingX);

  return {
    "--container-max": base,
    ...(md ? { "--container-max-md": md } : {}),
    ...(lg ? { "--container-max-lg": lg } : {}),
    "--container-padding": padding,
    ...(paddingMd ? { "--container-padding-md": paddingMd } : {}),
    ...(paddingLg ? { "--container-padding-lg": paddingLg } : {}),
  };
});
</script>

<style scoped>
.container-shell {
  max-width: var(--container-max, 72rem);
  padding-inline: var(--container-padding, 1rem);
}

@media (min-width: 768px) {
  .container-shell {
    max-width: var(--container-max-md, var(--container-max, 72rem));
    padding-inline: var(
      --container-padding-md,
      var(--container-padding, 1.5rem)
    );
  }
}

@media (min-width: 1024px) {
  .container-shell {
    max-width: var(
      --container-max-lg,
      var(--container-max-md, var(--container-max, 72rem))
    );
    padding-inline: var(
      --container-padding-lg,
      var(--container-padding-md, var(--container-padding, 2.5rem))
    );
  }
}
</style>
