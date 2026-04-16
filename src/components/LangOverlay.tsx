import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export const LangOverlay = () => {
  const { targetLang, isChanging } = useLang();

  // Show the letter of the language we're switching TO
  const letter = targetLang === 'bn' ? 'অ' : 'A';

  return (
    <AnimatePresence>
      {isChanging && (
        <motion.div
          key="lang-overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        >
          {/* Ripple ring */}
          <motion.span
            className="absolute w-32 h-32 rounded-full border-2 border-primary/30"
            initial={{ scale: 0.6, opacity: 0.6 }}
            animate={{ scale: 2.2, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          {/* Letter */}
          <motion.span
            key={letter}
            className={`relative text-[96px] font-bold text-primary leading-none select-none ${
              targetLang === 'bn' ? 'font-bangla' : 'font-heading'
            }`}
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(12px)' }}
            animate={{ scale: 1,   opacity: 1, filter: 'blur(0px)' }}
            exit={{ scale: 1.3,    opacity: 0, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {letter}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
