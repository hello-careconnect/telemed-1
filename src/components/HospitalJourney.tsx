import React from 'react';
import { Server, ListOrdered, Clock, LayoutDashboard, Monitor } from 'lucide-react';
import { StickyPhoneMockup } from './StickyPhoneMockup';
import { FeatureRow, MobileFeatureCard } from './FeatureRow';
import { useActiveFeatureScroll } from '@/hooks/use-active-feature-scroll';
import { useLang, tx } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';
import {
  HospitalScreen_ERP,
  HospitalScreen_Queue,
  HospitalScreen_Scheduling,
  HospitalScreen_OPD,
  HospitalScreen_TV,
} from './HospitalScreens';

const { hospitalJourney: t } = translations;

const ICONS = [Server, ListOrdered, Clock, LayoutDashboard, Monitor];
const SCREENS = [
  <HospitalScreen_ERP />,
  <HospitalScreen_Queue />,
  <HospitalScreen_Scheduling />,
  <HospitalScreen_OPD />,
  <HospitalScreen_TV />,
];

export const HospitalJourney = () => {
  const { lang } = useLang();
  const { activeFeature, featureRefs, setActiveFeature } = useActiveFeatureScroll(t.features.length);

  const banglaFont = lang === 'bn'
    ? { '--font-heading': 'var(--font-bangla)', '--font-body': 'var(--font-bangla)' } as React.CSSProperties
    : undefined;

  const features = t.features.map((f, i) => ({
    icon: ICONS[i],
    title: tx(f.title, lang),
    description: tx(f.description, lang),
    subFeatures: 'subFeatures' in f && f.subFeatures.length > 0
      ? f.subFeatures.map((sf) => tx(sf, lang))
      : undefined,
    screen: SCREENS[i],
  }));

  return (
    <section id="hospital-section" style={banglaFont} className="relative py-10 sm:py-14 lg:py-16 bg-[#0a0a1a]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a1a] via-[#0f2524] to-[#0c1a1a]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0d9488] opacity-[0.08] blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-[#0f766e] opacity-[0.06] blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      </div>
      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="mx-auto text-center mb-10">
          <span className="inline-flex items-center bg-[rgba(255,255,255,0.08)] text-dark-text rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-[rgba(255,255,255,0.1)]">
            {tx(t.badge, lang)}
          </span>
          <h2 className="mt-3 font-heading font-bold text-[32px] sm:text-[40px] text-dark-text leading-[1.15]">
            {tx(t.heading, lang)}
          </h2>
          <p className="mt-3 font-body text-[18px] text-[rgba(255,255,255,0.6)]">
            {tx(t.subtext, lang)}
          </p>
        </div>

        <div className="hidden lg:flex flex-row justify-center gap-3">
          <div className="flex-1 space-y-4">
            {features.map((f, i) => (
              <FeatureRow
                key={i}
                ref={(el) => { featureRefs.current[i] = el; }}
                index={i}
                isActive={activeFeature === i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                subFeatures={f.subFeatures}
                onClick={() => setActiveFeature(i)}
                dark
              />
            ))}
          </div>
          <div className="flex-1">
            <StickyPhoneMockup
              activeScreen={features[activeFeature].screen}
              screenKey={activeFeature}
            />
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {features.map((f, i) => (
            <MobileFeatureCard key={i} icon={f.icon} title={f.title} description={f.description} subFeatures={f.subFeatures} dark />
          ))}
        </div>
      </div>
    </section>
  );
};
