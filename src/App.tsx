import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeatureShowcase } from './components/FeatureShowcase';
import { SpecComparison } from './components/SpecComparison';
import { ArchitectureDeck } from './components/ArchitectureDeck';
import { PricingPrivacySection } from './components/PricingPrivacySection';
import { Footer } from './components/Footer';
import { PrivacyStatement } from './pages/PrivacyStatement';
import { SupportPage } from './pages/SupportPage';

// Hash routes look like "#/privacy". Plain anchors ("#features") stay on the home page.
type Route = 'home' | 'privacy' | 'support';

const routeFromHash = (): Route => {
  const { hash } = window.location;
  if (hash.startsWith('#/privacy')) return 'privacy';
  if (hash.startsWith('#/support')) return 'support';
  return 'home';
};

export const App: React.FC = () => {
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
    // On a fresh load the browser jumps to the anchor before React has rendered, so do it again now.
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6">
      <Header />
      <main>
        {route === 'privacy' ? (
          <PrivacyStatement />
        ) : route === 'support' ? (
          <SupportPage />
        ) : (
          <>
            <HeroSection />
            <FeatureShowcase />
            <SpecComparison />
            <ArchitectureDeck />
            <PricingPrivacySection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
