<template>
  <div class="container-shell mx-auto w-full h-fit" :style="styleVars" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    maxWidth?: number | string
    smMaxWidth?: number | string
    mdMaxWidth?: number | string
    lgMaxWidth?: number | string
    xlMaxWidth?: number | string
  }>(),
  {
    smMaxWidth: '342px',
    mdMaxWidth: '640px',
    lgMaxWidth: '960px',
    xlMaxWidth: '1140px',
    maxWidth: '1440px',
  },
)

const normalizeSize = (value?: number | string) => {
  if (value === undefined || value === null || value === '') return undefined
  return typeof value === 'number' ? `${value}px` : value
}

const styleVars = computed(() => {
  const base = normalizeSize(props.maxWidth)
  const sm = normalizeSize(props.smMaxWidth)
  const md = normalizeSize(props.mdMaxWidth)
  const lg = normalizeSize(props.lgMaxWidth)
  const xl = normalizeSize(props.xlMaxWidth)

  return {
    '--container-max': base,
    ...(sm ? { '--container-max-sm': sm } : {}),
    ...(md ? { '--container-max-md': md } : {}),
    ...(lg ? { '--container-max-lg': lg } : {}),
    ...(xl ? { '--container-max-xl': xl } : {}),
  }
})
</script>

<style scoped>
.container-shell {
  max-width: var(--container-max-sm, var(--container-max, 72rem));
  padding: 0;
}

@media (min-width: 768px) {
  .container-shell {
    max-width: var(--container-max-md, var(--container-max-sm, var(--container-max, 72rem)));
  }
}

@media (min-width: 1024px) {
  .container-shell {
    max-width: var(
      --container-max-lg,
      var(--container-max-md, var(--container-max-sm, var(--container-max, 72rem)))
    );
  }
}

@media (min-width: 1440px) {
  .container-shell {
    max-width: var(--container-max-xl, 72rem);
  }
}

@media (min-width: 1920px) {
  .container-shell {
    max-width: var(--container-max, 72rem);
  }
}
</style>
