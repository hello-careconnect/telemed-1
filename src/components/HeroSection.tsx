import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Lock, Star, Building2, Clock, Smartphone, Sparkles, MapPin, Video, HeartPulse, CalendarCheck, Stethoscope, ArrowRight, Users, BadgeCheck, Timer } from 'lucide-react';
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

const heroFeatures = [
  { icon: Stethoscope,   title: 'BMDC Verified Doctors',    desc: 'Every doctor credential-checked & verified', image: bmdcVerifiedImg },
  { icon: Star,          title: 'Transparent Reviews',       desc: 'Real ratings from real patients', image: transparentReviewsImg },
  { icon: Video,         title: 'Video Consult 24/7',        desc: 'See a doctor anytime, from anywhere', image: videoConsultImg },
  { icon: CalendarCheck, title: 'Instant Booking',           desc: 'Book appointments in under 2 minutes', image: instantBookingImg },
  { icon: Sparkles,      title: 'AI-Powered Matching',       desc: 'Find the right specialist for your needs', image: aiMatchingImg },
  { icon: MapPin,        title: 'Nearby Hospitals',          desc: 'Locate trusted clinics & hospitals near you', image: nearbyHospitalsImg },
  { icon: HeartPulse,    title: 'Health Records',            desc: 'Your medical history, always accessible', image: healthRecordsImg },
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
          hsl(160, 30%, 97%)
        `,
      }}
    >
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-10 sm:py-16 lg:py-24">
        {/* Left 55% */}
        <motion.div
          className="lg:w-[55%] w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="relative inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" />
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Early Access · Launching in Dhaka &amp; Chattogram
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp} className="mt-5 font-heading font-bold text-text-primary text-[36px] sm:text-[56px] lg:text-[72px] leading-[1.05]">
            <span className="block">
              Find the{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">doctor</span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[6px] sm:h-[8px] bg-primary/15 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </span>
            </span>
            <span className="block">
              you can{' '}
              <span className="relative inline-block">
                trust
                <span className="text-primary">.</span>
              </span>
            </span>
          </motion.h1>

          {/* Rotating subtitle */}
          <motion.div variants={fadeUp} className="h-8 sm:h-10 mt-3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="font-body font-medium text-[17px] sm:text-[20px] text-primary/70"
              >
                {rotatingLines[currentIndex % rotatingLines.length]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-3 font-body text-[16px] sm:text-[17px] text-text-body leading-[1.7] max-w-[460px]"
          >
            Bangladesh's first platform that puts patients in control —
            verified credentials, honest reviews, and booking in minutes.
          </motion.p>

          {/* CTAs */}
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
              className="rounded-full px-8 py-4 text-[16px] font-semibold font-body text-text-primary border-[1.5px] border-border hover:border-primary hover:text-primary hover:bg-primary/[0.03] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              See how it works
            </button>
          </motion.div>

        </motion.div>

        {/* Right 45% — Carousel + Social proof (desktop only) */}
        <motion.div
          className="hidden lg:flex lg:w-[45%] flex-col items-center gap-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeatureCardCarousel />

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[doctorAvatar1, doctorRafiq, doctorNasreen, doctorClipboard, doctorYoungGlasses].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                  className="w-8 h-8 rounded-full border-[2px] border-background overflow-hidden shadow-sm"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <p className="font-body text-[13px] text-text-muted">
                Doctors joining <span className="font-semibold text-text-body">every day</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust benefits strip — full width below hero on desktop */}
      <div className="hidden lg:block border-t border-border bg-background/60 backdrop-blur-sm">
        <div className="container max-w-[1140px] mx-auto px-6 py-5">
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: Building2, label: 'Certified Doctors', desc: 'BMDC verified credentials' },
              { icon: Clock, label: '24/7 Availability', desc: 'Video consults anytime' },
              { icon: Lock, label: 'Secure & Private', desc: 'Your data, your control' },
              { icon: Smartphone, label: 'Easy & Accessible', desc: 'Book in under 2 mins' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-heading font-semibold text-[14px] text-text-primary">{item.label}</p>
                  <p className="font-body text-[12px] text-text-muted mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Tablet/mobile: carousel + benefits below hero */}
      <div className="border-t border-border bg-background py-8 lg:hidden">
        <div className="container max-w-[1140px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 flex justify-center">
              <FeatureCardCarousel />
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-5">
              {[
                { icon: Building2, label: 'Certified Doctors', desc: 'BMDC verified credentials' },
                { icon: Clock, label: '24/7 Availability', desc: 'Video consults anytime' },
                { icon: Lock, label: 'Secure & Private', desc: 'Your data, your control' },
                { icon: Smartphone, label: 'Easy & Accessible', desc: 'Book in under 2 mins' },
              ].map((item) => (
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

// Preload all carousel images on mount
const carouselImages = heroFeatures.filter(f => f.image).map(f => f.image!);
if (typeof window !== 'undefined') {
  carouselImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

const FeatureCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 4000;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % heroFeatures.length);
    }, DURATION);
  }, []);

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

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40, scale: 0.97 }),
  };

  return (
    <div
      className="w-[280px] md:w-[400px] lg:w-[420px]"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* Card */}
      <div className="relative w-full">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-[24px] border border-border shadow-lg overflow-hidden cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
          >
            {/* Image + overlay */}
            <div className="aspect-[4/3] lg:aspect-[3/2.2] relative flex items-center justify-center overflow-hidden bg-[#1d2d44]">

              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-20">
                <div
                  key={activeIndex}
                  className="h-full bg-white/70 animate-carousel-progress"
                  style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                />
              </div>

              {current.image ? (
                <img
                  src={current.image}
                  alt={current.title}
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
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full bg-primary/20"
                      animate={{ y: [0, -20, 0], x: [0, i % 2 === 0 ? 10 : -10, 0], opacity: [0, 0.6, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
                      style={{ top: `${30 + i * 15}%`, left: `${20 + i * 18}%` }}
                    />
                  ))}
                  <motion.div
                    key={`icon-${activeIndex}`}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-20 h-20 rounded-2xl bg-primary/10 backdrop-blur-sm flex items-center justify-center z-10 shadow-sm"
                  >
                    <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </motion.div>
                </>
              )}

              {/* Gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <motion.p
                  key={`title-${activeIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="font-heading font-semibold text-[18px] text-white"
                >
                  {current.title}
                </motion.p>
                <motion.p
                  key={`desc-${activeIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="font-body text-[13px] text-white/70 mt-1 leading-relaxed"
                >
                  {current.desc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Icon nav chips */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {heroFeatures.map(({ icon: ChipIcon }, i) => (
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
