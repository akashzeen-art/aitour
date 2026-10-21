import { useAppLanguage } from '../context/AppLanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { langId, setLangId, t } = useAppLanguage();

  return (
    <div
      className={`app-lang-toggle${className ? ` ${className}` : ''}`}
      role="group"
      aria-label={t.guideLanguage}
    >
      <button
        type="button"
        className={`app-lang-toggle__btn${langId === 'en' ? ' is-active' : ''}`}
        onClick={() => setLangId('en')}
      >
        {t.english}
      </button>
      <button
        type="button"
        className={`app-lang-toggle__btn${langId === 'es' ? ' is-active' : ''}`}
        onClick={() => setLangId('es')}
      >
        {t.spanish}
      </button>
    </div>
  );
}
