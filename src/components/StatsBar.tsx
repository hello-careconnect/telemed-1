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
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-dark-bg py-16" ref={ref}>
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 w-full lg:divide-x divide-[rgba(255,255,255,0.10)]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="px-8 lg:px-16 py-6 lg:py-2 text-center"
              >
                <AnimatedStat value={stat.value} inView={inView} />
                <p className="font-body text-[13px] text-[rgba(255,255,255,0.55)] mt-2 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
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
    <p className="font-heading font-black text-[40px] lg:text-[52px] text-dark-text leading-[1]">
      {display}
    </p>
  );
};
