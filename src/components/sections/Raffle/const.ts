import prizeLeft1 from '@/assets/icon/prize_left_1.svg'
import prizeLeft2 from '@/assets/icon/prize_left_2.svg'
import prizeLeft3 from '@/assets/icon/prize_left_3.svg'
import prizeLeft4 from '@/assets/icon/prize_left_4.svg'
import prizeLeft5 from '@/assets/icon/prize_left_5.svg'
import prizeRight1 from '@/assets/icon/prize_right_1.svg'
import prizeRight2 from '@/assets/icon/prize_right_2.svg'
import prizeRight3 from '@/assets/icon/prize_right_3.svg'

type PrizeItem = {
  img: string
  textKey: string
  quota?: string
}

export function useRaffleConstants() {
  const prizeLeft: PrizeItem[] = [
    {
      img: prizeLeft1,
      textKey: 'sections.raffle.prize.cardLeft.prize1',
      quota: '800',
    },
    {
      img: prizeLeft2,
      textKey: 'sections.raffle.prize.cardLeft.prize2',
      quota: '300',
    },
    {
      img: prizeLeft3,
      textKey: 'sections.raffle.prize.cardLeft.prize3',
      quota: '100',
    },
    {
      img: prizeLeft4,
      textKey: 'sections.raffle.prize.cardLeft.prize4',
      quota: '20',
    },
    {
      img: prizeLeft5,
      textKey: 'sections.raffle.prize.cardLeft.prize5',
    },
  ]

  const prizeRight: PrizeItem[] = [
    {
      img: prizeRight1,
      textKey: 'sections.raffle.prize.cardRight.prize1',
      quota: '4',
    },
    {
      img: prizeRight2,
      textKey: 'sections.raffle.prize.cardRight.prize2',
      quota: '2',
    },
    {
      img: prizeRight3,
      textKey: 'sections.raffle.prize.cardRight.prize3',
      quota: '1',
    },
  ]

  const activityList = Array.from({ length: 18 }).map((_, index) => {
    const num = index + 1
    return {
      time: `sections.raffle.activity.event${num}.time`,
      name: `sections.raffle.activity.event${num}.name`,
      location: `sections.raffle.activity.event${num}.location`,
      shop: `sections.raffle.activity.event${num}.shop`,
    }
  })

  return {
    prizeLeft,
    prizeRight,
    activityList,
  }
}
