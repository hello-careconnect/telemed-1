import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Target, Rocket, ClipboardList, Bot, CircleDollarSign, Stethoscope } from 'lucide-react';

const faqs = [
  {
    q: 'How do I know which specialist is right for me?',
    a: 'Our matching system considers 3 key factors: your symptoms and health history, specialist success rates with similar cases, and your preferred communication style.',
    icon: Target,
  },
  {
    q: 'When does the platform launch?',
    a: "We're targeting launch within 4–6 weeks in Dhaka and Chattogram. Waitlist members are notified first and get first access.",
    icon: Rocket,
  },
  {
    q: 'What happens after I book my first appointment?',
    a: "You'll receive a confirmation with your doctor's details, appointment time, and preparation tips. You can also video-consult from home.",
    icon: ClipboardList,
  },
  {
    q: 'How does your AI monitoring work?',
    a: 'Our diagnostic systems learn from 300k+ health data points to surface insights most doctors might miss, always under physician supervision.',
    icon: Bot,
  },
  {
    q: 'Will I know costs before treatment?',
    a: 'Yes, transparent pricing is core to our platform. You see the full cost before booking. No hidden fees. Pay via bKash, Nagad, or card.',
    icon: CircleDollarSign,
  },
  {
    q: "I'm a doctor. How do I list my practice?",
    a: "Use the same waitlist form above and select 'I'm a Doctor.' Our team will reach out with a dedicated onboarding process and your free verified listing.",
    icon: Stethoscope,
  },
];

export const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-soft-img relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />

      <div className="container max-w-[1140px] mx-auto px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
          {/* Left — sticky header */}
          <div className="lg:w-[42%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </span>

              <h2 className="mt-3 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.12]">
                Got questions?
                <br />
                <span className="font-display text-primary">We've got answers.</span>
              </h2>

              <p className="mt-4 font-body text-[16px] text-text-body max-w-sm leading-relaxed">
                Everything you need to know before joining CareConnect. Can't find your answer? Reach out to us anytime.
              </p>

              {/* Mini stats */}
              <div className="mt-8 flex gap-6">
                <div className="flex flex-col items-center">
                  <p className="font-heading font-bold text-[28px] text-primary">500+</p>
                  <p className="font-body text-[13px] text-text-body">Early signups</p>
                </div>
                <div className="w-px bg-border" />
                <div className="flex flex-col items-center">
                  <p className="font-heading font-bold text-[28px] text-primary">4.9</p>
                  <p className="font-body text-[13px] text-text-body">User rating</p>
                </div>
                <div className="w-px bg-border" />
                <div className="flex flex-col items-center">
                  <p className="font-heading font-bold text-[28px] text-primary">24/7</p>
                  <p className="font-body text-[13px] text-text-body">Support</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Custom accordion */}
          <div className="lg:w-[58%] space-y-2">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'bg-white border-primary/20 shadow-lg shadow-primary/[0.06]'
                        : 'bg-white/60 border-border hover:bg-white hover:border-primary/10 hover:shadow-md hover:shadow-primary/[0.04]'
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center gap-3 px-5 py-4 text-left"
                    >
                      <span
                        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isOpen ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-text-body'
                        }`}
                      >
                        <faq.icon className="w-4 h-4" />
                      </span>

                      <div className="flex-1 min-w-0">
                        <span className={`font-body font-semibold text-[14.5px] leading-snug transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-text-primary'}`}>
                          {faq.q}
                        </span>
                      </div>

                      <span
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-text-body'
                        }`}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-4 pl-[3.25rem]">
                            <p className="font-body text-[14px] text-text-body leading-[1.75]">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
