const xinyiEnum = [
  'taipei101',
  'BNS',
  'BSG',
  'BXY',
  'TXP',
  'A13',
  'BELLAVITA',
  'UPDT',
  'UPDDP',
  'ATT',
  'vshow',
]

const easternEnum = [
  'BC',
  'BNJ',
  'SGZX',
  'SGFS',
  'SKM',
  'MingYao',
  'eslite',
  'esliteDunhua',
  'Taishin',
]

const taipeiEnum = [
  'Dayeh',
  'BTS',
  'SKMTianmu',
  'SKMTaipei',
  'SKMSW',
  'R79',
  'esliteSW',
  'esliteXimen',
  'esliteWuchang',
  'esliteStation',
  'Miramar',
  'lalaport',
  'QSquare',
  'Syntrend',
]

export function useTransport() {
  const xinyiList = xinyiEnum.map((locale) => {
    return {
      title: `sections.transportion.xinyi.${locale}.title`,
      transportList: [
        `sections.transportion.xinyi.${locale}.bus`,
        `sections.transportion.xinyi.${locale}.mrt`,
      ],
    }
  })

  const easternList = easternEnum.map((locale) => {
    return {
      title: `sections.transportion.eastern.${locale}.title`,
      transportList: [
        `sections.transportion.eastern.${locale}.bus`,
        `sections.transportion.eastern.${locale}.mrt`,
      ],
    }
  })
  const taipeiList = taipeiEnum.map((locale) => {
    return {
      title: `sections.transportion.taipei.${locale}.title`,
      transportList: [
        `sections.transportion.taipei.${locale}.bus`,
        `sections.transportion.taipei.${locale}.mrt`,
      ],
    }
  })

  return { xinyiList, taipeiList, easternList }
}
