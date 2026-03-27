import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Play, ShieldCheck, Lock, Star, Building2, Clock, Smartphone, Sparkles, MapPin, Video, HeartPulse, CalendarCheck, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import doctorRafiq from '@/assets/doctor-rafiq.webp';
import doctorAvatar1 from '@/assets/doctor-avatar-1.jpg';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorClipboard from '@/assets/doctor-clipboard.jpg';
import doctorYoungGlasses from '@/assets/doctor-young-glasses.jpg';

const heroFeatures = [
  { icon: Stethoscope,   title: 'BMDC Verified Doctors',    desc: 'Every doctor credential-checked & verified' },
  { icon: Star,          title: 'Transparent Reviews',       desc: 'Real ratings from real patients' },
  { icon: Video,         title: 'Video Consult 24/7',        desc: 'See a doctor anytime, from anywhere' },
  { icon: CalendarCheck, title: 'Instant Booking',           desc: 'Book appointments in under 2 minutes' },
  { icon: Sparkles,      title: 'AI-Powered Matching',       desc: 'Find the right specialist for your needs' },
  { icon: MapPin,        title: 'Nearby Hospitals',          desc: 'Locate trusted clinics & hospitals near you' },
  { icon: HeartPulse,    title: 'Health Records',            desc: 'Your medical history, always accessible' },
];

