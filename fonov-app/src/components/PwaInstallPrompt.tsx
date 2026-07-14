import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PwaInstallPrompt() {
  const { t } = useTranslation();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!deferred || dismissed) return null;

  const install = async () => {
    await deferred.prompt();
    const { outcome } = await deferred.userChoice;
    if (outcome === 'accepted') setDeferred(null);
    setDismissed(true);
  };

  return (
    <div className="card border-primary border-2">
      <p className="text-sm mb-3">{t('pwa_install_hint')}</p>
      <div className="flex gap-2">
        <button className="btn-primary flex-1" onClick={install}>
          {t('pwa_install')}
        </button>
        <button className="btn-outline" onClick={() => setDismissed(true)}>
          {t('no')}
        </button>
      </div>
    </div>
  );
}
