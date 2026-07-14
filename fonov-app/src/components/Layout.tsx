import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { useDarkMode } from '@/hooks/useDarkMode';
import { APP_NAME } from '@/constants/config';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showProgress?: boolean;
  testIndex?: number;
  testTotal?: number;
}

export function Layout({
  children,
  title,
  showProgress,
  testIndex = 0,
  testTotal = 0,
}: LayoutProps) {
  const { t } = useTranslation();
  const whiteLabel = useAppStore((s) => s.whiteLabelName);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const appTitle = whiteLabel ?? APP_NAME;
  const percent = testTotal > 0 ? Math.floor((testIndex / testTotal) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg text-primary">
            {title ?? appTitle}
          </Link>
          <div className="flex items-center gap-2">
            {showProgress && testTotal > 0 && (
              <span className="text-sm bg-primary text-white px-2 py-0.5 rounded-full">
                {testIndex}/{testTotal}
              </span>
            )}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={t('toggle_dark_mode')}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
        {showProgress && testTotal > 0 && (
          <div className="progress-bar mx-4 mb-2">
            <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
          </div>
        )}
      </header>
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-4">{children}</main>
    </div>
  );
}
