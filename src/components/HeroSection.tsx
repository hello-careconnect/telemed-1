import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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
    <section className=" pt-[72px] relative overflow-hidden bg-background">
      {/*/!* Radial glows — driven by CSS vars so they update with theme *!/*/}
      {/*<div className="absolute inset-0 pointer-events-none">*/}
      {/*  <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full"*/}
      {/*    style={{ background: 'radial-gradient(ellipse at 80% 20%, var(--hero-glow-1) 0%, transparent 65%)' }} />*/}
      {/*  <div className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full"*/}
      {/*    style={{ background: 'radial-gradient(ellipse at 10% 90%, var(--hero-glow-2) 0%, transparent 60%)' }} />*/}
      {/*</div>*/}
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 py-10 sm:py-16 lg:py-24">
        {/* Left 55% */}
        <div className="lg:w-[55%] w-full">
          {/* Badge */}
          <div>
            <span className="relative inline-flex items-center gap-2 bg-primary/[0.08] border border-primary/20 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2.5s_ease-in-out_infinite]" />
              <span className="relative flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Early Access · Launching in Dhaka &amp; Chattogram
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-heading font-bold text-text-primary text-[36px] sm:text-[56px] lg:text-[72px] leading-[1]">
            <span className="block">
              Find the{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">doctor</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[6px] sm:h-[8px] bg-primary/15 rounded-full" />
              </span>
            </span>
            <span className="block">
              you can{' '}
              <span className="relative inline-block">
                trust
                <span className="text-primary">.</span>
              </span>
            </span>
          </h1>
          {/* Description */}
          <p className="mt-5 font-body text-[16px] sm:text-[17px] text-text-body leading-[1.7] max-w-[460px]">
            Bangladesh's first platform that puts patients in control —
            verified credentials, honest reviews, and booking in minutes.
          </p>
          {/* Rotating subtitle */}
          <div className="h-8 sm:h-10 mt-2 overflow-hidden">
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
          </div>


          {/* CTAs */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={scrollToForm}
              className="group bg-primary text-primary-foreground rounded-full px-7 py-3 text-[15px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={scrollToHow}
              className="rounded-full px-7 py-3 text-[15px] font-semibold font-body text-text-body bg-surface border border-border hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              See how it works
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
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-[2px] border-background overflow-hidden shadow-sm"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              <p className="font-body text-[13px] text-text-muted">
                Doctors joining <span className="font-semibold text-text-body">every day</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*/!* Trust benefits strip — full width below hero on desktop *!/*/}
      {/*<div className="hidden lg:block border-t border-border bg-background/60 backdrop-blur-sm">*/}
      {/*  <div className="container max-w-[1140px] mx-auto px-6 py-5">*/}
      {/*    <div className="grid grid-cols-4 gap-6">*/}
      {/*      {[*/}
      {/*        { icon: Building2, label: 'Certified Doctors', desc: 'BMDC verified credentials' },*/}
      {/*        { icon: Clock, label: '24/7 Availability', desc: 'Video consults anytime' },*/}
      {/*        { icon: Lock, label: 'Secure & Private', desc: 'Your data, your control' },*/}
      {/*        { icon: Smartphone, label: 'Easy & Accessible', desc: 'Book in under 2 mins' },*/}
      {/*      ].map((item) => (*/}
      {/*        <div key={item.label} className="flex items-center gap-3">*/}
      {/*          <item.icon className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />*/}
      {/*          <div>*/}
      {/*            <p className="font-heading font-semibold text-[14px] text-text-primary">{item.label}</p>*/}
      {/*            <p className="font-body text-[12px] text-text-muted mt-0.5">{item.desc}</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}



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


// Preload all carousel images on mount
const carouselImages = heroFeatures.filter(f => f.image).map(f => f.image!);
if (typeof window !== 'undefined') {
  carouselImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

const FeatureCardCarousel = () => {
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
      {/* Embla viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden rounded-[24px] border border-border shadow-lg cursor-grab active:cursor-grabbing"
      >
        <div className="flex touch-pan-y">
          {heroFeatures.map((feature, i) => {
            const FIcon = feature.icon;
            const isActive = i === activeIndex;
            return (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <div className="aspect-[4/3] lg:aspect-[3/2.2] relative flex items-center justify-center overflow-hidden bg-[#1d2d44]">

                  {/* Progress bar — only rendered on active slide so key resets correctly */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/20 z-20">
                    {isActive && (
                      <div
                        key={`pb-${activeIndex}`}
                        className="h-full bg-white/70 animate-carousel-progress"
                        style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                      />
                    )}
                  </div>

                  {feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.title}
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
                    <p className="font-heading font-semibold text-[18px] text-white">{feature.title}</p>
                    <p className="font-body text-[13px] text-white/70 mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
