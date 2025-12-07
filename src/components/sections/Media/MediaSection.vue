<template>
  <section class="media-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center w-full">
        <SectionTitle preset="media" class="media-section__title" />
        <div class="media__group">
          <div class="media__card media__card--left">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/d51S9qXvBRI?si=d1J7dSa0Sx43mcfq"
              title="YouTube video player"
              frameborder="0"
              allow="clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy"
              class="yt-player"
            ></iframe>
          </div>
          <!-- <div class="media__card media__card--right">
            <div class="media__card__mask"></div>
          </div> -->
        </div>
      </div>
    </Container>
  </section>
</template>
<script setup lang="ts">
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'

// const handleClick = (url: string) => {
//   window.open(url, '_blank', 'noopener,noreferrer')
// }
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.media-section {
  padding-bottom: 40px;
  background-color: vars.$bg-snow;
}

.media-section__title {
  margin-bottom: 16px;
}

.media {
  &__group {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 28px;
  }
  &__card {
    position: relative;
    width: 100%;
    max-width: 620px;
    aspect-ratio: 620/358;
    border-radius: 16px;
    border: 6px solid #75c7d7;
    background-color: #75c7d7;

    &__mask {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 50%);
      border-radius: 6px;
      pointer-events: none;
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
  }
}

.yt-player {
  border-radius: 12px;
}

@media (min-width: 768px) {
  .media-section {
    padding-bottom: 80px;
  }

  .media-section__title {
    margin-bottom: 48px;
  }

  .media__group {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .yt-player {
    border-radius: 12px;
  }
}

@media screen and (min-width: 1024px) {
  .media-section {
    padding-bottom: 132px;
  }

  .media__card--left:hover {
    cursor: pointer;
  }

  .media {
    &__group {
      display: flex;
      flex-direction: row;
      gap: 48px;
      justify-content: center;
    }

    &__card {
      position: relative;
      width: 100%;
      max-width: 620px;
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
    }
  }

  .yt-player {
    border-radius: 12px;
  }
}

@media (min-width: 1440px) {
  .media-section {
    padding-top: 32px;
    padding-bottom: 132px;
  }
}

@media (min-width: 1920px) {
  .media-section__title {
    margin-bottom: 88px;
  }

  .yt-player {
    border-radius: 12px;
  }
}
</style>
