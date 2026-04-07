import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CredentialStrip } from './components/CredentialStrip';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonial } from './components/Testimonial';
import { Values } from './components/Values';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Industries } from './components/Industries';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContactModal = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
    setContactOpen(true);
  };
  const closeContactModal = () => setContactOpen(false);
  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#0D0D0D' }}>
      <Navigation openContactModal={openContactModal} />
      <main>
        <Hero openContactModal={openContactModal} />
        <CredentialStrip />
        <About />
        <Services />
        <Industries />
        <Testimonial />
        <Values />
        <Contact openContactModal={openContactModal} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={closeContactModal} />
    </div>
  );
}