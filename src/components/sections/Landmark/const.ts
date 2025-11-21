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

export function useLandmarkList() {
  const letterArray = Array.from('ABCDEFGHIJK')

  const createLights = (prefix: string, length: number) =>
    Array.from({ length }).map((_, index) => ({
      id: `${prefix}-${index}`,
      letter: letterArray[index],
      lightKey: `mock.light.lightName`,
      shopKey: `mock.light.shopName`,
      locationKey: `mock.light.location`,
      timeKey: `mock.light.time`,
      lightImg: checker,
      useStar: true,
    }))

  const xinyiLights: LightItem[] = createLights('xinyi', 9)
  const cardLeft: LightItem = {
    id: 'xinyi-10',
    letter: 'J',
    lightKey: `mock.light.lightName`,
    shopKey: `mock.light.shopName`,
    locationKey: `mock.light.location`,
    timeKey: `mock.light.time`,
    lightImg: checker,
    useStar: true,
  }
  const cardRight: LightItem = {
    id: 'xinyi-11',
    letter: 'K',
    lightKey: `mock.light.lightName`,
    shopKey: `mock.light.shopName`,
    locationKey: `mock.light.location`,
    timeKey: `mock.light.time`,
    lightImg: checker,
    useStar: true,
  }

  return {
    xinyiLights,
    cardLeft,
    cardRight,
  }
}
