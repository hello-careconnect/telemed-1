import { useState, useEffect } from 'react';

export const IncentiveBlock = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
      });
    };

    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-dark-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(255,255,255,0.05)]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full bg-[rgba(255,255,255,0.04)]" />

      <div className="relative z-10 py-12 sm:py-16 lg:py-24">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex bg-[rgba(255,255,255,0.15)] text-primary-foreground rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Limited Early Access
          </span>

          <h2 className="mt-6 font-heading font-bold text-[28px] sm:text-[36px] lg:text-[48px] text-primary-foreground leading-[1.1]">
            Health shouldn't be complicated.
            <br />
            <span className="font-display">Let CareConnect make it simple.</span>
          </h2>

          <p className="mt-4 font-body text-[16px] sm:text-[18px] text-[rgba(255,255,255,0.80)] mx-auto max-w-lg">
            One free General Physician consultation, BDT 300 value.
            <br className="hidden sm:block" />
            No card. No catch. First 500 get it free.
          </p>

          {/* Countdown */}
          <div className="mt-10 flex justify-center gap-4">
            {[
              { val: time.days, label: 'DAYS' },
              { val: time.hours, label: 'HRS' },
              { val: time.mins, label: 'MINS' },
            ].map((t) => (
              <div key={t.label} className="bg-[rgba(255,255,255,0.10)] backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-5">
                <p className="font-heading font-black text-[36px] sm:text-[48px] text-primary-foreground leading-[1]">
                  {String(t.val).padStart(2, '0')}
                </p>
                <p className="font-body text-[12px] text-[rgba(255,255,255,0.55)] uppercase tracking-wide mt-1">
                  {t.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="mt-10 bg-primary-foreground text-primary rounded-full px-10 py-4 text-[17px] font-semibold font-body hover:opacity-90 transition-all duration-200 shadow-xl"
          >
            Start Consultation
          </button>

          {/* Spots bar */}
          <div className="mt-8 max-w-sm mx-auto">
            <p className="font-body text-[14px] text-[rgba(255,255,255,0.70)] mb-2">412 of 500 spots remaining</p>
            <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.10)] overflow-hidden">
              <div className="h-full rounded-full bg-primary-foreground" style={{ width: '18%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
