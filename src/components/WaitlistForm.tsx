import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { User, Mail, ArrowRight, Loader2, CheckCircle, Stethoscope, BadgeCheck } from 'lucide-react';

const cities = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Other'];

export const WaitlistForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [role, setRole] = useState<'patient' | 'doctor' | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [particles, setParticles] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setParticles(true);
      setTimeout(() => setParticles(false), 600);
    }, 1500);
  };

  return (
    <section id="waitlist-form" className="bg-surface py-24 relative">
      <div className="container max-w-[1440px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-accent text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            Early Access
          </span>
          <h2 className="mt-6 font-heading font-bold text-[36px] sm:text-[42px] text-text-primary leading-[1.1]">
            Join the waitlist.
          </h2>
          <p className="mt-3 font-display italic text-primary text-[24px] sm:text-[28px]">
            Be first. Be cared for.
          </p>
          <p className="mt-4 font-body text-[18px] text-text-body max-w-lg mx-auto">
            First 500 signups receive a free General Physician consultation, worth BDT 300.
          </p>
        </div>

        {/* Form card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto bg-background rounded-[24px] sm:rounded-[32px] shadow-lg border border-border p-6 sm:p-10 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className={`space-y-5 transition-opacity duration-300 ${status === 'success' ? 'opacity-40 pointer-events-none' : ''}`}>
            {/* Name */}
            <div>
              <label className="block font-body font-medium text-[14px] text-text-body mb-2">Full name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted peer-focus:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="Your full name"
                  className="peer w-full h-[52px] rounded-xl border border-border pl-12 pr-4 font-body text-[15px] text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all bg-background"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-body font-medium text-[14px] text-text-body mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-[52px] rounded-xl border border-border pl-12 pr-4 font-body text-[15px] text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all bg-background"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-body font-medium text-[14px] text-text-body mb-2">Phone</label>
              <div className="flex gap-3">
                <div className="bg-surface-2 rounded-xl px-4 py-3 text-text-primary font-medium font-body flex items-center gap-2 shrink-0">
                  🇧🇩 +880
                </div>
                <input
                  type="tel"
                  placeholder="01X XXXX XXXX"
                  className="flex-1 h-[52px] rounded-xl border border-border px-4 font-body text-[15px] text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all bg-background"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block font-body font-medium text-[14px] text-text-body mb-2">City</label>
              <select className="w-full h-[52px] rounded-xl border border-border px-4 font-body text-[15px] text-text-primary focus:border-primary focus:ring-[3px] focus:ring-primary/15 outline-none transition-all bg-background appearance-none">
                <option value="">Select your city</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Role toggle */}
            <div>
              <label className="block font-body font-medium text-[14px] text-text-body mb-2">I am a…</label>
              <div className="grid grid-cols-2 gap-3">
                <RoleTile
                  icon={<User className="w-8 h-8" />}
                  title="Patient"
                  desc="Find & book doctors"
                  selected={role === 'patient'}
                  onClick={() => setRole('patient')}
                />
                <RoleTile
                  icon={<Stethoscope className="w-8 h-8" />}
                  title="Doctor"
                  desc="List your practice free"
                  selected={role === 'doctor'}
                  onClick={() => setRole('doctor')}
                />
              </div>

              <AnimatePresence>
                {role === 'doctor' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 bg-accent rounded-xl p-4 flex items-center gap-3">
                      <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                      <p className="font-body text-[14px] text-text-body">
                        Doctors get a free verified listing at launch.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit */}
            <div className="relative mt-6">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-primary text-primary-foreground rounded-full py-4 text-[17px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {status === 'idle' && (
                  <>
                    Claim My Spot — Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    You're on the list!
                  </span>
                )}
              </button>

              {/* Confetti particles */}
              {particles && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-ping"
                      style={{
                        backgroundColor: i % 2 === 0 ? '#0A9E8A' : '#22C55E',
                        transform: `rotate(${i * 30}deg) translateY(-40px)`,
                        animationDuration: '0.6s',
                        opacity: 0,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Below button */}
          <p className="text-center font-body text-[13px] text-text-muted mt-4">
            🔒 No spam. Unsubscribe anytime. First 500 get BDT 300 free consultation.
          </p>

          {/* Spots bar */}
          <div className="mt-4">
            <p className="font-body font-medium text-[14px] text-text-body mb-2">412 spots remaining</p>
            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: '18%' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoleTile = ({
  icon, title, desc, selected, onClick,
}: {
  icon: React.ReactNode; title: string; desc: string; selected: boolean; onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative rounded-2xl p-5 text-left transition-all duration-200 ${
      selected
        ? 'bg-accent border-2 border-primary'
        : 'bg-surface border-[1.5px] border-border hover:border-primary/30'
    }`}
  >
    <div className={`mb-2 ${selected ? 'text-primary' : 'text-text-muted'} transition-colors`}>
      {icon}
    </div>
    <p className="font-heading font-semibold text-[16px] text-text-primary">{title}</p>
    <p className="font-body text-[13px] text-text-muted">{desc}</p>
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: 'spring', duration: 0.2 }}
          className="absolute top-3 right-3"
        >
          <CheckCircle className="w-5 h-5 text-primary" />
        </motion.div>
      )}
    </AnimatePresence>
  </button>
);
