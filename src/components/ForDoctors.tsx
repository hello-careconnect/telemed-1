import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, BarChart3 } from 'lucide-react';
import doctorMature from '@/assets/doctor-mature.jpg';
import doctorMatureNobg from '@/assets/doctor-mature-nobg.png';

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

        {/* Right — Doctor image with pop-out depth effect */}
        <motion.div
          className="lg:w-[45%] w-full flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Outer wrapper — overflow:visible so head bleeds above */}
          <div className="relative" style={{ width: '100%', maxWidth: '400px', height: '480px', overflow: 'visible' }}>

            {/* Layer 1 — Background photo clipped inside card */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden" style={{ zIndex: 1 }}>
              <img
                src={doctorMature}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Layer 2 — Removed-BG cutout, head pops above card */}
            <img
              src={doctorMatureNobg}
              alt="Experienced doctor with arms crossed"
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '115%',
                height: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                zIndex: 3,
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            />

            {/* Layer 3 — Glassmorphism stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                zIndex: 4,
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.20)',
                borderRadius: '16px',
                padding: '12px 16px',
              }}
              className="flex items-center gap-3"
            >
              <div className="bg-[rgba(255,255,255,0.15)] rounded-xl w-10 h-10 flex items-center justify-center shrink-0">
                <BarChart3 className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading font-semibold text-[15px] text-white">265K+ Patient Reach</p>
                <p className="font-body text-[13px] text-white/60">96% satisfaction rate</p>
              </div>
            </motion.div>
          </div>

          {/* Mobile benefits */}
          <div className="lg:hidden mt-12 space-y-3 hidden">
            {['BMDC Verified Badge', 'Your own analytics', '3 months free premium listing'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[rgba(255,255,255,0.05)] rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent-alt shrink-0" />
                <p className="font-body text-[15px] text-dark-text">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
