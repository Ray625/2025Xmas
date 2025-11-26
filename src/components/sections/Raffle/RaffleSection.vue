<template>
  <section class="raffle-section">
    <Container>
      <div class="raffle-card">
        <p class="raffle-card__text">
          {{ t('sections.raffle.cardText.text') }}
        </p>
        <div class="flex flex-col items-center">
          <p class="raffle-card__text">
            {{ t('sections.raffle.cardText.text2') }}
          </p>
          <p class="raffle-card__text">
            {{ t('sections.raffle.cardText.text3') }}
          </p>
        </div>
        <p class="raffle-card__text">
          {{ t('sections.raffle.cardText.text4') }}
        </p>
      </div>
    </Container>
    <Container>
      <SectionTitle preset="raffle" class="raffle-section__title" />
      <div class="raffle-section__content">
        <Card title-key="sections.raffle.rules.title">
          <p class="raffle-card__text text--mb">
            {{ t('sections.raffle.rules.text') }}
          </p>
          <TagHighlight :icon="iconClock" textColor="#5E4FD4" class="raffle-section__tag--top">
            {{ t('sections.raffle.rules.time') }}
          </TagHighlight>
          <TagHighlight :icon="iconMap" textColor="#E3007F" class="raffle-section__tag--bottom">
            {{ t('sections.raffle.rules.location') }}
          </TagHighlight>
          <div class="raffle-section__step__wrapper">
            <CardStep
              class="flex-1"
              bg-color="#CFEEE0"
              text-bg-color="#28B590"
              :icon-left="iconGift"
              :icon-right="iconGift"
              title-key="sections.raffle.rules.step1.title"
            >
              <div class="step__text">
                <p class="step--sm">
                  {{ t('sections.raffle.rules.step1.text') }}
                </p>
                <p class="step--lg">{{ t('sections.raffle.rules.step1.text2') }}</p>
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
              sm-body-padding="16px 16px 8px"
            >
              <div class="step__text margin-small">
                <p class="step--sm">
                  {{ t('sections.raffle.rules.step2.text') }}
                </p>
                <p class="step--lg">{{ t('sections.raffle.rules.step2.text2') }}</p>
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
                  <span class="step--sm whitespace-pre-line">{{
                    t('sections.raffle.rules.step3.textRight3')
                  }}</span>
                  <span class="step--lg">{{ t('sections.raffle.rules.step3.textRight4') }}</span>
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
          sm-body-padding="12px"
        >
          <div class="raffle-section__prize__container">
            <CardStep
              class="flex-1"
              bg-color="#FDEED2"
              text-bg-color="#F4AA1C"
              :icon-left="iconStar"
              :icon-right="iconStar"
              title-key="sections.raffle.prize.cardLeft.title"
              sm-body-padding="16px"
            >
              <div class="flex flex-col mt-2 items-center">
                <span class="prize-card__text">{{ t('sections.raffle.prize.cardLeft.text') }}</span>
                <div class="raffle-section__prize__wrapper">
                  <div class="prize-card__row">
                    <template v-for="prize in prizeLeft">
                      <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                      <p class="prize-card__prize__text">{{ prize.text }}</p>
                      <span v-if="prize.quota" class="prize-card__prize__quota whitespace-nowrap">{{
                        `${prize.quota}${t('sections.raffle.prize.cardRight.quota')}`
                      }}</span>
                    </template>
                  </div>
                  <div class="prize-card__row--mobile">
                    <template v-for="prize in prizeLeft">
                      <div class="flex flex-row gap-5">
                        <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                        <div class="flex flex-col gap-1">
                          <p class="prize-card__prize__text">{{ prize.text }}</p>
                          <span
                            v-if="prize.quota"
                            class="prize-card__prize__quota whitespace-nowrap"
                            >{{
                              `${prize.quota}${t('sections.raffle.prize.cardRight.quota')}`
                            }}</span
                          >
                        </div>
                      </div>
                    </template>
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
              sm-body-padding="16px 16px 0 16px"
              body-padding="32px 32px 0 32px"
            >
              <div class="flex flex-col mt-2 items-center">
                <span class="prize-card__text">{{
                  t('sections.raffle.prize.cardRight.text')
                }}</span>
                <div class="raffle-section__prize__wrapper">
                  <div class="prize-card__row">
                    <template v-for="prize in prizeRight">
                      <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                      <p class="prize-card__prize__text">{{ prize.text }}</p>
                      <span class="prize-card__prize__quota--right">{{
                        `${prize.quota}${t('sections.raffle.prize.cardRight.quota')}`
                      }}</span>
                    </template>
                  </div>
                  <div class="prize-card__row--mobile">
                    <template v-for="prize in prizeRight">
                      <div class="flex flex-row gap-5">
                        <img :src="prize.img" alt="prize" class="prize-card__prize__img" />
                        <div class="flex flex-col gap-1">
                          <p class="prize-card__prize__text">{{ prize.text }}</p>
                          <span class="prize-card__prize__quota--right">{{
                            `${prize.quota}${t('sections.raffle.prize.cardRight.quota')}`
                          }}</span>
                        </div>
                      </div>
                    </template>
                    <img
                      :src="snoopyPrize"
                      alt="snoopy prize"
                      class="self-center max-w-[200px] mt-2 snoopy"
                    />
                  </div>
                </div>
              </div>
              <img :src="snoopyPrize" alt="snoopy prize" class="snoopy-prize snoopy snoopy-lg" />
            </CardStep>
          </div>
          <div class="prize-card__note__wrapper">
            <div class="snoopy-prize_2__wrapper">
              <img :src="snoopyPrize2" alt="snoopy prize" class="snoopy-prize_2 snoopy" />
            </div>
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
                    <u class="text-[#3277E1]">{{ t('sections.raffle.prize.note.noteLink') }}</u>
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
              :lights="xinyiCollect"
              :page-size="pageSize"
              bodyMinHeight="780px"
              :showTime="false"
            />
            <CardStamp
              title-key="sections.raffle.stamp.eastern.title"
              :lights="easternCollect"
              :page-size="pageSize"
              bodyMinHeight="780px"
              :showTime="false"
            />
            <CardStamp
              title-key="sections.raffle.stamp.taipei.title"
              :lights="taipeiCollect"
              :page-size="pageSize"
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
import snoopyPrize from '@/assets/img/section_03_snoopy.png'
import snoopyPrize2 from '@/assets/img/section_03_brown.png'

