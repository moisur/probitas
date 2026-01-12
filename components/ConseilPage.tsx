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
    <div className="min-h-screen pt-32 bg-[#0C2E59]">
      <section className="relative py-40 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-[#BF9B8E]" />
              <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase">Conseil & Stratégie</span>
            </motion.div>

            <h2 className="text-5xl md:text-8xl font-cinzel font-black text-white leading-[0.9] uppercase mb-12">
              CONFORMITÉ <br />
              <span className="text-[#BF9B8E] italic font-serif lowercase">Sapin II</span>
            </h2>
            <p className="text-2xl text-white/50 font-serif italic max-w-2xl leading-snug">
              Déployez un programme anticorruption robuste et adapté à vos risques.
            </p>
          </div>

          {/* Signature Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <div className="bg-[#BF9B8E] p-12 rounded-2xl text-[#0C2E59]">
              <h3 className="text-3xl font-cinzel font-black uppercase mb-6">Diagnostic Flash</h3>
              <p className="font-bold text-xl mb-8 opacity-80">Plan d'action concret en 90 jours.</p>
              <ul className="space-y-4 mb-12 font-medium">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0C2E59]" /> Audit rapide du dispositif</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0C2E59]" /> Identification des zones de vulnérabilité</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#0C2E59]" /> Feuille de route priorisée</li>
              </ul>
              <button onClick={onOpenContact} className="w-full bg-[#0C2E59] text-white px-10 py-5 font-black uppercase tracking-widest text-xs">Déclencher le diagnostic</button>
            </div>
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <h3 className="text-3xl font-cinzel font-black text-[#BF9B8E] uppercase mb-6">Pack Mise à Niveau</h3>
              <p className="text-white/60 text-xl mb-8 italic">Le socle complet de votre conformité.</p>
              <ul className="space-y-4 mb-12 text-white/70">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#BF9B8E]" /> Cartographie des risques interactive</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#BF9B8E]" /> Rédaction du Code de conduite</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#BF9B8E]" /> Kit d'outillage & procédures</li>
              </ul>
              <button
                onClick={onOpenContact}
                className="group flex items-center justify-center gap-3 bg-[#BF9B8E] text-[#0C2E59] px-8 py-4 font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl shadow-[#BF9B8E]/10"
              >
                Discuter de votre projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div id="conseil-tailored" className="mb-20 pt-20 border-t border-white/5">
            <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">SUR-MESURE</span>
            <h2 className="text-4xl md:text-5xl font-cinzel font-black text-white uppercase mb-12">Missions à la Carte</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <div className="space-y-10 text-white/70 text-lg font-light leading-relaxed mb-20">
                <p>Nous vous accompagnons dans la diffusion de la culture de l’éthique au sein de votre organisation via des programmes axés sur la prévention, la détection et l'atténuation.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 py-12 border-y border-white/5">
                  {services.map((service, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rotate-45 border border-[#BF9B8E]" />
                      <span className="text-sm font-cinzel tracking-widest uppercase">{service}</span>
                    </div>
                  ))}
                </div>

                <p className="italic text-white/40 text-sm">
                  Nos prestations sont menées en collaboration avec des consultants et avocats experts du droit de la fonction publique, du droit du travail et de la compliance. Le conseil proposé est stratégique et se situe dans le strict respect de la Loi n° 71-1130.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <button className="bg-[#BF9B8E] text-white px-10 py-5 font-black uppercase tracking-widest text-xs">Réserver un appel découverte</button>
              </div>
            </div>

            <div className="lg:col-span-4 relative">
              <div className="bg-white/5 backdrop-blur-md p-10 border border-white/10 sticky top-40">
                <h3 className="text-[#BF9B8E] font-cinzel font-bold mb-6 text-xl">ADAPTABILITÉ</h3>
                <p className="text-white/50 text-sm mb-10 leading-relaxed">Nos programmes s'adaptent à vos besoins spécifiques et sont déployés en présentiel, en ligne ou en e-learning.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-[10px] font-mono text-white/40 uppercase">Format</span>
                    <span className="text-[10px] font-mono text-white uppercase">Sur-mesure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConseilPage;
