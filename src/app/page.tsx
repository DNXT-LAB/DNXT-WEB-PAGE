import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import CvcTechnology from '@/components/CvcTechnology';
import DnxtToken from '@/components/DnxtToken';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <CvcTechnology />
      <DnxtToken />
      <Footer />
    </main>
  );
} 