import { watch, ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRaffleConstants } from '@/components/sections/Raffle/const'
import { xinyiCollect, easternCollect, taipeiCollect } from '@/components/sections/Raffle/photo'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()

const { t } = useI18n()
const { prizeLeft, prizeRight } = useRaffleConstants()

const openPopup = ref(false)
const pageSize = computed(() => {
  if (breakpoint.value === 'lg') return 6
  if (breakpoint.value === 'md') return 4
  return 8
})

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
  gap: 96px;
  padding-top: 26px;
  padding-bottom: 32px;

  --gradient-height: 170px;
  background: linear-gradient(180deg, #75c7d7 0%, vars.$bg-blue 100%) top center / 100%
      var(--gradient-height) no-repeat,
    vars.$bg-blue;
  &__title {
    margin-bottom: 12px;
  }

  &__tag--top {
    margin-bottom: 16px;
  }

  &__tag--bottom {
    margin-bottom: 24px;
  }
}

.raffle-section__step__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-bottom: 12px;
}

.raffle-card {
  display: flex;
  gap: 22px;
  flex-direction: column;
  align-items: center;
  padding: 52px 12px;
  border-radius: 16px;
  background: #fff;
  &__text {
    text-align: center;
    @include mixins.text-body;
    white-space: wrap;

    &.text--mb {
      margin-bottom: 24px;
    }
  }
}

.step__text {
  display: flex;
  flex-direction: col;
  margin: 32px 0;
  @include mixins.text-body;
  text-align: center;
  white-space: pre-line;
  &.margin-small {
    margin: 20px 0;
  }
  &__note {
    @include mixins.text-caption(#868686);
    text-align: center;
  }
}
.step--lg {
  display: none;
}
.step--sm {
  display: block;
}
.snoopy-lg {
  display: none;
}

.raffle-section__content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.raffle-section__prize__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  margin-bottom: 16px;
}

.raffle-section__prize__wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.step-card {
  display: flex;
  flex-direction: column;

  @include mixins.typography-responsive(18px, 20px, 24px, 32px, 175%, 44px, 700);
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
    @include mixins.text-body(#fff);

    &--right {
      background-color: #ff5660;
    }
  }
  &__img {
    width: 100%;
  }
}

