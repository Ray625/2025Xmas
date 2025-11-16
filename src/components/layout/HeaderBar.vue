<template>
  <header class="site-header">
    <div class="gradient-bar">
      <Container class="header-inner" maxWidth="1464px">
        <nav class="nav">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="nav-item">
            <img :src="item.icon" :alt="t(`header.nav.${item.key}`)" class="nav-item__icon" />
            <span>{{ t(`header.nav.${item.key}`) }}</span>
          </a>
        </nav>
        <div class="header-actions">
          <button class="lang-btn hover" type="button" @click="toggleLocale">
            {{ t('header.lang') }}
          </button>
          <a
            class="social hover"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
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
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            :aria-label="t('header.socials.youtube')"
          >
            <img
              :src="social_yt"
              :alt="t(`header.socials.youtube`)"
              class="nav-item__icon__social"
            />
          </a>
        </div>
      </Container>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Container from '@/components/layout/Container.vue'
import { navConfig } from '@/data/navigation'
import giftIcon from '@/assets/icon/gift.svg'
import bellIcon from '@/assets/icon/bell.svg'
import lightsIcon from '@/assets/icon/lights.svg'
import treeIcon from '@/assets/icon/tree.svg'
import ballIcon from '@/assets/icon/ball.svg'
import busIcon from '@/assets/icon/bus.svg'
import mailIcon from '@/assets/icon/mail.svg'
import playIcon from '@/assets/icon/play.svg'
import social_fb from '@/assets/icon/social_fb.svg'
import social_yt from '@/assets/icon/social_yt.svg'

const iconMap: Record<string, string> = {
  raffle: giftIcon,
  promo: bellIcon,
  lights: ballIcon,
  landmark: lightsIcon,
  performance: treeIcon,
  media: playIcon,
  transportation: busIcon,
  contact: mailIcon,
}

const navItems = navConfig.map((item) => ({
  ...item,
  icon: iconMap[item.key],
}))

const { t, locale } = useI18n()

const toggleLocale = () => {
  return
  // locale.value = locale.value === "zh-TW" ? "en" : "zh-TW"
}
</script>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  height: 68px;
}

.gradient-bar {
  height: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
  box-shadow: 0px 4px 40px 0px #0000001a;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav {
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
}

.nav::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  gap: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s ease;
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
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}

.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 32px;
  border-radius: 999px;
  padding: 10px 12px;
  outline: 1px solid white;
  outline-offset: -1px;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  line-height: 100%;
  font-weight: 600;
  letter-spacing: 0;
  cursor: pointer;
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

.hover {
  transition: opacity 0.2s ease;
}

.hover:hover {
  opacity: 0.6;
}

@media (max-width: 960px) {
}
</style>
