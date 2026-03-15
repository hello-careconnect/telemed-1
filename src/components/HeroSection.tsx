import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, ShieldCheck, Lock, Star, CheckCircle, Building2, Clock, Smartphone } from 'lucide-react';
import doctorRafiq from '@/assets/doctor-rafiq.webp';
import doctorAvatar1 from '@/assets/doctor-avatar-1.jpg';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorClipboard from '@/assets/doctor-clipboard.jpg';
import doctorYoungGlasses from '@/assets/doctor-young-glasses.jpg';
import doctorMature from '@/assets/doctor-mature.jpg';

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
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 py-16 lg:py-24">
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

          <motion.h1 variants={fadeUp} className="mt-8">
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

        {/* Right 45% — Doctor Hero Image */}
        <motion.div
          className="lg:w-[45%] w-full relative hidden lg:flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-[420px] h-[520px] rounded-[32px] overflow-hidden shadow-xl relative">
              <img
                src={doctorRafiq}
                alt="Experienced doctor with stethoscope"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
              className="absolute -right-8 top-16 z-20 bg-background rounded-2xl shadow-xl px-5 py-3 border border-border"
            >
              <p className="font-heading font-bold text-[24px] text-primary">200+</p>
              <p className="font-body text-[13px] text-text-muted">Best Doctors</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 1.2 }}
              className="absolute -left-12 top-1/3 z-20 bg-background rounded-2xl shadow-xl px-5 py-3 border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                  ))}
                </div>
                <span className="font-heading font-bold text-[15px] text-text-primary">4.9</span>
              </div>
              <p className="font-body text-[12px] text-text-muted mt-0.5">Average rating</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.8, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
              className="absolute -right-4 bottom-20 z-20 bg-primary rounded-2xl shadow-xl px-5 py-3"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-foreground" />
                <p className="font-body font-medium text-[14px] text-primary-foreground">Available Now</p>
              </div>
              <p className="font-body text-[12px] text-primary-foreground/70 mt-0.5">Book instantly</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.2, ease: 'easeInOut', repeat: Infinity, delay: 0.8 }}
              className="absolute -left-6 bottom-8 z-20 bg-background rounded-2xl shadow-xl p-3 border border-border flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={doctorAvatar1} alt="Dr. Aisha" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-heading font-semibold text-[13px] text-text-primary">Dr. Aisha R.</p>
                <p className="font-body text-[11px] text-text-muted">Cardiologist · ⭐ 4.9</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="lg:hidden w-full mt-4">
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

