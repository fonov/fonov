import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TestName } from '@/data/schemeOfTests';
import type { ResolvedModel } from '@/data/models/schema';
import {
  TEST_TYPE_OTHER,
  type LanguageCode,
  type TestType,
} from '@/constants/config';

export type RatingCheck = { check: boolean };
export type RatingStars = { firstStars: number; secondStars: number };
export type RatingValue = RatingCheck | RatingStars;

export interface ModelInfo {
  firstLetter: string;
  code: string;
  code_country: string;
}

interface AppState {
  language: LanguageCode;
  darkMode: boolean;
  testType: TestType;
  scheme: TestName[];
  quickCheckMode: boolean;
  currentModel: string | null;
  currentColor: string | null;
  modelInfo: ModelInfo | null;
  resolvedModel: ResolvedModel | null;
  ratings: Record<string, RatingValue>;
  whiteLabelName: string | null;

  setLanguage: (lang: LanguageCode) => void;
  toggleDarkMode: () => void;
  setTestType: (type: TestType) => void;
  setScheme: (scheme: TestName[]) => void;
  setQuickCheckMode: (enabled: boolean) => void;
  setCurrentPhone: (
    model: string,
    color: string,
    modelInfo: ModelInfo,
    resolved: ResolvedModel
  ) => void;
  addRating: (test: string, value: RatingValue) => void;
  cleanTest: () => void;
  setWhiteLabel: (name: string | null) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'en',
      darkMode: false,
      testType: TEST_TYPE_OTHER,
      scheme: [],
      quickCheckMode: false,
      currentModel: null,
      currentColor: null,
      modelInfo: null,
      resolvedModel: null,
      ratings: {},
      whiteLabelName: null,

      setLanguage: (language) => set({ language }),
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
      setTestType: (testType) => set({ testType }),
      setScheme: (scheme) => set({ scheme }),
      setQuickCheckMode: (quickCheckMode) => set({ quickCheckMode }),
      setCurrentPhone: (currentModel, currentColor, modelInfo, resolvedModel) =>
        set({ currentModel, currentColor, modelInfo, resolvedModel }),
      addRating: (test, value) =>
        set((s) => ({ ratings: { ...s.ratings, [test]: value } })),
      cleanTest: () =>
        set({
          scheme: [],
          quickCheckMode: false,
          currentModel: null,
          currentColor: null,
          modelInfo: null,
          resolvedModel: null,
          ratings: {},
        }),
      setWhiteLabel: (whiteLabelName) => set({ whiteLabelName }),
    }),
    {
      name: 'fonov-storage',
      partialize: (s) => ({
        language: s.language,
        darkMode: s.darkMode,
        whiteLabelName: s.whiteLabelName,
      }),
    }
  )
);
