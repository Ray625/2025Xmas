<template>
  <section class="contact-section">
    <Container maxWidth="1440px">
      <SectionTitle
        v-if="['xs', 'sm'].includes(breakpoint)"
        preset="contact"
        class="contact-section__title--m"
      />
      <div class="contact-section__wrapper">
        <div class="contact-section__text__container">
          <div class="contact-section__title">
            <SectionTitle v-if="['xl', 'lg', 'md'].includes(breakpoint)" preset="contact" />
          </div>
          <p class="contact-section__text">{{ t('sections.contact.text') }}</p>
          <a href="mailto:taipeixmas2025@clickforce.com.tw?subject=活動洽詢" class="inline-flex">
            <ButtonAction bgColor="#109D91">
              {{ t('sections.contact.mail') }}
            </ButtonAction>
          </a>
          <img :src="snoopy" alt="snoopy" class="snoppy-mail" />
          <img :src="snoopyStamp" alt="snoopy" class="snoppy-stamp" />
        </div>
        <div class="contact-section__event__container">
          <img
            v-if="breakpoint === 'xs'"
            :src="eventImgM"
            alt="event banner"
            class="contact-section__event__img"
          />
          <img
            v-if="breakpoint !== 'xs'"
            :src="eventImg"
            alt="event banner"
            class="contact-section__event__img"
          />
          <ButtonAction bgColor="#F23D25" :hasBorder="false" @click="handleGoToEventWeb">
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
import eventImgM from '@/assets/img/m_section_12_banner.png'
import snoopy from '@/assets/img/section_12_snoopy.png'
import snoopyStamp from '@/assets/img/section_12_stamp.png'
import { useI18n } from 'vue-i18n'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()

const { t } = useI18n()

const handleGoToEventWeb = () => {
  window.open('https://www.gotaipei.taipei/', '_blank', 'noopener,noreferrer')
}
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.contact-section {
  padding-top: 24px;
  padding-bottom: 96px;
  background-color: vars.$bg-blue;
  background-image: url('@/assets/img/m_section_13_ribbon_top.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;

  &__text {
    white-space: pre-line;
    text-align: center;
    @include mixins.text-body;
    &__container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
      padding: 16px 16px 88px;
      border-radius: 16px;
      background-color: #d3e9ff;
    }
  }

  &__event {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      width: 100%;
      padding: 12px 12px 20px;
      border-radius: 16px;
      background-color: #fff;
    }

    &__img {
      border-radius: 16px;
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

.contact-section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
}

.contact-section__title--m {
  margin-bottom: 24px;
}

.contact-section__title {
  display: none;
}

.snoppy-mail {
  position: absolute;
  width: 100%;
  max-width: 132px;
  bottom: -76px;
  right: 26px;
  pointer-events: none;
  user-select: none;
}

.snoppy-stamp {
  position: absolute;
  width: 100%;
  max-width: 144px;
  bottom: -38px;
  left: 12px;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 768px) {
  .contact-section {
    padding-top: 48px;
    padding-bottom: 104px;
    &__text__container {
      padding: 48px 48px 64px;
      border-radius: 24px;
    }

    background-image: url('@/assets/img/section_13_ribbon_top.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .contact-section__text {
    max-width: 420px;
  }

  .contact-section__event__img {
    border-radius: 16px;
  }

  .snoppy-mail {
    max-width: 160px;
    bottom: -76px;
    right: 26px;
  }

  .snoppy-stamp {
    max-width: 188px;
    bottom: -38px;
    left: 12px;
  }
}

@media (min-width: 1024px) {
  .contact-section {
    padding-top: 132px;
    padding-bottom: 148px;
  }

  .contact-section__title--m {
    display: none;
  }

  .contact-section__title {
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
  }

  .contact-section__wrapper {
    gap: 132px;
  }

  .contact-section__text {
    max-width: none;
  }

  .contact-section__text__container {
    padding: 84px 84px 84px;
    border-radius: 32px;
    gap: 32px;
  }

  .contact-section__event__container {
    gap: 36px;
    padding: 40px 40px 60px;
    border-radius: 32px;
  }

  .contact-section__event__img {
    border-radius: 32px;
  }

  .snoppy-mail {
    max-width: 188px;
    bottom: -76px;
    right: 26px;
  }

  .snoppy-stamp {
    max-width: 232px;
    bottom: -60px;
    left: 12px;
  }
}

@media (min-width: 1440px) {
  .contact-section {
    padding-top: 168px;
    padding-bottom: 200px;
    &__text__container {
      padding: 152px 24px 76px;
    }
  }

  .contact-section__text__container {
    padding: 84px 84px 84px;
    border-radius: 40px;
    gap: 44px;
  }

  .contact-section__event__container {
    padding: 40px 40px 60px;
    gap: 54px;
    border-radius: 40px;
  }

  .contact-section__event__img {
    border-radius: 40px;
  }

  .contact-section__text {
    max-width: 780px;
  }

  .snoppy-mail {
    max-width: 212px;
    bottom: -76px;
    right: -18px;
  }

  .snoppy-stamp {
    max-width: 276px;
    bottom: -60px;
    left: -28px;
  }
}

@media (min-width: 1920px) {
  .contact-section {
    padding-bottom: 220px;
  }

  .contact-section__wrapper {
    gap: 172px;
  }

  .contact-section__text {
    max-width: 960px;
  }

  .snoppy-mail {
    max-width: 240px;
    bottom: -69px;
    right: -40px;
  }

  .snoppy-stamp {
    max-width: 319px;
    bottom: -73px;
    left: -51px;
  }
}
</style>
