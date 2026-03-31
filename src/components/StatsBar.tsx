import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '5,000+', label: 'DOCTORS BEING VERIFIED' },
  { value: '< 2 min', label: 'AVERAGE BOOKING TIME' },
  { value: '24/7', label: 'VIDEO CONSULTATIONS' },
  { value: 'Free', label: 'FIRST CONSULTATION' },
];

export const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-50px' });

  return (
    <section className="bg-primary py-10 sm:py-12 lg:py-16" ref={ref}>
      <div className="container max-w-[1140px] mx-auto px-6">
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:divide-x lg:gap-0 divide-[rgba(255,255,255,0.10)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
              className="px-4 sm:px-6 lg:px-14 py-6 lg:py-4 text-center flex flex-col items-center justify-center bg-[rgba(255,255,255,0.08)] lg:bg-transparent rounded-2xl lg:rounded-none"
            >
              <AnimatedStat value={stat.value} inView={inView} />
              <p className="font-body text-[11px] text-[rgba(255,255,255,0.55)] mt-3 uppercase tracking-widest whitespace-nowrap">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedStat = ({ value, inView }: { value: string; inView: boolean }) => {
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, '0'));

  useEffect(() => {
    if (!inView) return;
    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }
    const target = parseInt(numMatch[0].replace(',', ''));
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);
      const formatted = current.toLocaleString();
      setDisplay(value.replace(numMatch[0], formatted));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <p className="font-heading font-black text-[38px] sm:text-[44px] lg:text-[52px] text-primary-foreground leading-[1] whitespace-nowrap">
      {display}
    </p>
  );
};
