import { LocaleTransitionWrapper } from '@/components/LocaleTransitionWrapper';
import { FeaturesSection } from '@/modules/features/FeaturesSection';
import { CtaSection } from '@/modules/cta/CtaSection';
import { WaitlistSection } from '@/modules/waitlist/WaitlistSection';
import { Footer } from '@/modules/footer/Footer';

export default function Home() {
  return (
    <>
      <LocaleTransitionWrapper>
        <main className="min-h-screen bg-black">
          <FeaturesSection />
          <CtaSection />
          <WaitlistSection />
        </main>
        <Footer />
      </LocaleTransitionWrapper>
    </>
  );
}
