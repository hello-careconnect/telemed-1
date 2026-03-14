import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

export const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieAccepted')) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem('cookieAccepted', accepted ? 'true' : 'false');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-[0_-8px_32px_rgba(0,0,0,0.08)] py-4 px-6 sm:px-8"
        >
          <div className="container max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo size={24} />
              <p className="font-body text-[14px] text-text-body">
                We use cookies to improve your experience.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => dismiss(true)}
                className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-[14px] font-semibold font-body hover:bg-primary-dark transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => dismiss(false)}
                className="rounded-full px-6 py-2.5 text-[14px] font-semibold font-body text-text-body border border-border hover:border-primary transition-colors"
              >
                Decline
              </button>
              <button className="font-body text-[13px] text-primary hover:underline">
                Privacy Settings
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
