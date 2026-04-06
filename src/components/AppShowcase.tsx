import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Search, Calendar, User, Stethoscope, Pill, ClipboardList, MessageCircle, Bell, Video, ShieldCheck, CreditCard, FileText, HeartPulse, Clock } from 'lucide-react';
import { PhoneFrame } from './mockup/PhoneFrame';

const leftFeatures = [
  {
    icon: Video,
    title: 'HD Video Consults',
    desc: 'Crystal-clear calls with doctors, anytime.',
    iconColor: 'text-[hsl(168,60%,40%)]',
    bgColor: 'bg-[hsl(168,60%,40%,0.1)]',
  },
  {
    icon: CreditCard,
    title: 'Seamless Payments',
    desc: 'bKash, Nagad, or card — zero hassle.',
    iconColor: 'text-[hsl(28,70%,50%)]',
    bgColor: 'bg-[hsl(28,70%,50%,0.1)]',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Doctors',
    desc: 'BMDC-verified with real reviews.',
    iconColor: 'text-[hsl(210,60%,50%)]',
    bgColor: 'bg-[hsl(210,60%,50%,0.1)]',
  },
];

const rightFeatures = [
  {
    icon: FileText,
    title: 'Digital Prescriptions',
    desc: 'E-prescriptions sent straight to your phone.',
    iconColor: 'text-[hsl(270,50%,55%)]',
    bgColor: 'bg-[hsl(270,50%,55%,0.1)]',
  },
  {
    icon: HeartPulse,
    title: 'Health Tracking',
    desc: 'Monitor vitals and history in one place.',
    iconColor: 'text-[hsl(340,65%,55%)]',
    bgColor: 'bg-[hsl(340,65%,55%,0.1)]',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    desc: 'Book in seconds, get reminders automatically.',
    iconColor: 'text-[hsl(160,50%,42%)]',
    bgColor: 'bg-[hsl(160,50%,42%,0.1)]',
  },
];

const allFeatures = [...leftFeatures, ...rightFeatures];

interface PointerCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  iconColor: string;
  bgColor: string;
  side: 'left' | 'right';
  index: number;
  inView: boolean;
}

