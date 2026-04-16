import React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Baby, Brain, Stethoscope, Leaf, Sparkles } from 'lucide-react';
import { useLang, tx } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';

const { services: t } = translations;

const ICONS = [Stethoscope, Heart, Baby, Sparkles, Brain, Leaf];
const ICON_COLORS = [
  { iconColor: 'text-[hsl(168,60%,40%)]', bgColor: 'bg-[hsl(168,60%,40%,0.1)]' },
  { iconColor: 'text-[hsl(340,65%,55%)]', bgColor: 'bg-[hsl(340,65%,55%,0.1)]' },
  { iconColor: 'text-[hsl(210,60%,50%)]', bgColor: 'bg-[hsl(210,60%,50%,0.1)]' },
  { iconColor: 'text-[hsl(28,70%,50%)]',  bgColor: 'bg-[hsl(28,70%,50%,0.1)]' },
  { iconColor: 'text-[hsl(270,50%,55%)]', bgColor: 'bg-[hsl(270,50%,55%,0.1)]' },
  { iconColor: 'text-[hsl(80,55%,40%)]',  bgColor: 'bg-[hsl(80,55%,40%,0.1)]' },
];

export const ServicesSection = () => {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const banglaFont = lang === 'bn'
    ? { '--font-heading': 'var(--font-bangla)', '--font-body': 'var(--font-bangla)' } as React.CSSProperties
    : undefined;

  const services = t.items.map((item, i) => ({
    icon: ICONS[i],
    title: tx(item.title, lang),
    desc: tx(item.desc, lang),
    ...ICON_COLORS[i],
  }));

  return (
    <section style={banglaFont} className="py-8 sm:py-12 lg:py-16 bg-soft-img">
      <div className="container max-w-[1140px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-primary/20">
            {tx(t.badge, lang)}
          </span>
          <h2 className="mt-3 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.12]">
            {tx(t.heading, lang)}{' '}
            <span className="font-display text-primary">{tx(t.headingAccent, lang)}</span>
          </h2>
          <p className="mt-3 font-body text-[15px] sm:text-[17px] text-text-body max-w-2xl mx-auto">
            {tx(t.subtext, lang)}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-background rounded-[20px] p-4 sm:p-7 border border-border hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl ${s.bgColor} ${s.iconColor} flex items-center justify-center mb-3 sm:mb-5`}>
                <s.icon className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-[13px] sm:text-[18px] text-text-primary mb-1.5 sm:mb-2 group-hover:text-primary transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="font-body text-[12px] sm:text-[15px] text-text-body leading-[1.6] hidden sm:block">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
