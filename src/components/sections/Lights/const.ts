import checker from '@/assets/mock/checker.png'

type LightItem = {
  id: string
  lightKey: string
  shopKey: string
  locationKey: string
  timeKey: string
  lightImg: string
  num?: number
  useStar?: boolean
  letter?: string
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
  const easternLights: LightItem[] = createLights('eastern', 18, 'eastern')
  const taipeiLights: LightItem[] = createLights('taipei', 18, 'taipei')

  return {
    xinyiLights,
    easternLights,
    taipeiLights,
  }
}
