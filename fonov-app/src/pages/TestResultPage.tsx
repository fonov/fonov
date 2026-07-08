import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { Layout } from '@/components/Layout';
import {
  TEST_CONFIGS,
  calculateScore,
  getConclusion,
} from '@/data/testConfigs';
import { generatePdfReport, buildTestResults } from '@/utils/pdfExport';
import { trackEvent } from '@/utils/analytics';

export function TestResultPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentModel = useAppStore((s) => s.currentModel);
  const currentColor = useAppStore((s) => s.currentColor);
  const ratings = useAppStore((s) => s.ratings);

  const { rank, conclusion, results } = useMemo(() => {
    const rank = calculateScore(ratings);
    const model = currentModel ?? 'iPhone';
    const conclusion = getConclusion(rank, model, t);

    const ratingMeta: Record<string, { title: string; pass?: boolean; warning?: string }> = {};
    for (const [key, config] of Object.entries(TEST_CONFIGS)) {
      ratingMeta[key] = {
        title: t(config.titleKey),
        pass: config.pass,
        warning: config.warningKey ? t(config.warningKey) : undefined,
      };
    }

    const results = Object.entries(ratings).map(([key, value]) => {
      const meta = ratingMeta[key];
      if ('check' in value) {
        const passed = value.check === (meta?.pass ?? true);
        return {
          key,
          title: meta?.title ?? key,
          passed,
          warning: meta?.warning,
          type: 'check' as const,
        };
      }
      const stars = value as { firstStars: number; secondStars: number };
      return {
        key,
        title: meta?.title ?? key,
        firstStars: stars.firstStars,
        secondStars: stars.secondStars,
        type: 'stars' as const,
      };
    });

    return { rank, conclusion, results };
  }, [ratings, currentModel, t]);

  if (!currentModel) {
    navigate('/');
    return null;
  }

  const handlePdf = () => {
    const ratingMeta: Record<string, { title: string; pass?: boolean; warning?: string }> = {};
    for (const [key, config] of Object.entries(TEST_CONFIGS)) {
      ratingMeta[key] = {
        title: t(config.titleKey),
        pass: config.pass,
        warning: config.warningKey ? t(config.warningKey) : undefined,
      };
    }

    generatePdfReport({
      model: currentModel,
      color: currentColor ?? '-',
      conclusion,
      testResults: buildTestResults(ratings, ratingMeta),
      generatedAt: new Date().toLocaleString(),
    });
    trackEvent('pdf_exported', { model: currentModel });
  };

  const alertColors = {
    success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-200',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-700 dark:text-yellow-200',
    danger: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-200',
  };

  return (
    <Layout title={t('test_results')}>
      <div className="space-y-4">
        <ul className="space-y-2">
          {results.map((r) => (
            <li key={r.key} className="card flex items-start gap-2">
              {r.type === 'check' ? (
                <>
                  <span className={r.passed ? 'text-green-500' : 'text-red-500'}>
                    {r.passed ? '✓' : '✗'}
                  </span>
                  <div>
                    <p>{r.title}</p>
                    {!r.passed && r.warning && (
                      <p className="text-sm text-gray-500 mt-1">{r.warning}</p>
                    )}
                  </div>
                </>
              ) : (
                <div className="flex justify-between w-full">
                  <span>{r.title}</span>
                  <span className="font-medium">
                    {r.firstStars}/{r.secondStars} ★
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className={`card border-2 ${alertColors[conclusion.type]}`}>
          <h3 className="font-bold text-lg mb-2">{conclusion.title}</h3>
          <p>{conclusion.text}</p>
          <p className="text-sm mt-2 opacity-70">Score: {rank}</p>
        </div>

        <button className="btn-primary w-full" onClick={handlePdf}>
          {t('download_pdf_report')}
        </button>

        <button className="btn-outline w-full" onClick={() => navigate('/')}>
          {t('home')}
        </button>
      </div>
    </Layout>
  );
}
