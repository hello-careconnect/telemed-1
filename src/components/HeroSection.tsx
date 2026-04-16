import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { StatsBar } from './StatsBar';
import { Play, Lock, Building2, Clock, Smartphone, Sparkles, MapPin, Video, HeartPulse, CalendarCheck, Stethoscope, Star, ArrowRight } from 'lucide-react';
import { useLang, tx } from '@/context/LanguageContext';
import { translations } from '@/i18n/translations';
import doctorRafiq from '@/assets/doctor-rafiq.webp';
import doctorAvatar1 from '@/assets/doctor-avatar-1.jpg';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorClipboard from '@/assets/doctor-clipboard.jpg';
import doctorYoungGlasses from '@/assets/doctor-young-glasses.jpg';
import instantBookingImg from '@/assets/instant-booking.jpg';
import videoConsultImg from '@/assets/video-consult.jpg';
import bmdcVerifiedImg from '@/assets/bmdc-verified.jpg';
import nearbyHospitalsImg from '@/assets/nearby-hospitals.jpg';
import healthRecordsImg from '@/assets/health-records.jpg';
import aiMatchingImg from '@/assets/ai-matching.jpg';
import transparentReviewsImg from '@/assets/transparent-reviews.jpg';

const { hero, heroFeatures: hf, heroMobileGrid: hmg } = translations;

// Feature icons mapped in order matching translations
const featureIcons = [Stethoscope, Star, Video, CalendarCheck, Sparkles, MapPin, HeartPulse];
const featureImages = [bmdcVerifiedImg, transparentReviewsImg, videoConsultImg, instantBookingImg, aiMatchingImg, nearbyHospitalsImg, healthRecordsImg];
const featureKeys = ['bmdc', 'reviews', 'video', 'booking', 'ai', 'nearby', 'health'] as const;

// Preload carousel images
if (typeof window !== 'undefined') {
  featureImages.forEach(src => { const img = new Image(); img.src = src; });
}

