import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ConseilPage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    "Programme de conformité complet",
    "Dépositif d’alerte (Sapin II)",
    "Évaluation des tiers",
    "Codes de conduite éthique",
    "Contrôles internes & comptables",
    "Accompagnement enquête interne",
    "Évaluation & Atténuation des risques",
    "Diagnostic du dispositif existant"
  ];

  return (
    <div className="min-h-screen bg-[#0C2E59] text-white pt-32 md:pt-48 pb-40 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10">

        {/* Editorial Header - AgendaPage Style */}
        <header className="mb-32 relative">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#BF9B8E]" />
              <span className="text-[#BF9B8E] font-bold text-[10px] uppercase tracking-[0.4em]">Conseil & Stratégie</span>
              <div className="h-[2px] w-12 bg-[#BF9B8E]" />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[9vw] font-black tracking-tighter leading-[0.9] md:leading-[0.85] text-white uppercase">
              CONFORMITÉ <br />
              <span className="italic font-light text-white/40">sapin ii.</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-200/60 font-light max-w-xl leading-snug mt-8">
              Déployez un programme anticorruption robuste, éthique et adapté à vos risques réels.
            </p>
          </div>
        </header>

        {/* Signature Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="bg-[#BF9B8E] p-12 rounded-sm text-[#0C2E59] shadow-2xl">
            <h3 className="text-3xl font-cinzel font-black uppercase mb-6">Diagnostic Flash</h3>
            <p className="font-bold text-xl mb-8 opacity-80 leading-tight">Plan d'action concret sous 90 jours pour sécuriser votre organisation.</p>
            <ul className="space-y-4 mb-12 font-medium">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#0C2E59]" /> Audit rapide du dispositif existant</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#0C2E59]" /> Identification des zones de vulnérabilité</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#0C2E59]" /> Feuille de route priorisée & pragmatique</li>
            </ul>
            <button onClick={onOpenContact} className="w-full bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#0C2E59] transition-all duration-500">Déclencher le diagnostic</button>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-sm">
            <h3 className="text-3xl font-cinzel font-black text-[#BF9B8E] uppercase mb-6">Pack Mise à Niveau</h3>
            <p className="text-white/60 text-xl mb-8 italic leading-tight">Le socle complet pour une conformité sans zones grises.</p>
            <ul className="space-y-4 mb-12 text-white/70">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#BF9B8E]" /> Cartographie des risques interactive</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#BF9B8E]" /> Rédaction & déploiement du Code de conduite</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-sm bg-[#BF9B8E]" /> Kit complet d'outillage & procédures AFA</li>
            </ul>
            <button
              onClick={onOpenContact}
              className="group w-full flex items-center justify-center gap-3 bg-[#BF9B8E] text-[#0C2E59] px-8 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-500 shadow-xl shadow-[#BF9B8E]/10"
            >
              Discuter de votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Missions à la Carte Section */}
        <div id="conseil-tailored" className="mb-20 pt-20 border-t border-white/5">
          <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">SUR-MESURE</span>
          <h2 className="text-4xl md:text-6xl font-cinzel font-black text-white uppercase tracking-tighter mb-12">Missions à la <span className="text-[#BF9B8E]">Carte.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <div className="space-y-10 text-white/70 text-lg font-light leading-relaxed mb-20">
              <p>Nous vous accompagnons dans la diffusion de la culture de l’éthique au sein de votre organisation via des programmes axés sur la prévention, la détection et l'atténuation des risques de probité.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-12 border-y border-white/5">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-default">
                    <div className="w-2 h-2 rotate-45 border border-[#BF9B8E] group-hover:bg-[#BF9B8E] transition-all duration-300" />
                    <span className="text-xs font-cinzel tracking-widest uppercase group-hover:text-white transition-colors">{service}</span>
                  </div>
                ))}
              </div>

              <p className="italic text-white/40 text-[10px] leading-relaxed uppercase tracking-wider">
                Nos prestations sont menées en collaboration avec des consultants et avocats experts du droit de la fonction publique, du droit du travail et de la compliance. Le conseil proposé est stratégique et se situe dans le strict respect de la Loi n° 71-1130.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 sticky top-40 rounded-sm">
              <h3 className="text-[#BF9B8E] font-cinzel font-bold mb-6 text-xl tracking-widest">ADAPTABILITÉ</h3>
              <p className="text-white/50 text-sm mb-10 leading-relaxed uppercase tracking-[0.05em] font-light">Nos programmes s'adaptent à vos besoins spécifiques et sont déployés en présentiel, en ligne ou en e-learning pour une flexibilité totale.</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-4 border-b border-white/5">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Format</span>
                  <span className="text-[10px] font-mono text-white uppercase tracking-widest font-bold text-right ml-4">100% Sur-mesure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA - Restored "Plus Joli" Style */}
        <div className="mt-40 bg-[#BF9B8E] text-[#0C2E59] p-12 md:p-20 rounded-sm flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="relative z-10 text-center md:text-left">
            <p className="text-[#0C2E59]/60 mb-4 font-black text-[10px] uppercase tracking-[0.5em]">Conseil Stratégique</p>
            <h3 className="text-3xl md:text-5xl font-cinzel font-black uppercase leading-tight tracking-tighter">
              PROTÉGEONS <br /> VOTRE RÉPUTATION <br /> <span className="opacity-40 font-light italic text-[0.8em]">ET VOS VALEURS.</span>
            </h3>
          </div>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-4 bg-[#0C2E59] text-white font-black py-6 px-12 rounded-sm hover:scale-105 active:scale-95 transition-all tracking-[0.2em] uppercase text-xs shadow-2xl relative z-10"
          >
            Réserver un appel découverte
            <ArrowRight size={16} />
          </button>
          {/* Watermark "C" */}
          <div className="absolute top-0 right-0 text-[18rem] font-cinzel font-black opacity-10 -mr-12 -mt-20 leading-none pointer-events-none select-none">
            C
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConseilPage;
