<template>
  <section class="raffle-section">
    <Container maxWidth="1440px">
      <div class="raffle-card">
        <p class="raffle-card__text">
          {{ t('sections.raffle.cardText') }}
        </p>
      </div>
    </Container>
    <Container maxWidth="1440px">
      <SectionTitle preset="raffle" class="mb-[66px]" />
      <div class="flex flex-col gap-20">
        <Card title-key="sections.raffle.rules.title">
          <p class="raffle-card__text mb-[66px]">
            {{ t('sections.raffle.rules.text') }}
          </p>
          <TagHighlight :icon="iconClock" textColor="#5E4FD4" class="mb-8">
            {{ t('sections.raffle.rules.time') }}
          </TagHighlight>
          <TagHighlight :icon="iconMap" textColor="#E3007F" class="mb-[76px]">
            {{ t('sections.raffle.rules.location') }}
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
                {{ t('sections.raffle.rules.step1.text') }}
              </div>
              <ButtonAction @click="handleGoLineOA">
                {{ t('sections.raffle.rules.step1.button') }}
              </ButtonAction>
            </CardStep>
            <CardStep
              class="flex-1"
              bg-color="#D3E3FF"
              text-bg-color="#5E4FD4"
              :icon-left="iconGift"
              :icon-right="iconGift"
              title-key="sections.raffle.rules.step2.title"
              body-padding="32px 32px 8px 32px"
            >
              <div class="step__text margin-small">
                {{ t('sections.raffle.rules.step2.text') }}
              </div>
              <img :src="iconQRCode" alt="qrcode" class="w-[60px] h-[60px] mb-3" />
              <p class="step__text__note">{{ t('sections.raffle.rules.step2.note') }}</p>
            </CardStep>
          </div>
          <CardStep
            class="flex-1"
            bg-color="#FFE5F0"
            text-bg-color="#DC1F9E"
            :icon-left="iconGift"
            :icon-right="iconGift"
            title-key="sections.raffle.rules.step3.title"
          >
            <div class="step-card">
              <div class="step-card__col">
                <div class="flex flex-col text-center">
                  <span>{{ t('sections.raffle.rules.step3.textLeft1') }}</span>
                  <span>
                    <span class="step-card__num">1、3、5、7、9</span>
                    <span>
                      {{ t('sections.raffle.rules.step3.textLeft2') }}
                    </span>
                  </span>
                  <span>{{ t('sections.raffle.rules.step3.textLeft3') }}</span>
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
                  <span>{{ t('sections.raffle.rules.step3.textRight1') }}</span>
                  <span>
                    <span class="step-card__num step-card__num--right">5、10、15</span>
                    <span>
                      {{ t('sections.raffle.rules.step3.textRight2') }}
                    </span>
                  </span>
                  <span>{{ t('sections.raffle.rules.step3.textRight3') }}</span>
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
                <span class="prize-card__text">{{ t('sections.raffle.prize.cardLeft.text') }}</span>
                <div class="flex flex-col items-start gap-5 mt-9">
                  <div v-for="(prize, index) in prizeLeft" class="prize-card__row">
                    <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                    <p class="prize-card__prize__text">{{ prize.text }}</p>
                    <span class="prize-card__prize__quota">{{
                      `${prize.quota}${
                        index === 4 ? '' : t('sections.raffle.prize.cardRight.quota')
                      }`
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
                  t('sections.raffle.prize.cardRight.text')
                }}</span>
                <div class="flex flex-col items-start gap-5 mt-9">
                  <div v-for="prize in prizeRight" class="prize-card__row">
                    <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                    <p class="prize-card__prize__text">{{ prize.text }}</p>
                    <span class="prize-card__prize__quota">{{
                      `${prize.quota}${t('sections.raffle.prize.cardRight.quota')}`
                    }}</span>
                  </div>
                </div>
              </div>
            </CardStep>
          </div>
          <div class="prize-card__note__wrapper">
            <div class="flex-1"></div>
            <div class="prize-card__note">
              <p>
                {{ t('sections.raffle.prize.note.title') }}
              </p>
              <ol>
                <li v-for="(_, index) in Array(4)">
                  {{ t(`sections.raffle.prize.note.note${index + 1}`)
                  }}<a
                    v-if="index === 2"
                    href="https://www.facebook.com/tcooc?locale=zh_TW"
                    target="_blank"
                    class="underline"
                    >{{ t(`sections.raffle.prize.note.noteLink2`) }}</a
                  >
                  <span v-if="index === 2">。</span>
                </li>
                <li>
                  <span>
                    {{ t('sections.raffle.prize.note.note5') }}
                  </span>
                  <button class="prize-card__link" @click="handleTogglePopup">
                    <u>{{ t('sections.raffle.prize.note.noteLink') }}</u>
                    <span>。</span>
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </Card>
        <Card title-key="sections.raffle.stamp.title" bodyPadding="20px 40px 40px">
          <div class="stamp__note">{{ t('sections.raffle.note') }}</div>
          <div class="flex flex-col gap-10 w-full">
            <CardStamp
              title-key="sections.raffle.stamp.xinyi.title"
              :lights="xinyiLights"
              :page-size="8"
              bodyMinHeight="780px"
              :showTime="false"
            />
            <CardStamp
              title-key="sections.raffle.stamp.eastern.title"
              :lights="easternLights"
              :page-size="8"
              bodyMinHeight="780px"
              :showTime="false"
            />
            <CardStamp
              title-key="sections.raffle.stamp.taipei.title"
              :lights="taipeiLights"
              :page-size="8"
              bodyMinHeight="780px"
              :showTime="false"
            />
          </div>
        </Card>
        <Card
          title-key="sections.raffle.map.title"
          text-bg-color="#28B590"
          bodyPadding="156px 180px 192px 180px"
        >
          <div class="map__card">
            <div class="w-full h-full">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=14lLXZgQwRyfMMWyv3Io0QVJSmJz81sk&ehbc=2E312F&noprof=1"
                width="100%"
                height="auto"
                class="map__card__map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div class="map__card__btn__group">
              <ButtonAction bg-color="#F23D25" :has-border="false" @click="handleOpenMap">{{
                t('sections.raffle.map.openMap')
              }}</ButtonAction>
              <ButtonAction :has-border="false" @click="handleGoLineOA">{{
                t('sections.raffle.map.openLine')
              }}</ButtonAction>
            </div>
          </div>
        </Card>
      </div>
    </Container>
    <Pop :visible="openPopup" @close="handleTogglePopup" />
  </section>
