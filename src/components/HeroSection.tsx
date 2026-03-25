import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Lock, Star, CheckCircle, Building2, Clock, Smartphone, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import doctorRafiq from '@/assets/doctor-rafiq.webp';
import doctorAvatar1 from '@/assets/doctor-avatar-1.jpg';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorClipboard from '@/assets/doctor-clipboard.jpg';
import doctorYoungGlasses from '@/assets/doctor-young-glasses.jpg';
import doctorMature from '@/assets/doctor-mature.jpg';

const heroSlides = [
  { image: doctorRafiq,        alt: 'Dr. Rafiq Ahmed',       name: 'Dr. Rafiq Ahmed',       spec: 'Dermatologist',     rating: '4.7', reviews: 82  },
  { image: doctorNasreen,      alt: 'Dr. Nasreen Chowdhury', name: 'Dr. Nasreen Sultana',   spec: 'General Physician', rating: '4.8', reviews: 114 },
  { image: doctorYoungGlasses, alt: 'Dr. Tanvir Hossain',   name: 'Dr. Imran Chowdhury',   spec: 'Neurologist',       rating: '4.9', reviews: 103 },
  { image: doctorMature,       alt: 'Dr. Karim Uddin',       name: 'Dr. Karim Uddin',       spec: 'Orthopedic Surgeon',rating: '4.6', reviews: 78  },
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

// Preload all slide images so they're ready before the transition fires
const preloadedImages = heroSlides.map((slide) => {
  const img = new Image();
  img.src = slide.image;
  return img;
});

export const HeroSection = () => {
  const indexRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(() => new Set([0]));
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Eagerly preload every image and mark it ready in loadedSet
  useEffect(() => {
    heroSlides.forEach((slide, i) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => setLoadedSet((prev) => new Set(prev).add(i));
    });
  }, []);

  // Auto-advance only after the NEXT slide image is loaded
  const goToSlide = (next: number) => {
    if (loadedSet.has(next)) {
      setSlideIndex(next);
    } else {
      // Wait for the image to finish loading then transition
      const img = preloadedImages[next];
      const onLoad = () => {
        setLoadedSet((prev) => new Set(prev).add(next));
        setSlideIndex(next);
      };
      if (img.complete) onLoad();
      else img.addEventListener('load', onLoad, { once: true });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      indexRef.current += 1;
      setCurrentIndex(indexRef.current);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const next = (slideIndex + 1) % heroSlides.length;
      goToSlide(next);
    }, 4500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex, loadedSet]);

  const handleDotClick = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToSlide(i);
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToSlide((slideIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    goToSlide((slideIndex + 1) % heroSlides.length);
  };

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

          <motion.div variants={fadeUp} className="h-10 mt-4 overflow-hidden">
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
            className="mt-6 font-body text-[17px] text-text-body leading-[1.65] max-w-[460px]"
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

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4 sm:gap-6 flex-wrap text-[13px] font-body font-medium text-text-body">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-primary" />
              BMDC Verified
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-5 h-5 text-primary" />
              Data Private
            </span>
            <span className="text-border hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-5 h-5 text-primary" />
              Free 1st Consult
            </span>
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

        {/* Right 45% — Doctor Card Slider */}
        <motion.div
          className="lg:w-[45%] w-full relative hidden md:flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">

            {/* Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="bg-surface rounded-[24px] overflow-hidden border border-border shadow-lg"
              >
                {/* Photo */}
                <div className="aspect-[4/5] relative overflow-hidden bg-surface-2">
                  <img
                    src={heroSlides[slideIndex].image}
                    alt={heroSlides[slideIndex].alt}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Rating badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                    <span className="font-body font-semibold text-[13px] text-text-primary">{heroSlides[slideIndex].rating}</span>
                  </div>
                  {/* Available badge */}
                  <div className="absolute top-4 right-4 bg-primary rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm">
                    <CheckCircle className="w-3 h-3 text-primary-foreground" />
                    <span className="font-body font-semibold text-[11px] text-primary-foreground">Available Now</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-semibold text-[17px] text-text-primary">{heroSlides[slideIndex].name}</p>
                      <p className="font-body text-[14px] text-primary">{heroSlides[slideIndex].spec}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-accent flex items-center justify-center transition-all">
                        <Phone className="w-4 h-4 text-text-muted" />
                      </button>
                      <button className="w-9 h-9 rounded-full border border-border hover:border-primary hover:bg-accent flex items-center justify-center transition-all">
                        <MessageCircle className="w-4 h-4 text-text-muted" />
                      </button>
                    </div>
                  </div>
                  <p className="font-body text-[13px] text-text-muted mt-2">{heroSlides[slideIndex].reviews} verified reviews</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation row */}
            <div className="flex items-center justify-between mt-4 px-1">
              {/* Dots */}
              <div className="flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === slideIndex
                        ? 'w-5 h-2 bg-primary'
                        : 'w-2 h-2 bg-border'
                    }`}
                  />
                ))}
              </div>
              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSlideIndex((prev) => (prev + 1) % heroSlides.length)}
                  className="w-9 h-9 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="md:hidden w-full mt-4">
          <MobileHeroCards />
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

const MobileHeroCards = () => (
  <div className="space-y-3">
    {[
      { name: 'Dr. Aisha Rahman', spec: 'Cardiologist', rating: '4.9', badge: 'Available Now', badgeColor: 'bg-success/10 text-success', image: doctorAvatar1 },
      { name: 'Dr. Rafiq Ahmed', spec: 'Dermatologist', rating: '4.7', badge: 'Today 3 PM', badgeColor: 'bg-warning/10 text-warning', image: doctorRafiq },
    ].map((doc) => (
      <div key={doc.name} className="bg-surface rounded-2xl p-4 border border-border flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <p className="font-heading font-semibold text-[15px] text-text-primary">{doc.name}</p>
          <p className="font-body text-[13px] text-text-muted">{doc.spec} · ⭐ {doc.rating}</p>
        </div>
        <span className={`text-[11px] font-medium font-body px-2 py-1 rounded-full ${doc.badgeColor}`}>{doc.badge}</span>
      </div>
    ))}
  </div>
);

