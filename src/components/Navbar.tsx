import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = ['How it Works', 'For Doctors', 'About'];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
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
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="text-[15px] font-medium font-body text-text-body hover:text-primary transition-colors duration-150"
            >
              {link}
            </a>
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

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu" className="text-text-body">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
           <SheetContent side="right" className="bg-background w-80 p-6 pt-14 flex flex-col">
            <div className="flex flex-col gap-0">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setOpen(false)}
                  className="text-[17px] font-medium font-body text-text-primary py-4 border-b border-border hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
              <button className="text-[17px] font-medium font-body text-text-primary py-4 border-b border-border text-left hover:text-primary transition-colors">
                Log in
              </button>
            </div>
            <div className="mt-auto">
              <button
                onClick={scrollToForm}
                className="w-full bg-primary text-primary-foreground rounded-full py-4 text-[16px] font-semibold font-body shadow-teal-glow flex items-center justify-center"
              >
                Join Waitlist
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
