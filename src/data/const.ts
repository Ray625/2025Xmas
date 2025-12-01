export const tabsConfig = [
  { labelKey: 'common.tabs.xinyi', key: 'xinyi' },
  { labelKey: 'common.tabs.eastern', key: 'eastern' },
  { labelKey: 'common.tabs.taipei', key: 'taipei' },
]

export const navList = {
  raffle: '光之覓境雙重抽',
  promo: '百貨優惠',
  lights: '耶誕燈飾',
  landmark: '信義空橋妝點',
  performance: '聚客展演',
  media: '影音專區',
  transportation: '交通資訊',
  contact: '聯絡我們',
  activity: '本週活動快訊',
}

export const containerMaxWidths = {
  sm: '342px',
  md: '640px',
  lg: '960px',
  xl: '1140px',
  '2xl': '1440px',
}

type bgList = Array<'left' | 'right' | 'snow'>

const snoopyListWithNumberLeft = (num: number): bgList => {
  const newList = []

  for (let i = 1; i <= num; i++) {
    if (i % 4 === 1) {
      newList.push('snow')
    } else if (i % 4 === 2) {
      newList.push('right')
    } else if (i % 4 === 3) {
      newList.push('snow')
    } else {
      newList.push('left')
    }
  }

  return newList as bgList
}

const snoopyListWithNumberRight = (num: number): bgList => {
  const newList = []

  for (let i = 1; i <= num; i++) {
    if (i % 4 === 1) {
      newList.push('snow')
    } else if (i % 4 === 2) {
      newList.push('left')
    } else if (i % 4 === 3) {
      newList.push('snow')
    } else {
      newList.push('right')
    }
  }

  return newList as bgList
}

export const snoopyListLeft = (xl = 11, lg = 9, md = 7, sm = 5, xs = 2): Record<string, bgList> => {
  return {
    xl: snoopyListWithNumberLeft(xl),
    lg: snoopyListWithNumberLeft(lg),
    md: snoopyListWithNumberLeft(md),
    sm: snoopyListWithNumberLeft(sm),
    xs: snoopyListWithNumberLeft(xs),
  }
}

export const snoopyListRight = (
  xl = 11,
  lg = 9,
  md = 7,
  sm = 5,
  xs = 2,
): Record<string, bgList> => {
  return {
    xl: snoopyListWithNumberRight(xl),
    lg: snoopyListWithNumberRight(lg),
    md: snoopyListWithNumberRight(md),
    sm: snoopyListWithNumberRight(sm),
    xs: snoopyListWithNumberRight(xs),
  }
}

export const snoopyListGap = {
  xl: '40px',
  lg: '36px',
  md: '28px',
  sm: '24px',
  xs: '20px',
}
