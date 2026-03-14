import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, FileText, Stethoscope } from 'lucide-react';

const faqs = [
  {
    q: 'When does the platform launch?',
    a: 'We\'re targeting launch within 4–6 weeks in Dhaka and Chattogram. Waitlist members are notified first and get first access.',
  },
  {
    q: 'Is my information safe?',
    a: 'We do not sell your data. Your email and phone are only used to notify you about the launch and deliver your free consultation code. Nothing more.',
  },
  {
    q: 'What is the free consultation?',
    a: 'The first 500 people who join receive one free General Physician video consultation — worth BDT 200–300 — redeemable at launch. No credit card required.',
  },
  {
    q: 'Which payment methods will you accept?',
    a: 'bKash, Nagad, Rocket, and major bank debit/credit cards. We are building this for Bangladesh from the ground up.',
  },
  {
    q: 'I\'m a doctor. How do I list my practice?',
    a: 'Use the same waitlist form above and select \'I\'m a Doctor.\' Our team will reach out with a dedicated onboarding process and your free verified listing.',
  },
  {
    q: 'Can I refer a friend?',
    a: 'Yes — after joining, you\'ll receive a personal referral link. Each person you refer moves you higher up the priority list.',
  },
];

export const FAQSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row gap-16" ref={ref}>
        {/* Left */}
        <div className="lg:w-1/2">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            FAQ
          </span>
          <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[38px] text-text-primary leading-[1.15]">
            Smart care starts with good questions.
          </h2>
          <p className="mt-3 font-body text-[16px] text-text-body">
            Everything you need to know before joining.
          </p>

          <Accordion type="single" defaultValue="item-0" className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="font-body font-semibold text-[16px] text-text-primary py-5 hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-[15px] text-text-body leading-[1.7] pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right — decorative card stack (desktop only) */}
        <div className="lg:w-1/2 relative min-h-[400px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0 }}
            className="absolute top-0 right-4 rotate-2 bg-background rounded-2xl shadow-lg p-5 border border-border w-72"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-[11px]">
                AR
              </div>
              <div>
                <p className="font-heading font-semibold text-[13px] text-text-primary">Dr. Aisha Rahman</p>
                <p className="font-body text-[11px] text-primary">Cardiologist</p>
              </div>
            </div>
            <p className="font-body text-[11px] text-text-muted">⭐ 4.9 · 127 reviews</p>
            <button className="mt-2 bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-[11px] font-semibold font-body">
              Book Now
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="absolute top-40 right-0 rotate-[-1deg] bg-accent rounded-2xl shadow-lg p-5 border border-primary w-72"
          >
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-8 h-8 text-success" />
              <div>
                <p className="font-heading font-semibold text-text-primary">Booking Confirmed!</p>
                <p className="font-body text-[14px] text-text-body">Dr. Rahman · Tomorrow · 3:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute top-72 right-12 rotate-[2deg] bg-background rounded-2xl shadow-lg p-5 border border-border w-64"
          >
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <p className="font-heading font-semibold text-text-primary">Prescription Issued</p>
            </div>
            <div className="space-y-2">
              <div className="h-3 rounded bg-surface w-full" />
              <div className="h-3 rounded bg-surface w-4/5" />
              <div className="h-3 rounded bg-surface w-3/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
