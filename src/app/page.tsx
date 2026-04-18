import { LocaleTransitionWrapper } from '@/components/LocaleTransitionWrapper';
import { Navbar } from '@/components/ui/navbar/Navbar';
import { Hero } from '@/modules/hero/Hero';
import { ProblemSection } from '@/modules/problem/ProblemSection';
import { FeaturesSection } from '@/modules/features/FeaturesSection';
import { FaqSection } from '@/modules/faq/FaqSection';
import { CtaSection } from '@/modules/cta/CtaSection';
import { WaitlistSection } from '@/modules/waitlist/WaitlistSection';
import { Footer } from '@/modules/footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <LocaleTransitionWrapper>
        <main className="min-h-screen bg-black">
          <section id="hero">
            <Hero />
          </section>
          <ProblemSection />
          <FeaturesSection />
          <FaqSection />
          <CtaSection />
          <WaitlistSection />
        </main>
        <Footer />
      </LocaleTransitionWrapper>
    </>
  );
}
