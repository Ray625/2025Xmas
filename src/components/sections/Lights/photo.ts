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

const stamps = Object.entries(stampImages)
  .map(([path, url]) => {
    // 取出檔名（不含副檔名）並抓前三個字元
    const fileName = path.split('/').pop() ?? ''
    if (fileName.slice(0, -4).length > 3) return { key: '', url: null } // 避免非預期檔案
    const key = fileName.slice(0, 3) // 例如 a01、a02
    return { key, url }
  })
  .filter((item) => item.key !== '')
  .sort((a, b) => a.key.localeCompare(b.key))

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

const xinyiPhoto = stamps.filter((item) => item.key.includes('a'))
const easternPhoto = stamps.filter((item) => item.key.includes('b'))
const taipeiPhoto = stamps.filter((item) => item.key.includes('c'))
const ximenPhoto = stampsLong.filter((item) => item.key.includes('ximen'))

const xinyiLights: LightItem[] = xinyiPhoto.map((item, index) => {
  const num = index + 1
  if (num === 21) {
    return {
      id: item.key,
      lightKey: `sections.lights.xinyi.light${num}.lightName`,
      shopKey: `sections.lights.xinyi.light${num}.shopName`,
      locationKey: `sections.lights.xinyi.light${num}.location`,
      timeKey: `sections.lights.xinyi.light${num}.time`,
      num: Number(item.key.slice(-2)),
      lightImg: item.url as string,
      smName: true,
    }
  }

  return {
    id: item.key,
    lightKey: `sections.lights.xinyi.light${num}.lightName`,
    shopKey: `sections.lights.xinyi.light${num}.shopName`,
    locationKey: `sections.lights.xinyi.light${num}.location`,
    timeKey: `sections.lights.xinyi.light${num}.time`,
    num: Number(item.key.slice(-2)),
    lightImg: item.url as string,
  }
})

const easternLights: LightItem[] = easternPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.lights.eastern.light${num}.lightName`,
    shopKey: `sections.lights.eastern.light${num}.shopName`,
    locationKey: `sections.lights.eastern.light${num}.location`,
    timeKey: `sections.lights.eastern.light${num}.time`,
    num: Number(item.key.slice(-2)),
    lightImg: item.url as string,
  }
})

const taipeiLights: LightItem[] = taipeiPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.lights.taipei.light${num}.lightName`,
    shopKey: `sections.lights.taipei.light${num}.shopName`,
    locationKey: `sections.lights.taipei.light${num}.location`,
    timeKey: `sections.lights.taipei.light${num}.time`,
    num: Number(item.key.slice(-2)),
    lightImg: item.url as string,
  }
})

const ximenLights: LightItem[] = ximenPhoto.map((item, index) => {
  const num = index + 1
  return {
    id: item.key,
    lightKey: `sections.lights.ximending.light${num}.lightName`,
    shopKey: `sections.lights.ximending.light${num}.shopName`,
    locationKey: `sections.lights.ximending.light${num}.location`,
    timeKey: `sections.lights.ximending.light${num}.time`,
    lightImg: item.url as string,
    useStar: false,
  }
})

export { xinyiLights, easternLights, taipeiLights, ximenLights }