const rotatingLines = [
  'Book in under 2 minutes.',
  'Real reviews from real patients.',
  'Video consults, 24/7.',
  'No more guessing.',
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export const HeroSection = () => {
  const indexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current += 1;
      setCurrentIndex(indexRef.current);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHow = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen pt-[72px] relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 80% 20%, rgba(10,158,138,0.07) 0%, transparent 65%),
          radial-gradient(ellipse at 10% 90%, rgba(62,207,180,0.05) 0%, transparent 50%),
          #fff
        `,
      }}
    >
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 py-10 sm:py-16 lg:py-24">
        {/* Left 55% */}
        <motion.div
          className="lg:w-[55%] w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Early Access · Launching in Dhaka &amp; Chattogram
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-3">
            <span className="block font-heading font-bold text-text-primary text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.08]">
              Find the doctor
            </span>
            <span className="block font-heading font-bold text-text-primary text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.08]">
              you can{' '}
              <span className="font-display italic font-extrabold text-primary">trust.</span>
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-10 mt-2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="font-heading font-medium text-[20px] sm:text-[22px] text-text-muted"
              >
                {rotatingLines[currentIndex % rotatingLines.length]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-3 font-body text-[17px] text-text-body leading-[1.65] max-w-[460px]"
          >
            Verified doctors. Transparent reviews. Instant booking.
            <br />
            Bangladesh's first platform that gives you control.
          </motion.p>


          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToForm}
              className="group bg-primary text-primary-foreground rounded-full px-8 py-4 text-[16px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToHow}
              className="rounded-full px-8 py-4 text-[16px] font-semibold font-body text-text-primary border-[1.5px] border-border hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              See how it works
            </button>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[doctorAvatar1, doctorRafiq, doctorNasreen, doctorClipboard, doctorYoungGlasses].map((img, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="font-body text-[14px] text-text-body">
              <span className="font-bold text-text-primary">500+</span> doctors being verified
            </p>
          </motion.div>
        </motion.div>

        {/* Right 45% — Feature Card Carousel */}
        <motion.div
          className="lg:w-[45%] w-full relative hidden md:flex justify-start items-center lg:pl-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <FeatureCardCarousel />
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden w-full mt-4">
          <FeatureCardCarousel />
        </div>
      </div>

      <div className="border-t border-border bg-surface py-5">
        <div className="container max-w-[1440px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { icon: Building2, label: 'Certified Doctors', desc: 'BMDC verified credentials' },
              { icon: Clock, label: '24/7 Availability', desc: 'Video consults anytime' },
              { icon: Lock, label: 'Secure & Private', desc: 'Your data, your control' },
              { icon: Smartphone, label: 'Easy & Accessible', desc: 'Book in under 2 mins' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-center sm:text-left">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="font-heading font-semibold text-[14px] text-text-primary">{item.label}</p>
                  <p className="font-body text-[12px] text-text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const featureGroups = [
  [
    { icon: Star,          label: 'Highly Rated Doctors' },
    { icon: Sparkles,      label: 'Find Doctors with AI' },
    { icon: MapPin,        label: 'Nearby Hospitals' },
  ],
  [
    { icon: Video,         label: 'Video Consult 24/7' },
    { icon: HeartPulse,    label: 'Specialist Matching' },
    { icon: CalendarCheck, label: 'Instant Booking' },
  ],
];

const FeatureChips = () => {
  const [group, setGroup] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setGroup((g) => (g + 1) % featureGroups.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-[40px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={group}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center gap-2"
        >
          {featureGroups[group].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 bg-accent border border-border rounded-full px-3 py-1.5 text-[13px] font-body font-medium text-text-body hover:border-primary hover:text-primary transition-colors duration-200 whitespace-nowrap"
            >
              <Icon className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.8} />
              {label}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const FeatureCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startTimeRef = useRef(Date.now());
  const DURATION = 4000;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimeRef.current = Date.now();
    setProgress(0);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % heroFeatures.length);
      startTimeRef.current = Date.now();
    }, DURATION);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const animate = () => {
      if (!isPaused) {
        const elapsed = Date.now() - startTimeRef.current;
        setProgress(Math.min((elapsed / DURATION) * 100, 100));
      }
      progressRef.current = requestAnimationFrame(animate);
    };
    progressRef.current = requestAnimationFrame(animate);
    return () => { if (progressRef.current) cancelAnimationFrame(progressRef.current); };
  }, [isPaused, activeIndex]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + heroFeatures.length) % heroFeatures.length);
    startTimer();
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % heroFeatures.length);
    startTimer();
  };

  const handleDot = (i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
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

  const current = heroFeatures[activeIndex];
  const Icon = current.icon;
  const nextIndex = (activeIndex + 1) % heroFeatures.length;
  const NextIcon = heroFeatures[nextIndex].icon;

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.95, rotateY: d > 0 ? 8 : -8 }),
    center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.95, rotateY: d > 0 ? -8 : 8 }),
  };

  return (
    <div
      className="w-[280px] md:w-[320px] lg:w-[360px]"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* Card */}
      <div className="relative" style={{ perspective: '800px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface rounded-[24px] border border-border shadow-lg overflow-hidden cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
          >
            {/* Icon area with animated background */}
            <div className="aspect-[4/3] relative flex items-center justify-center overflow-hidden bg-accent/30">
              {/* Animated rings */}
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
              {/* Floating particles */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/20"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
                  style={{ top: `${30 + i * 15}%`, left: `${20 + i * 18}%` }}
                />
              ))}
              {/* Icon with entrance animation */}
              <motion.div
                key={`icon-${activeIndex}`}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center z-10 shadow-sm"
              >
                <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </motion.div>
              {/* Step badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                <span className="font-body font-semibold text-[13px] text-text-primary">{activeIndex + 1}/{heroFeatures.length}</span>
              </div>
              {/* Pause indicator */}
              {isPaused && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm"
                >
                  <span className="font-body text-[11px] text-text-muted">Paused</span>
                </motion.div>
              )}
            </div>

            {/* Info with staggered text */}
            <div className="p-5">
              <motion.p
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="font-heading font-semibold text-[18px] text-text-primary"
              >
                {current.title}
              </motion.p>
              <motion.p
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="font-body text-[14px] text-text-muted mt-2 leading-relaxed"
              >
                {current.desc}
              </motion.p>

              {/* Up next preview */}
              <motion.div
                key={`next-${activeIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4 pt-3 border-t border-border flex items-center gap-2"
              >
                <span className="font-body text-[11px] text-text-muted uppercase tracking-wider">Up next</span>
                <NextIcon className="w-3.5 h-3.5 text-primary/60" strokeWidth={1.8} />
                <span className="font-body text-[12px] text-text-body">{heroFeatures[nextIndex].title}</span>
              </motion.div>
            </div>

            {/* Progress bar */}
            <div className="h-[3px] bg-border/50">
              <motion.div
                className="h-full bg-primary/60 rounded-r-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4 px-1">
        <div className="flex gap-1.5">
          {heroFeatures.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-5 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/40'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-accent flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
