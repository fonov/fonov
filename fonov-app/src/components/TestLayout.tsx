import { useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { getPathForTest } from '@/constants/urls';
import type { TestName } from '@/data/schemeOfTests';
import { Layout } from './Layout';

interface RatingCheckProps {
  test: TestName;
  question: ReactNode;
  revertColor?: boolean;
}

export function RatingCheck({ test, question, revertColor }: RatingCheckProps) {
  const { t } = useTranslation();
  const addRating = useAppStore((s) => s.addRating);
  const scheme = useAppStore((s) => s.scheme);
  const navigate = useNavigate();

  const saveAndNext = (check: boolean) => {
    addRating(test, { check });
    const idx = scheme.indexOf(test);
    if (idx === scheme.length - 1) {
      navigate('/test_result');
    } else {
      navigate(getPathForTest(scheme[idx + 1]));
    }
  };

  return (
    <div className="mt-6">
      <p className="mb-4 text-gray-700 dark:text-gray-300">{question}</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          className={revertColor ? 'btn-success' : 'btn-danger'}
          onClick={() => saveAndNext(false)}
        >
          {t('no')}
        </button>
        <button
          className={revertColor ? 'btn-danger' : 'btn-success'}
          onClick={() => saveAndNext(true)}
        >
          {t('yes')}
        </button>
      </div>
    </div>
  );
}

interface RatingStarsProps {
  test: TestName;
  question: ReactNode;
}

export function RatingStars({ test, question }: RatingStarsProps) {
  const { t } = useTranslation();
  const addRating = useAppStore((s) => s.addRating);
  const scheme = useAppStore((s) => s.scheme);
  const navigate = useNavigate();
  const [first, setFirst] = useState(5);
  const [second, setSecond] = useState(5);

  const saveAndNext = () => {
    addRating(test, { firstStars: first, secondStars: second });
    const idx = scheme.indexOf(test);
    if (idx === scheme.length - 1) {
      navigate('/test_result');
    } else {
      navigate(getPathForTest(scheme[idx + 1]));
    }
  };

  return (
    <div className="mt-6">
      <p className="mb-4">{question}</p>
      <StarRow label={t('claimed_condition')} value={first} onChange={setFirst} />
      <StarRow label={t('actual_condition')} value={second} onChange={setSecond} className="mt-4" />
      <button className="btn-primary w-full mt-6" onClick={saveAndNext}>
        {t('next')}
      </button>
    </div>
  );
}

function StarRow({
  label,
  value,
  onChange,
  className = '',
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{label}</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`text-2xl ${n <= value ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

interface TestLayoutProps {
  test: TestName;
  title: string;
  children: ReactNode;
  ratingType?: 'check' | 'stars' | 'none';
  ratingQuestion?: ReactNode;
  revertColor?: boolean;
}

export function TestLayout({
  test,
  title,
  children,
  ratingType = 'check',
  ratingQuestion,
  revertColor,
}: TestLayoutProps) {
  const scheme = useAppStore((s) => s.scheme);
  const testIndex = scheme.indexOf(test) + 1;

  return (
    <Layout title={title} showProgress testIndex={testIndex} testTotal={scheme.length}>
      {children}
      {ratingType === 'check' && ratingQuestion && (
        <RatingCheck test={test} question={ratingQuestion} revertColor={revertColor} />
      )}
      {ratingType === 'stars' && ratingQuestion && (
        <RatingStars test={test} question={ratingQuestion} />
      )}
    </Layout>
  );
}
