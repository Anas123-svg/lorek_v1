import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CredentialStrip } from './components/CredentialStrip';
import { About } from './components/About';
import { TrustedBySlider } from './components/TrustedBySlider';
import { Industries } from './components/Industries';
import { Services } from './components/Services';
import { Testimonial } from './components/Testimonial';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation />
      <main>
        <Hero />
        <CredentialStrip />
        <About />
        <Services />
                <Industries />

        <Testimonial />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}