<template>
  <section class="media-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="media" class="mb-[88px]" />
        <div class="media__group">
          <div
            class="media__card media__card--left"
            @click.self="handleClick('https://www.youtube.com/watch?v=d51S9qXvBRI')"
          >
            <div class="media__card__mask"></div>
          </div>
          <div class="media__card media__card--right">
            <div class="media__card__mask"></div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

const handleClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.media-section {
  padding-top: 80px;
  padding-bottom: 132px;
  background-color: vars.$bg-snow;
}

.media {
  &__group {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }
  &__card {
    position: relative;
    width: 620px;
    max-width: 100%;
    aspect-ratio: 620/358;
    border-radius: 16px;
    border: 10px solid #75c7d7;

    &__mask {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 50%);
      border-radius: 6px;
      pointer-events: none;
    }

    &--left {
      background-image: url('@/assets/mock/media_left.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &--right {
      background-image: url('@/assets/mock/media_right.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 41.3%;
      background-image: url('@/assets/img/section_10_bow.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      transform: translate(-50%, -53%);
      aspect-ratio: 248/72;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70px;
      height: 70px;
      background-image: url('@/assets/img/section_10_icon-play.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      transform: translate(-50%, -50%);
    }
  }
}

@media screen and (min-width: 1024px) {
  .media__card--left:hover {
    cursor: pointer;
  }
}
</style>
