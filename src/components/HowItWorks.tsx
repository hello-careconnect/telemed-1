import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Calendar, Video } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: 'STEP 01',
    title: 'Search & Discover',
    body: 'Find verified doctors by specialty, location, or condition. Read genuine patient reviews with star ratings from real visits.',
    num: '01',
  },
  {
    icon: Calendar,
    step: 'STEP 02',
    title: 'Book Instantly',
    body: 'Choose in-person or 24/7 video. Pick a slot in under 2 minutes. Pay securely with bKash, Nagad, or card.',
    num: '02',
  },
  {
    icon: Video,
    step: 'STEP 03',
    title: 'Get Care',
    body: 'Consult your doctor, receive a digital prescription, order medicines — all from the same place.',
    num: '03',
  },
];

export const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-28 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Simple by design
          </span>
          <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.15]">
            Three steps to better healthcare
          </h2>
          <p className="mt-4 font-body text-[18px] text-text-body max-w-md mx-auto">
            No phone queues. No waiting rooms. Just care.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="group relative overflow-hidden bg-surface rounded-[28px] p-8 border border-border hover:bg-background hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              {/* Watermark number */}
              <span className="absolute bottom-2 right-4 font-heading font-black text-[120px] text-surface-2 leading-[1] select-none pointer-events-none">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="bg-accent rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <p className="font-body font-medium text-[12px] text-primary tracking-[0.12em] uppercase mb-2">
                  {s.step}
                </p>
                <h3 className="font-heading font-semibold text-[22px] text-text-primary mb-3">{s.title}</h3>
                <p className="font-body text-[16px] text-text-body leading-[1.65]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
