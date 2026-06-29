import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Deliverables from '@/components/Deliverables';
import QuoteDivider from '@/components/QuoteDivider';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Deliverables />
      <QuoteDivider />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
