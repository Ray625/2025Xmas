<template>
  <div v-if="visible" class="popup" @click.self="onClose">
    <Container maxWidth="1200px">
      <div
        class="relative p-[60px_284px] max-h-[560px] bg-white rounded-[20px] overflow-y-auto scroll-container"
      >
        <ButtonClose @click="onClose" />
        <div class="flex flex-col bg-white rounded-5">
          <div class="popup__title mb-[36px]">{{ t('popup.title') }}</div>
          <div class="flex flex-col mb-[24px] popup__text">
            <p class="popup__subtitle">{{ t('popup.event.title') }}</p>
            <p class="whitespace-pre-line">{{ t('popup.event.text') }}</p>
            <ul class="popup__list">
              <li v-for="(_, idx) in Array.from({ length: 3 })" :key="`event-${idx}`">
                {{ t(`popup.event.direction${idx + 1}`) }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col mb-[24px] popup__text">
            <p class="popup__subtitle">{{ t('popup.note.title') }}</p>
            <p class="whitespace-pre-line">{{ t('popup.note.text') }}</p>
            <p>{{ t('popup.note.notice.title') }}</p>
            <ul class="popup__list">
              <li v-for="(_, idx) in Array.from({ length: 9 })" :key="`notice-${idx}`">
                {{ t(`popup.note.notice.note${idx + 1}`) }}
              </li>
            </ul>
            <p>{{ t('popup.note.notice2.title') }}</p>
            <ul class="popup__list">
              <li v-for="(_, idx) in Array.from({ length: 4 })" :key="`notice2-${idx}`">
                {{ t(`popup.note.notice2.note${idx + 1}`) }}
              </li>
            </ul>
            <p>{{ t('popup.note.notice3.title') }}</p>
            <ul class="popup__list">
              <li v-for="(_, idx) in Array.from({ length: 3 })" :key="`notice3-${idx}`">
                {{ t(`popup.note.notice3.note${idx + 1}`) }}
              </li>
            </ul>
            <p>{{ t('popup.note.notice4.title') }}</p>
            <ul class="popup__list">
              <li v-for="(_, idx) in Array.from({ length: 3 })" :key="`notice4-${idx}`">
                {{ t(`popup.note.notice4.note${idx + 1}`) }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col mb-[24px] popup__text">
            <p class="popup__subtitle">{{ t('popup.note.inform.title') }}</p>
            <p class="whitespace-pre-line">{{ t('popup.note.inform.text') }}</p>
            <ul class="popup__list">
              <li
                v-for="(_, idx) in Array.from({ length: 9 })"
                :key="`inform-${idx}`"
                class="whitespace-pre-line"
              >
                {{ t(`popup.note.inform.note${idx + 1}`) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import { useI18n } from 'vue-i18n'
import ButtonClose from '@/components/sections/Raffle/ButtonClose.vue'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

const onClose = () => emit('close')
</script>

<style lang="scss" scoped>
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.popup {
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.6);
  overflow: auto;

  &__title {
    @include mixins.typography(32px, 44px, 700, #000);
  }
  &__subtitle {
    @include mixins.typography(24px, 36px, 700, #000);
  }
  &__text {
    @include mixins.typography(18px, 32px, 500, #000);
  }
  &__list {
    list-style: decimal;
    padding-left: 24px;
  }
}

.scroll-container {
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 999px;
    border: 3px solid transparent; /* 看起來有 padding */
    background-clip: content-box;
  }
}
</style>
