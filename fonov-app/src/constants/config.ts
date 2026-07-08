export const APP_NAME = 'FonovTest';
export const CONTACT_EMAIL = 'fonov@mounlion.com';
export const SHARE_URL = 'https://mounlion.github.io';
export const TEST_TYPE_SELF = 'SELF' as const;
export const TEST_TYPE_OTHER = 'OTHER' as const;
export type TestType = typeof TEST_TYPE_SELF | typeof TEST_TYPE_OTHER;

export const LANGUAGES = {
  en: { name: 'English', emoji: '🇺🇸' },
  ru: { name: 'Русский', emoji: '🇷🇺' },
  uk: { name: 'Українська', emoji: '🇺🇦' },
  de: { name: 'Deutsch', emoji: '🇩🇪' },
  tr: { name: 'Türkçe', emoji: '🇹🇷' },
} as const;

export type LanguageCode = keyof typeof LANGUAGES;

export const COOKIE_LANGUAGE = 'active_language';
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export const QUICK_CHECK_TESTS = [
  'iCloud',
  'WaterSensor',
  'Sensor',
  'BatteryHealth',
  'Camera',
] as const;
