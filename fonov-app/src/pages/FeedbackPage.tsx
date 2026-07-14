import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
import { CONTACT_EMAIL } from '@/constants/config';

export function FeedbackPage() {
  const { t } = useTranslation();

  return (
    <Layout title={t('feedback')}>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400">{t('feedback_description')}</p>
        <div className="card">
          <p>
            {t('contact')}:{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p className="text-sm text-gray-500">{t('feedback_social_hint')}</p>
      </div>
    </Layout>
  );
}
