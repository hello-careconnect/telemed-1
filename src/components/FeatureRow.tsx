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
      className={`transition-all duration-300 rounded-2xl p-6 border-l-4 cursor-pointer backdrop-blur-md ${
        isActive
          ? dark
            ? 'border-l-primary bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] shadow-lg'
            : 'border-l-primary bg-accent/20 shadow-sm'
          : dark
            ? 'border-l-transparent bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.07)]'
            : 'border-l-transparent hover:bg-accent/10'
      }`}
      style={{ minHeight: 180 }}
    >
      <motion.div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 transition-colors duration-300 ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : dark
              ? 'bg-[rgba(255,255,255,0.08)] text-primary'
              : 'bg-accent text-primary'
        }`}
        animate={isActive ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <h3 className={`font-heading font-bold text-[20px] leading-tight ${dark ? 'text-dark-text' : 'text-text-primary'}`}>
        {title}
      </h3>
      <p className={`mt-3 font-body text-[15px] leading-relaxed ${dark ? 'text-[rgba(255,255,255,0.6)]' : 'text-text-body'}`}>
        {description}
      </p>
      {subFeatures && (
        <ul className="mt-3 space-y-1.5">
          {subFeatures.map((f, i) => (
            <li key={i} className={`flex items-start gap-2 font-body text-[14px] ${dark ? 'text-[rgba(255,255,255,0.6)]' : 'text-text-body'}`}>
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

// Mobile card version
export const MobileFeatureCard = ({ icon: Icon, title, description, subFeatures, dark }: Omit<FeatureRowProps, 'index' | 'isActive'>) => (
  <div className={`lg:hidden rounded-2xl p-5 backdrop-blur-md ${
    dark
      ? 'bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)]'
      : 'bg-accent border border-border'
  }`}>
    <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground mb-3">
      <Icon className="w-4.5 h-4.5" />
    </div>
    <h3 className={`font-heading font-bold text-[18px] ${dark ? 'text-dark-text' : 'text-text-primary'}`}>{title}</h3>
    <p className={`mt-2 font-body text-[14px] leading-relaxed ${dark ? 'text-[rgba(255,255,255,0.6)]' : 'text-text-body'}`}>{description}</p>
    {subFeatures && (
      <ul className="mt-3 space-y-1.5">
        {subFeatures.map((f, i) => (
          <li key={i} className={`flex items-start gap-2 font-body text-[13px] ${dark ? 'text-[rgba(255,255,255,0.6)]' : 'text-text-body'}`}>
            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
    )}
  </div>
);