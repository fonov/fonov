import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { TestLayout } from '@/components/TestLayout';
import { TEST_CONFIGS } from '@/data/testConfigs';
import { getTestImage } from '@/utils/imageManager';
import type { TestName } from '@/data/schemeOfTests';

interface GenericTestPageProps {
  test: TestName;
}

export function GenericTestPage({ test }: GenericTestPageProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentModel = useAppStore((s) => s.currentModel);
  const currentColor = useAppStore((s) => s.currentColor);
  const language = useAppStore((s) => s.language);
  const config = TEST_CONFIGS[test];

  useEffect(() => {
    if (!currentModel) navigate('/');
  }, [currentModel, navigate]);

  if (!config || !currentModel) return null;

  const title = t(config.titleKey);
  const imageCount = config.imageCount ?? 1;

  return (
    <TestLayout
      test={test}
      title={title}
      ratingType={config.ratingType}
      revertColor={config.revertColor}
      ratingQuestion={
        config.ratingType === 'check'
          ? t(`${test.toLowerCase()}_question`, { defaultValue: t('confirm_test_passed') })
          : config.ratingType === 'stars'
            ? t(`${test.toLowerCase()}_stars_question`, { defaultValue: t('rate_condition') })
            : undefined
      }
    >
      <div className="space-y-4">
        {config.cardHeaderKey && (
          <div className="card">
            <h3 className="font-medium mb-2">{t(config.cardHeaderKey)}</h3>
            {config.cardBodyKey && (
              <p className="text-sm text-gray-600 dark:text-gray-400">{t(config.cardBodyKey)}</p>
            )}
          </div>
        )}

        {Array.from({ length: imageCount }, (_, i) => i + 1).map((n) => {
          const img = getTestImage(test, n, currentModel, currentColor, language);
          return (
            <img
              key={n}
              src={img.src}
              alt={`${title} ${n}`}
              className="w-full rounded-lg"
              width={img.width}
              height={img.height}
            />
          );
        })}

        {test === 'Warranty' && (
          <button
            className="btn-outline w-full"
            onClick={() =>
              window.open('https://checkcoverage.apple.com/', '_blank', 'noopener')
            }
          >
            {t('check_apple_warranty')}
          </button>
        )}
      </div>
    </TestLayout>
  );
}
