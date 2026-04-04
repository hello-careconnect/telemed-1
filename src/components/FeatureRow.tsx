import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface FeatureRowProps {
  index: number;
  isActive: boolean;
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  dark?: boolean;
  align?: 'left' | 'right';
  alwaysOpen?: boolean;
}

export const FeatureRow = React.forwardRef<HTMLDivElement, FeatureRowProps>(
  ({ index, isActive, icon: Icon, title, description, onClick, dark, align = 'left', alwaysOpen = false }, ref) => {
    const open = isActive || alwaysOpen;

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`
          rounded-2xl px-5 py-4 cursor-pointer select-none transition-all duration-200
          ${align === 'right' ? 'border-r-[3px]' : 'border-l-[3px]'}
          ${isActive
            ? dark
              ? 'border-primary bg-white/[0.07] shadow-lg'
              : 'border-primary bg-primary/[0.05] shadow-sm'
            : dark
              ? 'border-transparent bg-white/[0.03] hover:bg-white/[0.06]'
              : 'border-transparent hover:bg-accent/40'
          }
        `}
      >
        <div className={`flex items-center gap-3 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
          <motion.div
            className={`inline-flex items-center justify-center w-9 h-9 rounded-xl shrink-0 transition-colors duration-200 ${
              isActive
                ? 'bg-primary text-primary-foreground'
                : dark ? 'bg-white/10 text-primary' : 'bg-primary/10 text-primary'
            }`}
            animate={isActive ? { scale: [1, 1.2, 1] } : { scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Icon className="w-4 h-4" />
          </motion.div>

          <h3 className={`
            flex-1 font-heading font-semibold text-[16px] leading-snug transition-colors duration-200
            ${align === 'right' ? 'text-right' : ''}
            ${isActive
              ? dark ? 'text-white' : 'text-text-primary'
              : dark ? 'text-white/65' : 'text-text-body'
            }
          `}>
            {title}
          </h3>

          <span className={`font-mono text-[11px] tabular-nums shrink-0 transition-colors duration-200 ${
            isActive ? 'text-primary' : dark ? 'text-white/20' : 'text-text-muted/50'
          }`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="desc"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <p className={`
                font-body text-[13.5px] leading-relaxed
                ${align === 'right' ? 'text-right' : ''}
                ${dark ? 'text-white/50' : 'text-text-body'}
              `}>
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FeatureRow.displayName = 'FeatureRow';

export const MobileFeatureCard = ({ icon: Icon, title, description, dark }: {
  icon: LucideIcon;
  title: string;
  description: string;
  dark?: boolean;
}) => (
  <div className={`rounded-2xl p-5 ${
    dark ? 'bg-white/[0.06] border border-white/10' : 'bg-surface border border-border'
  }`}>
    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl mb-3 ${
      dark ? 'bg-white/10 text-primary' : 'bg-primary/10 text-primary'
    }`}>
      <Icon className="w-4 h-4" />
    </div>
    <h3 className={`font-heading font-semibold text-[17px] ${dark ? 'text-white' : 'text-text-primary'}`}>{title}</h3>
    <p className={`mt-1.5 font-body text-[14px] leading-relaxed ${dark ? 'text-white/55' : 'text-text-body'}`}>{description}</p>
  </div>
);
