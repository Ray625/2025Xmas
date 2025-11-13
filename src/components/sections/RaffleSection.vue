<template>
  <section class="raffle-section">
    <Container maxWidth="1440px">
      <div class="raffle-card">
        <p class="raffle-card__text">
          {{ t("sections.raffle.cardText") }}
        </p>
      </div>
    </Container>
    <Container maxWidth="1440px">
      <SectionTitle preset="raffle" class="mb-[66px]" />
      <Card title-key="sections.raffle.rules.title">
        <p class="raffle-card__text mb-[66px]">
          {{ t("sections.raffle.rules.text") }}
        </p>
        <TagHighlight :icon="iconClock" textColor="#5E4FD4" class="mb-8">
          {{ t("sections.raffle.rules.time") }}
        </TagHighlight>
        <TagHighlight :icon="iconMap" textColor="#E3007F" class="mb-[76px]">
          {{ t("sections.raffle.rules.location") }}
        </TagHighlight>
        <div class="flex w-full gap-8 mb-7">
          <CardStep
            class="flex-1"
            bg-color="#CFEEE0"
            text-bg-color="#28B590"
            :icon-left="iconGift"
            :icon-right="iconGift"
            title-key="sections.raffle.rules.step1.title"
          >
            <div class="step__text">
              {{ t("sections.raffle.rules.step1.text") }}
            </div>
            <button class="step__button" @click="clickLine">
              <span>
                {{ t("sections.raffle.rules.step1.button") }}
              </span>
              <img :src="iconArrow" alt="button" class="w-[24px] h-[24px]" />
            </button>
          </CardStep>
          <CardStep
            class="flex-1"
            bg-color="#D3E3FF"
            text-bg-color="#5E4FD4"
            :icon-left="iconGift"
            :icon-right="iconGift"
            title-key="sections.raffle.rules.step2.title"
          >
            <div class="step__text">
              {{ t("sections.raffle.rules.step2.text") }}
            </div>
            <img :src="iconQRCode" alt="qrcode" class="w-[60px] h-[60px]" />
          </CardStep>
        </div>
        <CardStep
          class="flex-1"
          bg-color="#EBEBEB"
          text-bg-color="#DC1F9E"
          :icon-left="iconGift"
          :icon-right="iconGift"
          title-key="sections.raffle.rules.step3.title"
        >
          <div class="step__card">
            <div class="step__card__col">
              <div class="flex flex-col text-center">
                <span>{{ t("sections.raffle.rules.step3.textLeft1") }}</span>
                <span>
                  <span class="step__card__num">1、3、5、7、9</span>
                  <span>
                    {{ t("sections.raffle.rules.step3.textLeft2") }}
                  </span>
                </span>
                <span>{{ t("sections.raffle.rules.step3.textLeft3") }}</span>
              </div>
              <img
                :src="stepCardImgLeft"
                alt="stamp card"
                class="step__card__img"
              />
            </div>
            <div class="step__card__col">
              <div class="flex flex-col text-center">
                <span>{{ t("sections.raffle.rules.step3.textRight1") }}</span>
                <span>
                  <span class="step__card__num step__card__num--right"
                    >5、10、15</span
                  >
                  <span>
                    {{ t("sections.raffle.rules.step3.textRight2") }}
                  </span>
                </span>
                <span>{{ t("sections.raffle.rules.step3.textRight3") }}</span>
              </div>
              <img
                :src="stepCardImgRight"
                alt="stamp card"
                class="step__card__img"
              />
            </div>
          </div>
        </CardStep>
      </Card>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "@/components/layout/Container.vue"
import Card from "@/components/common/Card.vue"
import SectionTitle from "@/components/common/SectionTitle.vue"
import TagHighlight from "@/components/common/TagHighlight.vue"
import CardStep from "@/components/common/CardStep.vue"
import iconClock from "@/assets/icon/clock.svg"
import iconMap from "@/assets/icon/map.svg"
import iconGift from "@/assets/icon/gift.svg"
import iconArrow from "@/assets/icon/arrow_right.svg"
import iconQRCode from "@/assets/icon/qrcode.svg"
import stepCardImgLeft from "@/assets/icon/step_card_left.svg"
import stepCardImgRight from "@/assets/icon/step_card_Right.svg"

import { useI18n } from "vue-i18n"

const { t } = useI18n()

const clickLine = () => alert("line btn")
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;
@use "@/styles/_mixins" as mixins;

.raffle-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 172px;
  padding-top: 135px;
  padding-bottom: 194px;

  --gradient-height: 427px;
  background: linear-gradient(180deg, #75c7d7 0%, #6a8ac6 100%) top center /
      100% var(--gradient-height) no-repeat,
    #6a8ac6;
}

.raffle-card {
  padding: 80px 280px;
  border-radius: 40px;
  background: #fff;
  &__text {
    text-align: center;
    font-size: 28px;
    line-height: 44px;
    font-weight: 700;
    color: vars.$color-text-blue;
    white-space: pre-line;
  }
}

.step__text {
  display: flex;
  flex-direction: col;
  margin: 32px 0;
  @include mixins.typography(24px, 36px, 700);
  text-align: center;
  white-space: pre-line;
}

.step__button {
  display: flex;
  gap: 8px;
  padding: 16px 20px 16px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #fff;
  background-color: #45b035;
  border-radius: 40px;
  outline: 2px solid #fff;
  outline-offset: -2px;
}

.step__card {
  display: flex;
  gap: 32px;
  @include mixins.typography(24px, 44px, 700);
  &__col {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 30px;
  }
  &__num {
    margin-right: 12px;
    padding: 0 14px;
    border-radius: 999px;
    background-color: #f4aa1c;
    @include mixins.typography(24px, 36px, 700, vars.$color-white);
    &--right {
      background-color: #ff5660;
    }
  }
  &__img {
    width: 592px;
  }
}

@media (min-width: 1024px) {
}
</style>
