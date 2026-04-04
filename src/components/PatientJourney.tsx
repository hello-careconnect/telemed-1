import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, MapPin, Brain, FolderHeart, Star, CalendarCheck, Navigation, FileText, Activity, type LucideIcon } from 'lucide-react';
import { PhoneFrame } from './mockup/PhoneFrame';
import { MobileFeatureCard } from './FeatureRow';
import {
  PatientScreen_VideoConsult,
  PatientScreen_NearbyHospitals,
  PatientScreen_AIMatching,
  PatientScreen_HealthRecords,
  PatientScreen_Reviews,
  PatientScreen_InstantBooking,
  PatientScreen_ClosestDoctor,
  PatientScreen_Prescription,
  PatientScreen_AIAnalysis,
} from './PatientScreens';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  screen: React.ReactNode;
}

const patientFeatures: Feature[] = [
  { icon: Video,         title: '24/7 Video Consultation',  description: 'Encrypted calls with verified doctors any time. Prescription issued immediately after.', screen: <PatientScreen_VideoConsult /> },
  { icon: Brain,         title: 'AI Doctor Matching',       description: 'Describe symptoms in Bangla or English — AI finds the right specialist for you.', screen: <PatientScreen_AIMatching /> },
  { icon: CalendarCheck, title: 'Instant Booking',          description: 'Pick your slot, pay via bKash or Nagad, confirmed in under 2 minutes.', screen: <PatientScreen_InstantBooking /> },
  { icon: MapPin,        title: 'Nearby Hospitals',         description: 'Verified clinics sorted by distance with real-time hours and directions.', screen: <PatientScreen_NearbyHospitals /> },
  { icon: Star,          title: 'Transparent Reviews',      description: 'Verified ratings from real appointments so you can choose with confidence.', screen: <PatientScreen_Reviews /> },
  { icon: FolderHeart,   title: 'Health Records',           description: 'Prescriptions, labs, and notes in one secure place. Share with any doctor.', screen: <PatientScreen_HealthRecords /> },
  { icon: Navigation,    title: 'Closest Doctor',           description: 'Find who is nearest and available right now, sorted by your location.', screen: <PatientScreen_ClosestDoctor /> },
  { icon: FileText,      title: 'Digital Prescriptions',    description: 'Download as PDF or order medicines directly from the app.', screen: <PatientScreen_Prescription /> },
  { icon: Activity,      title: 'AI Health Analysis',       description: 'Patterns across your appointments surfaced as insights. Available in Bangla.', screen: <PatientScreen_AIAnalysis /> },
];

// Slight random-ish rotations per card for a natural floating feel
const CARD_ROTATIONS = [-4, 2.5, -3, 5, -2, 3.5, -4.5, 2, -3.5];


