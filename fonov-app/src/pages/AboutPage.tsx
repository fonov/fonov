import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '@/store/useAppStore';
import { getModelByCode } from '@/data/models';
import { getSchemeForModel } from '@/data/schemeOfTests';
import { getPathForTest } from '@/constants/urls';
import { TestLayout } from '@/components/TestLayout';
import { getTestImage } from '@/utils/imageManager';
import type { ModelInfo } from '@/store/useAppStore';

const DEVICE_TYPES: Record<string, string> = {
  F: 'restored',
  M: 'for_retail_sale',
  N: 'a_replacement_iphone._iss...',
  P: 'a_special_copy',
};

export function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setCurrentPhone = useAppStore((s) => s.setCurrentPhone);
  const setScheme = useAppStore((s) => s.setScheme);
  const modelInfo = useAppStore((s) => s.modelInfo);
  const language = useAppStore((s) => s.language);

  const [input, setInput] = useState('');
  const [valid, setValid] = useState<boolean | null>(null);
  const [info, setInfo] = useState<{
    model: string;
    color: string;
    capacity: string;
    type: string;
    country: string;
  } | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (modelInfo) {
      const str = `${modelInfo.firstLetter}${modelInfo.code}${modelInfo.code_country}/A`;
      setInput(str);
      parseModel(str);
    }
  }, []);

  const parseModel = (raw: string) => {
    const parts = raw.split('/');
    if (parts.length !== 2 || (parts[0].length !== 6 && parts[0].length !== 7)) {
      setValid(false);
      setInfo(null);
      return;
    }

    const code = parts[0].toUpperCase();
    const modelInfoParsed: ModelInfo = {
      firstLetter: code.slice(0, 1),
      code: code.slice(1, 5),
      code_country: code.slice(5),
    };

    const resolved = getModelByCode(modelInfoParsed.code);
    if (!resolved) {
      setValid(false);
      setInfo(null);
      return;
    }

    setValid(true);
    setInfo({
      model: resolved.model.name,
      color: resolved.color,
      capacity: resolved.capacity,
      type: t(DEVICE_TYPES[modelInfoParsed.firstLetter] ?? 'for_retail_sale'),
      country: '-',
    });

    setCurrentPhone(
      resolved.model.name,
      resolved.color,
      modelInfoParsed,
      resolved
    );
    const scheme = getSchemeForModel(resolved.model.name, resolved.model.formFactor);
    setScheme(scheme);
  };

  const handleContinue = () => {
    if (!valid || !info) return;
    const scheme = useAppStore.getState().scheme;
    const nextTest = scheme[1] ?? scheme[0];
    navigate(getPathForTest(nextTest));
  };

  const img1 = getTestImage('About', 1, info?.model ?? null, info?.color ?? null, language);
  const img2 = getTestImage('About', 2, info?.model ?? null, info?.color ?? null, language);

  return (
    <TestLayout
      test="About"
      title={t('о_iphone')}
      ratingType={valid ? 'check' : 'none'}
      ratingQuestion={valid ? t('the_stated_information_is...') : undefined}
    >
      <div className="space-y-4">
        <label className="block text-sm font-medium">{t('enter_the_model')}:</label>
        <input
          className={`input ${valid === true ? 'border-green-500' : valid === false ? 'border-red-500' : ''}`}
          placeholder="MQ8M2B/A"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            parseModel(e.target.value);
          }}
        />

        <button className="btn-outline w-full" onClick={() => setShowHelp(!showHelp)}>
          {t('where_to_find_the_model?')}
        </button>

        {showHelp && (
          <div className="card space-y-3">
            <p className="text-sm">{t('settings_->_master_->_abo...')}</p>
            <img src={img1.src} alt="" className="w-full rounded-lg" />
            <p className="text-sm">{t('on_the_back_side_of_the_b...')}</p>
            <img src={img2.src} alt="" className="w-full rounded-lg" />
          </div>
        )}

        {info && valid && (
          <div className="space-y-2">
            {[
              [t('model'), info.model],
              [t('amount_of_memory'), info.capacity],
              [t('the_color_of_the_device'), info.color],
              [t('device_type'), info.type],
              [t('the_country_of_purchase'), info.country],
            ].map(([label, value]) => (
              <div key={String(label)} className="card">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="font-medium">{value}</p>
              </div>
            ))}
            <button className="btn-primary w-full" onClick={handleContinue}>
              {t('next')}
            </button>
          </div>
        )}
      </div>
    </TestLayout>
  );
}
