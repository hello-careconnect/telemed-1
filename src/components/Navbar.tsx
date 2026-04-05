import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'How it Works', id: 'how-it-works' },
  { label: 'For Doctors',  id: 'doctor-section' },
  { label: 'About',        id: 'about' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const scrollToForm = () => scrollTo('waitlist-form');

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-border bg-background/90 backdrop-blur-sm"
        style={{
          height: scrolled ? 64 : 72,
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        }}
      >
        <div className="container h-full flex items-center justify-between max-w-[1140px] mx-auto px-6">
          <Logo size={32} />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[15px] font-medium font-body text-text-body hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-[15px] font-medium font-body text-text-body hover:text-primary transition-colors duration-150">
              Log in
            </button>
            <button
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-[15px] font-semibold font-body hover:bg-primary-dark transition-all duration-200 shadow-teal-glow hover:-translate-y-px"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full text-text-body hover:bg-surface transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-md flex flex-col"
            style={{ paddingTop: scrolled ? 64 : 72 }}
          >
            {/* Nav links — centered, big, staggered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.07 + 0.08, duration: 0.28 }}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-center text-[28px] font-heading font-bold text-text-primary hover:text-primary transition-colors duration-150 py-4 border-b border-border/50 last:border-none"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.07 + 0.08, duration: 0.28 }}
                className="w-full text-center text-[28px] font-heading font-bold text-text-primary hover:text-primary transition-colors duration-150 py-4"
              >
                Log in
              </motion.button>
            </div>

            {/* CTA pinned to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.32, duration: 0.28 }}
              className="px-8 pb-12"
            >
              <button
                onClick={scrollToForm}
                className="w-full bg-primary text-primary-foreground rounded-full py-4 text-[17px] font-semibold font-body shadow-teal-glow flex items-center justify-center gap-2 hover:bg-primary-dark transition-all duration-200"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
