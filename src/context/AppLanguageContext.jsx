import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { APP_LANGS, UI } from '../i18n/ui';

const STORAGE_KEY = 'trip-xai-app-lang';
const AppLanguageContext = createContext(null);

function readStoredLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === 'es' || value === 'en') return value;
  } catch {
    // ignore
  }
  return 'en';
}

export function AppLanguageProvider({ children }) {
  const [langId, setLangIdState] = useState(readStoredLang);

  const setLangId = useCallback((id) => {
    const next = id === 'es' ? 'es' : 'en';
    setLangIdState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(() => {
    const lang = APP_LANGS[langId] || APP_LANGS.en;
    const t = UI[langId] || UI.en;
    return {
      langId,
      setLangId,
      lang,
      t,
      isSpanish: langId === 'es',
    };
  }, [langId, setLangId]);

  return (
    <AppLanguageContext.Provider value={value}>{children}</AppLanguageContext.Provider>
  );
}

export function useAppLanguage() {
  const ctx = useContext(AppLanguageContext);
  if (!ctx) throw new Error('useAppLanguage must be used within AppLanguageProvider');
  return ctx;
}
