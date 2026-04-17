import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLang, tx } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';

const { nav } = translations;

export const Navbar = () => {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: tx(nav.howItWorks, lang),   href: '#how-it-works' },
    { label: tx(nav.forPatients, lang),  href: '#patient-journey' },
    { label: tx(nav.forDoctors, lang),   href: '#doctor-section' },
    { label: tx(nav.forHospitals, lang), href: '#hospital-section' }
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToOffset = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navbarOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToOffset(id), 300);
  };

  const scrollToForm = () => {
    setOpen(false);
    setTimeout(() => scrollToOffset('waitlist-form'), 300);
  };

  const banglaFont = lang === 'bn'
    ? { '--font-heading': 'var(--font-bangla)', '--font-body': 'var(--font-bangla)' } as React.CSSProperties
    : undefined;

  return (
    <nav style={banglaFont} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] max-w-[1140px] transition-all duration-300">
      <div className={`px-4 md:px-4 lg:px-6 py-3 flex items-center transition-all duration-300 ${
        scrolled
          ? 'rounded-full bg-background/95 backdrop-blur-md border border-border'
          : 'rounded-none bg-transparent border-transparent'
      }`}>
        {/* Left col */}
        <div className="flex-1 flex items-center justify-start">
          <Logo size={28} />
        </div>

        {/* Desktop nav links — center col */}
        <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href.replace('#', ''));
              }}
              className="whitespace-nowrap text-[14px] lg:text-[15px] font-medium font-body text-text-body hover:text-text-primary transition-colors duration-150 px-2 lg:px-3 py-1.5 rounded-full hover:bg-primary/5"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions — right col */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-2 lg:gap-3">
          <button className="whitespace-nowrap text-[15px] lg:text-[16px] font-medium font-body text-text-body hover:text-text-primary transition-colors duration-150">
            {tx(nav.login, lang)}
          </button>
          <button
            onClick={scrollToForm}
            className="whitespace-nowrap bg-primary text-primary-foreground rounded-full px-4 lg:px-5 py-2 text-[15px] lg:text-[16px] font-medium font-body hover:bg-primary-dark transition-all duration-200 shadow-teal-glow hover:-translate-y-px flex items-center gap-1 lg:gap-1.5"
          >
            {tx(nav.joinWaitlist, lang)} <ArrowUpRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex-1 md:hidden flex items-center justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="text-text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-80 p-6 pt-14 flex flex-col border-l border-border">
              <div className="flex flex-col gap-0">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href.replace('#', ''));
                    }}
                    className="text-[17px] font-medium font-body text-text-primary py-4 border-b border-border hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button className="text-[17px] font-medium font-body text-text-primary py-4 border-b border-border text-left hover:text-primary transition-colors">
                  {tx(nav.login, lang)}
                </button>
              </div>
              <div className="mt-auto">
                <button
                  onClick={scrollToForm}
                  className="w-full bg-primary text-primary-foreground rounded-full py-4 text-[16px] font-medium font-body shadow-teal-glow flex items-center justify-center gap-2"
                >
                  {tx(nav.joinWaitlist, lang)} <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
