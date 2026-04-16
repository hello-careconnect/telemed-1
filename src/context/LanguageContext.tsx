import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'bn';

interface LanguageContextType {
  lang: Lang;
  targetLang: Lang;
  isChanging: boolean;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  targetLang: 'en',
  isChanging: false,
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('bn');
  const [targetLang, setTargetLang] = useState<Lang>('bn');
  const [isChanging, setIsChanging] = useState(false);

  const toggleLang = () => {
    const next: Lang = lang === 'en' ? 'bn' : 'en';
    setTargetLang(next);   // freeze the destination before anything flips
    setIsChanging(true);
    setTimeout(() => setLang(next), 320);
    setTimeout(() => setIsChanging(false), 700);
  };

  return (
    <LanguageContext.Provider value={{ lang, targetLang, isChanging, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

/** Pick the right string for the current language */
export const tx = (entry: { en: string; bn: string }, lang: Lang): string =>
  entry[lang];
