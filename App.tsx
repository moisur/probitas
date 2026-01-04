
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HorizontalGallery from './components/HorizontalGallery';
import ScratchRevealSection from './components/ScratchRevealSection';
import ImageCorridor from './components/ImageCorridor';
import TrustSection from './components/TrustSection';
import ArtisticFooter from './components/ArtisticFooter';
import TopographyBg from './components/TopographyBg';
import AboutPage from './components/AboutPage';
import ConseilPage from './components/ConseilPage';
import CommunicationPage from './components/CommunicationPage';
import CookiePolicy from './components/CookiePolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CGVFormation from './components/CGVFormation';
import ContactPage from './components/ContactPage';
import TestimonialsPage from './components/TestimonialsPage';
import QualiopiPage from './components/QualiopiPage';
import FormationPage from './components/FormationPage';
import PressePage from './components/PressePage';
import AgendaPage from './components/AgendaPage';
import PreventionPage from './components/PreventionPage';
import BoutiquePage from './components/BoutiquePage';
import MunicipalesPage from './components/MunicipalesPage';
import SensibilisationPage from './components/SensibilisationPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = React.useState<'home' | 'cookies' | 'privacy' | 'mentions' | 'cgv' | 'contact' | 'testimonials' | 'qualiopi' | 'formation' | 'presse' | 'agenda' | 'prevention' | 'conseil' | 'communication' | 'boutique' | 'municipales' | 'sensibilisation' | 'realisations'>('home');

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#cookies') {
        setCurrentView('cookies');
        window.scrollTo(0, 0);
      } else if (hash === '#confidentialite') {
        setCurrentView('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#mentions') {
        setCurrentView('mentions');
        window.scrollTo(0, 0);
      } else if (hash === '#cgv-formation') {
        setCurrentView('cgv');
        window.scrollTo(0, 0);
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo(0, 0);
      } else if (hash === '#temoignages') {
        setCurrentView('testimonials');
        window.scrollTo(0, 0);
      } else if (hash === '#qualiopi') {
        setCurrentView('qualiopi');
        window.scrollTo(0, 0);
      } else if (hash === '#presse') {
        setCurrentView('presse');
        window.scrollTo(0, 0);
      } else if (hash === '#agenda') {
        setCurrentView('agenda');
        window.scrollTo(0, 0);
      } else if (hash === '#prevention') {
        setCurrentView('prevention');
        window.scrollTo(0, 0);
      } else if (hash === '#conseil') {
        setCurrentView('conseil');
        window.scrollTo(0, 0);
      } else if (hash === '#communication') {
        setCurrentView('communication');
        window.scrollTo(0, 0);
      } else if (hash === '#boutique') {
        setCurrentView('boutique');
        window.scrollTo(0, 0);
      } else if (hash === '#municipales') {
        setCurrentView('municipales');
        window.scrollTo(0, 0);
      } else if (hash === '#sensibilisation' || hash === '#sensibilisation-ateliers' || hash === '#sensibilisation-articles') {
        setCurrentView('sensibilisation');
        if (hash === '#sensibilisation') window.scrollTo(0, 0);
      } else if (hash === '#realisations') {
        setCurrentView('realisations');
        window.scrollTo(0, 0);
      } else if (hash === '#formation' || hash === '#public' || hash === '#private' || hash === '#formation-surmesure') {
        setCurrentView('formation');
        // Scroll handling for anchors is done within the component or automatically if ID matches
        if (hash === '#formation') window.scrollTo(0, 0);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#0C2E59] min-h-screen text-white selection:bg-[#BF9B8E] selection:text-white font-sans">
      <TopographyBg />
      <Navbar />

      <main className="relative z-10">
        {currentView === 'home' ? (
          <>
            <div id="hero">
              <HeroSection />
            </div>

            <div id="a-propos">
              <AboutPage />
            </div>

            <ScratchRevealSection />
            <ImageCorridor />
            <HorizontalGallery />
            <TrustSection />

            <section className="py-40 bg-black/20 backdrop-blur-3xl border-t border-white/5 relative z-40">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-6xl font-cinzel font-black uppercase mb-8 leading-none tracking-tighter">
                      TÉMOIGNAGES <br /> <span className="text-[#BF9B8E]">CLIENTS.</span>
                    </h3>
                    <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg mb-10">
                      La confiance est la base de toute relation de probité. Découvrez les retours de nos partenaires publics et privés.
                    </p>
                    <div className="flex gap-4 items-center group cursor-pointer">
                      <div className="h-16 w-16 rounded-full border border-[#BF9B8E] flex items-center justify-center group-hover:bg-[#BF9B8E] transition-all duration-500">
                        <span className="text-[#BF9B8E] group-hover:text-white transition-colors text-2xl">→</span>
                      </div>
                      <span className="font-cinzel font-bold tracking-[0.3em] uppercase text-xs">Lire les témoignages</span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-4">
                    <div className="h-64 bg-white/5 rounded-2xl overflow-hidden border border-white/10 group">
                      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 cursor-pointer" />
                    </div>
                    <div className="h-64 bg-[#BF9B8E] rounded-2xl flex items-center justify-center p-8 rotate-3 shadow-2xl">
                      <p className="text-[#0C2E59] font-cinzel font-black text-3xl text-center leading-none tracking-tighter uppercase">Excellence & Intégrité</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : currentView === 'cookies' ? (
          <CookiePolicy />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentView === 'mentions' ? (
          <LegalNotice />
        ) : currentView === 'cgv' ? (
          <CGVFormation />
        ) : currentView === 'contact' ? (
          <ContactPage />
        ) : currentView === 'testimonials' ? (
          <TestimonialsPage />
        ) : currentView === 'qualiopi' ? (
          <QualiopiPage />
        ) : currentView === 'presse' ? (
          <PressePage />
        ) : currentView === 'agenda' ? (
          <AgendaPage />
        ) : currentView === 'prevention' ? (
          <PreventionPage />
        ) : currentView === 'conseil' ? (
          <ConseilPage />
        ) : currentView === 'communication' ? (
          <CommunicationPage />
        ) : currentView === 'boutique' ? (
          <BoutiquePage />
        ) : currentView === 'municipales' ? (
          <MunicipalesPage />
        ) : currentView === 'sensibilisation' ? (
          <SensibilisationPage />
        ) : currentView === 'realisations' ? (
          <PreventionPage />
        ) : (
          <FormationPage />
        )}
      </main>

      <ArtisticFooter />
    </div>
  );
};

export default App;
