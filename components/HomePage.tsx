
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import GenesisSection from './GenesisSection';
import MissionsTimeline from './MissionsTimeline';
import PercentageShowcase from './PercentageShowcase';

const HomePage: React.FC<{ onOpenContact?: () => void }> = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const missions = [
    { title: "Sensibiliser", icon: "", text: "Éveiller l’intérêt du public sur l’importance de lutter contre la corruption pour un changement de culture profond." },
    { title: "Promouvoir", icon: "", text: "Faire de la transparence un levier préventif stratégique, allié indispensable des dirigeants." },
    { title: "Clarifier", icon: "", text: "Établir un cadre solide et compréhensible en luttant contre les zones grises et les interprétations ambigües." },
    { title: "Insuffler", icon: "", text: "Promouvoir des normes éthiques élevées pour prévenir les risques de réputation et de corruption." }
  ];

  const values = [
    { name: "Empathie", icon: "", text: "Nous reconnaissons les émotions que le sujet de la corruption peut provoquer chez nos clients pour mieux comprendre leurs besoins et les aider à surmonter leurs difficultés." },
    { name: "Adaptabilité", icon: "", text: "L’univers de la compliance connaît des changements rapides. Nous accueillons avec facilité ces évolutions et restons en veille constante sur les nouveaux outils, méthodes et actualités du secteur pour fournir à nos clients les meilleurs prestations." },
    { name: "Nuance", icon: "", text: "L’anticorruption n’est pas un sujet neutre. Nous évitons les généralisations hâtives car nous admettons la complexité des situations, des opinions et des problématiques de terrain rencontrées par chacun." },
    { name: "Créativité", icon: "", text: "Nous cultivons la pensée créative ce qui nous permet de trouver des solutions innovantes et de nous améliorer constamment." },
    { name: "Communication", icon: "", text: "Nous favorisons l’expression claire, l’écoute active et la transmission d’informations sans ambiguïté." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#0C2E59]">
      {/* SECTION CITATION */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-24 h-[1px] bg-[#BF9B8E] mx-auto mb-12" />
          <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight mb-8">
            « Plus vous trouverez de raison dans un homme, plus vous trouverez en lui de probité. »
          </h2>
          <span className="text-[#BF9B8E] font-cinzel font-bold tracking-[0.3em] uppercase text-xs">
            Denis DIDEROT (1713 – 1784)
          </span>
          <div className="w-24 h-[1px] bg-[#BF9B8E] mx-auto mt-12" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onOpenContact}
            className="mt-16 bg-white/5 border border-[#BF9B8E] text-[#BF9B8E] font-black uppercase tracking-[0.4em] text-[10px] px-12 py-5 rounded-sm hover:bg-[#BF9B8E] hover:text-[#0C2E59] transition-all"
          >
            Réserver un appel
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION FARAH ZAOUI */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#BF9B8E] font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block">EXPERTISE & PARCOURS</span>
            <h3 className="text-3xl sm:text-4xl md:text-7xl font-cinzel font-black text-white leading-[0.9] mb-12 break-words">
              AU SERVICE DE <br />LA <span className="text-[#BF9B8E]">LUTTE</span> <br />ANTICORRUPTION
            </h3>
            <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
              <p>
                Farah Zaoui est une juriste de formation spécialisée en droit des collectivités territoriales, diplômée de l’Université Paris II Panthéon-Assas. Elle a forgé son expertise au cœur d’une célèbre association de lutte contre la corruption.
              </p>
              <p>
                Grâce à cette expérience de terrain, elle a traité des centaines d’alertes anticorruption et coordonné le contentieux national, formant les référents locaux au droit de l’éthique publique.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 border-[20px] border-[#BF9B8E]/10 md:-m-6 -m-4 pointer-events-none" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Farah Zaoui Probitas"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* NAISSANCE DE PROBITAS */}
      <div className="bg-white/5">
        <GenesisSection />
      </div>

      {/* NOS MISSIONS */}
      <MissionsTimeline />

      {/* KEY FIGURES SHOWCASE */}
      <div className="bg-[#0C2E59]">
        <PercentageShowcase />
      </div>

      {/* NOS VALEURS */}
      <section className="container mx-auto px-6 py-40 border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h3 className="text-6xl font-cinzel font-black text-white uppercase leading-[0.8] mb-8">NOS <br /><span className="text-[#BF9B8E]">VALEURS</span></h3>
            <p className="text-white/40">Les piliers éthiques qui guident chaque intervention de Probitas Conseil.</p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-0 text-3xl text-[#BF9B8E] font-serif select-none opacity-50">
                  {v.icon}
                </div>
                <h4 className="text-white font-cinzel font-bold text-lg mb-4 uppercase tracking-wider">{v.name}</h4>
                <p className="text-white/50 font-light text-sm leading-relaxed text-justify">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="container mx-auto px-6 py-32">
        <div className="bg-[#BF9B8E] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-[#0C2E59] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">DANS LA TÊTE D’UN COMPLIANCE OFFICER</span>
            <h3 className="text-3xl md:text-5xl font-cinzel font-black text-[#0C2E59] uppercase mb-8">LIGNE DE CONDUITE</h3>
            <p className="text-[#0C2E59]/70 font-medium mb-12 max-w-xl mx-auto">
              Recevez chaque semaine les outils indispensables pour comprendre les zones grises et décider sans subir. Des repères concrets pour prévenir les risques d’intégrité, sans jargon ni dispositifs lourds.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto relative cursor-pointer">
              <input
                type="email"
                placeholder="Votre mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-none px-6 py-4 placeholder:text-[#0C2E59]/50 text-[#0C2E59] focus:ring-2 focus:ring-[#0C2E59] outline-none flex-grow"
              />
              <button
                type="submit"
                className={`flex items-center gap-3 font-bold uppercase tracking-widest px-8 py-4 transition-all duration-500 ${status === 'success' ? 'bg-[#0C2E59] text-white' : 'bg-[#0C2E59] text-white hover:bg-[#1a4a8a]'}`}
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-5 h-5" /> Bienvenue
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" /> S'ABONNER
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>
          <div className="absolute top-0 right-0 text-[15rem] font-cinzel font-black opacity-10 -mr-20 -mt-20 leading-none">PROBITAS</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
