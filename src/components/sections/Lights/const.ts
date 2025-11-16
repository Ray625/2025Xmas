import { useI18n } from 'vue-i18n'
import checker from '@/assets/backgrounds/checker.png'

type LightItem = {
  id: string
  lightKey: string
  shopKey: string
  locationKey: string
  timeKey: string
  lightImg: string
  num: number
  useStar?: boolean
}

export function useLightsTabs() {
  const { t } = useI18n()

  return [
    { label: t('sections.promo.tabs.xinyi'), key: 'xinyi' },
    { label: t('sections.promo.tabs.eastern'), key: 'eastern' },
    { label: t('sections.promo.tabs.taipei'), key: 'taipei' },
  ]
}

export function useLightsList() {
  const createLights = (prefix: string, length: number, base: string) =>
    Array.from({ length }).map((_, index) => ({
      id: `${prefix}-${index}`,
      num: index + 1,
      lightKey: `sections.raffle.stamp.${base}.light1.lightName`,
      shopKey: `sections.raffle.stamp.${base}.light1.shopName`,
      locationKey: `sections.raffle.stamp.${base}.light1.location`,
      timeKey: `sections.raffle.stamp.${base}.light1.time`,
      lightImg: checker,
      useStar: true,
    }))

  const xinyiLights: LightItem[] = createLights('xinyi', 19, 'xinyi')

  return {
    xinyiLights,
  }
}