export const HeroSection = () => {
  const { lang } = useLang();
  const wordIndexRef = useRef(0);
  const [wordIndex, setWordIndex] = useState(0);

  const heroWords = hero.words[lang];
  const rotatingLines = useMemo(() => [...hero.rotatingLines[lang]], [lang]);

  useEffect(() => {
    wordIndexRef.current = 0;
    setWordIndex(0);
  }, [lang]);

  useEffect(() => {
    const interval = setInterval(() => {
      wordIndexRef.current = (wordIndexRef.current + 1) % heroWords.length;
      setWordIndex(wordIndexRef.current);
    }, 2800);
    return () => clearInterval(interval);
  }, [heroWords]);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    const el = document.getElementById('how-it-works');
    if (!el) return;
    const navbarOffset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const mobileGrid = [
    { icon: Building2,  label: tx(hmg.certified.label, lang),    desc: tx(hmg.certified.desc, lang) },
    { icon: Clock,      label: tx(hmg.availability.label, lang),  desc: tx(hmg.availability.desc, lang) },
    { icon: Lock,       label: tx(hmg.secure.label, lang),        desc: tx(hmg.secure.desc, lang) },
    { icon: Smartphone, label: tx(hmg.easy.label, lang),          desc: tx(hmg.easy.desc, lang) },
  ];

  const banglaFont = lang === 'bn'
    ? { '--font-heading': 'var(--font-bangla)', '--font-body': 'var(--font-bangla)' } as React.CSSProperties
    : undefined;

  return (
    <section style={banglaFont} className="pt-[88px] lg:h-screen flex flex-col relative overflow-hidden bg-soft-img">
      {/* Hero */}
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-12 sm:py-16 lg:py-10">
        {/* Left 55% */}
        <div className="lg:w-[55%] w-full text-center lg:text-left">
          {/* Badge */}
          <span className="inline-flex items-center bg-primary/10 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-primary/20">
            {tx(hero.badge, lang)}
          </span>

          {/* Headline */}
          <h1 className={`font-heading font-bold text-text-primary mt-1 ${
            lang === 'bn'
              ? 'text-[28px] sm:text-[40px] lg:text-[52px] leading-[1.25] lg:-ml-[4px]'
              : 'text-[34px] sm:text-[50px] lg:text-[64px] leading-[1]    lg:-ml-[6px]'
          }`}>
            <span className={`block ${lang === 'en' ? 'whitespace-nowrap' : ''}`}>
              {tx(hero.findThe, lang)}{' '}
              <span className="relative inline-flex whitespace-nowrap">
                {/* Invisible sizer — drives the container width */}
                <span className="invisible">{heroWords[wordIndex]}</span>
                <AnimatePresence>
                  <motion.span
                    key={`${lang}-${wordIndex}`}
                    className="absolute left-0 top-0 z-10 text-primary whitespace-nowrap"
                    initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
                    animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 26 },
                      opacity: { duration: 0.3 },
                      filter: { duration: 0.3 },
                    }}
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="block">
              {tx(hero.youCanTrust, lang)}
            </span>
          </h1>

          {/* Description */}
          <p className={`font-body text-text-body leading-[1.8] mx-auto lg:mx-0 ${
            lang === 'bn'
              ? 'mt-5 text-[14px] sm:text-[15px] max-w-[480px]'
              : 'mt-4 text-[15px] sm:text-[17px] max-w-[460px]'
          }`}>
            {tx(hero.desc, lang)}
          </p>

          {/* Rotating subtitle — typewriter */}
          <div className={`flex items-center justify-center lg:justify-start ${
            lang === 'bn' ? 'h-9 sm:h-11 mt-3' : 'h-8 sm:h-10 mt-2'
          }`}>
            <TypewriterLine lines={rotatingLines} />
          </div>

          {/* CTAs */}
          <div className={`flex flex-row flex-wrap justify-center lg:justify-start items-center gap-2.5 ${
            lang === 'bn' ? 'mt-6' : 'mt-5'
          }`}>
            <button
              onClick={scrollToForm}
              className="group bg-primary text-primary-foreground rounded-full px-7 py-3 text-[15px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {tx(hero.joinWaitlist, lang)}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToHow}
              className="rounded-full px-7 py-3 text-[15px] font-semibold font-body text-text-body bg-surface border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              {tx(hero.seeHowItWorks, lang)}
            </button>
          </div>
        </div>

        {/* Right 45% — Carousel + Social proof (desktop only) */}
        <div className="hidden lg:flex lg:w-[45%] flex-col items-center gap-6">
          <FeatureCardCarousel />

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[doctorAvatar1, doctorRafiq, doctorNasreen, doctorClipboard, doctorYoungGlasses].map((img, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-[2px] border-background overflow-hidden shadow-sm">
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <p className="font-body text-[13px] text-text-muted">
                {tx(hero.doctorsJoining, lang)}{' '}
                <span className="font-semibold text-text-body">{tx(hero.everyDay, lang)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <StatsBar />

      {/* Tablet/mobile: carousel + benefits below hero */}
      <div className="border-t border-border bg-background py-8 lg:hidden">
        <div className="container max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center">
              <FeatureCardCarousel />
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-5">
              {mobileGrid.map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-surface rounded-2xl p-4 border border-border">
                  <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="font-heading font-semibold text-[14px] text-text-primary">{item.label}</p>
                    <p className="font-body text-[12px] text-text-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const FeatureCardCarousel = () => {
  const { lang } = useLang();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 22 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 4000;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, DURATION);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    startTimer();
    return () => {
      emblaApi.off('select', onSelect);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [emblaApi, startTimer]);

  const handleDot = (i: number) => {
    emblaApi?.scrollTo(i);
    startTimer();
  };

  const handlePause = () => {
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleResume = () => {
    setIsPaused(false);
    startTimer();
  };

  return (
    <div
      className="w-[280px] md:w-[400px] lg:w-[420px]"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-[24px] border border-border shadow-lg cursor-grab active:cursor-grabbing"
      >
        <div className="flex touch-pan-y">
          {featureKeys.map((key, i) => {
            const FIcon = featureIcons[i];
            const isActive = i === activeIndex;
            const featureTitle = tx(hf[key].title, lang);
            const featureDesc  = tx(hf[key].desc, lang);
            return (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <div className="aspect-[4/3] lg:aspect-[3/2.2] relative flex items-center justify-center overflow-hidden bg-[#1d2d44]">
                  {/* Progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-20">
                    {isActive && (
                      <div
                        key={`pb-${activeIndex}`}
                        className="h-full bg-white/70 animate-carousel-progress"
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                      />
                    )}
                  </div>

                  {featureImages[i] ? (
                    <img
                      src={featureImages[i]}
                      alt={featureTitle}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <>
                      <motion.div
                        className="absolute w-40 h-40 rounded-full border-2 border-primary/10"
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <motion.div
                        className="absolute w-28 h-28 rounded-full border-2 border-primary/15"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      />
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center z-10 shadow-sm">
                        <FIcon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                      </div>
                    </>
                  )}

                  {/* Gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <p className="font-heading font-semibold text-[18px] text-white">{featureTitle}</p>
                    <p className="font-body text-[13px] text-white/70 mt-1 leading-relaxed">{featureDesc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Icon nav chips */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {featureIcons.map((ChipIcon, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              i === activeIndex
                ? 'bg-primary text-primary-foreground scale-110 shadow-md'
                : 'bg-border/70 text-text-muted hover:bg-border hover:text-text-body'
            }`}
          >
            <ChipIcon className="w-4 h-4" strokeWidth={2} />
          </button>
        ))}
      </div>
    </div>
  );
};

const TypewriterLine = ({ lines }: { lines: string[] }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // All mutable state lives in one ref — no effect recreations
  const s = useRef({
    lines,
    lineIdx: 0,
    charIdx: 0,
    isDeleting: false,
    isPaused: false,
  });

  // Sync lines ref + hard-reset on language switch
  useEffect(() => {
    s.current.lines    = lines;
    s.current.lineIdx  = 0;
    s.current.charIdx  = 0;
    s.current.isDeleting = false;
    s.current.isPaused   = false;
    setText('');
  }, [lines]);

  // Cursor blink — runs once
  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Single self-scheduling timeout — runs once, reads from ref
  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;

    const tick = () => {
      const { lines: ls, isPaused, isDeleting } = s.current;

      if (!isPaused) {
        const line = ls[s.current.lineIdx % ls.length];

        if (!isDeleting) {
          s.current.charIdx += 1;
          setText(line.slice(0, s.current.charIdx));

          if (s.current.charIdx >= line.length) {
            s.current.isPaused = true;
            setTimeout(() => {
              s.current.isPaused    = false;
              s.current.isDeleting  = true;
            }, 1800);
          }
        } else {
          s.current.charIdx -= 1;
          setText(line.slice(0, s.current.charIdx));

          if (s.current.charIdx <= 0) {
            s.current.charIdx    = 0;
            s.current.isDeleting = false;
            s.current.lineIdx    = (s.current.lineIdx + 1) % ls.length;
          }
        }
      }

      tid = setTimeout(tick, s.current.isDeleting ? 35 : 68);
    };

    tid = setTimeout(tick, 68);
    return () => clearTimeout(tid);
  }, []); // intentionally empty — all state is in the ref

  return (
    <p className="font-body font-medium text-[17px] sm:text-[20px] text-primary/70">
      {text}
      <span className={`inline-block w-[2px] h-[1.1em] bg-primary/60 ml-0.5 align-middle transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </p>
  );
};
