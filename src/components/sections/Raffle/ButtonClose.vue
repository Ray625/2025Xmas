<template>
  <button class="action-button" @click="$emit('click')">
    <span class="action-button__icon">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16L25 25M16 16L7 7M16 16L7 25M16 16L25 7"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.action-button {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #868686;
  outline: 2px solid #868686;
  outline-offset: -2px;
  border-radius: 8px;

  &__icon {
    width: 24px;
    height: 24px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}

@media (min-width: 1024px) {
  .action-button {
    &:hover {
      background-color: #868686;
      color: white;
    }
  }
}

@media (min-width: 1440px) {
  .action-button {
    top: 40px;
    right: 40px;
    width: 60px;
    height: 60px;
    color: #868686;

    &__icon {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
