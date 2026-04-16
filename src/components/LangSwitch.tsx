import { useLang } from '@/context/LanguageContext';

export const LangSwitch = () => {
  const { lang, toggleLang } = useLang();

  return (
    // Wrapper mirrors navbar's top-4 + py-3 so the button sits on the same horizontal line
    <div className="fixed top-[24px] right-4 z-[60] py-3 flex items-center pointer-events-none">
      <button
        onClick={toggleLang}
        aria-label="Toggle language"
        className="pointer-events-auto flex items-center h-7 w-[52px] rounded-full border border-border bg-surface/90 backdrop-blur-sm hover:border-primary/50 transition-colors duration-200 overflow-hidden shadow-sm relative"
      >
        {/* Sliding pill */}
        <span
          className="absolute top-[2px] h-[22px] w-[22px] rounded-full bg-primary shadow-sm transition-all duration-300 ease-in-out"
          style={{ left: lang === 'en' ? 2 : 'calc(100% - 24px)' }}
        />
        {/* A — English */}
        <span
          className={`relative z-10 flex-1 flex items-center justify-center text-[12px] font-bold leading-none transition-colors duration-200 ${
            lang === 'en' ? 'text-primary-foreground' : 'text-text-muted'
          }`}
        >
          A
        </span>
        {/* অ — Bangla */}
        <span
          className={`relative z-10 flex-1 flex items-center justify-center text-[12px] font-bold leading-none transition-colors duration-200 ${
            lang === 'bn' ? 'text-primary-foreground' : 'text-text-muted'
          }`}
        >
          অ
        </span>
      </button>
    </div>
  );
};
