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
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PatientJourney />
        <DoctorJourney />
        <HospitalJourney />
        {/*<AboutSection />*/}
        <ServicesSection />
        <StatsBar />
        <HowItWorks />
        <DoctorsTeam />
        <ForDoctors />
        <AppShowcase />
        <Testimonials />
        <WaitlistForm />
        <IncentiveBlock />
        <FAQSection />
      </main>
      <Footer />
      <CookieBanner />
      <ExitIntent />
      <ThemeSwitcher />
    </>
  );
};

export default Index;