.prize-card {
  &__text {
    @include mixins.text-caption(#868686);
    text-align: center;
  }
  &__prize__text {
    @include mixins.text-body(#000);
  }
  &__prize__quota {
    width: fit-content;
    min-width: 64px;
    padding: 0 12px;
    border-radius: 32px;
    background: vars.$color-white;
    text-align: center;
    @include mixins.typography-responsive(14px, 16px, 18px, 22px, 28px, 36px, 700, #f4aa1c);
  }

  &__prize__quota--right {
    width: fit-content;
    padding: 0 12px;
    border-radius: 32px;
    background: vars.$color-white;
    text-align: center;
    @include mixins.typography-responsive(14px, 16px, 18px, 22px, 28px, 36px, 700, #ff5660);
  }
  &__prize__img {
    width: 108px;
  }
  &__note {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 0;
    width: 100%;
    text-align: left;
    @include mixins.text-note;
    ol {
      list-style: decimal;
      padding-left: 1.5rem;
    }
  }
}

.prize-card__row {
  display: none;
}

.prize-card__row--mobile {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.map__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  &__map {
    width: 100%;
    aspect-ratio: 1/1;
    margin-bottom: 52px;
    border-radius: 12px;
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
    gap: 12px;
  }
}

.stamp__note {
  @include mixins.text-note-lg;
  margin-bottom: 24px;
  text-align: center;
}

.prize-card__note__wrapper {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
}

.snoopy-prize_2 {
  width: 100%;
  max-width: 200px;
}

@media (min-width: 768px) {
  .raffle-section {
    padding-top: 48px;
    padding-bottom: 56px;
    --gradient-height: 200px;
    &__title {
      margin-bottom: 24px;
    }
  }

  .raffle-card {
    padding: 56px 24px;
    border-radius: 24px;
    background: #fff;
    gap: 44px;
    &__text {
      text-align: center;
      white-space: pre-line;
    }
  }

  .step-card {
    flex-direction: row;
    gap: 12px;
    &__col {
      justify-content: space-between;
    }
  }

  .prize-card__row {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 32px;
    align-items: center;
    width: 100%;
  }

  .prize-card__row--mobile {
    display: none;
  }

  .snoopy-lg {
    display: block;
  }

  .snoopy-prize {
    margin-top: 48px;
    max-width: 236px;
  }

  .snoopy-prize_2 {
    max-width: 236px;
  }

  .snoopy-prize_2__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1 1 0;
  }

  .prize-card__note__wrapper {
    display: flex;
    flex-direction: row;
    gap: 32px;
    width: 100%;
  }

  .map__card {
    &__map {
      width: 100%;
      aspect-ratio: 10 / 7;
      margin-bottom: 48px;
      border-radius: 16px;
    }
    &__btn__group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
  }
}

@media (min-width: 1024px) {
  .raffle-section {
    gap: 136px;
    padding-top: 120px;
    padding-bottom: 160px;

    --gradient-height: 368px;
    &__title {
      margin-bottom: 36px;
    }

    &__tag--top {
      margin-bottom: 24px;
    }

    &__tag--bottom {
      margin-bottom: 56px;
    }
  }

  .raffle-section__step__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .raffle-card {
    padding: 80px 100px;
    border-radius: 36px;
    gap: 44px;
    &__text {
      &.text--mb {
        margin-bottom: 36px;
      }
    }
  }

  .step-card {
    gap: 20px;
  }

  .step-card__col {
    .step--lg {
      display: block;
    }
    .step--sm {
      display: none;
    }
  }

  .raffle-section__content {
    gap: 66px;
  }

  .raffle-section__prize__container {
    flex-direction: row;
    gap: 32px;
    margin-bottom: 72px;
  }

  .raffle-section__prize__wrapper {
    gap: 20px;
    margin-top: 20px;
  }

  .prize-card__prize__quota {
    min-width: 80px;
    padding: 0 14px;
  }

  .prize-card__prize__quota--right {
    width: fit-content;
    padding: 0 14px;
  }

  .snoopy-prize {
    margin-top: auto;
  }

  .snoopy-prize_2 {
    max-width: 260px;
  }

  .map__card {
    &__map {
      width: 100%;
      aspect-ratio: 10 / 8;
      margin-bottom: 60px;
      border-radius: 16px;
    }
  }
}

@media (min-width: 1440px) {
  .raffle-section {
    gap: 148px;
    padding-top: 130px;
    padding-bottom: 180px;

    --gradient-height: 400px;
    &__title {
      margin-bottom: 48px;
    }
  }

  .raffle-card {
    padding: 80px 280px;
    border-radius: 40px;
    gap: 44px;
    &__text {
      &.text--mb {
        margin-bottom: 48px;
      }
    }
  }

  .step__text {
    & .step--lg {
      display: block;
    }
    & .step--sm {
      display: none;
    }
  }

  .snoopy-prize {
    max-width: 268px;
  }

  .snoopy-prize_2 {
    max-width: 300px;
  }

  .map__card {
    &__map {
      width: 100%;
      aspect-ratio: 1080 / 548;
      margin-bottom: 60px;
      border-radius: 16px;
    }
  }
}

@media (min-width: 1920px) {
  .raffle-section {
    gap: 172px;
    padding-top: 135px;
    padding-bottom: 194px;

    --gradient-height: 427px;
    &__title {
      margin-bottom: 66px;
    }

    &__tag--top {
      margin-bottom: 32px;
    }

    &__tag--bottom {
      margin-bottom: 76px;
    }
  }

  .raffle-section__step__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 28px;
  }

  .raffle-card {
    padding: 80px 280px;
    border-radius: 40px;
    gap: 44px;
    &__text {
      &.text--mb {
        margin-bottom: 66px;
      }
    }
  }

  .step-card {
    gap: 32px;
  }

  .raffle-section__content {
    gap: 80px;
  }

  .raffle-section__prize__wrapper {
    gap: 20px;
    margin-top: 36px;
  }

  .prize-card__prize__quota {
    min-width: 94px;
    padding: 0 14px;
  }

  .snoopy-prize_2 {
    max-width: 348px;
  }
}
</style>
