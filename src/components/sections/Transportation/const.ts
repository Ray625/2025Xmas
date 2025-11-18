export const xinyiEnum = [
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

export function useTransport() {
  const xinyiList = xinyiEnum.map((locale) => {
    return {
      title: `sections.transportion.xinyi.${locale}.title`,
      transportList: [
        `sections.transportion.xinyi.${locale}.bus`,
        `sections.transportion.xinyi.${locale}.MRT`,
      ],
    }
  })

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

  return { xinyiList, taipeiList }
}
