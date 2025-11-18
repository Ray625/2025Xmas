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

  // todo: 跟上面相同
  const taipeiList = null

  return { xinyiList, taipeiList }
}
