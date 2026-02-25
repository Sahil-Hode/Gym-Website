import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Membership from '@/components/Membership';
import Testimonials from '@/components/Testinomial';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About-us';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
