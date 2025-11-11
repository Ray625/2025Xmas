<template>
  <header class="site-header">
    <div class="gradient-bar">
      <Container class="header-inner" size="xxl">
        <nav class="nav">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-item"
          >
            <img :src="item.icon" :alt="item.label" class="nav-item__icon" />
            <span>{{ item.label }}</span>
          </a>
        </nav>
        <div class="header-actions">
          <button class="lang-btn" type="button">EN</button>
          <a
            class="social"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>f</span>
          </a>
          <a
            class="social"
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>▶</span>
          </a>
        </div>
      </Container>
    </div>
  </header>
</template>

<script setup lang="ts">
import Container from "./Container.vue";
import giftIcon from "../../assets/icon/gift.svg";
import bellIcon from "../../assets/icon/bell.svg";
import lightsIcon from "../../assets/icon/lights.svg";
import treeIcon from "../../assets/icon/tree.svg";
import ballIcon from "../../assets/icon/ball.svg";
import busIcon from "../../assets/icon/bus.svg";
import mailIcon from "../../assets/icon/mail.svg";
import playIcon from "../../assets/icon/play.svg";

const navItems = [
  { label: "光之覓境雙重抽", href: "#raffle", icon: giftIcon },
  { label: "百貨優惠", href: "#promo", icon: bellIcon },
  { label: "耶誕燈飾", href: "#lights", icon: lightsIcon },
  { label: "信義空橋妝點", href: "#landmark", icon: treeIcon },
  { label: "聚客展演", href: "#performance", icon: playIcon },
  { label: "影音專區", href: "#media", icon: ballIcon },
  { label: "交通資訊", href: "#transportation", icon: busIcon },
  { label: "聯絡我們", href: "#contact", icon: mailIcon },
];
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 68px;
}

.gradient-bar {
  background: linear-gradient(90deg, #dc1f9e 0%, #5e4fd4 100%);
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 30px rgba(96, 148, 234, 0.3);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 0.75rem;
}

.nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 0.25rem;
}

.nav::-webkit-scrollbar {
  display: none;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.nav-item:hover {
  opacity: 0.6;
}

.nav-item__icon {
  width: 24px;
}

.header-actions {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.lang-btn {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.65);
  background: transparent;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.1em;
  cursor: pointer;
}

.social {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.social span {
  transform: translateX(1px);
}

@media (max-width: 960px) {
  .header-inner {
    flex-direction: column;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>
