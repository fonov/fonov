import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import rawLocale from '@/location/global.locale.json';
import type { LanguageCode } from '@/constants/config';

type LocaleEntry = Record<string, string[]>;

function convertLocale(data: LocaleEntry, langIndex: number): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, values] of Object.entries(data)) {
    if (values[langIndex]) {
      result[key] = values[langIndex];
    }
  }
  return result;
}

const localeData = rawLocale as LocaleEntry;

const ukOverrides: Record<string, string> = {
  test_iphone: 'Тест iPhone перед покупкою',
  start_test: 'Почати',
  home: 'Головна',
  no: 'Ні',
  yes: 'Так',
};

const deOverrides: Record<string, string> = {
  test_iphone: 'iPhone-Test vor dem Kauf',
  start_test: 'Starten',
  home: 'Startseite',
  no: 'Nein',
  yes: 'Ja',
};

const trOverrides: Record<string, string> = {
  test_iphone: 'Satın almadan önce iPhone testi',
  start_test: 'Başla',
  home: 'Ana sayfa',
  no: 'Hayır',
  yes: 'Evet',
};

const resources = {
  en: { translation: convertLocale(localeData, 0) },
  ru: { translation: convertLocale(localeData, 1) },
  uk: { translation: { ...convertLocale(localeData, 0), ...ukOverrides } },
  de: { translation: { ...convertLocale(localeData, 0), ...deOverrides } },
  tr: { translation: { ...convertLocale(localeData, 0), ...trOverrides } },
};

const savedLang = localStorage.getItem('active_language') as LanguageCode | null;
const browserLang = navigator.language.split('-')[0] as LanguageCode;
const supported = ['en', 'ru', 'uk', 'de', 'tr'] as const;
const initialLang = savedLang && supported.includes(savedLang as (typeof supported)[number])
  ? savedLang
  : supported.includes(browserLang as (typeof supported)[number])
    ? browserLang
    : 'en';

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;

export function setAppLanguage(code: LanguageCode) {
  void i18n.changeLanguage(code);
  localStorage.setItem('active_language', code);
}