// ─── Floating feature card ────────────────────────────────────────────────────
const FloatingCard = ({
  feature,
  index,
  isActive,
  align,
  onClick,
}: {
  feature: Feature;
  index: number;
  isActive: boolean;
  align: 'left' | 'right';
  onClick: () => void;
}) => {
  const Icon = feature.icon;
  const rotZ = CARD_ROTATIONS[index];

  // Each card floats at a slightly different speed and phase so they move independently
  const floatDuration = 2.4 + (index % 5) * 0.4;
  const floatDelay = -(index * 0.55);

  return (
    <div style={{ perspective: '700px' }}>
      {/* Outer layer: continuous float — runs independently of active state */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          y: { duration: floatDuration, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
        }}
      >
      {/* Inner layer: active/inactive state */}
      <motion.div
        onClick={onClick}
        animate={{
          scale: isActive ? 1.07 : 0.93,
          opacity: isActive ? 1 : 0.32,
          x: isActive ? (align === 'left' ? 16 : -16) : 0,
          rotateZ: rotZ,
          rotateY: align === 'left' ? (isActive ? -2 : -10) : (isActive ? 2 : 10),
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-[168px] rounded-[18px] p-4 cursor-pointer select-none bg-background"
        style={{
          boxShadow: isActive
            ? '0 8px 24px rgba(10,158,138,0.28), 0 2px 6px rgba(10,158,138,0.15)'
            : '0 4px 12px rgba(10,158,138,0.12), 0 1px 4px rgba(10,158,138,0.07)',
        }}
      >
        {/* Icon */}
        <Icon className="w-5 h-5 text-primary mb-2.5" />

        {/* Title */}
        <p className={`font-heading font-semibold text-[13px] leading-snug transition-colors duration-200 ${
          isActive ? 'text-text-primary' : 'text-text-body'
        }`}>
          {feature.title}
        </p>

        {/* Description — spring-reveals only when active */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 6 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-body text-[11.5px] leading-relaxed text-text-muted overflow-hidden"
            >
              {feature.description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
      </motion.div>
    </div>
  );
};

// ─── Main section ─────────────────────────────────────────────────────────────
export const PatientJourney = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const manualRef = useRef(false);

  // Map scroll progress within the tall section → active feature index
  useEffect(() => {
    const handleScroll = () => {
      if (manualRef.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = sectionRef.current.offsetHeight - (window.innerHeight - 72);
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / scrollable);
      const idx = Math.min(
        patientFeatures.length - 1,
        Math.floor(progress * patientFeatures.length),
      );
      setActiveFeature(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (idx: number) => {
    manualRef.current = true;
    setActiveFeature(idx);
    setTimeout(() => { manualRef.current = false; }, 700);
  };

  const leftFeatures  = patientFeatures.slice(0, 5);
  const rightFeatures = patientFeatures.slice(5);

  return (
    <>
      {/* Shared scroll target — scrollMarginTop offsets the fixed navbar */}
      <div id="how-it-works" style={{ scrollMarginTop: '72px' }} />

      {/* ── Desktop: scroll-jacked sticky view ─────────────────────────────── */}
      <section
        ref={sectionRef}
        id="patient-section"
        className="relative hidden lg:block"
        style={{ height: `${patientFeatures.length * 420 + 200}px` }}
      >
        <div
          className="bg-background flex flex-col"
          style={{ position: 'sticky', top: 72, height: 'calc(100vh - 72px)' }}
        >
          {/* Header */}
          <div className="text-center pt-3 pb-3 shrink-0">
            <span className="inline-flex items-center text-primary rounded-full font-medium font-body">
              How it works
            </span>
            <h2 className="font-heading font-bold text-[32px] sm:text-[38px] text-text-primary leading-tight">
              Everything you need, in one place
            </h2>
          </div>

          {/* Cards + Phone — absolutely scattered within max-w container */}
          <div className="relative flex-1 w-full max-w-[1140px] mx-auto px-8 pb-6">

            {/* Phone — centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <PhoneFrame screenKey={activeFeature}>
                {patientFeatures[activeFeature].screen}
              </PhoneFrame>
            </div>

            {/* Left cards — outer edge ↔ inner edge alternation, irregular vertical gaps */}
            {([
              { top: '4%',  left: 0   },
              { top: '21%', left: 150 },
              { top: '43%', left: 10  },
              { top: '60%', left: 145 },
              { top: '80%', left: 5   },
            ] as const).map((pos, i) => (
              <div key={i} style={{ position: 'absolute', top: pos.top, left: pos.left, zIndex: activeFeature === i ? 20 : 1 }}>
                <FloatingCard
                  feature={leftFeatures[i]}
                  index={i}
                  isActive={activeFeature === i}
                  align="left"
                  onClick={() => handleCardClick(i)}
                />
              </div>
            ))}

            {/* Right cards — same outer ↔ inner pattern, offset phase */}
            {([
              { top: '7%',  right: 5   },
              { top: '26%', right: 140 },
              { top: '50%', right: 0   },
              { top: '71%', right: 135 },
            ] as const).map((pos, i) => {
              const globalIdx = i + 5;
              return (
                <div key={globalIdx} style={{ position: 'absolute', top: pos.top, right: pos.right, zIndex: activeFeature === globalIdx ? 20 : 1 }}>
                  <FloatingCard
                    feature={rightFeatures[i]}
                    index={globalIdx}
                    isActive={activeFeature === globalIdx}
                    align="right"
                    onClick={() => handleCardClick(globalIdx)}
                  />
                </div>
              );
            })}
          </div>

          {/* Progress dots — centered under the phone */}
          <div className="flex items-center justify-center gap-2.5 pb-6 shrink-0 relative z-30">
            {patientFeatures.map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeFeature
                    ? 'w-5 h-[5px] bg-primary'
                    : 'w-[5px] h-[5px] bg-border hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile / tablet: normal scrolling grid ─────────────────────────── */}
      <section id="patient-section-mobile" className="lg:hidden py-10 sm:py-14 bg-background">
        <div className="container max-w-[1140px] mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-8">
            <span className="inline-flex items-center bg-primary/[0.08] text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-primary/20">
              For Patients
            </span>
            <h2 className="mt-3 font-heading font-bold text-[28px] sm:text-[34px] text-text-primary leading-tight">
              Everything you need, in one place
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {patientFeatures.map((f, i) => (
              <MobileFeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
