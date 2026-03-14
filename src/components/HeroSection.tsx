import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Lock, Star } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

const rotatingLines = [
  'Book in under 2 minutes.',
  'Real reviews from real patients.',
  'Video consults, 24/7.',
  'No more guessing.',
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

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
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 py-16 lg:py-24">
        {/* Left 58% */}
        <motion.div
          className="lg:w-[58%] w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Early Access · Launching in Dhaka &amp; Chattogram
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1 variants={fadeUp} className="mt-8">
            <span className="block font-heading font-bold text-text-primary text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.08]">
              Find the doctor
            </span>
            <span className="block font-heading font-bold text-text-primary text-[48px] sm:text-[64px] lg:text-[80px] leading-[1.08]">
              you can{' '}
              <span className="font-display italic font-extrabold text-primary">trust.</span>
            </span>
          </motion.h1>

          {/* Rotating line */}
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

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="mt-6 font-body text-[18px] text-text-body leading-[1.65] max-w-[440px]"
          >
            Verified doctors. Transparent reviews. Instant booking.
            <br />
            Bangladesh's first platform that gives you control.
          </motion.p>

          {/* CTA Group */}
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

          {/* Trust row */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4 sm:gap-6 flex-wrap text-[13px] font-body font-medium text-text-body">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 text-primary" />
              BMDC Verified Doctors
            </span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-5 h-5 text-primary" />
              Your data is private
            </span>
            <span className="text-border hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-5 h-5 text-primary" />
              Free first consultation
            </span>
          </motion.div>

          {/* Avatar stack */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background"
                  style={{
                    background: `linear-gradient(135deg, hsl(168, 60%, ${70 + i * 5}%), hsl(168, 85%, ${40 + i * 5}%))`,
                  }}
                />
              ))}
            </div>
            <p className="font-body text-[14px] text-text-body">
              <span className="font-bold text-text-primary">500+</span> doctors being verified
            </p>
          </motion.div>
        </motion.div>

        {/* Right 42% */}
        <div className="lg:w-[42%] w-full flex justify-center relative hidden lg:flex">
          <PhoneMockup />
        </div>

        {/* Mobile simplified cards */}
        <div className="lg:hidden w-full mt-8">
          <MobileHeroCards />
        </div>
      </div>
    </section>
  );
};

const MobileHeroCards = () => (
  <div className="space-y-3">
    {[
      { initials: 'AR', name: 'Dr. Aisha Rahman', spec: 'Cardiologist', rating: '4.9', badge: 'Available Now', badgeColor: 'bg-success/10 text-success' },
      { initials: 'KH', name: 'Dr. Karim', spec: 'Pediatrician', rating: '4.8', badge: 'Today 3 PM', badgeColor: 'bg-warning/10 text-warning' },
    ].map((doc) => (
      <div key={doc.name} className="bg-surface rounded-2xl p-4 border border-border flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
          {doc.initials}
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
