import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ArrowRight, X } from 'lucide-react';

export const ExitIntent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('exitShown')) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 5) {
        setOpen(true);
        sessionStorage.setItem('exitShown', 'true');
        document.removeEventListener('mouseleave', handler);
      }
    };

    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, []);

  const scrollToForm = () => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl w-full rounded-[32px] overflow-hidden p-0 border-none gap-0 [&>button:last-child]:hidden">
        <div className="flex min-h-[400px]">
          {/* Left decorative */}
          <div className="hidden sm:flex w-[45%] bg-primary relative items-center justify-center overflow-hidden">
            <p className="font-display italic text-primary-foreground/20 text-[80px] leading-[1.1] px-6">
              Better care is waiting.
            </p>
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[rgba(255,255,255,0.05)]" />
            <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-[rgba(255,255,255,0.03)]" />
          </div>

          {/* Right content */}
          <div className="flex-1 bg-background p-8 sm:p-10 flex flex-col justify-center relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-flex self-start bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body mb-4">
              Don't miss your spot
            </span>

            <h3 className="font-heading font-bold text-[24px] sm:text-[26px] text-text-primary leading-[1.2]">
              412 spots left. Claim yours.
            </h3>

            <p className="mt-3 font-body text-[15px] text-text-body">
              Your free consultation is waiting, but only for the first 500.
            </p>

            <input
              type="email"
              placeholder="your@email.com"
              className="mt-6 w-full h-[52px] rounded-xl border border-border px-4 font-body text-[15px] text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all bg-background"
            />

            <button
              onClick={scrollToForm}
              className="group mt-3 w-full bg-primary text-primary-foreground rounded-full py-4 text-[16px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark transition-all duration-200 flex items-center justify-center gap-2"
            >
              Claim My Free Spot
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 font-body text-[13px] text-text-muted hover:text-text-body transition-colors text-center"
            >
              No thanks, I'll wait
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
