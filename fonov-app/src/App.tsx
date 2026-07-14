import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { GenericTestPage } from '@/pages/GenericTestPage';
import { TestResultPage } from '@/pages/TestResultPage';
import { FeedbackPage } from '@/pages/FeedbackPage';
import { GuidePage } from '@/pages/GuidePage';
import { URLS } from '@/constants/urls';
import type { TestName } from '@/data/schemeOfTests';
import { FULL_TEST_LIST, FOLDABLE_ONLY_TESTS } from '@/data/schemeOfTests';

const ALL_TESTS = [...FULL_TEST_LIST, ...FOLDABLE_ONLY_TESTS] as TestName[];

function TestRoute({ test }: { test: TestName }) {
  return <GenericTestPage test={test} />;
}

export function App() {
  return (
    <Routes>
      <Route path={URLS.Home} element={<HomePage />} />
      <Route path={URLS.About} element={<AboutPage />} />
      {ALL_TESTS.filter((t) => t !== 'About').map((test) => (
        <Route
          key={test}
          path={URLS[test]}
          element={<TestRoute test={test} />}
        />
      ))}
      <Route path={URLS.TestResult} element={<TestResultPage />} />
      <Route path={URLS.Feedback} element={<FeedbackPage />} />
      <Route path={URLS.Guide} element={<GuidePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
