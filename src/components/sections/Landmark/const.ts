import checker from '@/assets/backgrounds/checker.png'

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

export function useLandmarkList() {
  const letterArray = Array.from('ABCDEFGHIJK')

  const createLights = (prefix: string, length: number, base: string) =>
    Array.from({ length }).map((_, index) => ({
      id: `${prefix}-${index}`,
      letter: letterArray[index],
      lightKey: `sections.raffle.stamp.${base}.light1.lightName`,
      shopKey: `sections.raffle.stamp.${base}.light1.shopName`,
      locationKey: `sections.raffle.stamp.${base}.light1.location`,
      timeKey: `sections.raffle.stamp.${base}.light1.time`,
      lightImg: checker,
      useStar: true,
    }))

  const xinyiLights: LightItem[] = createLights('xinyi', 9, 'xinyi')
  const cardLeft: LightItem = {
    id: 'xinyi-10',
    letter: 'J',
    lightKey: `sections.landmark.light10.lightName`,
    shopKey: `sections.landmark.light10.shopName`,
    locationKey: `sections.landmark.light10.location`,
    timeKey: `sections.landmark.light10.time`,
    lightImg: checker,
    useStar: true,
  }
  const cardRight: LightItem = {
    id: 'xinyi-11',
    letter: 'K',
    lightKey: `sections.landmark.light11.lightName`,
    shopKey: `sections.landmark.light11.shopName`,
    locationKey: `sections.landmark.light11.location`,
    timeKey: `sections.landmark.light11.time`,
    lightImg: checker,
    useStar: true,
  }

  return {
    xinyiLights,
    cardLeft,
    cardRight,
  }
}
