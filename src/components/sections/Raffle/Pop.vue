<template>
  <div v-if="visible" class="popup" @click.self="onClose">
    <Container maxWidth="1200px">
      <div class="popup-container">
        <ButtonClose @click="onClose" />
        <div class="scroll-container">
          <div class="popup-content">
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
                  v-for="(_, idx) in Array.from({ length: 8 })"
                  :key="`inform-${idx}`"
                  class="whitespace-pre-line"
                >
                  {{ t(`popup.note.inform.note${idx + 1}`) }}
                </li>
                <li class="whitespace-pre-line">
                  {{ t(`popup.note.inform.note9`) }}
                  <a
                    href="mailto:taipeixmas2025@clickforce.com.tw?subject=活動洽詢"
                    class="underline"
                  >
                    {{ t(`popup.note.inform.mail`) }}
                  </a>
                  {{ t(`popup.note.inform.note9_2`) }}
                </li>
              </ul>
            </div>
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
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  overflow: auto;

  &__title {
    @include mixins.card-title(#000);
  }
  &__subtitle {
    @include mixins.text-title(#000);
  }
  &__text {
    @include mixins.locale-card-text;
  }
  &__list {
    list-style: decimal;
    padding-left: 24px;
  }
}

.popup-container {
  position: relative;
  max-height: 560px;
  padding: 60px 24px;
  background-color: #fff;
  border-radius: 20px;
}

.scroll-container {
  &::-webkit-scrollbar {
    width: 0;
  }
  max-height: 500px;
  overflow-y: auto;
}

.popup-content {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .popup-content {
    max-width: 560px;
  }
}

@media (min-width: 1024px) {
  .popup-content {
    max-width: 632px;
  }
}
</style>
