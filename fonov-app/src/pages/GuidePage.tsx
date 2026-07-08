import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';

const GUIDES = [
  { key: 'guide_iphone_15', model: 'iPhone 15' },
  { key: 'guide_iphone_16', model: 'iPhone 16' },
  { key: 'guide_iphone_17', model: 'iPhone 17' },
  { key: 'guide_iphone_fold', model: 'iPhone Fold' },
];

export function GuidePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout title={t('buying_guide')}>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">{t('buying_guide_intro')}</p>

        {GUIDES.map((guide) => (
          <div key={guide.key} className="card">
            <h3 className="font-semibold mb-2">
              {t('how_to_check', { model: guide.model })}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {t(guide.key)}
            </p>
          </div>
        ))}

        <div className="card">
          <h3 className="font-semibold mb-2">{t('checklist_before_meeting')}</h3>
          <ul className="list-disc list-inside text-sm space-y-1 text-gray-600 dark:text-gray-400">
            <li>{t('checklist_sim_pin')}</li>
            <li>{t('checklist_charger')}</li>
            <li>{t('checklist_wifi_hotspot')}</li>
            <li>{t('checklist_bluetooth')}</li>
            <li>{t('checklist_ask_seller')}</li>
          </ul>
        </div>

        <button className="btn-primary w-full" onClick={() => navigate('/')}>
          {t('start_test')}
        </button>
      </div>
    </Layout>
  );
}
