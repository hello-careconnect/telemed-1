import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { HowItWorks } from '@/components/HowItWorks';
import { DoctorsTeam } from '@/components/DoctorsTeam';
import { ForDoctors } from '@/components/ForDoctors';
import { PatientJourney } from '@/components/PatientJourney';
import { DoctorJourney } from '@/components/DoctorJourney';
import { HospitalJourney } from '@/components/HospitalJourney';
import { Testimonials } from '@/components/Testimonials';
import { AppShowcase } from '@/components/AppShowcase';
import { WaitlistForm } from '@/components/WaitlistForm';
import { IncentiveBlock } from '@/components/IncentiveBlock';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

import { CookieBanner } from '@/components/CookieBanner';
import { ExitIntent } from '@/components/ExitIntent';
import { LangOverlay } from '@/components/LangOverlay';
import { LangSwitch } from '@/components/LangSwitch';

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <PatientJourney />
        <ServicesSection />
        <DoctorJourney />
        <HospitalJourney />
        {/*<AboutSection />*/}
        <DoctorsTeam />
        {/* <ForDoctors /> */}
        {/* <AppShowcase /> */}
        {/* <Testimonials /> */}
        <IncentiveBlock />
        <WaitlistForm />
        <FAQSection />
      </main>
      <Footer />
      <CookieBanner />
      <ExitIntent />
      <LangOverlay />
      <LangSwitch />
    </div>
  );
};

export default Index;
