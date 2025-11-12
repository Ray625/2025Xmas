<template>
  <section class="raffle-section">
    <Container class="raffle-section__inner" maxWidth="1440px">
      <div class="raffle-card">
        <p
          v-for="(paragraph, paragraphIndex) in textRows"
          :key="`paragraph-${paragraphIndex}`"
          class="raffle-card__text"
        >
          <p
            v-for="(segment, segmentIndex) in paragraph"
            :key="`segment-${segmentIndex}`"
          >
            {{ segment }}
            <br v-if="segmentIndex < paragraph.length - 1" />
          </p>
          <br v-if="paragraphIndex < textRows.length - 1" />
        </p>
      </div>
    </Container>
    <SectionTitle title="光之覓境雙重抽" bg-color="#FF7628" id="raffle"/>
    <SectionTitle title="百貨優惠" bg-color="#E3007F"  />

  </section>
</template>

<script setup lang="ts">
import Container from "@/components/layout/Container.vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const textRows = computed(() => {
  const content = t("sections.raffle.cardText");
  return content
    .split("\n\n")
    .map((paragraph) => paragraph.split("\n").filter(Boolean))
    .filter((paragraph) => paragraph.length > 0);
});
</script>

<style scoped lang="scss">
.raffle-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 172px;
  padding: 135px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28px;
    line-height: 44px;
    font-weight: 700;
    color: #001a7d;
  }
}

@media (min-width: 1024px) {
}
</style>