const PointerCard = ({ icon: Icon, title, desc, iconColor, bgColor, side, index, inView }: PointerCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ delay: 0.3 + index * 0.1, duration: 0.45, ease: 'easeOut' }}
    className={`relative group flex items-center ${side === 'right' ? 'flex-row-reverse' : ''}`}
  >
    {/* Card body */}
    <div className="relative flex-1 bg-background border border-border rounded-2xl p-4 hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Subtle gradient accent on the inner edge */}
      <div
        className={`absolute top-0 ${side === 'left' ? 'right-0' : 'left-0'} w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.2) 100%)' }}
      />
      <div className={`flex items-center gap-3 ${side === 'right' ? 'flex-row-reverse text-right' : ''}`}>
        <div className={`w-10 h-10 rounded-xl ${bgColor} ${iconColor} flex items-center justify-center shrink-0`}>
          <Icon className="w-[18px] h-[18px]" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-semibold text-[14px] text-text-primary leading-snug group-hover:text-primary transition-colors">{title}</p>
          <p className="font-body text-[12px] text-text-body leading-[1.5] mt-0.5">{desc}</p>
        </div>
      </div>
    </div>

    {/* Connector: line + dot pointing toward phone */}
    <div className={`flex items-center shrink-0 ${side === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className="w-5 xl:w-8 h-[2px] bg-gradient-to-r from-primary/20 to-primary/50" style={side === 'right' ? { background: 'linear-gradient(to left, rgba(var(--glow-color),0.2), rgba(var(--glow-color),0.5))' } : undefined} />
      <div className="w-2.5 h-2.5 rounded-full bg-primary/60 shrink-0 shadow-[0_0_6px_rgba(var(--glow-color),0.4)]" />
    </div>
  </motion.div>
);

const AppScreen = () => (
  <div
    className="relative w-full h-full overflow-y-auto overflow-x-hidden"
    style={{
      fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro Text', sans-serif",
      background: '#fff',
    }}
  >
    {/* Teal header zone */}
    <div style={{ background: '#0FA37F', position: 'relative' }}>
      {/* Status bar */}
      <div className="flex items-center justify-between px-3" style={{ height: 44, position: 'relative' }}>
        <span className="text-white" style={{ fontSize: 12, fontWeight: 600 }}>9:41</span>
        <div className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="10" width="2.5" height="4" rx="0.5" fill="white" />
            <rect x="5" y="7" width="2.5" height="7" rx="0.5" fill="white" />
            <rect x="9" y="4" width="2.5" height="10" rx="0.5" fill="white" />
            <rect x="13" y="1" width="2.5" height="13" rx="0.5" fill="white" opacity="0.35" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
            <path d="M8 12.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM8 9c1.8 0 3.4.75 4.55 1.95a.75.75 0 01-1.06 1.06A4.97 4.97 0 008 10.5a4.97 4.97 0 00-3.49 1.51.75.75 0 01-1.06-1.06A6.47 6.47 0 018 9zm0-3.5c2.76 0 5.26 1.12 7.07 2.93a.75.75 0 01-1.06 1.06A8.47 8.47 0 008 7a8.47 8.47 0 00-6.01 2.49.75.75 0 01-1.06-1.06A9.97 9.97 0 018 5.5z" />
          </svg>
          <svg width="20" height="10" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.5" />
            <rect x="2" y="2" width="16" height="8" rx="1.5" fill="white" />
            <path d="M23 4v4a2 2 0 000-4z" fill="white" fillOpacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center justify-center" style={{ height: 36, paddingLeft: 12, paddingRight: 12 }}>
        <div
          className="flex items-center gap-1.5 w-full"
          style={{
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.30)',
            borderRadius: 20,
            height: 30,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Search className="text-white" style={{ width: 11, height: 11, opacity: 0.8 }} />
          <span className="text-white" style={{ opacity: 0.75, fontSize: 11 }}>Search doctors...</span>
        </div>
      </div>
    </div>

    {/* White content area */}
    <div style={{ background: '#fff', borderRadius: '20px 20px 0 0', marginTop: -10, position: 'relative', zIndex: 5, paddingBottom: 70 }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: '#0D1B1E', margin: '14px 14px 10px 14px' }}>Today</p>

      {/* Date strip */}
      <div className="flex justify-between" style={{ padding: '0 14px' }}>
        {['12', '13', '14', '15', '16', '17', '18'].map((d) => (
          <div
            key={d}
            className="flex items-center justify-center"
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              fontSize: 11,
              fontWeight: d === '14' ? 700 : 500,
              color: d === '14' ? '#fff' : '#8AAAB0',
              background: d === '14' ? '#0FA37F' : 'transparent',
            }}
          >
            {d}
          </div>
        ))}
      </div>

      <p style={{ fontSize: 13, fontWeight: 700, color: '#0D1B1E', margin: '14px 14px 8px 14px' }}>Schedule Today</p>

      {/* Card 1 - Dr. Aisha */}
      <div className="flex items-center gap-2" style={{ background: '#E8F7F4', borderRadius: 12, padding: '10px 12px', margin: '0 14px 8px 14px' }}>
        <div className="flex items-center justify-center shrink-0" style={{ width: 28, height: 28, borderRadius: '50%', background: '#0FA37F', color: '#fff', fontSize: 10, fontWeight: 700 }}>AR</div>
        <div className="flex-1">
          <p style={{ fontSize: 12, fontWeight: 700, color: '#0D1B1E' }}>Dr. Aisha R.</p>
          <p style={{ fontSize: 10, fontWeight: 400, color: '#5A8A85' }}>Cardiologist · 10:00 AM</p>
        </div>
        <button style={{ background: '#0FA37F', color: '#fff', fontSize: 10, borderRadius: 10, padding: '3px 10px', fontWeight: 600, border: 'none' }}>Join</button>
      </div>

      {/* Card 2 - Dr. Karim */}
      <div className="flex items-center gap-2" style={{ background: '#FEF4EB', borderRadius: 12, padding: '10px 12px', margin: '0 14px 8px 14px' }}>
        <div className="flex items-center justify-center shrink-0" style={{ width: 28, height: 28, borderRadius: '50%', background: '#F4A74B', color: '#fff', fontSize: 10, fontWeight: 700 }}>KH</div>
        <div className="flex-1">
          <p style={{ fontSize: 12, fontWeight: 700, color: '#0D1B1E' }}>Dr. Karim H.</p>
          <p style={{ fontSize: 10, fontWeight: 400, color: '#B07840' }}>Pediatrician · 2:30 PM</p>
        </div>
        <button style={{ background: '#F4A74B', color: '#fff', fontSize: 10, borderRadius: 10, padding: '3px 10px', fontWeight: 600, border: 'none' }}>Join</button>
      </div>

      {/* Reminder */}
      <p style={{ fontSize: 13, fontWeight: 700, color: '#0D1B1E', margin: '14px 14px 8px 14px' }}>Reminder</p>
      <div className="flex items-start gap-2" style={{ background: '#E0F5F0', borderRadius: 12, padding: '10px 12px', margin: '0 14px' }}>
        <Bell style={{ width: 14, height: 14, color: '#0FA37F', flexShrink: 0, marginTop: 2 }} />
        <p style={{ fontSize: 11, fontWeight: 500, color: '#0D5C4A', lineHeight: 1.5 }}>
          Upcoming: Dr. Aisha Rahman consultation in 2 hours
        </p>
      </div>

      {/* Quick Actions */}
      <p style={{ fontSize: 10, fontWeight: 600, color: '#8AAAB0', textTransform: 'uppercase', letterSpacing: 0.5, margin: '16px 14px 8px 14px' }}>Quick Actions</p>
      <div className="flex justify-between" style={{ padding: '0 14px' }}>
        {[
          { icon: <Stethoscope style={{ width: 18, height: 18, color: '#0FA37F' }} />, label: 'Consult' },
          { icon: <Pill style={{ width: 18, height: 18, color: '#0FA37F' }} />, label: 'Prescriptions' },
          { icon: <ClipboardList style={{ width: 18, height: 18, color: '#0FA37F' }} />, label: 'Records' },
          { icon: <MessageCircle style={{ width: 18, height: 18, color: '#0FA37F' }} />, label: 'Chat' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center justify-center gap-1" style={{ width: 54, height: 54, background: '#F2FAF8', border: '1px solid #D4EDE9', borderRadius: 12 }}>
            {item.icon}
            <span style={{ fontSize: 8, fontWeight: 500, color: '#3D5155' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom tab bar */}
    <div className="absolute bottom-0 left-0 right-0" style={{ background: '#fff', borderTop: '1px solid #E8EEED', height: 60, zIndex: 20 }}>
      <div className="flex items-center justify-around" style={{ paddingTop: 6 }}>
        {[
          { icon: <Home style={{ width: 16, height: 16 }} />, label: 'Home', active: true },
          { icon: <Search style={{ width: 16, height: 16 }} />, label: 'Search', active: false },
          { icon: <Calendar style={{ width: 16, height: 16 }} />, label: 'Schedule', active: false },
          { icon: <User style={{ width: 16, height: 16 }} />, label: 'Profile', active: false },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5">
            <div className="flex items-center justify-center" style={{ color: tab.active ? '#0FA37F' : '#8AAAB0', background: tab.active ? '#E6F7F4' : 'transparent', borderRadius: 10, padding: tab.active ? '3px 8px' : '3px' }}>
              {tab.icon}
            </div>
            <span style={{ fontSize: 8, fontWeight: 500, color: tab.active ? '#0FA37F' : '#8AAAB0' }}>{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const AppShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-soft-img overflow-hidden">
      <div className="container max-w-[1140px] mx-auto px-6" ref={ref}>

        {/* Centered header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex items-center text-primary rounded-full text-sm font-medium font-body">
            Everything in one app
          </span>
          <h2 className="mt-2 font-heading font-bold text-[28px] sm:text-[36px] lg:text-[40px] text-text-primary leading-[1.12]">
            Treatment is easy with{' '}
            <span className="font-display text-primary">CareConnect</span>
          </h2>
          <p className="mt-3 font-body text-[15px] sm:text-[17px] text-text-body max-w-xl mx-auto">
            Schedule appointments, video-consult with doctors, receive digital prescriptions — all in one place.
          </p>
        </div>

        {/* Desktop: cards — phone — cards */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center gap-0">

          {/* Left cards */}
          <div className="flex flex-col justify-center gap-4 pr-0">
            {leftFeatures.map((f, i) => (
              <PointerCard key={f.title} {...f} side="left" index={i} inView={inView} />
            ))}
          </div>

          {/* Center phone — scaled down so header + phone + CTA fit in viewport */}
          <motion.div
            className="flex justify-center relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ transform: 'scale(0.72)', transformOrigin: 'center center', margin: '-50px 0' }}
          >
            <PhoneFrame screenKey="app-showcase">
              <AppScreen />
            </PhoneFrame>
          </motion.div>

          {/* Right cards */}
          <div className="flex flex-col justify-center gap-4 pl-0">
            {rightFeatures.map((f, i) => (
              <PointerCard key={f.title} {...f} side="right" index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Mobile: phone then card grid */}
        <div className="lg:hidden">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <PhoneFrame screenKey="app-showcase">
              <AppScreen />
            </PhoneFrame>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {allFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                className="group bg-background rounded-2xl border border-border p-3.5 hover:border-primary/50 transition-all duration-200"
              >
                <div className={`w-9 h-9 rounded-lg ${f.bgColor} ${f.iconColor} flex items-center justify-center mb-2.5`}>
                  <f.icon className="w-[16px] h-[16px]" strokeWidth={1.5} />
                </div>
                <p className="font-heading font-semibold text-[13px] text-text-primary leading-snug group-hover:text-primary transition-colors">{f.title}</p>
                <p className="font-body text-[11px] text-text-body leading-[1.5] mt-0.5">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-6 lg:mt-8">
          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-[16px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};
