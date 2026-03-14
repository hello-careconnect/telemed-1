import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AppShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-28 bg-surface-2 overflow-hidden">
      <div className="container max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16" ref={ref}>
        {/* Left — Phone mockup */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[280px] h-[560px] rounded-[44px] bg-[#0D1B1E] shadow-[0_32px_80px_rgba(0,0,0,0.25)] p-[8px]">
              <div className="bg-background rounded-[36px] overflow-hidden h-full flex flex-col">
                {/* Status bar */}
                <div className="bg-primary h-12 flex items-center px-4 justify-between">
                  <span className="font-body text-[11px] text-primary-foreground/80">9:41</span>
                  <div className="bg-background/20 rounded-full px-4 py-1 text-[11px] text-primary-foreground/70 font-body">
                    Search doctors...
                  </div>
                  <span className="font-body text-[11px] text-primary-foreground/80">🔋</span>
                </div>

                {/* Calendar strip */}
                <div className="bg-surface px-3 py-2 border-b border-border">
                  <p className="font-heading font-semibold text-[11px] text-text-primary mb-1.5">Today</p>
                  <div className="flex gap-1.5">
                    {['12', '13', '14', '15', '16', '17', '18'].map((d, i) => (
                      <div
                        key={d}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-body font-medium ${
                          i === 2
                            ? 'bg-primary text-primary-foreground'
                            : 'text-text-muted'
                        }`}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="p-3 space-y-2 flex-1 overflow-hidden">
                  <p className="font-heading font-semibold text-[11px] text-text-primary">Schedule Today</p>
                  {[
                    { name: 'Dr. Aisha R.', spec: 'Cardiologist', time: '10:00 AM', color: 'bg-primary/10 border-primary/20' },
                    { name: 'Dr. Karim H.', spec: 'Pediatrician', time: '2:30 PM', color: 'bg-warning/10 border-warning/20' },
                  ].map((appt) => (
                    <div key={appt.name} className={`rounded-xl p-2.5 border ${appt.color}`}>
                      <p className="font-heading font-semibold text-[10px] text-text-primary">{appt.name}</p>
                      <p className="font-body text-[9px] text-text-muted">{appt.spec} · {appt.time}</p>
                    </div>
                  ))}

                  <div className="mt-2">
                    <p className="font-heading font-semibold text-[11px] text-text-primary mb-1.5">Reminder</p>
                    <div className="bg-accent rounded-xl p-2.5 border border-primary/20">
                      <p className="font-body text-[10px] text-text-body">Upcoming: Dr. Aisha Rahman consultation in 2 hours</p>
                    </div>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="h-11 border-t border-border flex items-center justify-around px-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${i === 0 ? 'bg-primary/20' : 'bg-border'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative hand illustration hint */}
            <div className="absolute -bottom-4 -right-8 w-20 h-20 rounded-full bg-surface opacity-50" />
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="font-heading font-bold text-[32px] sm:text-[42px] text-text-primary leading-[1.12]">
            Treatment is easy with{' '}
            <span className="font-display italic text-primary">CareConnect</span>
          </h2>
          <p className="mt-6 font-body text-[17px] text-text-body leading-[1.7] max-w-lg">
            Our intuitive app brings healthcare to your fingertips. Schedule appointments, video-consult with doctors, receive digital prescriptions, and manage your entire health journey — all in one place.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { title: 'Modern Instruments', desc: 'Cutting-edge diagnostic tools available to every clinician.' },
              { title: 'Easy Billing System', desc: 'Pay via bKash, Nagad, or card — no hassle, no hidden fees.' },
              { title: 'Qualified Doctors & Staff', desc: 'Every doctor is BMDC-verified with real patient reviews.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-[16px] text-text-primary">{item.title}</p>
                  <p className="font-body text-[15px] text-text-body leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToForm}
            className="group mt-10 bg-primary text-primary-foreground rounded-full px-8 py-4 text-[16px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center gap-2"
          >
            Get Early Access
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
