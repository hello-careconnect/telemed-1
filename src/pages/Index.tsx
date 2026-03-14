import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WaitlistForm } from '@/components/WaitlistForm';
import { StatsBar } from '@/components/StatsBar';
import { HowItWorks } from '@/components/HowItWorks';
import { ForDoctors } from '@/components/ForDoctors';
import { Testimonials } from '@/components/Testimonials';
import { IncentiveBlock } from '@/components/IncentiveBlock';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { CookieBanner } from '@/components/CookieBanner';
import { ExitIntent } from '@/components/ExitIntent';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <WaitlistForm />
        <StatsBar />
        <HowItWorks />
        <ForDoctors />
        <Testimonials />
        <IncentiveBlock />
        <FAQSection />
      </main>
      <Footer />
      <CookieBanner />
      <ExitIntent />
    </>
  );
};

export default Index;
