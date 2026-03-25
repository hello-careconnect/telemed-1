import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import doctorAisha from '@/assets/doctor-aisha-new.jpg';
import doctorKarimUddin from '@/assets/doctor-karim-uddin.jpg';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorRafiq from '@/assets/doctor-rafiq.webp';
import doctorClipboard from '@/assets/doctor-clipboard.jpg';
import doctorYoungGlasses from '@/assets/doctor-young-glasses.jpg';

const doctors = [
  {
    name: 'Dr. Aisha Rahman',
    specialty: 'Family Medicine Specialist',
    image: doctorAisha,
    objectPosition: 'center center',
  },
  {
    name: 'Dr. Karim Hassan',
    specialty: 'Cardiology Expert',
    image: doctorClipboard,
    objectPosition: 'center top',
  },
  {
    name: 'Dr. Nasreen Sultana',
    specialty: 'Gynecologist',
    image: doctorNasreen,
    objectPosition: 'center top',
  },
  {
    name: 'Dr. Rafiq Ahmed',
    specialty: 'Dermatologist',
    image: doctorRafiq,
    objectPosition: 'center top',
  },
  {
    name: 'Dr. Imran Chowdhury',
    specialty: 'Neurologist',
    image: doctorYoungGlasses,
    objectPosition: 'center top',
  },
  {
    name: 'Dr. Karim Uddin',
    specialty: 'Orthopedic Surgeon',
    image: doctorKarimUddin,
    objectPosition: 'center top',
  },
];

const useVisibleCount = () => {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setCount(4);
      else if (window.innerWidth >= 640) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
};

export const DoctorsTeam = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIdx, setActiveIdx] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = useVisibleCount();

  const next = () => {
    setStartIdx((prev) => (prev + 1) % doctors.length);
    setActiveIdx((prev) => (prev + 1) % visibleCount);
  };
  const prev = () => {
    setStartIdx((prev) => (prev - 1 + doctors.length) % doctors.length);
    setActiveIdx((prev) => (prev - 1 + visibleCount) % visibleCount);
  };

  const visibleDoctors = [];
  for (let i = 0; i < Math.min(visibleCount, doctors.length); i++) {
    visibleDoctors.push(doctors[(startIdx + i) % doctors.length]);
  }

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Our Specialists
          </span>
          <h2 className="mt-6 font-heading font-bold text-[28px] sm:text-[40px] text-text-primary leading-[1.12]">
            Meet our{' '}
            <span className="font-display italic text-primary">expert</span>{' '}
            doctors
          </h2>
          <p className="mt-3 font-body text-[15px] sm:text-[17px] text-text-body max-w-xl mx-auto">
            Bangladesh's most trusted doctors are verifying their listings ahead of launch.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className={`grid gap-5 ${visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-4'}`}>
          <AnimatePresence mode="wait">
            {visibleDoctors.map((doc, i) => {
              const isActive = i === activeIdx;
              return (
                <motion.div
                  key={doc.name + startIdx}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  onClick={() => setActiveIdx(i)}
                  className={`group relative flex flex-col items-center text-center rounded-[24px] px-6 py-8 cursor-pointer transition-all duration-300 border
                    ${isActive
                      ? 'bg-primary border-primary shadow-xl scale-[1.04]'
                      : 'bg-surface border-border hover:border-primary hover:shadow-md'
                    }`}
                >
                  {/* Circular photo */}
                  <div className={`w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 transition-all duration-300
                    ${isActive ? 'ring-white/30' : 'ring-border'}`}>
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: doc.objectPosition }}
                      loading="lazy"
                    />
                  </div>

                  {/* Name */}
                  <p className={`font-heading font-semibold text-[16px] mb-1 transition-colors duration-300
                    ${isActive ? 'text-primary-foreground' : 'text-text-primary'}`}>
                    {doc.name}
                  </p>

                  {/* Specialty */}
                  <p className={`font-body text-[14px] mb-5 transition-colors duration-300
                    ${isActive ? 'text-primary-foreground/80' : 'text-primary'}`}>
                    {doc.specialty}
                  </p>

                  {/* CTA */}
                  <button
                    className={`px-6 py-2 rounded-full text-[14px] font-body font-medium border transition-colors duration-200
                      ${isActive
                        ? 'border-white/60 text-text-primary bg-background hover:bg-primary-foreground hover:text-primary hover:border-transparent'
                        : 'border-border text-text-primary bg-transparent hover:bg-primary hover:text-white hover:border-primary'
                      }`}
                  >
                    Join Waitlist
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation + View Full Roster */}
        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <button className="font-body text-[14px] text-primary hover:underline underline-offset-4 transition-colors">
            View Full Roster
          </button>
        </div>
      </div>
    </section>
  );
};
