import checker from '@/assets/mock/checker.png'

type LightItem = {
  id: string
  lightKey: string
  shopKey: string
  locationKey: string
  timeKey?: string
  lightImg: string
  num?: number
  useStar?: boolean
  letter?: string
}

const stampImages = import.meta.glob('@/assets/collect/*.png', { eager: true, import: 'default' })

const stamps = Object.entries(stampImages)
  .map(([path, url]) => {
    // 取出檔名（不含副檔名）並抓前三個字元
    const fileName = path.split('/').pop() ?? ''
    const key = fileName.slice(0, 3) // 例如 a01、a02
    return { key, url }
  })
  .sort((a, b) => a.key.localeCompare(b.key))

const xinyiPhoto = stamps.filter((item) => item.key.includes('a'))
const easternPhoto = stamps.filter((item) => item.key.includes('b'))
const taipeiPhoto = stamps.filter((item) => item.key.includes('c'))

const xinyiCollect: LightItem[] = xinyiPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.raffle.stamp.xinyi.light${num}.lightName`,
    shopKey: `sections.raffle.stamp.xinyi.light${num}.shopName`,
    locationKey: `sections.raffle.stamp.xinyi.light${num}.location`,
    lightImg: item.url as string,
  }
})

const easternCollect: LightItem[] = easternPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.raffle.stamp.eastern.light${num}.lightName`,
    shopKey: `sections.raffle.stamp.eastern.light${num}.shopName`,
    locationKey: `sections.raffle.stamp.eastern.light${num}.location`,
    lightImg: item.url as string,
  }
})

const taipeiCollect: LightItem[] = taipeiPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.raffle.stamp.taipei.light${num}.lightName`,
    shopKey: `sections.raffle.stamp.taipei.light${num}.shopName`,
    locationKey: `sections.raffle.stamp.taipei.light${num}.location`,
    lightImg: item.url as string,
  }
})

export { xinyiCollect, easternCollect, taipeiCollect }
