import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import cookie from 'js-cookie'
import { en } from '../translations/en'
import { vi } from '../translations/vi'

const resources = {
  vi,
  en,
}

i18n.use(initReactI18next).init({
  resources,
  lng: cookie.get('locale') || 'en',
  keySeparator: true,
  fallbackLng: 'vi',
})

export default i18n
