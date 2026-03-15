import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonialFarida from '@/assets/testimonial-farida.jpg';
import testimonialTanvir from '@/assets/testimonial-tanvir.jpg';
import testimonialNasreen from '@/assets/testimonial-nasreen.jpg';

const testimonials = [
  {
    quote: "I've wasted so many afternoons calling clinics to check if a doctor is even available. The idea of just opening an app and seeing real slots, that changes everything.",
    name: 'Farida H.',
    meta: 'Verified Interview · Dhaka',
    initials: 'FH',
    image: testimonialFarida,
    imagePosition: 'center 15%',
    title: 'Nori Trust Saved My Mother\'s Life',
  },
  {
    quote: 'I trust a doctor more when I can read what other patients actually said. Not just a star number, the full review. This platform finally does that.',
    name: 'Tanvir R.',
    meta: 'Verified Interview · Gulshan',
    initials: 'TR',
    image: testimonialTanvir,
    imagePosition: 'center 20%',
    title: 'They Found What 6 Doctors Missed',
  },
  {
    quote: "My mother is in Mirpur. I'm in Chattogram. A platform where she can video-consult a specialist, that's not a luxury, it's urgent.",
    name: 'Nasreen K.',
    meta: 'Verified Interview · Chattogram',
    initials: 'NK',
    image: testimonialNasreen,
    imagePosition: 'center 20%',
    title: 'My A1C Dropped 3 Points in 90 Days',
  },
];

export const Testimonials = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="bg-surface py-28">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Testimonials
          </span>
          <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.15]">
            Why 30,000+ patients{' '}
            <span className="font-display italic text-primary">choose us</span>{' '}
            every year
          </h2>
          <p className="mt-4 font-body text-[18px] text-text-body max-w-lg mx-auto">
            We spoke to 200+ people in Dhaka and Chattogram. Here is what they told us.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative bg-background rounded-[24px] p-8 shadow-md border border-border hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
            >
              {/* Decorative quote */}
              <span className="absolute top-4 left-6 font-display italic text-[72px] text-surface-2 leading-[1] select-none pointer-events-none">
                "
              </span>

              <div className="relative z-10">
                {/* Avatar */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-alt flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[15px] text-text-primary">{t.name}</p>
                    <p className="font-body text-[12px] text-text-muted">{t.meta}</p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[17px] text-text-primary mb-3">{t.title}</h3>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="font-body text-[15px] text-text-body leading-[1.7]">
                  "{t.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
            className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIdx ? 'bg-primary w-6' : 'bg-border'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveIdx((prev) => Math.min(testimonials.length - 1, prev + 1))}
            className="w-10 h-10 rounded-full border border-border hover:border-primary bg-primary text-primary-foreground flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
