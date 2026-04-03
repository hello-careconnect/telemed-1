import React from 'react';
import { PhoneFrame } from './mockup/PhoneFrame';

interface StickyPhoneMockupProps {
  activeScreen: React.ReactNode;
  screenKey: string | number;
}

export const StickyPhoneMockup = ({ activeScreen, screenKey }: StickyPhoneMockupProps) => (
  <div
    className="hidden lg:flex items-start justify-center"
    style={{ position: 'sticky', top: 80, paddingTop: 16 }}
  >
    {/* Ambient glow behind phone */}
    <div style={{
      position: 'absolute',
      width: 200,
      height: 200,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(10,158,138,0.2) 0%, transparent 70%)',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      pointerEvents: 'none',
    }} />

    <PhoneFrame screenKey={screenKey}>
      {activeScreen}
    </PhoneFrame>
  </div>
);