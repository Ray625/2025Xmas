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
  const createLights = (prefix: string, length: number) =>
    Array.from({ length }).map((_, index) => ({
      id: `${prefix}-${index}`,
      num: index + 1,
      lightKey: `mock.light.lightName`,
      shopKey: `mock.light.shopName`,
      locationKey: `mock.light.location`,
      timeKey: `mock.light.time`,
      lightImg: checker,
      useStar: true,
    }))

  const xinyiLights: LightItem[] = createLights('xinyi', 19)
  const easternLights: LightItem[] = createLights('eastern', 18)
  const taipeiLights: LightItem[] = createLights('taipei', 18)

  return {
    xinyiLights,
    easternLights,
    taipeiLights,
  }
}
