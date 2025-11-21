// export const xinyiEnum = {
//   taipei101:'taipei101',
//   breeze:['BNS','BSG','BXY',],
//   SKM: 'SKM',
//   FEDS:'FEDS',
//   uni:'uni',
//   BELLAVITA:'BELLAVITA',
// }

// Object.entries(xinyiEnum).map(([key, value]) => {
//    if (typeof value === 'object') {
//     const list = value.map((_,index) => {
//       return ({
//         shop
//       })
//     })
//    }
// })

// const test = {
//   locale: 'breeze',
//   shop: ['BNS', 'BSG', 'BXY'],
//   eventList: [xinyiListArray()],
// }

// interface listParams {
//   locale?: string
//   shop: string
//   length: number
//   direction: string
// }

// const listArray = ({ locale, shop, length, direction = 'left' }:listParams) => {
//   return (
//     Array.from({ length },  (_, index) => {
//       const suffix = index === 0 ? '' : index + 1
//       return {
//         title: `sections.promo.${locale}.${shop}.event.${direction}.title${suffix}`,
//         text: `sections.promo.${locale}.${shop}.event.${direction}.text${suffix}`,
//       }
//     }),
//   )
// }

// const xinyiListArray = ({ shop, length, direction = 'left' }:listParams) => {
//   return listArray({locale:'xinyi', shop, length, direction})
// }

