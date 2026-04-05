import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StatsBar } from '@/components/StatsBar';
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
        <StatsBar />
        <DoctorsTeam />
        <ForDoctors />
        <AppShowcase />
        {/* <Testimonials /> */}
        <WaitlistForm />
        <IncentiveBlock />
        <FAQSection />
      </main>
      <Footer />
      <CookieBanner />
      <ExitIntent />
    </div>
  );
};

export default Index;
