import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Aisha Rahman',
    specialty: 'Cardiologist',
    rating: '4.9',
    reviews: 127,
    initials: 'AR',
    /*
      IMAGE NEEDED: "doctor-aisha.webp"
      Professional headshot of a Bangladeshi female doctor (early 30s), wearing a white 
      lab coat, hair neatly pulled back, warm smile, stethoscope around neck. Soft, 
      neutral studio background. Portrait crop from chest up. Approachable, confident expression.
    */
  },
  {
    name: 'Dr. Karim Hassan',
    specialty: 'Pediatrician',
    rating: '4.8',
    reviews: 94,
    initials: 'KH',
    /*
      IMAGE NEEDED: "doctor-karim.webp"
      Professional headshot of a Bangladeshi male doctor (mid-30s), wearing a white lab 
      coat and glasses, friendly smile, clean-shaven. Soft, neutral studio background. 
      Portrait crop from chest up. Trustworthy, approachable look.
    */
  },
  {
    name: 'Dr. Nasreen Sultana',
    specialty: 'Gynecologist',
    rating: '4.9',
    reviews: 156,
    initials: 'NS',
    /*
      IMAGE NEEDED: "doctor-nasreen.webp"
      Professional headshot of a Bangladeshi female doctor (late 30s), wearing a white 
      lab coat and modest hijab, warm and reassuring expression. Soft, neutral studio 
      background. Portrait crop from chest up.
    */
  },
  {
    name: 'Dr. Rafiq Ahmed',
    specialty: 'Dermatologist',
    rating: '4.7',
    reviews: 82,
    initials: 'RA',
    /*
      IMAGE NEEDED: "doctor-rafiq.webp"  
      Professional headshot of a Bangladeshi male doctor (early 40s), wearing a white lab 
      coat, salt-and-pepper hair, gentle smile with slight beard. Soft, neutral studio 
      background. Portrait crop from chest up. Distinguished, experienced look.
    */
  },
];

export const DoctorsTeam = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;

  const next = () => setStartIdx((prev) => (prev + 1) % doctors.length);
  const prev = () => setStartIdx((prev) => (prev - 1 + doctors.length) % doctors.length);

  const visibleDoctors = [];
  for (let i = 0; i < Math.min(visibleCount, doctors.length); i++) {
    visibleDoctors.push(doctors[(startIdx + i) % doctors.length]);
  }

  return (
    <section className="py-28 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
          <div>
            <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
              Our Specialists
            </span>
            <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.12]">
              Meet our{' '}
              <span className="font-display italic text-primary">expert</span>{' '}
              doctors
            </h2>
            <p className="mt-3 font-body text-[17px] text-text-body max-w-lg">
              Highly experienced doctors and specialists committed to your unique health journey.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDoctors.map((doc, i) => (
            <motion.div
              key={doc.name + startIdx}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group bg-surface rounded-[24px] overflow-hidden border border-border hover:border-primary hover:shadow-lg transition-all duration-250"
            >
              {/* Photo area */}
              <div className="aspect-[4/5] bg-surface-2 relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-primary/5 to-accent/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="font-heading font-bold text-[28px] text-primary">{doc.initials}</span>
                  </div>
                </div>
                {/* Rating badge */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-warning text-warning" />
                  <span className="font-body font-semibold text-[13px] text-text-primary">{doc.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-[17px] text-text-primary">{doc.name}</p>
                    <p className="font-body text-[14px] text-primary">{doc.specialty}</p>
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
                <p className="font-body text-[13px] text-text-muted mt-2">{doc.reviews} verified reviews</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
