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
      <SectionTitle preset="raffle" />
      <Card title-key="sections.raffle.rules.title">
        <p class="raffle-card__text">
          {{ t("sections.raffle.rules.text") }}
        </p>
      </Card>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "@/components/layout/Container.vue";
import Card from "@/components/common/Card.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped lang="scss">
@use "@/styles/_variables" as vars;

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

@media (min-width: 1024px) {
}
</style>
