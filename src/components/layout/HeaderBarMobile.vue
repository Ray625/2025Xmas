<template>
  <button class="nav-hamburger" type="button" :aria-expanded="navOpen" @click="toggleNavOpen">
    <div class="nav-hamburger__inner"></div>
  </button>
  <div v-if="navOpen" class="nav-overlay" @click="toggleNavOpen"></div>
  <header class="site-header" :class="{ 'nav-open': navOpen, 'site-header-en': isEn }">
    <div class="gradient-bar">
      <button class="nav__close-btn hover" @click="toggleNavOpen">
        <img :src="buttonX" alt="close button" />
      </button>
      <nav class="nav">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="nav-item"
          @click="toggleNavOpen"
        >
          <img :src="item.icon" :alt="t(`header.nav.${item.key}`)" class="nav-item__icon" />
          <span v-if="!isEn">{{ t(`header.nav.${item.key}`) }}</span>
          <span v-if="isEn" class="whitespace-pre-line">{{ t(`header.navEn.${item.key}`) }}</span>
        </a>
      </nav>
      <div class="header-actions">
        <!-- 下載按鈕 -->
        <!-- <button class="download-btn hover">
          {{ t(`header.download_m`) }}
          <img :src="buttonDownload" alt="download btn" class="download-btn__icon" />
        </button> -->
        <!-- 中英切換按鈕 -->
        <div class="header-actions__lang">
          <button
            class="lang-btn hover"
            :class="{ active: locale === 'zh-TW' }"
            type="button"
            @click="toggleLocaleToTW"
          >
            {{ t('header.lang_ch_m') }}
          </button>
          <button
            class="lang-btn hover"
            :class="{ active: locale === 'en' }"
            type="button"
            @click="toggleLocaleToEn"
          >
            {{ t('header.lang_en_m') }}
          </button>
        </div>
        <div class="header-actions__social">
          <a
            class="social hover"
            href="https://www.facebook.com/tcooc?locale=zh_TW"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('header.socials.facebook')"
          >
            <img
              :src="social_fb"
              :alt="t(`header.socials.facebook`)"
              class="nav-item__icon__social"
            />
          </a>
          <a
            class="social hover"
            href="https://www.youtube.com/watch?v=d51S9qXvBRI"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('header.socials.youtube')"
          >
            <img
              :src="social_yt"
              :alt="t(`header.socials.youtube`)"
              class="nav-item__icon__social"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { navConfig } from '@/data/navigation'
import giftIcon from '@/assets/icon/gift.svg'
import bellIcon from '@/assets/icon/bell.svg'
import lightsIcon from '@/assets/icon/lights.svg'
import treeIcon from '@/assets/icon/tree.svg'
import ballIcon from '@/assets/icon/ball.svg'
import busIcon from '@/assets/icon/bus.svg'
import mailIcon from '@/assets/icon/mail.svg'
import playIcon from '@/assets/icon/play.svg'
import mapIcon from '@/assets/icon/map_white.svg'
import buttonX from '@/assets/icon/X.svg'
// import buttonDownload from '@/assets/icon/download.svg'
import social_fb from '@/assets/icon/social_fb.svg'
import social_yt from '@/assets/icon/social_yt.svg'

import { ref, watch, onBeforeUnmount, computed } from 'vue'

const iconMap: Record<string, string> = {
  raffle: giftIcon,
  map: mapIcon,
  promo: bellIcon,
  lights: ballIcon,
  landmark: lightsIcon,
  performance: treeIcon,
  media: playIcon,
  transportation: busIcon,
  contact: mailIcon,
}

const navItems = navConfig
  .filter((item) => item.key !== 'activity')
  .map((item) => ({
    ...item,
    icon: iconMap[item.key],
  }))

const { t, locale } = useI18n()
// const { t } = useI18n()
const isEn = computed(() => locale.value.startsWith('en'))

const toggleLocaleToTW = () => {
  if (locale.value === 'zh-TW') return
  locale.value = 'zh-TW'
}

const toggleLocaleToEn = () => {
  if (locale.value === 'en') return
  locale.value = 'en'
}

const navOpen = ref(false)

const toggleNavOpen = () => {
  navOpen.value = !navOpen.value
}

watch(navOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.nav-hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  min-width: 64px;
  aspect-ratio: 1/1;
  background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
  z-index: 1001;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px #0000004d;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.nav-hamburger__inner {
  position: relative;
  width: 25px;
  min-width: 25px;
  height: 3px;
  background-color: #fff;
  border-radius: 4px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    width: 25px;
    min-width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;
  }
  &::after {
    top: -8px;
  }
  &::before {
    bottom: -8px;
  }
}

.site-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1001;
  height: 100vh;
  width: 80%;
  max-width: 320px;
  transform: translate(100%, 0);
  &.nav-open {
    transform: translate(0);
  }
}
.site-header-en {
  max-width: 400px;
}

.nav__close-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  top: 20px;
  right: 20px;
  z-index: 10;
}

.gradient-bar {
  height: 100%;
  padding: 40px 20px 40px 32px;
  background-color: #6a8ac6;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex-wrap: nowrap;
  padding-bottom: 32px;
  border-bottom: 1px solid #fff;
  margin-bottom: 32px;
}

.nav::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px 8px 0;
  gap: 8px;
  @include mixins.typography(18px, 32px, 700, vars.$color-white);
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}

.download-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  @include mixins.typography(18px, 32px, 700, vars.$color-white);
}

.download-btn__icon {
  transform: translate(0, 1px);
}

.nav-item:hover {
  opacity: 0.6;
}

.nav-item__icon {
  width: 24px;
  &__social {
    width: 40px;
  }
}

.header-actions {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 32px;
  border-radius: 4px;
  padding: 10px 12px;
  background: transparent;
  @include mixins.typography(16px, 100%, 600, vars.$color-white);
  cursor: pointer;
  &.active {
    outline: 1px solid white;
    outline-offset: -1px;
  }
}

.social {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.header-actions__lang {
  display: flex;
  flex-direction: row;
}

.header-actions__social {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

@media (min-width: 768px) {
  .nav {
    gap: 4px;
  }

  .nav-hamburger {
    top: 40px;
    right: 40px;
  }
}

@media (min-width: 1024px) {
  .nav-hamburger {
    top: 60px;
    right: 60px;
  }

  .nav-hamburger {
    transition: background 0.2s ease, background-color 0.2s ease;
    .nav-hamburger__inner {
      transition: background 0.2s ease, background-color 0.2s ease;

      &::after,
      &::before {
        transition: background 0.2s ease, background-color 0.2s ease;
      }
    }
  }

  .nav-hamburger:hover {
    background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
    background: #fff;
    .nav-hamburger__inner {
      background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
      &::after,
      &::before {
        background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
      }
    }
  }

  .nav-hamburger__inner {
    position: relative;
    width: 25px;
    min-width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;
    &::after,
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      width: 25px;
      min-width: 25px;
      height: 3px;
      background-color: #fff;
      border-radius: 4px;
    }
    &::after {
      top: -8px;
    }
    &::before {
      bottom: -8px;
    }
  }

  .hover {
    transition: opacity 0.2s ease;
  }

  .hover:hover {
    opacity: 0.6;
  }
}
</style>
