import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { Video, MapPin, Brain, FolderHeart, Star, CalendarCheck, Navigation, FileText, Activity, type LucideIcon } from 'lucide-react';
import { PhoneFrame } from './mockup/PhoneFrame';
import { MobileJourneyCard } from './FeatureRow';
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
        animate={{ y: [0, -6, 0] }}
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
          x: isActive ? (align === 'left' ? 10 : -10) : 0,
          rotateZ: rotZ,
          rotateY: align === 'left' ? (isActive ? -2 : -10) : (isActive ? 2 : 10),
        }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-[160px] rounded-[18px] p-4 cursor-pointer select-none bg-background"
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const activeRef = useRef(0);        // non-reactive mirror for wheel handler
  const lockingRef = useRef(false);   // true while we own the scroll
  const cooldownRef = useRef(false);  // debounce between steps

  // Sync ref with state
  useEffect(() => { activeRef.current = activeFeature; }, [activeFeature]);

  // Wheel-driven stepping: one feature per scroll gesture
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      const dir = e.deltaY > 0 ? 1 : -1;

      // Activate only when the whole section is visible in the viewport
      const inView = rect.top >= 0 && rect.bottom <= viewH;

      // Release lock immediately if section left the viewport
      if (!inView) {
        lockingRef.current = false;
        return;
      }

      const cur = activeRef.current;

      // At first feature scrolling up, or last feature scrolling down → release scroll
      if ((cur === 0 && dir < 0) || (cur === patientFeatures.length - 1 && dir > 0)) {
        lockingRef.current = false;
        return;
      }

      // Always prevent default while we're in the feature list — even during cooldown
      e.preventDefault();
      lockingRef.current = true;

      // Only step once per cooldown window
      if (cooldownRef.current) return;
      cooldownRef.current = true;

      const next = Math.max(0, Math.min(patientFeatures.length - 1, cur + dir));
      activeRef.current = next;
      setActiveFeature(next);

      setTimeout(() => { cooldownRef.current = false; }, 500);
    };

    // Listen on window so we catch scroll even before the section is fully in view
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleCardClick = (idx: number) => {
    activeRef.current = idx;
    setActiveFeature(idx);
  };

  const leftFeatures  = patientFeatures.slice(0, 5);
  const rightFeatures = patientFeatures.slice(5);

  return (
    <>
      {/* Shared scroll target — scrollMarginTop offsets the fixed navbar */}
      <div id="how-it-works" style={{ scrollMarginTop: '72px' }} />

      {/* ── Desktop: wheel-stepped view ───────────────────────────────────── */}
      <section
        ref={sectionRef}
        id="patient-section"
        className="hidden lg:block"
      >
        <div className="bg-background flex flex-col items-center py-8">
          {/* Header */}
          <div ref={headerRef} className="text-center shrink-0 mb-4">
            <span className="inline-flex items-center text-primary rounded-full font-medium font-body">
              How it works
            </span>
            <h2 className="font-heading font-bold text-[32px] sm:text-[38px] text-text-primary leading-tight">
              Everything you need, in one place
            </h2>
          </div>

          {/* Cards + Phone */}
          <div className="relative w-full max-w-[1140px] mx-auto px-8" style={{ height: 640 }}>

            {/* Phone — centered */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <PhoneFrame screenKey={activeFeature}>
                {patientFeatures[activeFeature].screen}
              </PhoneFrame>
            </div>

            {/* Left cards — flex column, naturally packed, close to phone */}
            <div
              className="absolute flex flex-col gap-5"
              style={{ left: 200, top: '50%', transform: 'translateY(-50%)' }}
            >
              {leftFeatures.map((feature, i) => (
                <div key={i} style={{ marginLeft: i % 2 === 0 ? 0 : 36, zIndex: activeFeature === i ? 20 : 1 }}>
                  <FloatingCard
                    feature={feature}
                    index={i}
                    isActive={activeFeature === i}
                    align="left"
                    onClick={() => handleCardClick(i)}
                  />
                </div>
              ))}
            </div>

            {/* Right cards — flex column, naturally packed, close to phone */}
            <div
              className="absolute flex flex-col gap-5"
              style={{ right: 200, top: '50%', transform: 'translateY(-50%)' }}
            >
              {rightFeatures.map((feature, i) => {
                const globalIdx = i + 5;
                return (
                  <div key={globalIdx} style={{ marginRight: i % 2 === 0 ? 0 : 36, zIndex: activeFeature === globalIdx ? 20 : 1 }}>
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
          </div>

          {/* Progress dots — directly under the phone */}
          <div ref={dotsRef} className="flex items-center justify-center gap-2.5 py-3 shrink-0 relative z-30">
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

      {/* ── Mobile / tablet: phone + swipeable card strip ────────────────── */}
      <MobilePatientJourney />
    </>
  );
};

// ─── Mobile: phone mockup + swipeable card strip ─────────────────────────────
const CARD_W = 180;
const CARD_GAP = 12;

const MobilePatientJourney = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const pauseTimer = useRef<ReturnType<typeof setTimeout>>();
  const stripControls = useAnimationControls();
  const stripRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Auto-play: advance every 3.5s
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % patientFeatures.length);
    }, 3500);
    return () => clearInterval(id);
  }, [autoplay]);

  // Pause auto-play on interaction, resume after 8s
  const pauseAutoplay = useCallback(() => {
    setAutoplay(false);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setAutoplay(true), 8000);
  }, []);

  // Auto-scroll strip to keep active card centered
  useEffect(() => {
    const viewportW = stripRef.current?.parentElement?.clientWidth ?? 360;
    const targetX = -(active * (CARD_W + CARD_GAP)) + (viewportW / 2 - CARD_W / 2);
    const maxDrag = -(patientFeatures.length * (CARD_W + CARD_GAP) - viewportW);
    const clamped = Math.min(0, Math.max(targetX, maxDrag));
    if (!isDragging.current) {
      stripControls.start({ x: clamped }, { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] });
    }
  }, [active, stripControls]);

  const handleCardClick = (idx: number) => {
    setActive(idx);
    pauseAutoplay();
  };

  return (
    <section id="patient-section-mobile" className="lg:hidden py-10 bg-background" style={{ overflowX: 'clip' }}>
      {/* Header */}
      <div className="text-center mb-4 px-6">
        <span className="inline-flex items-center text-primary rounded-full font-medium font-body">
          How it works
        </span>
        <h2 className="font-heading font-bold text-[26px] sm:text-[32px] text-text-primary leading-tight">
          Everything you need, in one place
        </h2>
      </div>

      {/* Scaled phone mockup */}
      <div className="flex justify-center">
        <div
          className="origin-top scale-[0.72] sm:scale-[0.82]"
          style={{ marginBottom: `${-620 * 0.28}px` }}
        >
          <PhoneFrame screenKey={active}>
            {patientFeatures[active].screen}
          </PhoneFrame>
        </div>
      </div>

      {/* Swipeable card strip */}
      <div className="relative mt-2 px-4" ref={stripRef} style={{ overflowX: 'clip' }}>
        <motion.div
          drag="x"
          dragConstraints={{
            left: -(patientFeatures.length * (CARD_W + CARD_GAP) - (stripRef.current?.clientWidth ?? 340)),
            right: 0,
          }}
          dragElastic={0.15}
          onDragStart={() => { isDragging.current = true; pauseAutoplay(); }}
          onDragEnd={() => { isDragging.current = false; }}
          animate={stripControls}
          className="flex gap-3 py-2"
        >
          {patientFeatures.map((f, i) => (
            <MobileJourneyCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
              isActive={active === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </motion.div>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2.5 py-3">
        {patientFeatures.map((_, i) => (
          <button
            key={i}
            onClick={() => handleCardClick(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active
                ? 'w-5 h-[5px] bg-primary'
                : 'w-[5px] h-[5px] bg-border hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
