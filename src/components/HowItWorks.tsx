import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Users, Video, ClipboardList } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: 'STEP 01',
    title: "Share What's on Your Mind",
    body: 'Tell us your symptoms or describe your health concern. Our smart system matches you to the right specialist instantly.',
    num: '01',
  },
  {
    icon: Users,
    step: 'STEP 02',
    title: 'Match with the Right Doctor',
    body: 'Browse verified doctors by specialty, read real patient reviews, and choose the one that fits your needs and schedule.',
    num: '02',
  },
  {
    icon: Video,
    step: 'STEP 03',
    title: 'Talk Face-to-Face',
    body: 'Meet your doctor via secure HD video call or visit in-person. Get the care you need, when you need it — 24/7.',
    num: '03',
  },
  {
    icon: ClipboardList,
    step: 'STEP 04',
    title: 'Get Your Personalized Care Plan',
    body: 'Receive a digital prescription, order medicines, and get follow-up reminders — all from one platform.',
    num: '04',
  },
];

export const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-28 bg-background">
      <div className="container max-w-[1440px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Simple by design
          </span>
          <h2 className="mt-6 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.15]">
            How CareConnect{' '}
            <span className="font-display italic text-primary">works</span>
          </h2>
          <p className="mt-4 font-body text-[18px] text-text-body max-w-md mx-auto">
            From your first message to your care plan — it only takes 4 simple steps.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="group relative overflow-hidden bg-surface rounded-[24px] p-7 border border-border hover:bg-background hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-250"
            >
              {/* Watermark number */}
              <span className="absolute bottom-1 right-3 font-heading font-black text-[100px] text-surface-2 leading-[1] select-none pointer-events-none">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="bg-accent rounded-2xl w-12 h-12 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                </div>
                <p className="font-body font-medium text-[11px] text-primary tracking-[0.12em] uppercase mb-2">
                  {s.step}
                </p>
                <h3 className="font-heading font-semibold text-[18px] text-text-primary mb-3 leading-[1.3]">{s.title}</h3>
                <p className="font-body text-[14px] text-text-body leading-[1.65]">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
