<template>
  <div v-if="visible" class="popup" @click.self="onClose">
    <Container maxWidth="960px" xlMaxWidth="800px" lgMaxWidth="760px">
      <div class="popup-container">
        <ButtonClose @click="onClose" />
        <div class="scroll-container">
          <div class="popup-content">
            <!-- <div class="popup__text">
              <p class="popup__title">公告：</p>
              <p class="whitespace-pre-line">
                {{ t('post') }}
              </p>
            </div> -->
            <img :src="popup" alt="popup image" class="popup__img" />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import ButtonClose from '@/components/common/ButtonClose.vue'
import popup from '@/assets/img/popup.jpg'

// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const onClose = () => emit('close')
</script>

<style lang="scss" scoped>
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.popup {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  &__title {
    @include mixins.text-title(#000);
    margin-bottom: 4px;
  }
  &__text {
    @include mixins.locale-card-text;
  }
}

.popup-container {
  position: relative;
  // max-height: 560px;
  width: fit-content;
  height: fit-content;
  padding: 64px 24px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
}

.popup__img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

// .scroll-container {
// max-height: 500px;
// }

.popup-content {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  // max-width: 500px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .popup-content {
    max-width: 560px;
  }
}

// @media (min-width: 1024px) {
//   .popup-content {
//     max-width: 640px;
//   }
// }
</style>
