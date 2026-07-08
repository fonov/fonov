/**
 * Optional analytics sync worker.
 * Queues events in localStorage and can POST to a backend when configured.
 */
export interface AnalyticsEvent {
  name: string;
  data?: Record<string, unknown>;
  ts: number;
}

const QUEUE_KEY = 'fonov_analytics';
const ENDPOINT = import.meta.env.VITE_ANALYTICS_ENDPOINT;

export function getAnalyticsQueue(): AnalyticsEvent[] {
  try {
    return JSON.parse(localStorage.getItem(QUEUE_KEY) ?? '[]') as AnalyticsEvent[];
  } catch {
    return [];
  }
}

export async function syncAnalytics(): Promise<void> {
  if (!ENDPOINT) return;

  const queue = getAnalyticsQueue();
  if (queue.length === 0) return;

  try {
    await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: queue }),
    });
    localStorage.setItem(QUEUE_KEY, '[]');
  } catch {
    // Keep queue for retry
  }
}

// Attempt sync on load in production
if (import.meta.env.PROD && ENDPOINT) {
  void syncAnalytics();
}
