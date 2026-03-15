import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import doctorMature from '@/assets/doctor-mature.jpg';
import doctorCutout from '@/assets/doctor-fordoctors-cutout.jpg';

const benefits = [
  { title: 'Free verified listing', desc: 'Manage your schedule and availability' },
  { title: 'Reach verified patients', desc: 'Build your online reputation with real reviews' },
  { title: 'Digital prescriptions', desc: 'Issue prescriptions and manage follow-ups digitally' },
  { title: 'Your own analytics', desc: 'View patient reach, profile visits, booking rates' },
];

export const ForDoctors = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="for-doctors" className="bg-dark-bg py-12 sm:py-16 lg:py-28">
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center" ref={ref}>
        {/* Left — Content */}
        <div className="lg:w-[55%]">
          <span className="inline-flex items-center bg-[rgba(255,255,255,0.08)] text-accent-alt rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            For Healthcare Professionals
          </span>
          <h2 className="mt-6 font-heading font-bold text-[36px] sm:text-[42px] text-dark-text leading-[1.1]">
            Are you a doctor?{' '}
            <span className="font-display italic text-accent-alt">List free.</span>
          </h2>
          <p className="mt-4 font-body text-[18px] text-[rgba(255,255,255,0.65)] max-w-lg">
            Be among the first verified doctors on Bangladesh's most trusted health platform. Boost your online presence and attract more patients.
          </p>

          <div className="mt-10 space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-[22px] h-[22px] text-accent-alt shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-[17px] text-dark-text">{b.title}</p>
                  <p className="font-body text-[15px] text-[rgba(255,255,255,0.55)]">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToForm}
              className="group bg-accent-alt text-dark-bg rounded-full px-8 py-4 text-[16px] font-semibold font-body hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
            >
              List My Practice
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right — Doctor card with overflow cutout effect */}
        <div className="lg:w-[45%] w-full flex justify-center lg:justify-end">
          {/* Outer wrapper: overflow visible so cutout bleeds above/below */}
          <div className="relative" style={{ height: '480px', width: '100%', maxWidth: '400px', overflow: 'visible' }}>

            {/* Layer 1 — dark background photo, clipped to card */}
            <div
              className="absolute inset-0"
              style={{ borderRadius: '24px', overflow: 'hidden', zIndex: 1 }}
            >
              <img
                src={doctorMature}
                alt=""
                className="w-full h-full object-cover object-[82%_center]"
              />
              {/* Dark overlay for depth */}
              <div className="absolute inset-0 bg-[rgba(5,30,28,0.45)]" />
            </div>

            {/* Layer 2 — removed-bg cutout, bleeds above card top */}
            <img
              src={doctorCutout}
              alt="Experienced doctor standing confidently with arms crossed"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                zIndex: 3,
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              loading="lazy"
            />

            {/* Layer 3 — floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                zIndex: 4,
              }}
              className="rounded-2xl p-4 flex items-center gap-3"
              css-backdropfilter="blur(12px)"
              // glassmorphism via inline style
            >
              <div
                className="rounded-2xl p-4 flex items-center gap-3"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
              >
                <div className="bg-accent rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-[15px] text-dark-text">265K+ Patient Reach</p>
                  <p className="font-body text-[13px] text-[rgba(255,255,255,0.6)]">96% satisfaction rate</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-accent-alt opacity-80" style={{ zIndex: 2 }} />
            <div className="absolute top-10 left-5 w-6 h-6 rounded-full border border-accent-alt opacity-40" style={{ zIndex: 2 }} />
          </div>
        </div>
      </div>
    </section>
  );
};
