<template>
  <div id="top" class="page">
    <HeaderBar />
    <main>
      <HeroBanner />
      <section
        v-for="section in sections"
        :key="section.id"
        :id="section.id"
        class="content-section"
      >
        <Container>
          <SectionTitle
            :title="section.title"
            :eyebrow="section.eyebrow"
            :align="section.align ?? 'left'"
          >
            <template #description>
              {{ section.description }}
            </template>
          </SectionTitle>
          <div class="section__body">
            <p class="section__lead">
              {{ section.lead }}
            </p>
            <ul v-if="section.points?.length" class="section__list">
              <li v-for="point in section.points" :key="point">
                {{ point }}
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
    <footer class="footer">
      <Container class="footer__inner">
        <p>© 2025 Taipei Christmas Festival · Department of Information and Tourism</p>
        <a href="#top">回到頁首</a>
      </Container>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from './components/layout/HeaderBar.vue'
import HeroBanner from './components/sections/HeroBanner.vue'
import Container from './components/layout/Container.vue'
import SectionTitle from './components/common/SectionTitle.vue'

type Section = {
  id: string
  title: string
  eyebrow?: string
  lead: string
  description: string
  points?: string[]
  align?: 'left' | 'center'
}

const sections: Section[] = [
  {
    id: 'highlights',
    title: '活動亮點',
    eyebrow: 'Highlights',
    lead: '三大主題燈區、沉浸式聲光劇場與戶外巨型裝置，營造最具節慶感的冬夜散步路線。',
    description:
      '與北歐設計團隊合作，打造跨域裝置藝術，並結合在地品牌推出限定燈光互動，每晚整點有 6 分鐘聲光秀。',
    points: ['北境極光燈區', '雪景光廊', '耶誕合唱舞台'],
  },
  {
    id: 'market',
    title: '聖誕市集',
    eyebrow: 'Xmas Market',
    lead: '特色攤商超過 120 攤，聚焦手作禮品、冬季甜點與風格咖啡，為送禮增添儀式感。',
    description:
      '市集採分區主題策展，並設置循環杯租借、零現金支付與外語指引，讓旅客與市民都能輕鬆逛好逛滿。',
    points: ['職人選物', '國際餐車', '公益聯名區'],
  },
  {
    id: 'schedule',
    title: '節目資訊',
    eyebrow: 'Performance',
    lead: '連續 15 晚的舞台節目，涵蓋交響樂、原民歌舞、DJ 派對與親子劇場，週末加碼煙火秀。',
    description:
      '除了重量級卡司壓軸，也規畫新秀舞台讓年輕創作者登場，並提供線上直播方便外地旅客同樂。',
    points: ['開幕點燈儀式 12/01 19:00', '聖誕夜主場 12/24', '跨年倒數前夜祭 12/30'],
  },
  {
    id: 'transportation',
    title: '交通方式',
    eyebrow: 'Access',
    lead: '主場域位於台北市政府廣場，鄰近捷運板南線市政府站與台北捷運轉運站，步行 3 分鐘即可抵達。',
    description:
      '活動期間啟動交通疏運與無障礙服務，建議搭乘大眾運輸並提早 20 分鐘入場。夜間提供接駁公車往返信義安和站。',
    points: ['捷運站 2、3 號出口', 'YouBike 站點 6 處', '無障礙接駁預約專線'],
  },
  {
    id: 'volunteer',
    title: '志工/合作伙伴',
    eyebrow: 'Join Us',
    align: 'center',
    lead: '歡迎品牌、社群與志工一同響應，無論是贊助活動、共同策展或導覽解說，都能為台北的聖誕季注入更多創意。',
    description:
      '提供多種合作方案與志工培訓課程，活動前後皆有充足彩排，並提供紀念品與感謝證書。',
    points: ['企業認養燈區', '校園社團快閃舞台', '多語導覽志工'],
  },
]
</script>
