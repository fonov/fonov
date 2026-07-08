import * as Sentry from '@sentry/react';

export function initSentry() {
  if (import.meta.env.PROD && import.meta.env.VITE_SENTRY_DSN) {
    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      integrations: [Sentry.browserTracingIntegration()],
      tracesSampleRate: 0.1,
    });
  }
}

export function trackEvent(name: string, data?: Record<string, unknown>) {
  if (import.meta.env.PROD) {
    Sentry.addBreadcrumb({ category: 'analytics', message: name, data });
  }
  // Lightweight client-side analytics queue for optional backend sync
  const queue = JSON.parse(localStorage.getItem('fonov_analytics') ?? '[]') as unknown[];
  queue.push({ name, data, ts: Date.now() });
  if (queue.length > 100) queue.shift();
  localStorage.setItem('fonov_analytics', JSON.stringify(queue));
}
