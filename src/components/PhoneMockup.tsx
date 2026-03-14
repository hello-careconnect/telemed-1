import { motion } from 'framer-motion';

export const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Background shape */}
      <div
        className="absolute inset-0 -m-8 rounded-[40px] bg-surface-2 rotate-1"
        style={{ width: 500, height: 580 }}
      />

      {/* Phone */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
        className="relative z-10"
      >
        <div className="w-64 h-[520px] rounded-[40px] bg-[#0D1B1E] shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
          <div className="bg-background rounded-[34px] m-[6px] overflow-hidden h-[calc(100%-12px)] flex flex-col">
            {/* Header */}
            <div className="bg-primary h-14 flex items-center px-4">
              <div className="bg-background/20 rounded-full px-4 py-1.5 flex-1 text-[12px] text-primary-foreground/70 font-body">
                Search doctors...
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 p-3 space-y-2.5 overflow-hidden">
              <DoctorCard initials="AR" name="Dr. Aisha Rahman" spec="Cardiologist" rating="4.9" badge="Available Now" badgeColor="text-success bg-success/10" />
              <DoctorCard initials="KH" name="Dr. Karim" spec="Pediatrician" rating="4.8" badge="Today 3 PM" badgeColor="text-warning bg-warning/10" />
            </div>

            {/* Bottom nav */}
            <div className="h-12 border-t border-border flex items-center justify-around px-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className={`w-6 h-6 rounded-full ${i === 0 ? 'bg-primary/20' : 'bg-border'}`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <FloatingChip
        className="-left-16 top-12"
        delay={0}
        content={
          <>
            <p className="font-heading font-bold text-text-primary text-[15px]">⭐ 4.9</p>
            <p className="font-body text-[13px] text-text-muted">Average rating</p>
          </>
        }
      />
      <FloatingChip
        className="-right-12 bottom-24"
        delay={1.4}
        content={
          <>
            <div className="flex gap-1 mb-1">
              {[70, 90, 55].map((h, i) => (
                <div key={i} className="w-4 rounded-sm bg-primary" style={{ height: h * 0.3, opacity: 0.3 + i * 0.25 }} />
              ))}
            </div>
            <p className="font-body text-[13px] text-text-muted">127 reviews</p>
          </>
        }
      />
      <FloatingChip
        className="-right-8 top-1/2 -translate-y-1/2"
        delay={2.7}
        bg="bg-primary"
        content={
          <>
            <p className="font-body font-medium text-[14px] text-primary-foreground">🟢 Available</p>
            <p className="font-body text-[13px] text-primary-foreground/80">Now</p>
          </>
        }
      />
    </div>
  );
};

const DoctorCard = ({ initials, name, spec, rating, badge, badgeColor }: { initials: string; name: string; spec: string; rating: string; badge: string; badgeColor: string }) => (
  <div className="bg-background rounded-2xl p-3 border border-border">
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-[11px]">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-heading font-semibold text-[12px] text-text-primary truncate">{name}</p>
        <p className="font-body text-[10px] text-text-muted">{spec} · ⭐ {rating}</p>
      </div>
    </div>
    <div className="flex items-center justify-between mt-2">
      <span className={`text-[9px] font-medium font-body px-2 py-0.5 rounded-full ${badgeColor}`}>{badge}</span>
      <button className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-[10px] font-semibold font-body">Book</button>
    </div>
  </div>
);

const FloatingChip = ({ className, delay, content, bg = 'bg-background' }: { className: string; delay: number; content: React.ReactNode; bg?: string }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity, delay }}
    className={`absolute z-20 ${bg} rounded-2xl shadow-xl px-4 py-3 ${className}`}
  >
    {content}
  </motion.div>
);
