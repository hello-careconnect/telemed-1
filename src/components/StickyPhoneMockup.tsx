import React from 'react';
import { PhoneFrame } from './mockup/PhoneFrame';

interface StickyPhoneMockupProps {
  activeScreen: React.ReactNode;
  screenKey: string | number;
  activeIndex?: number;
  total?: number;
  align?: 'start' | 'center' | 'end';
}

export const StickyPhoneMockup = ({ activeScreen, screenKey, activeIndex = 0, total = 1, align = 'center' }: StickyPhoneMockupProps) => (
  <div
    className={`hidden lg:flex flex-col gap-4 items-${align}`}
    style={{ position: 'sticky', top: 80 }}
  >
    <PhoneFrame screenKey={screenKey}>
      {activeScreen}
    </PhoneFrame>

    {/* Step counter */}
    <div className="flex items-center gap-2">
      <span className="font-heading font-bold text-[13px] text-primary tabular-nums">
        {String(activeIndex + 1).padStart(2, '0')}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-border'
            }`}
          />
        ))}
      </div>
      <span className="font-heading text-[13px] text-text-muted tabular-nums">
        {String(total).padStart(2, '0')}
      </span>
    </div>
  </div>
);