import { Video, MapPin, Brain, FolderHeart, Star, CalendarCheck, Navigation, FileText, Activity } from 'lucide-react';
import { StickyPhoneMockup } from './StickyPhoneMockup';
import { FeatureRow, MobileFeatureCard } from './FeatureRow';
import { useActiveFeatureScroll } from '@/hooks/use-active-feature-scroll';
import {
  PatientScreen_VideoConsult,
  PatientScreen_NearbyHospitals,
  PatientScreen_AIMatching,
  PatientScreen_HealthRecords,
  PatientScreen_Reviews,
  PatientScreen_InstantBooking,
  PatientScreen_ClosestDoctor,
  PatientScreen_Prescription,
  PatientScreen_AIAnalysis,
} from './PatientScreens';

const patientFeatures = [
  { icon: Video, title: '24/7 Video Consultation', description: 'Connect with a licensed doctor any time of day or night from your phone or laptop. No travel, no waiting rooms. Encrypted video calls with digital prescriptions issued immediately after.', screen: <PatientScreen_VideoConsult /> },
  { icon: MapPin, title: 'Search Nearby Hospitals', description: 'Find verified hospitals and clinics within your area. Filter by specialty, distance, availability, and patient ratings. See real-time opening hours and get turn-by-turn directions.', screen: <PatientScreen_NearbyHospitals /> },
  { icon: Brain, title: 'AI-Powered Doctor Matching', description: 'Describe your symptoms in plain Bangla or English. Our system matches you with the right specialist based on your condition, location, and doctor success rates with similar cases.', screen: <PatientScreen_AIMatching /> },
  { icon: FolderHeart, title: 'Access to Health Records', description: 'All your prescriptions, lab reports, and consultation notes in one secure place. Share records with any doctor in seconds. Your medical history travels with you.', screen: <PatientScreen_HealthRecords /> },
  { icon: Star, title: 'Transparent and Real Reviews', description: 'Read verified patient reviews from real appointments. Star ratings, full review text, and doctor response rates, so you can choose with confidence.', screen: <PatientScreen_Reviews /> },
  { icon: CalendarCheck, title: 'Instant Booking', description: 'Book an in-person visit or video consultation in under 2 minutes. Pick your slot, confirm payment via bKash or Nagad, and receive your booking instantly.', screen: <PatientScreen_InstantBooking /> },
  { icon: Navigation, title: 'Closest Doctor Sorting', description: 'See doctors sorted by distance from your current location. No more calling 10 clinics. Find who is nearest and available right now.', screen: <PatientScreen_ClosestDoctor /> },
  { icon: FileText, title: 'Digital Prescriptions', description: 'Receive a verified digital prescription after every consultation. Download as PDF, share with any pharmacy, or order medicines directly from the app.', screen: <PatientScreen_Prescription /> },
  { icon: Activity, title: 'AI Health Data Analysis', description: 'Our system monitors patterns in your health data across appointments. Surface insights your doctors need to see. Available in Bangla and English.', screen: <PatientScreen_AIAnalysis /> },
];

export const PatientJourney = () => {
  const { activeFeature, featureRefs, setActiveFeature } = useActiveFeatureScroll(patientFeatures.length);

  return (
    <section id="patient-section" className="relative py-10 sm:py-14 lg:py-16 bg-dark-bg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover opacity-15" src="/videos/mockup-bg.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg/30 to-dark-bg" />
      </div>
      <div className="relative z-10 container max-w-[1140px] mx-auto px-6">
        <div className="max-w-xl mx-auto text-center mb-10">
          <span className="inline-flex items-center bg-[rgba(255,255,255,0.08)] text-primary rounded-full px-4 py-1.5 text-[13px] font-medium font-body border border-[rgba(255,255,255,0.1)]">
            For Patients
          </span>
          <h2 className="mt-4 font-heading font-bold text-[32px] sm:text-[40px] text-dark-text leading-[1.15]">
            Everything you need, in one place
          </h2>
          <p className="mt-3 font-body text-[18px] text-[rgba(255,255,255,0.6)]">
            From finding the right doctor to managing your health, CareConnect handles it all.
          </p>
        </div>

        <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div className="space-y-4">
            {patientFeatures.map((f, i) => (
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
          <StickyPhoneMockup
            activeScreen={patientFeatures[activeFeature].screen}
            screenKey={activeFeature}
          />
        </div>

        <div className="lg:hidden space-y-4">
          {patientFeatures.map((f, i) => (
            <MobileFeatureCard key={i} icon={f.icon} title={f.title} description={f.description} dark />
          ))}
        </div>
      </div>
    </section>
  );
};