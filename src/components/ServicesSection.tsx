import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Baby, Brain, Stethoscope, Leaf, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Health Consultations',
    desc: 'Talk to certified GPs, get prescriptions, and manage your health, all from home.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Heart,
    title: "Women's Health & Wellness",
    desc: 'Confidential consultations for reproductive health, pregnancy care, and more.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Baby,
    title: 'Pediatric & Child Care',
    desc: "Expert advice for your child's health from trusted pediatricians across Bangladesh.",
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Sparkles,
    title: 'Skin & Dermatology Care',
    desc: 'Get expert dermatology care for skin conditions, acne, allergies, and cosmetic concerns.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Brain,
    title: 'Mental Health & Counseling',
    desc: 'Access licensed therapists and counselors for stress, anxiety, depression, and more.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Leaf,
    title: 'Nutrition & Lifestyle Coaching',
    desc: 'Personalized dietary plans and lifestyle guidance from certified nutritionists.',
    color: 'bg-primary/10 text-primary',
  },
];

export const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container max-w-[1140px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Our Services
          </span>
          <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.12]">
            Our consultation{' '}
            <span className="font-display italic text-primary">services</span>
          </h2>
          <p className="mt-4 font-body text-[17px] text-text-body max-w-lg mx-auto">
            Comprehensive healthcare at your fingertips, from general checkups to specialized treatments.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-background rounded-[24px] p-7 border border-border hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-5`}>
                <s.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-[15px] text-text-body leading-[1.6]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
