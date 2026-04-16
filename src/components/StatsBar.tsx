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
    <div ref={ref} className="py-8 sm:py-10">
      <div className="container max-w-[1140px] mx-auto px-6">
        <div className="rounded-2xl border border-border bg-surface/60 backdrop-blur-sm py-2 sm:py-3">
          <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                transition={{ delay: i * 0.2, duration: 0.5, ease: 'easeOut' }}
                className={`px-4 sm:px-6 lg:px-10 py-4 text-center flex flex-col items-center justify-center ${
                  i !== stats.length - 1 ? 'lg:border-r lg:border-border' : ''
                }`}
              >
                <AnimatedStat value={stat.value} inView={inView} />
                <p className="mt-2 font-body font-bold text-[11px] text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedStat = ({ value, inView }: { value: string; inView: boolean }) => {
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, '0'));

  useEffect(() => {
    if (!inView) return;
    const numMatch = value.match(/[\d,]+/);
    if (!numMatch) { setDisplay(value); return; }
    const target = parseInt(numMatch[0].replace(',', ''));
    const duration = 1500; const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start; const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); const current = Math.round(target * eased);
      setDisplay(value.replace(numMatch[0], current.toLocaleString()));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <p className="font-heading font-bold text-[36px] sm:text-[42px] lg:text-[48px] text-gray-600 leading-[1] whitespace-nowrap">
      {display}
    </p>
  );
};
