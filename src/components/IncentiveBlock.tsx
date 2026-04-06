import { useState, useEffect } from 'react';

export const IncentiveBlock = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

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
        secs: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const spotsUsed = 88;
  const spotsTotal = 500;
  const spotsRemaining = spotsTotal - spotsUsed;
  const progressPercent = (spotsUsed / spotsTotal) * 100;

  return (
    <section className="relative overflow-hidden bg-[#0a0a1a]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a1a] via-[#0f2524] to-[#0c1a1a]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0d9488] opacity-[0.08] blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full bg-[#0f766e] opacity-[0.06] blur-[130px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="container max-w-5xl mx-auto px-6">
          {/* Top badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-[rgba(13,148,136,0.15)] border border-[rgba(13,148,136,0.25)] text-white rounded-full px-5 py-2 text-[13px] font-medium font-body backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Limited Early Access — Closing Soon
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-8 font-heading font-bold text-center text-[32px] sm:text-[42px] lg:text-[56px] text-white leading-[1.08] tracking-tight">
            Health shouldn't be
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-display">
              complicated.
            </span>
          </h2>

          <p className="mt-5 font-body text-center text-[17px] sm:text-[19px] text-[rgba(255,255,255,0.6)] mx-auto max-w-lg leading-relaxed">
            Join <span className="text-white font-semibold">CareConnect</span> and get your first GP consultation free.
            <br className="hidden sm:block" />
            Worth <span className="text-emerald-400 font-semibold">BDT 300</span> — no card, no catch.
          </p>

          {/* Countdown */}
          <div className="mt-12 flex justify-center gap-3 sm:gap-4">
            {[
              { val: time.days, label: 'Days' },
              { val: time.hours, label: 'Hours' },
              { val: time.mins, label: 'Mins' },
              { val: time.secs, label: 'Secs' },
            ].map((t, i) => (
              <div key={t.label} className="group relative">
                <div className="absolute -inset-[1px] bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] rounded-2xl" />
                <div className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl px-5 sm:px-7 py-5 sm:py-6 min-w-[80px] sm:min-w-[100px]">
                  <p className="font-heading font-black text-[36px] sm:text-[48px] text-white leading-[1] tabular-nums text-center">
                    {String(t.val).padStart(2, '0')}
                  </p>
                  <p className="font-body text-[11px] sm:text-[12px] text-[rgba(255,255,255,0.4)] uppercase tracking-[0.15em] mt-2 text-center">
                    {t.label}
                  </p>
                </div>
                {i < 3 && (
                  <span className="absolute top-1/2 -right-2 sm:-right-2.5 -translate-y-1/2 text-[rgba(255,255,255,0.25)] text-2xl font-bold select-none">:</span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white rounded-full px-10 py-4 text-[17px] font-semibold font-body transition-all duration-300 flex items-center gap-2">
                Claim Your Free Consultation
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>

          {/* Spots progress */}
          <div className="mt-10 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-3">
              <p className="font-body text-[13px] text-[rgba(255,255,255,0.5)]">
                <span className="text-emerald-400 font-semibold text-[15px]">{spotsRemaining}</span> of {spotsTotal} spots left
              </p>
              <p className="font-body text-[12px] text-[rgba(255,255,255,0.35)]">
                {Math.round(progressPercent)}% claimed
              </p>
            </div>
            <div className="h-2 rounded-full bg-[rgba(255,255,255,0.08)] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-1000"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex justify-center gap-6 sm:gap-8">
            {[
              { icon: '🔒', text: 'No payment needed' },
              { icon: '⚡', text: 'Instant access' },
              { icon: '🩺', text: 'Verified doctors' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-[13px] text-[rgba(255,255,255,0.45)] font-body">
                <span className="text-[16px]">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
