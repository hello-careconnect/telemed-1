import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight, Stethoscope, BarChart2 } from 'lucide-react';

const benefits = [
  { title: 'Free verified listing', desc: 'Manage your schedule and availability' },
  { title: 'Reach verified patients', desc: 'Build your online reputation with real reviews' },
  { title: 'Digital prescriptions', desc: 'Issue prescriptions and manage follow-ups digitally' },
];

export const ForDoctors = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="for-doctors" className="bg-dark-bg py-28">
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-16" ref={ref}>
        {/* Left */}
        <div className="lg:w-[55%]">
          <span className="inline-flex items-center bg-[rgba(255,255,255,0.08)] text-accent-alt rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            For Healthcare Professionals
          </span>
          <h2 className="mt-6 font-heading font-bold text-[36px] sm:text-[42px] text-dark-text leading-[1.1]">
            Are you a doctor? List free.
          </h2>
          <p className="mt-4 font-body text-[18px] text-[rgba(255,255,255,0.65)] max-w-lg">
            Be among the first verified doctors on Bangladesh's most trusted health platform.
          </p>

          <div className="mt-10 space-y-5">
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

          <button
            onClick={scrollToForm}
            className="group mt-10 bg-[rgba(255,255,255,0.08)] border-[1.5px] border-[rgba(255,255,255,0.25)] text-primary-foreground rounded-full px-8 py-4 text-[16px] font-semibold font-body hover:bg-[rgba(255,255,255,0.15)] transition-all duration-200 flex items-center gap-2"
          >
            List My Practice — Join Waitlist
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right — floating cards (desktop only) */}
        <div className="lg:w-[45%] relative min-h-[400px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0 }}
            className="absolute top-0 right-8 rotate-[-2deg] bg-background rounded-2xl shadow-xl p-6 w-72"
          >
            <div className="bg-accent rounded-2xl w-12 h-12 flex items-center justify-center mb-3">
              <Stethoscope className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <p className="font-heading font-semibold text-text-primary">BMDC Verified Badge</p>
            <p className="font-body text-[14px] text-text-body mt-1">Your qualifications verified. Patients trust you instantly.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="absolute top-36 right-0 rotate-[1deg] bg-background rounded-2xl shadow-xl p-6 w-72"
          >
            <div className="bg-accent rounded-2xl w-12 h-12 flex items-center justify-center mb-3">
              <BarChart2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <p className="font-heading font-semibold text-text-primary">Your own analytics</p>
            <p className="font-body text-[14px] text-text-body mt-1">View patient reach, profile visits, booking rates.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute top-72 right-12 rotate-[-1deg] bg-accent rounded-2xl shadow-xl p-6 w-72 border border-primary"
          >
            <p className="font-body text-[13px] text-text-body">First verified doctors get</p>
            <p className="font-heading font-bold text-[28px] text-primary">3 months free</p>
            <p className="font-body text-[14px] text-text-body">premium listing</p>
          </motion.div>
        </div>

        {/* Mobile benefits simplified */}
        <div className="lg:hidden space-y-3">
          {['BMDC Verified Badge', 'Your own analytics', '3 months free premium listing'].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-accent-alt shrink-0" />
              <p className="font-body text-[15px] text-dark-text">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