</template>

<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import Card from '@/components/common/Card.vue'
import CardStep from '@/components/common/CardStep.vue'
import CardStamp from '@/components/common/CardStamp.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import TagHighlight from '@/components/common/TagHighlight.vue'
import ButtonAction from '@/components/common/ButtonAction.vue'
import Pop from '@/components/sections/Raffle/Pop.vue'

import iconClock from '@/assets/icon/clock.svg'
import iconMap from '@/assets/icon/map.svg'
import iconGift from '@/assets/icon/gift.svg'
import iconQRCode from '@/assets/icon/qrcode.svg'
import stepCardImgLeft from '@/assets/icon/step_card_left.svg'
import stepCardImgRight from '@/assets/icon/step_card_right.svg'
import iconStar from '@/assets/icon/star_1.svg'
import iconStarLeft from '@/assets/icon/star_2.svg'
import iconStarRight from '@/assets/icon/star_3.svg'

import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRaffleConstants } from '@/components/sections/Raffle/const'

const { t } = useI18n()
const { prizeLeft, prizeRight, xinyiLights, easternLights, taipeiLights } = useRaffleConstants()

const openPopup = ref(false)

const handleTogglePopup = () => {
  openPopup.value = !openPopup.value
}

watch(openPopup, (visible) => {
  document.body.style.overflow = visible ? 'hidden' : ''
})

const handleOpenMap = () => {
  window.open(
    'https://www.google.com/maps/d/u/0/viewer?mid=14lLXZgQwRyfMMWyv3Io0QVJSmJz81sk&ll=25.076023980955114%2C121.56142795&z=13',
    '_blank',
    'noopener,noreferrer',
  )
}

const handleGoLineOA = () =>
  window.open('https://line.me/R/ti/p/@996rskra', '_blank', 'noopener,noreferrer')
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.raffle-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 172px;
  padding-top: 135px;
  padding-bottom: 194px;

  --gradient-height: 427px;
  background: linear-gradient(180deg, #75c7d7 0%, vars.$bg-blue 100%) top center / 100%
      var(--gradient-height) no-repeat,
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
  &.margin-small {
    margin: 20px 0;
  }
  &__note {
    @include mixins.typography(18px, 36px, 700, #868686);
  }
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
    &__wrapper {
      display: flex;
      flex-direction: row;
      gap: 32px;
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0;
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
  width: 100%;
  height: 100%;
  &__map {
    width: 100%;
    aspect-ratio: 1080 / 548;
    margin-bottom: 60px;
    border-radius: 16px;
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  &__btn__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
}

.stamp__note {
  @include mixins.typography(18px, 36px, 700, #868686);
  margin-bottom: 24px;
}

@media (min-width: 1024px) {
}
</style>
