<template>
  <section class="promo-section">
    <Container maxWidth="1440px">
      <div class="flex flex-col items-center">
        <SectionTitle preset="promo" class="promo-section__title" />
        <div class="w-full relative promo-section__tabs">
          <SectionTabs v-model="activeTab" :tabs="tabs" />
          <img :src="snoopyTabsXinyi" alt="snoopy img" class="snoopyXinyi" :class="{ en: isEn }" />
          <img
            :src="snoopyTabsEastern"
            alt="snoopy img"
            class="snoopyEastern"
            :class="{ en: isEn }"
          />
          <img
            :src="snoopyTabsTaipei"
            alt="snoopy img"
            class="snoopyTaipei"
            :class="{ en: isEn }"
          />
        </div>
        <!-- 信義區 -->
        <Card
          v-if="activeTab === 0"
          title-key="sections.promo.xinyi.title"
          bodyPadding="40px"
          :show-title="breakpoint === 'sm' || breakpoint === 'xs' ? false : true"
          :bg-color="breakpoint === 'sm' || breakpoint === 'xs' ? 'transparent' : '#FFF'"
          smBodyPadding="0"
          md-body-padding="0"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 4)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(8, 6, 4)[breakpoint] : snoopyListRight(11, 8, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
        >
          <div class="area-list">
            <!-- 台北101 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.taipei101.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.taipei101.locationList_m
                  : xinyiList.taipei101.locationList
              "
              :defaultOpen="true"
            >
              <template #detail>
                <div class="">
                  {{ t('sections.promo.xinyi.taipei101.body') }}
                </div>
              </template>
            </CardLocale>
            <!-- 微風南山 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.breeze.title
              "
              :locationList="xinyiList.breeze.locationList"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 微風松高 -->
            <CardLocale :locationList="xinyiList.breeze.locationList2">
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 微風信義 -->
            <CardLocale :locationList="xinyiList.breeze.locationList3">
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventLeft3"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.breeze.eventRight3"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 新光三越 -->
            <CardLocale
              v-if="['xl', 'lg', 'md'].includes(breakpoint)"
              :title="xinyiList.SKM.title"
              :locationList="xinyiList.SKM.locationList"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 新光三越 手機版-->
            <CardLocale
              v-if="['xs', 'sm'].includes(breakpoint)"
              v-for="locale in xinyiList.SKM.locationList_m"
              :locationList="[locale]"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.SKM.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 遠百信義A13 -->
            <CardLocale
              :title="breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.FEDS.title"
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.FEDS.locationList_m
                  : xinyiList.FEDS.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1 relative snoopy-bg">
                    <CardEvent
                      v-for="(event, index) in xinyiList.FEDS.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 統一時代百貨 -->
            <CardLocale
              :title="breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.uni.title"
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.uni.locationList_m
                  : xinyiList.uni.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              :title="breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.uni.title2"
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.uni.locationList2_m
                  : xinyiList.uni.locationList2
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.uni.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- BELLAVITA 寶麗廣塲 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.BELLAVITA.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.BELLAVITA.locationList_m
                  : xinyiList.BELLAVITA.locationList
              "
            >
              <template #detail>
                <div>
                  <span>
                    {{ t('sections.promo.xinyi.BELLAVITA.body') }}
                  </span>
                  <a
                    href="https://www.bellavita.com.tw/catalogue/goodslist.php?d=522"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline"
                    >{{ t('sections.promo.xinyi.BELLAVITA.link') }}</a
                  >
                </div>
              </template>
            </CardLocale>
            <!-- ATT 4 FUN -->
            <CardLocale
              :title="breakpoint === 'sm' || breakpoint === 'xs' ? undefined : xinyiList.ATT.title"
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? xinyiList.ATT.locationList_m
                  : xinyiList.ATT.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.ATT.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in xinyiList.ATT.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
          </div>
        </Card>
        <!-- 東區商圈 -->
        <Card
          v-if="activeTab === 1"
          title-key="sections.promo.eastern.title"
          textBgColor="#FF8E9F"
          bodyPadding="40px"
          :show-title="breakpoint === 'sm' || breakpoint === 'xs' ? false : true"
          :bg-color="breakpoint === 'sm' || breakpoint === 'xs' ? 'transparent' : '#FFF'"
          smBodyPadding="0"
          md-body-padding="0"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(8, 6, 4)[breakpoint]?.reverse()
              : snoopyListLeft(11, 9, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(8, 6, 4)[breakpoint] : snoopyListRight(11, 9, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#FFB8C3"
        >
          <div class="area-list">
            <!-- 微風廣場 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : easternList.breeze.title
              "
              :locationList="easternList.breeze.locationList"
              :default-open="true"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.breeze.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.breeze.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 微風南京 -->
            <CardLocale :locationList="easternList.breeze.locationList2">
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.breeze.eventLeft2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.breeze.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 遠東SOGO百貨 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : easternList.sogo.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? easternList.sogo.locationList_m
                  : easternList.sogo.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.sogo.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.sogo.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? easternList.sogo.locationList2_m
                  : easternList.sogo.locationList2
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.sogo.eventLeft2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1 snoopy-bg">
                    <CardEvent
                      v-for="(event, index) in easternList.sogo.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              :title="breakpoint === 'sm' || breakpoint === 'xs' ? undefined : easternList.DT.title"
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? easternList.DT.locationList_m
                  : easternList.DT.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.DT.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.DT.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : easternList.MingYao.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? easternList.MingYao.locationList_m
                  : easternList.MingYao.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.MingYao.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1 relative">
                    <CardEvent
                      v-for="(event, index) in easternList.MingYao.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 東區誠品 -->
            <CardLocale
              v-if="['xl', 'lg', 'md'].includes(breakpoint)"
              :title="easternList.eslite.title"
              :locationList="easternList.eslite.locationList"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <CardLocale
              v-if="['xs', 'sm'].includes(breakpoint)"
              v-for="locale in easternList.eslite.locationList_m"
              :locationList="[locale]"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : easternList.Taishin.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs' ? easternList.Taishin.locationList_m : []
              "
              :default-open="['xl', 'md', 'lg'].includes(breakpoint)"
              :show-btb="!['xl', 'md', 'lg'].includes(breakpoint)"
            >
              <template #detail>
                <span>
                  <span>
                    {{ t(`${easternList.Taishin.body}`) }}
                  </span>
                  <a
                    href="https://tsbk.tw/8awa5x/"
                    class="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t(`${easternList.Taishin.link}`) }}
                  </a>
                  。
                </span>
              </template>
            </CardLocale>
          </div>
        </Card>
        <Card
          v-if="activeTab === 2"
          title-key="sections.promo.taipei.title"
          textBgColor="#5E4FD4"
          bodyPadding="40px"
          :show-title="breakpoint === 'sm' || breakpoint === 'xs' ? false : true"
          :bg-color="breakpoint === 'sm' || breakpoint === 'xs' ? 'transparent' : '#FFF'"
          smBodyPadding="0"
          md-body-padding="0"
          :title-bg-list-left="
            isEn
              ? snoopyListLeft(7, 5, 3)[breakpoint]?.reverse()
              : snoopyListLeft(11, 8, 7)[breakpoint]?.reverse()
          "
          :title-bg-list-right="
            isEn ? snoopyListRight(7, 5, 3)[breakpoint] : snoopyListRight(11, 8, 7)[breakpoint]
          "
          :title-bg-gap="snoopyListGap[breakpoint]"
          title-bg-color="#9A8FED"
        >
          <div class="area-list">
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.Dayeh.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.Dayeh.locationList_m
                  : taipeiList.Dayeh.locationList
              "
              :defaultOpen="true"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Dayeh.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Dayeh.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.breeze.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.breeze.locationList_m
                  : taipeiList.breeze.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.breeze.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.breeze.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              v-if="['xl', 'lg', 'md'].includes(breakpoint)"
              :title="taipeiList.SKM.title"
              :locationList="taipeiList.SKM.locationList"
              :superlong="true"
              :col="true"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 新光手機版 -->
            <CardLocale
              v-if="['xs', 'sm'].includes(breakpoint)"
              v-for="locale in taipeiList.SKM.locationList_m"
              :locationList="[locale]"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <CardLocale
              v-if="['xl', 'lg', 'md'].includes(breakpoint)"
              :locationList="taipeiList.SKM.locationList2"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <CardLocale
              v-if="['xs', 'sm'].includes(breakpoint)"
              v-for="locale in taipeiList.SKM.locationList2_m"
              :locationList="[locale]"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.SKM.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>

            <!-- 誠品 -->
            <CardLocale
              v-if="['xl', 'lg', 'md'].includes(breakpoint)"
              :title="taipeiList.eslite.title"
              :locationList="taipeiList.eslite.locationList"
              :superlong="true"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.eslite.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.eslite.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 誠品手機版 -->
            <CardLocale
              v-if="['xs', 'sm'].includes(breakpoint)"
              v-for="locale in taipeiList.eslite.locationList_m"
              :locationList="[locale]"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in easternList.eslite.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <CardLocale
              :locationList="
                ['xs', 'sm'].includes(breakpoint)
                  ? taipeiList.eslite.locationList2_m
                  : taipeiList.eslite.locationList2
              "
              :col="true"
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.eslite.eventLeft2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.eslite.eventRight2"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 美麗華百樂園 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.Miramar.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.Miramar.locationList_m
                  : taipeiList.Miramar.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Miramar.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Miramar.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- LaLaport -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.lalaport.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.lalaport.locationList_m
                  : taipeiList.lalaport.locationList
              "
            >
              <template #detail>
                <span>
                  <span>
                    {{ t(`${taipeiList.lalaport.body}`) }}
                  </span>
                  <a
                    href="https://www.mitsui-shopping-park.com.tw/lalaport/nangang/tw/news_detail.html?id=9d93dbe6"
                    class="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ t(`${taipeiList.lalaport.link}`) }}
                  </a>
                  。
                </span>
              </template>
            </CardLocale>
            <!-- 京站時尚廣場 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.QSquare.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.QSquare.locationList_m
                  : taipeiList.QSquare.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.QSquare.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.QSquare.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
            <!-- 三創生活園區 -->
            <CardLocale
              :title="
                breakpoint === 'sm' || breakpoint === 'xs' ? undefined : taipeiList.Syntrend.title
              "
              :locationList="
                breakpoint === 'sm' || breakpoint === 'xs'
                  ? taipeiList.Syntrend.locationList_m
                  : taipeiList.Syntrend.locationList
              "
            >
              <template #detail>
                <div class="locale-card__list">
                  <div class="flex flex-col gap-4 flex-1">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Syntrend.eventLeft"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                  <div class="flex flex-col gap-4 flex-1 relative snoopy-bg">
                    <CardEvent
                      v-for="(event, index) in taipeiList.Syntrend.eventRight"
                      :key="index"
                      :eventData="event"
                    />
                  </div>
                </div>
              </template>
            </CardLocale>
          </div>
        </Card>
      </div>
    </Container>
    <img :src="snoopyCandyM" alt="snoopy background" class="snoopy-candy-m" />
    <img :src="snoopyCandy" alt="snoopy background" class="snoopy-candy" />
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Container from '@/components/layout/Container.vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import SectionTabs from '@/components/common/SectionTabs.vue'
import Card from '@/components/common/Card.vue'
import CardLocale from '@/components/common/CardLocale.vue'
import CardEvent from '@/components/common/CardEvent.vue'
import snoopyTabsXinyi from '@/assets/img/section_06_btn_01.png'
import snoopyTabsEastern from '@/assets/img/section_06_btn_02.png'
import snoopyTabsTaipei from '@/assets/img/section_06_btn_03.png'
import snoopyCandy from '@/assets/img/section_06_candy.png'
import snoopyCandyM from '@/assets/img/m_section_06_candy.png'

import { useI18n } from 'vue-i18n'
import { usePromoLocations } from '@/components/sections/Promo/const'
import { tabsConfig } from '@/data/const'
import { useViewport } from '@/composables/useViewport'
const { breakpoint } = useViewport()
import { snoopyListLeft, snoopyListRight, snoopyListGap } from '@/data/const'

const { t, locale } = useI18n()

const isEn = computed(() => locale.value.startsWith('en'))

const activeTab = ref(0)
const tabs = computed(() => tabsConfig.map((tab) => ({ key: tab.key, label: t(tab.labelKey) })))
const { xinyiList, easternList, taipeiList } = usePromoLocations()
</script>
<style scoped lang="scss">
@use '@/styles/_variables' as vars;
@use '@/styles/_mixins' as mixins;

.promo-section {
  padding-top: 12px;
  background-color: vars.$bg-green;
}

.promo-section__title {
  margin-bottom: 20px;
}

.promo-section__tabs {
  margin-bottom: 12px;
}

.snoopyXinyi {
  position: absolute;
  width: 100%;
  max-width: 70px;
  top: 28px;
  left: 12px;
  pointer-events: none;
  user-select: none;
  &.en {
    top: 20px;
    left: -20px;
  }
}

.snoopyEastern {
  position: absolute;
  width: 100%;
  top: 64px;
  right: -8px;
  max-width: 78px;
  pointer-events: none;
  user-select: none;
  &.en {
    right: -28px;
  }
}

.snoopyTaipei {
  display: none;
  pointer-events: none;
  user-select: none;
}

.locale-card__list {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.area-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.snoopy-bg {
  background-image: url('@/assets/img/section_06_snoopy.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;
}

.snoopy-candy-m {
  position: relative;
  z-index: 10;
  width: 100%;
  height: auto;
  margin-top: 40px;
  margin-bottom: -2px;
  pointer-events: none;
  user-select: none;
}

.snoopy-candy {
  display: none;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 768px) {
  .promo-section__tabs {
    margin-bottom: 20px;
  }

  .area-list {
    gap: 20px;
  }

  .snoopyXinyi {
    max-width: 78px;
    top: 24px;
    left: 10px;
    &.en {
      top: 24px;
      left: 10px;
    }
  }

  .snoopyEastern {
    top: 72px;
    right: -8px;
    max-width: 84px;
    &.en {
      top: 72px;
      right: -8px;
    }
  }

  .snoopy-candy-m {
    display: none;
  }

  .snoopy-candy {
    position: relative;
    z-index: 10;
    display: block;
    width: 100%;
    height: auto;
    margin-top: 40px;
    margin-bottom: -2px;
  }
}

@media (min-width: 1024px) {
  .promo-section__title {
    margin-bottom: 60px;
  }

  .promo-section__tabs {
    margin-bottom: 50px;
  }

  .locale-card__list {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  .snoopyXinyi {
    top: 12px;
    left: -12px;
    max-width: 80px;
    &.en {
      top: 12px;
      left: -12px;
    }
  }

  .snoopyEastern {
    top: 32px;
    right: 318px;
    max-width: 88px;
    &.en {
      top: 32px;
      right: 308px;
    }
  }

  .snoopyTaipei {
    position: absolute;
    top: -12px;
    right: -30px;
    display: block;
    width: 100%;
    max-width: 88px;
  }

  .snoopy-candy {
    margin-top: 80px;
  }
}

@media (min-width: 1440px) {
  .snoopyXinyi {
    top: -4px;
    left: 60px;
    max-width: 92px;
    &.en {
      top: -4px;
      left: 60px;
    }
  }

  .snoopyEastern {
    top: 20px;
    right: 404px;
    max-width: 104px;
    &.en {
      top: 20px;
      right: 380px;
    }
  }

  .snoopyTaipei {
    top: -48px;
    right: 60px;
    max-width: 104px;
    &.en {
      top: -48px;
      right: 38px;
    }
  }

  .snoopy-candy {
    margin-top: 120px;
  }
}

@media (min-width: 1920px) {
  .promo-section__title {
    margin-bottom: 100px;
  }

  .promo-section__tabs {
    margin-bottom: 88px;
  }

  .area-list {
    gap: 32px;
  }

  .snoopyXinyi {
    top: -18px;
    left: 132px;
    max-width: 103px;
    &.en {
      top: -12px;
      left: 116px;
    }
  }

  .snoopyEastern {
    top: 12px;
    right: 524px;
    max-width: 116px;
    &.en {
      top: 16px;
      right: 480px;
    }
  }

  .snoopyTaipei {
    top: -68px;
    right: 132px;
    max-width: 116px;
    &.en {
      top: -64px;
      right: 118px;
    }
  }

  .snoopy-candy {
    margin-top: 180px;
  }
}
</style>
