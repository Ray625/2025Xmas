<template>
  <div v-if="visible" class="popup" @click.self="onClose">
    <Container maxWidth="960px" xlMaxWidth="800px" lgMaxWidth="760px">
      <div class="popup-container">
        <ButtonClose @click="onClose" />
        <div class="scroll-container">
          <div class="popup-content">
            <div class="popup__text">
              <p class="popup__title">公告：</p>
              <p class="whitespace-pre-line">
                {{
                  '感謝熱情參與「2025繽紛耶誕玩台北光之覓境雙重抽」活動，提醒各位熱情的民眾，活動集章需要前往本市16大百貨體系，掃描百貨分館現場 QR code 集章，這樣集章才有效喔～\n 大家趕緊集章抽10萬禮券大獎!!'
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import ButtonClose from '@/components/sections/Raffle/ButtonClose.vue'

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
  max-height: 560px;
  padding: 64px 24px;
  background-color: #fff;
  border-radius: 20px;
}

.scroll-container {
  max-height: 500px;
}

.popup-content {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .popup-content {
    max-width: 560px;
  }
}

@media (min-width: 1024px) {
  .popup-content {
    max-width: 640px;
  }
}
</style>
