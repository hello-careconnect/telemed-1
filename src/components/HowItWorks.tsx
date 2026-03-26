import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, Video, ClipboardList, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: 'Step 01',
    title: "Share What's on Your Mind",
    body: 'Tell us your symptoms or describe your health concern. Our smart system matches you to the right specialist instantly.',
    detail: 'Describe in your own words — no medical jargon needed. Available in Bangla & English.',
    num: '01',
    color: 'from-primary/10 to-accent',
  },
  {
    icon: Users,
    step: 'Step 02',
    title: 'Match with the Right Doctor',
    body: 'Browse verified doctors by specialty, read real patient reviews, and choose the one that fits your needs and schedule.',
    detail: 'Every doctor is BMDC-verified. Filter by rating, availability, or fee.',
    num: '02',
    color: 'from-primary/10 to-accent',
  },
  {
    icon: Video,
    step: 'Step 03',
    title: 'Talk Face-to-Face',
    body: 'Meet your doctor via secure HD video call or visit in-person. Get the care you need, when you need it, 24/7.',
    detail: 'End-to-end encrypted. Works on any device, no app download required.',
    num: '03',
    color: 'from-primary/10 to-accent',
  },
  {
    icon: ClipboardList,
    step: 'Step 04',
    title: 'Get Your Care Plan',
    body: 'Receive a digital prescription, order medicines, and get follow-up reminders — all from one platform.',
    detail: 'Prescriptions sent directly to your phone. Medicine delivery available.',
    num: '04',
    color: 'from-primary/10 to-accent',
  },
];

const AUTO_INTERVAL = 3200;

export const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = (current: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);

    const tickMs = 30;
    const steps_count = AUTO_INTERVAL / tickMs;
    let ticks = 0;
    progressRef.current = setInterval(() => {
      ticks++;
      setProgress(Math.min((ticks / steps_count) * 100, 100));
    }, tickMs);

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, AUTO_INTERVAL);
  };

  useEffect(() => {
    if (!inView) return;
    startTimer(active);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    if (!inView) return;
    startTimer(active);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const handleStepClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    setProgress(0);
    setActive(i);
  };

  return (
    <section id="how-it-works" className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Simple by design
          </span>
          <h2 className="mt-3 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.15]">
            How CareConnect{' '}
            <span className="font-display italic text-primary">works</span>
          </h2>
          <p className="mt-3 font-body text-[17px] text-text-body max-w-md mx-auto">
            From your first message to your care plan — 4 simple steps.
          </p>
        </div>

        <div ref={ref} className="flex flex-col lg:flex-row gap-6 lg:gap-10">

          {/* Left — Step selectors */}
          <div className="lg:w-[42%] flex flex-col gap-3">
            {steps.map((s, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={s.num}
                  initial={{ opacity: 0, x: -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  onClick={() => handleStepClick(i)}
                  className={`group text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'border-primary bg-accent shadow-md'
                      : 'border-border bg-surface hover:border-primary/50 hover:bg-background'
                  }`}
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-primary' : 'bg-accent group-hover:bg-primary/10'
                    }`}>
                      <s.icon className={`w-[18px] h-[18px] transition-colors ${isActive ? 'text-primary-foreground' : 'text-primary'}`} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <p className={`font-body text-[11px] font-semibold uppercase tracking-widest leading-none mb-1 ${isActive ? 'text-primary' : 'text-text-muted'}`}>
                        {s.step}
                      </p>
                      <p className={`font-heading font-semibold text-[15px] leading-snug ${isActive ? 'text-text-primary' : 'text-text-body'}`}>
                        {s.title}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? 'text-primary translate-x-0 opacity-100' : 'text-border -translate-x-1 opacity-0 group-hover:opacity-50 group-hover:translate-x-0'}`} />
                  </div>

                  {/* Progress bar */}
                  {isActive && (
                    <div className="h-[3px] bg-primary/20">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0 }}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right — Detail panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-[58%] flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex-1 bg-surface rounded-[28px] border border-border p-8 lg:p-10 flex flex-col min-h-[360px] relative overflow-hidden"
              >
                {/* Watermark */}
                <span className="absolute bottom-0 right-4 font-heading font-black text-[140px] text-surface-2 leading-[1] select-none pointer-events-none">
                  {steps[active].num}
                </span>

                <div className="relative z-10">
                  {/* Icon large */}
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-teal-glow">
                    {(() => { const Icon = steps[active].icon; return <Icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />; })()}
                  </div>

                  <p className="font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-2">
                    {steps[active].step}
                  </p>
                  <h3 className="font-heading font-bold text-[26px] sm:text-[30px] text-text-primary leading-[1.2] mb-4">
                    {steps[active].title}
                  </h3>
                  <p className="font-body text-[16px] text-text-body leading-[1.7] mb-4 max-w-md">
                    {steps[active].body}
                  </p>

                  {/* Detail chip */}
                  <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <p className="font-body text-[13px] text-primary font-medium">
                      {steps[active].detail}
                    </p>
                  </div>
                </div>

                {/* Step dots */}
                <div className="flex gap-2 mt-auto pt-8 relative z-10">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/40'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
