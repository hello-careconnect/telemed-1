import { Server, ListOrdered, Clock, LayoutDashboard, Monitor } from 'lucide-react';
import { StickyPhoneMockup } from './StickyPhoneMockup';
import { FeatureRow, MobileFeatureCard } from './FeatureRow';
import { useActiveFeatureScroll } from '@/hooks/use-active-feature-scroll';
import {
  HospitalScreen_ERP,
  HospitalScreen_Queue,
  HospitalScreen_Scheduling,
  HospitalScreen_OPD,
  HospitalScreen_TV,
} from './HospitalScreens';

const hospitalFeatures = [
  { icon: Server, title: 'ERP System', description: 'A unified system connecting your OPD, pharmacy, billing, and records. Reduce manual coordination, eliminate data silos, and operate every department from one interface.', screen: <HospitalScreen_ERP /> },
  { icon: ListOrdered, title: 'Intelligent Queue Manager', description: 'Replace chaotic waiting rooms with a smart digital queue. Patients check in via phone or reception. Staff see real-time status. Delays update automatically.', subFeatures: ['Reduced wait time and chaos at OPD', 'Higher appointment reliability', "Efficient utilisation of doctor's time", 'Real-time patient status: check-in, check-out, no-show, late arrivals, wait time'], screen: <HospitalScreen_Queue /> },
  { icon: Clock, title: 'Smart Scheduling Engine', description: 'Appointment duration calculated from specialty, visit type, and historical data. Doctor calendars modelled as virtual queues. SLAs auto-applied based on appointment type.', subFeatures: ["Doctor's calendar modelled as a virtual queue", 'Duration based on specialty and historical data', 'SLAs for confirmed, waitlisted, and walk-in patients'], screen: <HospitalScreen_Scheduling /> },
  { icon: LayoutDashboard, title: 'OPD Management System', description: 'A single interface manages multiple centers, departments, and doctors simultaneously. Algorithm-driven scheduling with minimal manual intervention.', subFeatures: ['Increases doctor yield by up to 20%', 'Reduces patient wait time by up to 8%', 'Single interface for multiple centers and departments', 'Enables easy scheduling for resources and health checkups'], screen: <HospitalScreen_OPD /> },
  { icon: Monitor, title: 'TV Queue Management System', description: 'Display live queue status on waiting room screens. Dynamic updates reflect changes instantly. Handle online and walk-in patients from one unified view.', subFeatures: ['Dynamic queuing automatically reflects schedule changes and delays', 'Multiple doctor OPD on one screen', 'Unified queue for online appointments and walk-in patients'], screen: <HospitalScreen_TV /> },
];

export const HospitalJourney = () => {
  const { activeFeature, featureRefs, setActiveFeature } = useActiveFeatureScroll(hospitalFeatures.length);

  return (
    <section id="hospital-section" className="relative py-10 sm:py-14 lg:py-16 bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover opacity-15" src="/videos/mockup-bg.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/30 to-dark-bg" />
      </div>
      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="inline-flex items-center bg-[rgba(255,255,255,0.08)] text-dark-text rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-[rgba(255,255,255,0.1)]">
            For Hospitals and Clinics
          </span>
          <h2 className="mt-4 font-heading font-bold text-[32px] sm:text-[40px] text-dark-text leading-[1.15]">
            Run smarter operations from every touchpoint
          </h2>
          <p className="mt-3 font-body text-[18px] text-[rgba(255,255,255,0.6)]">
            A complete digital infrastructure for modern healthcare facilities in Bangladesh.
          </p>
        </div>

        <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="space-y-4">
            {hospitalFeatures.map((f, i) => (
              <FeatureRow
                key={i}
                ref={(el) => { featureRefs.current[i] = el; }}
                index={i}
                isActive={activeFeature === i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                subFeatures={f.subFeatures}
                onClick={() => setActiveFeature(i)}
                dark
              />
            ))}
          </div>
          <StickyPhoneMockup
            activeScreen={hospitalFeatures[activeFeature].screen}
            screenKey={activeFeature}
          />
        </div>

        <div className="lg:hidden space-y-4">
          {hospitalFeatures.map((f, i) => (
            <MobileFeatureCard key={i} icon={f.icon} title={f.title} description={f.description} subFeatures={f.subFeatures} dark />
          ))}
        </div>
      </div>
    </section>
  );
};