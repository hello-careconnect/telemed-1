import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import doctorNasreen from '@/assets/doctor-nasreen.webp';
import doctorAvatar1 from '@/assets/doctor-avatar-1.jpg';
import doctorMature from '@/assets/doctor-mature.jpg';
import doctorRafiq from '@/assets/doctor-rafiq.webp';

export const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16" ref={ref}>
        {/* Left — Image */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-[28px] overflow-hidden bg-surface-2 shadow-lg">
              <img
                src={doctorNasreen}
                alt="Doctor at her desk writing notes with stethoscope, representing healthcare professionals on CareConnect"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats overlay cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 bg-primary rounded-2xl shadow-xl px-6 py-4 text-center"
            >
              <p className="font-heading font-black text-[32px] text-primary-foreground leading-[1]">5k+</p>
              <p className="font-body text-[12px] text-primary-foreground/70 mt-1">Doctors Verified</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.45 }}
              className="absolute -top-4 -left-4 bg-background rounded-2xl shadow-xl px-5 py-3 border border-border"
            >
              <p className="font-heading font-black text-[28px] text-primary leading-[1]">100%</p>
              <p className="font-body text-[11px] text-text-muted mt-0.5">Quality Commitment</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            About CareConnect
          </span>
          <h2 className="mt-3 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.12]">
            At CareConnect, we make healthcare{' '}
            <span className="font-display italic text-primary">simple</span>, accessible, and personal.
          </h2>
          <p className="mt-6 font-body text-[17px] text-text-body leading-[1.7] max-w-lg">
            Our mission is to connect you with trusted doctors anytime, anywhere, ensuring you get the care you need without the wait. We treat you like family, providing compassionate and comprehensive healthcare tailored to your individual needs.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { val: '15+', label: 'Specialties Covered' },
              { val: '12+', label: 'Months of Research' },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface rounded-2xl p-5">
                <p className="font-heading font-black text-[28px] text-text-primary">{stat.val}</p>
                <p className="font-body text-[14px] text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[doctorAvatar1, doctorMature, doctorRafiq, doctorNasreen].map((img, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-background overflow-hidden"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="font-body text-[14px] text-text-body">
              Join the CareConnect Community
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
