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
      <div class="flex flex-col gap-20">
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
              <ActionButton @click="clickLine">
                {{ t("sections.raffle.rules.step1.button") }}
              </ActionButton>
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
            <div class="step-card">
              <div class="step-card__col">
                <div class="flex flex-col text-center">
                  <span>{{ t("sections.raffle.rules.step3.textLeft1") }}</span>
                  <span>
                    <span class="step-card__num">1、3、5、7、9</span>
                    <span>
                      {{ t("sections.raffle.rules.step3.textLeft2") }}
                    </span>
                  </span>
                  <span>{{ t("sections.raffle.rules.step3.textLeft3") }}</span>
                </div>
                <img
                  :src="stepCardImgLeft"
                  alt="stamp card"
                  class="step-card__img"
                  loading="lazy"
                />
              </div>
              <div class="step-card__col">
                <div class="flex flex-col text-center">
                  <span>{{ t("sections.raffle.rules.step3.textRight1") }}</span>
                  <span>
                    <span class="step-card__num step-card__num--right"
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
                  class="step-card__img"
                  loading="lazy"
                />
              </div>
            </div>
          </CardStep>
        </Card>
        <Card
          title-key="sections.raffle.prize.title"
          textBgColor="#28B590"
          bodyPadding="56px 80px 80px"
        >
          <div class="flex w-full h-fit gap-8 mb-[72px]">
            <CardStep
              class="flex-1"
              bg-color="#FDEED2"
              text-bg-color="#F4AA1C"
              :icon-left="iconStar"
              :icon-right="iconStar"
              title-key="sections.raffle.prize.cardLeft.title"
            >
              <div class="flex flex-col mt-2 items-center">
                <span class="prize-card__text">{{
                  t("sections.raffle.prize.cardLeft.text")
                }}</span>
                <div class="flex flex-col items-start gap-5 mt-9">
                  <div v-for="prize in prizeLeft" class="prize-card__row">
                    <img
                      :src="prize.img"
                      alt="prize"
                      class="prize-card__prize__img"
                    />
                    <p class="prize-card__prize__text">{{ prize.text }}</p>
                    <span class="prize-card__prize__quota">{{
                      `${prize.quota}${t(
                        "sections.raffle.prize.cardRight.quota"
                      )}`
                    }}</span>
                  </div>
                </div>
              </div>
            </CardStep>
            <CardStep
              class="flex-1"
              bg-color="#FFDDDF"
              text-bg-color="#FF5660"
              :icon-left="iconStarLeft"
              :icon-right="iconStarRight"
              title-key="sections.raffle.prize.cardRight.title"
            >
              <div class="flex flex-col mt-2 items-center">
                <span class="prize-card__text">{{
                  t("sections.raffle.prize.cardRight.text")
                }}</span>
                <div class="flex flex-col items-start gap-5 mt-9">
                  <div v-for="prize in prizeRight" class="prize-card__row">
                    <img
                      :src="prize.img"
                      alt="prize"
                      class="prize-card__prize__img"
                    />
                    <p class="prize-card__prize__text">{{ prize.text }}</p>
                    <span class="prize-card__prize__quota">{{
                      `${prize.quota}${t(
                        "sections.raffle.prize.cardRight.quota"
                      )}`
                    }}</span>
                  </div>
                </div>
              </div>
            </CardStep>
          </div>
          <div class="prize-card__note">
            <p>
              {{ t("sections.raffle.prize.note.title") }}
            </p>
            <ol>
              <li v-for="(_, index) in Array(4)">
                {{ t(`sections.raffle.prize.note.note${index + 1}`) }}
              </li>
              <li>
                <span>
                  {{ t("sections.raffle.prize.note.note5") }}
                </span>
                <button class="prize-card__link" @click="clickPopup">
                  <u>{{ t("sections.raffle.prize.note.noteLink") }}</u>
                  <span>。</span>
                </button>
              </li>
            </ol>
          </div>
        </Card>
        <Card title-key="sections.raffle.stamp.title" bodyPadding="40px">
          <div class="flex flex-col gap-10 w-full">
            <CardStamp
              title-key="sections.raffle.stamp.xinyi.title"
              :lights="xinyiLights"
              :page-size="8"
              bodyMinHeight="967px"
            />
            <CardStamp
              title-key="sections.raffle.stamp.eastern.title"
              :lights="easternLights"
              :page-size="8"
              bodyMinHeight="967px"
            />
            <CardStamp
              title-key="sections.raffle.stamp.taipei.title"
              :lights="taipeiLights"
              :page-size="8"
              bodyMinHeight="967px"
            />
          </div>
        </Card>
        <Card
          title-key="sections.raffle.map.title"
          text-bg-color="#28B590"
          bodyPadding="156px 180px 192px 180px"
        >
          <div class="map__card">
            <div>
              <img :src="googleMap" alt="map" class="map__card__map" />
            </div>
            <div class="map__card__btn__group">
              <ActionButton bg-color="#F23D25" :has-border="false">{{
                t("sections.raffle.map.openMap")
              }}</ActionButton>
              <ActionButton :has-border="false">{{
                t("sections.raffle.map.openLine")
              }}</ActionButton>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "@/components/layout/Container.vue";
import Card from "@/components/common/Card.vue";
import CardStep from "@/components/common/CardStep.vue";
import CardStamp from "@/components/common/CardStamp.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import TagHighlight from "@/components/common/TagHighlight.vue";
import ActionButton from "@/components/common/ActionButton.vue";

import iconClock from "@/assets/icon/clock.svg";
import iconMap from "@/assets/icon/map.svg";
import iconGift from "@/assets/icon/gift.svg";
import iconQRCode from "@/assets/icon/qrcode.svg";
import stepCardImgLeft from "@/assets/icon/step_card_left.svg";
import stepCardImgRight from "@/assets/icon/step_card_right.svg";
import iconStar from "@/assets/icon/star_1.svg";
import iconStarLeft from "@/assets/icon/star_2.svg";
import iconStarRight from "@/assets/icon/star_3.svg";
import googleMap from "@/assets/backgrounds/google_map.png";

import { useI18n } from "vue-i18n";
import { useRaffleConstants } from "./const";

const { t } = useI18n();

const { prizeLeft, prizeRight, xinyiLights, easternLights, taipeiLights } =
  useRaffleConstants();

const clickLine = () => alert("line btn");

const clickPopup = () => alert("popup");
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
  background: linear-gradient(180deg, #75c7d7 0%, vars.$bg-blue 100%) top center /
      100% var(--gradient-height) no-repeat,
    vars.$bg-blue;
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

.step-card {
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

.prize-card {
  &__text {
    @include mixins.typography(18px, 36px, 700, #868686);
  }
  &__prize__text {
    @include mixins.typography(24px, 36px, 700, #000);
  }
  &__prize__quota {
    width: fit-content;
    min-width: 94px;
    padding: 0 14px;
    border-radius: 32px;
    background: vars.$color-white;
    text-align: center;
    @include mixins.typography(22px, 36px, 700, #f4aa1c);
  }
  &__prize__img {
    width: 108px;
  }
  &__note {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    @include mixins.typography(16px, 32px, 500, #868686);
    ol {
      list-style: decimal;
      padding-left: 1.5rem;
    }
  }
}

.prize-card__row {
  display: grid;
  grid-template-columns: auto 1fr 138px;
  gap: 32px;
  align-items: center;
  width: 100%;
}

.map__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__map {
    margin-bottom: 60px;
    border-radius: 16px;
  }
  &__btn__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
}

@media (min-width: 1024px) {
}
</style>
