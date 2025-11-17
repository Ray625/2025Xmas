export function useTransport() {
  const xinyiList = {
    // 台北101
    taipei101: {
      title: 'sections.promo.xinyi.taipei101.title',
      locationList: [{ locationKey: 'sections.promo.xinyi.taipei101.location' }],
    },
    // 微風
    breeze: {
      title: 'sections.promo.xinyi.breeze.title',
      locationList: [
        {
          shopKey: 'sections.promo.xinyi.breeze.shop',
          locationKey: 'sections.promo.xinyi.breeze.location',
        },
      ],
      locationList2: [
        {
          shopKey: 'sections.promo.xinyi.breeze.shop2',
          locationKey: 'sections.promo.xinyi.breeze.location2',
        },
      ],
      locationList3: [
        {
          shopKey: 'sections.promo.xinyi.breeze.shop3',
          locationKey: 'sections.promo.xinyi.breeze.location3',
        },
      ],
      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.breeze.event.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 3 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.xinyi.breeze.event.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event.text${suffix}`,
        }
      }),
    },
    // 新光三越
    SKM: {
      title: 'sections.promo.xinyi.SKM.title',
      locationList: Array.from({ length: 4 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.xinyi.SKM.shop${suffix}`,
          locationKey: `sections.promo.xinyi.SKM.location${suffix}`,
        }
      }),
    },
    // 遠百
    FEDS: {
      title: 'sections.promo.xinyi.FEDS.title',
      locationList: [
        {
          locationKey: 'sections.promo.xinyi.FEDS.location',
        },
      ],
    },
    // 統一
    uni: {
      title: 'sections.promo.xinyi.uni.title',
      locationList: Array.from({ length: 2 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.xinyi.uni.shop${suffix}`,
          locationKey: `sections.promo.xinyi.uni.location${suffix}`,
        }
      }),
    },
    // 寶麗廣場
    BELLAVITA: {
      title: 'sections.promo.xinyi.BELLAVITA.title',
      locationList: [
        {
          locationKey: 'sections.promo.xinyi.BELLAVITA.location',
        },
      ],
    },
  }

  const taipeiList = {
    eslite: {
      title: 'sections.promo.taipei.eslite.title',
      locationList: Array.from({ length: 4 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.taipei.eslite.shop${suffix}`,
          locationKey: `sections.promo.taipei.eslite.location${suffix}`,
        }
      }),
    },
  }

  return {}
}
