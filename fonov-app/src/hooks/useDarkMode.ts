import { useEffect } from 'react';
import { useAppStore } from '@/store/useAppStore';

export function useDarkMode() {
  const darkMode = useAppStore((s) => s.darkMode);
  const toggleDarkMode = useAppStore((s) => s.toggleDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return { darkMode, toggleDarkMode };
}
