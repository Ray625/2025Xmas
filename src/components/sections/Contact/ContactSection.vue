<template>
  <section class="contact-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center gap-[172px]">
        <div class="contact-section__text__cantainer">
          <SectionTitle preset="contact" class="contact-section__title" />
          <p class="contact-section__text">{{ t('sections.contact.text') }}</p>
          <ButtonAction bgColor="#109D91" @click="handleMailTo">
            {{ t('sections.contact.mail') }}
          </ButtonAction>
        </div>
        <div class="contact-section__event__cantainer">
          <img :src="eventImg" alt="event banner" class="contact-section__event__img" />
          <p class="contact-section__event__text">{{ t('sections.contact.event') }}</p>
          <ButtonAction bgColor="#F23D25" :hasBorder="false" @click="handleMailTo">
            {{ t('sections.contact.more') }}
          </ButtonAction>
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import ButtonAction from '@/components/common/ButtonAction.vue'
import eventImg from '@/assets/img/section_12_banner.png'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const handleMailTo = () => {
  alert('mail to...')
}
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.contact-section {
  padding-top: 168px;
  padding-bottom: 224px;
  background-color: vars.$bg-blue;

  &__text {
    white-space: pre-line;
    text-align: center;
    @include mixins.typography(28px, 44px, 700);
    &__cantainer {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 44px;
      width: 100%;
      padding: 152px 251px 76px;
      border-radius: 40px;
      background-color: #d3e9ff;
    }
  }

  &__title {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  &__event {
    &__cantainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 54px;
      width: 100%;
      padding: 40px 40px 60px;
      border-radius: 40px;
      background-color: #fff;
    }

    &__img {
      border-radius: 40px;
    }

    &__text {
      width: 100%;
      max-width: 938px;
      white-space: pre-line;
      text-align: center;
      @include mixins.typography(24px, 36px, 700);
    }
  }
}
</style>
