import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Home, Search, Calendar, User, Stethoscope, Pill, ClipboardList, MessageCircle, Bell } from 'lucide-react';

const IPhoneFrame = () => {
  return (
    <div className="relative" style={{ width: 420, height: 820 }}>
      {/* Phone shell */}
      <div
        className="relative"
        style={{
          width: 393 + 24,
          height: 852 + 28,
          borderRadius: 48,
          background: '#3A3A3C',
          boxShadow: '0 40px 100px rgba(0,0,0,0.45), 0 0 0 1.5px #5A5A5E inset',
          margin: '0 auto',
        }}
      >
        {/* Left side buttons - Volume */}
        <div
          className="absolute"
          style={{
            left: -2.5,
            top: 160,
            width: 3,
            height: 32,
            borderRadius: '3px 0 0 3px',
            background: '#4A4A4C',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.3)',
          }}
        />
        <div
          className="absolute"
          style={{
            left: -2.5,
            top: 205,
            width: 3,
            height: 32,
            borderRadius: '3px 0 0 3px',
            background: '#4A4A4C',
            boxShadow: '-1px 0 2px rgba(0,0,0,0.3)',
          }}
        />
        {/* Right side button - Power */}
        <div
          className="absolute"
          style={{
            right: -2.5,
            top: 185,
            width: 3,
            height: 48,
            borderRadius: '0 3px 3px 0',
            background: '#4A4A4C',
            boxShadow: '1px 0 2px rgba(0,0,0,0.3)',
          }}
        />

        {/* Screen bezel (black) */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: 12,
            left: 12,
            right: 12,
            bottom: 16,
            borderRadius: 44,
            background: '#000',
          }}
        >
          {/* Screen content */}
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
              <div className="flex items-center justify-between px-4" style={{ height: 54, position: 'relative' }}>
                <span className="text-white" style={{ fontSize: 15, fontWeight: 600 }}>9:41</span>
                <div className="flex items-center gap-1.5">
                  {/* Signal bars */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="10" width="2.5" height="4" rx="0.5" fill="white" />
                    <rect x="5" y="7" width="2.5" height="7" rx="0.5" fill="white" />
                    <rect x="9" y="4" width="2.5" height="10" rx="0.5" fill="white" />
                    <rect x="13" y="1" width="2.5" height="13" rx="0.5" fill="white" opacity="0.35" />
                  </svg>
                  {/* WiFi */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                    <path d="M8 12.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM8 9c1.8 0 3.4.75 4.55 1.95a.75.75 0 01-1.06 1.06A4.97 4.97 0 008 10.5a4.97 4.97 0 00-3.49 1.51.75.75 0 01-1.06-1.06A6.47 6.47 0 018 9zm0-3.5c2.76 0 5.26 1.12 7.07 2.93a.75.75 0 01-1.06 1.06A8.47 8.47 0 008 7a8.47 8.47 0 00-6.01 2.49.75.75 0 01-1.06-1.06A9.97 9.97 0 018 5.5z" />
                  </svg>
                  {/* Battery */}
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
                    <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.5" />
                    <rect x="2" y="2" width="16" height="8" rx="1.5" fill="white" />
                    <path d="M23 4v4a2 2 0 000-4z" fill="white" fillOpacity="0.5" />
                  </svg>
                </div>
              </div>

              {/* Dynamic Island */}
              <div
                className="absolute"
                style={{
                  top: 12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 36,
                  borderRadius: 20,
                  background: '#000',
                  zIndex: 10,
                }}
              />

              {/* Search bar zone */}
              <div className="flex items-center justify-center" style={{ height: 46, paddingLeft: 16, paddingRight: 16 }}>
                <div
                  className="flex items-center gap-2 w-full"
                  style={{
                    background: 'rgba(255,255,255,0.18)',
                    border: '1.5px solid rgba(255,255,255,0.30)',
                    borderRadius: 24,
                    height: 38,
                    paddingLeft: 14,
                    paddingRight: 14,
                  }}
                >
                  <Search className="text-white" style={{ width: 14, height: 14, opacity: 0.8 }} />
                  <span className="text-white" style={{ opacity: 0.75, fontSize: 14 }}>Search doctors...</span>
                </div>
              </div>
            </div>

            {/* White content area with curved top */}
            <div style={{ background: '#fff', borderRadius: '28px 28px 0 0', marginTop: -14, position: 'relative', zIndex: 5, paddingBottom: 90 }}>
              {/* Today label */}
              <p style={{ fontSize: 20, fontWeight: 700, color: '#0D1B1E', margin: '20px 20px 14px 20px' }}>Today</p>

              {/* Date strip */}
              <div className="flex justify-between" style={{ padding: '0 20px' }}>
                {['12', '13', '14', '15', '16', '17', '18'].map((d) => (
                  <div
                    key={d}
                    className="flex items-center justify-center"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      fontSize: 15,
                      fontWeight: d === '14' ? 700 : 500,
                      color: d === '14' ? '#fff' : '#8AAAB0',
                      background: d === '14' ? '#0FA37F' : 'transparent',
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Schedule Today */}
              <p style={{ fontSize: 17, fontWeight: 700, color: '#0D1B1E', margin: '20px 20px 12px 20px' }}>Schedule Today</p>

              {/* Card 1 - Dr. Aisha */}
              <div
                className="flex items-center gap-3"
                style={{
                  background: '#E8F7F4',
                  borderRadius: 16,
                  padding: '16px 18px',
                  margin: '0 20px 10px 20px',
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#0FA37F',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  AR
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0D1B1E' }}>Dr. Aisha R.</p>
                  <p style={{ fontSize: 13, fontWeight: 400, color: '#5A8A85' }}>Cardiologist · 10:00 AM</p>
                </div>
                <button
                  style={{
                    background: '#0FA37F',
                    color: '#fff',
                    fontSize: 12,
                    borderRadius: 12,
                    padding: '4px 12px',
                    fontWeight: 600,
                    border: 'none',
                  }}
                >
                  Join
                </button>
              </div>

              {/* Card 2 - Dr. Karim */}
              <div
                className="flex items-center gap-3"
                style={{
                  background: '#FEF4EB',
                  borderRadius: 16,
                  padding: '16px 18px',
                  margin: '0 20px 10px 20px',
                }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#F4A74B',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  KH
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#0D1B1E' }}>Dr. Karim H.</p>
                  <p style={{ fontSize: 13, fontWeight: 400, color: '#B07840' }}>Pediatrician · 2:30 PM</p>
                </div>
                <button
                  style={{
                    background: '#F4A74B',
                    color: '#fff',
                    fontSize: 12,
                    borderRadius: 12,
                    padding: '4px 12px',
                    fontWeight: 600,
                    border: 'none',
                  }}
                >
                  Join
                </button>
              </div>

              {/* Reminder */}
              <p style={{ fontSize: 17, fontWeight: 700, color: '#0D1B1E', margin: '20px 20px 12px 20px' }}>Reminder</p>
              <div
                className="flex items-start gap-3"
                style={{
                  background: '#E0F5F0',
                  borderRadius: 16,
                  padding: '14px 16px',
                  margin: '0 20px',
                }}
              >
                <Bell style={{ width: 20, height: 20, color: '#0FA37F', flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 14, fontWeight: 500, color: '#0D5C4A', lineHeight: 1.5 }}>
                  Upcoming: Dr. Aisha Rahman consultation in 2 hours
                </p>
              </div>

              {/* Quick Actions */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#8AAAB0',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                  margin: '24px 20px 12px 20px',
                }}
              >
                Quick Actions
              </p>
              <div className="flex justify-between" style={{ padding: '0 20px' }}>
                {[
                  { icon: <Stethoscope style={{ width: 24, height: 24, color: '#0FA37F' }} />, label: 'Consult' },
                  { icon: <Pill style={{ width: 24, height: 24, color: '#0FA37F' }} />, label: 'Prescriptions' },
                  { icon: <ClipboardList style={{ width: 24, height: 24, color: '#0FA37F' }} />, label: 'Records' },
                  { icon: <MessageCircle style={{ width: 24, height: 24, color: '#0FA37F' }} />, label: 'Chat' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-1.5"
                    style={{
                      width: 72,
                      height: 72,
                      background: '#F2FAF8',
                      border: '1.5px solid #D4EDE9',
                      borderRadius: 16,
                    }}
                  >
                    {item.icon}
                    <span style={{ fontSize: 11, fontWeight: 500, color: '#3D5155' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom tab bar - fixed */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                background: '#fff',
                borderTop: '1px solid #E8EEED',
                height: 80,
                zIndex: 20,
              }}
            >
              <div className="flex items-center justify-around" style={{ paddingTop: 8 }}>
                {[
                  { icon: <Home style={{ width: 22, height: 22 }} />, label: 'Home', active: true },
                  { icon: <Search style={{ width: 22, height: 22 }} />, label: 'Search', active: false },
                  { icon: <Calendar style={{ width: 22, height: 22 }} />, label: 'Schedule', active: false },
                  { icon: <User style={{ width: 22, height: 22 }} />, label: 'Profile', active: false },
                ].map((tab) => (
                  <div key={tab.label} className="flex flex-col items-center gap-0.5">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        color: tab.active ? '#0FA37F' : '#8AAAB0',
                        background: tab.active ? '#E6F7F4' : 'transparent',
                        borderRadius: 12,
                        padding: tab.active ? '4px 12px' : '4px',
                      }}
                    >
                      {tab.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: tab.active ? '#0FA37F' : '#8AAAB0',
                      }}
                    >
                      {tab.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Home indicator */}
              <div
                className="mx-auto"
                style={{
                  width: 134,
                  height: 5,
                  borderRadius: 3,
                  background: 'rgba(26,26,26,0.2)',
                  marginTop: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AppShowcase = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="overflow-hidden py-12 lg:py-16"
      style={{
        background: 'radial-gradient(ellipse at 40% 60%, #d4ede9 0%, #e8f5f2 40%, #f0f4f3 100%)',
      }}
    >
      <div className="container max-w-[1140px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-16" ref={ref}>
        {/* Left — Phone mockup */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="origin-top phone-scale-wrapper"
            style={{
              transform: 'var(--phone-transform)',
              height: 'var(--phone-height)',
            } as React.CSSProperties}
          >
            <IPhoneFrame />
          </div>
        </motion.div>

        {/* Right — Text */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="font-heading font-bold text-[28px] sm:text-[32px] lg:text-[42px] text-text-primary leading-[1.12]">
            Treatment is easy with{' '}
            <span className="font-display italic text-primary">CareConnect</span>
          </h2>
          <p className="mt-4 lg:mt-6 font-body text-[15px] lg:text-[17px] text-text-body leading-[1.7] max-w-lg mx-auto lg:mx-0">
            Our intuitive app brings healthcare to your fingertips. Schedule appointments, video-consult with doctors, receive digital prescriptions, and manage your entire health journey, all in one place.
          </p>

          <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4 text-left max-w-lg mx-auto lg:mx-0">
            {[
              { title: 'Modern Instruments', desc: 'Cutting-edge diagnostic tools available to every clinician.' },
              { title: 'Easy Billing System', desc: 'Pay via bKash, Nagad, or card, no hassle, no hidden fees.' },
              { title: 'Qualified Doctors & Staff', desc: 'Every doctor is BMDC-verified with real patient reviews.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-[15px] lg:text-[16px] text-text-primary">{item.title}</p>
                  <p className="font-body text-[14px] lg:text-[15px] text-text-body leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={scrollToForm}
              className="group mt-8 lg:mt-10 bg-primary text-primary-foreground rounded-full px-8 py-4 text-[16px] font-semibold font-body shadow-teal-glow hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-teal-glow-lg transition-all duration-200 flex items-center gap-2"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
