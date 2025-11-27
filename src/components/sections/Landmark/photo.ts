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

const stampImages = import.meta.glob('@/assets/lights/*.png', { eager: true, import: 'default' })

const stampsLong = Object.entries(stampImages)
  .map(([path, url]) => {
    // 取出檔名（不含副檔名）
    const fileName = path.split('/').pop() ?? ''
    if (fileName.slice(0, -4).length <= 3) return { key: '', url: null } // 避免非預期檔案
    const key = fileName.slice(0, -4)
    return { key, url }
  })
  .filter((item) => item.key !== '')
  .sort((a, b) => a.key.localeCompare(b.key))

const xinyiBridge = stampsLong.filter((item) => item.key.includes('bridge'))

const xinyiLights: LightItem[] = xinyiBridge.map((item, index) => {
  const num = index + 1
  const letterList = 'ABCDEFGHIJK'
  return {
    id: item.key,
    lightKey: `sections.landmark.light${num}.lightName`,
    shopKey: `sections.landmark.light${num}.shopName`,
    locationKey: `sections.landmark.light${num}.location`,
    timeKey: `sections.landmark.light${num}.time`,
    letter: letterList[index],
    lightImg: item.url as string,
  }
})

export { xinyiLights }
