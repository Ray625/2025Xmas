import { createI18n } from 'vue-i18n'
import zhTW from './zh-TW'
import en from './en'

export const defaultLocale = 'zh-TW'

export const messages = {
  'zh-TW': zhTW,
  en,
}

export function createAppI18n() {
  return createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages,
  })
}
