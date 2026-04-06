import React from 'react';
import { PhoneFrame } from './mockup/PhoneFrame';

interface StickyPhoneMockupProps {
  activeScreen: React.ReactNode;
  screenKey: string | number;
  ctaLabel?: string;
  ctaHref?: string;
  activeIndex?: number;
  total?: number;
  align?: 'start' | 'center' | 'end';
}

export const StickyPhoneMockup = ({ activeScreen, screenKey, ctaLabel, ctaHref }: StickyPhoneMockupProps) => (
  <div
    className="flex self-end justify-end flex-col items-center gap-5"
    style={{ position: 'sticky', top: 80, paddingTop: 16 }}
  >
    <div className='relative'>
      <PhoneFrame screenKey={screenKey}>
        {activeScreen}
      </PhoneFrame>
    </div>
    {ctaLabel && (
      <a href={ctaHref || '#'} className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-medium text-primary border border-primary/20 hover:bg-primary/10 transition-colors font-body">
        {ctaLabel}
      </a>
    )}
  </div>
);
