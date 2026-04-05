import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'For Patients',  href: '#how-it-works' },
  { label: 'For Doctors',   href: '#doctor-section' },
  { label: 'For Hospitals', href: '#hospital-section' },
  { label: 'How it Works',  href: '#how-it-works' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const scrollToForm = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-[calc(100%-1rem)] lg:w-[calc(100%-2rem)] max-w-[1140px] transition-all duration-300">
      <div className={`px-4 md:px-4 lg:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'rounded-full bg-background/95 backdrop-blur-md border border-border shadow-sm'
          : 'rounded-none bg-transparent border-transparent'
      }`}>
        <div className="shrink-0">
          <Logo size={28} />
        </div>

        {/* Desktop nav links — centered liquid-glass pill */}
        <div className="hidden md:flex flex-1 items-center justify-center px-3 min-w-0">
          <div className="flex items-center gap-0.5 lg:gap-1 max-w-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[15px] lg:text-[17px] font-semibold font-body text-text-body hover:text-text-primary transition-colors duration-150 px-2 lg:px-3 py-1.5 rounded-full hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex shrink-0 items-center gap-2 lg:gap-3">
          <button className="whitespace-nowrap text-[16px] lg:text-[17px] font-semibold font-body text-text-body hover:text-text-primary transition-colors duration-150">
            Log in
          </button>
          <button
            onClick={scrollToForm}
            className="whitespace-nowrap bg-primary text-primary-foreground rounded-full px-4 lg:px-5 py-2 text-[17px] lg:text-[17px] font-semibold font-body hover:bg-primary-dark transition-all duration-200 shadow-teal-glow hover:-translate-y-px flex items-center gap-1 lg:gap-1.5"
          >
            Join Waitlist <ArrowUpRight className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
          </button>
        </div>

        {/* Mobile hamburger — Sheet drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
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
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-semibold font-body text-text-primary py-4 border-b border-border hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="text-[17px] font-semibold font-body text-text-primary py-4 border-b border-border text-left hover:text-primary transition-colors">
                Log in
              </button>
            </div>
            <div className="mt-auto">
              <button
                onClick={scrollToForm}
                className="w-full bg-primary text-primary-foreground rounded-full py-4 text-[16px] font-semibold font-body shadow-teal-glow flex items-center justify-center gap-2"
              >
                Join Waitlist <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
