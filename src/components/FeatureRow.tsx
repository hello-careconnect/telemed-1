import React from 'react';
import { CheckCircle, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureRowProps {
  index: number;
  isActive: boolean;
  icon: LucideIcon;
  title: string;
  description: string;
  subFeatures?: string[];
  onClick?: () => void;
  dark?: boolean;
}

export const FeatureRow = React.forwardRef<HTMLDivElement, FeatureRowProps>(
  ({ isActive, icon: Icon, title, description, subFeatures, onClick, dark }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      className={`transition-all duration-300 rounded-2xl p-6 border-l-4 cursor-pointer ${
        isActive
          ? dark
            ? 'border-l-primary bg-white/[0.07] shadow-lg'
            : 'border-l-primary bg-primary/[0.05] shadow-sm'
          : dark
            ? 'border-l-transparent bg-white/[0.03] hover:bg-white/[0.06]'
            : 'border-l-transparent hover:bg-accent/40'
      }`}
    >
      <motion.div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 transition-colors duration-300 ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : dark
              ? 'bg-white/10 text-primary'
              : 'bg-primary/10 text-primary'
        }`}
        animate={isActive ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <h3 className={`font-heading font-semibold text-[20px] leading-tight ${dark ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h3>
      <p className={`mt-3 font-body font-light text-[15px] leading-relaxed ${dark ? 'text-white/60' : 'text-text-body'}`}>
        {description}
      </p>
      {subFeatures && (
        <ul className="mt-3 space-y-1.5">
          {subFeatures.map((f, i) => (
            <li key={i} className={`flex items-start gap-2 font-body font-light text-[14px] ${dark ? 'text-white/60' : 'text-text-body'}`}>
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
);

FeatureRow.displayName = 'FeatureRow';

export const MobileJourneyCard = ({ icon: Icon, title, description, isActive, onClick }: {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <motion.div
    onClick={onClick}
    className={`w-[180px] flex-shrink-0 rounded-2xl p-4 cursor-pointer select-none transition-colors duration-200 ${
      isActive ? 'bg-primary/[0.06]' : 'bg-background'
    }`}
    animate={{ scale: isActive ? 1 : 0.95, opacity: isActive ? 1 : 0.6 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-xl mb-2 transition-colors duration-200 ${
      isActive ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
    }`}>
      <Icon className="w-4 h-4" />
    </div>
    <h3 className={`font-heading font-semibold text-[14px] leading-snug transition-colors duration-200 ${
      isActive ? 'text-text-primary' : 'text-text-body'
    }`}>{title}</h3>
    <p className="font-body text-[12px] leading-relaxed text-text-body mt-1.5">{description}</p>
  </motion.div>
);

export const MobileFeatureCard = ({ icon: Icon, title, description, subFeatures, dark }: Omit<FeatureRowProps, 'index' | 'isActive'>) => (
  <div className={`rounded-2xl p-5 ${
    dark ? 'bg-white/[0.06] border border-white/10' : 'bg-background border border-border'
  }`}>
    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3 ${
      dark ? 'bg-white/10 text-primary' : 'bg-primary/10 text-primary'
    }`}>
      <Icon className="w-4 h-4" />
    </div>
    <h3 className={`font-heading font-semibold text-[17px] ${dark ? 'text-white' : 'text-text-primary'}`}>{title}</h3>
    <p className={`mt-1.5 font-body text-[14px] leading-relaxed ${dark ? 'text-white/55' : 'text-text-body'}`}>{description}</p>
    {subFeatures && (
      <ul className="mt-3 space-y-1.5">
        {subFeatures.map((f, i) => (
          <li key={i} className={`flex items-start gap-2 font-body font-light text-[13px] ${dark ? 'text-white/60' : 'text-text-body'}`}>
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    )}
  </div>
);
