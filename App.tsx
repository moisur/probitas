
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ScrollToHashElement from './components/ScrollToHashElement';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HorizontalGallery from './components/HorizontalGallery';
import ScratchRevealSection from './components/ScratchRevealSection';
import ImageCorridor from './components/ImageCorridor';
import TrustSection from './components/TrustSection';
import ArtisticFooter from './components/ArtisticFooter';
import TopographyBg from './components/TopographyBg';
import HomePage from './components/HomePage';
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
import FormationDetailPage from './components/FormationDetailPage';
import PressePage from './components/PressePage';
import AgendaPage from './components/AgendaPage';
import PreventionPage from './components/PreventionPage';
import BoutiquePage from './components/BoutiquePage';
import MunicipalesPage from './components/MunicipalesPage';
import SensibilisationPage from './components/SensibilisationPage';
import BlogPage from './components/BlogPage';

import BlogPostPage from './components/BlogPostPage';
import ContactModal from './components/ContactModal';
import { TestimonialSlider } from './components/TestimonialSlider';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  return (
    <div className="bg-[#0C2E59] min-h-screen text-white selection:bg-[#BF9B8E] selection:text-white font-sans">
      <TopographyBg />
      <ScrollToHashElement />
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <main className="relative z-10 w-full">
        <Routes>
          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <SEO
                title="Probitas Conseil | Gestion de Patrimoine & Compliance"
                description="Probitas Conseil accompagne les acteurs publics et privés dans l'éthique, la conformité Sapin II et la gestion de patrimoine."
              />
              <div id="hero">
                <HeroSection />
              </div>
              <HomePage onOpenContact={() => setIsContactModalOpen(true)} />
              <ScratchRevealSection />
              <ImageCorridor />
              <HorizontalGallery />
              <TrustSection />

              <section className="py-40 bg-black/20 backdrop-blur-3xl border-t border-white/5 relative z-40 overflow-hidden">
                <div className="container mx-auto px-6 mb-20">
                  <div className="flex flex-col md:flex-row gap-20 items-end justify-between">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-6xl font-cinzel font-black uppercase mb-8 leading-none tracking-tighter">
                        TÉMOIGNAGES <br /> <span className="text-[#BF9B8E]">CLIENTS.</span>
                      </h3>
                      <p className="text-white/50 text-xl font-light leading-relaxed max-w-lg">
                        La confiance est la base de toute relation de probité. Découvrez les retours de nos partenaires publics et privés.
                      </p>
                    </div>
                    <Link to="/temoignages" className="flex gap-4 items-center group cursor-pointer mb-2">
                      <div className="h-16 w-16 rounded-sm border border-[#BF9B8E] flex items-center justify-center group-hover:bg-[#BF9B8E] transition-all duration-500">
                        <span className="text-[#BF9B8E] group-hover:text-white transition-colors text-2xl">→</span>
                      </div>
                      <span className="font-cinzel font-bold tracking-[0.3em] uppercase text-xs">Explorer tout le mur</span>
                    </Link>
                  </div>
                </div>

                <div className="h-[600px] md:h-[800px] w-full">
                  <TestimonialSlider limit={3} />
                </div>
              </section>
            </>
          } />

          {/* PAGES */}
          <Route path="/a-propos" element={<><SEO title="À Propos - Probitas" description="Découvrez l'équipe et les valeurs de Probitas Conseil." /><AboutPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/formations" element={<><SEO title="Formations Anticorruption - Probitas" description="Formations Sapin II, éthique publique et gestion des risques pour entreprises et collectivités." /><FormationPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/formations/:slug" element={<FormationDetailPage onOpenContact={() => setIsContactModalOpen(true)} />} />

          <Route path="/conseil" element={<><SEO title="Conseil & Audit - Probitas" description="Audit, cartographie des risques et conseil en conformité Sapin II." /><ConseilPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/communication" element={<><SEO title="Communication de Crise & Éthique" description="Stratégie de communication sensible et valorisation de l'intégrité." /><CommunicationPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          <Route path="/blog" element={<><SEO title="Le Blog - Analyses & Veille" description="Analyses juridiques, décryptages éthiques et actualité de la compliance." /><BlogPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/blog/:id" element={<><BlogPostPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          <Route path="/contact" element={<><SEO title="Contact - Probitas" description="Contactez-nous pour un diagnostic ou une formation." /><ContactPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/temoignages" element={<TestimonialsPage onOpenContact={() => setIsContactModalOpen(true)} />} />
          <Route path="/qualiopi" element={<><SEO title="Certification Qualiopi" description="Notre engagement qualité." /><QualiopiPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/presse" element={<><SEO title="Espace Presse" description="Retombées presse et communiqués." /><PressePage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/agenda" element={<><SEO title="Agenda & Événements" description="Retrouvez-nous lors de nos prochains événements." /><AgendaPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          <Route path="/prevention" element={<><SEO title="Prévention" description="Outils et méthodes de prévention." /><PreventionPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/realisations" element={<><SEO title="Nos Réalisations" description="Cas clients et missions réalisées." /><PreventionPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          <Route path="/boutique" element={<><SEO title="La Boutique" description="Outils pédagogiques et goodies éthiques." /><BoutiquePage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/municipales-2026" element={<><SEO title="Municipales 2026" description="Accompagnement éthique des campagnes électorales." /><MunicipalesPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/sensibilisation" element={<><SEO title="Sensibilisation & Workshops" description="Ateliers et conférences pour diffuser la culture de l'intégrité." /><SensibilisationPage onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          <Route path="/politique-cookies" element={<><SEO title="Politique de Cookies" description="Gestion de vos données." /><CookiePolicy onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/confidentialite" element={<><SEO title="Politique de Confidentialité" description="RGPD et vie privée." /><PrivacyPolicy onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/mentions-legales" element={<><SEO title="Mentions Légales" description="Informations légales." /><LegalNotice onOpenContact={() => setIsContactModalOpen(true)} /></>} />
          <Route path="/cgv" element={<><SEO title="CGV Formation" description="Conditions générales de vente." /><CGVFormation onOpenContact={() => setIsContactModalOpen(true)} /></>} />

          {/* Catch-all / 404 - Redirect to Home for now or 404 page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <ArtisticFooter />
    </div>
  );
};

export default App;
