import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, Play } from 'lucide-react';

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
    <section id="for-doctors" className="bg-dark-bg py-28">
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center" ref={ref}>
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
              List My Practice — Join Waitlist
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right — Doctor image + features */}
        <div className="lg:w-[45%] w-full relative">
          <div className="relative">
            {/* Doctor image placeholder */}
            <div className="w-full aspect-[3/4] max-w-[400px] mx-auto rounded-[28px] overflow-hidden bg-dark-surface shadow-xl">
              {/* 
                IMAGE NEEDED: "doctor-for-doctors.webp"
                A professional, confident Bangladeshi female doctor (mid-30s) in a white 
                lab coat with a stethoscope, standing with arms crossed and a warm smile. 
                She should be in a modern clinic or hospital corridor. Slightly blue-toned 
                or neutral background. 3/4 body shot. Conveys professionalism, trust, 
                and authority. High quality portrait.
              */}
              <div className="w-full h-full bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-[rgba(255,255,255,0.08)] mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[40px]">👩‍⚕️</span>
                  </div>
                  <p className="font-body text-[13px] text-[rgba(255,255,255,0.5)]">doctor-for-doctors.webp</p>
                  <p className="font-body text-[11px] text-[rgba(255,255,255,0.35)] mt-1 max-w-[200px] mx-auto">
                    Confident female doctor, white coat, arms crossed, modern clinic
                  </p>
                </div>
              </div>
            </div>

            {/* Feature cards overlaying */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 left-0 right-0 mx-auto max-w-[360px] bg-background rounded-2xl shadow-xl p-4 flex items-center gap-4"
            >
              <div className="bg-success/10 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                <span className="text-[20px]">📊</span>
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
