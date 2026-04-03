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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-50 bg-background border border-border rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] py-4 px-6 max-w-sm w-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={24} />
              <p className="font-body text-[14px] text-text-body">
                We use cookies to improve your experience.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => dismiss(true)}
                className="bg-primary text-primary-foreground rounded-full px-5 py-2 text-[13px] font-semibold font-body hover:bg-primary-dark transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => dismiss(false)}
                className="rounded-full px-5 py-2 text-[13px] font-semibold font-body text-text-body border border-border hover:border-primary transition-colors"
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
