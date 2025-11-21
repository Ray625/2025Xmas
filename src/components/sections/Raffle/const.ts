import { useI18n } from 'vue-i18n'
import checker from '@/assets/mock/checker.png'
import prizeLeft1 from '@/assets/icon/prize_left_1.svg'
import prizeLeft2 from '@/assets/icon/prize_left_2.svg'
import prizeLeft3 from '@/assets/icon/prize_left_3.svg'
import prizeLeft4 from '@/assets/icon/prize_left_4.svg'
import prizeLeft5 from '@/assets/icon/prize_left_5.svg'
import prizeRight1 from '@/assets/icon/prize_right_1.svg'
import prizeRight2 from '@/assets/icon/prize_right_2.svg'
import prizeRight3 from '@/assets/icon/prize_right_3.svg'

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

type PrizeItem = {
  img: string
  text: string
  quota: string
}

export function useRaffleConstants() {
  const { t } = useI18n()

  const prizeLeft: PrizeItem[] = [
    {
      img: prizeLeft1,
      text: t('sections.raffle.prize.cardLeft.prize1'),
      quota: '800',
    },
    {
      img: prizeLeft2,
      text: t('sections.raffle.prize.cardLeft.prize2'),
      quota: '300',
    },
    {
      img: prizeLeft3,
      text: t('sections.raffle.prize.cardLeft.prize3'),
      quota: '100',
    },
    {
      img: prizeLeft4,
      text: t('sections.raffle.prize.cardLeft.prize4'),
      quota: '20',
    },
    {
      img: prizeLeft5,
      text: t('sections.raffle.prize.cardLeft.prize5'),
      quota: t('sections.raffle.prize.cardLeft.prize5tag'),
    },
  ]

  const prizeRight: PrizeItem[] = [
    {
      img: prizeRight1,
      text: t('sections.raffle.prize.cardRight.prize1'),
      quota: '4',
    },
    {
      img: prizeRight2,
      text: t('sections.raffle.prize.cardRight.prize2'),
      quota: '2',
    },
    {
      img: prizeRight3,
      text: t('sections.raffle.prize.cardRight.prize3'),
      quota: '1',
    },
  ]

  const createLights = (prefix: string, length: number, base: string) =>
    Array.from({ length }).map((_, index) => ({
      id: `${prefix}-${index}`,
      lightKey: `sections.raffle.stamp.${base}.light1.lightName`,
      shopKey: `sections.raffle.stamp.${base}.light1.shopName`,
      locationKey: `sections.raffle.stamp.${base}.light1.location`,
      timeKey: `sections.raffle.stamp.${base}.light1.time`,
      lightImg: checker,
    }))

  const xinyiLights: LightItem[] = createLights('xinyi', 19, 'xinyi')
  const easternLights: LightItem[] = createLights('eastern', 18, 'eastern')
  const taipeiLights: LightItem[] = createLights('taipei', 18, 'taipei')

  return {
    prizeLeft,
    prizeRight,
    xinyiLights,
    easternLights,
    taipeiLights,
  }
}
