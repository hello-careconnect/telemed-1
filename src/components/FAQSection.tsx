import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    q: 'How do I know which specialist is right for me?',
    a: 'Our matching system considers 3 key factors: your symptoms and health history, specialist success rates with similar cases, and your preferred communication style.',
  },
  {
    q: 'When does the platform launch?',
    a: "We're targeting launch within 4–6 weeks in Dhaka and Chattogram. Waitlist members are notified first and get first access.",
  },
  {
    q: 'What happens after I book my first appointment?',
    a: "You'll receive a confirmation with your doctor's details, appointment time, and preparation tips. You can also video-consult from home.",
  },
  {
    q: 'How does your AI monitoring work?',
    a: 'Our diagnostic systems learn from 300k+ health data points to surface insights most doctors might miss, always under physician supervision.',
  },
  {
    q: 'Will I know costs before treatment?',
    a: 'Yes, transparent pricing is core to our platform. You see the full cost before booking. No hidden fees. Pay via bKash, Nagad, or card.',
  },
  {
    q: "I'm a doctor. How do I list my practice?",
    a: "Use the same waitlist form above and select 'I'm a Doctor.' Our team will reach out with a dedicated onboarding process and your free verified listing.",
  },
];

export const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-8 sm:py-12 lg:py-16 bg-background">
      <div className="container max-w-[1140px] mx-auto px-6" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left */}
          <div className="lg:w-1/2">
            <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
              FAQ
            </span>
            <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[38px] text-text-primary leading-[1.15]">
              Smart Care Starts with{' '}
              <span className="font-display italic text-primary">Good Information</span>
            </h2>
            <p className="mt-3 font-body text-[16px] text-text-body max-w-md">
              Everything you need to know before joining the platform.
            </p>
          </div>

          {/* Right — Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" defaultValue="item-0">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <AccordionItem value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="font-body font-semibold text-[15px] text-text-primary py-5 hover:no-underline text-left [&[data-state=open]>svg]:text-primary">
                      Q{i + 1}. {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-[15px] text-text-body leading-[1.7] pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
