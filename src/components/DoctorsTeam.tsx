import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Star, ShieldCheck } from 'lucide-react';
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
    rating: 4.9,
    reviews: 127,
    distance: '1.2 km',
  },
  {
    name: 'Dr. Karim Hassan',
    specialty: 'Cardiology Expert',
    image: doctorClipboard,
    objectPosition: 'center top',
    rating: 4.8,
    reviews: 94,
    distance: '3.5 km',
  },
  {
    name: 'Dr. Nasreen Sultana',
    specialty: 'Gynecologist',
    image: doctorNasreen,
    objectPosition: 'center top',
    rating: 4.9,
    reviews: 203,
    distance: '2.8 km',
  },
  {
    name: 'Dr. Rafiq Ahmed',
    specialty: 'Dermatologist',
    image: doctorRafiq,
    objectPosition: 'center top',
    rating: 4.7,
    reviews: 86,
    distance: '4.1 km',
  },
  {
    name: 'Dr. Imran Chowdhury',
    specialty: 'Neurologist',
    image: doctorYoungGlasses,
    objectPosition: 'center top',
    rating: 4.8,
    reviews: 112,
    distance: '1.9 km',
  },
  {
    name: 'Dr. Karim Uddin',
    specialty: 'Orthopedic Surgeon',
    image: doctorKarimUddin,
    objectPosition: 'center top',
    rating: 4.6,
    reviews: 71,
    distance: '5.3 km',
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
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = useVisibleCount();

  const next = () => setStartIdx((prev) => (prev + 1) % doctors.length);
  const prev = () => setStartIdx((prev) => (prev - 1 + doctors.length) % doctors.length);

  const visibleDoctors = [];
  for (let i = 0; i < Math.min(visibleCount, doctors.length); i++) {
    visibleDoctors.push(doctors[(startIdx + i) % doctors.length]);
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container max-w-[1140px] mx-auto px-6">
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
          <p className="mt-3 font-body text-[15px] sm:text-[17px] text-text-body lg:whitespace-nowrap mx-auto">
            Bangladesh's most trusted doctors are verifying their listings ahead of launch.
          </p>
        </div>

        {/* Cards */}
        <div ref={ref} className={`grid gap-5 ${visibleCount === 1 ? 'grid-cols-1' : visibleCount === 2 ? 'grid-cols-2' : 'grid-cols-4'}`}>
          <AnimatePresence mode="wait">
            {visibleDoctors.map((doc, i) => (
              <motion.div
                key={doc.name + startIdx}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -24 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="group relative flex flex-col items-center text-center rounded-[24px] px-6 py-8 bg-surface border border-border hover:border-primary hover:shadow-md transition-all duration-300"
              >
                  {/* Circular photo */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-4 ring-border">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: doc.objectPosition }}
                      loading="lazy"
                    />
                  </div>

                  {/* Verified badge */}
                  <div className="flex items-center gap-1 mb-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                    <span className="font-body text-[11px] text-primary font-medium">Verified</span>
                  </div>

                  {/* Name */}
                  <p className="font-heading font-semibold text-[16px] mb-1 text-text-primary">
                    {doc.name}
                  </p>

                  {/* Specialty */}
                  <p className="font-body text-[14px] mb-3 text-primary">
                    {doc.specialty}
                  </p>

                  {/* Rating & Video */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[hsl(45,90%,50%)] fill-[hsl(45,90%,50%)]" />
                      <span className="font-body text-[13px] font-semibold text-text-primary">{doc.rating}</span>
                      <span className="font-body text-[12px] text-text-muted">({doc.reviews})</span>
                    </div>
                    {doc.videoAvailable && (
                      <div className="flex items-center gap-1 text-primary">
                        <Video className="w-3.5 h-3.5" strokeWidth={1.5} />
                        <span className="font-body text-[12px] font-medium">Video</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <button className="px-6 py-2 rounded-full text-[14px] font-body font-medium border border-border bg-background text-text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-200">
                    Book Now
                  </button>
              </motion.div>
            ))}
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
