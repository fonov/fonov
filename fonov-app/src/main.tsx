import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { initSentry } from '@/utils/analytics';
import { useAppStore } from '@/store/useAppStore';
import '@/i18n';
import './index.css';

initSentry();

function WhiteLabelInit() {
  const setWhiteLabel = useAppStore((s) => s.setWhiteLabel);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brand = params.get('brand') ?? import.meta.env.VITE_WHITELABEL_NAME;
    if (brand) setWhiteLabel(brand);
  }, [setWhiteLabel]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WhiteLabelInit />
      <App />
    </BrowserRouter>
  </StrictMode>
);
