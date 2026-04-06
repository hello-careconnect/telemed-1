import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { User, Mail, Loader2, CheckCircle, Stethoscope, BadgeCheck, Lock, Building2, Phone, MapPin, ChevronDown } from 'lucide-react';

const cities = ['Dhaka', 'Chattogram', 'Sylhet', 'Rajshahi', 'Other'];

export const WaitlistForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [role, setRole] = useState<'patient' | 'doctor' | 'hospital' | null>(null);
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
    <section id="waitlist-form" className="relative bg-soft-img py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-primary/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Early Access · Limited Spots
          </span>
          <h2 className="mt-4 font-heading font-bold text-[32px] sm:text-[40px] text-text-primary leading-[1.15]">
            Join the waitlist
          </h2>
          <p className="mt-3 font-body text-[18px] text-text-muted">
            First 500 signups receive a <span className="font-semibold text-text-body">free GP consultation</span>, worth BDT 300.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mx-auto bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-10 relative overflow-hidden border border-gray-100"
        >

          <form onSubmit={handleSubmit} className={`space-y-5 transition-opacity duration-300 ${status === 'success' ? 'opacity-40 pointer-events-none' : ''}`}>
            {/* Name & Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-[13px] text-text-body mb-1.5">Full name</label>
                <div className="relative group">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full h-11 rounded-lg border border-gray-200 pl-10 pr-3.5 font-body text-[14px] text-text-primary placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block font-body font-medium text-[13px] text-text-body mb-1.5">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-primary transition-colors" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 rounded-lg border border-gray-200 pl-10 pr-3.5 font-body text-[14px] text-text-primary placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Phone & City row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-[13px] text-text-body mb-1.5">Phone</label>
                <div className="relative group flex">
                  <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 border-r-0 rounded-l-lg px-3 text-[13px] font-medium text-text-body font-body shrink-0">
                    <span className="text-[15px]">🇧🇩</span> +880
                  </div>
                  <input
                    type="tel"
                    placeholder="01X XXXX XXXX"
                    className="flex-1 h-11 rounded-r-lg border border-gray-200 px-3.5 font-body text-[14px] text-text-primary placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body font-medium text-[13px] text-text-body mb-1.5">City</label>
                <div className="relative group">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400 group-focus-within:text-primary transition-colors" />
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select className="w-full h-11 rounded-lg border border-gray-200 pl-10 pr-9 font-body text-[14px] text-text-primary focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all bg-gray-50/50 focus:bg-white appearance-none">
                    <option value="">Select city</option>
                    {cities.map((c) => (<option key={c} value={c}>{c}</option>))}
                  </select>
                </div>
              </div>
            </div>

            {/* Role selector */}
            <div>
              <label className="block font-body font-medium text-[13px] text-text-body mb-2">I am a…</label>
              <div className="grid grid-cols-3 gap-2.5">
                <RoleTile icon={<User className="w-6 h-6" />} title="Patient" desc="Find & book doctors" selected={role === 'patient'} onClick={() => setRole('patient')} />
                <RoleTile icon={<Stethoscope className="w-6 h-6" />} title="Doctor" desc="List your practice" selected={role === 'doctor'} onClick={() => setRole('doctor')} />
                <RoleTile icon={<Building2 className="w-6 h-6" />} title="Hospital" desc="Manage facility" selected={role === 'hospital'} onClick={() => setRole('hospital')} />
              </div>
              <AnimatePresence>
                {role === 'doctor' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="mt-3 bg-emerald-50 border border-emerald-200/60 rounded-lg p-3 flex items-center gap-2.5">
                      <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-body text-[13px] text-text-body">Doctors get a free verified listing at launch.</p>
                    </div>
                  </motion.div>
                )}
                {role === 'hospital' && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <div className="mt-3 bg-emerald-50 border border-emerald-200/60 rounded-lg p-3 flex items-center gap-2.5">
                      <Building2 className="w-4 h-4 text-primary shrink-0" />
                      <p className="font-body text-[13px] text-text-body">Hospitals get free ERP onboarding at launch.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit */}
            <div className="relative pt-1">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-primary text-primary-foreground rounded-xl py-3.5 text-[15px] font-semibold font-body hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-80 active:scale-[0.99]"
              >
                {status === 'idle' && 'Claim My Free Consultation'}
                {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                {status === 'success' && <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> You're on the list!</span>}
              </button>
              {particles && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="absolute w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: i % 2 === 0 ? '#0A9E8A' : '#22C55E', transform: `rotate(${i * 30}deg) translateY(-40px)`, animationDuration: '0.6s', opacity: 0 }} />
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Footer info */}
          <div className="mt-5 flex flex-col items-center gap-3">
            <p className="font-body text-[12px] text-gray-400 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" strokeWidth={1.5} /> No spam. Unsubscribe anytime.
            </p>
            <div className="w-full max-w-xs">
              <div className="flex justify-between items-center mb-1.5">
                <p className="font-body text-[12px] text-gray-500">
                  <span className="font-semibold text-primary text-[13px]">412</span> of 500 spots left
                </p>
                <p className="font-body text-[11px] text-gray-400">18% claimed</p>
              </div>
              <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400" style={{ width: '18%' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoleTile = ({ icon, title, desc, selected, onClick }: { icon: React.ReactNode; title: string; desc: string; selected: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative rounded-xl p-3.5 sm:p-4 text-left transition-all duration-200 ${
      selected
        ? 'bg-primary/[0.06] border-[1.5px] border-primary shadow-sm shadow-primary/10'
        : 'bg-gray-50/80 border-[1.5px] border-gray-200/80 hover:border-primary/30 hover:bg-gray-50'
    }`}
  >
    <div className={`mb-1.5 transition-colors ${selected ? 'text-primary' : 'text-gray-400'}`}>{icon}</div>
    <p className="font-heading font-semibold text-[14px] text-text-primary leading-tight">{title}</p>
    <p className="font-body text-[11px] text-gray-400 mt-0.5 leading-snug">{desc}</p>
    <AnimatePresence>
      {selected && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ type: 'spring', duration: 0.2 }} className="absolute top-2.5 right-2.5">
          <CheckCircle className="w-4 h-4 text-primary" />
        </motion.div>
      )}
    </AnimatePresence>
  </button>
);
