import koKR from './ko-KR.json'
import enUS from './en-US.json'

enum Locale {
  KO_KR = 'ko-KR',
  EN_US = 'en-US',
}

export type Messages = typeof koKR

export const getLocale = (lang: string) => {
  return lang === Locale.KO_KR ? lang : Locale.EN_US
}

export const getMessages = (lang: Locale): Record<string, string> => {
  return lang === Locale.KO_KR ? koKR : enUS
}
