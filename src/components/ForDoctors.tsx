import { useRef } from 'react'; // force rebuild
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, BarChart3, Shield } from 'lucide-react';
import doctorForDoctors from '@/assets/doctor-fordoctors.png';

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
    <section id="for-doctors" className="bg-dark-bg py-8 sm:py-12 lg:py-0 lg:min-h-[600px] relative overflow-hidden">
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:py-0" ref={ref}>
        {/* Left — Content */}
        <div className="lg:w-[55%] lg:py-16">
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

        {/* Right — Doctor image (background removed) */}
        <div className="lg:w-[45%] w-full relative lg:self-stretch min-h-[400px] lg:min-h-0">
          <div className="relative h-full flex items-end justify-center lg:absolute lg:-right-56 lg:top-0 lg:bottom-0 lg:justify-end lg:items-end">
            <img
              src={doctorForDoctors}
              alt="Experienced doctor standing confidently with arms crossed"
              className="w-full max-w-none h-auto relative z-10 object-contain lg:h-full lg:w-auto lg:max-h-[95%] lg:mb-0"
              loading="lazy"
            />

            {/* Top-left badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="absolute top-[5%] right-[15%] bg-background rounded-2xl shadow-xl px-5 py-3 z-20"
            >
              <p className="font-heading font-bold text-[28px] text-primary leading-none">5K+</p>
              <p className="font-body text-[13px] text-text-muted">Doctors Verified</p>
            </motion.div>

            {/* Bottom-right card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute bottom-[8%] right-[5%] max-w-[320px] bg-background rounded-2xl shadow-xl p-4 flex items-center gap-4 z-20"
            >
              <div className="bg-accent rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <BarChart3 className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading font-semibold text-[15px] text-text-primary">265K+ Patient Reach</p>
                <p className="font-body text-[13px] text-text-muted">96% satisfaction rate</p>
              </div>
            </motion.div>
          </div>

          {/* Mobile benefits */}
          <div className="lg:hidden mt-12 space-y-3">
            {['BMDC Verified Badge', 'Your own analytics', '3 months free premium listing'].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[rgba(255,255,255,0.05)] rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-accent-alt shrink-0" />
                <p className="font-body text-[15px] text-dark-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
