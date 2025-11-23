import { useI18n } from 'vue-i18n'

export function useTabs() {
  const { t } = useI18n()

  return [
    { label: t('common.tabs.xinyi'), key: 'xinyi' },
    { label: t('common.tabs.eastern'), key: 'eastern' },
    { label: t('common.tabs.taipei'), key: 'taipei' },
  ]
}

export const navList = {
  raffle: '光之覓境雙重抽',
  promo: '百貨優惠',
  lights: '耶誕燈飾',
  landmark: '信義空橋妝點',
  performance: '聚客展演',
  media: '影音專區',
  transportation: '交通資訊',
  contact: '聯絡我們',
}

export const containerMaxWidths = {
  sm: '342px',
  md: '640px',
  lg: '960px',
  xl: '1140px',
  '2xl': '1440px',
}
