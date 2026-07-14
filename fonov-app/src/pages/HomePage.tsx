import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/store/useAppStore';
import {
  APP_NAME,
  LANGUAGES,
  TEST_TYPE_OTHER,
  TEST_TYPE_SELF,
  CONTACT_EMAIL,
  SHARE_URL,
  type LanguageCode,
} from '@/constants/config';
import { setAppLanguage } from '@/i18n';
import { getSchemeForModel } from '@/data/schemeOfTests';
import { getPathForTest } from '@/constants/urls';
import { Layout } from '@/components/Layout';
import { PwaInstallPrompt } from '@/components/PwaInstallPrompt';
import { trackEvent } from '@/utils/analytics';

export function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const language = useAppStore((s) => s.language);
  const setLanguage = useAppStore((s) => s.setLanguage);
  const setTestType = useAppStore((s) => s.setTestType);
  const setScheme = useAppStore((s) => s.setScheme);
  const setQuickCheckMode = useAppStore((s) => s.setQuickCheckMode);
  const cleanTest = useAppStore((s) => s.cleanTest);
  const whiteLabel = useAppStore((s) => s.whiteLabelName);

  const handleLanguage = (code: LanguageCode) => {
    setLanguage(code);
    setAppLanguage(code);
  };

  const startTest = (type: typeof TEST_TYPE_SELF | typeof TEST_TYPE_OTHER) => {
    cleanTest();
    setTestType(type);
    setQuickCheckMode(false);
    setScheme(['About']);
    trackEvent('test_started', { type });
    navigate('/about');
  };

  const startQuickCheck = () => {
    cleanTest();
    setTestType(TEST_TYPE_OTHER);
    setQuickCheckMode(true);
    setScheme(getSchemeForModel('iPhone 17', 'bar').filter((t) =>
      ['iCloud', 'WaterSensor', 'Sensor', 'BatteryHealth', 'Camera'].includes(t)
    ) as ReturnType<typeof getSchemeForModel>);
    trackEvent('quick_check_started');
    navigate(getPathForTest('iCloud'));
  };

  const appName = whiteLabel ?? APP_NAME;

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">{t('test_iphone')}</h1>
        <p className="text-gray-600 dark:text-gray-400">{t('1_test_for_iphone_before_bu...')}</p>

        <div className="card">
          <h2 className="font-semibold mb-3">{t('language')}</h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(LANGUAGES) as LanguageCode[]).map((code) => (
              <button
                key={code}
                onClick={() => handleLanguage(code)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  language === code
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                {LANGUAGES[code].emoji} {LANGUAGES[code].name}
              </button>
            ))}
          </div>
        </div>

        <button className="btn-primary w-full" onClick={() => startTest(TEST_TYPE_OTHER)}>
          {t('start_test')}
        </button>

        <button className="btn-outline w-full" onClick={startQuickCheck}>
          {t('quick_check')}
        </button>

        <button className="btn-outline w-full" onClick={() => navigate('/guide')}>
          {t('buying_guide')}
        </button>

        <PwaInstallPrompt />

        <div className="card">
          <h2 className="font-semibold mb-2">{t('0_what_you_need_for_the_tes...')}</h2>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 dark:text-gray-400">
            <li>{t('paper_clip')}</li>
            <li>{t('power_outlet_or_powerbank')}</li>
            <li>{t('wifi_or_hotspot')}</li>
            <li>{t('bluetooth_device')}</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="font-semibold mb-2">{t('about_app', { APP_NAME: appName })}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t('contact')}:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <button className="btn-outline w-full" onClick={() => navigate('/feedback')}>
          {t('feedback')}
        </button>

        <p className="text-center text-xs text-gray-400">
          {SHARE_URL} · v2.0.0
        </p>
      </div>
    </Layout>
  );
}