export function usePromoLocations() {
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

      eventLeft2: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.breeze.event2.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event2.text${suffix}`,
        }
      }),
      eventRight2: Array.from({ length: 4 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.xinyi.breeze.event2.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event2.text${suffix}`,
        }
      }),

      eventLeft3: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.breeze.event3.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event3.text${suffix}`,
        }
      }),
      eventRight3: Array.from({ length: 3 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.xinyi.breeze.event3.title${suffix}`,
          text: `sections.promo.xinyi.breeze.event3.text${suffix}`,
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
      eventLeft: Array.from({ length: 1 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.SKM.event.title${suffix}`,
          text: `sections.promo.xinyi.SKM.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.xinyi.SKM.event.title${suffix}`,
          text: `sections.promo.xinyi.SKM.event.text${suffix}`,
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
      eventLeft: Array.from({ length: 1 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.FEDS.event.title${suffix}`,
          text: `sections.promo.xinyi.FEDS.event.text${suffix}`,
        }
      }),
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

      eventLeft: Array.from({ length: 1 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.xinyi.uni.event.title${suffix}`,
          text: `sections.promo.xinyi.uni.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.xinyi.uni.event.title${suffix}`,
          text: `sections.promo.xinyi.uni.event.text${suffix}`,
        }
      }),
    },
    // 寶麗廣塲
    BELLAVITA: {
      title: 'sections.promo.xinyi.BELLAVITA.title',
      locationList: [
        {
          locationKey: 'sections.promo.xinyi.BELLAVITA.location',
        },
      ],
    },
  }

  const easternList = {
    // 微風
    breeze: {
      title: 'sections.promo.eastern.breeze.title',
      locationList: [
        {
          shopKey: 'sections.promo.eastern.breeze.shop',
          locationKey: 'sections.promo.eastern.breeze.location',
        },
      ],
      locationList2: [
        {
          shopKey: 'sections.promo.eastern.breeze.shop2',
          locationKey: 'sections.promo.eastern.breeze.location2',
        },
      ],

      eventLeft: Array.from({ length: 4 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.eastern.breeze.event.title${suffix}`,
          text: `sections.promo.eastern.breeze.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 4 }, (_, index) => {
        const suffix = index + 5
        return {
          title: `sections.promo.eastern.breeze.event.title${suffix}`,
          text: `sections.promo.eastern.breeze.event.text${suffix}`,
        }
      }),

      eventLeft2: Array.from({ length: 4 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.eastern.breeze.event2.title${suffix}`,
          text: `sections.promo.eastern.breeze.event2.text${suffix}`,
        }
      }),
      eventRight2: Array.from({ length: 3 }, (_, index) => {
        const suffix = index + 5
        return {
          title: `sections.promo.eastern.breeze.event2.title${suffix}`,
          text: `sections.promo.eastern.breeze.event2.text${suffix}`,
        }
      }),
    },
    // SOGO
    sogo: {
      title: 'sections.promo.eastern.sogo.title',
      locationList: [
        {
          shopKey: 'sections.promo.eastern.sogo.shop',
          locationKey: 'sections.promo.eastern.sogo.location',
        },
      ],
      locationList2: [
        {
          shopKey: 'sections.promo.eastern.sogo.shop2',
          locationKey: 'sections.promo.eastern.sogo.location2',
        },
      ],
      eventLeft: [
        {
          title: `sections.promo.eastern.sogo.event.title`,
          text: `sections.promo.eastern.sogo.event.text`,
        },
      ],
      eventRight: [
        {
          title: `sections.promo.eastern.sogo.event.title2`,
          text: `sections.promo.eastern.sogo.event.text2`,
        },
      ],

      eventLeft2: Array.from({ length: 2 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.eastern.sogo.event2.title${suffix}`,
          text: `sections.promo.eastern.sogo.event2.text${suffix}`,
        }
      }),
      eventRight2: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 3
        return {
          title: `sections.promo.eastern.sogo.event2.title${suffix}`,
          text: `sections.promo.eastern.sogo.event2.text${suffix}`,
        }
      }),
    },

    DT: {
      title: 'sections.promo.eastern.DT.title',
      locationList: [
        {
          locationKey: 'sections.promo.eastern.DT.location',
        },
      ],

      eventLeft: [
        {
          title: `sections.promo.eastern.DT.event.title`,
          text: `sections.promo.eastern.DT.event.text`,
        },
      ],
      eventRight: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.eastern.DT.event.title${suffix}`,
          text: `sections.promo.eastern.DT.event.text${suffix}`,
        }
      }),
    },

    MingYao: {
      title: 'sections.promo.eastern.MingYao.title',
      locationList: [
        {
          locationKey: 'sections.promo.eastern.MingYao.location',
        },
      ],

      eventLeft: [
        {
          title: `sections.promo.eastern.MingYao.event.title`,
          text: `sections.promo.eastern.MingYao.event.text`,
        },
      ],
      eventRight: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.eastern.MingYao.event.title${suffix}`,
          text: `sections.promo.eastern.MingYao.event.text${suffix}`,
        }
      }),
    },

    eslite: {
      title: 'sections.promo.eastern.eslite.title',
      locationList: Array.from({ length: 2 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.eastern.eslite.shop${suffix}`,
          locationKey: `sections.promo.eastern.eslite.location${suffix}`,
        }
      }),

      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.eastern.eslite.event.title${suffix}`,
          text: `sections.promo.eastern.eslite.event.text${suffix}`,
        }
      }),

      eventRight: [
        {
          title: `sections.promo.eastern.eslite.event.title4`,
          text: `sections.promo.eastern.eslite.event.text4`,
        },
      ],
    },

    Taishin: {
      title: 'sections.promo.eastern.Taishin.title',
      body: 'sections.promo.eastern.Taishin.body',
      link: 'sections.promo.eastern.Taishin.link',
    },
  }

  const taipeiList = {
    Dayeh: {
      title: '大葉髙島屋',
      locationList: [
        {
          locationKey: 'sections.promo.taipei.Dayeh.location',
        },
      ],

      eventLeft: [
        {
          title: `sections.promo.taipei.Dayeh.event.title`,
          text: `sections.promo.taipei.Dayeh.event.text`,
        },
      ],
      eventRight: [
        {
          title: `sections.promo.taipei.Dayeh.event.title2`,
          text: `sections.promo.taipei.Dayeh.event.text2`,
        },
      ],
    },
    breeze: {
      title: 'sections.promo.taipei.breeze.title',
      locationList: [
        {
          shopKey: 'sections.promo.taipei.breeze.shop',
          locationKey: 'sections.promo.taipei.breeze.location',
        },
      ],

      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.breeze.event.title${suffix}`,
          text: `sections.promo.taipei.breeze.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.taipei.breeze.event.title${suffix}`,
          text: `sections.promo.taipei.breeze.event.text${suffix}`,
        }
      }),
    },
    SKM: {
      title: 'sections.promo.taipei.SKM.title',
      locationList: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.taipei.SKM.shop${suffix}`,
          locationKey: `sections.promo.taipei.SKM.location${suffix}`,
        }
      }),
      locationList2: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 4
        return {
          shopKey: `sections.promo.taipei.SKM.shop${suffix}`,
          locationKey: `sections.promo.taipei.SKM.location${suffix}`,
        }
      }),
      eventLeft: Array.from({ length: 1 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.SKM.event.title${suffix}`,
          text: `sections.promo.taipei.SKM.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.taipei.SKM.event.title${suffix}`,
          text: `sections.promo.taipei.SKM.event.text${suffix}`,
        }
      }),
      eventRight2: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 3
        return {
          title: `sections.promo.taipei.SKM.event.title${suffix}`,
          text: `sections.promo.taipei.SKM.event.text${suffix}`,
        }
      }),
    },
    eslite: {
      title: 'sections.promo.taipei.eslite.title',
      locationList: Array.from({ length: 4 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          shopKey: `sections.promo.taipei.eslite.shop${suffix}`,
          locationKey: `sections.promo.taipei.eslite.location${suffix}`,
        }
      }),
      locationList2: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 5
        return {
          shopKey: `sections.promo.taipei.eslite.shop${suffix}`,
          locationKey: `sections.promo.taipei.eslite.location${suffix}`,
        }
      }),

      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.eslite.event.title${suffix}`,
          text: `sections.promo.taipei.eslite.event.text${suffix}`,
        }
      }),

      eventRight: [
        {
          title: `sections.promo.taipei.eslite.event.title4`,
          text: `sections.promo.taipei.eslite.event.text4`,
        },
      ],

      eventLeft2: Array.from({ length: 1 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.eslite.event2.title${suffix}`,
          text: `sections.promo.taipei.eslite.event2.text${suffix}`,
        }
      }),

      eventRight2: Array.from({ length: 1 }, (_, index) => {
        const suffix = index + 2
        return {
          title: `sections.promo.taipei.eslite.event2.title${suffix}`,
          text: `sections.promo.taipei.eslite.event2.text${suffix}`,
        }
      }),
    },
    Miramar: {
      title: 'sections.promo.taipei.Miramar.title',
      locationList: [
        {
          locationKey: 'sections.promo.taipei.Miramar.location',
        },
      ],

      eventLeft: [
        {
          title: `sections.promo.taipei.Miramar.event.title`,
          text: `sections.promo.taipei.Miramar.event.text`,
        },
      ],

      eventRight: [
        {
          title: `sections.promo.taipei.Miramar.event.title2`,
          text: `sections.promo.taipei.Miramar.event.text2`,
        },
      ],
    },
    lalaport: {
      title: 'sections.promo.taipei.lalaport.title',
      locationList: [
        {
          locationKey: 'sections.promo.taipei.lalaport.location',
        },
      ],
      body: 'sections.promo.taipei.lalaport.body',
      link: 'sections.promo.taipei.lalaport.link',
    },
    QSquare: {
      title: 'sections.promo.taipei.QSquare.title',
      locationList: [
        {
          locationKey: 'sections.promo.taipei.QSquare.location',
        },
      ],
      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.QSquare.event.title${suffix}`,
          text: `sections.promo.taipei.QSquare.event.text${suffix}`,
        }
      }),

      eventRight: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.taipei.QSquare.event.title${suffix}`,
          text: `sections.promo.taipei.QSquare.event.text${suffix}`,
        }
      }),
    },
    Syntrend: {
      title: 'sections.promo.taipei.Syntrend.title',
      locationList: [
        {
          locationKey: 'sections.promo.taipei.Syntrend.location',
        },
      ],
      eventLeft: Array.from({ length: 3 }, (_, index) => {
        const suffix = index === 0 ? '' : index + 1
        return {
          title: `sections.promo.taipei.Syntrend.event.title${suffix}`,
          text: `sections.promo.taipei.Syntrend.event.text${suffix}`,
        }
      }),
      eventRight: Array.from({ length: 2 }, (_, index) => {
        const suffix = index + 4
        return {
          title: `sections.promo.taipei.Syntrend.event.title${suffix}`,
          text: `sections.promo.taipei.Syntrend.event.text${suffix}`,
        }
      }),
    },
  }

  return {
    xinyiList,
    easternList,
    taipeiList,
  }
}
