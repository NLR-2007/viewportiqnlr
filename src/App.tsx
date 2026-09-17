import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureShowcase } from './components/FeatureShowcase';
import { SpecComparison } from './components/SpecComparison';
import { ArchitectureDeck } from './components/ArchitectureDeck';
import { PricingPrivacySection } from './components/PricingPrivacySection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LaunchingSoonModal } from './components/LaunchingSoonModal';
import { PrivacyStatement } from './pages/PrivacyStatement';

// Hash routes look like "#/privacy". Plain anchors ("#features") stay on the home page.
type Route = 'home' | 'privacy';

const routeFromHash = (): Route => (window.location.hash.startsWith('#/privacy') ? 'privacy' : 'home');

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [route, setRoute] = useState<Route>(routeFromHash);

  useEffect(() => {
    const onHashChange = () => {
      const next = routeFromHash();
      setRoute(next);
      // Coming back from a sub-page via a plain anchor: scroll once the home sections have rendered.
      const { hash } = window.location;
      if (next === 'home' && hash.length > 1 && !hash.startsWith('#/')) {
        requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const openModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-white text-black font-geist selection:bg-black selection:text-white">
      <Header onOpenModal={openModal} />
      <main className="bg-white">
        {route === 'privacy' ? (
          <PrivacyStatement onOpenModal={openModal} />
        ) : (
          <>
            <HeroSection onOpenModal={openModal} />
            <FeatureShowcase />
            <SpecComparison />
            <ArchitectureDeck />
            <PricingPrivacySection onOpenModal={openModal} />
            <CtaSection onOpenModal={openModal} />
          </>
        )}
      </main>
      <Footer onOpenModal={openModal} />

      <LaunchingSoonModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
