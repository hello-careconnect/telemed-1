import { BadgeCheck, Users, FileText, BarChart3, CalendarClock, UserCog } from 'lucide-react';
import { StickyPhoneMockup } from './StickyPhoneMockup';
import { FeatureRow, MobileFeatureCard } from './FeatureRow';
import { useActiveFeatureScroll } from '@/hooks/use-active-feature-scroll';
import {
  DoctorScreen_Listing,
  DoctorScreen_Patients,
  DoctorScreen_Prescription,
  DoctorScreen_Analytics,
  DoctorScreen_Scheduler,
  DoctorScreen_ProfileEditor,
} from './DoctorScreens';

const doctorFeatures = [
  { icon: BadgeCheck, title: 'Free Verified Listing', description: 'Create your professional profile at no cost. Include qualifications, specialties, chamber hours, and accept online bookings. BMDC verification badge increases patient trust immediately.', screen: <DoctorScreen_Listing /> },
  { icon: Users, title: 'Reach Verified Patients', description: 'Patients on CareConnect are verified and serious. No spam bookings, no no-shows. Build your reputation with genuine reviews that are tied to real appointments.', screen: <DoctorScreen_Patients /> },
  { icon: FileText, title: 'Issue Digital Prescriptions', description: 'Write and send prescriptions digitally during or after any consultation. Patients receive a PDF immediately. Your records stay organized automatically.', screen: <DoctorScreen_Prescription /> },
  { icon: BarChart3, title: 'Practice Analytics Dashboard', description: 'See your patient reach, profile views, booking rates, and revenue trends in one clean dashboard. Know which specialties drive the most appointments.', screen: <DoctorScreen_Analytics /> },
  { icon: CalendarClock, title: 'Smart Appointment Scheduler', description: 'Manage your full schedule from your phone. Receive appointment reminders, see patient status at a glance, approve rescheduling requests, and reduce no-shows automatically.', screen: <DoctorScreen_Scheduler /> },
  { icon: UserCog, title: 'Advanced Profile Editor', description: 'Control every aspect of your public profile. Update chamber times, fees, accepted insurance, and photos. Add services. Manage your online presence as professionally as your practice.', screen: <DoctorScreen_ProfileEditor /> },
];

export const DoctorJourney = () => {
  const { activeFeature, featureRefs, setActiveFeature } = useActiveFeatureScroll(doctorFeatures.length);

  return (
    <section id="doctor-section" className="relative py-10 sm:py-14 lg:py-16 bg-dark-bg">
      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="mx-auto text-center mb-10">
          <span className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-[13px] font-medium font-body">
            For Doctors
          </span>
          <h2 className="mt-4 font-heading font-bold text-[32px] sm:text-[40px] text-dark-text leading-[1.15]">
            Grow your practice with CareConnect
          </h2>
          <p className="mt-3 font-body text-[18px] text-[rgba(255,255,255,0.6)]">
            From verified listing to analytics. Everything you need to manage and grow your patient base.
          </p>
        </div>

        <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
          <StickyPhoneMockup
            activeScreen={doctorFeatures[activeFeature].screen}
            screenKey={activeFeature}
          />
          <div className="space-y-4">
            {doctorFeatures.map((f, i) => (
              <FeatureRow
                key={i}
                ref={(el) => { featureRefs.current[i] = el; }}
                index={i}
                isActive={activeFeature === i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                onClick={() => setActiveFeature(i)}
                dark
              />
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-4">
          {doctorFeatures.map((f, i) => (
            <MobileFeatureCard key={i} icon={f.icon} title={f.title} description={f.description} dark />
          ))}
        </div>
      </div>
    </section>
  );
};
