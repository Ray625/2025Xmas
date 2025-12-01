export type NavConfigItem = {
  key:
    | 'activity'
    | 'raffle'
    | 'map'
    | 'promo'
    | 'lights'
    | 'landmark'
    | 'performance'
    | 'media'
    | 'transportation'
    | 'contact'
  href: string
  titleKey: string
  color: string
}

export const navConfig: NavConfigItem[] = [
  {
    key: 'activity',
    href: '#activity',
    titleKey: 'title.activity',
    color: '#E3007F',
  },
  {
    key: 'raffle',
    href: '#raffle',
    titleKey: 'title.raffle',
    color: '#ff7628',
  },
  {
    key: 'map',
    href: '#map',
    titleKey: 'title.map',
    color: '#ff7628',
  },
  {
    key: 'promo',
    href: '#promo',
    titleKey: 'title.promo',
    color: '#E3007F',
  },
  {
    key: 'lights',
    href: '#lights',
    titleKey: 'title.lights',
    color: '#001A7D',
  },
  {
    key: 'landmark',
    href: '#landmark',
    titleKey: 'title.landmark',
    color: '#ff7628',
  },
  {
    key: 'performance',
    href: '#performance',
    titleKey: 'title.performance',
    color: '#001A7D',
  },
  {
    key: 'media',
    href: '#media',
    titleKey: 'title.media',
    color: '#E3007F',
  },
  {
    key: 'transportation',
    href: '#transportation',
    titleKey: 'title.transportation',
    color: '#FF7628',
  },
  {
    key: 'contact',
    href: '#contact',
    titleKey: 'title.contact',
    color: '#001A7D',
  },
]
